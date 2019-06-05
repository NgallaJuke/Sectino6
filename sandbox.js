const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    } else if (p.textContent.includes('success')) {
        p.classList.add('success');
    }
});

const title = document.querySelector('title');
title.classList.toggle('test'); //add to the class named title another class name named test
title.classList.toggle('test'); //hte seconde time we use it is gonna remove it 
//innerText give us all the text visible (a text with a style of hidden wont be return istend of texContente that will give the hidden text)