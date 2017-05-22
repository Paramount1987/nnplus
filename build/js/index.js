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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmY1ZWFmN2MxNTQ4NTE4NDY4NDIiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9uYXYvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZjVlYWY3YzE1NDg1MTg0Njg0MiIsIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgQVBQICBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9uYXYnKTtcblxuLy8tLS0tLS0tLS0tLS0tLWRvbSBpcyBsb2FkZWRcbkFQUC5pbml0KCk7XG5BUFAubmF2LmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvaW5kZXguanMiLCJjb25zdCBBUFAgPSB7XG4gICAgYWpheExpbms6ICcuYWpheC1saW5rJyxcbiAgICBjb250YWluZXI6ICcjd3JhcHBlcicsXG4gICAgcHJvZmlsZUxpbms6ICcucHJvZmlsZS1saW5rJyxcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vaGlkZSBwcmVsb2FkXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7JCgnI3ByZWxvYWRlcicpLmZhZGVPdXQoKX0sMzAwKTtcbiAgICAgICAgICAgIF90aGlzLm9uQWpheENsaWNrKCk7XG4gICAgICAgICAgICBfdGhpcy5pbml0TWFza0lucHV0KCk7XG4gICAgICAgICAgICBfdGhpcy5vbkFuYWx5c2lzQ2xpY2soKTtcbiAgICAgICAgICAgIF90aGlzLm9uQ2xpY2tPdXRzaWRlQW5hbHlzaXMoKTtcbiAgICAgICAgICAgIF90aGlzLm9uSG92ZXJQcm9maWxlTGluaygpO1xuICAgICAgICB9KTtcblxuICAgIH0sXG5cbiAgICBvbkFqYXhDbGljazogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgJHdyYXBwZXIgPSAkKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgdGhpcy5hamF4TGluaywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSAkKHRoaXMpLmRhdGEoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgY29uc3QgYmcgPSAkKHRoaXMpLmRhdGEoJ2JnJyk7XG5cbiAgICAgICAgICAgJHdyYXBwZXIuZmFkZVRvKCAzMDAsMC4wMSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAkLmdldCggY29udGVudCwgZnVuY3Rpb24oIGRhdGEgKSB7XG5cbiAgICAgICAgICAgICAgICAgICBpZihiZykgJCgnYm9keScpLmFkZENsYXNzKCdiZy1ncmVlbi1saWdodCcpO1xuXG4gICAgICAgICAgICAgICAgICAgJHdyYXBwZXIuaHRtbCggZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgJHdyYXBwZXIuZmFkZVRvKDMwMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgX3RoaXMuaW5pdE1hc2tJbnB1dCgpO1xuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdE1hc2tJbnB1dDogZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5mb3JtLWNvbnRyb2wtcGhvbmVcIikubWFzayhcIjk5OSA5OTkgOTkgOTlcIik7XG4gICAgfSxcblxuICAgIG9uQW5hbHlzaXNDbGljazogZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcubm4tYW5hbHlzaXNfX2NvbnRyb2wnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5ubi1hbmFseXNpc19fcmVtb3ZlJykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25DbGlja091dHNpZGVBbmFseXNpczogZnVuY3Rpb24oKXtcbiAgICAgICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0OyAvL3RhcmdldCBkaXYgcmVjb3JkZWRcbiAgICAgICAgICAgIGlmICghJCh0YXJnZXQpLmlzKCcubm4tYW5hbHlzaXNfX3JlbW92ZScpICYmICEkKHRhcmdldCkuaXMoJy5ubi1hbmFseXNpc19fY29udHJvbCcpICYmICEkKHRhcmdldCkuaXMoJy5ubi1hbmFseXNpc19fY29udHJvbC1pJykpIHtcbiAgICAgICAgICAgICAgICAkKCcubm4tYW5hbHlzaXNfX3JlbW92ZScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTsgLy9pZiB0aGUgY2xpY2sgZWxlbWVudCBpcyBub3QgdGhlIGFib3ZlIGlkIHdpbGwgaGlkZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBvbkhvdmVyUHJvZmlsZUxpbms6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICAkKCdib2R5Jykub24oJ21vdXNlZW50ZXInLCBfdGhpcy5wcm9maWxlTGluaywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgICAgJChfdGhpcy5wcm9maWxlTGluaykuYWRkQ2xhc3MoJ2lzLXVuaG92ZXInKTtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLXVuaG92ZXInKS5hZGRDbGFzcygnaXMtaG92ZXInKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdtb3VzZWxlYXZlJywgX3RoaXMucHJvZmlsZUxpbmssIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKF90aGlzLnByb2ZpbGVMaW5rKS5yZW1vdmVDbGFzcygnaXMtdW5ob3ZlciBpcy1ob3ZlcicpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFQUDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9hcHAvaW5kZXguanMiLCJpbXBvcnQgQVBQIGZyb20gJy4uL2FwcCc7XG5cbkFQUC5uYXYgPSB7XG4gICAgbmF2OiAnLm5hdicsXG4gICAgJG5hdjogbnVsbCxcbiAgICBuYXZCdG46ICcuaGVhZGVyLWJ0bicsXG5cbiAgICBpbml0OiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIF90aGlzLm9uTmF2QnRuQ2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uTmF2QnRuQ2xpY2s6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIF90aGlzLm5hdkJ0biwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIF90aGlzLiRuYXYgPSAkKF90aGlzLm5hdik7XG4gICAgICAgICAgICBfdGhpcy4kbmF2LnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgJChfdGhpcy5uYXZCdG4pLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XG5cbiAgICAgICAgICAgIGlmKF90aGlzLiRuYXYuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKXtcbiAgICAgICAgICAgICAgICBfdGhpcy4kbmF2LmZhZGVJbigzMDApO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgX3RoaXMuJG5hdi5mYWRlT3V0KDMwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9uYXYvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEVBO0FBQ0E7QUEwRUE7Ozs7Ozs7O0FDM0VBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7OzsiLCJzb3VyY2VSb290IjoiIn0=