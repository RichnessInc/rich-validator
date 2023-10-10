function checkIfInputRequired(input) {
	return (input.value != null && input.value != '' && input.value[0] != null && input.value[0] != '' && input.value[0] != undefined ? true : false);
}

function checkAttribute(input, attributeName) {
	let attribute = input.getAttribute(attributeName);
	return (attribute != null && attribute != undefined && attribute != '' ? true : false);
}

function attributeMessageHandler(input) {
	return input.getAttribute('name').replace('_', ' ');
}

function required(input) {
	let getValue = input.value[0];
	let status = false;
	if (getValue == '' || getValue == undefined) {
		status = true;
	}
	let message = (checkAttribute(input, 'data-required-error') ? input.getAttribute('data-required-error') : attributeMessageHandler(input) + ' is Required');
	return {
		status: status,
		name: input.getAttribute('name'),
		message: message
	};
}

function FileSizeValidation(inputFile) {
	let status = false;
	let message = '';
	console.log(checkIfInputRequired(inputFile) && inputFile.classList.contains('validate-size'));
	if (checkIfInputRequired(inputFile) && inputFile.classList.contains('validate-size')) {
		if (inputFile.files.length > 0) {
			for (let i = 0; i <= inputFile.files.length - 1; i++) {
				let fileSize = inputFile.files.item(i).size;
				let file = Math.round((fileSize / 1024));
				if (file > inputFile.dataset.size) {
					status = true;
					message = (checkAttribute(inputFile, 'data-file-size-error') ? inputFile.getAttribute('data-file-size-error') : attributeMessageHandler(inputFile) + ' File is very large') + inputFile.dataset.size + 'MB';
				}
			}
		}
	}
	return {
		status: status,
		name: inputFile.getAttribute('name'),
		message: message
	};
}

function goodPassword(input) {
	let password = input.value;
	let status = false;
	let message = '';
	if (checkIfInputRequired(input)) {
		if (password.length < 8) {
			message = (checkAttribute(inputFile, 'data-password-error-min-length') ? inputFile.getAttribute('data-password-error-min-length') : attributeMessageHandler(inputFile) + ' Error: must be at least 8 characters');
			status = true;
		} else if (password.length > 32) {
			message = (checkAttribute(inputFile, 'data-password-error-max-length') ? inputFile.getAttribute('data-password-error-max-length') : attributeMessageHandler(inputFile) + ' Error: Password is very long');
			status = true;
		} else if (password.search(/[a-z]/) < 0) {
			message = (checkAttribute(inputFile, 'data-password-error-lowercase') ? inputFile.getAttribute('data-password-error-lowercase') : attributeMessageHandler(inputFile) + ' Error: Password must contain at least one lowercase letter');
			status = true;
		} else if (password.search(/[A-Z]/) < 0) {
			message = (checkAttribute(inputFile, 'data-password-error-uppercase') ? inputFile.getAttribute('data-password-error-uppercase') : attributeMessageHandler(inputFile) + ' Error: Password must contain at least one uppercase letter');
			status = true;
		} else if (password.search(/[0-9]/) < 0) {
			message = (checkAttribute(inputFile, 'data-password-error-number') ? inputFile.getAttribute('data-password-error-number') : attributeMessageHandler(inputFile) + ' Error: Password must contain at least one number');
			status = true;
		} else if (password.search(/[!%@&*\s]/) < 0) {
			message = (checkAttribute(inputFile, 'data-password-error-spatial') ? inputFile.getAttribute('data-password-error-spatial') : attributeMessageHandler(inputFile) + ' Error: Password must contain at least spatial letter');
			status = true;
		} else {
			message = 'Success!';
		}
	}
	return {
		status: status,
		name: input.getAttribute('name'),
		message: message
	};
}

function validateEmail(input) {
	let status = false;
	let message = '';
	if (checkIfInputRequired(input)) {
		let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (input.value.match(validRegex)) {
			status = false;
			message = 'Success!';
		} else {
			status = true;
			message = (checkAttribute(input, 'data-email-error') ? input.getAttribute('data-email-error') : attributeMessageHandler(input) + ' Invalid email address!');
		}
	}
	return {
		status: status,
		name: input.getAttribute('name'),
		message: message
	};
}

function phoneNumber(input) {
	let status = false;
	if (checkIfInputRequired(input)) {
		status = true;
		let re = /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/im;
		if (re.test(input.value)) {
			status = false;
		}
	}
	let message = (checkAttribute(input, 'data-phone-error') ? input.getAttribute('data-phone-error') : attributeMessageHandler(input) + ' Bad Format!');
	return {
		status: status,
		name: input.getAttribute('name'),
		message: message
	};
}

function globalMaxLength(input) {
	let maxLength = 255;
	let status = false;
	let message = '';
	if (checkIfInputRequired(input)) {
		if (input.getAttribute('rich-length') != null || input.getAttribute('rich-length') != undefined) {
			maxLength = input.getAttribute('rich-length');
		}
		if (input.value.length > maxLength) {
			message = (checkAttribute(input, 'data-global-error') ? input.getAttribute('data-global-error') : attributeMessageHandler(input) + ' is very long!');
			status = true;
		}
	}
	return {
		status: status,
		name: input.getAttribute('name'),
		message: message
	};
}

function imageValidate(fileInput) {
	let status = false;
	let message = '';
	if (checkIfInputRequired(fileInput)) {
		let filePath = fileInput.value;
		let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.webp)$/i;
		console.log(allowedExtensions.exec(filePath));
		if (!allowedExtensions.exec(filePath)) {
			fileInput.value = '';
			message = (checkAttribute(fileInput, 'data-image-error') ? fileInput.getAttribute('data-image-error') : attributeMessageHandler(fileInput) + ' Invalid file type [ jpg,jpeg,png,webp ]');
			status = true;
		}
	}
	return {
		status: status,
		name: fileInput.getAttribute('name'),
		message: message
	};
}

function textInputFileValidate(fileInput) {
	let status = false;
	let message = '';
	if (checkIfInputRequired(fileInput)) {
		let filePath = fileInput.value;
		let allowedExtensions = /(\.text|\.txt)$/i;
		console.log(allowedExtensions.exec(filePath));
		if (!allowedExtensions.exec(filePath)) {
			fileInput.value = '';
			message = (checkAttribute(fileInput, 'data-text-error') ? fileInput.getAttribute('data-text-error') : attributeMessageHandler(fileInput) + ' Invalid file type [ text,txt ]');
			status = true;
		}
	}
	return {
		status: status,
		name: fileInput.getAttribute('name'),
		message: message
	};
}

function pdfInputFileValidate(fileInput) {
	let status = false;
	let message = '';
	if (checkIfInputRequired(fileInput)) {
		let filePath = fileInput.value;
		let allowedExtensions = /(\.pdf)$/i;
		console.log(allowedExtensions.exec(filePath));
		if (!allowedExtensions.exec(filePath)) {
			fileInput.value = '';
			message = (checkAttribute(fileInput, 'data-pdf-error') ? fileInput.getAttribute('data-pdf-error') : attributeMessageHandler(fileInput) + ' Invalid file type [ pdf ]');
			status = true;
		}
	}
	return {
		status: status,
		name: fileInput.getAttribute('name'),
		message: message
	};
}

function docInputFileValidate(fileInput) {
	let status = false;
	let message = '';
	if (checkIfInputRequired(fileInput)) {
		let filePath = fileInput.value;
		let allowedExtensions = /(\.odt|\.docx)$/i;
		console.log(allowedExtensions.exec(filePath));
		if (!allowedExtensions.exec(filePath)) {
			fileInput.value = '';
			message = (checkAttribute('data-doc-error') ? fileInput.getAttribute('data-doc-error') : attributeMessageHandler(fileInput) + ' Invalid file type [ doc,docx ]');
			status = true;
		}
	}
	return {
		status: status,
		name: fileInput.getAttribute('name'),
		message: message
	};
}

function createErrorMessage(input, response) {
	let label = document.createElement('label');
	let labelText = document.createTextNode(response.message);
	label.className = 'validation-error';
	label.appendChild(labelText);
	input.parentElement.appendChild(label);
}

function validator(form) {
	let errors = [];
	let validationError = form.querySelectorAll('.validation-error');
	let requiredInput = form.querySelectorAll('.required');
	let phoneNumberInput = form.querySelectorAll('.phone-number');
	let passwordInput = form.querySelectorAll('.password');
	let textInput = form.querySelectorAll('input[type=\'text\']');
	let emailInput = form.querySelectorAll('.validate-email');
	let imageInput = form.querySelectorAll('.validate-image');
	let textFileInput = form.querySelectorAll('.validate-text');
	let pdfFileInput = form.querySelectorAll('.validate-pdf');
	let docFileInput = form.querySelectorAll('.validate-doc');
	let fileSizeInput = form.querySelectorAll('.validate-size');


	if (validationError.length > 0) {
		validationError.forEach((err) => {
			err.remove();
		});
	}
	if (requiredInput.length > 0) {
		requiredInput.forEach((input) => {
			let response = required(input);
			if (response.status) {
				createErrorMessage(input, response);
				errors.push(response);
			}
		});
	}
	if (phoneNumberInput.length > 0) {
		phoneNumberInput.forEach((input) => {
			let response = phoneNumber(input);
			if (response.status) {
				createErrorMessage(input, response);
				errors.push(response);
			}
		});
	}
	if (passwordInput.length > 0) {
		passwordInput.forEach((input) => {
			let response = goodPassword(input);
			if (response.status) {
				createErrorMessage(input, response);
				errors.push(response);
			}
		});
	}
	if (textInput.length > 0) {
		textInput.forEach((input) => {
			let response = globalMaxLength(input);
			if (response.status) {
				createErrorMessage(input, response);
				errors.push(response);
			}

		});
	}
	if (emailInput.length > 0) {
		emailInput.forEach((input) => {
			let response = validateEmail(input);
			if (response.status) {
				createErrorMessage(input, response);
				errors.push(response);
			}
		});
	}
	if (imageInput.length > 0) {
		imageInput.forEach((input) => {
			let response = imageValidate(input);
			if (response.status) {
				createErrorMessage(input, response);
				errors.push(response);
			}
		});
	}
	if (textFileInput.length > 0) {
		textFileInput.forEach((input) => {
			let response = textInputFileValidate(input);
			if (response.status) {
				createErrorMessage(input, response);
				errors.push(response);
			}
		});
	}
	if (pdfFileInput.length > 0) {
		pdfFileInput.forEach((input) => {
			let response = pdfInputFileValidate(input);
			if (response.status) {
				createErrorMessage(input, response);
				errors.push(response);
			}
		});
	}

	if (docFileInput.length > 0) {
		docFileInput.forEach((input) => {
			let response = docInputFileValidate(input);
			if (response.status) {
				createErrorMessage(input, response);
				errors.push(response);
			}
		});
	}
	if (fileSizeInput.length > 0) {
		fileSizeInput.forEach((input) => {
			let response = FileSizeValidation(input);
			if (response.status) {
				createErrorMessage(input, response);
				errors.push(response);
			}
		});
	}
	if (errors.length == 0) {
		return true;
	} else {
		return false;
	}
}


/* eslint-disable */
module.exports.validator = validator; // eslint-disabled
