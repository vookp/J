 var xloadClass = "xload";
    var body = document.querySelector("body");
    body.classList += " " + xloadClass;

   
    var my_awesome_script = document.createElement('script');

    
    var internalSrc = ''; 
    if (internalSrc) {
        my_awesome_script.setAttribute('src', internalSrc);
        document.head.appendChild(my_awesome_script);
    } else {
        console.log("No external script source allowed.");
    }
