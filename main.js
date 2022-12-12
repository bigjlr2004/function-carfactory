const { createChassis } = require("./chassis.js");
const { addWheels} = require("./wheels.js");
const { addSteeringWheel} = require("./steering.js");
const { addEngine} = require("./engine.js");
const { addDriveTrain} = require("./drivetrain.js");
const { addBody} = require("./body.js");
/*

Simulation of a car factory. 

Produce a car chassis (no input, outputs new chassis object)
Add 4 wheels to chassis (input is a chassis, output is chassis with wheels)
Add an engine to chassis (input is a chassis, output is chassis with an engine)
Add a steering wheel to chassis (input is a chassis, output is chassis with a steering wheel)
Add a body to chassis (input is a chassis, output is chassis with a body)
Add a drive train to chassis (input is a chassis, output is chassis with a drive train)


*/


//Produce a car chassis (no input, outputs new chassis object)
//This function produces a car chassis. It receives no input but it creates the Chassis Object that will be passed down the line.
// const createChassis = () => {
//     //Create new object. No properties yet.
    //  const newChassisObject = {};

//     //if your function passes a result you must store it in a variable.
//     return newChassisObject;
// };

//Add 4 wheels to chassis (input is a chassis, output is chassis with wheels)
//This function receives input of a car chassis object, adds a new property to the chassis object and passes the chassis object back.
// const addWheels = (chassisObject) => {
//     // use dot notation to add the wheels property to the chassis object.
//     chassisObject.wheels = 4;
//     return chassisObject;

// };

// //Add a steering wheel to chassis (input is a chassis, output is chassis with four wheels ouput is a chassis with four wheels and a steering wheel)
// //This function receives the input of the chassisObject, adds a new property of steering wheel and passes the chassis object back.
// const addSteeringWheel = (chassisObject) => {
//     chassisObject.steeringWheel = "Tilting";
//     return chassisObject;
// };

//Add an engine to chassis (input is a chassis, output is chassis with an engine, and a steering, wheel, and four wheels)
//This function receives the input of the chassisObject, adds a new drive train property to the object and passes the chassis object back.
// const addEngine = (chassisObject) => {
//     chassisObject.Engine = "4.8L";
//     return chassisObject;
// };

// //Add an engine to chassis (input is a chassis, output is chassis with an engine, and a steering, wheel, and four wheels, and a drive train)
// //This function receives the input of the chassisObject, adds a new drive train property to the object and passes the chassis object back.
// const addDriveTrain = (chassisObject) => {
//     chassisObject.driveTrain = "Two wheel drive";
//     return chassisObject;
// };

// //Add an engine to chassis (input is a chassis, output is chassis with an engine, and a steering, wheel, and four wheels, and a drive train and a body)
// //This function receives the input of the chassisObject, adds a new body property to the object and passes the chassis object back.
// const addBody = (chassisObject) => {
//     chassisObject.body = "Fever";
//     return chassisObject;
// };

// let chassis = createChassis()
// console.log(chassis)


/*
	Note in the code below that the object that gets returned from the
	createChassis() function above is stored in the chassis variable. That
	value is then sent to the addwheels() function as that function's input.
*/
// let chassisWithWheels = addWheels(chassis)
// console.log(chassisWithWheels)
// chassisWithWheels = addSteeringWheel(chassis);
// console.log(chassisWithWheels);
// chassisWithWheels = addEngine(chassis);
// console.log(chassisWithWheels);
// chassisWithWheels = addDriveTrain(chassis);
// console.log(chassisWithWheels);
// chassisWithWheels = addBody(chassis);
// console.log(chassisWithWheels);

let newChassis = createChassis();
let chassisWithWheels = addWheels(newChassis)
console.log(chassisWithWheels)
let chassisSteeringWheel = addSteeringWheel(chassisWithWheels);
console.log(chassisSteeringWheel);
 let chassisWithEngines = addEngine(chassisSteeringWheel);
console.log(chassisWithEngines);
let chassisWithDriveTrain = addDriveTrain(chassisWithEngines);
console.log(chassisWithDriveTrain);
let chassisWithBody = addBody(chassisWithDriveTrain);
console.log(chassisWithBody);




