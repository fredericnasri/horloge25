
    $(document).ready(function(e){
        horlog();
     });
     function horlog() {
         var d=new Date();
        $("#neddlehours").css("transform","rotate("+30*d.getHours()+"deg)");
        $("#needleminutes").css("transform","rotate("+6*d.getMinutes()+"deg)");
        $("#neddlseconds").css("transform","rotate("+6*d.getSeconds()+"deg)");
        $("#digital").html(d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds());
        setTimeout (horlog, 1000);
     }
