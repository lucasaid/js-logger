class Logger {
  constructor() {
    let logger = document.createElement('div');
    let loggerBg = document.createElement('div');
    this.showAllDialog = ""
    this.messageHistory = []
    loggerBg.style.cssText = 'box-sizing: border-box;padding:10px;position:absolute;width:100%;height:20px;z-index:99; opacity:0.5;background:#000; color: #fff; bottom:0; left:0;';
    logger.style.cssText = 'box-sizing: border-box;padding:10px;position:absolute;width:100%;height:20px;z-index:100; color: #fff; bottom:0; left:0;';
    this.logger = logger
    this.loggerBg = loggerBg
    this.logger.addEventListener("click", () => {
      this.toggleShowAll()
    })
    document.body.appendChild(this.loggerBg);
    loggerBg.parentNode.insertBefore(logger, loggerBg.nextSibling);
  }
  log = (message) => {
    this.messageHistory.push(message);
    this.logger.innerHTML = message
  }
  toggleShowAll = () => {
    if(this.showAllDialog == ""){
      this.showAll()
    } else {
      this.hideAll()
    }
  }
  hideAll = () => {
    this.showAllDialog.remove()
    this.showAllDialog = ""
  }
  showAll = () => {
    let showAllDialog = document.createElement("div");
    showAllDialog.style.cssText = 'box-sizing: border-box;padding:10px;position:absolute;width:30vw;height:40vh;z-index:100; opacity:1;background:#000; color: #fff; top:50%; left:50%; transform: translate(-50%, -50%); overflow: scroll;';
    this.showAllDialog = showAllDialog
    this.messageHistory.forEach((message) => {
      this.showAllDialog.innerHTML += message + "<br />"
    });
    document.body.appendChild(this.showAllDialog);
  }
}
