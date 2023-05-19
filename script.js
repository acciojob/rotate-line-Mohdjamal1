//your JS code here. If required.
const line = document.getElementById('line');
setInterval(()=>{
	rot();
},100);
function rot() {
line.style.transform = 'rotate(2deg)';
}
	
	