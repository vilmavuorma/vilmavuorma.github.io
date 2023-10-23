class ContactFormHandler {
  constructor() {
    this.contactForm = document.getElementById("contact-form");
    this.confirmationMessage = document.getElementById("confirmation-message");
    this.contactForm.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();

  try {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageTextarea = document.getElementById("message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageTextarea.value.trim();

    if (!name) {
      throw new Error("Please type in name!");
    }
    if (!email) {
      throw new Error("Please type in email!");
    }
    if (!message) {
      throw new Error("Please type in message!");
    }

    setTimeout(() => {
      alert("Message sent!");
      this.contactForm.reset();
    }, 1000);
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  }
}