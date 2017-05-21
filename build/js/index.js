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
	        $(".form-control-phone").mask("+7 999 999 99 99");
	    },

	    onAnalysisClick: function onAnalysisClick() {
	        $('body').on('click', '.nn-analysis__control', function () {
	            $(this).parent().find('.nn-analysis__remove').toggleClass('is-active');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODMwZjdkOWZjN2ZmNTFjYTMyYmYiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9uYXYvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4MzBmN2Q5ZmM3ZmY1MWNhMzJiZiIsIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgQVBQICBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9uYXYnKTtcblxuLy8tLS0tLS0tLS0tLS0tLWRvbSBpcyBsb2FkZWRcbkFQUC5pbml0KCk7XG5BUFAubmF2LmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvaW5kZXguanMiLCJjb25zdCBBUFAgPSB7XG4gICAgYWpheExpbms6ICcuYWpheC1saW5rJyxcbiAgICBjb250YWluZXI6ICcjd3JhcHBlcicsXG5cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvL2hpZGUgcHJlbG9hZFxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyQoJyNwcmVsb2FkZXInKS5mYWRlT3V0KCl9LDMwMCk7XG4gICAgICAgICAgICBfdGhpcy5vbkFqYXhDbGljaygpO1xuICAgICAgICAgICAgX3RoaXMuaW5pdE1hc2tJbnB1dCgpO1xuICAgICAgICAgICAgX3RoaXMub25BbmFseXNpc0NsaWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfSxcblxuICAgIG9uQWpheENsaWNrOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCAkd3JhcHBlciA9ICQodGhpcy5jb250YWluZXIpO1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCB0aGlzLmFqYXhMaW5rLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgY29uc3QgY29udGVudCA9ICQodGhpcykuZGF0YSgnY29udGVudCcpO1xuICAgICAgICAgICBjb25zdCBiZyA9ICQodGhpcykuZGF0YSgnYmcnKTtcblxuICAgICAgICAgICAkd3JhcHBlci5mYWRlVG8oIDMwMCwwLjAxLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICQuZ2V0KCBjb250ZW50LCBmdW5jdGlvbiggZGF0YSApIHtcblxuICAgICAgICAgICAgICAgICAgIGlmKGJnKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2JnLWdyZWVuLWxpZ2h0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAkd3JhcHBlci5odG1sKCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAkd3JhcHBlci5mYWRlVG8oMzAwLCAxKTtcbiAgICAgICAgICAgICAgICAgICBfdGhpcy5pbml0TWFza0lucHV0KCk7XG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0TWFza0lucHV0OiBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmZvcm0tY29udHJvbC1waG9uZVwiKS5tYXNrKFwiKzcgOTk5IDk5OSA5OSA5OVwiKTtcbiAgICB9LFxuXG4gICAgb25BbmFseXNpc0NsaWNrOiBmdW5jdGlvbigpe1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5ubi1hbmFseXNpc19fY29udHJvbCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgnLm5uLWFuYWx5c2lzX19yZW1vdmUnKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQVBQO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL2FwcC9pbmRleC5qcyIsImltcG9ydCBBUFAgZnJvbSAnLi4vYXBwJztcblxuQVBQLm5hdiA9IHtcbiAgICBuYXY6ICcubmF2JyxcbiAgICAkbmF2OiBudWxsLFxuICAgIG5hdkJ0bjogJy5oZWFkZXItYnRuJyxcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAgICAgX3RoaXMub25OYXZCdG5DbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25OYXZCdG5DbGljazogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgX3RoaXMubmF2QnRuLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgX3RoaXMuJG5hdiA9ICQoX3RoaXMubmF2KTtcbiAgICAgICAgICAgIF90aGlzLiRuYXYudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAkKF90aGlzLm5hdkJ0bikudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcblxuICAgICAgICAgICAgaWYoX3RoaXMuJG5hdi5oYXNDbGFzcygnaXMtYWN0aXZlJykpe1xuICAgICAgICAgICAgICAgIF90aGlzLiRuYXYuZmFkZUluKDMwMCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBfdGhpcy4kbmF2LmZhZGVPdXQoMzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL25hdi9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlDQTtBQUNBO0FBZ0RBOzs7Ozs7OztBQ2pEQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBOzs7Iiwic291cmNlUm9vdCI6IiJ9