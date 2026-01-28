function updateDate(){

hrs = document.getElementById('hrs');
mins = document.getElementById('mins');
secs = document.getElementById('secs');
ampm = document.getElementById('ampm');

   const date = new Date();

   let hours = date.getHours();
   const median = hours>=12 ? "PM" : "AM";
   hours = hours % 12 || 12;
   const minutes = date.getMinutes();
   const seconds = date.getSeconds();
   
   hours = hours%12 || 12;
   
   hrs.textContent = hours.toString().padStart(2,0);
   mins.textContent = minutes.toString().padStart(2,0);
   secs.textContent = seconds.toString().padStart(2,0);
   ampm.textContent = median;
}

setInterval(updateDate,1000);
updateDate();
