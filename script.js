let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let textslider = document.getElementById('textslider');




slide1.addEventListener("mouseenter", function (){
    console.log('ca marche')
    slide1.classList.add('active');
    slide1.classList.remove('unactive');
    slide2.classList.remove('active');
    slide2.classList.add('unactive');
    slide3.classList.remove('active');
    slide3.classList.add('unactive');

    textslider.innerHTML= "Conçu pour supporter d importantes charges de travail avec toute la flexibilité dont vous avez <br> besoin, quelle que soit votre activité"

    
})

slide2.addEventListener("mouseenter", function (){
    slide2.classList.add('active');
    slide2.classList.remove('unactive');
    slide1.classList.remove('active');
    slide1.classList.add('unactive');
    slide3.classList.remove('active');
    slide3.classList.add('unactive');

    textslider.innerHTML="Utilisez tous les outils et logiciels habituels de votre PC pour créer des projets étonnants : <br> design, photographie, UX, web, vidéo, et plus"
    
})

slide3.addEventListener("mouseenter", function (){
    slide3.classList.add('active');
    slide3.classList.remove('unactive');
    slide2.classList.remove('active');
    slide2.classList.add('unactive');
    slide1.classList.remove('active');
    slide1.classList.add('unactive');

    textslider.innerHTML="Profitez de l expérience de jeu native d un PC Windows et accédez à tous vos jeux à travers <br> une expérience de streaming de haute qualité, d une haute résolution et d un frame rate <br> supérieurs, sans latence perceptible"
    
})


