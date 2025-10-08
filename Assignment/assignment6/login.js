class user{
	firstname;
	lastname;
	gender;
	birthDay;
	emailadresss;
	username;
	password;
	
	constructor(firstname, lastname, gender, birtdate, email, username, password){
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.birthDay = birtdate;
		this.emailadresss = email;
		this.username = username;
		this.password = password;
	}
}


const UserInfo = window.location.search;

const urlParams = new URLSearchParams(UserInfo);
const Firstname = urlParams.get('firstname');
const Lastname = urlParams.get('lastname');
const Gender = urlParams.get('gender');
const BirthDay = urlParams.get('bday');
const Emailadresss = urlParams.get('email');
const Username = urlParams.get('username');
const Password = urlParams.get('password');

var User = new user(Firstname,Lastname,Gender,BirthDay,Emailadresss,Username,Password);

var form;

window.onload = loginLoad;
function loginLoad(){
	form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var username = document.forms["myLogin"]["username"].value;
	var password = document.forms["myLogin"]["password"].value;

	if(username != User.username || password != User.password){
		alert("Username or Password incorrect");
		form.reset();
		return false;
	}
	alert("welcome");
	form.reset();
	return true;
}

			