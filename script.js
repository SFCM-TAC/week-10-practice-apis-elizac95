var req = new XMLHttpRequest();
req.open('GET','https://opentdb.com/api.php?amount=12&category=12&difficulty=medium&type=boolean&encode=url3986', true);
req.send('search = trivia');
console.log('response: ', req.results);


// req.onload = function() {
// var response = req.response;
// var parsed = JSON.parse(response);
//
//   var students = parsed.students;
//   var studentDiv = document.getElementById('students');
//   console.log(studentDiv, students);
//
//   var divContent = '';
//   for (var i=0; i < students.length; i++) {
//     divContent += students[i] + "<br>";
//   }
//   studentDiv.innerHTML = divContent;
// }

req.onload = function() {
  var response = req.response;
  var parsedResponse = JSON.parse(response);

  console.log(parsedResponse);

  var triviaDiv = document.getElementById('trivia');
  triviaDiv.innerHTML = unescape(parsedResponse.results[0].question);

  for (var i = 1; i < parsedResponse.results.length; i++) {
    console.log('here');
    var triviaEl = document.createElement('div');
    var trivia = document.createTextNode(unescape(parsedResponse.results[i].question));
    triviaEl.appendChild(trivia);
    triviaEl.className = 'triviaAnswers';
    triviaDiv.appendChild(triviaEl);
  }
}
