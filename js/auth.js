function swipeAuth(bool) {
    if (bool) {
       document.querySelector('#register-container').classList.add('inactive-form');
		 document.querySelector('#register-container').classList.remove('active-form');
       setTimeout(() => {
           document.querySelector('#register-container').style.display = "none";
           document.querySelector('#login-container').style.display = "block";
           document.querySelector('#login-container').classList.add('active-form');
			  document.querySelector('#login-container').classList.remove('inactive-form');
       }, 200);
    } else {
       document.querySelector('#login-container').classList.add('inactive-form');
		 document.querySelector('#login-container').classList.remove('active-form');
       setTimeout(() => {
           document.querySelector('#login-container').style.display = "none";
           document.querySelector('#register-container').style.display = "block";
           document.querySelector('#register-container').classList.add('active-form');
			  document.querySelector('#register-container').classList.remove('inactive-form');
       }, 200);
    }
}

var loginTransition = document.querySelector('#login-transition');
var registerTransition = document.querySelector('#register-transition');

loginTransition.addEventListener('click', function(){
	swipeAuth(true);
});
registerTransition.addEventListener('click', function(){
	swipeAuth(false);
});

swipeAuth(true);