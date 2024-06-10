(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Step 10: (Already done for you)
  // Loop over the names array and say either 'Hello' or "Goodbye"
  // using the 'speak' method or either helloSpeaker's or byeSpeaker's
  // 'speak' method.
  for (var i = 0; i < names.length; i++) {

    // Step 11: (Already done for you)
    // Retrieve the first letter of the current name in the loop.
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Step 12: (Already done for you)
    // Compare the 'firstLetter' retrieved in STEP 11 to lower case
    // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
    // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current name
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
