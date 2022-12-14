// 1. AND(&&)の条件を作成し、その処理に⼊るよう作ってください。（elseの処理も作成してください）
var fruits = "りんご"
var fruits1 = "みかん"
if (fruits == "りんご" && fruits1 == "みかん") {
    console.log("りんごとみかんのフルーツセットです");
    console.log(fruits == "りんご" && fruits1 == "みかん");
} else {
    console.log("りんごとみかんのフルーツセットではありません");
    console.log(fruits == "りんご" && fruits1 == "みかん");
}

// 2. OR(||)の条件を作成し、その処理に⼊るよう作ってください。（elseの処理も作成してください）
var vegetable = "にんじん"
var vegetable1 = "じゃがいも"
if (vegetable == "にんじん" || vegetable1 == "じゃがいも") {
    console.log("野菜");
    console.log(vegetable == "にんじん" || vegetable1 == "じゃがいも");
} else {
    console.log("野菜ではありません");
    console.log(vegetable == "にんじん" || vegetable1 == "じゃがいも");
}

/* 3. NOT(!)の条件を作成し、その処理に⼊るよう作ってください。
⽐較条件は数値型の⽐較でお願いします。（elseの処理も作成してください）*/
var price = 50
if (!price) {
    console.log("安くない");
    console.log(!price);
} else {
    console.log("特売");
    console.log(!price);
}