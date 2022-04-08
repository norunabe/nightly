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
    $.each(elements, (index,value) => {
        ReactDOM.render(
            r(value["tag"],value["props"],value["text"]),
            $(selector).get(0)
        );
        await delay(value["timeout"]);
    });
};