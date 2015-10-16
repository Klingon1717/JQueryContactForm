(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).on('ready', function () {
	var $bigBox = $('.formBox');
	var $button = $('.submit');
	var $nameBox = $('.nameInput');
	var $nameError = $('.nameError');
	var $emailBox = $('.emailInput');
	var $emailError = $('.emailError');
	var $webBox = $('.webInput');
	var $webError = $('.webError');
	var $tattoo = $('.messInput');
	var $tattooError = $('.messError');
	var $successBox = $('.successBox');

	$button.hover(function (e) {
		$button.css({ backgroundColor: '#88C470' });
	}, function (e) {
		$button.css({ backgroundColor: '#1D1D2D' });
	});
	$button.click(function (e) {
		e.preventDefault();
		console.log('button pressed');
		if ($nameInput.val() === '') {
			console.log('check');
			$nameError.html('Name cannot be left empty');
		} else if ($emailInput.val === '') {
			$emailError.html('Email must contain an \'@\'.');
		} else if ($webBox.val === '') {
			$webError.html('Website must contain an http://');
		} else if ($messInput.val === '') {
			$messError.html('Messages cannot be left empty');
		} else {
			console.log('check');
			$formBox.css({ display: 'none' });
			$successBox.css({ display: 'block' });
			$successBox.append('Thank you for contacting us ' + $nameInputval() + '. We have received your message and will touch you shortly.');
		}
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map