document.getElementById('high').addEventListener('click', function myFunction() {
    var figure = parseInt(document.getElementById('figure').innerHTML)
    if( figure >=50){
        var nextNum = figure
         document.getElementById('figure').innerHTML= nextNum
    }
    else{
        var nextNum = figure +1
        document.getElementById('figure').innerHTML= nextNum 
    }
    })



document.getElementById('low').addEventListener('click', function myFunction() {
    var figure = parseInt(document.getElementById('figure').innerHTML)
    if( figure <=0){
        var nextNum = figure
         document.getElementById('figure').innerHTML= nextNum
    }
    else{
        var nextNum = figure -1
        document.getElementById('figure').innerHTML= nextNum 
    }
    })