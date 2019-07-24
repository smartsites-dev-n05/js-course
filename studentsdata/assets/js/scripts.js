let allData = [];

let integerFields = document.querySelectorAll('.number');

let checkIfNumber = () => {
    var test = true;
    for (let i = 0; i < integerFields.length; i++) {
        let inputValue = integerFields[i].value;

        if (inputValue === '') {
            test = false;
            integerFields[i].nextElementSibling.innerHTML = 'empty';
            continue;
        }

        inputValue = parseInt(inputValue);

        if (isNaN(inputValue)) {
            test = false;
            integerFields[i].nextElementSibling.innerHTML = 'Numbers Only';
            break;
        } else {
            test = true;
            console.log(integerFields[i], inputValue, 'the else');
            integerFields[i].nextElementSibling.innerHTML = '';
        }
    }
    return test;
};

function fetchData() {

    let inputFields = document.getElementsByClassName('inputField');

    let studentData = document.getElementById('studentsData');

    let tr = document.createElement('tr');

    let obj = {};
    //Store Data on Array
    for (let i = 0; i < inputFields.length; i++) {

        let attrName = inputFields[i].getAttribute('name');
        let attrValue = inputFields[i].value;
        obj[attrName] = attrValue;

        console.log(attrValue);
    }

    allData.push(obj);
    console.log(allData);

    //Fetch From Array Function
    allData.forEach(function (value, index) {
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${value.name}</td>
            <td>${value.maths}</td>
            <td>${value.nepali}</td>
            <td>${value.science}</td>
            <td>${value.remark}</td>
        `;
    });

    studentData.appendChild(tr);

    console.log('obj', tr);

    //Removing Stored Data on Array
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = '';
    }
}

let formSubmit = function(e){
    e.preventDefault();
    if(checkIfNumber()){
        fetchData();
    }
};

document.addEventListener('submit', formSubmit);
