const cor1 = document.querySelector('#cor1');
const cor2 = document.querySelector('#cor2');
const cor3 = document.querySelector('#cor3');
const cor4 = document.querySelector('#cor4');
const cor5 = document.querySelector('#cor5');
const cor6 = document.querySelector('#cor6');

const image = document.querySelector('#image');

const enfeite = document.querySelector('#enfeite')


cor1.addEventListener('click', () =>{
  mudarCor1();
});

cor2.addEventListener('click', () =>{
  mudarCor2();
});

cor3.addEventListener('click', () =>{
  mudarCor3();
});


cor4.addEventListener('click', () =>{
  mudarCor4();
});


cor5.addEventListener('click', () =>{
  mudarCor5();
});

cor6.addEventListener('click', () =>{
  mudarCor6();
});


function mudarCor1(){
  image.setAttribute('src', 'https://images2.imgbox.com/e6/fc/0jkjI9Gv_o.png')
  enfeite.setAttribute('class', 'enfeiteAzul')
}

function mudarCor2(){
  image.setAttribute('src', 'https://images2.imgbox.com/5d/3c/MHnsZKyS_o.png')
  enfeite.setAttribute('class', 'enfeiteAmarelo')
}


function mudarCor3(){
  image.setAttribute('src', 'https://images2.imgbox.com/6b/fe/XZEYSLph_o.png')
  enfeite.setAttribute('class', 'enfeiteBranco')
}


function mudarCor4(){
  image.setAttribute('src', 'https://images2.imgbox.com/09/a9/39eYpsOO_o.png')
  enfeite.setAttribute('class', 'enfeitePreto')
}

function mudarCor5(){
  image.setAttribute('src', 'https://images2.imgbox.com/df/39/EziD6mJ9_o.png')
  enfeite.setAttribute('class', 'enfeiteVermelho')
}

function mudarCor6(){
  image.setAttribute('src', 'https://images2.imgbox.com/a0/01/5zsFDNNc_o.png')
  enfeite.setAttribute('class', 'enfeiteRoxo')
}