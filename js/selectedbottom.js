var ul=document.getElementsByClassName("bottom5ul")[0];
var olis=document.getElementsByClassName("bottom5a2");
var bottom4ul=document.getElementsByClassName("bottom4ul");
for(var i=0;i<olis.length;i++) {
   /* if(olis[i].classList.contains('last-btn'))
    {
        continue;
    }*/
    olis[i].index = i;
    olis[i].onclick = function (){
        this.className="bottom5a2 selected ";
        bottom4ul[this.index].className="bottom4ul selected";
        for (var j= 0; j < olis.length; j++) {
            if (this.index!==j) {
                /*if(olis[j].classList.contains('last-btn')) {
                    continue;
                }*/
                olis[j].className="bottom5a2";
                bottom4ul[j].className="bottom4ul";
            }
        }
    }
}






