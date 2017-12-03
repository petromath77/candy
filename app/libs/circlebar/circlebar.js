(function ($){

    $.fn.bekeyProgressbar = function(options){

        options = $.extend({
          animateText : true
        }, options);

        var $this = $(this);
      
        var $progressBar = $this;
        var $progressCount = $progressBar.find('.ProgressBar-percentage--count');
        var percentageProgress = $progressBar.attr('data-progress');
        var percentageText = $progressCount.parent().attr('data-progress');

        //Animation du texte (pourcentage)
        if(options.animateText == true){
 
          $({ Counter: 0 }).animate(
            { Counter: percentageText },
            { duration: 3000,
             step: function () {
               $progressCount.text( Math.ceil(this.Counter));
             }
            });

        }else{
          $progressCount.text( percentageText);
        }
      
    };

})(jQuery);

$(document).ready(function(){
  $('.ProgressBar--animateText1').bekeyProgressbar({
    animateText : true
  });
  $('.ProgressBar--animateText2').bekeyProgressbar({
    animateText : true
  });
  $('.ProgressBar--animateText3').bekeyProgressbar({
    animateText : true
  });
  $('.ProgressBar--animateText4').bekeyProgressbar({
    animateText : true
  });
})