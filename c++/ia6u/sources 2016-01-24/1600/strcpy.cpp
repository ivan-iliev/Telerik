#include <iostream>
#include <cstring>
using namespace std;

int main () {
  char A[40], B[20];
  long long  a=14, b, i;

  cin >> A >> B;

  strcat(A,"-");
  strcat(A,B);



  cout << A << '\n';

  return 0;
}
