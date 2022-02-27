const container1 = document.querySelector('.container')
const button1 = document.querySelector('.button-1');
const onlyText = document.querySelector('.only-text');

const hex = [1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F'];



button1.addEventListener('click', () => {

    hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomIndex()]
        document.querySelector('.only-text').innerText = hexColor
    }

    document.body.style.backgroundColor = hexColor;
    


})


const getRandomIndex = () => {
   return Math.floor(Math.random() * hex.length)
}