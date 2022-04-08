//setTimeout地獄,callback地獄から逃げる
const wait = ((seconds) => {
    return new Promise((resolve) =>{
        setTimeout(resolve,seconds);
    });
});
//定期Render用関数
function IntervalRender(elements,selector){
    let delay = wait(0);
    $.each(elements,(index,value) => {
        delay = delay.then(() => {
            ReactDOM.render(
                value["element"],
                $(selector).get(0)
            );
            return wait(value["timeout"]);
        });
    });
}

//初期設定の表示
class Welcome extends React.Component{
    render(){
        return(
            <div className="fade-in">
                <p className="fs-3 gradation-color">みなさんはじめまして</p>
                <p>プレイヤーの名前を決めてください</p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="好きな名前を入力" aria-label="好きな名前を入力" id="q"></input>
                    <input type="button" value="OK!" className="btn btn-outline-light" id="ok"></input>
                </div>
            </div>
        );
    }
}
//通常処理
class Greet extends React.Component{
    constructor(props){
        super(props);
        this.greet = props.greet;
        this.id = props.id;
    }
    render(){
        return(
            <div className="fade-in-out keep-animation">
                <p className="fs-3">{this.greet}!! {this.id}</p>
                <a href="https://github.com/yaskou/nightly/tree/main/pbt" class="btn btn-light stretched-link gradation-color">Developer GitHub</a>
            </div>
        );
    }
}

//メインメニュー
class Menu extends React.Component{
    render(){
        return(
            <div>
                <p className="fs-4 fade-in">このゲームはミニゲームでアバターを育成するゲームです</p>
                <button className="btn">Dino</button>
            </div>
        );
    }
}


let id;
id = localStorage.getItem("id");
let Menu_JSX = <Menu />
switch(id){
    //IDがない時は登録画面を表示する
    case null:
        ReactDOM.render(
            <Welcome />,
            $("#text").get(0)
        );
        $("#ok").click(() => {
            localStorage.setItem("id",$("#q").val());
            id = localStorage.getItem("id");
            IntervalRender(
                [
                    {
                        "element" : <Greet greet="Nice to meet you" id={id} />,
                        "timeout" : 8000
                    },
                    {
                        "element" : Menu_JSX,
                        "timeout" : 3000
                    }
                ]
            ,"#text");
        });
        break;
    default:
        IntervalRender(
            [
                {
                    "element" : <Greet greet="Good morning" id={id} />,
                    "timeout" : 8000
                },
                {
                    "element" : Menu_JSX,
                    "timeout" : 3000
                }
            ]
        ,"#text");
        break;
}