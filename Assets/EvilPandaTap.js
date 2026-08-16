//@input SceneObject gameOverEffect
//@input Component.ScriptComponent pandaFall1
//@input Component.ScriptComponent pandaFall2
//@input Component.ScriptComponent pandaFall3
//@input Component.ScriptComponent evilFall2

var pandaImage = script.getSceneObject().getComponent("Component.Image");
var pandaScreen = script.getSceneObject().getComponent("Component.ScreenTransform");

script.createEvent("TouchStartEvent").bind(function(eventData) {

    var touchPosition = eventData.getTouchPosition();

    // Only react if THIS evil panda was tapped
    if (!pandaScreen.containsScreenPoint(touchPosition)) {
        return;
    }

    // STOP ALL FALLING
    script.pandaFall1.enabled = false;
    script.pandaFall2.enabled = false;
    script.pandaFall3.enabled = false;
    script.evilFall2.enabled = false;

    // Hide ONLY the evil panda that was tapped
    pandaImage.enabled = false;

    // Show Game Over
    script.gameOverEffect.enabled = true;
});