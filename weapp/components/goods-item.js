"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import GroupItem from './groupitem'
_core["default"].component({
  props: {
    goods: {}
  },
  methods: {
    tap: function tap() {
      this.grouplist.name = "Parent Random(".concat(Math.random(), ")");
      var groups = this.$parent.$children.filter(function (com) {
        return com.$is === 'components/group';
      });
      var index = groups.indexOf(this);
      console.log("Clicked Group ".concat(index, ", ID is ").concat(this.grouplist.id));
    }
  }
}, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{}}, handlers: {}, models: {} });