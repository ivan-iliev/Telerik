#include <iostream>
using namespace std;

int main () {
  char a;
  cout << "Enter a small char: ";
  cin >> a;

  a = a - ('b'-'B');

  cout << a;
  return 0;
}
