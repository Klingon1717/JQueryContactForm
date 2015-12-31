(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
	var $form = $('#registerForm');
	var $button = $('.submit');

	$button.hover(function (e) {
		$button.css({ backgroundColor: '#88C470' });
	}, function (e) {
		$button.css({ backgroundColor: '#1D1D2D' });
	});
	$form.submit(function (e) {
		e.preventDefault();
		var $formBox = $('.container');
		var $nameInput = $('.nameInput');
		var $nameError = $('.nameError');
		var $emailInput = $('.emailInput');
		var $emailError = $('.emailError');
		var $webInput = $('.webInput');
		var $webError = $('.webError');
		var $messInput = $('.mess');
		var $messError = $('.messError');
		var $success = $('.success');

		if ($nameInput.val() === '') {
			$nameError.html('Name cannot be left empty');
		} else if ($emailInput.val() === ('' || !"@")) {
			$emailError.html('Email must contain an \'@\'.');
		}
		if ($webInput.val === '') {
			$webError.html('Website must contain an http://');
		} else if ($messInput.val() === '') {
			$messError.html('Messages cannot be left empty');
		} else {
			return true;
			$formBox.hide();
			$success.show();
			$success.css({ display: 'block' });
			$("#win").html("Thank you for contacting us " + "$nameInput.val()" + ". We have received your message and will be in  touch with you shortly.");
		}
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map