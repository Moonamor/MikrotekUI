function notification()
{
var error="$(error)";
if(error=="simultaneous session limit reached"){document.write("المعذرة ، هذا الحساب مستخدم حالياً في جهاز آخر . ")}
else{if(error=="invalid password"){document.write("تاكد من كتابة كلمة المرور بشكل صحيح");
else{if(error=="uptime limit reached"){document.write("عذراً لقد انتهى الوقت المتاح لك..");
else{if(error=="invalid username or password")
{document.write("خطا في رمز الدخول تاكد من كتابته بشكل صحيح");
else{if(error.search("uptime limit")!=-1){document.write("لقد انتهى رصيد هذا الحساب");
else{if(error.search(" traffic limit")!=-1){document.write("لقد انتهى رصيد تحميل هذا الحساب");
else{if(error=="no valid profile found"){document.write("لفد انتهت صلاحية هذا الحساب .");
else{if(error=="transfer limit reached"){document.write("انتهى التحميل المحدد لهذا الحساب  .");
else{if(error.search("not found")!=-1){document.write("خطا في رمز الدخًـــول تاكد من كتابته بشكل صحيح");
else{if(error.search("no more sessions are allowed for user $(username)")!=-1){document.write("الكرت مستخدم حاليا في جهاز اخر");
else{if(error.search("traffic-limit")!=-1){document.write("انتهى التحميل المحدد للكرت");
else{document.write("$(error)
}