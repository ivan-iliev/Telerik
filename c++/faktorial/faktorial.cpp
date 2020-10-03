#include<iostream>
using namespace std;

int main(){
long long sistema,fakt=1,brnuli=0,chis,b,p;

cin>>chis>>sistema;
for(b=2;b<=chis;b++){
    fakt=fakt*b;
}
cout<<fakt<<endl;


while(fakt>0){
    if(fakt%sistema==0){
        brnuli++;
    }else{
        fakt=0;
    }
    fakt=fakt/sistema;
}
cout<<brnuli<<endl;
return 0;
}
