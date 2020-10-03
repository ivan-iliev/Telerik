#include <iostream>
#include<cstring>
using namespace std;

int main () {
  char A[81], B[100];

  strcpy(B,"******************");
  cin.getline(A,80,'^');


  cout << A << ' '<< B << endl;

  return 0;
}
