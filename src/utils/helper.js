export class Helper {
  static formatDollar(num) {
    var p = num.toFixed(0).split(".");
    return p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "");
  }
  static checkNumber(string) {
    var reg = /^\d+$/;
    return reg.test(string);
  }
  static parseStringToDate(string) {
    return new Date(
      string.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
    );
  }
}
