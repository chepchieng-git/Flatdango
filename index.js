const apiURL = "http://localhost:3000/films"
let poster_path;

function displayFilms() {
    fetch(apiURL)
    .then(res => res.json())
    .then(data => {
        const movies = data;
        let moviesArr = movies.map(movie => {
            poster_path = movie.poster_path
            let movieObj = {
                id: movie.id,
                title: movie.title,
                runtime: movie.runtime,
                capacity: movie.capacity,
                showtime: movie.showtime,
                tickets_sold: movie.tickets_sold,
                description: movie.description,
                poster: movie.poster

            }
            return movieObj
            
        })
        moviesArr.map((movie) => renderFilms(movie))
    })
}
//initialize render 
//get data and render films to DOM

function renderFilms(movieObj) {

    let card = document.createElement('li')
        card.className = 'card'
        card.innerHTML = `
        <img src="${movieObj.poster}">
        <div class = "content">
        <p>Available Tickets: <span class="ticket-count">${movieObj.tickets_sold}</span></p>
        <p>${movieObj.description}</p>
        </div>
        <div class = "buttons">
            <button id="buy-ticket">Buy Ticket</button>
        </div>
        `
        document.querySelector(".film-list").appendChild(card)

        
        const buyTicket = card.querySelector('#buy-ticket')
        buyTicket.addEventListener('click', function() {
           if (movieObj.tickets_sold < movieObj.capacity) {
            movieObj.tickets_sold += 1;

            //update display of movie tickets sold
            const ticketCount = card.querySelector('.ticket-count')
            ticketCount.textContent = movieObj.tickets_sold
           } else {
            alert ("Sorry, tickets are sold out")
           }
        })

}
displayFilms()


