//console.log("Hello World!")
//alert("Notifikasi")
//prompt("Pinjam Seratus")

//var Promnet = "Coding is Easy"
//console.log(Promnet)
//var Promnet = "Coding not Easy"
//console.log(Promnet)

//let Promnet = "Coding is Easy"
//console.log(Promnet)
//const Promnet = "Coding not Easy"
//console.log(Promnet)

// const Promnet = "Coding not Easy"
// console.log(Promnet)
// Promnet = "Coding is Easy"
// console.log(Promnet)

// let totalPoin = prompt("Masukkan Poin Anda")
// if(totalPoin>100)
// {
//     document.write("<h1>Congratulation</h1>");
// }else
// {
//     document.write("<h1>Thank You<h1>")
// }

// let x=6;
// let y=3;

// let a=(x<10&&y>1);
// let b=(x<10&&y<1);
// let c=(x==5||y==5);
// let d=(x==6||y==5);
// let e=!(x==y);

// if (a) {
//     console.log("(x < 10 && y > 1) = true");
// } else {
//     console.log("(x < 10 && y > 1) = false");
// }

// if (b) {
//     console.log("(x < 10 && y < 1) = true");
// } else {
//     console.log("(x < 10 && y < 1) = false");
// }

// if (c) {
//     console.log("(x == 5 || y == 5) = true");
// } else {
//     console.log("(x == 5 || y == 5) = false");
// }

// if (d) {
//     console.log("(x == 6 || y == 5) = true");
// } else {
//     console.log("(x == 6 || y == 5) = false");
// }

// if (e) {
//     console.log("!(x == y) = true");
// } else {
//     console.log("!(x == y) = false");
// }

let p=document.querySelector("p")
let button=document.querySelector("button")
let input=document.querySelector("input")

button.addEventListener('click', function(){
    let isi=input.value
    console.log(isi)
    p.innerHTML=isi
})
