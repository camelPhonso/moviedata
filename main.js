let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

//global variables
const display = document.getElementById('movie_list');
const selector = document.getElementById('selector');

//display selected list in #movie_list
function render(obj){
  display.innerHTML = '';
  selector.innerHTML = '';
  for (let i of Object.keys(obj)){
    let par = document.createElement('p');
    par.classList.add('film_display', 'hidden');
    par.setAttribute('onmouseover', 'details(this.textContent)');
    let cont = document.createTextNode(i);
    display.appendChild(par);
    par.appendChild(cont);
  }
};

//display selected movie parameters in #selector
function details(value){
  selector.innerHTML = '';
  for (let i of Object.keys(movieData)){
    if (i == value){
      for (let j of Object.entries(movieData[i])){
        let prop = document.createElement('p');
        let k = document.createTextNode(j);
        prop.classList.add('details_display');
        selector.appendChild(prop);
        prop.appendChild(k);
      };
      break;
    };
  };
};

//filter through movieData for the details entered by the user
function search(){
  selector.innerHTML = '';

  let text = document.getElementById('title_filter').value;
  let wanted = new RegExp (`${text}`,'ig');          //regex needs reworking OR simpler function

  if(text === ''){
    render(movieData);
  }else{
    document.getElementById('movie_list').innerHTML = '';
    for (let i of Object.keys(movieData)){
      if (wanted.test(i)){
        let par = document.createElement('p');
        par.classList.add('film_display');
        par.setAttribute('onmouseover', 'details(this.textContent)');
        let cont = document.createTextNode(i);
        display.appendChild(par);
        par.appendChild(cont);
     };
    };
  };
};

//call search() by typing on title_filter
document.getElementById('title_filter').addEventListener('keyup', search);

//add new Film to movieData
function newFilm(){
  let t = document.getElementById('title_input').value;
  let d = document.getElementById('director_input').value;
  let p = document.getElementById('plot_input').value;
  let y = document.getElementById('year_input').value;
  let r = document.getElementById('rating_input').value;
  let c = document.getElementById('cast_input').value;

 movieData[t] = {
  director: d,
  year: y,
  rating: r,
  cast: c,
  plot: p,
 };

 render(movieData);

  document.getElementById('title_input').value = '';
  document.getElementById('director_input').value = '';
  document.getElementById('plot_input').value = '';
  document.getElementById('year_input').value = '';
  document.getElementById('rating_input').value = '';
  document.getElementById('cast_input').value = '';

  mirror();
};

//display details on new Film being created by the user
function mirror(){
  document.getElementById('director-mirror').innerText = document.getElementById('director_input').value;
  document.getElementById('title-mirror').innerText = document.getElementById('title_input').value;
  document.getElementById('year-mirror').innerText = document.getElementById('year_input').value;
  document.getElementById('rating-mirror').innerText = document.getElementById('rating_input').value;
  document.getElementById('cast-mirror').innerText = document.getElementById('cast_input').value;
  document.getElementById('plot-mirror').innerText = document.getElementById('plot_input').value;
}

//call on startup
render(movieData);
