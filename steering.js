//Add a steering wheel to chassis (input is a chassis, output is chassis with four wheels ouput is a chassis with four wheels and a steering wheel)
//This function receives the input of the chassisObject, adds a new property of steering wheel and passes the chassis object back.
const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting";
    return chassisObject;
};

module.exports = {addSteeringWheel};