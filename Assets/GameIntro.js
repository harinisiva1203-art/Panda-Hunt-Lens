//@input float duration = 3.0

var timer = script.duration;

var introObject = script.getSceneObject();

script.createEvent("UpdateEvent").bind(function() {

    timer -= getDeltaTime();

    if (timer <= 0) {

        introObject.enabled = false;

    }

});