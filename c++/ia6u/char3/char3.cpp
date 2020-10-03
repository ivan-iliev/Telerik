#include <iostream>
#include <cstring>
using namespace std;

int main(){
long long i;
char simvol[201];
cin>>simvol;

///i=strlen(simvol);
for(i=0;i<201;i=i+1){
    cout<<simvol[i]<<endl;
    if(simvol[i]=='\0'){
        cout<<"zataapva6tia simvol e na "<<i<<endl;
    }
}






return 0;
}
