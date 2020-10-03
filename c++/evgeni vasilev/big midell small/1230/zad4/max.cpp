#include <iostream>
using namespace std;

int main () {
  long long a,a1,a2,a3, big;
  cin >> a;
  a1=a/100;    /// left digit
  a2=a/10%10;  /// middle digit
  a3=a%10;     /// right digit

  big = a1+a2+a3;
  if (big < a1+a2*a3) {big = a1+a2*a3;}
  if (big < a1*a2+a3) {big = a1*a2+a3;}
  if (big < a1*a2*a3) {big = a1*a2*a3;}
  cout << big << endl;
  return 0;
}
