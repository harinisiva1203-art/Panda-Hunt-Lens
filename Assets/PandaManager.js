// PandaManager.js

var pandas = [];

var minX = -450.0;
var maxX = 450.0;
var minDistance = 180.0;


// Register a panda
function registerPanda(panda) {

    if (pandas.indexOf(panda) == -1) {
        pandas.push(panda);
    }
}


// Get a safe random X position
function getSafeX(currentPanda) {

    for (var attempt = 0; attempt < 50; attempt++) {

        var newX =
            minX + Math.random() * (maxX - minX);

        var safe = true;

        for (var i = 0; i < pandas.length; i++) {

            var other = pandas[i];

            if (!other || other == currentPanda) {
                continue;
            }

            var image =
                other.getComponent("Component.Image");

            // Ignore hidden pandas
            if (image && !image.enabled) {
                continue;
            }

            var transform =
                other.getComponent("Component.ScreenTransform");

            if (!transform) {
                continue;
            }

            var otherX = transform.position.x;

            if (Math.abs(newX - otherX) < minDistance) {

                safe = false;
                break;
            }
        }

        if (safe) {
            return newX;
        }
    }

    return minX +
        Math.random() * (maxX - minX);
}


// Expose functions WITHOUT api
script.registerPanda = registerPanda;
script.getSafeX = getSafeX;