import APP from '../app';

APP.nav = {
    nav: '.nav',
    $nav: null,
    navBtn: '.header-btn',

    init: function(){
        const _this = this;

        $(document).ready(function(){
            _this.onNavBtnClick();
        });
    },

    onNavBtnClick: function(){
        const _this = this;
        $('body').on('click', _this.navBtn, function(){
            _this.$nav = $(_this.nav);
            _this.$nav.toggleClass('is-active');

            $(_this.navBtn).toggleClass('is-open');

            if(_this.$nav.hasClass('is-active')){
                _this.$nav.fadeIn(300);
            }else{
                _this.$nav.fadeOut(300);
            }
        });
    }
}
