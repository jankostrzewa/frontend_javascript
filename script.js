function getApiData() {
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