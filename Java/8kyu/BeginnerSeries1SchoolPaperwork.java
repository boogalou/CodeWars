package CodeWars_8_kyu;

public class BeginnerSeries1SchoolPaperwork {
  public static void main(String[] args) {


    int n = 0;
    int m = 3;

    paperWork(n, m);
  }

  public static int paperWork(int n, int m) {
    return n > 0 && m > 0 ? n * m : 0;
  }
}
