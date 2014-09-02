$(document).ready(function() {

    /* The [attribute$=value] selector selects each element with a specific attribute, with a value ending in a specific string. */
    var imageLinks = $('a[href$=".png"], a[href$=".jpg"], a[href$=".JPEG"], a[href$=".gif"], a[href$=".bmp"]');
    
    if (imageLinks.children('div').length) {
    
        imageLinks.click(
            
            function expand(e) {
                e.preventDefault();
                $(this).children('div').toggleClass('expanded');
                            
                /* offset() located position og $(this) */
                $(document).scrollTop($(this).offset().top);
                
                });
    }
});