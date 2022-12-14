/*  1. elseを使⽤する時の注意点
    ・ifで当てはまらないときのelseで処理する
    ・ifが無い時には使用できない
    ・ifとelseの間に処理を書くとエラーになる

    2. JavaScriptで実装した時の確認ポイント
    ・コンソールにエラーが表示されていないか確認する
 */

//  3. 数値型を⽐較してelseの処理に⼊る処理
var num = 100
if (num !== 100){
    console.log("ture");
    console.log(num);
} else {
    console.log("false");
    console.log(num);
}

//  4. ⽂字列型を⽐較してelseの処理に⼊る処理
var text = "ねこ"
if (text === "いぬ"){
    console.log("ture");
    console.log(text);
} else {
    console.log("false");
    console.log(text);
}