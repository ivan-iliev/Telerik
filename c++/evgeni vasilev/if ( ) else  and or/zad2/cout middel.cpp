#include <iostream>
using namespace std;

int main ()
{
 long long a;
 long long b;
 long long c;


 cin >> a;
 cin >> b;
 cin >> c;

    if(a>b and a>c){
      cout<<a<<endl;
    }else{
      if(b>a){
        cout<<b<<endl;;
      }else{
       if(c>b){
         cout<<c<<endl;
       }else{
       cout<<b<<endl;
       }
      }
     }

    return 0;
  }
