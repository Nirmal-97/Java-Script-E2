const arr1 = [1, 2, 3, 5, 6, 7];
const arr2 = [6, 3];
const commonValue = [];
arr1.map(num1 => {
    arr2.map(num2 => num1 === num2 && commonValue.push(num1))
})
console.log(commonValue);

const arr3 = [1, 2, 3, 5, 6, 7];
const arr4 = [6, 3];
const commonValues = [];
arr3.forEach(num3 => {
    arr4.forEach(num4 => num3 === num4 && commonValues.push(num3))
})
console.log(commonValues);