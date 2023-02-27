let one = "Uwielbiam JavaScript";
let two = "Jestem świetnym programistą";

function check(a, b) {
    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }
}

console.log(check(one, two));