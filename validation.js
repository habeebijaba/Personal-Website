$(document).ready(function(){
    $("#submit-form").validate({

      rules:{
        Name:{
            required:true,
            minlength:4,
			maxlength:20
        },
        Email:{
            required:true,
            minlength:4,
			email:true
        },
        Phone:{
          required:true,
          minlength:10,
		  maxlength:10
        },
		Message:{
			required:true,
			maxlength:100
		}
      },
      messages:{
		Name:{
        required:"required",
		minlength:"enterpropername",
		maxlength:"exceedlimit"
	},
	Email:{
		required:"required",
		minlength:"enterproperEmail",
		email:"NotEmail"

	},
	Phone:{
		required:"required",
		digits:true,
		minlength:"notvalid",
		maxlength:"notvalid"
		
	},
	Message:{
		required:"required",
		maxlength:"Exceeded"

	}
      }
    })
})
// $(document).ready(function(){
//   $("#submit-form").validate({

//     rules:{
//       name:{
//           required:true,
//           minlength:4
//       }
//     }
//   })
//   $("#name-field").submit(function(){
//       var name=document.getElementById("name-field").value
//       if(name.length<4){
//         $("#name-label").css({"visibility":"visible"})
//           // alert("ghjklkjhghj")
          
//       }else{
// 		$("#name-label").css({"visibility":"none"})
// 	  }

//   })
//   })




		// var nameError = document.getElementById('name-error')
		// var emailError = document.getElementById('email-error')
		// var phoneError = document.getElementById('phone-error')
		// var msgError = document.getElementById('message-error')
		// var formError = document.getElementById('form-error')

		// function validateName() {
		// 	var name = document.getElementById('firstname').value;

		// 	if (name.length == 0) {
		// 		nameError.innerHTML = 'Name is Required';
		// 		return false;
		// 	}
		// 	if (name.length < 3) {
		// 		nameError.innerHTML = 'Name contain atleast 3 character';
		// 		return false;
		// 	}
		// 	if (name.length > 20) {
		// 		nameError.innerHTML = 'Exceeded maximum limit';
		// 		return false;
		// 	}
		// 	if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/)) {
		// 		nameError.innerHTML = 'Write full name';
		// 		return false;
		// 	}
		// 	nameError.innerHTML = '<span></span>';
		// 	return true;
		// }
		// function validateEmail() {
		// 	var email = document.getElementById('Email').value;
		// 	if (email.length == 0) {
		// 		emailError.innerHTML = 'Email is Required'
		// 		return false;
		// 	}
		// 	if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
		// 		emailError.innerHTML = 'Email Invalid'
		// 		return false;
		// 	}
		// 	emailError.innerHTML = '<span></span>';
		// 	return true;
		// }

		// function validateNumber() {
		// 	var number = document.getElementById('Number').value;

		// 	if (number.length == 0) {
		// 		phoneError.innerHTML = 'Number is Required'
		// 		return false;
		// 	}

		// 	if (number.length !== 10) {
		// 		phoneError.innerHTML = 'only digits, must be 10 digits'
		// 		return false;
		// 	}
		// 	if (!number.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)) {
		// 		return false;
		// 	}
		// 	phoneError.innerHTML = '<span> </span>';
		// 	return true;
		// }

		// function validateMessage() {
		// 	var msg = document.getElementById('Message').value;
		// 	if (msg.length == 0) {
		// 		msgError.innerHTML = 'Message is Required'
		// 		return false;
		// 	}
		// 	if (msg.length < 20) {
		// 		msgError.innerHTML = 'Give proper message'
		// 		return false;
		// 	}
		// 	if (msg.length > 100) {
		// 		msgError.innerHTML = 'Give proper message'
		// 		return false;
		// 	}
		// 	msgError.innerHTML = '<span> </span>';
		// 	return true;
		// }

		// function validateForm() {
		// 	if (!validateName() & !validateEmail() & !validateNumber() & !validateMessage()) {
		// 		formError.innerHTML = '';
		// 		return false;
		// 	}else{
		// 		formError.innerHTML = '<span> </span>';
		// 		return true;
		// 	}
		// }
		
// const name=document.getElementById("name-field")
// const email=document.getElementById("email-field")
// const phone=document.getElementById("phone-field")
// const message=document.getElementById("message-field")
// const form=document.getElementById("submit-form")
// const errorElement=document.getElementById("error")

// submit-form.addEventListener("submit",(e)=>{
// 	let messages= []
// 	if(name.value=="" || name.value==null){
// 		messages.push("name is required")
// 	}
// 	e.preventDefault()

// })
	
