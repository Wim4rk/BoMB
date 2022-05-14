var contact = document.getElementById('info');
const email = document.createElement("a");

email.setAttribute('href', 'mailto:info@borgbrass.se');
email.textContent = "info@borgbrass.se";

contact.appendChild(email);
