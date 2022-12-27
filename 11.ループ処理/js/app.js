// for
for (var i = 1; i < 10; i++) {
    console.log("ループ" + i + "回目")
};

// for in
var items = ["リンゴ","バナナ","イチゴ"];
for (index in items) {
    console.log(items[index]);
};

// for of
var teachers = [
    {
        name: "太郎",
        age: 25,
        subject: "国語",
    },
    {
        name:"浩司",
        age: 30,
        subject:"数学",
    },
    {
        name: "花子",
        age: 26,
        subject: "社会",
    }
]
for(teacher of teachers)
{
    console.log(teacher);
};

// 1. forを使ったループ処理を作ってください。
var sum = 0;
for(var i = 1; i <= 10; i++){
    sum +=i;
}
console.log(sum);

// 2. for inを使ったループ処理を作ってください。
var cats = ["三毛猫","白猫","黒猫"];
for (index in cats) {
    console.log(cats[index])
};

// 3. for ofを使ったループ処理を作ってください。
var cats = [
    {
        name:"モチ",
        age:2,
        cat_breed:"ペルシャ",
    },
    {
        name:"きなこ",
        age:3,
        cat_breed:"トンキニーズ",
    },
    {
        name:"ナナ",
        age:1,
        cat_breed:"エキゾチック"
        }
]
for(cat of cats)
{
    console.log(cat);
};