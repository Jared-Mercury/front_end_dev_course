function check(a) {
    if (a > 100 && a < 200) {
        return "Liczba znajduje sie w przedziale"
    } else {
        return "Liczba nie znajduje sie w przedziale"
    }
}

let question = prompt("Enter a number:");

console.log(check(question));