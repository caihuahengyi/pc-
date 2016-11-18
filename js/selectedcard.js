var spans=document.getElementsByTagName("span");
var oDivs=utils.getElesByClass("box7div");
for( var i=0;i<spans.length;i++){
    spans[i].index=i;
    spans[i].onclick=function(){
        for(var j=0;j<spans.length;j++){
            spans[j].className="";
            //oDivs[j].className="";
        }
        this.className="cur";
        //oDivs[this.index].className="cur";
    }
}