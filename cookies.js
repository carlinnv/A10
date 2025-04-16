timesVisited = 0; 


document.cookie = "visited=" + timesVisited+"; expires=Thu, 18 Dec 2026 12:00:00 UTC; SameSite=None";

function showCookies() {
    const output = document.getElementById("cookies"); 
    output.textContent = `> ${document.cookie}`;
}

function addToCookies() {
    timesVisited+=1; 
    document.cookie= "visited=" + timesVisited + "; SameSite=None"; 
    const output = document.getElementById("cookies"); 
    output.textContent = `> ${document.cookie}`;
}

function clearOutputCookies() {
    const output = document.getElementById("cookies"); 
    timesVisited = 0; 
    document.cookie = "visited=" + timesVisited+"; expires=Thu, 18 Dec 2026 12:00:00 UTC; SameSite=None";
    output.textContent = `> ${document.cookie}`;
}
