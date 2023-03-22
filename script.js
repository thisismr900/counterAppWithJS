
var countValue =document.getElementById('count');

function incr(){

    var newValue=parseInt(countValue.innerText);
    newValue+=1;
    document.getElementById('count').innerText=newValue;
}
function decr(){

    var newValue=parseInt(countValue.innerText);
    if(newValue==0)
    {    document.getElementById('count').innerText=0;
         return;
    }    
    newValue-=1;
    document.getElementById('count').innerText=newValue;
}

function resetToZero()
{
    var newValue=0;
    document.getElementById('count').innerText=newValue;
}
