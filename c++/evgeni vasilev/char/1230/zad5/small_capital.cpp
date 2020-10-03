#include <iostream>
using namespace std;

int main () {
  char c = 'A', cc='r';
  cout << "Initial value in c:"<<c<<endl;
  c = c + ('a'-'A');
  cout <<"Value in c after transformation:"<< c << endl;

  cc = cc - ('a'-'A');
  cout <<"Value in cc after transformation:"<< cc << endl;

  return 0;
}
