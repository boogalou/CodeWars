package CodeWars_8_kyu;


public class WhatIsBetween {
  public static void main(String[] args) {

    int a = -2;
    int b = 2;
    between(a, b);
  }


  public static int[] between(int a, int b) {
    int[] arr = new int[b - a + 1];

    for (int i = 0; i < arr.length; i++) {
      arr[i] = a + i;
    }
    return arr;
    }
  }
