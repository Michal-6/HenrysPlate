var index = 0;
var tests = document.getElementsByClassName('test');
var x = 0;

dis();

function next(){
    tests[index].style.opacity = "0";
    tests[index].style.transform = "translateX(100px)";
    x = -100;
    if(index < 2){
        index += 1;
    }
    else{
        index = 0;
    }
    setTimeout(() => {
        dis(x);
    }, 600);
}
function prev(){
    tests[index].style.opacity = "0";
    tests[index].style.transform = "translateX(-100px)";
    x = 100;
    if(index > 0){
        index -= 1;
    }
    else{
        index = 2;
    }
    setTimeout(() => {
        dis(x);
    }, 600);
}

function dis(x){
    for(var i = 0; i < tests.length; i++){
        tests[i].style.display = "none";
    }
    tests[index].style.opacity = "0";
    tests[index].style.transform = "translateX(0px))";
    if(x == 100){tests[index].style.transform = "translateX(100px)";}
    if(x == -100){tests[index].style.transform = "translateX(-100px)";}
    tests[index].style.display = "flex";
    
    setTimeout(() => {
        tests[index].style.opacity = "1";
        tests[index].style.transform = "translateX(0px)";
    }, 1);
}