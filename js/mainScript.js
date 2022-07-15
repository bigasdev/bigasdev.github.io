
document.getElementById("twitterButton").addEventListener("click", () => {window.open("https://twitter.com/bigasdev");})
document.getElementById("githubButton").addEventListener("click", () => {
        window.open("https://github.com/bigasdev");
})

function checkForScroll(){
    var toc = document.getElementById("toc")
    if(toc != null){
        document.addEventListener("scroll", ()=>{
                var y = window.scrollY;
                if(y >= 180){
                        toc.style.opacity = 1;
                        toc.style.visibility = "visible";
                }else{
                        toc.style.opacity = 0;
                        
                }
        })
    }
}

checkForScroll();