
let taskbar = document.querySelector(".taskbar"); 
let startmanu = document.querySelector(".startmanu");


taskbar.addEventListener( "click" , function()  {
    console.log("komal");
    
    if (startmanu.style.bottom == "50px") {
        startmanu.style.bottom = "-650px"
    }else{
        startmanu.style.bottom = "50px"
    }
} ) ;

