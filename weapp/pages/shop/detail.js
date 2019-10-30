"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core.default.page({
  data: {
    num: 1
  },
  methods: {
    add: function add() {
      this.num = this.num + 1;
    },
    sub: function sub() {
      if (this.num !== 1) {
        this.num = this.num - 1;
      }
    },
    goHome: function goHome() {
      wx.switchTab({
        url: 'pages/home/index'
      });
    }
  },
  onShow: function onShow() {}
}, {info: {"components":{},"on":{}}, handlers: {'17-60': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.sub($event)
      })();
    
  }},'17-61': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.add($event)
      })();
    
  }},'17-62': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goHome($event)
      })();
    
  }}}, models: {} });