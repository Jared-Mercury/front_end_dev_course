function fill() {

    let first_name = document.getElementById("first").value;
    let last_name = document.getElementById("last").value;
    let telephone = document.getElementById("tel").value;

    let fname = document.getElementById("name");
    let surname = document.getElementById("surname");
    let phone = document.getElementById("phone");

    fname.innerText = first_name;
    surname.innerText = last_name;
    phone.innerText = telephone;
}

let but = document.querySelector("button");

but.onclick = fill;