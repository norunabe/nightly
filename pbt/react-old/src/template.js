var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//BabelでES5に変換


//Render用class

//初期設定の表示
var Welcome_ = function (_React$Component) {
    _inherits(Welcome_, _React$Component);

    function Welcome_() {
        _classCallCheck(this, Welcome_);

        return _possibleConstructorReturn(this, (Welcome_.__proto__ || Object.getPrototypeOf(Welcome_)).apply(this, arguments));
    }

    _createClass(Welcome_, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "fade-in" },
                React.createElement(
                    "p",
                    { className: "fs-3 gradation-color" },
                    "\u307F\u306A\u3055\u3093\u306F\u3058\u3081\u307E\u3057\u3066"
                ),
                React.createElement(
                    "p",
                    null,
                    "\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u540D\u524D\u3092\u6C7A\u3081\u3066\u304F\u3060\u3055\u3044"
                ),
                React.createElement(
                    "div",
                    { className: "input-group mb-3" },
                    React.createElement("input", { type: "text", className: "form-control", placeholder: "\u597D\u304D\u306A\u540D\u524D\u3092\u5165\u529B", "aria-label": "\u597D\u304D\u306A\u540D\u524D\u3092\u5165\u529B", id: "q" }),
                    React.createElement("input", { type: "button", value: "OK!", className: "btn btn-outline-light", id: "ok" })
                )
            );
        }
    }]);

    return Welcome_;
}(React.Component);
//通常処理


var Greet_ = function (_React$Component2) {
    _inherits(Greet_, _React$Component2);

    function Greet_(props) {
        _classCallCheck(this, Greet_);

        var _this2 = _possibleConstructorReturn(this, (Greet_.__proto__ || Object.getPrototypeOf(Greet_)).call(this, props));

        _this2.greet = props.greet;
        _this2.id = props.id;
        return _this2;
    }

    _createClass(Greet_, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "fade-in-out keep-animation" },
                React.createElement(
                    "p",
                    { className: "fs-3" },
                    this.greet,
                    "!! ",
                    this.id
                ),
                React.createElement(
                    "a",
                    { href: "https://github.com/yaskou/nightly/tree/main/pbt", "class": "btn btn-outline-light gradation-color" },
                    "Developer GitHub"
                )
            );
        }
    }]);

    return Greet_;
}(React.Component);
//メインメニュー


var Menu_ = function (_React$Component3) {
    _inherits(Menu_, _React$Component3);

    function Menu_() {
        _classCallCheck(this, Menu_);

        return _possibleConstructorReturn(this, (Menu_.__proto__ || Object.getPrototypeOf(Menu_)).apply(this, arguments));
    }

    _createClass(Menu_, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "fade-in" },
                React.createElement(
                    "p",
                    { className: "fs-4" },
                    "\u3053\u306E\u30B2\u30FC\u30E0\u306F\u30DF\u30CB\u30B2\u30FC\u30E0\u3067\u30A2\u30D0\u30BF\u30FC\u3092\u80B2\u6210\u3059\u308B\u30B2\u30FC\u30E0\u3067\u3059"
                ),
                React.createElement(
                    "button",
                    { className: "btn btn-outline-secondary", id: "dino" },
                    "Dino"
                )
            );
        }
    }]);

    return Menu_;
}(React.Component);

//Render用JSX

var Welcome = React.createElement(Welcome_, null);

var Greets = function () {
    function Greets() {
        _classCallCheck(this, Greets);
    }

    _createClass(Greets, [{
        key: "Nice",
        value: function Nice() {
            return React.createElement(Greet_, { greet: "Nice to meet you", id: id });
        }
    }, {
        key: "Hello",
        value: function Hello() {
            return React.createElement(Greet_, { greet: "Good morning", id: id });
        }
    }]);

    return Greets;
}();

var Menu = React.createElement(Menu_, null);