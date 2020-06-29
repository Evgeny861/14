function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize  = fontSize;
}

let styleElem = new DomElement('.block', 100, 120, 'rgb(206, 32, 32)', 14);




DomElement.prototype.createOfIf = function(){

    let div = document.createElement('div');
        this.selector[0] === '.'  ?   div.className = this.selector.substring(1) : div.id = this.selector.substring(1);

        document.body.append(div);

    let el = document.querySelector(this.selector);

    el.style.height = this.height + 'px';

    el.style.width = this.width + 'px';

    el.style.background = this.bg;

    el.style.fontSize = this.fontSize + 'px';

    el.innerHTML = ('Любой текст');

};

let newElementOfClass = new DomElement('#cool', 300, 420, 'rgb(50, 55, 210)', 18);

newElementOfClass.createOfIf();
styleElem.createOfIf();
