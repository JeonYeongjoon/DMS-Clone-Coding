let year,month,day,tdo;
const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
today = new Date();
year = today.getFullyear();
tdo = today.getDay();
after = document.getElementsByClassName("after")[0];
before = document.getElementsByClassName("before")[0];
console.log(today);
day = today.getDate();
day = String(day);
day = "00" + day;
day = day.slice(-2);
month = today.getMonth() + 1;
month = String(month);
month = "00" + month;
month = month.slice(-2);
let todayd = week[tdo];

const eachday = document.getElementsByClassName("eachday")[0];
eachday.innerHTML = day;
const eachmonth = document.getElementsByClassName("eachmonth")[0];
eachmonth.innerHTML = month;
const eachyear = document.getElementsByClassName("eachyear")[0];
eachyear.innerHTML = year;
const eachtdo = document.getElementsByClassName("tdo")[0];
eachtdo.innerHTML = todayd;
let dayfn;

before.onclick = function(){
  day -= 1;
 
  if(day < 1){
    month-=1;
    day = 30;
  }
  tdo -= 1;
 
  if(tdo < 0){
    tdo = 6;
  }
 
  day = String(day);
  day = "00" + day;
  day = day.slice(-2);
  month = String(month);
  month = "00" + month;
  month = month.slice(-2);
  dayfn = `${year}-${month}-${day}`
  getMeal();
  day = String(day);
  month = String(month);
  eachday.innerHTML = day;
  eachmonth.innerHTML = month;
  eachyear.innerHTML = year;
  eachtdo.innerHTML = week[tdo];
  console.log(tdo)
}

after.onclick = function(){
  month = Number(month);
  day = Number(day);
  day += 1;

  if(day >= 30){
    month += 1;
    day = 1;
  }

  tdo += 1;
  if(tdo > 6){
    tdo = 0;
  }

  day = String(day);
  day = "00" + day;
  day = day.slice(-2);
  month = String(month);
  month = "00" + month;
  month = month.slice(-2);
  dayfn = `${year}-${month}-${day}`
  getMeal();
  day = String(day);
  month = String(month);
  eachday.innerHTML = day;
  eachmonth.innerHTML = month;
  eachyear.innerHTML = year;
  eachtdo.innerHTML = week[tdo];
  console.log(tdo);
}

dayfn=`${year}-${month}-${day}`;
const getMeal = ()=> {
  const mealbox=document.getElementsByClassName('mealbox');
  for(let i = 0; i < mealbox.length; i++){
    mealbox[i].innerHTML="";
  }
}

    fetch(`https://api.dsm-dms.com/meal/2021-07-${day}`)
    .then( response => response.json())
    .then (json => {
      const bob=json[dayfn]
      const key=Object.keys(json[dayfn]);
      for(let i = 0; i < key.length; i++){
        for(let j = 0; j < bob[key[i]].length; j++){
          const tempelement = document.createElement('span');
          tempelement.classList.add("mealname");
          tempelement.innerHTML = bob[key[i]][j];
          mealbox[i].appendChild(tempelement);
        }
      }
    })
