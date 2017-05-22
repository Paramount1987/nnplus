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
	            _this.onClickOutsideAnalysis();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjczNTkyZDU1OTgyM2FkNWNiNjMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9uYXYvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmNzM1OTJkNTU5ODIzYWQ1Y2I2MyIsIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgQVBQICBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9uYXYnKTtcblxuLy8tLS0tLS0tLS0tLS0tLWRvbSBpcyBsb2FkZWRcbkFQUC5pbml0KCk7XG5BUFAubmF2LmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvaW5kZXguanMiLCJjb25zdCBBUFAgPSB7XG4gICAgYWpheExpbms6ICcuYWpheC1saW5rJyxcbiAgICBjb250YWluZXI6ICcjd3JhcHBlcicsXG5cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvL2hpZGUgcHJlbG9hZFxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyQoJyNwcmVsb2FkZXInKS5mYWRlT3V0KCl9LDMwMCk7XG4gICAgICAgICAgICBfdGhpcy5vbkFqYXhDbGljaygpO1xuICAgICAgICAgICAgX3RoaXMuaW5pdE1hc2tJbnB1dCgpO1xuICAgICAgICAgICAgX3RoaXMub25BbmFseXNpc0NsaWNrKCk7XG4gICAgICAgICAgICBfdGhpcy5vbkNsaWNrT3V0c2lkZUFuYWx5c2lzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfSxcblxuICAgIG9uQWpheENsaWNrOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCAkd3JhcHBlciA9ICQodGhpcy5jb250YWluZXIpO1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCB0aGlzLmFqYXhMaW5rLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgY29uc3QgY29udGVudCA9ICQodGhpcykuZGF0YSgnY29udGVudCcpO1xuICAgICAgICAgICBjb25zdCBiZyA9ICQodGhpcykuZGF0YSgnYmcnKTtcblxuICAgICAgICAgICAkd3JhcHBlci5mYWRlVG8oIDMwMCwwLjAxLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICQuZ2V0KCBjb250ZW50LCBmdW5jdGlvbiggZGF0YSApIHtcblxuICAgICAgICAgICAgICAgICAgIGlmKGJnKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2JnLWdyZWVuLWxpZ2h0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAkd3JhcHBlci5odG1sKCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAkd3JhcHBlci5mYWRlVG8oMzAwLCAxKTtcbiAgICAgICAgICAgICAgICAgICBfdGhpcy5pbml0TWFza0lucHV0KCk7XG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0TWFza0lucHV0OiBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmZvcm0tY29udHJvbC1waG9uZVwiKS5tYXNrKFwiOTk5IDk5OSA5OSA5OVwiKTtcbiAgICB9LFxuXG4gICAgb25BbmFseXNpc0NsaWNrOiBmdW5jdGlvbigpe1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5ubi1hbmFseXNpc19fY29udHJvbCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgnLm5uLWFuYWx5c2lzX19yZW1vdmUnKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrT3V0c2lkZUFuYWx5c2lzOiBmdW5jdGlvbigpe1xuICAgICAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7IC8vdGFyZ2V0IGRpdiByZWNvcmRlZFxuICAgICAgICAgICAgaWYgKCEkKHRhcmdldCkuaXMoJy5ubi1hbmFseXNpc19fcmVtb3ZlJykgJiYgISQodGFyZ2V0KS5pcygnLm5uLWFuYWx5c2lzX19jb250cm9sJykgJiYgISQodGFyZ2V0KS5pcygnLm5uLWFuYWx5c2lzX19jb250cm9sLWknKSkge1xuICAgICAgICAgICAgICAgICQoJy5ubi1hbmFseXNpc19fcmVtb3ZlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpOyAvL2lmIHRoZSBjbGljayBlbGVtZW50IGlzIG5vdCB0aGUgYWJvdmUgaWQgd2lsbCBoaWRlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBUFA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwiaW1wb3J0IEFQUCBmcm9tICcuLi9hcHAnO1xuXG5BUFAubmF2ID0ge1xuICAgIG5hdjogJy5uYXYnLFxuICAgICRuYXY6IG51bGwsXG4gICAgbmF2QnRuOiAnLmhlYWRlci1idG4nLFxuXG4gICAgaW5pdDogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBfdGhpcy5vbk5hdkJ0bkNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbk5hdkJ0bkNsaWNrOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBfdGhpcy5uYXZCdG4sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBfdGhpcy4kbmF2ID0gJChfdGhpcy5uYXYpO1xuICAgICAgICAgICAgX3RoaXMuJG5hdi50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICQoX3RoaXMubmF2QnRuKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuXG4gICAgICAgICAgICBpZihfdGhpcy4kbmF2Lmhhc0NsYXNzKCdpcy1hY3RpdmUnKSl7XG4gICAgICAgICAgICAgICAgX3RoaXMuJG5hdi5mYWRlSW4oMzAwKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIF90aGlzLiRuYXYuZmFkZU91dCgzMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvbmF2L2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4REE7QUFDQTtBQTBEQTs7Ozs7Ozs7QUMzREE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==