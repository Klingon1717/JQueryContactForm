(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).on('ready', function () {
	var $formBox = $('.formBox');
	var $button = $('.submit');
	var $nameInput = $('.nameInput');
	var $nameError = $('.nameError');
	var $emailInput = $('.emailInput');
	var $emailError = $('.emailError');
	var $webInput = $('.webInput');
	var $webError = $('.webError');
	var $messInput = $('.messInput');
	var $messError = $('.messError');
	var $successBox = $('.successBox');

	$button.hover(function (e) {
		$button.css({ backgroundColor: '#88C470' });
	}, function (e) {
		$button.css({ backgroundColor: '#1D1D2D' });
	});
	$button.click(function (e) {
		e.preventDefault();
		if ($nameInput.val() === '') {
			$nameError.html('Name cannot be left empty');
		} else if ($emailInput.val() === ('' || !"@")) {
			$emailError.html('Email must contain an \'@\'.');
		} else if ($webInput.val === '') {
			$webError.html('Website must contain an http://');
		} else if ($messInput.val() === '') {
			$messError.html('Messages cannot be left empty');
		} else {

			$formBox.css({ display: 'none' });
			$successBox.css({ display: 'block' });
			$successBox.css({ color: 'white' });
			$successBox.append('Thank you for contacting us ' + $nameInput.val() + '. We have received your message and will touch you shortly.');
		}
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map