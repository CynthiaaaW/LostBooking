var firstTextInput = document.getElementsByClassName('registerFormText')[0];
var submit = document.getElementById('submit');


function whichFormClicked(){
	if (document.getElementById('customerRegister').checked == true){
		document.getElementById('customerForm').style.display = "block";
		document.getElementById('bookingAgentForm').style.display = "none";
		document.getElementById('airlineStaffForm').style.display = "none";
	} else if (document.getElementById('bookingAgentRegister').checked == true) {
		document.getElementById('bookingAgentForm').style.display = "block";
		document.getElementById('customerForm').style.display = "none";
		document.getElementById('airlineStaffForm').style.display = "none";
	} else if (document.getElementById('airlineStaffRegister').checked == true) {
		document.getElementById('airlineStaffForm').style.display = "block";
		document.getElementById('bookingAgentForm').style.display = "none";
		document.getElementById('customerForm').style.display = "none";
	}
	firstTextInput.focus();
}

function hideForm(){
	document.getElementById('customerForm').style.display = "none";
	document.getElementById('bookingAgentForm').style.display = "none";
	document.getElementById('airlineStaffForm').style.display = "none";
}


submit.addEventListener('keypress', function(e) {
	if (e.keyCode == 13 ){
		
	}
});

window.onload = hideForm();