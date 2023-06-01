
const btn = document.querySelector('.btn1');

btn.addEventListener('click', function(e) {
    e.preventDefault();
   const v = document.querySelector('.inp1').value="changed";
})


const btnn = document.querySelector('.btn2');

btnn.addEventListener('click', function(e) {
    e.preventDefault();
    alert(document.querySelector('.inp2').value);
});


