const APP = {
    ajaxLink: '.ajax-link',
    container: '#wrapper',
    profileLink: '.profile-link',

    init: function() {
        const _this = this;

        $(document).ready(function(){
            //hide preload
            setTimeout(function(){$('#preloader').fadeOut()},300);
            _this.onAjaxClick();
            _this.initMaskInput();
            _this.onAnalysisClick();
            _this.onClickOutsideAnalysis();
            _this.onHoverProfileLink();
        });

    },

    onAjaxClick: function(){
        const $wrapper = $(this.container);
        const _this = this;
        $('body').on('click', this.ajaxLink, function(e){
            e.preventDefault();

            // validate form
           if( !_this.formValidate($(this).closest('form'))){
               return;
           }

           const content = $(this).data('content');
           const bg = $(this).data('bg');

           if(!content) return;

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
    },

    onHoverProfileLink: function(){
        const _this = this;

        $('body').on('mouseenter', _this.profileLink, function(){
            console.log(this);
            $(_this.profileLink).addClass('is-unhover');
            $(this).removeClass('is-unhover').addClass('is-hover');
        });

        $('body').on('mouseleave', _this.profileLink, function(){
            $(_this.profileLink).removeClass('is-unhover is-hover');
        });
    },

    formValidate: function($form){
        const emptyError = 'Поле не заполнено';
        const passwordError = 'Пароли должны совпадать';
        let counter = 0;
        let passwords = [];

        //clear error
        $('.input-error').remove();

        $form.find('.js-input-v, .js-input-p').each(function(){
            const el = $(this);
            const value = el.val();

            if(!value){
              el.after(`<div class="input-error">${emptyError}</div>`);
                counter++
            }
        });

        // validate equal password
        $form.find('.js-input-p').each(function(){
            const el = $(this);
            passwords.push(el.val());
        });

        if(passwords[0] !== passwords[1]){
            $form.find('.js-input-p').after(`<div class="input-error">${passwordError}</div>`);
            counter++;
        }
        //----------------

        return counter ? false : true
    }
}

export default APP;
