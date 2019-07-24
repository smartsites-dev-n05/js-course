let allData = [];
var localData = localStorage.getItem('infos')
//Parse converts string to correct data type
var localObj = JSON.parse(localData)

if(localObj && localObj.length > 0){
    allData = localObj
    generateHTMLData(allData)
}

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
            continue;
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

    let obj = {};
    //Store Data on Array
    for (let i = 0; i < inputFields.length; i++) {

        let attrName = inputFields[i].getAttribute('name');
        let attrValue = inputFields[i].value;
        obj[attrName] = attrValue;

        console.log(attrValue);
    }

    allData.push(obj);
    
    generateHTMLData(allData)
    //Fetch From Array Function
   
    localStorage.setItem("infos", JSON.stringify(allData))
   

    //Removing Stored Data on Array
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = '';
    }
}

function generateHTMLData(data){
    let studentData = document.getElementById('studentsData');
    data.forEach(function (value, index) {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${value.name}</td>
            <td>${value.maths}</td>
            <td>${value.nepali}</td>
            <td>${value.science}</td>
            <td>${value.remark}</td>
        `;
        
        studentData.appendChild(tr);
    });
    

}   

let formSubmit = function(e){
    e.preventDefault();
    if(checkIfNumber()){
        fetchData();
    }
};

document.querySelector('form').addEventListener('submit', formSubmit);
