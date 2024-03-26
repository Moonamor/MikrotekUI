var error="$(error)";
if (error=="simultaneous session limit reached") {
 // document.write("المعذرة ، هذا الحساب مستخدم حالياً في جهاز آخر . ")
          document.getElementById("demo").value ="الكرت مستخدم حاليا في جهاز اخر";

} else if (error=="invalid password") {
//  document.write("تاكد من كتابة كلمة المرور بشكل صحيح")
          document.getElementById("demo").value ="الكرت مستخدم حاليا في جهاز اخر";

  } else if (error=="uptime limit reached") {
 // document.write("عذراً لقد انتهى الوقت المتاح لك..")
          document.getElementById("demo").value ="الكرت مستخدم حاليا في جهاز اخر";

   } else if (error=="invalid username or password") {
  //document.write("خطا في رمز الدخول تاكد من كتابته بشكل صحيح")
          document.getElementById("demo").value ="الكرت مستخدم حاليا في جهاز اخر";

   } else if (error.search("uptime limit")!=-1) {
  //document.write("لقد انتهى رصيد هذا الحساب")
        document.getElementById("demo").value ="الكرت مستخدم حاليا في جهاز اخر";

     } else if (error.search(" traffic limit")!=-1) {
 // document.write("لقد انتهى رصيد تحميل هذا الحساب")
        document.getElementById("demo").value ="الكرت مستخدم حاليا في جهاز اخر";

    } else if (error=="no valid profile found") {
 // document.write("لفد انتهت صلاحية هذا الحساب .")
        document.getElementById("demo").value ="الكرت مستخدم حاليا في جهاز اخر";

  } else if (error=="transfer limit reached") {
//  document.write("انتهى التحميل المحدد لهذا الحساب  .")
        document.getElementById("demo").value ="الكرت مستخدم حاليا في جهاز اخر";

   } else if (error.search("not found")!=-1) {
  //document.write("خطا في رمز الدخًـــول تاكد من كتابته بشكل صحيح")
        document.getElementById("demo").value ="الكرت مستخدم حاليا في جهاز اخر";

  } else if (error.search("no more sessions are allowed for user $(username)")!=-1) {
  //document.write("الكرت مستخدم حاليا في جهاز اخر")
      document.getElementById("demo").value ="الكرت مستخدم حاليا في جهاز اخر";

  } else if (error.search("traffic-limit")!=-1) {
  //document.write("انتهى التحميل المحدد للكرت")
    document.getElementById("demo").value ="انتهى التحميل المحدد للكرت";

    } else if (invalid Calling-Station-Id) {
  document.write("هذا الحساب مقترن بجهاز آخر، لمزيد من المعلومات يرجى الاتصال بخدمة العملاء")
 } else {
 // document.write("$(error)<br />")
  document.getElementById("demo").value ="$(error)<br />";
 }