#include <iostream>
using namespace std;

int main ()
{
long long a1,a2,a3,buf;
cin>>a1>>a2>>a3;


if(a2<a1){
buf=a1;
a1=a2;
a2=buf;
}

if(a3<a1){
buf=a1;
a1=a3;
a3=buf;
}

if(a3<a2){
buf=a2;
a2=a3;
a3=buf;
}

cout<<a1<<" "<<a2<<" "<<a3<<endl;

return 0;
}
