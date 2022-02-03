package CodeWars_8_kyu;


public class CalculateAverage {
  public static void main(String[] args) {

    double[] array = {1, 2, 3};
    double result = 0;

    for (int i = 0; i < array.length; i++) {
      result += array[i];
    }
    System.out.println(result / array.length);
  }
}
