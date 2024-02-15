
// show preview
document.querySelector('form').addEventListener('submit', (event)=> {
    event.preventDefault(); //

});


function previewPage(){
    const nextBtn = document.querySelector('.next');
    const backBtn = document.querySelector('#back');
    const previewSection = document.querySelector('.preview');
    const mainSection = document.querySelector('.main');
    nextBtn.addEventListener('click', () => {
        previewSection.classList.remove("hide");
        mainSection.classList.add("hide");
    });
    backBtn.addEventListener('click', () => {
        previewSection.classList.add("hide");
        mainSection.classList.remove("hide");
    });
}

previewPage();
