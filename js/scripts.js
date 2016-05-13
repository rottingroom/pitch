//my scripts

//store images
var img1 = 'http://rottingroom.github.io/pitch/img/img1.jpg';
var img2 = 'http://rottingroom.github.io/pitch/img/img2.jpg';
var img3 = 'http://rottingroom.github.io/pitch/img/img3.jpg';
var img4 = 'http://rottingroom.github.io/pitch/img/img4.jpg';
var img5 = 'http://rottingroom.github.io/pitch/img/img5.jpg';

//get random number
var ranNum = Math.floor((Math.random() * 5) + 1);

//put images on page
document.getElementById('background').style.backgroundImage = 'url("http://rottingroom.github.io/pitch/img/img' + ranNum + '.jpg")';

//lettering plugin
$('#myname').lettering();
