var u=0;
var penutup="I Love You. I Really Do.";

function play(){
var audio = new Audio('Nothings Gonna Change My Love For You.mp3');
audio.play();
}

async function reaksi(){
await Swal.fire('Radeya Abqary Brianjaya ♡','Love is like the wind. You can’t see it, but you can feel it.');
await Swal.fire('Tolong cintai aku seperti kamu mencintai Cah Ayu, Mas Deya. 😔☝🏻');
}

const swals = Swal.mixin({
backdrop:'rgba(0,0,123,0.4)',
confirmButtonColor:'#55009E',
allowOutsideClick:false
});

async function mulai(){

await swals.fire({
title:'Hai, Radeya Abqary Brianjaya.',
imageUrl:'Sticker 1.gif',
imageWidth:120
});

await swals.fire({
title:'Mengagumimu adalah hal terindah, dan mengenal sosokmu adalah sebuah anugerah.',
imageUrl:'Sticker 2.gif',
imageWidth:120
});

await swals.fire({
title:'Sifaf dewasamu menjadi hal yang paling kusuka, dengan tutur kata lembutmu menjadi bagian dari yang kupuja.',
imageUrl:'Sticker 7.gif',
imageWidth:120
});

await swals.fire({
title:'Terima kasih sudah hadir di saat semua hal terasa begitu berat untuk dijalani dan dilalui.',
imageUrl:'Sticker 3.gif',
imageWidth:120
});

await swals.fire({
title:'Menjadi bagian dari hidup kelamku, menemaniku saat terpuruk, dan menghiburku ketika terluka.',
imageUrl:'Sticker 4.gif',
imageWidth:120
});

await swals.fire({
title:'Kehadiranmu bagai gerimis dalam kemarau panjang yang menakutkan, juga menjadi ramai dalam sunyi yang menyeramkan.',
imageUrl:'Sticker 5.gif',
imageWidth:120
});

await swals.fire({
title:'Terima kasih sudah hadir, terima kasih sudah ada, dan terima kasih karena telah tercipta.',
imageUrl:'Sticker 6.gif',
imageWidth:120
});

play();
ketik();
expl();
}

mulai();

function tombol(){
document.getElementById('tomAksi').style.visibility="visible";
document.getElementById('tomAksi').style.opacity="1";
}

function expl(){
aksifoto();
document.getElementById('bodyblur').style.opacity="1";
document.getElementById('bodyblur').style.visibility="visible";
setTimeout(duar,200);
}

function aksifoto(){
var e1=document.getElementById('animasi');
e1.classList.add("degdeg");
}

function duar(){
document.body.style.backgroundColor="#000";
}

const body=document.querySelector("body");

function createHeart(){
const heart=document.createElement("div");
heart.className="fas fa-heart";
heart.style.left=(Math.random()*90)+"vw";
heart.style.animationDuration=(Math.random()*3)+2+"s";
body.appendChild(heart);
}

setInterval(function(){
var heartArr=document.querySelectorAll(".fa-heart");
if(heartArr.length>50){
heartArr[0].remove();
}
},100);

function ketik(){
if(u<penutup.length){
document.getElementById("penutup").innerHTML+=penutup.charAt(u);
u++;
setTimeout(ketik,110);
}

if(u==penutup.length){
tombol();
setInterval(createHeart,300);
}
}
