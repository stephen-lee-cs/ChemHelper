
function getMultiplier(prefix) {
	if(prefix.length === 0) {
		return 1;
	}
	if(prefix.length > 1) {
		if(prefix === "da"){
			return 10;
		} else {
			console.log("Unrecognized prefix: " + prefix);
		}
	}
	switch(prefix) {
		case "G":
		case "g":
			return 1000000000;
		case "M":
			return 1000000;
		case "k":
			return 1000;
		case "h":
			return 100
		case "d":
			return 0.1;
		case "c":
			return 0.01;
		case "m":
			return 0.001;
		case "i": // for mu (micro)
			return 0.000001;
		case "n":
			return 0.000000001;
		case "p":
			return 1E-12;
		default:
			console.log("unrecognized prefix: " + prefix);
	}
	return 1;
}

function prefixConversion(from, to, amount) {
	fromMult = getMultiplier(from);
	toMult = getMultiplier(to);
	return amount * (fromMult / toMult);
}

function usePrefix(prefix, amount) {
	mult = getMultiplier(prefix);
	return amount / mult;
}

module.exports = {
	'getMultiplier': getMultiplier,
	'prefixConversion': prefixConversion,
	'usePrefix': usePrefix,
}