var score = 0;

var textComponent =
    script.getSceneObject().getComponent("Component.Text");

script.addScore = function(points) {

    score += points;

    textComponent.text = "SCORE: " + score;
};

textComponent.text = "SCORE: 0";