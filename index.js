// package imports
const utils = require('./utils.js');
const mmv = require('./mass_moles_volume.js');
const leo = require('./light_energy_orbitals.js');

// Functions I'm currently working on:

function electronConfiguration(ion) {
	// Parse the ion 
	let lastChar = ion.charAt(ion.length - 1);
	if(lastChar == "-") {

	} else if (lastChar == "+") {

	} else {
		
	}
	console.log(lastChar);
}

function matchElectronConfiguration(config) {

}

// index.js level methods:

function packages() {
	console.log("Available packages: ");
	console.log("mmv \t- contains mass-mole-volume conversion functions");
	console.log("leo \t- contains light/matter wave and orbital stat functions");
	console.log("utils \t- contains metric prefix conversion functions");
	console.log("")
}

function help() {
	console.log("Enter a package name to see list of functions/constants");
	console.log("Enter <module_name>.<function_name>(args) to call a function");
	console.log("You can console.log a function's toString to get its source");
	console.log("Ex: console.log(mmv.atomicNumber.toString()");
	console.log("")
	console.log("Enter packages() for list of available packages")
}

console.log("Welcome to ChemFormulas");
console.log("This contains some chem related JS functions I've created");
console.log("You can call them from the console");
console.log("Call 'help()' for more details");
console.log("Call 'packages()' for a list of packages");