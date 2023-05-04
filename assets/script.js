//grab input box element. 
let answer = document.getElementById("screen");
//to add number clicked into input box
let calculate=(num)=>{
    answer.value+=num;
}
// perform operation


let Answer =()=> {
    //evaluate and stop invalid operation ie * then - isnt valid. 
    try{
     answer.value=eval(answer.value)
    }
    catch(err){

       alert("Enter a valid calculation")
    }
    
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
function openB()
{
    answer.value+= "(";
}

function closeB()
{
    answer.value+= ")";
}
