'use strict';

$(document).on('ready',function(){
var $formBox= $('.formBox');
var $button = $('.submit');
var $nameInput =$('.nameInput');
var $nameError =$('.nameError');
var $emailInput =$('.emailInput');
var $emailError =$('.emailError');
var $webInput =$('.webInput');
var $webError =$('.webError');
var $messInput =$('.messInput');
var $messError =$('.messError');
var $successBox = $('.successBox');

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
		console.log('button pressed');
		if($nameInput.val()===('')){
			console.log('check');
			$nameError.html('Name cannot be left empty');
		}else if($emailInput.val()===('' || !"@")){
			$emailError.html('Email must contain an \'@\'.');
	
		}else
		if($webInput.val===('')){
			$webError.html('Website must contain an http://');
		}else if($messInput.val()===('')){
			$messError.html('Messages cannot be left empty');
		}else{
			console.log('check');
			$formBox.css({display:'none'});
			$successBox.css({display:'block'});
			$successBox.html('Thank you for contacting us '+$nameInput.val()+'. We have received your message and will touch you shortly.');

		}
	});

});