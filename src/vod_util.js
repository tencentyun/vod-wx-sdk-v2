const vodUtil = {
  getType: function getType(a) {
    if (a === null) {
      return "null";
    }
    if (a === undefined) {
      return "undefined";
    }
    return Object.prototype.toString
      .call(a)
      .slice(8, -1)
      .toLowerCase();
  },
  isFunction: function isFunction(para) {
    if (para && this.getType(para) !== "function") {
      return false;
    }
    return true;
  },
  getFileMessage: function getFileMessage(file, fileName) {
    const fileMsg = {};
    fileMsg.tempFilePath = file.tempFilePath;
    fileMsg.type = file.tempFilePath.substring(
      file.tempFilePath.lastIndexOf(".") + 1
    );
    if (typeof fileName === "string") {
      fileMsg.name = fileName;
    } else {
      fileMsg.name = "来自小程序";
    }
    fileMsg.size = file.size;
    return fileMsg;
  },
  noop: () => {}
};

module.exports = vodUtil;
