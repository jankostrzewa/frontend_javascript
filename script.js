async function getApiData() {
    const data = await fetch('http://localhost:5000/api/weatherdata');
    console.log(data);
    document.querySelector('#result').innerHTML = data;
}