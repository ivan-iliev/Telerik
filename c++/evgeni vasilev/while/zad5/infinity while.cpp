#include <iostream>
using namespace std;

int main () {

  long long startnum, endnum,
            count_nums_between,buf;

  cin >> startnum >> endnum;
  if (startnum>endnum) {
    buf=startnum;
    startnum=endnum;
    endnum=buf;
  }

  count_nums_between = 0;
  while (startnum+1+count_nums_between<endnum) {
    count_nums_between=count_nums_between+1;
  }

  cout<<count_nums_between<<endl;

  return 0;
}
