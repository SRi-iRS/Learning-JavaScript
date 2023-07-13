function HtmlElement(){
    this.click = function(){
         console.log("clicked");
    }
}

HtmlElement.prototype.focus = function(){
    console.log("Focused");
}

function HtmlSelectElement(items = []){
    this.items = items || [];

    this.addItem = function(val){
        console.log(this.items);
        this.items.push(val);
        console.log('item Added');
        console.log(this.items);
    }

    this.removeItem = function(val){
        const index = this.items.indexOf(val);
        this.items.splice(index,1);
        console.log(`item removed ${this.items}`);
    }

    this.render = function(){
        return `<select> ${this.items.map(item => 
            `<option>${item}</option>`)}</select>`;
    }


}

function HTMLImageElement(src = "src")
{
    this.src = src;
    this.render = function(){
        return `htttp:// ${this.src}`;
    }
}
HtmlSelectElement.prototype = new HtmlElement();
//HtmlSelectElement.prototype.constructor = HtmlSelectElement;


// HtmlSelectElement.prototype.click = function(){
//     console.log("CLicked here");
// }
//
// const e = new HtmlElement();

// e.click();

// e.focus();

const hs = new HtmlSelectElement([1,2,3, 4, 5]);

// hs.addItem(1);
// hs.addItem(2);
// hs.click();
// hs.focus();
// hs.removeItem(1);
// hs.removeItem(1);


console.log(hs.render());

const img = new HTMLImageElement("dfadf");

console.log(img.render());

const elements = [ new HtmlSelectElement([1,2,3,4,5]), new HTMLImageElement("dfadf")];

for(let element of elements){
    console.log(element.render());
}