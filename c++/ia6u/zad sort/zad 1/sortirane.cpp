#include <iostream>
using namespace std;

long long A[9999999];

int main(){
long long i=0,b=0;
cin>>A[i];
if(A[i]>A[9999999]){
A[i]++;
    cout<<"prekaleno mnogo 4isla";
}
for(b=0;b<9999999;b++){
    if(A[i]>100000){
       cout<<"prekaleno goliama suma";
    }
}

cout<<A[i];




return 0;
}
