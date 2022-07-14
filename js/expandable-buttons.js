document.querySelectorAll('.expandable-button').forEach(element => {
    element.onclick = () =>{
        var c = element.querySelector('.content');
        if(c.style.display === 'block'){
            c.style.display = 'none'
        }else{
            c.style.display = 'block'
        }
    }
});