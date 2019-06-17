const vodUtil = {
  getType: function(a) {
    return null === a
      ? "null"
      : void 0 === a
      ? "undefined"
      : Object.prototype.toString
          .call(a)
          .slice(8, -1)
          .toLowerCase();
  },
  isFunction: function(para) {
    if (para && this.getType(para) != "function") {
      return false;
    } else {
      return true;
    }
  },
  getFileMessage: function(file, fileName) {
    var fileMsg = {};
    fileMsg.tempFilePath = file.tempFilePath;
    fileMsg.type = file.tempFilePath.substring(
      file.tempFilePath.lastIndexOf(".") + 1
    );
    if (typeof fileName == "string") {
      fileMsg.name = fileName;
    } else {
      fileMsg.name = "来自小程序";
    }
    fileMsg.size = file.size;
    return fileMsg;
  }
};

module.exports = vodUtil;
