const val = document.getElementById("val");
const para = document.getElementById("para");
const btn = document.getElementById("btn");
let paraVal;

function palindromeChecker(){
    return val.value.split("").reverse().join("");
}



btn.addEventListener("click", () =>{
    paraVal = palindromeChecker();
    if(paraVal == val.value){
        para.innerHTML = `${paraVal} is a palindrome`
    }
    else{
        para.innerHTML = `${paraVal} is not a palindrome`
    }
})