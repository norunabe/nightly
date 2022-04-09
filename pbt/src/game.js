"use strict";

//DOM構築用変数
const r = React.createElement;

//待ち時間を指定
//Promiseベース
const delay = (m_seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve,m_seconds);
    })
}
//定期Render用関数
const IntervalRender = async (elements,selector) => { //async,awaitはES7
    for (let element of elements){ //同期処理のためにfor~of{},forEachは非同期処理
        ReactDOM.render(
            element["element"],
            $(selector).get(0)
        );
        await delay(element["timeout"]); //指定した秒数待つ同期処理
    }
};


let id;
id = localStorage.getItem("id"); //idをlocalstorageから取得
const Greet = new Greets(); //Greetsclass用の変数
switch(id){
    //IDがない時は登録画面を表示する
    case null:
        ReactDOM.render(
            Welcome,
            $("#text").get(0)
        );
        $("#ok").click(() => {
            localStorage.setItem("id",$("#q").val());
            id = localStorage.getItem("id");
            IntervalRender(
                [
                    {
                        "element" : Greet.Nice() ,
                        "timeout" : 8000
                    },
                    {
                        "element" : Menu,
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
                    "element" : Greet.Hello() ,
                    "timeout" : 8000
                },
                {
                    "element" : Menu,
                    "timeout" : 3000
                }
            ]
        ,"#text");
        break;
}