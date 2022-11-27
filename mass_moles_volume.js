const AVOGADRO = 6.022e+23;

const atomicWeights = {
  H: ['Hydrogen', 1, 1.008],
  He: ['Helium', 2, 4.0026],
  Li: ['Lithium', 3, 6.94],
  Be: ['Beryllium', 4, 9.0122],
  B: ['Boron', 5, 10.81],
  C: ['Carbon', 6, 12.011],
  N: ['Nitrogen', 7, 14.007],
  O: ['Oxygen', 8, 15.999],
  F: ['Flourine', 9, 18.998],
  Ne: ['Neon', 10, 20.18],
  Na: ['Sodium', 11, 22.99],
  Mg: ['Magnesium', 12, 24.305],
  Al: ['Aluminium', 13, 26.982],
  Si: ['Silicon', 14, 28.085],
  P: ['Phosphorus', 15, 30.974],
  S: ['Sulfur', 16, 32.06],
  Cl: ['Chlorine', 17, 35.45],
  Ar: ['Argon', 18, 39.95],
  K: ['Potassium', 19, 39.098],
  Ca: ['Calcium', 20, 40.0784],
  Sc: ['Scandium', 21, 44.956],
  Ti: ['Titanium', 22, 47.867],
  V: ['Vanadium', 23, 50.942],
  Cr: ['Chromium', 24, 51.996],
  Mn: ['Maganese', 25, 54.938],
  Fe: ['Iron', 26, 55.8452],
  Co: ['Cobalt', 27, 58.933],
  Ni: ['Nickel', 28, 58.693],
  Cu: ['Copper', 29, 63.5163],
  Zn: ['Zinc', 30, 65.382],
  Ga: ['Gallium', 31, 69.723],
  Ge: ['Germanium', 32, 72.6308],
  As: ['Arsenic', 33, 74.922],
  Se: ['Selenium', 34, 78.9718],
  Br: ['Bromine', 35, 79.904],
  Kr: ['Krypton', 36, 83.7982],
  Rb: ['Rubidium', 37, 85.468],
  Sr: ['Strontium', 38, 87.62],
  Y: ['Yttrium', 39, 88.906],
  Zr: ['Zirconium', 40, 91.2242],
  Nb: ['Niobium', 41, 92.906],
  Mo: ['Molybdenum', 42, 95.95],
  Tc: ['Technetium', 43, undefined],
  Ru: ['Ruthenium', 44, 101.072],
  Rh: ['Rhodium', 45, 102.91],
  Pd: ['Palladium', 46, 106.42],
  Ag: ['Silver', 47, 107.87],
  Cd: ['Cadmium', 48, 112.41],
  In: ['Indium', 49, 114.82],
  Sn: ['Tin', 50, 118.71],
  Sb: ['Antimony', 51, 121.76],
  Te: ['Tellurium', 52, 127.603],
  I: ['Iodine', 53, 126.9],
  Xe: ['Xenon', 54, 131.29],
  Cs: ['Caesium', 55, 132.91],
  Ba: ['Barium', 56, 137.33],
  La: ['Lanthanum', 57, 138.91],
  Ce: ['Cerium', 58, 140.12],
  Pr: ['Praseodymium', 59, 140.91],
  Nd: ['Neodymium', 60, 144.24],
  Pm: ['Promethium', 61, undefined],
  Sm: ['Samarium', 62, 150.362],
  Eu: ['Europium', 63, 151.96],
  Gd: ['Gadolinium', 64, 157.253],
  Tb: ['Terbium', 65, 158.93],
  Dy: ['Dysprosium', 66, 162.5],
  Ho: ['Holmium', 67, 164.93],
  Er: ['Erbium', 68, 167.26],
  Tm: ['Thulium', 69, 168.93],
  Yb: ['Ytterbium', 70, 173.05],
  Lu: ['Lutetium', 71, 174.97],
  Hf: ['Hafnium', 72, 178.492],
  Ta: ['Tantalum', 73, 180.95],
  W: ['Tungsten', 74, 183.84],
  Re: ['Rhenium', 75, 186.21],
  Os: ['Osmium', 76, 190.233],
  Ir: ['Iridium', 77, 192.22],
  Pt: ['Platinum', 78, 195.08],
  Au: ['Gold', 79, 196.97],
  Hg: ['Mercury', 80, 200.59],
  Tl: ['Thallium', 81, 204.38],
  Pb: ['Lead', 82, 207.2],
  Bi: ['Bismuth', 83, 208.98],
  Po: ['Polonium', 84, undefined],
  At: ['Astatine', 85, undefined],
  Rn: ['Radon', 86, undefined],
  Fr: ['Francium', 87, undefined],
  Ra: ['Radium', 88, undefined],
  Ac: ['Actinium', 89, undefined],
  Th: ['Thorium', 90, 232.04],
  Pa: ['Protactinium', 91, 231.04],
  U: ['Uranium', 92, 238.03],
  Np: ['Neptunium', 93, undefined],
  Pu: ['Plutonium', 94, undefined],
  Am: ['Americium', 95, undefined],
  Cm: ['Curium', 96, undefined],
  Bk: ['Berkelium', 97, undefined],
  Cf: ['Californium', 98, undefined],
  Es: ['Einsteinium', 99, undefined],
  Fm: ['Fermium', 100, undefined],
  Md: ['Mendelevium', 101, undefined],
  No: ['Nobelium', 102, undefined],
  Lr: ['Lawrencium', 103, undefined],
  Rf: ['Rutherfordium', 104, undefined],
  Db: ['Dubnium', 105, undefined],
  Sg: ['Seaborgium', 106, undefined],
  Bh: ['Bohrium', 107, undefined],
  Hs: ['Hassium', 108, undefined],
  Mt: ['Meitnerium', 109, undefined],
  Ds: ['Darmstadtium', 110, undefined],
  Rg: ['Roentgenium', 111, undefined],
  Cn: ['Copernicium', 112, undefined],
  Nh: ['Nihonium', 113, undefined],
  Fl: ['Flerovium', 114, undefined],
  Mc: ['Moscovium', 115, undefined],
  Lv: ['Livermorium', 116, undefined],
  Ts: ['Tennesine', 117, undefined],
  Og: ['Oganesson', 118, undefined]
}

function nameFromSymbol(symbol) {
  return atomicWeights[symbol][0];
}

function atomicNumber(symbol) {
  return atomicWeights[symbol][1];
}

function atomicWeight(symbol) {
  return atomicWeights[symbol][2];
}

function symbolFromName(name) {
  for (symbol in atomicWeights) {
    if (atomicWeights[symbol][0] == name) {
      return symbol;
    }
  }
  console.log("no symbol found for:", name)
}

// uses mole-volume, mole-mass, mole-number relations to calculate all from one
function amountStats(molarMass, amount, unit) {
  unit = unit.toLowerCase();
  moles = undefined;
  atoms = undefined;
  volume = undefined;
  mass = undefined;

  switch (unit) {
    case "moles":
    case "mole":
    case "mol":
      moles = amount;
      atoms = AVOGADRO * moles;
      volume = moles * 22.4;
      mass = molarMass * moles;
      break;
    case "atoms":
    case "atom":
      atoms = amount;
      moles = atoms / AVOGADRO;
      volume = moles * 22.4;
      mass = molarMass * moles;
      break;
    case "liters":
    case "l":
    case "liter":
    case "litre":
    case "litres":
      volume = amount;
      moles = volume / 22.4;
      atoms = AVOGADRO * moles;
      mass = molarMass * moles;
      break;
    case "grams":
    case "gram":
    case "g":
      mass = amount;
      moles = mass / molarMass;
      atoms = AVOGADRO * moles;
      volume = moles * 22.4;
      break;
    default:
      console.error("Unit: " + unit + " not recognized");
      return undefined;
  }

  return {
    'moles': moles,
    'volume': volume,
    'mass': mass,
    'atoms': atoms,
  }
}

function atomicStats(symbol, amount, unit) {
  const weight = atomicWeight(symbol);
  const { moles, volume, mass, atoms } = amountStats(weight, amount, unit);

  return {
    'element': nameFromSymbol(symbol),
    'molar_mass': weight,
    'moles': moles,
    'volume': volume,
    'mass': mass,
    'atoms': atoms,
  }
}

// Parses a molecular formula and calculates the molar mass
function molecularWeight(molecularFormula) {
  // Parse the molecular formula
  let curStack = [];				// Holds current working stack
  let stacks = [];				// Holds on hold stacks (for parenth)
  let curElement = "";			// Current element symbol
  let curNumber = "";				// Current decimal number
  let lastIsNumber = false;		// flag for if most recent char is digit
  let close = false;				// flag for if should resolve close parenth
  let numParenth = 0;				// Counter ++ for (, -- for ). Checks for parenths
  let expr = "";					// 

  function checkElement() {
    if (curElement !== "") {
      // We are encountering a new element 
      // immediately after an old one
      curStack.push(atomicWeight(curElement));
      curElement = "";
    }
  }
  function checkNumber() {
    if (curNumber !== "") {
      let newExprObj = {}
      newExprObj[curNumber] = [curStack.pop()];
      curStack.push(newExprObj);
      curNumber = "";
    }
  }
  function wrapCurStack() {
    let newExprObj = {}
    if (curNumber !== "") {
      newExprObj[curNumber] = curStack;
    } else {
      newExprObj['1'] = curStack;
    }
    curStack = [newExprObj].concat(stacks.pop());
  }

  function normalBehavior(c) {
    if (!isNaN(parseInt(c))) {
      // c is a number
      checkElement();
      curNumber += c;

      lastIsNumber = true;
    } else if (c == "(") {
      if (lastIsNumber) {
        checkElement();
        checkNumber();
      } else {
        checkNumber();
        checkElement();
      }
      if (curStack.length > 0) {
        const newStack = [{ '1': [...curStack] }];
        stacks.push(newStack);
      } else {
        stacks.push([1])
      }
      curStack = [];
      numParenth += 1;
    } else if (c == ")") {
      if (lastIsNumber) {
        checkElement();
        checkNumber();
      } else {
        checkNumber();
        checkElement();
      }
      numParenth -= 1;
      close = true;
    } else if (c == c.toUpperCase()) {
      // This is the beginning of a new atomic symbol
      checkElement();
      checkNumber();
      curElement = c;
      lastIsNumber = false;
    } else if (c == c.toLowerCase()) {
      // This is the end of an old atomic symbol
      if (curElement == "") {
        console.error("curElement is empty but found lowercase");
      }
      curElement += c;
      lastIsNumber = false;
    } else {
      console.log("unrecognized token: " + c);
    }
  }

  molecularFormula.split("").forEach((c) => {
    if (close) {
      if (isNaN(parseInt(c))) {
        // collapse
        close = false;
        let newExprObj = {}
        if (curNumber !== "") {
          newExprObj[curNumber] = curStack;
        } else {
          newExprObj['1'] = curStack;
        }
        curStack = [newExprObj].concat(stacks.pop());
        curNumber = "";
      }
    }
    normalBehavior(c);
  })
  // Error checking
  if (numParenth !== 0) {
    console.error("Parenthetical error");
    console.log(numParenth);
  }
  if (stacks.length > 1) {
    console.log("Too much in stacks");
    console.log(stacks);
  }
  // Handle last character not processed
  if (close) {
    checkElement();
    let newExprObj = {}
    if (lastIsNumber) {
      newExprObj[curNumber] = curStack;
    } else {
      newExprObj['1'] = curStack;
    }
    if (stacks.length > 0) {
      newResultArr = [newExprObj].concat(stacks.pop());
      expr = JSON.stringify({ '1': newResultArr });
    } else {
      expr = JSON.stringify(newExprObj);
    }
  } else if (lastIsNumber) {
    checkElement();
    checkNumber();
    expr = JSON.stringify({ '1': curStack })
  } else {
    checkElement();
    expr = JSON.stringify({ '1': curStack })
  }
  // convert parsed expression into single number
  function simplify(moleculeExpr) {
    // {'num': [moleculeExpr]}
    // or float
    if (!isNaN(moleculeExpr)) {
      return moleculeExpr;
    }
    const factor = parseFloat(Object.keys(moleculeExpr)[0]);
    const inners = moleculeExpr[factor];
    return factor * inners.reduce((acc, e) => simplify(e) + acc, 0);
  }
  console.log(expr);
  return simplify(JSON.parse(expr));
}

function molecularStats(formula, amount, unit) {
  const weight = molecularWeight(formula);
  const { moles, volume, mass, atoms } = amountStats(weight, amount, unit);

  return {
    'molecule': formula,
    'molar_mass': weight,
    'moles': moles,
    'volume': volume,
    'mass': mass,
    'atoms': atoms,
  }
}

module.exports = {
  'AVOGADRO': AVOGADRO,
  'nameFromSymbol': nameFromSymbol,
  'atomicNumber': atomicNumber,
  'atomicWeight': atomicWeight,
  'symbolFromName': symbolFromName,
  'molecularWeight': molecularWeight,
  'atomicStats': atomicStats,
  'molecularStats': molecularStats,
}