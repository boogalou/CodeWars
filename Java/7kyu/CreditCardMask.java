package Codewars_7_kyu;

public class CreditCardMask {
  public static void main(String[] args) {

    maskify("4556364607935616");
  }

  public static String maskify(String str) {
    if (str.length() <= 1) return str;
    String head = str.substring(0, str.length() - 4);
    String tail = str.substring(str.length() - 4);

    StringBuilder hash = new StringBuilder();
    hash.append("#".repeat(head.length()));
    return hash + tail;
  }
}
