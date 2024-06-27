// Code your solution in this file!
function distanceFromHqInBlocks (pickupPoint){
    const destinationPoint = 42;
    if (pickupPoint > destinationPoint){
        return pickupPoint - destinationPoint;
    }else {
        return destinationPoint - pickupPoint;
    }
}
function distanceFromHqInFeet (pickupPoint){
    const distanceInBlocks = distanceFromHqInBlocks(pickupPoint)

    return distanceInBlocks * 264;
}
function distanceTravelledInFeet (pickupPoint, destinationPoint){
    if (pickupPoint > destinationPoint){
        return (pickupPoint - destinationPoint) * 264;
    }else{
        return (destinationPoint - pickupPoint) * 264;
    }
}
function calculatesFarePrice (pickupPoint, destinationPoint){
    const distance = distanceTravelledInFeet(pickupPoint, destinationPoint);
    if (distance <= 400){
        return 0;
    }else if (distance > 400 && distance <= 2000){
        const excessFeet = distance - 400;
        return excessFeet * 0.02;
    }else if (distance > 2000 && distance < 2500){
        return 25.0;
    }else{
        return "cannot travel that far";
    }
}