
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById("phone-error")
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName() {
	var name = document.getElementById('contact-name').value.trim();

	if (name.length == 0) {
		nameError.innerHTML = 'Name is Required';
		nameError.style.color = 'red'

		return false;
	}

	if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
		nameError.innerHTML = 'Write a FullName';
		nameError.style.color = 'red'
		return false;
	}

	nameError.innerHTML = '';
	document.getElementById("contact-name").style.borderColor = "green"
	document.getElementById("contact-name").style.color = "green"
	return true;
}

function validateEmail() {
	var email = document.getElementById('contact-email').value.trim();
	if (email.length == 0) {
		emailError.innerHTML = 'Email is Required';
		emailError.style.color = 'red'

		document.getElementById("contact-email").style.borderColor = "red"
		document.getElementById("contact-email").style.color = "red"

		return false;
	}

	if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
		emailError.innerHTML = 'Email is Invalid';
		emailError.style.color = 'red'
		return false;
	}
	emailError.innerHTML = '';
	document.getElementById("contact-email").style.borderColor = "green"
	document.getElementById("contact-email").style.color = "green"

	return true;
}
function validatePhone() {
	var phone = document.getElementById("contact-phone").value.trim();
	if (phone.length == 0) {
		phoneError.innerHTML = 'phone number is Required';
		phoneError.style.color = 'red'
		return false;
	}
	if (phone.length != 10) {
		phoneError.innerHTML = "Enter Valid phonenumber"
		phoneError.style.color = "red"



		return false

	}
	if (!phone.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)) {
		phoneError.innerHTML = "Phonenumber must be digits"
		phoneError.style.color("red")


		return false;
	}

	phoneError.innerHTML = ""
	document.getElementById("contact-phone").style.borderColor = "green"
	document.getElementById("contact-phone").style.color = "green"
	return true;

}

function validateMessage() {
	console.log("hai")
	var message = document.getElementById('contact-message').value.trim();
	var Required = 15;
	var left = Required - message.length;

	if (left > 0) {
		messageError.innerHTML = left + 'more character Required';
		messageError.style.color = 'red'
		return false;

	}
	messageError.innerHTML = '';
	document.getElementById("contact-message").style.borderColor = "green"
	document.getElementById("contact-message").style.color = "green"
	return true;

}