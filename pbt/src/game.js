//DOM構築用変数
const r = React.createElement;

//待ち時間を指定
//Promiseベース
const delay = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve,seconds);
    })
}
//定期Render用関数
const IntervalRender = (elements,selector) => {
    $.each(elements, async (index,value) => {
        ReactDOM.render(
            value["element"],
            $(selector).get(0)
        );
        await delay(value["timeout"]);
    });
};


let id;
id = localStorage.getItem("id");
let Menu_JSX = React.createElement(Menu, null);
switch(id){
    //IDがない時は登録画面を表示する
    case null:
        ReactDOM.render(
            r(Welcome,null),
            $("#text").get(0)
        );
        $("#ok").click(() => {
            localStorage.setItem("id",$("#q").val());
            id = localStorage.getItem("id");
            IntervalRender(
                [
                    {
                        "element" : r(Greet, {greet : "Nice to meet you",id : id} ) ,
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
                    "element" : r(Greet, {greet : "Hello",id : id} ),
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