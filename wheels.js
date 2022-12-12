
//Add 4 wheels to chassis (input is a chassis, output is chassis with wheels)
//This function receives input of a car chassis object, adds a new property to the chassis object and passes the chassis object back.
const addWheels = (chassisObject) => {
    // use dot notation to add the wheels property to the chassis object.
    chassisObject.wheels = 4;
    return chassisObject;

};

module.exports = {addWheels};