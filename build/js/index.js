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
	            var content = $(this).data('content');
	            var bg = $(this).data('bg');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmY1ZWFmN2MxNTQ4NTE4NDY4NDIiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9uYXYvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZjVlYWY3YzE1NDg1MTg0Njg0MiIsIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgQVBQICBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9uYXYnKTtcblxuLy8tLS0tLS0tLS0tLS0tLWRvbSBpcyBsb2FkZWRcbkFQUC5pbml0KCk7XG5BUFAubmF2LmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvaW5kZXguanMiLCJjb25zdCBBUFAgPSB7XHJcbiAgICBhamF4TGluazogJy5hamF4LWxpbmsnLFxyXG4gICAgY29udGFpbmVyOiAnI3dyYXBwZXInLFxyXG4gICAgcHJvZmlsZUxpbms6ICcucHJvZmlsZS1saW5rJyxcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIC8vaGlkZSBwcmVsb2FkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXskKCcjcHJlbG9hZGVyJykuZmFkZU91dCgpfSwzMDApO1xyXG4gICAgICAgICAgICBfdGhpcy5vbkFqYXhDbGljaygpO1xyXG4gICAgICAgICAgICBfdGhpcy5pbml0TWFza0lucHV0KCk7XHJcbiAgICAgICAgICAgIF90aGlzLm9uQW5hbHlzaXNDbGljaygpO1xyXG4gICAgICAgICAgICBfdGhpcy5vbkNsaWNrT3V0c2lkZUFuYWx5c2lzKCk7XHJcbiAgICAgICAgICAgIF90aGlzLm9uSG92ZXJQcm9maWxlTGluaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25BamF4Q2xpY2s6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3QgJHdyYXBwZXIgPSAkKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIHRoaXMuYWpheExpbmssIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgY29uc3QgY29udGVudCA9ICQodGhpcykuZGF0YSgnY29udGVudCcpO1xyXG4gICAgICAgICAgIGNvbnN0IGJnID0gJCh0aGlzKS5kYXRhKCdiZycpO1xyXG5cclxuICAgICAgICAgICAkd3JhcHBlci5mYWRlVG8oIDMwMCwwLjAxLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgJC5nZXQoIGNvbnRlbnQsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGlmKGJnKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2JnLWdyZWVuLWxpZ2h0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgJHdyYXBwZXIuaHRtbCggZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAkd3JhcHBlci5mYWRlVG8oMzAwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgIF90aGlzLmluaXRNYXNrSW5wdXQoKTtcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRNYXNrSW5wdXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5mb3JtLWNvbnRyb2wtcGhvbmVcIikubWFzayhcIjk5OSA5OTkgOTkgOTlcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQW5hbHlzaXNDbGljazogZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5ubi1hbmFseXNpc19fY29udHJvbCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcubm4tYW5hbHlzaXNfX3JlbW92ZScpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DbGlja091dHNpZGVBbmFseXNpczogZnVuY3Rpb24oKXtcclxuICAgICAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDsgLy90YXJnZXQgZGl2IHJlY29yZGVkXHJcbiAgICAgICAgICAgIGlmICghJCh0YXJnZXQpLmlzKCcubm4tYW5hbHlzaXNfX3JlbW92ZScpICYmICEkKHRhcmdldCkuaXMoJy5ubi1hbmFseXNpc19fY29udHJvbCcpICYmICEkKHRhcmdldCkuaXMoJy5ubi1hbmFseXNpc19fY29udHJvbC1pJykpIHtcclxuICAgICAgICAgICAgICAgICQoJy5ubi1hbmFseXNpc19fcmVtb3ZlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpOyAvL2lmIHRoZSBjbGljayBlbGVtZW50IGlzIG5vdCB0aGUgYWJvdmUgaWQgd2lsbCBoaWRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkhvdmVyUHJvZmlsZUxpbms6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAkKCdib2R5Jykub24oJ21vdXNlZW50ZXInLCBfdGhpcy5wcm9maWxlTGluaywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgICAgICQoX3RoaXMucHJvZmlsZUxpbmspLmFkZENsYXNzKCdpcy11bmhvdmVyJyk7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLXVuaG92ZXInKS5hZGRDbGFzcygnaXMtaG92ZXInKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdtb3VzZWxlYXZlJywgX3RoaXMucHJvZmlsZUxpbmssIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoX3RoaXMucHJvZmlsZUxpbmspLnJlbW92ZUNsYXNzKCdpcy11bmhvdmVyIGlzLWhvdmVyJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFQUDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL2FwcC9pbmRleC5qcyIsImltcG9ydCBBUFAgZnJvbSAnLi4vYXBwJztcblxuQVBQLm5hdiA9IHtcbiAgICBuYXY6ICcubmF2JyxcbiAgICAkbmF2OiBudWxsLFxuICAgIG5hdkJ0bjogJy5oZWFkZXItYnRuJyxcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAgICAgX3RoaXMub25OYXZCdG5DbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25OYXZCdG5DbGljazogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgX3RoaXMubmF2QnRuLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgX3RoaXMuJG5hdiA9ICQoX3RoaXMubmF2KTtcbiAgICAgICAgICAgIF90aGlzLiRuYXYudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAkKF90aGlzLm5hdkJ0bikudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcblxuICAgICAgICAgICAgaWYoX3RoaXMuJG5hdi5oYXNDbGFzcygnaXMtYWN0aXZlJykpe1xuICAgICAgICAgICAgICAgIF90aGlzLiRuYXYuZmFkZUluKDMwMCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBfdGhpcy4kbmF2LmZhZGVPdXQoMzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL25hdi9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4RUE7QUFDQTtBQTBFQTs7Ozs7Ozs7QUMzRUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==