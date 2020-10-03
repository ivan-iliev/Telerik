#include <iostream>
using namespace std;

int main () {
  long long n,maxnum,minnum,a;

  cin >> n;

  cin >> a;
  maxnum=a;
  minnum=a;
  n=n-1;

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
