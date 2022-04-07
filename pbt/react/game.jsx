//定期Render用関数
function IntervalRender(elements,selector){
    let total_timeout = 0;
    $.each(elements,(index,value) => {
        total_timeout += value["timeout"];
        setTimeout(() => {
            ReactDOM.render(
                value["element"],
                $(selector).get(0)
            );
        }, total_timeout);
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
        return <p className="fs-3 fade-in-out">{this.greet}!! {this.id}</p>
    }
}

class Menu extends React.Component{
    render(){
        return(
            <div>
                <p>このゲームはミニゲームでアバターを育成するゲームです</p>
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
                        "timeout" : 0
                    },
                    {
                        "element" : Menu_JSX,
                        "timeout" : 6000
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
                    "timeout" : 0
                },
                {
                    "element" : Menu_JSX,
                    "timeout" : 6000
                }
            ]
        ,"#text");
        break;
}