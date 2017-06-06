const app = "I don't do much."

function bumpCounter() {
    var counter = 0

    function addBump() {
        counter += 1
    }

    function getBumps() {
        return counter
    }

    return {
        addBump,
        getBumps
    }

}


function createAnimal (animalType) {
    function xXx (deadlyDevice) {
        return {
            animalType,
            deadlyDevice
        }
    }
    return xXx
}



var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')