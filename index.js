var x;
var y;
x=10;
y=11;
var texto = "O valor de x+y é: ";
function soma(x,y){
    return (texto+(x+y))
}
function contnum(z){
    for(i=0; i<z; i++)
        console.log(i);
}
console.log(soma(2,3));
contnum(3);