window.onload=function(){
  function addClass(DOM,Name){
    var AuldClass = DOM.getAttribute("class");
    if (AuldClass!=null) {
      AuldClass =" "+ DOM.className+" ";
      var REClass = new RegExp(" "+Name+" ")
      var SortClass = REClass.exec(AuldClass)
      if (SortClass == null) {
        var NewClass = (AuldClass+" "+Name).trim();
        DOM.setAttribute("class",NewClass);
      }else{
        // alert("输入重复")
      };
    }else{
      var NewClass = Name.trim();
      DOM.setAttribute("class",Name);
    };
  }
  function removeClass(DOM,Name){
    var AuldClass =" "+ DOM.className+" ";
    var REClass = new RegExp(" "+Name+" ","g");
    var SortClass = AuldClass.replace(REClass," ");
    var NewClass = SortClass.trim();
    console.log(NewClass);
    DOM.className = NewClass;
  }

  var ul = document.getElementById("ul");
  var pic = document.getElementById("box");
  var inner = document.getElementById("box1");
  var li = document.getElementById("ul").getElementsByTagName("li");
  var zuo = document.getElementById("zuo");
  var you = document.getElementById("you");
  var index = 1;
  var timer = null;
  //设置一个变量来存放自动轮播定时器
  var timer2 = null;
  var action = false; //轮播图的开关,避免动画时中间被点乱
  function animate(mover){ //动画效果方法,方法传入一个位移的距离
    action = true;
    var time = 300; //总时间
    var interval = 10;  //定时器时间
    var speed = mover/(time/interval);  //速度,总距离/单次时间(不要忘记这是js,没有动画就创造动画)
    var newLeft = parseInt(inner.style.left) + mover;
    function go(){
      clearInterval(timer); //清除上次定时器 防止卡顿,混乱
      if((speed < 0 && parseInt(inner.style.left) > newLeft) || (speed > 0 && parseInt(inner.style.left) < newLeft)){ //判断当前位置是否到达
        inner.style.left = parseInt(inner.style.left) + speed + "px";
        timer=setInterval(go,interval); //设置新的定时器
      }else{
        action = false;
        inner.style.left = newLeft + "px";
        if(parseInt(inner.style.left) < -3840){ //判断是否_过_了最前面一张
        inner.style.left = -960 + "px";
        }
        if(parseInt(inner.style.left) > -960){  //判断是否_过_了最后面一张
        inner.style.left = -3840 + "px";
        }
      }
    }
    go(); //调用animate方法是,目的就是调用go()
  }
  zuo.onclick = function(){
    if(action){
        return;
    }
    animate(960);
    if(index==1){
        index=4;
    }else{
        index--;
    }
    showButton();
  }
  you.onclick = function(){
    if(action){
        return;
    }
    animate(-960);
    if(index==4){
        index=1;
    }else{
        index++;
    }
    showButton();
  }
  function showButton(){  //移动到第几张图时,列表中显示第几个会变色
    for(var i=0;i<li.length;i++){
      if(li[i].className=="showColor"){
        removeClass(li[i],"showColor");
        break;
      }
    }
    addClass(li[index-1],"showColor");
  }

  ul.onclick=function(event){ //定位的列表
    var tar = event.target;
    if(tar.nodeName.toLowerCase() == "li"){ //检测点击的标签,并转换成小写
      var id = parseInt(tar.getAttribute("id"));
      var offset = (id-index) * -600;
      if(state){
        return;
      }
      animate(offset);
      index = id;
      showButton();
    }
  }

  //通过定时器来不断的点击 next按钮 来实现轮播效果.
  function play(){
    timer2 = setInterval(function(){
      you.onclick();
    },3000);
  }
  //停止轮播函数，清除定时器
  function stop(){
    clearInterval(timer2);
  }
  //给.pic添加移进悬浮和移出事件
  pic.onmouseover = stop;
  pic.onmouseout = play;
  //第一次访问页面开始轮播
  play();

}
