// Do not show API key on your js file
const API_KEY =`823c58143256b69394fe0cfeac8215b2`;
const loadTempareture = city =>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY }&units=metric`;

    fetch (url)
    .then ( res => res.json() )
    .then (data => displayTemperature(data))
}
const displayTemperature = data =>{
// const temperature =document.getElementById('temperature')
// temperature.innerText = data.main.temp;
setinnertextById ('temperature',data.main.temp)
setinnertextById ('condition',data.weather[0].main)
console.log(data.weather[0].main)
}
const setinnertextById =(id, text)=>{
    const temperature =document.getElementById(id)
temperature.innerText = text;

}

document.getElementById('btn-search').addEventListener('click',function(){
    const searchfield = document.getElementById('search-field');
    const city = searchfield.value;
    // set city
    document.getElementById('city').innerText=city;
    loadTempareture(city)
})

loadTempareture('Dhaka');