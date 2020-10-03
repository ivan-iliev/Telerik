#include <iostream>
using namespace std;

int main(){
long long n,m,c;
cin>>n;

m=n%10;
c=(n/10)%10;
if(c>m){
    m=c;
}
c=(n/10)%10;
if(c>m){
    m=c;
}
cout<<m<<endl;



return 0;
}
