// const config = require("config");

class Tab {
  url = "";

  constructor(url) {
    this.url = url;
  }

  isLeetcodeTab() {
    return this.url.includes("leetcode");
  }

}

pageTab = new Tab();
