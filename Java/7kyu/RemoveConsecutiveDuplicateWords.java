//package Codewars_7_kyu;
//
//public class RemoveConsecutiveDuplicateWords {
//
//  public static void main(String[] args) {
//
//    String s = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";
//
//    removeConsecutiveDuplicateWords(s);
//  }
//
//
//  public static String removeConsecutiveDuplicateWords(String s) {
//
//
//  }
//    String[] newStr = s.split(" ");
//    StringBuilder result = new StringBuilder(" ");
//
//    for (int i = 0; i < newStr.length - 1; i++) {
//      if (!newStr[i].equals(newStr[i + 1])) {
//        result.append(" ").append(newStr[i]);
//      }
//    }
//    return result.toString();
//  }
//}
