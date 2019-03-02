let request = new XMLHttpRequest();
let url = "https://api.adviceslip.com/advice/search/snow";
request.open("Get", url,true);

request.onload = function(){
    
    let data = JSON.parse(this.response);
    let advice =document.getElementById('advice');
    
    if (request.status >= 200 && request.status <400) {
        console.log('data', data)
        advice.innerHTML = data.slips[0].advice;
        }
};

request.send();
