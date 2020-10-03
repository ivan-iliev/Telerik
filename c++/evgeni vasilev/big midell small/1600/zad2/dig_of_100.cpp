/**
  Да се напише програма, която прочита
  едно четирицифрено число и отпечатва
  цифрата на стотиците в него
  Пример:
  Вход:
  1504
  Изход:
  5
*/

#include <iostream>
using namespace std;

int main () {
  long long a;
  cin >> a;
  //  a=a/10;
  //  a=a/10;
  //a = a/100;
  cout << a/100%10 << endl;

  return 0;
}
