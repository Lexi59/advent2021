var todaysDate = new Date()
if(todaysDate.getMonth()!= 11){
    var daysTilDecember = Math.round(((new Date('12-1-2021')).getTime() - todaysDate.getTime())/(1000 * 3600 * 24));
    console.log(new Date('12-1-2021'));
    alert("Only "+ daysTilDecember + " days until you can play!");
}
else{
    var date = todaysDate.getDate();
    for(var i = 1; i <= date; i++){
        document.getElementById(i).classList.remove('disabled');
    }
}
