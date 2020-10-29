var btn=document.querySelector('.btn');
var inp=document.querySelector('.inp');
btn.addEventListener('click',function(){
    if(inp.value==''){
        alert('enter valid username')
    }
    else{
        var 
        win=window.open('https://google.com','blank');
        
        win.focus()
    }
    
})