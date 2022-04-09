//BabelでES5に変換


//Render用class

//初期設定の表示
class Welcome_ extends React.Component{
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
class Greet_ extends React.Component{
    constructor(props){
        super(props);
        this.greet = props.greet;
        this.id = props.id;
    }
    render(){
        return(
            <div className="fade-in-out keep-animation">
                <p className="fs-3">{this.greet}!! {this.id}</p>
                <a href="https://github.com/yaskou/nightly/tree/main/pbt" class="btn btn-outline-light gradation-color">Developer GitHub</a>
            </div>
        );
    }
}
//メインメニュー
class Menu_ extends React.Component{
    render(){
        return(
            <div className="fade-in">
                <p className="fs-4">このゲームはミニゲームでアバターを育成するゲームです</p>
                <button className="btn btn-outline-secondary" id="dino">Dino</button>
            </div>
        );
    }
}


//Render用JSX

const Welcome = <Welcome_ />;
class Greets {
    Nice() {
        return(
            <Greet_ greet="Nice to meet you" id={id} />
        );
    }
    Hello() {
        return(
            <Greet_ greet="Good morning" id={id} />
        );
    }
}
const Menu = <Menu_ />;