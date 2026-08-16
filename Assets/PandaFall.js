//@input float startDelay = 3.0

var panda = script.getSceneObject();
var screenTransform = panda.getComponent("Component.ScreenTransform");
var pandaImage = panda.getComponent("Component.Image");

var speed = 180.0;

var minX = -450.0;
var maxX = 450.0;

var topY = 500.0;
var bottomY = -500.0;

var minDistance = 150.0;

var respawnDelay = 0.5;
var respawnTimer = 0;

var startTimer = script.startDelay;
var gameStarted = false;

var wasVisible = true;


// Get a new random X position
function getNewX(oldX) {

    var newX = oldX;
    var attempts = 0;

    while (
        Math.abs(newX - oldX) < minDistance &&
        attempts < 30
    ) {

        newX =
            minX +
            Math.random() * (maxX - minX);

        attempts++;
    }

    return newX;
}


// Put panda at the top
function resetPanda() {

    var pos = screenTransform.position;

    pos.x = getNewX(pos.x);
    pos.y = topY;

    screenTransform.position = pos;

    speed = 150.0 + Math.random() * 180.0;
}


// IMPORTANT:
// Hide panda immediately when game starts
pandaImage.enabled = false;


// Main update
script.createEvent("UpdateEvent").bind(function() {

    // --------------------------------
    // WAIT FOR GAME TO START
    // --------------------------------
    if (!gameStarted) {

        startTimer -= getDeltaTime();

        if (startTimer <= 0) {

            gameStarted = true;

            resetPanda();

            pandaImage.enabled = true;
        }

        return;
    }


    // --------------------------------
    // PANDA WAS TAPPED
    // --------------------------------
    if (!pandaImage.enabled && wasVisible) {

        wasVisible = false;

        respawnTimer = respawnDelay;

        return;
    }


    // --------------------------------
    // WAIT BEFORE RESPAWN
    // --------------------------------
    if (!pandaImage.enabled && !wasVisible) {

        respawnTimer -= getDeltaTime();

        if (respawnTimer <= 0) {

            resetPanda();

            pandaImage.enabled = true;

            wasVisible = true;
        }

        return;
    }


    // --------------------------------
    // NORMAL FALLING
    // --------------------------------
    var pos = screenTransform.position;

    pos.y -= speed * getDeltaTime();

    screenTransform.position = pos;


    // --------------------------------
    // REACHED BOTTOM
    // --------------------------------
    if (pos.y < bottomY) {

        resetPanda();
    }

});