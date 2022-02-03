package Codewars_7_kyu;
public class Mumbling {
  public static void main(String[] args) {
    String s = "abcd";
    accum(s);
  }
  public static String accum(String s) {
    String res = "";
    for (int i = 0; i < s.length(); i++) {
      res += String.valueOf(s.charAt(i))
          .toUpperCase() + String.valueOf(s.charAt(i))
          .toLowerCase()
          .repeat(i) + "-";
    }
    return res.substring(0, res.length() - 1);
  }
}
