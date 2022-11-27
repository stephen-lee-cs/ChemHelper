const c = 2.998e+8; // speed of light (m/s)
const h = 6.626e-34; // planck's constant (J*s)
const RYDBERGH = 2.179e-18; // ground energy for e- in hydrogen (J)
const utils = require('./utils.js');

// e = LAMBDA*MU
// speed of light = wavelength * frequency
function lightWaveStats(amount, unit) {
	let frequency = undefined;
	let wavelength = undefined;
	let multiplier = 1;
	if(unit.slice(-1) == "m" ) {
		//meters - wavelength
		multiplier = utils.getMultiplier(unit.slice(0, -1));
		wavelength = amount * multiplier;
		frequency = c / wavelength;
	} else if(unit.slice(-2) == "Hz" || unit.slice(-2) == "hz") {
		// hertz - frequency
		multiplier = utils.getMultiplier(unit.slice(0, -2));
		frequency = amount * multiplier;
		wavelength = c / frequency;
	} else {
		console.log("Unrecognized unit: " + unit);
		console.log("Expected meters or hertz");
	}
	return {
		'freq_Hz': frequency,
		'wvlen_m': wavelength,
	}
}

// E(photon) = hv = hc/LAMBDA
// energy of photon = h * frequency = h * c/wavelength
function photonStats(amount, unit) {
	let frequency = undefined;
	let wavelength = undefined;
	let energy = undefined;
	let multiplier = 1;
	if(unit.slice(-1) == "m" ) {
		//meters - wavelength
		multiplier = utils.getMultiplier(unit.slice(0, -1));
		wavelength = amount * multiplier;
		frequency = c / wavelength;
		energy = h * frequency;
	} else if(unit.slice(-2) == "Hz" || unit.slice(-2) == "hz") {
		// hertz - frequency
		multiplier = utils.getMultiplier(unit.slice(0, -2));
		frequency = amount * multiplier;
		wavelength = c / frequency;
		energy = h * frequency;
	} else if (unit.slice(-1) == "J" || unit.slice(-1) == "j") {
		// joules - energy
		multiplier = utils.getMultiplier(unit.slice(0, -1));
		energy = amount * multiplier;
		frequency = energy / h;
		wavelength = c / frequency; 
	} else {
		console.log("Unrecognized unit: " + unit);
		console.log("Expected meters, hertz, or Joules");
	}
	return {
		'freq_Hz': frequency,
		'wvlen_m': wavelength,
		'energy_J': energy,
	}
}

function energyLevelH(n) {
	return -RYDBERGH / (n * n);
}

function energyLevelDiffH(nStart, nEnd) {
	let ends = 1 / (nEnd * nEnd);
	let starts = 1 / (nStart * nStart);
	const deltaE = -RYDBERGH * (ends - starts);
	const {freq_Hz, wvlen_m } = photonStats(deltaE, "J");
	return {
		'deltaE_J': deltaE,
		'freq_Hz': freq_Hz,
		'wvlen_m': wvlen_m,
	};
}

function matterWavelength(m, v) {
	return h / (m*v);
}

function orbitalStats(description) {
	// description = orbital name eg "1s", "2p", "3d"
	// or description = n,l eg "3,1" (3p)

	const pieces = description.split(",").map(s => s.trim());
	let n, l = 0;
	let number, letter = "";
	if(pieces.length == 2) {
		[n, l] = pieces.map(s => {
			return s == "" ? undefined : Number(s);
		});
		// validity check
		if(n <= 0 || l >= n) {
			console.error("invalid lmn description");
			return undefined;
		}
		number = "" + n;
		switch (l) {
			case 0:
				letter = "s";
				break;
			case 1:
				letter = "p";
				break;
			case 2:
				letter = "d";
				break;
			case 3:
				letter = "f";
				break;
			default:
				letter = "g"
				var c= letter.charCodeAt(0);
				letter = String.fromCharCode(c + (l - 4));
				break;
		}
	} else if (pieces.length == 1){
		console.log("orbital name");
		// validity check
		if(pieces[0].length !== 2) {
			console.error("invalid orbital name: " + pieces[0]);
			return undefined;
		}
		const orbital = pieces[0];
		[number, letter] = orbital;
		n = Number(orbital[0]);
		switch (orbital[1]) {
			case "s":
				l = 0;
				break;
			case "p":
				l = 1;
				break;
			case "d":
				l = 2;
				break;
			case "f":
				l = 3;
				break;
			default:
				var ccode = orbital[1].charCodeAt(0);
				var gcode = "g".charCodeAt(0);
				l = ccode - gcode + 4;
		}
		if(n <= 0 || l >= n) {
			console.error("invalid orbital name: " + orbital);
			return undefined;
		}
	} else {
		console.error("invalid orbital description: " + description);
	}
	return {
		'orbital': number + letter,
		'n': n,
		'l': l
	}
}

module.exports = {
	'h': h,
	'c': c,
	'lightWaveStats': lightWaveStats,
	'photonStats': photonStats,
	'energyLevelH': energyLevelH,
	'energyLevelDiffH': energyLevelDiffH,
	'matterWavelength': matterWavelength,
	'orbitalStats': orbitalStats
}