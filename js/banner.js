/**
 * Created by Administrator on 2016/9/8.
 */
var banner=document.getElementById("banner");
var bannerInner=utils.getElesByClass("bannerInner",banner)[0];
var imgs=bannerInner.getElementsByTagName("img");

var focusList=utils.getElesByClass("focusList",banner)[0];
var lis=focusList.getElementsByTagName("li");

var leftBtn=utils.getElesByClass("left",banner)[0];
var rightBtn=utils.getElesByClass("right",banner)[0];

//获取数据
;(function getData(){
    var xhr=new XMLHttpRequest();
    xhr.open("get","data.txt?_="+Math.random(),false);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
            window.data=utils.jsonParse(xhr.responseText);
        }
    };
    xhr.send(null);
})();
console.log(data);
//绑定数据，回填数据
;(function bindData(){
    if(window.data){
        var str="";
        var strLis="";
        for(var i=0;i<data.length;i++){
            var curData=data[i];
            str+="<div><img src='' realSrc="+curData.src+"/></div>";
            strLis+=i==0?"<li class='selected'></li>":"<li></li>";
        }
        bannerInner.innerHTML=str;
        focusList.innerHTML=strLis;
    }
})();
//图片延迟加载
window.setTimeout(imgsDelayLoad,400);
function imgsDelayLoad(){
    for(var i=0;i<imgs.length;i++){
        if(i==0){//默认让第一张图片显示，让包含着第一张图片的div的样式的默认的index的值从0设置为1，还要把透明度从0动画到1；
            utils.css(imgs[i].parentNode,"zIndex",1);
            animate(imgs[i].parentNode,{opacity:1},300);
        }
        (function (i){
            var curImg=imgs[i];//当前
            var tempImg=new Image();//临时图片
            tempImg.src=imgs[i].getAttribute("realSrc");
            tempImg.onload=function(){
                curImg.src=this.src;
                utils.css(curImg,"display","block");
                /* animate(curImg,{opacity:1},300);*/
            };
            tempImg=null;
        })(i);

    }
}
//自动轮播
var step=0;
var timer=window.setInterval(autoMove,2000);
function autoMove(){
    if(step==data.length-1){
        step=-1;
    }
    step++;
    for(var i=0;i<imgs.length;i++){
        //让所有图片中索引值和step的值相等的哪一张，上升到最高层级1，其他的层级都设置为0
        if(i==step){
            utils.css(imgs[i].parentNode,"zIndex",1);
            //我要立刻把层级上升的这张图片的透明度从0动画到1
            animate(imgs[i].parentNode,{opacity:1},300,function(){
                var siblings=utils.sibling(this) ;  //this===imgs[i].parentNode
                //图片的父级div的所有兄弟节点全部把透明度设置为0，为了保证下一次的渐现效果
                for(var i=0;i<siblings.length;i++){
                    utils.css(siblings[i],"opacity",0);
                }
            })
        }else{
            utils.css(imgs[i].parentNode,"zIndex",0)
        }
    }
    focusAlign();
}
//焦点对齐
function focusAlign(){
    var tempStep=step==data.length?0:step;
    for(var i=0;i<lis.length;i++){
        lis[i].className=step==i?"selected":"";
    }
}
function setBanner(){
    for(var i=0;i<imgs.length;i++){
        //让所有图片中索引值和step的值相等的哪一张，上升到最高层级1，其他的层级都设置为0
        if(i==step){
            utils.css(imgs[i].parentNode,"zIndex",1);
            //我要立刻把层级上升的这张图片的透明度从0动画到1
            animate(imgs[i].parentNode,{opacity:1},300,function(){
                var siblings=utils.sibling(this) ;  //this===imgs[i].parentNode
                //图片的父级div的所有兄弟节点全部把透明度设置为0，为了保证下一次的渐现效果
                for(var i=0;i<siblings.length;i++){
                    utils.css(siblings[i],"opacity",0);
                }
            })
        }else{
            utils.css(imgs[i].parentNode,"zIndex",0)
        }
    }
    for(var i=0;i<lis.length;i++){
        lis[i].className=step==i?"selected":"";
    }
}
//鼠标悬停在轮播图上的时候，停止
banner.onmouseover=function(){
    window.clearInterval(timer);//清空定时器
    leftBtn.style.display=rightBtn.style.display="block";
};
banner.onmouseout=function(){
    timer=window.setInterval(autoMove,2000);
    leftBtn.style.display=rightBtn.style.display="none";
};
//左右点击按钮切换
leftBtn.onclick=function(){
    if(step==0){
        step=data.length;
    }
    step--;//下一次的终点
    setBanner();
    focusAlign();
};
rightBtn.onclick=autoMove;

//点击焦点切换
;(function bingEventLis(){//给所有焦点绑定事件
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;//用自定义属性的方式给每个焦点保存自己的索引值
        lis[i].onclick=function(){
            step=this.index;//点击哪一个焦点，就把焦点对应的索引值赋值给全局的step变量，而这个变量是控制下一次哪一张图片显示
            //把这个step的值重新修改也是为了保证下次自动轮播的时候，从现在这个点击切换过来的图片开始
            setBanner();
            focusAlign();
        }
    }
})();


