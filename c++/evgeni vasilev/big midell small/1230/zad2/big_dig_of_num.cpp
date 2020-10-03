/**
Да се напише програма, която чете трицифрено
число и отпечатва най-голямата му цифра
*/
#include <iostream>
using namespace std;

int main () {
  long long a,right,midle,left;
  cin >> a;
  right = a % 10;
  midle = a/10 %10;
  left = a/100;
  /**
  if (left>=midle and left>=right) {
    cout << left;
    }
  else {
    if (midle >= right) {
      cout << midle << endl;
      }
    else {
      cout << right << endl;
    }
  }
  */

  long long big=left;
  if (midle > big) {big=midle;}
  if (right > big) {big=right;}

  cout << big << endl;




  return 0;
}
