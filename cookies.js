document.cookie = "name=Carlin; SameSite=None; Secure";
document.cookie = "favorite_food=tripe; SameSite=None; Secure";

function showCookies() {
    const output = document.getElementById("cookies"); 
    output.textContent = `> ${document.cookie}`;
}

function clearOutputCookies() {
    const output = document.getElementById("cookies"); 
    output.textContent = ""; 
}

console.log("hello"); 
console.log(document.cookie); 