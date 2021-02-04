"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobx = require("mobx");

var _errors = require("../../../../helpers/errors");

var _Operation2 = _interopRequireDefault(require("../../../operations/Operation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RegisterBucketOperation = /*#__PURE__*/function (_Operation) {
  _inherits(RegisterBucketOperation, _Operation);

  var _super = _createSuper(RegisterBucketOperation);

  function RegisterBucketOperation(_ref) {
    var _this;

    var accountId = _ref.accountId,
        _ref$bucket = _ref.bucket,
        bucket = _ref$bucket === void 0 ? {} : _ref$bucket,
        accountsStore = _ref.accountsStore;

    _classCallCheck(this, RegisterBucketOperation);

    _this = _super.call(this);
    _this.accountId = accountId;
    _this.bucket = bucket;
    _this.name = "Registering bucket ".concat(bucket.name);
    _this.accountsStore = accountsStore;
    return _this;
  }

  _createClass(RegisterBucketOperation, [{
    key: "doRun",
    value: function () {
      var _doRun = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var name;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = this.bucket.name;
                this.setMessage("Registering bucket".concat(name));
                _context.prev = 2;
                _context.next = 5;
                return this.accountsStore.registerBucket(this.accountId, this.bucket);

              case 5:
                this.setMessage("Successfully registered bucket ".concat(name));
                _context.next = 14;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);

                if ((0, _errors.isAlreadyExists)(_context.t0)) {
                  _context.next = 12;
                  break;
                }

                throw _context.t0;

              case 12:
                this.markSkipped();
                this.setMessage("Skipping bucket registration, the bucket is already registered");

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function doRun() {
        return _doRun.apply(this, arguments);
      }

      return doRun;
    }()
  }]);

  return RegisterBucketOperation;
}(_Operation2["default"]); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(RegisterBucketOperation, {
  doRun: _mobx.action
});
var _default = RegisterBucketOperation;
exports["default"] = _default;
//# sourceMappingURL=RegisterBucket.js.map