function rem(){var f=document.getElementById("uname").value;
var h=document.getElementById("remember").checked;
if(h==true){var j=new Date();j.setTime(j.getTime()+(5*1000));
var g=j.toGMTString();j.setTime(j.getTime()+(259200*1000));
var k=j.toGMTString();document.cookie="uname="+f+";expires="+k+"";
document.cookie="error=1;expires="+g+""}
else{return}}function getCookie2(){var d=new Date();d.setTime(d.getTime()+(5*1000));
var e=d.toGMTString();var f=document.cookie.split(";");
for(i=0;i<f.length;i++){name_value=f[i];str=name_value.substring(0,6);
if(str.indexOf("uname")!==-1){uname=name_value.split("=");
uname=uname[1]}if(str.indexOf("error")!==-1){return}}if(uname!=""){document.cookie="error=1;expires="+e+"";
window.location.href="login?username="+uname+""}}getCookie2();
