let day = 28;

function beforeday(){
    day--;
    apifetch();
}

function apifetch(){
    fetch(`https://api.dsm-dms.com/meal/2021-07-${day}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      myJson[`2021-07-${day}`].breakfast.map(x=>breakfast(x));
    });
}

apifetch();

const morning = document.getElementsByClassName("morning")[0];

const before = document.getElementsByClassName("before")[0];
before.addEventListener("click",beforeday)

function breakfast(menu){
  morning.innerHTML+=`<div class="menucss"> ${menu} </div>`
}