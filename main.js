function detectProblemTitle(results) {
  if (results.length > 0 && results[0] != null) {
    problemTitle = results[0];
    problem.setTitle(results[0]);
    document.querySelector("#id1").innerHTML = problemTitle;
    changeProblemDetailsButtonURL(problem.generateDetailsURL());
  }
  else {
    display.toUser("you are not in an explore card page")
  }
}

function changeProblemDetailsButtonURL(newURL) {
  if (newURL !== undefined) {
    document.querySelector("#go-to-problem").href = newURL;
  }
}


chrome.tabs.query({active: true}, function (tabs) {
  var tab = tabs[1];
  pageTab = new Tab(tab.url);
  if (pageTab.isLeetcodeTab()) {
    chrome.tabs.executeScript(tab.id, {
      code: 'document.querySelector(".question-title").innerText'
    }, detectProblemTitle);
  } else {
    display.toUser("not leetcode tab")
  }
});
