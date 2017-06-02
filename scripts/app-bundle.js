define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['./attributes/input-mask']);
  }
});
define('resources/attributes/input-mask',['exports', 'aurelia-framework', 'inputmask', 'inputmask/inputmask.extensions', 'inputmask/inputmask.phone.extensions', 'inputmask/phone-codes/phone', 'inputmask/phone-codes/phone-be', 'inputmask/phone-codes/phone-ru'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.InputmaskCustomAttribute = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

    var InputmaskCustomAttribute = exports.InputmaskCustomAttribute = (_dec = (0, _aureliaFramework.customAttribute)("inputmask"), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = (_class2 = function () {
        function InputmaskCustomAttribute(element) {
            var _this = this;

            _classCallCheck(this, InputmaskCustomAttribute);

            _initDefineProp(this, 'isValid', _descriptor, this);

            this.element = element;

            this.options = {
                'onincomplete': function onincomplete() {
                    _this.isValid = false;
                },
                'oncomplete': function oncomplete() {
                    _this.isValid = true;
                }
            };
        }

        InputmaskCustomAttribute.prototype.isValidChanged = function isValidChanged(newValue, oldValue) {
            if (newValue !== oldValue) this.element.dispatchEvent(new Event("blur"));
        };

        InputmaskCustomAttribute.prototype.attached = function attached() {
            var _this2 = this;

            var options = $.extend(true, this.value, this.options);
            $(this.element).inputmask(options).on("change", function (e) {
                if (e.originalEvent) {
                    return;
                }
                _this2.element.dispatchEvent(new Event("change"));
            });
        };

        InputmaskCustomAttribute.prototype.reload = function reload() {
            this.detached();
            this.attached();
        };

        InputmaskCustomAttribute.prototype.detached = function detached() {
            $(this.element).inputmask("remove");
        };

        return InputmaskCustomAttribute;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'isValid', [_aureliaFramework.observable], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    })), _class2)) || _class) || _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><div class=\"row\"><div class=\"form-group col-xs-12\"><label class=\"control-label\" for=\"mobile\"></label><input class=\"col-xs-12\" id=\"mobile\" inputmask.bind=\"{ autoUnmask: true, alias:'phone'}\" type=\"text\" placeholder=\"Mobile number\" value.bind=\"contact.mobile\"></div></div><div class=\"row\"><div class=\"form-group col-xs-12\"><label class=\"control-label\" for=\"email\"></label><input class=\"col-xs-12\" id=\"email\" inputmask.bind=\"{ autoUnmask: true, alias:'email'}\" type=\"text\" placeholder=\"Email address\" value.bind=\"contact.email\"></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map