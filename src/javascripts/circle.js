let direction = null;
let oldScroll = 0;
window.onscroll = function(e) {
  // print "false" if direction is down and "true" if up
 if(this.oldScroll > this.scrollY) {
   if(direction !== "up") {
     document.getElementById("circle").style.transform = "rotate(180deg)";
   }
   direction = "up"
 } else {
   if(direction !== 'down'){
     document.getElementById("circle").style.transform = "";
   }
   direction = "down";
 }
  this.oldScroll = this.scrollY;
}
