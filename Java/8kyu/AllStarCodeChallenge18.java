package CodeWars_8_kyu;

public class AllStarCodeChallenge18 {
  public static void main(String[] args) {
    String str = "Hello";
    char letter = 'l';

    str = str.toLowerCase();
    int charCount = 0;

    for (int i = 0; i < str.length(); i++) {
      if (str.charAt(i) == letter) {
        charCount++;
      }
    }
    System.out.println(charCount);
  }


}
