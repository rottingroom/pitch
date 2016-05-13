// My Scripts

// Store image URL's
var img0 = '/img/img1.jpg';
var img1 = '/img/img2.jpg';
var img2 = '/img/img3.jpg';
var img3 = '/img/img4.jpg';
var img4 = '/img/img5.jpg';

// Get random number
var ranNum = Math.floor(Math.random()*6);

// Put images on page
document.getElementById('background').style.backgroundImage = 'url("/img/img' + ranNum + '.jpg")';

$('#myname').lettering();
