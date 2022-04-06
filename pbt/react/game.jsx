//初期設定の表示
class First extends React.Component{
    render(){
        return(
            //返すHTML
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
class Every extends React.Component{
    render(){
        return(
            <p className="fs-3 fade-in-out">Hello!?! {localStorage.getItem("id")}</p>
        );
    }
}

let id = localStorage.getItem("id");
switch(id){
    //IDがない時は登録画面を表示する
    case null:
        ReactDOM.render(
            <First />,
            document.getElementById("text")
        );
        document.getElementById("ok").addEventListener("click",() => {
            localStorage.setItem("id",document.getElementById("q").value);
            ReactDOM.render(
                <Every />,
                document.getElementById("text")
            );
        });
        break;
    default:
        ReactDOM.render(
            <Every />,
            document.getElementById("text")
        );
        break;
}