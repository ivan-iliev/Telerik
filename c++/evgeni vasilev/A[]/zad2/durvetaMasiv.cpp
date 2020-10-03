#include <iostream>
using namespace std;

int main(){
long long L,n,H[1000],i,d,pos_max,pos_min;

cin>>L>>n;
i=0;

while(i<n){
cin>>H[i];
i++
}
i=0;
while(i<n){
cin>>d;
H[i]=H[i]+d
i++
}

pos_min=0;
pos_max=0;
i=1;

while(i<n){
if(H[i]>H[pos_max]){pos_max=i;}
if(H[i]<H[pos_min]){pos_min=i;}
i++;
}
if(pos_max>pos_min){d=pos_max-pos_min;}
else{d=pos_min-pos_max;}
cout<<d*(L/(n-1))<<endl;






return 0;
}
