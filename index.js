// // Your code goes here





// // const textToChange = document.querySelector("#text")


// // document.addEventListener("DOMContentLoaded", function() {
// //     textToChange.innerHTML = "This is really cool!";
// // });



















// document.addEventListener('DOMContentLoaded', function(e) {
//     const newPar = document.querySelector('#text')
//     newPar.textContent = "This is really cool!" 
// })
















modP = document.querySelector('#text')

modP.addEventListener('DOMContentLoaded', function(e) {
    e.target.value = "This is really cool"
    console.log(e.target)
})