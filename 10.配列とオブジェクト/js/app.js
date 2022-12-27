// 1. 3つ以上の値を⽤意して変数に代⼊してください。その1番⽬と3番⽬をコンソールで表⽰してください。
var hobby = ["楽器演奏","ゲーム","音楽を聴く","散歩"];
console.log(hobby[1]);
console.log(hobby[3]);

/* 2. key、value、プロパティーについて説明してください。
・keyとは、valueとペア。title、author等のカテゴリ名。
・valueとは、keyとペア。keyのカテゴリに対しての中身。
            keyがtitleなら valueは「吾輩は猫である」、keyがauthorなら valueは「夏目漱石」になる。
・プロパティーとは、オブジェクトの特徴(データ)のことで、keyとvalueのペアから成り立っている。*/

// 3. 3つほどプロパティを⽤意したオブジェクトを⽤意してコンソールで表⽰してください。
var cat = {
    name: "ムギ",
    catBreed: "ベンガル",
    age: 4,
}
console.log(cat.name);


/* 4. オブジェクトを3つ⽤意してそれを配列として代⼊してください。
配列の0番⽬と3番⽬を表⽰させ、その中のkeyを指定してコンソールに表⽰させてください。*/
var cats = [
    {
        name: "サクラ",
        catBreed: "アメリカンショートヘアー",
        age: 2,
    },
    {
        name: "ユキ",
        catBreed: "ラグドール",
        age: 3,
    },
    {
        name: "モミジ",
        catBreed: "ソマリ",
        age: 1,
    }
]
console.log(cats[0]);
console.log(cats[3]);