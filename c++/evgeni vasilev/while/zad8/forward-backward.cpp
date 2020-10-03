#include <iostream>
using namespace std;

int main () {

  long long n, where=0, steps, direction=1;

  cin >> n;
  while (n>0) {
    cin >> steps;
    where = where + steps*direction;
    direction=-direction;
    n=n-1;
  }

  if (where <0) {where=-where;}
  cout << where << endl;
  return 0;
}
