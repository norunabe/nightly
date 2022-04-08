var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//setTimeout地獄,callback地獄から逃げる
var wait = function wait(seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds);
    });
};
//定期Render用関数
function IntervalRender(elements, selector) {
    var delay = wait(0);
    $.each(elements, function (index, value) {
        delay = delay.then(function () {
            ReactDOM.render(value["element"], $(selector).get(0));
            return wait(value["timeout"]);
        });
    });
}

//初期設定の表示

var Welcome = function (_React$Component) {
    _inherits(Welcome, _React$Component);

    function Welcome() {
        _classCallCheck(this, Welcome);

        return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
    }

    _createClass(Welcome, [{
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

    return Welcome;
}(React.Component);
//通常処理


var Greet = function (_React$Component2) {
    _inherits(Greet, _React$Component2);

    function Greet(props) {
        _classCallCheck(this, Greet);

        var _this2 = _possibleConstructorReturn(this, (Greet.__proto__ || Object.getPrototypeOf(Greet)).call(this, props));

        _this2.greet = props.greet;
        _this2.id = props.id;
        return _this2;
    }

    _createClass(Greet, [{
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
                    { href: "https://github.com/yaskou/nightly/tree/main/pbt", "class": "btn btn-light stretched-link gradation-color" },
                    "Developer GitHub"
                )
            );
        }
    }]);

    return Greet;
}(React.Component);

//メインメニュー


var Menu = function (_React$Component3) {
    _inherits(Menu, _React$Component3);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    { className: "fs-4 fade-in" },
                    "\u3053\u306E\u30B2\u30FC\u30E0\u306F\u30DF\u30CB\u30B2\u30FC\u30E0\u3067\u30A2\u30D0\u30BF\u30FC\u3092\u80B2\u6210\u3059\u308B\u30B2\u30FC\u30E0\u3067\u3059"
                ),
                React.createElement(
                    "button",
                    { className: "btn" },
                    "Dino"
                )
            );
        }
    }]);

    return Menu;
}(React.Component);

var id = void 0;
id = localStorage.getItem("id");
var Menu_JSX = React.createElement(Menu, null);
switch (id) {
    //IDがない時は登録画面を表示する
    case null:
        ReactDOM.render(React.createElement(Welcome, null), $("#text").get(0));
        $("#ok").click(function () {
            localStorage.setItem("id", $("#q").val());
            id = localStorage.getItem("id");
            IntervalRender([{
                "element": React.createElement(Greet, { greet: "Nice to meet you", id: id }),
                "timeout": 8000
            }, {
                "element": Menu_JSX,
                "timeout": 3000
            }], "#text");
        });
        break;
    default:
        IntervalRender([{
            "element": React.createElement(Greet, { greet: "Good morning", id: id }),
            "timeout": 8000
        }, {
            "element": Menu_JSX,
            "timeout": 3000
        }], "#text");
        break;
}