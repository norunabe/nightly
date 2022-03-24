//初期設定の表示
class First extends React.Component{
    render(){
        return(
            //返すHTML
            <div>
                <p>みなさんはじめまして</p>
                <p>PBT開発メンバーです</p>
                <br></br>
                <p>プレイヤーの名前を決めてください</p>
                <form>
                    <input type="text"></input>
                    <input type="button" value="決定"></input>
                </form>
            </div>
        );
    }
}
//通常処理
class Every{
    //初期設定
    constructor(id){
        this.id=id;
    }
    Hello_message(){
        return(
            <div>
                <p>お久しぶりです {this.id}</p>
            </div>
        );
    }
}
let id=localStorage.getItem("id");
let every=new Every(id);
switch(id){
    //IDがない時は登録画面を表示する
    case null:
        ReactDOM.render(
            <First />,
            document.getElementById("text")
        );
        break;
    default:
        ReactDOM.render(
            every.Hello_message(),
            document.getElementById("text")
        );
        break;
}