function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2, l = Math.sqrt(num); i <= l; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function range(f, t) {
  for (var i = f, r = []; i <= t; i++) {
    r.push(i);
  }
  return r;
}
function primeRange(from, to) {
  var a = range(from, to), r = [];
  for (var i = 0, l = a.length; i < l; i++) {
    var v = a[i];
    console.log("----", v);
    if (isPrime(v)) {
      r.push(v);
    }
  }
  return r;
}
var prmRng = primeRange(1, 200);
console.log(prmRng);