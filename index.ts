let id: number = 5;
let firstname: string = 'danny';
let hasDog: boolean | string = true;

let unit: number; // Declare variable without assigning a value
unit = 5;
hasDog = 'false';

interface testInter {
    tuple: [string, boolean, number],
    age: number,
    list: string[]
}

let yaytuple: [string, boolean, number] = ['1', true, 3];

let yay: testInter = {
    tuple: yaytuple,
    age: 17,
    list: ['sd', 'df']
}

console.log(yay.tuple);

const perimeter = (sideLen: number, c?: number | string): void => {
    console.log(c);
    console.log(4 * sideLen);
};
  
class yayPerson {
    readonly name: string;
    isYay: boolean;
    yays: number;
  
    constructor(n: string, c: boolean, p: number) {
      this.name = n;
      this.isYay = c;
      this.yays = p;
    }
  
    sayHello() {
      return `Hi, my name is ${this.name} and I have ${this.yays} yays`;
    }
  }

const yay1 = new yayPerson("Luke", true, 7);
console.log(yay1.sayHello());

class yayerPerson extends yayPerson {
    constructor(n: string, c: boolean, p: number) {
        super(n, c, p * 3);
    }
  }

let yayList: 'yay' | 'yaay' | 'yaaay';

yayList = 'yaaay';

enum YayColors {
    RED = 1,
    ORANGE,
    YELLOW,
    GREEN,
    BLUE,
    INDIGO,
    VIOLET
}

console.log(YayColors.ORANGE);


  