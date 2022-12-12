//Add an engine to chassis (input is a chassis, output is chassis with an engine, and a steering, wheel, and four wheels, and a drive train and a body)
//This function receives the input of the chassisObject, adds a new body property to the object and passes the chassis object back.
const addBody = (chassisObject) => {
    chassisObject.body = "Fever";
    return chassisObject;
};

// let chassis = createChassis()
// console.log(chassis)

module.exports = {addBody};