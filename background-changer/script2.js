document.body.style.backgroundImage="linear-gradient(135deg, rgb(30,87,153) 0%,rgb(125,185,232) 100%)";

// background: linear-gradient(135deg, rgb(30,87,153) 0%,rgb(125,185,232) 100%);

function newBackground() {
    let rA = Math.floor(Math.random()*200);
    let gA = Math.floor(Math.random()*200);
    let bA = Math.floor(Math.random()*200);

    function newColors(a,b,c) {
        let rB = Math.floor(rA*(Math.random()+1.2));
        let gB = Math.floor(gA*(Math.random()+1.2));
        let bB = Math.floor(bA*(Math.random()+1.2));

        document.body.style.backgroundImage= "linear-gradient(-135deg, rgb("+a+","+b+","+c+") 0%, rgb("+rB+","+gB+","+bB+") 100%)";

        setInterval(() => {
            let rC = Math.floor(rB*(Math.random()-1));
            let gC = Math.floor(gB*(Math.random()-1));
            let bC = Math.floor(bB*(Math.random()-1));
            document.body.style.backgroundImage= "linear-gradient(-135deg, rgb("+rC+","+gC+","+bC+") 0%, rgb("+rB+","+gB+","+bB+") 100%)";

        }, 15000);
    }

    newColors(rA,gA,bA);
    setInterval(() => {
        newColors(rA,gA,bA);
    }, 3000);

}

newBackground();