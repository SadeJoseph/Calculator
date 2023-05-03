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