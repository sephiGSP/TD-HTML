const movieTab = [
    {title: 'Jurassic Park', poster: 'images/jurassic.jpeg'},
    {title: 'The Matrix', poster: 'images/matrix.jpeg'},
    {title: 'What happened to Monday', poster: 'images/sisters.jpeg'},
    {title: 'Star Wars The Phantom Menace', poster: 'images/swars.jpeg'},
    {title: 'Alien Covenant', poster: 'images/alien.jpg'},
    {title: 'Independance Day', poster: 'images/id.jpg'},
    {title: 'Save Private Ryan', poster: 'images/ryan.jpg'},
    {title: 'The Hangover', poster: 'images/hangover.jpg'},
    {title: 'Fast & Furious 2', poster: 'images/fast.jpeg'},
    {title: 'Star Wars The Last Jedi', poster: 'images/swars8.jpg'},
    {title: 'Back to the future', poster: 'images/back.jpg'},
    {title: 'The Artist', poster: 'images/artist.jpg'},
    {title: 'Warrior', poster: 'images/warrior.jpg'},
    {title: 'Black Hawk Down', poster: 'images/faucon.jpg'},
    {title: 'Inception', poster: 'images/inception.jpg'}
]

const mainEl = document.getElementsByTagName('main')[0]

let sectionParent = null
movieTab.forEach(function(movie, i){
    if (i%5 ==0){
        sectionParent = document.createElement('section')
        mainEl.appendChild(sectionParent)
    }
    const madiv = document.createElement('div')
    var img = document.createElement('img');
    img.src = movie.poster
    madiv.appendChild(img)
    const monTxt = document.createElement('p')
    monTxt.innerHTML = movie.title
    madiv.appendChild(monTxt)
    sectionParent.appendChild(madiv)
})



