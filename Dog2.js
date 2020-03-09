var chalk= require('chalk');

function Dog2(name){
    this.name=name;
    this.stomach=[];
}

Dog2.prototype.eat=function(cat){
    this.stomach.push(cat);
}

Dog2.prototype.sayHi= function(){
    console.log('Hi! I am a dog. My name is ' + chalk.blue(this.name));
}

module.exports=Dog2;