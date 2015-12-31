'use strict';

$(document).ready(function(){
var $form = $('#registerForm');
var $button = $('.submit');

	$button.hover(function(e)
		{
			$button.css(
				{backgroundColor: '#88C470'});

		},
		function(e)
		{
			$button.css(
				{backgroundColor: '#1D1D2D'});
		}
	);
		$button.click(function(e){
		e.preventDefault();
		var $big= $('.big');
		var $nameInput =$('.nameInput');
		var $nameError =$('.nameError');
		var $emailInput =$('.emailInput');
		var $emailError =$('.emailError');
		var $webInput =$('.webInput');
		var $webError =$('.webError');
		var $messInput =$('.mess');
		var $messError =$('.messError');
		var $success = $('.success');
		

		if($nameInput.val()===('')){
			$nameError.html('Name cannot be left empty');
		}
		else if($emailInput.val()===('' || !"@")){
			$emailError.html('Email must contain an \'@\'.');
		}
		if($webInput.val===('')){
			$webError.html('Website must contain an http://');
		}
		else if($messInput.val()===('')){
			$messError.html('Messages cannot be left empty');
		}
		else{
			$big.css({display:'none'});
			$success.css({display:'block'});
			$success.html("Thank you for contacting us "+$nameInput.val()+". We have received your message and will be in  touch with you shortly.");
			
			

		}
	});
});
