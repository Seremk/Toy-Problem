let speed = 500
if (speed <= 90) {
    console.log ('Ok')
}
else {

    let extSpeed = speed - 70
    let demerPoints = extSpeed / 5
    if (demerPoints > 12) {
        console.log ('Licence Suspended' ,demerPoints)
    }
    else {
        console.log ('$ [demerPoints]has been deducted');
    }

}
console.log