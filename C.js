var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;



var c = canvas.getContext('2d');



c.fillStyle = 'orange';

c.fillRect(10, 10, 100, 100);            

c.strokeRect(10, 10, 100, 100);