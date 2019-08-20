const app = document.getElementById('root');
console.log(app);


const preloader = document.createElement('div');
preloader.setAttribute('class', 'preloader');
console.log(preloader);

app.appendChild(preloader);
window.addEventListener('load', function () {
  setTimeout(function () {
    preloader.className += ' hidden';
  },
    2000);
});




const logo = document.createElement('img');
logo.setAttribute('class', 'logo');
logo.src = 'logo.png';
console.log(logo);

const container = document.createElement('div');
container.setAttribute('class', 'container');
console.log(container);



app.appendChild(logo);
app.appendChild(container);


var amount = 1;
let gender = "male";
let region = 'poland';

// fetch(`http://ipinfo.io/?format=jsonp&callback=getIP`)
//   .then(function (dajip) {
//     return dajip.json();
//   })
//   .then(function (dajip) {
//     console.log(JSON.stringify(dajip));

//     let p = document.querySelector(".container");

//     p.innerHTML = dajip.ip;
//   });
// http://ipinfo.io/?format=jsonp&callback=getIP

fetch(`https://api.ipify.org?format=json`)
  .then(function (dajip) {
    return dajip.json();
  })
  .then(function (dajip) {
    console.log(JSON.stringify(dajip));

    let p = document.querySelector(".container");

    p.innerHTML = dajip.ip;
  });

// fetch('https://uinames.com/api/?amount=1')
fetch(`https://uinames.com/api/?amount=${amount}?gender=${gender}?region=${region}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(JSON.stringify(myJson));

    let p = document.querySelector(".container");

    p.innerHTML = myJson.name;
  });


// const fetchPromise = fetch('https://ghibliapi.herokuapp.com/people');
// console.log(fetchPromise);

// const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// fetchPromise.then(response => {
//   console.log(response);

// });
// const biereapidogarazu = fetch("https://ghibliapi.herokuapp.com/people");
// biereapidogarazu.then(response => {
//   return response.json();
// }).then(people => {
//   console.log(people);

  // let p = document.querySelector(".container");

  // p.innerHTML = people.name;
  // 


// });


// const pogodadlaip = fetch('https://api.xman8830.ovh/weather/?key=tZXfZ3i7kNF4amnZmi2Q&ip=176.112.72.6');


// data.forEach(movie => {
//   // Create a div with a card class
//   const card = document.createElement('div')
//   card.setAttribute('class', 'card')

//   // Create an h1 and set the text content to the film's title
//   const h1 = document.createElement('h1')
//   h1.textContent = movie.title

//   // Create a p and set the text content to the film's description
//   const p = document.createElement('p')
//   movie.description = movie.description.substring(0, 300) // Limit to 300 chars
//   p.textContent = `${movie.description}...` // End with an ellipses

//   // Append the cards to the container element
//   container.appendChild(card)

//   // Each card will contain an h1 and a p
//   card.appendChild(h1)
//   card.appendChild(p)
// })