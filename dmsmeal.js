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
      console.log(JSON.stringify(myJson));
    });
}

apifetch();

const morning = document.getElementsByClassName("morning")[0];
morning.innerHTML="<div> hello </div>" 

const before = document.getElementsByClassName("before")[0];
before.addEventListener("click",beforeday)