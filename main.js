console.log("hello world");
var str='';
for(var i=1;i<=10;i++)
{
    console.log(i);
    str += i+' ';
}
document.querySelector('#output').innerHTML =str;