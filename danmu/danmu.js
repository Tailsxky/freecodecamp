window.onload = function(){
  
var arr = [];
var showTable = document.getElementById('showTable');
var inputText = document.getElementById('inputText');
var addText = document.getElementById('addText');
var clearText = document.getElementById('clearText');
var showTableWidth = showTable.clientWidth;
  
 console.log(showTableWidth);

var addTextOnTable = function(){
  var theText = inputText.value;
  if(theText !== "" && theText !== null){
    //arr.push(inputText);
    moveText(theText);
    inputText.value = '';
  }
  else{
    console.log("err");
  }
};

var moveText = function(theText){
  var spanText = document.createElement('span');
  //console.log(theText);
  spanText.innerText = theText;
  showTable.appendChild(spanText);
  

  
  spanText.style.color = getRandomColor();
  spanText.style.fontSize = getRandomFontSize();
  spanText.style.left = showTableWidth  + 'px';
  spanText.style.top = getRandomTop();
  
  var spanTextWidth = spanText.cilenWidth;
  /*setInterval(function(){
    var textLeft = parseInt(spanText.style.left);
    textLeft -= 25;
    spanText.style.left = textLeft + 'px'; 
  }, 111);*/
   
  var a1 = new Animator(10*showTableWidth,  function(p){
  var tx = showTableWidth * p *1.3;
  spanText.style.transform = 'translateX(' + -tx + 'px)'; 
  if(tx > showTableWidth + spanTextWidth){
    spanText.innerText = null;
  }
});
  
 async function move(){
  while(1){
    await a1.animate();
  }
}
  move();
};

var getRandomColor = function(){
  return '#'+(Math.random()*0xffffff<<0).toString(16);
};

var getRandomFontSize = function(){
  var fontSize = Math.floor(Math.random() * 32);
  if(fontSize > 12){
  return fontSize + 'px';
  }
};

var getRandomTop = function(){
  return (Math.floor(Math.random() * 280) + 'px');
};



var removeAllChild = function(){
  while(showTable.hasChildNodes()) //当div下还存在子节点时 循环继续  
   {  
    showTable.removeChild(showTable.firstChild);  
   }  
};

addText.addEventListener("click", addTextOnTable);
clearText.addEventListener("click", removeAllChild);
};
