#include <iostream>
#include <ctype.h>
#include <stdio.h>
using namespace std;

int main () {
  char c;
  cout << "Enter a char: ";
  cin >> c;

  if (c>='A' and c<='Z') {
   /// c=c+('a'-'A');
    c=c+32;
   /// putchar(toupper(c));
    cout << "Coresponding small char is: "<<c<<endl;
  }
  else {
    if (c>='a' and c<='z') {
      ///c=c-('a'-'A');
      c=c-32;
     /// c=tolower(c);
      cout << "Coresponding capital char is: "<<c<<endl;
    }
    else {cout << "Not a lathin char\n";}
  }
  return 0;
}


