import { Person } from './interfaces';

//Basic Types

const isOpen: boolean = false;

const useName: string = 'Oli';

const age: number = 26;

const numberList: number[] = [0, 1, 2, 3];

const stringList: string[] = ['a', 'b', 'c'];

const me: [string, number, boolean] = ['Oli', 26, false];

enum Job {
  WebDev,
  WebDesigner,
  PM,
}

const job: Job = Job.WebDev;

const phone: any = 'Iphone X';

const tablet: any = 1;

const elephant: undefined = undefined;

//Funtions

// const sayWord = (word?: string): string => {
//   console.log(word || 'cheese');
//   return word || 'cheese';
// };
// sayWord('word');

const sayWord = (word = 'hello', ...others: string[]): string => {
  console.log(others);
  return word;
};
sayWord('word', 'string', 'pie');

//Implicict types - knows should be string
let newName = 'Oli';
newName = 'Tom';
//newName= 10 //ERRORS

let newName2 = newName;
newName2 = 'John';
//newName2 = 5 //ERRORS because newName2 gets implicit type from newName DECLARATION

let something: string | number = 'Scott';
something = 5; //No Error | === ||

//Functions

const makeMargin = (amount: string | number): string => {
  return `margin: ${amount}px`;
};

makeMargin(10);
makeMargin('10');
//makeMargin(false); ERRORS

//Null types

let dog: string;
dog = 'Lucie';
dog = undefined; //Works!
dog = null; // Works!

// let newDog: string = 'Lassie';
// newDog = 'Lucie';
// newDog = undefined; //Works!
// newDog = null; // Works!

//INTERFACES

//MOVED TO './src/interfaces
// interface Person {
//   name: string;
//   age?: number; // ? = optional
// }

const sayName = ({ name, age }: Person): string => {
  console.log(name);
  return name;
};

// const sayName = ({ name, age }: Person): Person => {
//   console.log(name);
//   return {name, age};
// };

sayName({ name: 'Oli', age: 25 });

//ENUM

//Numeric Enum
enum Type {
  Video, // 0
  BlogPost, // 1
  Quiz, // 2
}

const createContent = (contentType: Type) => {};

createContent(Type.Quiz);

console.log(Type.BlogPost);

//String Enum
enum Type2 {
  Video = 'VIDEO',
  BlogPost = 'BLOG_POST',
  Quiz = 'QUIZ',
}

const createContent2 = (contentType: Type2) => {};

createContent2(Type2.Quiz);

console.log(Type2.BlogPost);

//CLASSES

class Team {
  // teamName: string;
  // public teamName: string; //accessable everywhere - not needed
  private teamName: string; //only accesable inside the class
  // readonly teamName: string; //cannot change this property

  constructor(teamName: string) {
    this.teamName = teamName;
  }

  score(): number {
    console.log('Goall', this.teamName);
    return 5;
  }
}

const redWings = new Team('Redwings');
// console.log(redWings.teamName);
redWings.score();

const outPutInput = <T>(arg: T): T => {
  return arg;
};

const output1: string = outPutInput('hi');
const output2: number = outPutInput(3);


//Duck Typing

class Dancer implements Person {
  name: string;  
  age?: number;
}

let ElNino: Person = new Dancer();

const fake = {
  name: "Scott",
  year: 5,
}

ElNino = fake;



