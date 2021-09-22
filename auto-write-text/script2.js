const text = "Hello world this is a autotype text ! ";
let i = 0;

setInterval(() => {
    
    document.body.innerHTML = text.slice(0,i);
    i++;

    if (i > text.length) {
        setTimeout(() => {
            i=0;
            document.body.innerHTML = "";
        
        }, 666);
        
    }
    
}, 130);
