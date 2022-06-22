document.querySelectorAll('.art-block-gallery img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        document.querySelector('.popup-image button').innerHTML = image.getAttribute('alt');
    }
});

document.querySelector('.popup-image').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}
