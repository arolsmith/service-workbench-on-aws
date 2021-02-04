"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _mobxReact = require("mobx-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var EnvironmentStatusIcon = /*#__PURE__*/function (_React$Component) {
  _inherits(EnvironmentStatusIcon, _React$Component);

  var _super = _createSuper(EnvironmentStatusIcon);

  function EnvironmentStatusIcon() {
    _classCallCheck(this, EnvironmentStatusIcon);

    return _super.apply(this, arguments);
  }

  _createClass(EnvironmentStatusIcon, [{
    key: "getEnvironment",
    value: function getEnvironment() {
      return this.props.environment;
    }
  }, {
    key: "render",
    value: function render() {
      var status = this.getEnvironment().status;

      if (status === 'COMPLETED') {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          basic: true,
          size: "mini",
          color: "green"
        }, "Ready");
      }

      if (status === 'TERMINATED') {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          basic: true,
          size: "mini",
          color: "red"
        }, "Terminated");
      }

      if (status === 'FAILED' || status.endsWith('FAILED')) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          basic: true,
          size: "mini",
          color: "red"
        }, "Error");
      }

      if (status === 'TERMINATING_FAILED') {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          basic: true,
          size: "mini",
          color: "red"
        }, "Failed to terminate");
      }

      if (status === 'TERMINATING') {
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          basic: true,
          size: "mini"
        }, "Terminating", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          loading: true,
          name: "spinner",
          size: "large",
          color: "red",
          className: "ml1 mr1"
        })));
      }

      if (status === 'STOPPING') {
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          basic: true,
          size: "mini"
        }, "Stopping", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          loading: true,
          name: "spinner",
          size: "large",
          color: "red",
          className: "ml1 mr1"
        })));
      }

      if (status === 'STOPPED') {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          basic: true,
          size: "mini",
          color: "orange"
        }, "Stopped");
      }

      if (status === 'STARTING') {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          basic: true,
          size: "mini"
        }, "Starting", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          loading: true,
          name: "spinner",
          size: "large",
          color: "yellow",
          className: "ml1 mr1"
        }));
      } // unknown state - should have returned


      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        basic: true,
        size: "mini"
      }, "Unknown State", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        loading: true,
        name: "spinner",
        size: "large",
        color: "red",
        className: "ml1 mr1"
      }));
    }
  }]);

  return EnvironmentStatusIcon;
}(_react["default"].Component);

var _default = (0, _mobxReact.observer)(EnvironmentStatusIcon);

exports["default"] = _default;
//# sourceMappingURL=EnvironmentStatusIcon.js.map