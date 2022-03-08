package Codewars_7_kyu;

public class TheClockwiseSpiral {
  public static void main(String[] args) {

    theClockwiseSpiral(3, 3);
  }

  public static int[][] theClockwiseSpiral(int w, int h) {
    int[][] array = new int[w][h];
    int count = 1;
    int startCol = 0;
    int finishCol = w - 1;
    int startRow = 0;
    int finishRow = h - 1;

    while (startCol <= finishCol && startRow <= finishRow) {
      for (int i = startCol; i <= finishCol; i++) {
        array[startRow][i] = count;
        count++;
      }

      startRow++;
      for (int k = startRow; k <= finishRow; k++) {
        array[k][finishCol] = count;
        count++;
      }

      finishCol--;
      for (int j = finishCol; j >= startCol; j--) {
        array[finishRow][j] = count;
        count++;
      }

      finishRow--;
      for (int a = finishRow; a >= startRow; a--) {
        array[a][startCol] = count;
        count++;
      }

      startCol++;
    }
    return array;
  }
}
