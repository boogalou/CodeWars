package Codewars_7_kyu;

public class SquareEveryDigit {
  public static void main(String[] args) {

    int n = 9119;
    squareDigits(n);
  }

  public static int squareDigits(int n) {
    String sum = "";
    String str = Integer.toString(n);
    for (int i = 0; i < str.length(); i++) {
      int num = Integer.parseInt(String.valueOf(str.charAt(i)));
       sum += (int) Math.pow(num, 2);
    }
    return Integer.parseInt(sum);
  }
}
