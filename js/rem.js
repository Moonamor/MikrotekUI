
<script language="JavaScript" type="text/javascript">
        function rem(){
        var uname = document.getElementById('uname').value;
        var paswd = document.getElementById('paswd').value;
        var rem   = document.getElementById('remember').checked;
        if(rem == true){
        var date = new Date();
        date.setTime(date.getTime()+(5*1000));
        var expires = date.toGMTString();
        date.setTime(date.getTime()+(259200*1000));
        var expire  = date.toGMTString();
        document.cookie = 'uname='+uname+';expires='+expire+'';
        document.cookie = 'paswd='+paswd+';expires='+expire+'';
        document.cookie = 'error=1;expires='+expires+'';
        }
        else{
        return;
        }
        }
        function getCookie(){

        var date = new Date();
        date.setTime(date.getTime()+(5*1000));
        var expires = date.toGMTString();
        var SP = document.cookie.split(';');
        for (i=0; i < SP.length; i++) {
        name_value = SP[i];
        str = name_value.substring(0,6);
        if(str.indexOf("uname") !== -1){
        uname = name_value.split('=');
        uname = uname[1];
        }
        if(str.indexOf("paswd") !== -1){
        paswd = name_value.split('=');
        paswd = paswd[1];
        }
        if(str.indexOf("error") !== -1){
        return;
        }
        }
        if(uname != ""){
        document.cookie = 'error=1;expires='+expires+'';
        window.location.href='login?username='+uname+'&password='+paswd+'';
        }
        }
       getCookie();
    </script>