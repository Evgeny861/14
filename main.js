document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM готов!");

    
function DomElement(selector, height, width, bg, position){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.position  = position;
}


DomElement.prototype.createOfIf = function(){

    let div = document.createElement('div');
        this.selector[0] === '.'  ?   div.className = this.selector.substring(1) : div.id = this.selector.substring(1);

        document.body.append(div);

    let el = document.querySelector(this.selector);

    el.style.height = this.height + 'px';

    el.style.width = this.width + 'px';

    el.style.background = this.bg;


    el.innerHTML = ('Любой текст');

};
let countTop = 0,
    countRight = 0;
    

let black = new DomElement('.black', 100,100, '#000', 'absolute',);
black.createOfIf();
console.log(black);
let blackSquare = document.querySelector('.black');
blackSquare.style.position = 'absolute';
blackSquare.style.bottom = countTop + 'px';

blackSquare.style.left = countRight + 'px';

document.addEventListener('keydown', function(event) {

    if(event.code === 'ArrowUp') {
        countTop += 10;
        blackSquare.style.bottom = countTop + 'px';
    } 
    else if (event.code === 'ArrowDown') {
        countTop -= 10;
        blackSquare.style.bottom = countTop + 'px';
        console.log(blackSquare);
    }
    else if (event.code === 'ArrowLeft') {
        countRight += 10;
        blackSquare.style.left = countRight + 'px';
        console.log(blackSquare);
    }
    else if (event.code === 'ArrowRight') {
        countRight -= 10;
        blackSquare.style.left = countRight + 'px';
        console.log(blackSquare);
    }
  });
});
