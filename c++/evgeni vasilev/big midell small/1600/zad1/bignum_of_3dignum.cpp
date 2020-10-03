/**
  Да се прочете едно трицифрено число
  и да се отпечата най-голямото трицифрено,
  което може да се изпише с цифрите на
  прочетеното, намалено с 15.

  264

  642
   15

*/
#include <iostream>
using namespace std;

int main () {
  long long a,a1,a2,a3,buf;
  cin >> a;
  a1=a/100;
  a2=a/10%10;
  a3=a%10;
  if (a2>a1){
    buf=a1;
    a1=a2;
    a2=buf;
  }
  if (a3>a1){
    buf=a1;
    a1=a3;
    a3=buf;
  }
  if (a3>a2){
    buf=a2;
    a2=a3;
    a3=buf;
  }
  buf = a1*100+a2*10+a3;
  cout<<buf-15<<endl;
  return 0;
}

