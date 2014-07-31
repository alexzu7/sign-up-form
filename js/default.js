(function () {
	'use strict';
	
	/**
	* reset errors
	*/
	var reset = function(){
				
		document.getElementById('first-name-error').innerHTML  = '';
		document.getElementById('last-name-error').innerHTML  = '';
		document.getElementById('age-error').innerHTML  = '';
		document.getElementById('password-error').innerHTML  = '';
		document.getElementById('email-error').innerHTML  = '';
		document.getElementById('url-error').innerHTML  = '';
	};
	
	/**
	* returns true if any errors
	* otherwise returns false
	*/
	var hasErrors = function(){
		
		var firstNameEl = document.getElementById('first-name'),
			lastNameEl = document.getElementById('last-name'),
			ageEl = document.getElementById('age'),
			passwordEl = document.getElementById('password'),
			emaildEl = document.getElementById('email'),
			urldEl = document.getElementById('url'),
			isError = false;
			
		if(document.getElementById('first-name').value.length === 0){			
			isError = true;
			document.getElementById('first-name-error').innerHTML = 'This field is required.';
		}
		
		if(document.getElementById('last-name').value.length === 0){			
			isError = true;
			document.getElementById('last-name-error').innerHTML = 'This field is required.';
		}
		
		if(document.getElementById('age').value.length === 0){			
			isError = true;
			document.getElementById('age-error').innerHTML = 'This field is required.';
		}
		else{
			if(isNaN(parseInt(document.getElementById('age').value))){
				isError = true;
				document.getElementById('age-error').innerHTML = 'This field should have only numbers.';
			}
		}
		
		if(document.getElementById('password').value.length === 0){			
			isError = true;
			document.getElementById('password-error').innerHTML = 'This field is required.';
		}
		
		if(document.getElementById('email').value.length === 0){			
			isError = true;
			document.getElementById('email-error').innerHTML = 'This field is required.';
		}
		else{
			if(document.getElementById('email').value.indexOf('@') == -1){
				isError = true;
				document.getElementById('email-error').innerHTML = 'The email is not valid.';
			}
		}
		
		if(document.getElementById('url').value.length === 0){			
			isError = true;
			document.getElementById('url-error').innerHTML = 'This field is required.';
		}
		else{
			if (!(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(document.getElementById('url').value))){
				isError = true;
				document.getElementById('url-error').innerHTML = 'This URL is not valid.';
			}
		}
		
		return isError;
	};
		
	var formElement = document.getElementById('sign-up-form');
	
	formElement.addEventListener('submit', function(e){
			
		reset();
		
		if(hasErrors()){
			e.preventDefault();
		}
		
	}, false);
})();

