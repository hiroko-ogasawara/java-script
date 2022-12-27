/*1. プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。
プロパティは、オブジェクトの属性で、見た目や様子、状態などのこと。keyとvalueのペア。
メソッドは、プロパティのvalue部分に関数を当てはめたもの。オブジェクトの動き、動作。
*/

const conpany = {
    name: "株式会社A",
    business: "健康食品",
    vision: function() { console.log("健康で豊かな生活づくりに貢献する");}
}
conpany.vision()

const student = {
    name: "相川さくら",
    class: "2-B",
    Profile: function() { console.log("韓国語、英語が話せます");}
}
student.Profile()

const athlete = {
    name: "小金井みか",
    age: 20,
    Competition: function() { console.log("世界大会出場、フィギュアスケート選手");}
}
athlete.Competition()

// 2. 下記の関数を実⾏してその結果をコンソールに表⽰してください。（スコープ内に書く⽅法はだめです。)
function fruit(name, price) {
    const result = name + "の値段は" + price + "円です。"
    return result
};
console.log(fruit("りんご",100));

// 3. 下記の関数を経由して2つの関数を実⾏するような処理を作ってください。
function addTax(price, func) {
    const taxPrice = Math.round(price * 1.10);// 税込み価格を計算して四捨五⼊して整数にしている(スコープ内でしか参照できません。)
    func(taxPrice)//  funcは実⾏する関数名
}
// トマトの税込み価格をコンソールに表⽰させる処理
const tomato = function tomato(taxPrice){
    console.log("トマトの値段は" + taxPrice + "円です。");
}
addTax(300,tomato);

// ⽟ねぎの税込み価格をコンソールに表⽰させる処理
const onion = function onion(taxPrice){
    console.log("玉ねぎの値段は" + taxPrice + "円です。");
}
addTax(120,onion);