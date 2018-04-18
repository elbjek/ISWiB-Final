var url = 'https://openweathermap.org/data/2.5/weather?appid=b6907d289e10d714a6e88b30761fae22&id=792680&units=metric';

var request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.onload = function() {
  
  document.querySelector('a').innerHTML = "Today in " + request.response.name +":" + request.response.main.temp + "°C" ;
  
  console.log(request.response)
  
};

request.send();



