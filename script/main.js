// defination of calculator funtion
function calculator(keyVal){
    document.getElementById("screen").value += keyVal;
    }
    
    // defining allclear function and ON
        function allClear(){
       // All clear 
        document.getElementById("screen").value = " ";
        // Turn On
        var screenOn = document.getElementById("screen");
        screenOn.style.backgroundColor = "#ffffff";    
    }
    
    //Calculating the string by 
    function answer(){
        var ans = document.getElementById("screen").value;
        var calAns = eval(ans);
        document.getElementById("screen").value = calAns;
    }
    
    
    // turning off the calculator black window of screen 
    function off(){
        var screenOff = document.getElementById("screen");
        screenOff.style.backgroundColor = "#000000";
    }
    
    
    
    
    
