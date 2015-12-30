$(function()
              
              { 
               
                $(".mynav a).click(function(e){
e.preventDefault();
                    
                    $(this).effect("pulsate",{times:10},300);

                    var step =3- $(this).index();

                    var background = "";

                    if (step == 1) 

                    {

                        background = "#21B9EB" //light blue

                        $("#s1").addClass(".actives1",300);

                    } 
                    else if (link == 2) 

                    {

                        background = "#146FA6" //blue

                        $("#s2").addClass(".actives2",300);

                    } 
                    else if (link == 3)
                    {

                        background = "#6B238E" //purple
                        $("#s3").addClass(".actives3",300);

                    }
                    
                    s = $(this.hash).offset().top - 50;

                    $("body, html").stop().animate({ scrollTop:pos,

                                                    backgroundColor:background }, 1000);
                    
                    
});
              });