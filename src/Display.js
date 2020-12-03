class Display {
  identifier = {
    'EXT_USER_OUT_DIV': "#go-to-problem-box"
  };

  toUser(message) {
    document.querySelector(this.identifier.EXT_USER_OUT_DIV).innerHTML = message;
  }
}

const display = new Display();
