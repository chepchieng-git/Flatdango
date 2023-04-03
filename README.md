# Flatdango
###Author
Wycliffe Chepchieng


This web Flatdango App is a simple movie theater web app that allows users to book tickets and display the total tickets sold and the capacity per movie.

##Setup
To get the server running, the command below code is typed in the console.

json-server --watch db.json

Testing to make sure the server works can be done by copying and pasting http://localhost:3000/films in a new tap in a browser.

##Deliverables
The following movie's details are seen when the page loads;
Poster, Title, Runtime, Showtime, and available tickets.

Using fetch, data can be retrieved using the GET request enables to retrieve data.

See all movies on the page when the page loads.

Buying a ticket for a movie where after clicking the "Buy Ticket" button the tickets sold increases by 1. When all tickets are sold, an alert is displayed indicatting that the show is sold out. To buy a ticket, the tickets available must be  less than the capacity.