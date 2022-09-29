document.addEventListener('click',function(e){
 console.log(e.target);

if(e.target.classList.contains('gallery-item')){
const src= e.target.getAttribute('src');
const alt = e.target.getAttribute('alt');

document.querySelector('.modal-title').textContent = alt;
document.querySelector('.modal-img').src = src;
 const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
 myModal.show();


}
})