const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    const contactData = {
        name: name,
        email: email,
        message: message
    };

    try {
        const response = await fetch("http://localhost:3000/submit-contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactData)
        });

        const data = await response.json();

        console.log(data);

        responseMessage.textContent = data.message;

        form.reset();

    } catch (error) {
        console.log(error);

        responseMessage.textContent = "Something went wrong. Please try again.";
    }
});