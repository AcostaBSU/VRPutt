function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const message = document.getElementById("formMessage");
    message.textContent = "Message sent successfully (mock).";
    message.style.color = "#CECECE";

    this.reset();
});