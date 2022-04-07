$(function(){
    //preload audio
    var toast = new Audio('toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        var value = $(this).data('product');
        var value2 = $(this).data('code');

        $( "span.pName" ).text( "" + value );
        $( "span.pCode" ).text( "" + value2 );

        $('#toast').toast({ autohide: false }).toast('show');
    });

    $('.code').on('keyup', function (e){
        if (e.key === "Escape"){
            $('#toast').toast({ autohide: false }).toast('hide');
        } 
    });



});