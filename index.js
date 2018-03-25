
if (!localStorage.User)
	localStorage.setItem("User", "NULL");
if (!localStorage.LoggedIn)
	localStorage.setItem("LoggedIn", "FALSE");


if (localStorage.getItem("LoggedIn") == "TRUE") {
	document.getElementById("LoginCreateAccount").href = "index.html";
	document.getElementById("LoginCreateAccount").innerHTML = localStorage.getItem('User');
}
else {
	document.getElementById("LoginCreateAccount").href = "login.html";
	document.getElementById("LoginCreateAccount").innerHTML = "Login/Create Account";
	document.getElementById("OrderNowNav").href = "not_login.html";
	document.getElementById("OrderNowJumbo").href = "not_login.html";
}

document.getElementById("Logout").addEventListener('click', function() {
	localStorage.User = "NULL";
	localStorage.LoggedIn = "FALSE";
});
