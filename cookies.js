timesVisited = 0; 


document.cookie = "visited=" + timesVisited+"; expires=Thu, 18 Dec 2026 12:00:00 UTC; SameSite=None";

function showCookies() {
    const output = document.getElementById("cookies"); 
    output.textContent = `> ${document.cookie}`;
}

function addToCookies() {
    timesVisited+=1; 
    document.cookie= "visited=" + timesVisited + "; SameSite=None; Secure"; 
    const output = document.getElementById("cookies"); 
    output.textContent = `> ${document.cookie}`;
}

function clearOutputCookies() {
    const output = document.getElementById("cookies"); 
    timesVisited = 0; 
    document.cookie = "visited=" + timesVisited+"; expires=Thu, 18 Dec 2026 12:00:00 UTC; SameSite=None; Secure";
    output.textContent = `> ${document.cookie}`;
}
