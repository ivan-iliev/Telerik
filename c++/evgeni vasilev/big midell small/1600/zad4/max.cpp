#include <iostream>
using namespace std;

int main () {
  long long a,a1,a2,a3,big;
  cin >> a;
  a3 = a % 10;
  a1 = a / 100;
  a2 = a/10%10;

  big = a1 + a2 + a3;
  if (a1+a2*a3 > big) {big = a1+a2*a3;}
  if (a1*a2+a3 > big) {big = a1*a2+a3;}
  if (a1*a2*a3 > big) {big = a1*a2*a3;}

  cout << big << endl;

  return 0;
}
