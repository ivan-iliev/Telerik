#include <iostream>
using namespace std;

int main () {
  long long n,i,visible, pos_of_last_visible;
  cin >> n;
  long long A[n];

  i=0;
  while (i<n) {
    cin >> A[i];
    i=i+1;
  }

  i=n-2;
  visible=1;
  pos_of_last_visible = n-1;
  while (i>=0) {
    if (A[i]>A[pos_of_last_visible]){
      visible=visible+1;
      pos_of_last_visible=i;
    }
    i=i-1;
  }
  cout << visible << endl;
  return 0;
}
