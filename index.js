let number = parseInt(prompt("eded daxil edin:"));
let primeDivisors = [];
for (let i = 2; i <= number; i++) {
    while (number % i === 0) {
        primeDivisors.push(i);
        number /= i;
    }
}
console.log("Sade bolenler: " + primeDivisors);