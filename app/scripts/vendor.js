/* eslint-disable no-unused-vars */
const agCookie = {
    create: function(name, value, days) {
        value = encodeURIComponent(value);
        let expires;

        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toGMTString();
        } else {
            expires = '';
        }

        document.cookie = name + '=' + value + expires + '; path=/';
    },
    read: function(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                let contents = c.substring(nameEQ.length, c.length);
                contents = decodeURIComponent(contents);
                return contents;
            }
        }
        return null;
    },
    erase: function(name) {
        this.create(name, '', -1);
    }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = agCookie;
}
var url = 'https://openweathermap.org/data/2.5/weather?appid=b6907d289e10d714a6e88b30761fae22&id=792680&units=metric';

var request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.onload = function() {
  
  document.querySelector('a').innerHTML = "Today in " + request.response.name +":" ;
  
  console.log(request.response)
  
};

request.send();