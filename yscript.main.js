// yscript.main.js

// ✅ 1. cubeSum: sum of cubes of array elements
Array.prototype.cubeSum = function () {
  return this.reduce((acc, val) => acc + val ** 3, 0);
};

// ✅ 2. evenOnly: filter only even numbers
Array.prototype.evenOnly = function () {
  return this.filter(num => typeof num === 'number' && num % 2 === 0);
};

// ✅ 3. factorial: simple factorial calculator
function factorial(n) {
  if (typeof n !== 'number' || n < 0) throw new Error("Invalid input");
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// ✅ 4. deepKeys: extract all keys from nested object
function deepKeys(obj, prefix = '') {
  if (typeof obj !== 'object' || obj === null) return [];
  return Object.entries(obj).flatMap(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    return typeof value === 'object' ? [fullKey, ...deepKeys(value, fullKey)] : [fullKey];
  });
}

// ✅ 5. YScript: Toy DSL compiler → runs limited commands
function YScript(input) {
  try {
    const lines = input.split('\n').map(l => l.trim()).filter(Boolean);
    lines.forEach(line => {
      if (line.startsWith('print ')) {
        const toPrint = line.replace('print ', '');
        console.log(eval(toPrint));
      } else if (line.startsWith('let ')) {
        const exec = line.replace('let ', 'var ');
        eval(exec);
      } else {
        eval(line);
      }
    });
  } catch (err) {
    console.error('YScript Error:', err.message);
  }
}
