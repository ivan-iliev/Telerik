#include <iostream>
using namespace std;

int main () {
  char c;
  long long n, i, j;

  cin >> c >> n;
  /// Рисува начален ред
  i=0;
  while (i<n) {
    cout<<c;
    i=i+1;
  }
  cout<<endl;

  /// рисува средните редове
  j=0;
  while (j<n-2) {
    cout<<c;
    i=0;
    while (i<n-2) {
      cout << ' ';
      i=i+1;
    }
    cout<<c<<endl;
    j=j+1;
  }

  /// рисува краен ред
  i=0;
  while (i<n) {
    cout<<c;
    i=i+1;
  }
  cout<<endl;

  return 0;
}
