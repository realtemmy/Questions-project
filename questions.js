btns = document.querySelectorAll('button');
text = document.querySelector('.text');
text1 = document.getElementById('text1');
text2 = document.getElementById('text2');
text3 = document.getElementById('text3');

let value = 0


btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        if(btn.classList.contains('plus-btn')){
            if(btn.classList.contains('one')){
                text1.classList.add('show-text')
            }else if(btn.classList.contains('two')){
                text2.classList.add('show-text')
            }else{
                text3.classList.add('show-text')
            }
        }else{
            if(btn.classList.contains('one')){
                text1.classList.remove('show-text')
            }else if(btn.classList.contains('two')){
                text2.classList.remove('show-text')
            }else{
                text3.classList.remove('show-text')
            }
        }
    })
});