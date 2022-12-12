//Add an engine to chassis (input is a chassis, output is chassis with an engine, and a steering, wheel, and four wheels, and a drive train)
//This function receives the input of the chassisObject, adds a new drive train property to the object and passes the chassis object back.
const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two wheel drive";
    return chassisObject;
};

module.exports = {addDriveTrain};