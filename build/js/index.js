/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(3);

	//--------------dom is loaded
	_app2.default.init();
	_app2.default.nav.init();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var APP = {
	    ajaxLink: '.ajax-link',
	    container: '#wrapper',
	    profileLink: '.profile-link',

	    init: function init() {
	        var _this = this;

	        $(document).ready(function () {
	            //hide preload
	            setTimeout(function () {
	                $('#preloader').fadeOut();
	            }, 300);
	            _this.onAjaxClick();
	            _this.initMaskInput();
	            _this.onAnalysisClick();
	            _this.onClickOutsideAnalysis();
	            _this.onHoverProfileLink();
	        });
	    },

	    onAjaxClick: function onAjaxClick() {
	        var $wrapper = $(this.container);
	        var _this = this;
	        $('body').on('click', this.ajaxLink, function (e) {
	            e.preventDefault();

	            // validate form
	            if (!_this.formValidate($(this).closest('form'))) {
	                return;
	            }

	            var content = $(this).data('content');
	            var bg = $(this).data('bg');

	            if (!content) return;

	            $wrapper.fadeTo(300, 0.01, function () {
	                $.get(content, function (data) {

	                    if (bg) $('body').addClass('bg-green-light');

	                    $wrapper.html(data);
	                    $wrapper.fadeTo(300, 1);
	                    _this.initMaskInput();
	                });
	            });
	        });
	    },

	    initMaskInput: function initMaskInput() {
	        $(".form-control-phone").mask("999 999 99 99");
	    },

	    onAnalysisClick: function onAnalysisClick() {
	        $('body').on('click', '.nn-analysis__control', function () {
	            $(this).parent().find('.nn-analysis__remove').toggleClass('is-active');
	        });
	    },

	    onClickOutsideAnalysis: function onClickOutsideAnalysis() {
	        $(document).click(function (e) {
	            var target = e.target; //target div recorded
	            if (!$(target).is('.nn-analysis__remove') && !$(target).is('.nn-analysis__control') && !$(target).is('.nn-analysis__control-i')) {
	                $('.nn-analysis__remove').removeClass('is-active'); //if the click element is not the above id will hide
	            }
	        });
	    },

	    onHoverProfileLink: function onHoverProfileLink() {
	        var _this = this;

	        $('body').on('mouseenter', _this.profileLink, function () {
	            console.log(this);
	            $(_this.profileLink).addClass('is-unhover');
	            $(this).removeClass('is-unhover').addClass('is-hover');
	        });

	        $('body').on('mouseleave', _this.profileLink, function () {
	            $(_this.profileLink).removeClass('is-unhover is-hover');
	        });
	    },

	    formValidate: function formValidate($form) {
	        var emptyError = 'Поле не заполнено';
	        var passwordError = 'Пароли должны совпадать';
	        var counter = 0;
	        var passwords = [];

	        //clear error
	        $('.input-error').remove();

	        $form.find('.js-input-v, .js-input-p').each(function () {
	            var el = $(this);
	            var value = el.val();

	            if (!value) {
	                el.after('<div class="input-error">' + emptyError + '</div>');
	                counter++;
	            }
	        });

	        // validate equal password
	        $form.find('.js-input-p').each(function () {
	            var el = $(this);
	            passwords.push(el.val());
	        });

	        if (passwords[0] !== passwords[1]) {
	            $form.find('.js-input-p').after('<div class="input-error">' + passwordError + '</div>');
	            counter++;
	        }
	        //----------------

	        return counter ? false : true;
	    }
	};

		exports.default = APP;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_app2.default.nav = {
	    nav: '.nav',
	    $nav: null,
	    navBtn: '.header-btn',

	    init: function init() {
	        var _this = this;

	        $(document).ready(function () {
	            _this.onNavBtnClick();
	        });
	    },

	    onNavBtnClick: function onNavBtnClick() {
	        var _this = this;
	        $('body').on('click', _this.navBtn, function () {
	            _this.$nav = $(_this.nav);
	            _this.$nav.toggleClass('is-active');

	            $(_this.navBtn).toggleClass('is-open');

	            if (_this.$nav.hasClass('is-active')) {
	                _this.$nav.fadeIn(300);
	            } else {
	                _this.$nav.fadeOut(300);
	            }
	        });
	    }
		};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDRlMmQ1NzA4NDdkOTg5OGU0ZDQiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9uYXYvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNGUyZDU3MDg0N2Q5ODk4ZTRkNCIsIid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5pbXBvcnQgQVBQICBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcclxucmVxdWlyZSgnLi9jb21wb25lbnRzL25hdicpO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLWRvbSBpcyBsb2FkZWRcclxuQVBQLmluaXQoKTtcclxuQVBQLm5hdi5pbml0KCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvaW5kZXguanMiLCJjb25zdCBBUFAgPSB7XG4gICAgYWpheExpbms6ICcuYWpheC1saW5rJyxcbiAgICBjb250YWluZXI6ICcjd3JhcHBlcicsXG4gICAgcHJvZmlsZUxpbms6ICcucHJvZmlsZS1saW5rJyxcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vaGlkZSBwcmVsb2FkXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7JCgnI3ByZWxvYWRlcicpLmZhZGVPdXQoKX0sMzAwKTtcbiAgICAgICAgICAgIF90aGlzLm9uQWpheENsaWNrKCk7XG4gICAgICAgICAgICBfdGhpcy5pbml0TWFza0lucHV0KCk7XG4gICAgICAgICAgICBfdGhpcy5vbkFuYWx5c2lzQ2xpY2soKTtcbiAgICAgICAgICAgIF90aGlzLm9uQ2xpY2tPdXRzaWRlQW5hbHlzaXMoKTtcbiAgICAgICAgICAgIF90aGlzLm9uSG92ZXJQcm9maWxlTGluaygpO1xuICAgICAgICB9KTtcblxuICAgIH0sXG5cbiAgICBvbkFqYXhDbGljazogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgJHdyYXBwZXIgPSAkKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgdGhpcy5hamF4TGluaywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIGZvcm1cbiAgICAgICAgICAgaWYoICFfdGhpcy5mb3JtVmFsaWRhdGUoJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykpKXtcbiAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSAkKHRoaXMpLmRhdGEoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgY29uc3QgYmcgPSAkKHRoaXMpLmRhdGEoJ2JnJyk7XG5cbiAgICAgICAgICAgaWYoIWNvbnRlbnQpIHJldHVybjtcblxuICAgICAgICAgICAkd3JhcHBlci5mYWRlVG8oIDMwMCwwLjAxLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICQuZ2V0KCBjb250ZW50LCBmdW5jdGlvbiggZGF0YSApIHtcblxuICAgICAgICAgICAgICAgICAgIGlmKGJnKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2JnLWdyZWVuLWxpZ2h0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAkd3JhcHBlci5odG1sKCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAkd3JhcHBlci5mYWRlVG8oMzAwLCAxKTtcbiAgICAgICAgICAgICAgICAgICBfdGhpcy5pbml0TWFza0lucHV0KCk7XG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0TWFza0lucHV0OiBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmZvcm0tY29udHJvbC1waG9uZVwiKS5tYXNrKFwiOTk5IDk5OSA5OSA5OVwiKTtcbiAgICB9LFxuXG4gICAgb25BbmFseXNpc0NsaWNrOiBmdW5jdGlvbigpe1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5ubi1hbmFseXNpc19fY29udHJvbCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgnLm5uLWFuYWx5c2lzX19yZW1vdmUnKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrT3V0c2lkZUFuYWx5c2lzOiBmdW5jdGlvbigpe1xuICAgICAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7IC8vdGFyZ2V0IGRpdiByZWNvcmRlZFxuICAgICAgICAgICAgaWYgKCEkKHRhcmdldCkuaXMoJy5ubi1hbmFseXNpc19fcmVtb3ZlJykgJiYgISQodGFyZ2V0KS5pcygnLm5uLWFuYWx5c2lzX19jb250cm9sJykgJiYgISQodGFyZ2V0KS5pcygnLm5uLWFuYWx5c2lzX19jb250cm9sLWknKSkge1xuICAgICAgICAgICAgICAgICQoJy5ubi1hbmFseXNpc19fcmVtb3ZlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpOyAvL2lmIHRoZSBjbGljayBlbGVtZW50IGlzIG5vdCB0aGUgYWJvdmUgaWQgd2lsbCBoaWRlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIG9uSG92ZXJQcm9maWxlTGluazogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignbW91c2VlbnRlcicsIF90aGlzLnByb2ZpbGVMaW5rLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgICAgICAkKF90aGlzLnByb2ZpbGVMaW5rKS5hZGRDbGFzcygnaXMtdW5ob3ZlcicpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtdW5ob3ZlcicpLmFkZENsYXNzKCdpcy1ob3ZlcicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ21vdXNlbGVhdmUnLCBfdGhpcy5wcm9maWxlTGluaywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoX3RoaXMucHJvZmlsZUxpbmspLnJlbW92ZUNsYXNzKCdpcy11bmhvdmVyIGlzLWhvdmVyJyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBmb3JtVmFsaWRhdGU6IGZ1bmN0aW9uKCRmb3JtKXtcbiAgICAgICAgY29uc3QgZW1wdHlFcnJvciA9ICfQn9C+0LvQtSDQvdC1INC30LDQv9C+0LvQvdC10L3Qvic7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRXJyb3IgPSAn0J/QsNGA0L7Qu9C4INC00L7Qu9C20L3RiyDRgdC+0LLQv9Cw0LTQsNGC0YwnO1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGxldCBwYXNzd29yZHMgPSBbXTtcblxuICAgICAgICAvL2NsZWFyIGVycm9yXG4gICAgICAgICQoJy5pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuXG4gICAgICAgICRmb3JtLmZpbmQoJy5qcy1pbnB1dC12LCAuanMtaW5wdXQtcCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWwudmFsKCk7XG5cbiAgICAgICAgICAgIGlmKCF2YWx1ZSl7XG4gICAgICAgICAgICAgIGVsLmFmdGVyKGA8ZGl2IGNsYXNzPVwiaW5wdXQtZXJyb3JcIj4ke2VtcHR5RXJyb3J9PC9kaXY+YCk7XG4gICAgICAgICAgICAgICAgY291bnRlcisrXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHZhbGlkYXRlIGVxdWFsIHBhc3N3b3JkXG4gICAgICAgICRmb3JtLmZpbmQoJy5qcy1pbnB1dC1wJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgcGFzc3dvcmRzLnB1c2goZWwudmFsKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZihwYXNzd29yZHNbMF0gIT09IHBhc3N3b3Jkc1sxXSl7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCcuanMtaW5wdXQtcCcpLmFmdGVyKGA8ZGl2IGNsYXNzPVwiaW5wdXQtZXJyb3JcIj4ke3Bhc3N3b3JkRXJyb3J9PC9kaXY+YCk7XG4gICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH1cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgcmV0dXJuIGNvdW50ZXIgPyBmYWxzZSA6IHRydWVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFQUDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9hcHAvaW5kZXguanMiLCJpbXBvcnQgQVBQIGZyb20gJy4uL2FwcCc7XHJcblxyXG5BUFAubmF2ID0ge1xyXG4gICAgbmF2OiAnLm5hdicsXHJcbiAgICAkbmF2OiBudWxsLFxyXG4gICAgbmF2QnRuOiAnLmhlYWRlci1idG4nLFxyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBfdGhpcy5vbk5hdkJ0bkNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTmF2QnRuQ2xpY2s6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBfdGhpcy5uYXZCdG4sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIF90aGlzLiRuYXYgPSAkKF90aGlzLm5hdik7XHJcbiAgICAgICAgICAgIF90aGlzLiRuYXYudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgJChfdGhpcy5uYXZCdG4pLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcblxyXG4gICAgICAgICAgICBpZihfdGhpcy4kbmF2Lmhhc0NsYXNzKCdpcy1hY3RpdmUnKSl7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy4kbmF2LmZhZGVJbigzMDApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIF90aGlzLiRuYXYuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL25hdi9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsSEE7QUFDQTtBQW9IQTs7Ozs7Ozs7QUNySEE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==