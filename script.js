// deklarasi dom
const ham=document.querySelector('.hamburger');
const link=document.querySelector('.link');
const nav=document.querySelector('nav');
const nama=document.querySelector(".judul h1");
const ketik=document.querySelector(".ketik");
// event click navbar
ham.addEventListener('click',()=>{
    ham.classList.toggle('aktif');
    link.classList.toggle('active');
})
// membuat animasi pada judul
// deklarasi properti
let char=0;
let namaS=nama.textContent.split('');
console.log(namaS);
nama.textContent="";
// aksi 
namaS.forEach(function(a,b){
    nama.innerHTML+=`<span>${a}</span>`;
})
let tinggiNama;
window.onresize=function(){
    tinggiNama=getComputedStyle(nama).height;
}
let timer=setInterval(function(){
    const span=nama.querySelectorAll('span')[char];
    span.classList.add('muncul');
    char++;
    // tambahin efek ketik
    ketik.style.height=tinggiNama;
    if(char==namaS.length){
        complete();
        return;
    }
},250);
function complete(){
    clearInterval(timer);
}








