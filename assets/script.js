//grab input box element. 
let answer = document.getElementById("screen");
//grabs history list
let historyList = document.getElementById("history-list");

//to add number clicked into input box
let calculate=(num)=>{
    answer.value+=num;
}
// an array to store the history of calculations
let history = [];
//  add an item to the history list
function addToHistory(item) {
 // Update the history list in the HTML adding after every input
  historyList.innerHTML = "";
  for (let i = 0; i < history.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = history[i];
    historyList.appendChild(listItem);
  }
}

// do calculation and add it to the history list
function answerAndAddHistory() {
 let result;
  //check empty input field
  if (answer.value.trim () === ''){
    answer.value = '';
    return;
  }

  try { // eval input and adds input and equald and reuslt to history box
    result = eval(answer.value); 
    addToHistory(answer.value + " = " + result); // passes thru adds to history func  to create list
  } catch (err) {  // stop invalid operation i.e * then -
    alert( "Enter a valid calculation")
    return; 
    
  }
  answer.value = result;
}


// Function to clear the history list
function clearHistory() {
    history = [];
    historyList.innerHTML = "";
  }
 //clear date on screen when AC clicked
function clr() {
    answer.value= "";
}
// delete single character from input box 
function del() {
    //slice end value
    answer.value= answer.value.slice(0, -1);

}
// add bracket. 
function openB() {
    answer.value+= "(";
}

function closeB() {
    answer.value+= ")";
}

