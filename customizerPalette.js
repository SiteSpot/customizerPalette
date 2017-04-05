jQuery(document).ready(function(){
  
  colors = [];
  
  console.log(colors);
  setInterval(function(){ // quick and dirty
    newColors = [];
        
    //get all colors in the customizer
    jQuery('.wp-picker-container>a').each(function(){

      if (jQuery.inArray(jQuery(this).css('background-color'), newColors) == -1) {
        newColors.push(jQuery(this).css('background-color'));
      }
    });
    
    // if the new colors are different to the old ones, then update pallette
    if(colors.sort().join(',') !== newColors.sort().join(',')){
      colors = newColors;
      jQuery('.wp-color-picker').iris({
        palettes:colors
      });
    }
  },1000)
});
