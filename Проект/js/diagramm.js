var target = $('.skills_tools');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
let x = -100
$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop + x> scrollToElem){
      x = -10000
        $(".dial").knob();
        $({animatedVal: 0}).animate({animatedVal: 90}, {
            duration: 2000,
            easing: "swing",
            step: function() { 
                $(".dial").val(Math.ceil(this.animatedVal)).trigger("change"); 
            }   
        }); 
        $(".dial1").knob();
        $({animatedVal: 0}).animate({animatedVal: 75}, {
            duration: 2000,
            easing: "swing",
            step: function() { 
                $(".dial1").val(Math.ceil(this.animatedVal)).trigger("change"); 
            }   
        }); 
        $(".dial2").knob();
        $({animatedVal: 0}).animate({animatedVal: 70}, {
            duration: 2000,
            easing: "swing",
            step: function() { 
                $(".dial2").val(Math.ceil(this.animatedVal)).trigger("change"); 
            }   
        }); 
        $(".dial3").knob();
        $({animatedVal: 0}).animate({animatedVal: 85}, {
            duration: 2000,
            easing: "swing",
            step: function() { 
                $(".dial3").val(Math.ceil(this.animatedVal)).trigger("change"); 
            }   
        }); 
    }
});









