// Typed.js initialization
var typed = new Typed(".text", {
    strings: ["Student", "Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Tab navigation
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function(event) {
        for (var j = 0; j < tabLinks.length; j++) {
            tabLinks[j].classList.remove("active-link");
        }
        for (var k = 0; k < tabContents.length; k++) {
            tabContents[k].classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        var tabName = event.currentTarget.getAttribute("data-tab");
        document.getElementById(tabName).classList.add("active-tab");
    });
}

// Form submission to Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbxvdw-sfhMzdJXrOG2X9vT6y7jVGeE2P7S4BMbkz0x1cR1WCzy5BsHnl30IE54LcQa_/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            msg.innerHTML = "Message sent successfully";
            setTimeout(() => msg.innerHTML = "", 5000);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "Error sending message";
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    // Optional: Close the menu when clicking on a link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function () {
            navbar.classList.remove('show');
        });
    });
});
