// =====================================================
// Contact Form
// =====================================================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    // Stop page refresh
    event.preventDefault();

    // Success message
    alert(
        "Thank you!\n\n" +
        "Your message has been sent successfully.\n\n" +
        "We appreciate your feedback!"
    );

    // Clear the form
    contactForm.reset();

});