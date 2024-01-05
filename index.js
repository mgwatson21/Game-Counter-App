 numHome = 0;
 numGuest = 0;
 let add1 = 1;
 let add2 = 2;
 let add3 = 3;
 console.log(document.getElementById("home-pt").textContent = numHome);
 console.log(document.getElementById("guest-pt").textContent = numGuest);
 
 let homePt = document.getElementById("home-pt");
 let guestPt = document.getElementById("guest-pt");
 function addHome1() {
     numHome += add1;
    homePt.textContent = numHome;        
 }
 
  function addHome2() {
     numHome += add2;
    homePt.textContent = numHome;        
 }
 
 
  function addHome3() {
     numHome += add3;
    homePt.textContent = numHome;        
 }
 
  function addGuest1() {
     numGuest += add1;
    guestPt.textContent = numGuest;        
 }
 
  function addGuest2() {
    numGuest += add2;
    guestPt.textContent = numGuest;        
 }
 
 
  function addGuest3() {
     numGuest += add3;
    guestPt.textContent = numGuest;        
 }