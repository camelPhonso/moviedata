# moviedata

## Usage
The brief to this project challenges us to create a page that allows users to manipulate the information stored and to change it's display by interacting with the page.
With that in mind, I imagined a page designed to help a group of people manage a 'wish list' of movies to view on movie night. 
The premise is very simple, there are two sections to the page and each has one distinct goal. The first allows the user to interact with the data stored by filtering through the movie titles availble and viewing detailed information for each.
The second section allows users to manipulate the information stored by adding new movies to the list.

This was a real challenge during the application process because it was the first time I personally had to dealve into DOM seriously, but because of that it was also my favourite project, because it unlocked a lot of learning that then came into play in the following projects.

## Learnings
This project helped me compreend DOM much better than before because it forced me to find different ways to display information based on user interaction with the page and also ways to allow the user to add information. Once I became aware of the method .createElement() a world of possibilities opened up. 
But another learning that was meaningful to me was the handling of a multi-level Object. This was something I had a vague understanding of but once I actually handled the movieList object my knowledge was challenged and expanded.

A particular challenge I had to work through was in adding a new key to the movieList object. My first attempt was to create a new object through at constructor and then append it to the existing list - of course, this was treating movieList as an array of objects, which isn't the case.
Understanding the structure of the object made it easy to see the solution - defining a new object key with the values passed on from the user. This also moved my thinking away from typical array manipulation methods, like array.prototype.map() for example, and led to more creative solutions for the challenge.
