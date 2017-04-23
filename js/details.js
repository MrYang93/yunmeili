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

var smb = document.getElementsByClassName('smallBig')[0].getElementsByTagName('li');
for(var i=0;i<smb.length;i++){
    smb[i].onclick = function(){
        var img = this.getElementsByTagName('img')[0].getAttribute("src");
        var daimg = document.getElementsByClassName('largeBig')[0].getElementsByTagName('img')[0];
        daimg.setAttribute("src",img);
        for(var j=0;j<smb.length;j++){
            removeClass(smb[j],"smB");
        }
        addClass(this,"smB");
    }
}