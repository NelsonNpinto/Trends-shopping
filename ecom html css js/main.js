let card = document.querySelector(".trend");
let card2 = document.getElementById("trendsec");
let mainpage = document.querySelector(".main");
let blog = document.querySelector(".trends");
let abouts = document.querySelector(".about")
let contactsus = document.querySelector(".contact")
let cart = document.querySelector(".cart")



function homes() {

    mainpage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "block";
    abouts.style.display = "none";
    contactsus.style.display = "none";

    document.getElementById("blogc").style.color = "black"
    document.getElementById("home").style.color = "rgb(82, 221, 221)"
    document.getElementById("shops").style.color = "black"
    document.getElementById("contact").style.color = "black"
    document.getElementById("about").style.color = "black"

}

function shops() {
    mainpage.style.display = "none";
    blog.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";
    abouts.style.display = "none";
    contactsus.style.display = "none";


    document.getElementById("blogc").style.color = "black"
    document.getElementById("home").style.color = "black"
    document.getElementById("shops").style.color = "rgb(82, 221, 221)"
    document.getElementById("contact").style.color = "black"
    document.getElementById("about").style.color = "black"

}

function blogs() {
    mainpage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "block";
    abouts.style.display = "none";
    contactsus.style.display = "none";

    document.getElementById("blogc").style.color = "rgb(82, 221, 221)"
    document.getElementById("home").style.color = "black"
    document.getElementById("shops").style.color = "black"
    document.getElementById("contact").style.color = "black"
    document.getElementById("about").style.color = "black"

}

function about() {
    mainpage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    abouts.style.display = "block";
    blog.style.display = "none";
    contactsus.style.display = "none";


    document.getElementById("blogc").style.color = "black"
    document.getElementById("home").style.color = "black"
    document.getElementById("shops").style.color = "black"
    document.getElementById("contact").style.color = "black"
    document.getElementById("about").style.color = "rgb(82, 221, 221)"

}


function contacts() {

    mainpage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    abouts.style.display = "none";
    contactsus.style.display = "block";
    blog.style.display = "none";


    document.getElementById("blogc").style.color = "black"
    document.getElementById("home").style.color = "black"
    document.getElementById("shops").style.color = "black"
    document.getElementById("about").style.color = "black"
    document.getElementById("contact").style.color = "rgb(82, 221, 221)"

}

function show(img) {
    let newimg = document.getElementById("newimg");
    
    newimg.src=img.src;

    mainpage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    abouts.style.display = "none";
    contactsus.style.display = "none";
    blog.style.display = "none";

    document.querySelector(".cart").style.display="flex";
}

function addtocard () {
    alert("Added to Cart")
    location.reload()
}

function back () {
    mainpage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "block";
    abouts.style.display = "none";
    contactsus.style.display = "none";
    cart.style.display = "none";


}