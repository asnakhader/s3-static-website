$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
  
  //
  
  
  $(".divs div").each(function(e) {
      if (e != 0)
          $(this).hide();
  });
 
   $("#prev").click(function(){
      if ($(".divs div:visible").prev().length != 0)
          $(".divs div:visible").prev().show().next().hide();
      else {
          $(".divs div:visible").hide();
          $(".divs div:last").show();
      }
      return false;
  });
 
  $("#next").click(function(){
      if ($(".divs div:visible").next().length != 0)
          $(".divs div:visible").next().show().prev().hide();
      else {
          $(".divs div:visible").hide();
          $(".divs div:first").show();
      }
      return false;
  });
  
  //
});

