function addClass(ID,Classname){
    var cClass = ID.getAttribute("class");
    if (cClass!=null) {
        cClass =" "+ ID.className+" ";
        var noClass = new RegExp(" "+Classname+" ")
        var nClass = noClass.exec(cClass)
        if (nClass == null) {
            var Class = ID.setAttribute("class",cClass+" "+Classname);
        }else{
            // alert("输入重复")
        };  
    }else{
        var Class = ID.setAttribute("class",Classname);
    };
}
function removeClass(ID,Classname){
    if (ID.className !=null) {
        var cClass =" "+ ID.className+" ";
        var noClass = new RegExp(" "+Classname+" ","g");
        var nClass = cClass.replace(noClass," ");
        var Class = nClass.trim();
        ID.className = Class;
    };
}

var nava = document.getElementById('nav-top').getElementsByTagName('ul')[0].getElementsByTagName('a');
for(var i = 0;i<nava.length;i++){
    nava[i].onclick = function(){ 
        for(var j = 0;j<nava.length;j++){
            var add = document.getElementById('nav-top').getElementsByTagName('ul')[0].getElementsByTagName('img');
            addClass(add[j],"sjyc");
        };
        var remove = this.parentNode.getElementsByTagName('img')[0];
        removeClass(remove,"sjyc");
        for(var p = 0;p<nava.length;p++){
            var ad = document.getElementById('nav-top').getElementsByTagName('ul')[0].getElementsByTagName('a');
            addClass(ad[p],"sjbs");
        };
        var rem = this.parentNode.getElementsByTagName('a')[0];
        removeClass(rem,"sjbs");
        var na = document.getElementsByClassName('nav-a');
        var nbtm = document.getElementsByClassName('nav-bottom');
        var index = 0;
        for(var g = 0;g<na.length;g++){
            na[g].index = g;
            addClass(nbtm[g],"box-no");
        };
        removeClass(nbtm[this.index],"box-no");
       return false;
    }
}

function dianji(obj){
    for(var i = 0; i<obj.length;i++){
        obj[i].onclick = function(){
            for(var n = 0; n<obj.length;n++){
                removeClass(obj[n],"colorno");  
             }
             addClass(this,"colorno");
        } 
    }
}

var freshF = document.getElementsByClassName('freshFiery')[0].getElementsByTagName('li');
dianji(freshF);
var price = document.getElementsByClassName('price')[0].getElementsByTagName('li');
dianji(price);

var like = document.getElementsByClassName('love')[0].getElementsByTagName('a')[0];
var kaiguan = 1;
like.onclick = function(){
    var likeNum = document.getElementsByClassName('love-p1')[0].innerHTML;
    var lovea = document.getElementById('love');
    if (kaiguan) {
        likeNum = Number(likeNum)+1;
        document.getElementsByClassName('love-p1')[0].innerHTML= likeNum;
        kaiguan = 0;
        addClass(lovea,"love-a");
    }else{
        likeNum = Number(likeNum)-1;
        document.getElementsByClassName('love-p1')[0].innerHTML= likeNum;
        kaiguan = 1;
        removeClass(lovea,"love-a");
    };
    return false;
}

var collect = document.getElementsByClassName('collect');
for(var x = 0; x < collect.length; x++){
    collect[x].onclick = function(event){
        var e = event.target;
        var collectA = event.target.parentNode.getElementsByTagName('a');
        var span0 = event.target.parentNode.getElementsByTagName('span')[0];
        var span1 = event.target.parentNode.getElementsByTagName('span')[1];
        var span2 = event.target.parentNode.getElementsByTagName('span')[2];
        var sp0Class = event.target.parentNode.getElementsByTagName('span')[0].getAttribute("class");
        var sp1Class = event.target.parentNode.getElementsByTagName('span')[1].getAttribute("class");
        var sp2Class = event.target.parentNode.getElementsByTagName('span')[2].getAttribute("class");
        if (e == collectA[0]) { 
            if (sp0Class) {
                var spanh0 = event.target.parentNode.getElementsByTagName('span')[0].innerHTML;
                event.target.parentNode.getElementsByTagName('span')[0].innerHTML = Number(spanh0) - 1;
                span0.setAttribute("class","");
                removeClass(e,"jiayi");
            }else{
                var spanh0 = event.target.parentNode.getElementsByTagName('span')[0].innerHTML;
                event.target.parentNode.getElementsByTagName('span')[0].innerHTML = Number(spanh0) + 1;
                span0.setAttribute("class","jiayi");
                addClass(e,"jiayi");
            };
        }else if(e == collectA[1]){
            if (sp1Class) {
                var spanh1 = event.target.parentNode.getElementsByTagName('span')[1].innerHTML;
                event.target.parentNode.getElementsByTagName('span')[1].innerHTML = Number(spanh1) - 1;
                span1.setAttribute("class","");
                removeClass(e,"jiayi");
            }else{
                var spanh1 = event.target.parentNode.getElementsByTagName('span')[1].innerHTML;
                event.target.parentNode.getElementsByTagName('span')[1].innerHTML = Number(spanh1) + 1;
                span1.setAttribute("class","jiayi");
                addClass(e,"jiayi");
            };
        }else if(e ==collectA[2]){
            if (sp2Class) {
                var spanh2 = event.target.parentNode.getElementsByTagName('span')[2].innerHTML;
                event.target.parentNode.getElementsByTagName('span')[2].innerHTML = Number(spanh2) - 1;
                span2.setAttribute("class","");
                removeClass(e,"jiayi");
            }else{
                var spanh2 = event.target.parentNode.getElementsByTagName('span')[2].innerHTML;
                event.target.parentNode.getElementsByTagName('span')[2].innerHTML = Number(spanh2) + 1;
                span2.setAttribute("class","jiayi");
                addClass(e,"jiayi");
            };
        };
        
        return false;
    }
}
