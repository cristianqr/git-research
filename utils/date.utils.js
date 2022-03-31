export class DateUtils {
  static getCurrentDate() {
    return new Date();
  }

  static getCurrentYear() {
    return new Date().getFullYear();
  }
  
  static getCurrentMonth() {
    return new Date().getMonth();
  }
}