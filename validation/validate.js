var checkIfValid = function(value){
    if(value === '' || value.length === 0){
        return false
    }
    return true;
}

var checkLength = function(value, element) {
    if(!checkIfValid(value)){
        element.innerText = 'This Field Cannot Be Empty';
        return false;
    } else {
        element.innerText = '';
        return true;
    }

    if(value.length < 3){
        element.innerText = 'Must Be More Than 3 Character';
        return false;
    } else {
        element.innerText = '';
        return true;
    }
}

var checkIfNumber = (value) => {
    if(!isNaN(parseInt(value))){
        return true;
    }
    return false;
}


function checkMarks(value, element) {
    if(!checkIfValid(value)){
        element.innerText = "The field is invalid";
        return;
    } else {
        element.innerText = '';
    }
    if(!checkIfNumber(value)){
        element.innerText = 'Please Enter A Valid Number';
        return;
    } else {
        element.innerText = '';
    }

    if(value < 0 || value > 100){
        element.innerText = 'Please Enter Number Between 0 And 100';
    } else {
        element.innerText = '';
    }
}

var formSubmit = function(e){
    e.preventDefault();
    var getName = document.getElementsByName('name');
    var getNameError = document.querySelector('form .form-group .errorMessage');
    var getClass = document.getElementsByName('class');
    var getClassError = document.querySelector('form .form-group:nth-child(3) .errorMessage');
    var getMaths = document.getElementsByName('maths');
    var getMathsError = document.querySelector('form .form-group:nth-child(4) .errorMessage');
    var getNepali = document.getElementsByName('nepali');
    var getNepaliError = document.querySelector('form .form-group:nth-child(5) .errorMessage');
    var getScience = document.getElementsByName('science');
    var getScienceError = document.querySelector('form .form-group:nth-child(6) .errorMessage');

    checkLength(getName[0].value, getNameError);
    checkLength(getClass[0].value, getClassError);
    checkLength(getMaths[0].value, getMathsError);
    checkLength(getNepali[0].value, getNepaliError);
    checkLength(getScience[0].value, getScienceError);
    if(checkIfValid(getNepali[0].value)) {
        checkMarks(getNepali[0].value, getNepaliError);
    }
    if(checkIfValid(getMaths[0].value)){

        checkMarks(getMaths[0].value, getMathsError);
    }
    if(checkIfValid(getScience[0].value)){
        checkMarks(getScience[0].value, getScienceError);
    }
}

document.addEventListener('submit', formSubmit);

