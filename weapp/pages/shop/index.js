"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _x = require('../../vendor.js')(4);

var _store = _interopRequireDefault(require('../../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core.default.page({
  store: _store.default,
  data: {},
  computed: _objectSpread({}, (0, _x.mapState)(['counter'])),
  methods: {
    showWarn: function showWarn() {
      console.log(this.$refs); // this.$refs.warn.show()

      this.$refs.login.show();
    }
  },
  onShow: function onShow() {
    this.showWarn();
  }
}, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"goodsItem":{"path":"..\\..\\components\\goods-item"}},"on":{}}, handlers: {}, models: {} });