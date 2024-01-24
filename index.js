window.alert(`this is asingle dice please select the number of dice`);

document.getElementById('b1').onclick = function(){
    let nod = document.getElementById("input").value;
   if(nod == 1){
    let dice = Math.floor(Math.random()*6)+1;
    document.getElementById(`head`).textContent = dice;
   }
   else if(nod == 2){
    let dice = Math.floor(Math.random()*6)+1;
    document.getElementById(`head`).textContent = dice;
    dice = Math.floor(Math.random()*6)+1;
    document.getElementById(`head1`).textContent = dice;
   }
    

}
