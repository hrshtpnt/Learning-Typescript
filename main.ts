/*

WELCOME TO LEARN TYPESCRIPT (Hands on learning)
Steps to learn
Install VS code, this has a console terminal, running program becomes very easy.
1. Copy the whole code, create a file called main.ts inside a folder "name it whatever you want" and paste the code.

2. Each topic is created as a function and each function can be called one by one and 
modified for testing purpose.
3. Call each function and see the output in console. Modify the function 
do some tests until you are comfortable with each function.
4. Read comments properly and google things that are not very clear.
5. Let us begin.

NOTE if the function you want to call is function test () {};
call it as test();
that's all, lets begin.

*/

/*

This the hello world program to test your TS code.
to run the code 
cmd > tsc main.ts
transpiles the file, a new file in the same directory is created with same name but with .js extention and now you can run 
node main.js to get the console output.

These commands can be merged together 
tsc main.ts | node main.js
In mac however you need to use this command 
tsc main.ts && node main.js
*/
function firstProgram() {
	console.log("Hello world");
}

/*
The problem with the doSomething function is that 
the value of i exits outside the scope of the for loop
block, to rectify this issue ES6 came up with let keyword
check the difference yourself
*/

function usedVarKeyword() {
	for (var i=0; i< 10; i++) {

		console.log(i);
	}

	console.log("Finally the value of i becomes : " + i);
}

function usedLetKeyword() {
	for (let i=0; i< 10; i++) {
		console.log(i);
	}
	/* console.log("finally the value becomes : " + i);  */
	 /*comment / uncomment above lines to test yourself*/
	/* The statement above would throw an unhandled error event. */
	/*This code perfectly runs in main.js meaning if you do node main.js it runs like usedVarkeyword */
}

function understandingTypes() {
	let a;
	/*
	In TS we cannot change the type 
	Now if we hover over to 'a' the type is any
	and we can change the type 
	for this we used :annotation that specifies the type
	*/
	a = 1;
	a = "test";
	/*
	The above two lines do not give any error. Although it is not adviced to use this.
	*/
	let b :number;  /*This way we annotate the variable */
	let c :any;
	let d :string;
	let e :string[] = ["Hello", "world", "theNew"];
	let f :boolean;
	let g :any[] = [1, "true", true]

}

function conceptOfenum() {
	const colorRed =1;
	const colorBlue = 2;
	const colorPink = 3;

	/*
	In Typescipt we can create this using enum very easily 
	Enums allow us to define a set of named constants. 
	Using enums can make it easier to document intent, or create a set of distinct cases. 
	TypeScript provides both numeric and string-based enums
	*/
	enum color {"red" =1 , "blue"=2 , "pink"=3 };

	/*and to use it */

	let backgroundColor = color.red;
}

function assertionAndHowToUse() {
	let someString;
	someString = "abc";
	/*
	The type is any so we will not see any helper functions or intellicence for the variable
	TO get it explicitly tell the type
	there are two ways to achive this
	*/

	let endsWithBoolean = (<string>someString).endsWith('c');
	let alternativeWay = (someString as string).endsWith('c');
	console.log(endsWithBoolean);
	console.log(alternativeWay);

}

function understandingArrowFunction() {
	let message = "Hello world";
	
	let myfirstMethod = function(message){
		console.log(message + "from myfirstMethod");
	}
	myfirstMethod(message);

	let mySecondFunction = (message) => { /* This is an arrow function expression */
		console.log(message + "from mySecondFunction which is an arrow function");
	}
	mySecondFunction(message);
}

/*

Defining an interface 
An interface is a syntactical contract that an entity should conform to.
In other words, an interface defines the syntax that any entity must adhere to.

Interfaces define properties, methods, and events, which are the members
of the interface. Interfaces contain only the declaration of the members. 
It is the responsibility of the deriving class to define the members.
It often helps in providing a standard structure that the deriving classes would follow.
*/
function interfaceLearning() {

	/* This is how we define an interface in Typescript */
	interface Point {
		x :number;
		y: number;
	}
	
	let drawPoint = (point : Point) => {
	 console.log(point.x + "and " + point.y);
	}
	
	drawPoint({
		x: 7,
		y: 6
	});
}


function creatingANewClass() {
	class Point {
		x : number;
		y : number;
		
		drawPoint() {
			//..
			console.log("the value of x is " + this.x  + " the value of y is " + this.y);
		}

		getDistance(anotherPoint: Point) {
			//.,.
		}

	}

	let point /* type assertion is not required here, it automatically makes it Point in this case */ = new Point();
	point.x = 6; // this is too verbose so to fix this we can create a constructor
	point.y = 6; // next function shows how to create a constructor
	point.drawPoint();
}

function creatingANewConstructor () {
	// constructor is a reserved keyword in TS
	class Dot {
		x : number;
		y : number;
		constructor(x:number, y: number) { //creating a constructor
			this.x = x;
			this.y = y;
		}

		//add ? before x makes it optional eg. constructor(x?, y?) {} 
		//once a parameter is set optional all parameters on the right to it 
		//have to be optional as well, this is important*


		drawDot() {
			//..
			console.log("the value of x is " + this.x  + " the value of y is " + this.y);
		}

	}

	let dot = new Dot(5,3); //now the code doesn't look too verbose, note we are passing values of x and y here.
	dot.drawDot();
}

/*
Access Modifiers in TS

 public private and public



*/

function understandingModifiers() {
	class Dot {
		constructor(private _x? :number, private _y? :number) { //added the access modifier inside the constructor, auto initialization
		}
		drawDot() {
			console.log("the value of x is " + this._x  + " the value of y is " + this._y);
		}
		getX() { //these are the functions that we create to make our own getter and setter,
				 // Note TS has predefined way to achieve it
				 //so varable names are changed to _x from x
				 // it's not recommmended to use capital x in TS and JS as a function name so we needed to make it small x 
			return this._x;
		}
		setX(value:number) {
			this._x = value;
		}

		//get X() and set Y () are the functions predefined, but in JS and TS we follow camelcase characters

		get x() { 
			return this._x;
		}

		set x(value:number) {
			this._x = value;
		}
	}
	let dot = new Dot(5,3);
	dot.drawDot();
	let x = dot.getX();
	console.log("Fetching the value of x using a getter function "  +x );
	dot.setX(7);
	console.log("Fetching the value of x using a getter function after setting its value using setter "  +x );
}


/*
TS is modular meaning we can create our own modules and export and import the modules to 
other files using TS
export class Point {
}
import Point from 'relative path'
*/
