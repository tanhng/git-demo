var dog=require('./Dog2');
var cat=require('./Cat');
var cho=new dog('Tun');
var tom=new cat();
cho.sayHi();
cho.eat(tom);
console.log(cho);