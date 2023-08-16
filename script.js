(function () {

  // Define the helloSpeaker object
  var helloSpeaker = {};
  helloSpeaker.speakWord = "Hello";
  
  helloSpeaker.speak = function (name) {
    console.log(helloSpeaker.speakWord + " " + name);
  };
  
  // Define the byeSpeaker object
  var byeSpeaker = {};
  byeSpeaker.speakWord = "Good Bye";
  
  byeSpeaker.speak = function (name) {
    console.log(byeSpeaker.speakWord + " " + name);
  };
  
  var names = ["Sean", "Caden", "Jho Ann", "Kim", "Kyong", "Kent", "Justin", "Kylie", "John", "Jackie"];
  
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
  
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
  
  })();
  
