//@input SceneObject starEffect
//@input SceneObject scoreText

var pandaImage = script.getSceneObject().getComponent("Component.Image");
var pandaScreen = script.getSceneObject().getComponent("Component.ScreenTransform");

var starTimer = 0;
var starShowing = false;


// When panda is tapped
script.createEvent("TouchStartEvent").bind(function(eventData) {

    var touchPosition = eventData.getTouchPosition();

    // Only react when THIS panda is tapped
    if (!pandaScreen.containsScreenPoint(touchPosition)) {
        return;
    }


    // Put the star at THIS panda's position
    var starTransform =
        script.starEffect.getComponent("Component.ScreenTransform");

    starTransform.position = pandaScreen.position;


    // Show star
    script.starEffect.enabled = true;


    // Add 1 point
    if (script.scoreText) {

        var scoreScript =
            script.scoreText.getComponent("Component.ScriptComponent");

        if (scoreScript) {
            scoreScript.addScore(1);
        }
    }


    // Hide ONLY this panda
    pandaImage.enabled = false;


    // Start star timer
    starTimer = 2.0;
    starShowing = true;

});


// Star timer
script.createEvent("UpdateEvent").bind(function() {

    if (starShowing) {

        starTimer -= getDeltaTime();

        if (starTimer <= 0) {

            script.starEffect.enabled = false;
            starShowing = false;
        }
    }

});