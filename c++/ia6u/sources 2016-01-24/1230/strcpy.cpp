#include <iostream>
#include <cstring>
using namespace std;

int main () {
  char A[20], B[20];
  long long  a, b, i;

  cin >> A;

  i=0;
  while (A[i]!='\0') {
    B[i] = A[i];
    i++;
  }
  B[i]='\0';



  cout << A << ' ' << B << '\n';

  return 0;
}
