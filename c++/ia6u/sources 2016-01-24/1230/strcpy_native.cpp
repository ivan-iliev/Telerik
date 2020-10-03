#include <iostream>
#include <cstring>
using namespace std;

int main () {
  char A[20], B[200];
  long long  a, b, i;

  cin >> A >> B;

  strcat(B,A);

  cout << B << ' '<<A<<'\n';

  return 0;
}
