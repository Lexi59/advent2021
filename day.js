//global variables
const day = (new URLSearchParams(window.location.search)).get('id')
const puzzleDiv = document.getElementById('puzzleSpace');
const keys = ['7723', '', 'madison','stadium', 'rain', '1al903', 'another','calculus','fritos','pirate', 
'wedding','b@ng!', '147','cismathtc', '51900', 'alnmmasc', 'seismitoad', 'septemberten', '274548','80asco', 
'60temptelectralo70cleanse', 'secret','pass', 'urthebest','571'];
const words = ['sleigh','snowman','holly','ornament','Jolly','Noel','snowflake','carol','angel','bells','gifts','wreath','star','stable','elves','santa','joy','family','grinch','stockings','toys','cookies', 'peace','candy canes','hot chocolate']

//setup 
document.getElementById('Welcome').innerHTML = "Welcome to Day " + day;

document.querySelector('#submitForm').addEventListener('submit', (e) =>{
    e.preventDefault();
    var ans = document.querySelector('#guess').value.replace(/[ ,]*/g, '').toLowerCase();
    if(ans == keys[parseInt(day)-1]){
        alert("CORRECT! You get to open the gift labeled " + words[day-1] + '!');
    }
    else{
        alert("Nope, try again!");
    }
})

//for simon says
var canClick = false, currLength = 1,currGuess = [];
const pattern = ['red','green','blue','yellow','blue','red','yellow'];
var redBtn, blueBtn, greenBtn, yellowBtn;

if(day == 1){
    var img = document.createElement('img');
    img.src = 'day1.png';
    img.style = "width:100%";
    puzzleDiv.appendChild(img);
}
else if (day == 2){
    hideForm();
    redBtn = document.createElement('btn');
    yellowBtn = document.createElement('btn');
    blueBtn = document.createElement('btn');
    greenBtn = document.createElement('btn');

    redBtn.classList.add('btn','btn-primary', 'simon-says');
    yellowBtn.classList.add('btn','btn-primary', 'simon-says');
    blueBtn.classList.add('btn','btn-primary', 'simon-says');
    greenBtn.classList.add('btn','btn-primary', 'simon-says');

    redBtn.style.backgroundColor = "red";
    blueBtn.style.backgroundColor = "blue";
    greenBtn.style.backgroundColor = "green";
    yellowBtn.style.backgroundColor = "yellow";

    redBtn.setAttribute('onclick',"simonSaysLogButton('red');");
    blueBtn.setAttribute('onclick',"simonSaysLogButton('blue');");
    greenBtn.setAttribute('onclick',"simonSaysLogButton('green');");
    yellowBtn.setAttribute('onclick',"simonSaysLogButton('yellow');");

    puzzleDiv.appendChild(redBtn);
    puzzleDiv.appendChild(yellowBtn);
    puzzleDiv.appendChild(blueBtn);
    puzzleDiv.appendChild(greenBtn);

    //play game
    displaySimonSays();
}
else if(day == 3){
    addImage('day3.png', 50);
}
else if(day == 4){
    addImage('day4.png',50);
}
else if(day == 5){
    addImage('day5.png',70);
}
else if(day == 6){
    addImage('day6.png',70);
}
else if(day == 7){
    addImage('day7.png',70);
}
else if(day == 8){
    addImage('day8.png',70);
}
else if(day == 9){
    addImage('day9.png',70);
}
else if(day == 10){
    addImage('day10.png',70);
}
else if(day == 11){
    addImage('day11.png',40);
}
else if(day == 12){
    addImage('day12.png',70);
}
else if(day == 13){
    addImage('day13.png',70);
}
else if(day == 14){
    addImage('day14.png',70);
}
else if(day == 15){
    addImage('day15.png',70);
}
else if(day == 16){
    addImage('day16.png',70);
}
else if(day == 17){
    addImage('day17.png',40);
}
else if(day == 18){
    addImage('day18.png',70);
}
else if(day == 19){
    addImage('day19.png',50);
}
else if(day == 20){
    addImage('day20.png',20);
}
else if(day == 21){
    addImage('day21.png',70);
}
else if (day == 22){
    var p1 = document.createElement('h1');
    p1.innerHTML = "Read Between";
    var p2 = document.createElement('h1');
    p2.innerHTML = "The Lines";
    var hidden = document.createElement('p');
    hidden.innerHTML = "Secret";
    hidden.style.color = 'white';
    hidden.classList.add('hidden');
    puzzleDiv.innerHTML = '<br><br><br>'
    puzzleDiv.appendChild(p1);
    puzzleDiv.appendChild(hidden);
    puzzleDiv.appendChild(p2);
    puzzleDiv.appendChild(document.createElement('br'));
}
else if(day == 23){
    var a = document.createElement('p');
    a.innerText = "Hi Baby! I ho";
    var b = document.createElement('p');
    b.innerText = "p";
    var c = document.createElement('p');
    c.innerText = "e your d";
    var d = document.createElement('p');
    d.innerText = "a";
    var e = document.createElement('p');
    e.innerText = "y is going well. I mi";
    var f = document.createElement('p');
    f.innerText = "s";
    var g = document.createElement('p');
    g.innerText = "s you bunches. Merry Chri";
    var h = document.createElement('p');
    h.innerText = "s";
    var i = document.createElement('p');
    i.innerText = "tmas! <3";
    
    a.classList.add('float');
    b.classList.add('highlight','float');
    c.classList.add('float');
    d.classList.add('highlight','float');
    e.classList.add('float');
    f.classList.add('highlight','float');
    g.classList.add('float');
    h.classList.add('highlight','float');
    i.classList.add('float');
    
    var br = document.createElement('br');
    br.style.clear = 'both';

    puzzleDiv.appendChild(a);
    puzzleDiv.appendChild(b);
    puzzleDiv.appendChild(c);
    puzzleDiv.appendChild(d);
    puzzleDiv.appendChild(e);
    puzzleDiv.appendChild(f);
    puzzleDiv.appendChild(g);
    puzzleDiv.appendChild(h);
    puzzleDiv.appendChild(i);
    puzzleDiv.appendChild(br);
}
else if (day == 24){
    addImage('day24.png',70);
}
else if (day == 25){
    addImage('day25.png', 30);
}




//helper functions
function simonSaysLogButton(color){
    if(canClick){
        currGuess.push(color);
        if(currGuess.length == currLength){
            for(var i = 0; i < currLength; i++){
                if(currGuess[i]!=pattern[i]){
                    alert("Incorrect! Restart!");
                    currLength=1;
                    displaySimonSays();
                    return;
                }
            }
            currLength++;
            displaySimonSays();
        }
    }
}
async function displaySimonSays(){
    if(currLength==8){
        alert("CORRECT! You get to open the gift labeled " + words[1] + '!');
    }
    else{
        canClick = false;
        currGuess = [];
        for(var i =0; i < currLength; i++){
            var selectedBtn;
            if(pattern[i] == 'red'){selectedBtn=redBtn}
            else if(pattern[i] == 'blue'){selectedBtn=blueBtn}
            else if(pattern[i] == 'yellow'){selectedBtn=yellowBtn}
            else if (pattern[i] == 'green'){selectedBtn=greenBtn}
            selectedBtn.style.backgroundColor = 'white'
            console.log(pattern[i]);
            await delay(1000);
            selectedBtn.style.backgroundColor = pattern[i];
        }
        canClick = true;
    }
}
function hideForm(){
    document.querySelector('#submitForm').style.display = "none";
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
function addImage(file, width){
    var img = document.createElement('img');
    img.src = file;
    img.style = "width:" + width + "%;"
    puzzleDiv.appendChild(img);
}