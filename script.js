let imagesData = [{
    photo: 'images/bulbasaur.png',
    title: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger'
},
{
    photo: 'images/ivysaur.png',
    title: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.'
},
{
    photo: 'images/venosaur.png',
    title: 'Venosaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.'
},
{
    photo: 'images/charmander.png',
    title: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.'
},
{
    photo: 'images/charmeleon.png',
    title: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.'
},
{
    photo: 'images/charizard.png',
    title: 'Charizard',
    description: 'It is said that Charizard’s fire burns hotter if it has experienced harsh battles.'
},
{
    photo: 'images/squirtle.png',
    title: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.'
},
{
    photo: 'images/wartortle.png',
    title: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.'
},
{
    photo: 'images/blastoise.png',
    title: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.'
}]

/* let currentPhoto = 0;
let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
}
loadPhoto(currentPhoto); */

console.log(imagesData[0].description);

imagesData.forEach((item, index) => {
    $('#container').append(`<div class="thumbnails"><div class="text">${item.title}</div><img class="thumb-pic" id="${index}" alt="${item.title}" src="${item.photo}" height="50" width="50" /></div>`);
});

let currentPhoto = 0;
let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    currentPhoto = photoNumber;
}
loadPhoto(currentPhoto);

$(".thumb-pic").click(function (event) {
    $("#" + currentPhoto).removeClass("active");
    $("#" + event.currentTarget.id).addClass("active");

    loadPhoto(event.currentTarget.id);
});

$('.prev').click(() => {
    let photo = currentPhoto;

    if (photo > 1) {
        photo--;
    } else if (photo < 1) {
        photo = 8;
    } else if (photo == 1) {
        photo--;
    }

    $("#" + currentPhoto).removeClass("active");
    $("#" + photo).addClass("active");
    loadPhoto(photo);
});

$('.next').click(() => {
    let photo = currentPhoto;
    if (photo <= 7) {
        photo++;
    } else if (photo > 7) {
        photo = 0;
    }

    $("#" + currentPhoto).removeClass("active");
    $("#" + photo).addClass("active");
    loadPhoto(photo);
});
