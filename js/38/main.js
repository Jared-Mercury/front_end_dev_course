function calculator(a, b) {
    a = Number(a);
    b = Number(b);

    let add = a + b;
    let sub = a - b;
    let multi = a * b;

    if (add < 0) {
        console.log("1. Wynik jest nieprawidlowy.");
    } else {
        console.log("1.Wynik dodawania wynosi " + add);
    }

    if (sub < 0) {
        console.log("2. Wynik jest nieprawidlowy.");
    } else {
        console.log("2.Wynik odejmowania wynosi " + sub);
    }

    if (multi < 0) {
        console.log("3. Wynik jest nieprawidlowy.");
    } else {
        console.log("3.Wynik mnozenia wynosi " + multi);
    }

}

let one = prompt("Enter a number:");

let two = prompt("Enter second number:");

calculator(one, two);