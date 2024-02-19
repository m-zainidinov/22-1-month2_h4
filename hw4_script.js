const array = []
let sumSquared = 0

for (let i = 1; i < 21; i++) {
    array.push(i);
    element = array[i-1];
    sumSquared += element**2
}

console.log('Given integers:', array);
console.log('The sum of squared integers:', sumSquared)