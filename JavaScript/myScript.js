$(document).ready(function(){
   $("#button1").click(function(){
     $("#myDiv").load("JavaScript/Ajax-attraction.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
            alert("External content loaded successfully!");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});
});
