//---------------1. GetELementsById------------------------
let header = document.getElementById('page-header'); 
let h1 = document.getElementById('main-heading');
let p1 = document.getElementById('para1'); 
let p2 = document.getElementById('para2');
let button = document.getElementById('btn');
let p4 = document.getElementById('para4')
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let black = document.getElementById('black');

//-----------------Header ----------------------------------------
h1.innerHTML = 'New DOM Layout'; 
header.classList.remove('bg-dark');
header.classList.add('bg-success'); //added class with classList.add() property
document.querySelector('.bg-success').style.backgroundColor = "red";

//--------------------------Paragraph-----------------
p1.append('The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.');
p2.append('The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.')

//---------------------------Event-----------

button.addEventListener("click",clickMe); 

function clickMe(){ 
    p4.append ('The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.');
    
}

//---------------------------CardColors--------------- 
var cards = document.getElementsByClassName('card-body'); 
cards[0].classList.add('bg-danger')
cards[1].classList.add('bg-primary');
cards[2].classList.add('bg-warning');
cards[3].classList.add('bg-success');
cards[4].classList.add('bg-dark');