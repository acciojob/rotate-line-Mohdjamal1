//your JS code here. If required.
const line = document.getElementById('line');
var rotationAngle = 0;

function rotateDiv() {
  rotationAngle += 1;
  line.style.transform = "rotate(" + rotationAngle + "deg)";
}

setInterval(rotateDiv, 30);

	
	