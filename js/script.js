
$( function() {
  //1
  $("p").on ("click",function(){
    $(this).hide();
  });
  //2  
  $("#p1").on("mouseleave",function(){
    alert("Bye! You now leave p1!");
  });

//3
  $("#hide").on("click",function(){
    $("p").hide();
  });
  $("#show").on("click",function(){
    $("p").show();
  });
//4
  $("button").on("click",function(){
    $("p").toggle();
  });
  //5
  $("button").on("click",function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
  //6
  $("button").on("click",function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });
//7
  $("#flip").on("mouseenter",function(){
    $("#panel").slideToggle("slow");
  });
//8
   $("button").click(function(){
    $("div").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
//stop
   $("#b").on("click",function(){
    $("#a").slideDown(5000);
  });
  $("#stop").on("click",function(){
    $("#a").stop();
  });
//set
    $("#btn1").on("click",function(){
    $("#test1").text("Hello world!");
  });
  $("#btn2").on("click",function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").on("click",function(){
    $("#test3").val("Dolly Duck");
  });



  } );