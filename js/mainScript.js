
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

function checkForContact(){
     var contactPanel = document.getElementById("contact")
     if(contactPanel!=null){
        var pin = document.getElementById('pin')
        var buttons = document.querySelectorAll('.get-my-contact .sign').forEach(element =>{
                element.addEventListener('mouseenter', ()=>{
                        element.appendChild(pin)
                })
        })
     }
}

checkForScroll();
checkForContact()