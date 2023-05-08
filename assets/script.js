//grab input box element. 
let answer = document.getElementById("screen");
//grabs history list
let historyList = document.getElementById("history-list");;

//to add number clicked into input box
let calculate=(num)=>{
    answer.value+=num;
}

// e an array to store the history of calculations
let history = [];

// Function to add an item to the history list
function addToHistory(item) {
  // Add to the beginning of the array
  history.unshift(item);
  
  // list to a maximum of 3 items
  if (history.length > 3) {
    history.pop();
  }
  // Update the history list in the HTML adding after every input
  historyList.innerHTML = "";
  for (let i = 0; i < history.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = history[i];
    historyList.appendChild(listItem);
  }
}

// Function to clear the history list
function clearHistory() {
 history = [];
historyList.innerHTML = "";
}

//  calculation and add it to the history list
function answerAndAddHistory() {
    
  let result;
  if (answer.value.trim () === ''){
    answer.value = '';
    return; 
  }
  try {
    result = eval(answer.value);
    addToHistory(answer.value + " = " + result);
  } catch (error) {
    alert("Enter a valid calculation");
    return;
    
  }
  answer.value = result;
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

