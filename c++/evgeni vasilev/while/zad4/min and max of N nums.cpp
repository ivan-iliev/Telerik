#include <iostream>
using namespace std;

int main () {
  long long n,maxnum=-1000000000000000000L,minnum=1000000000000000000L,a;

  cin >> n;
  while (n>0) {
   cin >> a;
   if (a>maxnum) {maxnum=a;}
   if (a<minnum) {minnum=a;}
   n=n-1;
  }

  cout << minnum << " " << maxnum << endl;

  return 0;
}
/*
8
6 3 9 12 4 5 3 6

*/
