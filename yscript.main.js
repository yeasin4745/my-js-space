/* Array Prototypes */
Array.prototype.squareSum = function () {
  return this.reduce((acc, val) => acc + val ** 2, 0);
};

Array.prototype.cubeSum = function () {
  return this.reduce((acc, val) => acc + val ** 3, 0);
};

Array.prototype.evenOnly = function () {
  return this.filter(item => item % 2 === 0);
};

Array.prototype.reverseSort = function () {
  return [...this].sort((a, b) => b - a);
};

Array.prototype.max = function () {
  return this.reduce((acc, val) => acc > val ? acc : val);
};

Array.prototype.shuffle = function () {
  return this.sort(() => Math.random() - 0.5);
};

/* String Prototypes */
String.prototype.capitalize = function () {
  return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

String.prototype.reverseLettersOnly = function () {
  return this.split(' ')
    .map(w => w.split('').reverse().join(''))
    .join(' ');
};

String.prototype.reverseWordsOnly = function () {
  return this.split(' ').reverse().join(' ');
};

String.prototype.reverseComplex = function () {
  return this.split(' ')
    .map(w => w.split('').reverse().join(''))
    .reverse()
    .join(' ');
};

String.prototype.toSarcasm = function () {
  return this.split('')
    .map((char, i) => (i % 2 ? char.toUpperCase() : char.toLowerCase()))
    .join('');
};

String.prototype.letterCount = function () {
  return this.replace(/[^a-zA-Z]/g, '').length;
};

String.prototype.wordCount = function (type = 'all') {
  if (type === 'lettersOnly') {
    return this.replace(/[^A-Za-z]/g, ' ')
      .split(' ')
      .filter(Boolean).length;
  }
  return this.trim().split(/\s+/).filter(Boolean).length;
};

/* Object Prototypes */
Object.prototype.isEmpty = function () {
  return Object.keys(this).length === 0;
};

Object.prototype.invert = function () {
  const result = {};
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      result[this[key]] = key;
    }
  }
  return result;
};

Object.prototype.deepClon = function () {
  return JSON.parse(JSON.stringify(this));
};

Object.prototype.countValues = function (type) {
  return Object.values(this).filter(val => typeof val === type).length;
};

Object.prototype.cleanFalsy = function () {
  const result = {};
  for (let key in this) {
    if (this.hasOwnProperty(key) && this[key]) {
      result[key] = this[key];
    }
  }
  return result;
};

Object.prototype.findByType = function (...types) {
  const result = {};
  for (let key in this) {
    if (this.hasOwnProperty(key) && types.includes(typeof this[key])) {
      result[key] = this[key];
    }
  }
  return result;
};

/* Global Shortcut */
window.log = function (...value) {
  console.log(...value);
};
