 // GET PIN CODE 
 const generateBtn = document.getElementById('pin-generate');
 generateBtn.addEventListener("click", function(){
     const getPin = document.getElementById('get-pin').value;
     const generateBtn = Math.random();
     const pinRandom = Math.round(1000 + generateBtn * 9000);
     const replacePin = Math.round(1000 + generateBtn * 9000)
     const finalPin = getPin;
     var showPinOnWindow = finalPin + pinRandom;
     document.getElementById('get-pin').value = showPinOnWindow;
     if (getPin.length > 3) {
        document.getElementById('get-pin').value = replacePin;
        
     } 
 })
 // SHOW NUMBER ON WINDOW


//number 7

 const number7 = document.getElementById("number-7");
 number7.addEventListener("click", function(){
 var CurrentDisplayNumber = document.getElementById('current-display-number').value;
 var showNumber = CurrentDisplayNumber + 7;
 document.getElementById("current-display-number").value = showNumber;
 
 })
//number 8
 const number8 = document.getElementById("number-8");
 number8.addEventListener("click", function(){
 var CurrentDisplayNumber = document.getElementById('current-display-number').value;
 var showNumber = CurrentDisplayNumber + 8;
 document.getElementById("current-display-number").value = showNumber;
 })
//number 9
const number9 = document.getElementById("number-9");
 number9.addEventListener("click", function(){
 var CurrentDisplayNumber = document.getElementById('current-display-number').value;
 var showNumber = CurrentDisplayNumber + 9;
 document.getElementById("current-display-number").value = showNumber;
 })
//number 4
const number4 = document.getElementById("number-4");
     number4.addEventListener("click", function(){
     var CurrentDisplayNumber = document.getElementById('current-display-number').value;
     var showNumber = CurrentDisplayNumber + 4;
     document.getElementById("current-display-number").value = showNumber;
     })
//number 5
const number5 = document.getElementById("number-5");
 number5.addEventListener("click", function(){
 var CurrentDisplayNumber = document.getElementById('current-display-number').value;
 var showNumber = CurrentDisplayNumber + 5;
 document.getElementById("current-display-number").value = showNumber;
 })
//number 6
const number6 = document.getElementById("number-6");
 number6.addEventListener("click", function(){
 var CurrentDisplayNumber = document.getElementById('current-display-number').value;
 var showNumber = CurrentDisplayNumber + 6;
 document.getElementById("current-display-number").value = showNumber;
 })
//number 1
const number1 = document.getElementById("number-1");
 number1.addEventListener("click", function(){
 var CurrentDisplayNumber = document.getElementById('current-display-number').value;
 var showNumber = CurrentDisplayNumber + 1;
 document.getElementById("current-display-number").value = showNumber;
 })
//number 2 
const number2 = document.getElementById("number-2");
 number2.addEventListener("click", function(){
 var CurrentDisplayNumber = document.getElementById('current-display-number').value;
 var showNumber = CurrentDisplayNumber + 2;
 document.getElementById("current-display-number").value = showNumber;
 })

//number 3
const number3 = document.getElementById("number-3");
 number3.addEventListener("click", function(){
 var CurrentDisplayNumber = document.getElementById('current-display-number').value;
 var showNumber = CurrentDisplayNumber + 3;
 document.getElementById("current-display-number").value = showNumber;
 })
//number 0 
const number0 = document.getElementById("number-0");
 number0.addEventListener("click", function(){
 var CurrentDisplayNumber = document.getElementById('current-display-number').value;
 var showNumber = CurrentDisplayNumber + 0;
 document.getElementById("current-display-number").value = showNumber;
 })


//number delete 

const deleteNum = document.getElementById("delete-num");
 deleteNum.addEventListener("click", function(){
     let deleteNum = document.getElementById('current-display-number').value;
 const newNum = (deleteNum).toString().slice(0, -1);
     document.getElementById("current-display-number").value = newNum ;
 })
// all clear 
const clearButton = document.getElementById("clear-btn");
 clearButton.addEventListener("click", function(){
     let clearNum = document.getElementById('current-display-number').value;
     clearNum = "";
     const showInterface = clearNum;
     document.getElementById('current-display-number').value = showInterface;
 })
// submit button 
 const submitButton = document.getElementById("submit-button");
 submitButton.addEventListener("click", function(){
     if (document.getElementById('current-display-number').value === document.getElementById('get-pin').value) {
         document.getElementById("matched-button").style.display = "block";
         document.getElementById("unmatched-button").style.display = "none";
     }
     if (document.getElementById('current-display-number').value != document.getElementById('get-pin').value) {
         document.getElementById("unmatched-button").style.display = "block";
         document.getElementById("matched-button").style.display = "none";
         const tryNum = document.getElementById("notification").innerText;
         const convertNum = +tryNum;
         const finalShow = convertNum + 1;
         document.getElementById("notification").innerText = finalShow;
             
     } 

     
 })
 
