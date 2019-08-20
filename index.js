const app = document.getElementById('root');
console.log(app);


const preloader = document.createElement('div');
preloader.setAttribute('class', 'preloader');
console.log(preloader);



const logo = document.createElement('img');
logo.src = 'logo.png';
console.log(logo);

const container = document.createElement('div')
container.setAttribute('class', 'container')
console.log(container);



app.appendChild(preloader);


window.addEventListener('load', function () {
  setTimeout(function() {
    preloader.className += ' hidden';
  },
  2000);
});



app.appendChild(logo);
app.appendChild(container);




fetch('https://uinames.coom/api/?amount=1')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });



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