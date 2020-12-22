onEvent("playbutton", "click", function( ) {
  setScreen("mainscreen");
  setScreen("playscreen");
  var point = 0;
  onEvent("cube", "click", function( ) {
    setPosition("cube", randomNumber(40, 270), randomNumber(80, 420), 50, 50);
    point = point + 1;
    setNumber("labelpoints", point);
  });
  timedLoop(1000, function() {
    point = point - 1;
    setNumber("labelpoints", point);
  });
});
checkbox("id", false);
onEvent("studybutton", "click", function( ) {
  setScreen("studyscreen");
  var seconds = 0;
  onEvent("start", "click", function( ) {
    timedLoop(1000, function() {
      setProperty("seconds", "text-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.7));
      seconds = seconds + 1;
      setNumber("seconds", seconds);
    });
  });
  onEvent("stop", "click", function( ) {
    stopTimedLoop();
  });
  onEvent("reset", "click", function( ) {
    seconds = 0;
    setNumber("seconds", seconds);
  });
});
