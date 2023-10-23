class ContactInfoFetcher {
constructor() {
  this.isContactInfoVisible = false;
  this.contactContainer = document.getElementById("contact-info");
  this.loadButton = document.getElementById("load-contact-info");

  this.loadButton.addEventListener("click", () => this.toggleContactInfo());
}

toggleContactInfo() {
  if (this.isContactInfoVisible) {
    this.hideContactInfo();
  } else {
    this.fetchContactInfo();
  }
}

fetchContactInfo() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "contact-info.json", true);

xhr.onload = () => {
  if (xhr.status === 200) {
    const contactInfo = JSON.parse(xhr.responseText);
    this.displayContactInfo(contactInfo);
  } else {
    this.contactContainer.innerHTML = "Error loading contact information.";
  }
};

  xhr.send();
  this.loadButton.textContent = "Close";
  this.isContactInfoVisible = true;
}

displayContactInfo(contactInfo) {
  this.contactContainer.innerHTML = "";

  const emailParagraph = document.createElement("p");
  emailParagraph.textContent = "Email: " + contactInfo.email;
  this.contactContainer.appendChild(emailParagraph);

  const githubParagraph = document.createElement("p");
  githubParagraph.textContent = "GitHub: " + contactInfo.github;
  this.contactContainer.appendChild(githubParagraph);

  this.contactContainer.style.display = "block";
}

hideContactInfo() {
  this.contactContainer.style.display = "none";
  this.loadButton.textContent = "Contact Info";
  this.isContactInfoVisible = false;
  }
}