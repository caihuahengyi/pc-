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

//��ȡ����
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
//�����ݣ���������
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
//ͼƬ�ӳټ���
window.setTimeout(imgsDelayLoad,400);
function imgsDelayLoad(){
    for(var i=0;i<imgs.length;i++){
        if(i==0){//Ĭ���õ�һ��ͼƬ��ʾ���ð����ŵ�һ��ͼƬ��div����ʽ��Ĭ�ϵ�index��ֵ��0����Ϊ1����Ҫ��͸���ȴ�0������1��
            utils.css(imgs[i].parentNode,"zIndex",1);
            animate(imgs[i].parentNode,{opacity:1},300);
        }
        (function (i){
            var curImg=imgs[i];//��ǰ
            var tempImg=new Image();//��ʱͼƬ
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
//�Զ��ֲ�
var step=0;
var timer=window.setInterval(autoMove,2000);
function autoMove(){
    if(step==data.length-1){
        step=-1;
    }
    step++;
    for(var i=0;i<imgs.length;i++){
        //������ͼƬ������ֵ��step��ֵ��ȵ���һ�ţ���������߲㼶1�������Ĳ㼶������Ϊ0
        if(i==step){
            utils.css(imgs[i].parentNode,"zIndex",1);
            //��Ҫ���̰Ѳ㼶����������ͼƬ��͸���ȴ�0������1
            animate(imgs[i].parentNode,{opacity:1},300,function(){
                var siblings=utils.sibling(this) ;  //this===imgs[i].parentNode
                //ͼƬ�ĸ���div�������ֵܽڵ�ȫ����͸��������Ϊ0��Ϊ�˱�֤��һ�εĽ���Ч��
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
//�������
function focusAlign(){
    var tempStep=step==data.length?0:step;
    for(var i=0;i<lis.length;i++){
        lis[i].className=step==i?"selected":"";
    }
}
function setBanner(){
    for(var i=0;i<imgs.length;i++){
        //������ͼƬ������ֵ��step��ֵ��ȵ���һ�ţ���������߲㼶1�������Ĳ㼶������Ϊ0
        if(i==step){
            utils.css(imgs[i].parentNode,"zIndex",1);
            //��Ҫ���̰Ѳ㼶����������ͼƬ��͸���ȴ�0������1
            animate(imgs[i].parentNode,{opacity:1},300,function(){
                var siblings=utils.sibling(this) ;  //this===imgs[i].parentNode
                //ͼƬ�ĸ���div�������ֵܽڵ�ȫ����͸��������Ϊ0��Ϊ�˱�֤��һ�εĽ���Ч��
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
//�����ͣ���ֲ�ͼ�ϵ�ʱ��ֹͣ
banner.onmouseover=function(){
    window.clearInterval(timer);//��ն�ʱ��
    leftBtn.style.display=rightBtn.style.display="block";
};
banner.onmouseout=function(){
    timer=window.setInterval(autoMove,2000);
    leftBtn.style.display=rightBtn.style.display="none";
};
//���ҵ����ť�л�
leftBtn.onclick=function(){
    if(step==0){
        step=data.length;
    }
    step--;//��һ�ε��յ�
    setBanner();
    focusAlign();
};
rightBtn.onclick=autoMove;

//��������л�
;(function bingEventLis(){//�����н�����¼�
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;//���Զ������Եķ�ʽ��ÿ�����㱣���Լ�������ֵ
        lis[i].onclick=function(){
            step=this.index;//�����һ�����㣬�Ͱѽ����Ӧ������ֵ��ֵ��ȫ�ֵ�step����������������ǿ�����һ����һ��ͼƬ��ʾ
            //�����step��ֵ�����޸�Ҳ��Ϊ�˱�֤�´��Զ��ֲ���ʱ�򣬴������������л�������ͼƬ��ʼ
            setBanner();
            focusAlign();
        }
    }
})();


