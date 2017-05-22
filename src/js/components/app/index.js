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
            _this.onClickOutsideAnalysis();
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
        $(".form-control-phone").mask("999 999 99 99");
    },

    onAnalysisClick: function(){
        $('body').on('click', '.nn-analysis__control', function(){
           $(this).parent().find('.nn-analysis__remove').toggleClass('is-active');
        });
    },

    onClickOutsideAnalysis: function(){
        $(document).click(function(e) {
            var target = e.target; //target div recorded
            if (!$(target).is('.nn-analysis__remove') && !$(target).is('.nn-analysis__control') && !$(target).is('.nn-analysis__control-i')) {
                $('.nn-analysis__remove').removeClass('is-active'); //if the click element is not the above id will hide
            }
        })
    }
}

export default APP;
