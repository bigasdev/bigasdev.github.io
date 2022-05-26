
document.getElementById("twitterButton").addEventListener("click", () => {window.open("https://twitter.com/bigasdev");})
document.getElementById("githubButton").addEventListener("click", () => {
        window.open("https://github.com/bigasdev");
})

let pageName = "";

function loadProjectsToolsPage(test){
     pageName = test;
     console.log(pageName);
     location.href='../Pages/projectPage.html';
}       