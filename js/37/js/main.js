let text = document.getElementById("text");

let add = document.getElementById("dodaj");
let remove = document.getElementById("usun");

add.onclick = function() {
    text.textContent += (" " + "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.")
}

remove.onclick = function() {
    text.textContent = " ";
}