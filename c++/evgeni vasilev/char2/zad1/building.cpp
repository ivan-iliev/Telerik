#include <iostream>
using namespace std;

int main () {
  long long n,vi,zv=1,i,j;
  char c;
  cin >> n >> c;

  /// roof
  vi = (n+2)/2;
  while (zv<=n+2) {
    /// print lead spaces
    i=0;
    while (i<vi) {
      cout<<' ';
      i++;
    }
    /// print stars
    i=0;
    while (i<zv) {
      cout<<c;
      i++;
    }
    cout<<endl;

    vi--;
    zv+=2;        /// zv=zv+2;
  }

  /// body
  j=0;
  while (j<n) {
    cout<<' ';
    /// print stars
    i=0;
    while (i<n) {
      cout<<c;
      i++;
    }
    cout<<endl;

    j++;
  }



  return 0;
}
