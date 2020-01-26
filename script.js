// ES5 XHR API
function getApiDataES5() {
    var xhr = new XMLHttpRequest();
    xhr.onloadstart = function (evt) {
        var element = document.querySelector('#result');
        element.innerHTML = '<span>loading data...</span>';
    }

    xhr.onload = function (evt) {
        var element = document.querySelector('#result');
        var data = JSON.parse(this.responseText);
        console.log(data);
        element.innerHTML = JSON.stringify(data);
    }
    xhr.onerror = function(evt) {
        var element = document.querySelector('#result');
        element.innerHTML = evt;
    }

    xhr.open('GET', 'http://localhost:8000/api/weatherforecast');
    xhr.send();
}

// ES6 fetch - promise API
function getApiDataES6() {
    var element = document.querySelector('#result');
    element.innerHTML = '<span>loading data...</span>';
    fetch('http://localhost:8000/api/weatherforecast')
        .then(data => data.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .then(data => {
            element.innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            element.innerHTML = error;
        })
}

// ES7 async - await API
async function getApiData7() {
    var element = document.querySelector('#result');
    element.innerHTML = '<span>loading data...</span>';
    try {
        const data = await fetch('http://localhost:8000/api/weatherforecast');
        const json = await data.json();
        console.log(json);
        element.innerHTML = JSON.stringify(data);
    }
    catch (error) {
        element.innerHTML = error;
    }
}