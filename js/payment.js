//
function G(id){
	return document.getElementById(id)
}
function addClass(obj,name){
			var old=obj.getAttribute("class");

			if(old==null){
					obj.setAttribute("class",name);
			}else{
				if(old.match(name) == null){
					if(old!=null){
						obj.setAttribute("class",old+" "+name);
					}else{
						obj.setAttribute("class",name);
					}
					// old!=null?obj.setAttribute("class",old+" "+name):
					// obj.setAttribute("class",name)
				}
			}
		}
function removeClass(obj1,name1){
			var old=obj1.getAttribute("class");

			if(old!=null){
				var arr=old.split(" ");
				function fun(num){
					return num!=name1;

				}
				var newArr=arr.filter(fun);//当括号里返回值是ture
				var newName=newArr.join(" ");
				obj1.className=newName;
			}
		}
//导航划过变色
var arrLinav=G("daohang").getElementsByTagName('li');
for (var i = 0; i < arrLinav.length; i++) {

	arrLinav[i].onclick=function(event){
		for (var j = 0; j < arrLinav.length; j++) {
			removeClass(arrLinav[j].getElementsByClassName('wai')[0],"fense")
			removeClass(arrLinav[j].getElementsByClassName('shang')[0],"fense")
			removeClass(arrLinav[j].getElementsByClassName('xia')[0],"fense")
			removeClass(arrLinav[j].getElementsByTagName('a')[0],"fontcolor")
		}
		var wai=this.getElementsByClassName('wai')[0];
		console.log(wai)
		var shang=this.getElementsByClassName('shang')[0];
		var xia=this.getElementsByClassName('xia')[0];
		var a=this.getElementsByTagName('a')[0]
		addClass(wai,"fense")
		addClass(shang,"fense")
		addClass(xia,"fense")
		addClass(a,"fontcolor")
		event.preventDefault()
	}
}


var arrmoren=document.getElementsByClassName('shezhimoren')
var arrp=G("dizhi").getElementsByTagName('p');
console.log(arrp)
for (var i = 0; i < arrp.length; i++) {
	console.log(arrp[i].parentNode)
	arrp[i].parentNode.onmouseenter=function(){
		for (var m = 0; m < arrp.length; m++) {
			var li0=arrp[m].parentNode;
			removeClass(li0,"libg0")
			var shezhimoren0=arrp[m].parentNode.getElementsByClassName('shezhimoren')[0]
			if(shezhimoren0){
				removeClass(shezhimoren0,"db")
			}
		}
		var shezhimoren=this.getElementsByClassName('shezhimoren')[0]
		if(shezhimoren){
			addClass(shezhimoren,"db")
		}
		addClass(this,"libg0")

	}
	arrp[i].onclick=function(event){
		for (var j = 0; j < arrp.length; j++) {
			arrp[j]
			var img=arrp[j].parentNode.getElementsByTagName('img')[0];
			var span=arrp[j].parentNode.getElementsByTagName('span')[0];
			var radio=arrp[j].parentNode.getElementsByTagName('input')[0];
			var Li=arrp[j].parentNode;
			removeClass(img,"db")
			removeClass(span,"db")
			removeClass(arrp[j],"fs")
			removeClass(Li,"libg")
			radio.checked=false;
		}
		var img1=this.parentNode.getElementsByTagName('img')[0];
		var span1=this.parentNode.getElementsByTagName('span')[0];
		var radio1=this.parentNode.getElementsByTagName('input')[0];
		var Li1=this.parentNode;
		addClass(img1,"db")
		addClass(span1,"db")
		addClass(this,"fs")
		addClass(Li1,"libg")
		radio1.checked=true;
		event.preventDefault()
	}
}
//地址a阻止跳转
$(".dizhi a").click(function(event){
	event.preventDefault()
})
//订单a阻止跳转
$(".goods>p a").click(function(event){
	event.preventDefault()
})
$(".tijiao a").click(function(event){
	event.preventDefault()
})
$(".nav-right a").click(function(event){
	event.preventDefault()
})
$(".yonghuxinxi a").click(function(event){
	event.preventDefault()
})
//点击图片到详情页
$(".xiangqing>img:nth-child(2)").click(function(){
	window.location.href="../pages/xiangqingye.html"
})
//结算
var goods=document.getElementsByClassName('goods');
function getSubTotal(goods){
	var test=goods.getElementsByClassName('zhekou')[0];
	console.log(test.value)
	var subtotal = 0;
	subtotal = parseFloat(goods.getElementsByClassName("yuanjia")[0].innerHTML) * parseInt(goods.getElementsByClassName("num")[0].value)*test.value;
	goods.getElementsByClassName("xiaoji")[0].innerHTML = subtotal.toFixed(2);
}
function getAllTotal(){
	var yunfei=document.getElementsByClassName('yunfei')[0];
	var price = 0;//合计
	for(var i = 0;i<goods.length;i++){//遍历商品个数
		if(goods[i].getElementsByClassName("checkone")[0].checked == true){
			//商品选中
			price=price+parseFloat(goods[i].getElementsByClassName("xiaoji")[0].innerHTML)+parseInt(yunfei.value);
			// selected+=parseInt(goods[i].getElementsByClassName("num")[0].value)
		}
	}
	document.getElementById("total1").innerHTML = price.toFixed(2);
	document.getElementById("total2").innerHTML = price.toFixed(2);
	// document.getElementById("selected").innerHTML = selected;
}
//复选框
var arrcheck=document.getElementsByClassName('check');
var checkall=document.getElementsByClassName('checkall')[0];
var checkone=document.getElementsByClassName('checkone');
console.log(checkone)
checkall.onclick=function(){
	for (var i = 0; i < arrcheck.length; i++) {
		arrcheck[i].checked=this.checked;
	}
	getAllTotal()
}

for (var j = 0; j < checkone.length; j++) {
	console.log(checkone[j])
	checkone[j].onclick=function(){
		var kaiguan=1;
		for (var m = 0; m < checkone.length; m++) {
			if(checkone[m].checked==false){
				kaiguan=0;
			}
		}
		if(kaiguan==1){
			checkall.checked=true;
		}
		if(kaiguan==0){
			checkall.checked=false;
		}
	}
}


for(var i = 0;i<goods.length;i++){
	goods[i].onclick = function(event){
		var e = event || window.event;
		var tar = e.target || e.srcElement;
		var cls = tar.className;
		var num = parseInt(tar.parentNode.parentNode.getElementsByClassName("num")[0].value)
		switch (cls){
			case "jia":
			num+=1;tar.parentNode.parentNode.getElementsByClassName("checkone")[0].checked = true;break;
			case "jian":
			if(num>1){
				num-=1;break
			}
		}
		tar.parentNode.parentNode.getElementsByClassName("num")[0].value = num;
		getSubTotal(tar.parentNode.parentNode)
		getAllTotal()
	}
}
//获取selectvalue
yunfei.onclick=function(){
	getAllTotal()
}
//
