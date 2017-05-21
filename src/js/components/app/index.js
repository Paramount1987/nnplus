const APP = {
    ajaxLink: '.ajax-link',
    container: '#wrapper',

    init: function() {
        const _this = this;

        $(document).ready(function(){
            //hide preload
            setTimeout(function(){$('#preloader').fadeOut()},300);
            _this.onAjaxClick();
            _this.initMaskInput();
            _this.onAnalysisClick();
        });

    },

    onAjaxClick: function(){
        const $wrapper = $(this.container);
        const _this = this;
        $('body').on('click', this.ajaxLink, function(e){
            e.preventDefault();
           const content = $(this).data('content');
           const bg = $(this).data('bg');

           $wrapper.fadeTo( 300,0.01, function() {
               $.get( content, function( data ) {

                   if(bg) $('body').addClass('bg-green-light');

                   $wrapper.html( data);
                   $wrapper.fadeTo(300, 1);
                   _this.initMaskInput();
               });
           });
        });
    },

    initMaskInput: function(){
        $(".form-control-phone").mask("+7 999 999 99 99");
    },

    onAnalysisClick: function(){
        $('body').on('click', '.nn-analysis__control', function(){
           $(this).parent().find('.nn-analysis__remove').toggleClass('is-active');
        });
    }
}

export default APP;
