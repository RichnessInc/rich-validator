
# Client Side From Validation

[![MIT License](https://camo.githubusercontent.com/fd551ba4b042d89480347a0e74e31af63b356b2cac1116c7b80038f41b04a581/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d677265656e2e737667)](https://choosealicense.com/licenses/mit/)  [![Made With Love](https://camo.githubusercontent.com/ff817852f0d676a36eaa3108d380e0052e689d9e0bc3eb42818fb21008708420/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d616465253230576974682d4c6f76652d6f72616e67652e737667)](https://github.com/chetanraj/awesome-github-badges)

![enter image description here](https://i.ibb.co/7WQxDSc/Dark-Blue-Minimal-Technology-Logo.jpg)

# Introduction

## why we provide this library

Validation is a very important to make sure the data is valid.
However, if you leave the burden of data validation on the server alone, you will be wasting a lot of time and resources.

Because the server can only validate the data by sending a request, and this consumes a lot of time and resources, there must be a way to validate the data before sending the request to the server.

## Why Vanilla Javascript

JavaScript is efficient for this task, so we relied on it in developing this library. We also wrote it in vanilla JavaScript so that it is compatible with your programming language, no matter which one you use to develop your system.

# Installation

```vim
    npm i rich-validator
```

# Usage

> :warning: ***The package return bool (True - False)*** .

```js
import { validator } from 'rich-validator';

let targetForm = document.querySelector('.targetForm');
let MainFormValidation = validator(targetForm); // Fire Validation
if (MainFormValidation) {
    // Do Something if no validation errors
} else {
    // Do Something form has validation errors
}
```

# Features

 1. Required Input
 2. Email Input
 3. Mobile Number Validation
 4. Strong Password Validation
 5. force max length for input by default (255)

# Validation Classes

> :warning: The package has a global rule for any input in the targeted with [type='text'] to make max length 255 character.

if you want change the default max length you must add ths

```html
<input type='text' rich-length='190' />
```

## Validation Rules

```js
    // For make any field has this class not empty
    querySelector('.required'); 
    // For make sure input has this class is a phone number and valid format
    querySelector('.phone-number');
    // For make sure input has this class is a strong password
    querySelector('.password');
    // For make sure input has this class is a valid email address
    querySelector('.validate-email');
    // For make sure uploaded file has a valid extension [jpg,jpeg,png,webp]
    querySelector('.validate-image');
    // For make sure uploaded file has a valid extension [text,txt]
    querySelector('.validate-text');
    // For make sure uploaded file has a valid extension [pdf]
    querySelector('.validate-pdf');
    // For make sure uploaded file has a valid extension [doc,docx]
    querySelector('.validate-doc');
    // Validate uploaded file size 
    querySelector('.validate-size');
```

> and add size attribute

```html
    <input type='file' data-size='4000' /> // 4 MB
```

## Error Handling

You Must put your input in the parent div like this example

```html
    <div>
        <input type='text' class='required' />
    </div>
```

if our library detect validation error for this input we append error message in the parent container like this example.

```html
<div>
    <label for="slogan">Slogan</label>
    <input class="required" id="slogan" type="text" name="slogan" placeholder="Slogan" />
    <label class="validation-error">Slogan is required</label>
</div>
```

### Customize error messages

```html
    <!-- Customize Error Messages-->
    <!-- Required Validation Error -->
    <input 
    type='text' 
    data-required-error='Custom Required Error Message'
    class='required' />
    <!-- Phone Number Validation Error -->
    <input 
    type='text' 
    data-phone-error='Custom Phone Number Error Message'
    class='phone-number' />
    <!-- Email Validation Error -->
    <input 
    type='text' 
    data-email-error='Custom Email Error Message'
    class='validate-email' />
    <!-- Image Validation Error -->
    <input 
    type='file' 
    data-image-error='Custom Image Error Message'
    class='validate-image' />
    <!-- Text File Validation Error -->
    <input 
    type='file' 
    data-text-error='Custom Text File Error Message'
    class='validate-text' />
    <!-- PDF File Validation Error -->
    <input 
    type='file' 
    data-pdf-error='Custom PDF File Error Message'
    class='validate-pdf' />
    <!-- DOCS File Validation Error -->
    <input 
    type='file' 
    data-doc-error='Custom DOCS File Error Message'
    class='validate-pdf' />
```

#### Customize password validation error messages

```html
    <!-- Custom Password Min Length Error Message -->
    <input 
    type='password' 
    data-password-error-min-length='Custom Password Min Length Error Message'
    class='password' />
    <!-- Custom Password Max Length Error Message -->
    <input 
    type='password' 
    data-password-error-max-length='Custom Password Max Length Error Message'
    class='password' />
    <!-- Custom Password Minimum One Character Lowercase Error Message -->
    <input 
    type='password' 
    data-password-error-lowercase='Custom Password Minimum One Character Lowercase Error Message'
    class='password' />
    <!-- Custom Password Minimum One Character uppercase Error Message -->
    <input 
    type='password' 
    data-password-error-uppercase='Custom Password Minimum One Character uppercase Error Message'
    class='password' />
    <!-- Custom Password Minimum One Character uppercase Error Message -->
    <input 
    type='password' 
    data-password-error-number='Custom Password Minimum One Number Error Message'
    class='password' />
    <!-- Custom Password Minimum One Spatial Character Error Message -->
    <input 
    type='password' 
    data-password-error-spatial='Custom Password Minimum One Spatial Character Error Message'
    class='password' />
```
