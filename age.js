var birth = new Date('07/9/1997');
var check = new Date();
var milliDay = 1000 * 60 * 60 * 24;
var ageInDays = (check - birth) / milliDay;
var ageInYears = Math.floor(ageInDays / 365);
console.log(ageInYears);