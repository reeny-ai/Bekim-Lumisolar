const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Change hamburger icon to X
        const icon = menuToggle.querySelector('i');

        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Create WhatsApp message
    let whatsappMessage =
        "Hello Bekim Lumisolar,%0A%0A" +
        "*New Website Enquiry*%0A%0A" +
        "*Name:* " + encodeURIComponent(name) + "%0A" +
        "*Email:* " + encodeURIComponent(email) + "%0A" +
        "*Phone:* " + encodeURIComponent(phone) + "%0A" +
        "*Subject:* " + encodeURIComponent(subject) + "%0A" +
        "*Message:* " + encodeURIComponent(message);

    // Open WhatsApp
    window.open(
        "https://wa.me/254720235546?text=" + whatsappMessage,
        "_blank"
    );
});
