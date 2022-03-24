var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//初期設定の表示
var First = function (_React$Component) {
    _inherits(First, _React$Component);

    function First() {
        _classCallCheck(this, First);

        return _possibleConstructorReturn(this, (First.__proto__ || Object.getPrototypeOf(First)).apply(this, arguments));
    }

    _createClass(First, [{
        key: "render",
        value: function render() {
            return (
                //返すHTML
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "p",
                        null,
                        "\u307F\u306A\u3055\u3093\u306F\u3058\u3081\u307E\u3057\u3066"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "PBT\u958B\u767A\u30E1\u30F3\u30D0\u30FC\u3067\u3059"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "p",
                        null,
                        "\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u540D\u524D\u3092\u6C7A\u3081\u3066\u304F\u3060\u3055\u3044"
                    ),
                    React.createElement(
                        "form",
                        null,
                        React.createElement("input", { type: "text" }),
                        React.createElement("input", { type: "button", value: "\u6C7A\u5B9A" })
                    )
                )
            );
        }
    }]);

    return First;
}(React.Component);
//通常処理


var Every = function () {
    //初期設定
    function Every(id) {
        _classCallCheck(this, Every);

        this.id = id;
    }

    _createClass(Every, [{
        key: "Hello_message",
        value: function Hello_message() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "\u304A\u4E45\u3057\u3076\u308A\u3067\u3059 ",
                    this.id
                )
            );
        }
    }]);

    return Every;
}();

var id = localStorage.getItem("id");
var every = new Every(id);
switch (id) {
    //IDがない時は登録画面を表示する
    case null:
        ReactDOM.render(React.createElement(First, null), document.getElementById("text"));
        break;
    default:
        ReactDOM.render(every.Hello_message(), document.getElementById("text"));
        break;
}