#include <iostream>
using namespace std;

int main(){

long long p1,p2,p3,k1,k2,k3,buf,money,kolko;
cin>>p1 >>p2 >>p3 >>k1 >>k2 >>k3>>money;

if(p2<p1){
buf=p1;
p1=p2;
p2=buf;
buf=k1;
k1=k3;
k3=buf;
}

if(p3<p1){
buf=p1;
p1=p3;
p3=buf;
buf=k1;
k1=k3;
k3=buf;
}

if(p3<p2){
buf=p2;
p2=p3;
p3=buf;
buf=k2;
k2=k3;
k3=buf;
}

buf=0;

if(p1==0){
buf=k1;
}else{
kolko=money/p1;
if(k1<kolko){
 buf=buf+kolko;
money=money*p1;


}
}

if(p2==0){
buf=k2;
}else{
kolko=money/p2;
if(k2<kolko){
 buf=buf+kolko;
money=money*p2;


}
}


if(p3==0){
buf=k3;
}else{
kolko=money/p3;
if(k3<kolko){
 buf=buf+kolko;
money=money*p3;


}
}



return 0;
}


///return 0;

