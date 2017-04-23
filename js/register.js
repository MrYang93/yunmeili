function checkUserName() { //验证邮箱方法
  var userName = document.getElementById("userName").value;
  var nameWarning = "邮箱格式正确";
  if (!(new RegExp("\\S+")).test(userName)) { //判断用户名是否为空
    //alert("请输入用户名！");
    nameWarning = "请输入用户名！";
    document.getElementById("namechick").innerText = nameWarning;
    return false;
  }else if (!(new RegExp("^([A-z0-9/-/_/.]){3,16}@([A-z]+[-.])+[A-z]{2,5}$")).test(userName)) {  //邮箱格式
    // alert('邮箱格式有误');
    nameWarning = "邮箱格式有误！";
    document.getElementById("namechick").innerText = nameWarning;
  }
  document.getElementById("namechick").innerText = nameWarning;
  return true;
}
document.getElementById('userName').onblur = function(){//验证邮箱
  checkUserName();
}

function checkPassword() {  //验证密码方法
  var pwdWarning = "密码格式正确";
  var password = document.getElementById("password").value;
  if (password != ""&& !(new RegExp("^(\\s*)$")).test(password)) {  //密码不为空且没有空白字符
    if(!/[0-9A-z]{6,16}/.test(password)) {       //密码不是6位的字符或数字
        pwdWarning = "密码为6~16位的字母或数字";
    }
  } else {        //密码为空
    pwdWarning = "请输入密码！";
    document.getElementById("pwdchick").innerText = pwdWarning;
    return false;
  }
  document.getElementById("pwdchick").innerText = pwdWarning;
  return true;
}
document.getElementById('password').onblur = function(){  //验证密码
  checkPassword();
}
document.getElementById('_password').onblur = function(){  //确认密码
  var password = document.getElementById("password").value;
  var _password = document.getElementById("_password").value;
  var _pwdWarning = "密码确认正确";
  if (!(_password===password)) {
    _pwdWarning = '密码确认有误,请重新输入'
  }
  document.getElementById("_pwdchick").innerText = _pwdWarning;
}

function checkNicheng() {  //验证昵称方法
  var nichengWarning = "请输入昵称";
  var nicheng = document.getElementById("nicheng").value;
  if (nicheng != ""&& !(new RegExp("^(\\s*)$")).test(nicheng)){ //昵称不为空
    if (!(new RegExp("[\\w]{3,12}")).test(nicheng)) {
       nichengWarning = "昵称不符合";
       //return false;
    }else{
      nichengWarning = "昵称可用";
    }
  }
  document.getElementById("nichengchick").innerText = nichengWarning;
  return true;
}
document.getElementById('nicheng').onblur = function(){
  checkNicheng();
}
