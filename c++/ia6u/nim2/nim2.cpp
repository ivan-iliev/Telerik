#include<iostream>
using namespace std;
long long maxStypkiDo0(long long otkyde){

    if(otkyde<=0){
        return 0;
    }

    long long kopieOtkyde=otkyde,namMax=0,ostavashtiStypkiOtSledashtHod;
    while(otkyde>0){
        if(otkyde%10>0){
            ostavashtiStypkiOtSledashtHod=maxStypkiDo0(kopieOtkyde-otkyde%10);
            if(namMax<1+ostavashtiStypkiOtSledashtHod){
                namMax=1+ostavashtiStypkiOtSledashtHod;
            }
        }
        otkyde=otkyde/10;
    }
    return namMax;
}
int main(){
cout<<maxStypkiDo0(1)<<endl;
return 0;
}


