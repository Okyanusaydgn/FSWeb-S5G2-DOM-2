import './less/index.less'

// click event
// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 document.querySelector("h1").addEventListener("click",function(e){
 alert("Bana tıkladın!")
});



// load event
window.addEventListener("load",(event) => {
    

    setTimeout((event) => {
        document.querySelector("body").setAttribute
        ("style","background : red");
    },2000)
});

let body = document.querySelector("body");

// resize event
//  !!! Ekranın boyutunu değiştirerek sayfanın rengini değiştirdik. 200 den küçük olduğu zaman kırmızı; 400 den küçük olduğu zaman mavi ... bu şekilde devam ediyor !!!!
/*
window.addEventListener("resize",() =>{
    let body = document.querySelector("body");


    if (window.innerWidth < 200){
        body.style.background = "red";
    }
    else if(window.innerWidth < 400) {
        body.style.background = "blue";
    }
    else if(window.innerWidth < 800) {
        body.style.background = "yellow";
    }
    else if(window.innerWidth < 1000) {
        body.style.background = "green";
    } else{
        body.style.background = "unset"; // eğer hiçbir rengi istemiyorsan sayfanın orjinal rengini istiyorsan direk "unset" yapısını kullanabiliriz.
    }
})
*/


// focus event
let input = document.querySelector("input");

input.addEventListener("focus", () => {
    input.style.border = "2px solid red";
});


// keydown event
// !!!!! Aşağıdaki kodda amacımıaz sayıların ve harflerin;karakterlerin numarasını veriyor. Mesela ; a ya tıkladığımız zaman 65 ; b ye tıkladığımız zaman 66. Bu şekilde ... 
/*
input.addEventListener("keydown",(event) =>{
    console.log(event.keyCode);
}); 
*/



// keydown event
/* !!!!!! bu kodda event.code ve event.key i kullanarak ekran a gelip inspect e tıkladık ve tıkladığımız zaman hangi tuşa bastığımızı gördük ve bir tuşa bastığımız zaman ekranın rengini değiştirdik.
input.addEventListener("keydown",(event) =>{
    if(event.code === "Digit3") {
        body.style.background = "red";
    } else if (event.code === "Digit2") {
        body.style.background = "green";
    }else if (event.key === "A") {
        body.style.background = "yellow";
    }
    

    console.log(event.key);
}); 
*/



// mouseover/dblick event

//  !!! Mouse ile çift tıkladığmız zaman ekranın rengini değiştirebiliriz.  
/*
let imageElements = document.querySelectorAll("img"); // şuan bu satır bir array.
const color = ["white","blue","yellow","green","red"]; 
imageElements.forEach(image => {
    image.addEventListener("mouseover",(event) => {
        event.target.classList.toggle("gray");              // gray adlı bir class yaratmak için soldaki dosyalardan src klasörüne girip oradaki less klasörüne giricez .less dinamik bir style yani css paraçsıdır.CSS leri dinamik olarak oluşturmanı sağlayan özel bir dil.
    });
    image.addEventListener("dblclick", (event)=>{
        let index = Math.floor(Math.random()*5);
        document.querySelector("body").style.
        background = color[index];
    });

});
*/

// 1 - mouseout/remove  event             
//  !!!!üzerine gelip grip renk ekleme ve kaldırma !!!!

// burada toggle kullanarak mouse resme geldiği zaman gri renk varsa çıkaracak yoksa ekleyecek
// eğer resmin üzerinden çıktığımız zaman eski rengine dönmesini istiyorsak aşağıdaki kodu comment out yapıp deneyebilirsin.
/* 
image.addEventListener("mouseout", (event) => {
event.target.classList.remove("gray");
});
});
*/
// Bu arada küçük bir not ---> let document.querySelectorAll("img").addEventListener ----> addEventListener ı kullanamassın çünkü let document.querySelectorAll("img") bir array.  addEventListener array in her bir elemanı için kullanabilirsin.



// drag / drop event
// !!!! Şimdi bir resmi sürükleme ve bırakma işlemini yapacağız  
/*
Bunun için önce index.html kısmına gelip 40.satırdaki kodda img a draggable:"true" yu ekliyoruz
*/

/*
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.src);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.src=data;
  }
*/
//html dosyasında img-content class adlı yapıya draggable="true" ve id="img2" yazdık div class="container home" adlı yapıya da id="img" ekledik.
  document.getElementById("img2").addEventListener("dragstart", (ev)=>{
    ev.dataTransfer.setData("text", ev.target.src);
  })

  document.getElementById("img1").addEventListener("drop", (ev)=>{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.src=data;
  })

  document.getElementById("img1").addEventListener("dragover", (ev)=>{
    ev.preventDefault();
  })