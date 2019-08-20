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

// function mojafunkcja() {
//   setTimeout(function () {
//     preloader.style.display = "none";
//   },
//     4000);
// };

// window.addEventListener('load', mojafunkcja);

window.addEventListener('load', function () {
  setTimeout(function () {
    preloader.style.display = "none";
  },
    4000);
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



const divzip = document.createElement('div');
divzip.setAttribute('class', 'divzip');
console.log(divzip);
container.appendChild(divzip);

const adresip = document.createElement('p');
adresip.setAttribute('class', 'text adresip');
console.log(adresip);
divzip.appendChild(adresip);


const imie = document.createElement('p');
imie.setAttribute('class', 'text imie');
console.log(imie);
divzip.appendChild(imie);

const paragrafy = ["p", "p", "p", "p"];
console.log(paragrafy[2]);


const btnGenerate = document.createElement('button');
btnGenerate.innerHTML = 'Kliknij, aby wygenerować';
btnGenerate.setAttribute('class', 'button');
// btnGenerate.setAttribute('href', '#');
console.log(btnGenerate);
divzip.appendChild(btnGenerate);


fetch(`https://api.ipify.org?format=json`)
  .then(function (dajip) {
    return dajip.json();
  })
  .then(function (dajip) {
    console.log(JSON.stringify(dajip));

    document.querySelector(".adresip").innerHTML = dajip.ip;
    // p.innerHTML = dajip.ip;

  });






const generuj = document.querySelector('.button');



function feczapi() {
  alert('hello world');
  var amount = 1;
  let gender = "male";
  let region = "poland";
  // fetch('https://uinames.com/api/?amount=1')
  fetch(`https://uinames.com/api/?amount=${amount}?region=${region}?gender=${gender}`)
    // fetch(`https://uinames.com/api/?region=poland?gender=male`)
    .then(function (fajnaOdpowiedz) {
      return response.json();
    })
    .then(function (fajnaOdpowiedz) {
      console.log(JSON.stringify(myJson));

      document.querySelector(".imie").innerHTML = myJson.name;

    });
}

// generuj.addEventListener('click', feczapi);
// generuj.addEventListener('click', feczapi);

function test() {
  console.log("dziala");
}
console.log(feczapi);
console.log(generuj);

generuj.addEventListener("click", feczapi);


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