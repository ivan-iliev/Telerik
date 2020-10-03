#include <iostream>
using namespace std;

int main () {
  long long n,i,visible, last_visible_hight;
  cin >> n;
  long long A[n];
  i=0;
  while (i<n) {
    cin>>A[i];
    i=i+1;
  }

  ///for (int i=0;i<n;cout<<A[i++]);cout << endl;
  visible = 1;
  last_visible_hight=n-1;
  i=n-2;
  while (i>=0) {
    if (A[i]>A[last_visible_hight]){
      ///cout << i << endl;
      visible=visible+1;
      last_visible_hight=i;
    }
    i=i-1;
  }
  cout << visible << endl;

  return 0;
}
/*
8
7 6 5 4 3 10 9 8

*/
