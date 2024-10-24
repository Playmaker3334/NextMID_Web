// Function to send email using EmailJS
function sendEmail(form, button, messageContainer) {
    button.textContent = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_gpmxphd"; // Change this to your template ID

    // Get the email from the form
    const userEmail = form.querySelector('input[name="email"]').value;

    // Prepare the form data to send to EmailJS
    const data = {
        to_email: userEmail, // Change 'to_email' to the name you used in your EmailJS template
        // You can add more fields if needed
    };

    // Send the form data along with userEmail
    emailjs.send(serviceID, templateID, data).then(
        () => {
            button.textContent = "Get Started";
            messageContainer.innerHTML = '<p>Subscription successful!</p>';
        },
        (err) => {
            button.textContent = "Get Started";
            messageContainer.innerHTML = `<p>Error: ${JSON.stringify(err)}</p>`;
        }
    );
}

// Handle footer form submission
const footerForm = document.getElementById("footer-form");
const footerMessage = document.getElementById("footer-message");
const footerButton = footerForm.querySelector('button');

footerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    sendEmail(footerForm, footerButton, footerMessage);
});

//this code hasn't been ofuscated, im still working with it.