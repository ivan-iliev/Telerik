#include <iostream>
using namespace std;

int main () {
  long long sec, na_um;

  sec=10;
  while (sec>0) {

    if (sec>1) {
      cout << "Ostavat " << sec << " sekundi" << endl;
      }
    else {
      cout << "Ostava 1 sekunda"<<endl;
    }
    na_um=0;
    while (na_um<400000000){
      na_um=na_um+1;
    }

    sec = sec-1;
  }
  cout << "Start!"<<endl;
  return 0;
}
