#include <iostream>
using namespace std;

int main(){
long long n,pos,odd;
pos=odd=0;
while(n!=0){
cin>> n  ;
    if(n>0){
      pos=pos+1;
      if(n%2>0){
        odd=odd+1;
      }
   }
cin>>n;

}

cout<<  pos  << "  "  <<  odd  <<  endl  ;
return 0;
}
