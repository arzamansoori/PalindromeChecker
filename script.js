const val = document.getElementById("val");
const para = document.getElementById("para");
const btn = document.getElementById("btn");
let paraVal;

function palindromeChecker(){
    const rev = val.value.split(" ").join("");
    return rev.split("").reverse().join("");
}



btn.addEventListener("click", () =>{
    paraVal = palindromeChecker();
    if(paraVal == val.value.split(" ").join("")){
        para.innerHTML = `${val.value} is a Palindrome`
    }
    else{
        para.innerHTML = `${val.value} is not a Palindrome`
    }
    val.value =" ";
})