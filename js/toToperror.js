var btn=document.getElementsByClassName("rightbottomhidden3")[0];
var timer=null;
btn.onclick = function () {
    var duration = 800,
        interval = 16,
        timer = null;
    var curHeight = utils.win("scrollTop");
    var speed=curHeight/duration*interval;
    clearInterval(timer);
    timer=setInterval(function(){
        if(curHeight<=0){
            clearInterval(timer);
            utils.win("scrollTop",0);
        }
        curHeight-=speed;
        utils.win("scrollTop",curHeight);
    },interval)
};










