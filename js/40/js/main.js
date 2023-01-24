let fname = document.getElementById("name");
let surname = document.getElementById("surname");
let phone = document.getElementById("phone");


let first_name = document.getElementById("first").value;
let last_name = document.getElementById("last").value;
let telephone = document.getElementById("tel").value;


function fill(a, b, c) {
    fname.textContent = a;
    surname.textContent = b;
    phone.textContent = c;
}

let but = document.querySelector("button");

but.onclick = fill(first_name, last_name, telephone);