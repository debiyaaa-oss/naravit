var u = 0;
var penutup = "I Love You. I Really Do.";

function play(){
  var audio = new Audio('Nothings Gonna Change My Love For You.mp3');
  audio.play();
}

// SweetAlert Config
const swals = Swal.mixin({
  backdrop: 'rgba(0,0,123,0.4)',
  confirmButtonColor: '#55009E',
  cancelButtonColor: '#FFCA00',
  allowOutsideClick: false,
});

// Popup awal
async function mulai(){
  await swals.fire({
    title: 'Hai, Radeya Abqary Brianjaya.',
    imageUrl: 'Sticker 1.gif',
    imageWidth:120,
    imageHeight:120,
  });

  await swals.fire({
    title: 'Mengagumimu adalah hal terindah, dan mengenal sosokmu adalah sebuah anugerah.',
    imageUrl: 'Sticker 2.gif',
    imageWidth:120,
    imageHeight:120,
  });

  await swals.fire({
    title: 'Sifaf dewasamu menjadi hal yang paling kusuka.',
    imageUrl: 'Sticker 7.gif',
    imageWidth:120,
    imageHeight:120,
  });

  play();
  ketik();
  expl();
}

async function reaksi(){
  await swals.fire(
    'Radeya Abqary Brianjaya ♡',
    'Love is like the wind. You can’t see it, but you can feel it.'
  );

  await swals.fire(
    'Tolong cintai aku seperti kamu mencintai Cah Ayu, Mas Deya.'
  );
}

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
  document.getElementById('fotoloveu').style.opacity="1";
  document.getElementById('fotoloveu').style.height="180px";
  document.getElementById('fotoloveu').style.margin="50px 0 0 0";
}

function duar(){
  document.body.style.backgroundColor="#000";
}

// Efek hati
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

// Jalankan saat halaman load
mulai();

