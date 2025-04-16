document.cookie = "visited=0; SameSite=None; Secure";

timesVisited = 0; 

function showCookies() {
    const output = document.getElementById("cookies"); 
    output.textContent = `> ${document.cookie}`;
}

function addToCookies() {
    timesVisited+=1; 
    document.cookie= "visited=" + timesVisited + "; SameSite=None; Secure"; 
}

function clearOutputCookies() {
    const output = document.getElementById("cookies"); 
    timesVisited = 0; 
    output.textContent = ""; 
}
