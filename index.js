var obj = {
  "rmcinty3": {
    "password": "password",
    "email": "rmcinty3@nd.edu",
    "phone": "4062493755"
  },
  "rkarim": {
    "password": "6balls",
    "email": "rkarim@nd.edu",
    "phone": "2194404899"
  },
  "cwall": {
    "password": "neptune",
    "email": "cwall@nd.edu",
    "phone": "7326931566"
  },
  "kdigiorn": {
    "password": "notdelivery",
    "email": "kdigiorn@nd.edu",
    "phone": "2392167016"
  }
};

if (!localStorage.User)
	localStorage.setItem("User", "NULL");
if (!localStorage.LoggedIn)
	localStorage.setItem("LoggedIn", "FALSE");
if (!localStorage.InsecureAccounts)
	localStorage.setItem("InsecureAccounts", JSON.stringify(obj));

if (localStorage.getItem("LoggedIn") == "TRUE") {
	document.getElementById("LoginCreateAccount").href = "index.html";
	document.getElementById("LoginCreateAccount").innerHTML = localStorage.getItem('User');
}
else {
	document.getElementById("LoginCreateAccount").href = "login.html";
	document.getElementById("LoginCreateAccount").innerHTML = "Login/Create Account";
	document.getElementById("OrderNowNav").href = "not_login.html";
	document.getElementById("OrderNowJumbo").href = "not_login.html";
	document.getElementById("ProfileDropdown").style.display = "none";

}

document.getElementById("Logout").addEventListener('click', function() {
	localStorage.User = "NULL";
	localStorage.LoggedIn = "FALSE";
});
