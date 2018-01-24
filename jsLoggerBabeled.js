function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function Logger() {
  var _this = this;

  _classCallCheck(this, Logger);

  this.log = function (message) {
    _this.messageHistory.push(message);
    _this.logger.innerHTML = message;
  };

  this.toggleShowAll = function () {
    if (_this.showAllDialog == "") {
      _this.showAll();
    } else {
      _this.hideAll();
    }
  };

  this.hideAll = function () {
    _this.showAllDialog.remove();
    _this.showAllDialog = "";
  };

  this.showAll = function () {
    var showAllDialog = document.createElement("div");
    showAllDialog.style.cssText = 'padding:10px;position:absolute;width:30vw;height:40vh;z-index:100; opacity:1;background:#000; color: #fff; top:50%; left:50%; transform: translate(-50%, -50%); overflow: scroll;';
    _this.showAllDialog = showAllDialog;
    _this.messageHistory.forEach(function (message) {
      _this.showAllDialog.innerHTML += message + "<br />";
    });
    document.body.appendChild(_this.showAllDialog);
  };

  var logger = document.createElement('div');
  var loggerBg = document.createElement('div');
  this.showAllDialog = "";
  this.messageHistory = [];
  loggerBg.style.cssText = 'padding:10px;position:absolute;width:100%;height:20px;z-index:99; opacity:0.5;background:#000; color: #fff; bottom:0; left:0;';
  logger.style.cssText = 'padding:10px;position:absolute;width:100%;height:20px;z-index:100; color: #fff; bottom:0; left:0;';
  this.logger = logger;
  this.loggerBg = loggerBg;
  this.logger.addEventListener("click", function () {
    _this.toggleShowAll();
  });
  document.body.appendChild(this.loggerBg);
  loggerBg.parentNode.insertBefore(logger, loggerBg.nextSibling);
};
