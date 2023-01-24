function check(a, b) {
    a = Number(a);
    b = Number(b);
    if (a == 20 || b == 20 || a + b == 20 || a + b < 20) {
        return true;
    } else {
        return false;
    }
}


let one = prompt("Enter a number:");

let two = prompt("Enter second number:");

console.log(check(one, two));