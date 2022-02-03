package CodeWars_8_kyu;

public class WithoutTheLetterE {
  public static void main(String[] args) {


    String str = "helleee";

    System.out.println(findE(str));

  }

  public static String findE(String str) {
    if (str == null) {
      return null;
    } else if (str.equals("")) {
      return "";
    } else {
      str = str.toLowerCase();
      char strChar = 'e';
      String charCount = "";
      for (int i = 0; i < str.length(); i++) {
        if (str.charAt(i) == strChar) {
          charCount += "e";
        }

      }
      return charCount.length() > 0 ? "" + charCount : "There is no \"e\".";
    }

  }

}

