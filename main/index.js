"use strict";
exports.__esModule = true;
var isOpen = false;
var useName = 'Oli';
var age = 26;
var numberList = [0, 1, 2, 3];
var stringList = ['a', 'b', 'c'];
var me = ['Oli', 26, false];
var Job;
(function (Job) {
    Job[Job["WebDev"] = 0] = "WebDev";
    Job[Job["WebDesigner"] = 1] = "WebDesigner";
    Job[Job["PM"] = 2] = "PM";
})(Job || (Job = {}));
var job = Job.WebDev;
var phone = 'Iphone X';
var tablet = 1;
var elephant = undefined;
var sayWord = function (word) {
    if (word === void 0) { word = 'hello'; }
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    console.log(others);
    return word;
};
sayWord('word', 'string', 'pie');
var newName = 'Oli';
newName = 'Tom';
var newName2 = newName;
newName2 = 'John';
var something = 'Scott';
something = 5;
var makeMargin = function (amount) {
    return "margin: " + amount + "px";
};
makeMargin(10);
makeMargin('10');
var dog;
dog = 'Lucie';
dog = undefined;
dog = null;
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return name;
};
sayName({ name: 'Oli', age: 25 });
var Type;
(function (Type) {
    Type[Type["Video"] = 0] = "Video";
    Type[Type["BlogPost"] = 1] = "BlogPost";
    Type[Type["Quiz"] = 2] = "Quiz";
})(Type || (Type = {}));
var createContent = function (contentType) { };
createContent(Type.Quiz);
console.log(Type.BlogPost);
var Type2;
(function (Type2) {
    Type2["Video"] = "VIDEO";
    Type2["BlogPost"] = "BLOG_POST";
    Type2["Quiz"] = "QUIZ";
})(Type2 || (Type2 = {}));
var createContent2 = function (contentType) { };
createContent2(Type2.Quiz);
console.log(Type2.BlogPost);
var Team = (function () {
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        console.log('Goall', this.teamName);
        return 5;
    };
    return Team;
}());
var redWings = new Team('Redwings');
redWings.score();
var outPutInput = function (arg) {
    return arg;
};
var output1 = outPutInput('hi');
var output2 = outPutInput(3);
var Dancer = (function () {
    function Dancer() {
    }
    return Dancer;
}());
var ElNino = new Dancer();
var fake = {
    name: "Scott",
    year: 5
};
ElNino = fake;
