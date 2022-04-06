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
                )
            );
        }
    }]);

    return First;
}(React.Component);
//通常処理


var Every = function (_React$Component2) {
    _inherits(Every, _React$Component2);

    function Every() {
        _classCallCheck(this, Every);

        return _possibleConstructorReturn(this, (Every.__proto__ || Object.getPrototypeOf(Every)).apply(this, arguments));
    }

    _createClass(Every, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                { className: "fs-3 fade-in-out" },
                "Hello!?! ",
                localStorage.getItem("id")
            );
        }
    }]);

    return Every;
}(React.Component);

var id = localStorage.getItem("id");
switch (id) {
    //IDがない時は登録画面を表示する
    case null:
        ReactDOM.render(React.createElement(First, null), document.getElementById("text"));
        document.getElementById("ok").addEventListener("click", function () {
            localStorage.setItem("id", document.getElementById("q").value);
            ReactDOM.render(React.createElement(Every, null), document.getElementById("text"));
        });
        break;
    default:
        ReactDOM.render(React.createElement(Every, null), document.getElementById("text"));
        break;
}