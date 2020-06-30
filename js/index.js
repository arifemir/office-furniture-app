const navbar = document.getElementById('navbar');

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.lb');
images.forEach(img => {
  img.addEventListener('click',e => {
    lightbox.classList.add('active');
    let image = document.createElement('img');
    image.src = img.src;
    lightbox.appendChild(image);
  })
})

lightbox.addEventListener('click',function(e) {
  if(e.target !== e.currentTarget) return
  lightbox.classList.remove('active');
  lightbox.innerHTML = '';
})

let scrolled = false;
window.onscroll = function() {
  if(window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if(!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function() {
      navbar.style.transform = 'translateY(0px)';
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
}

