#include<iostream>
#include<cstring>
using namespace std;

int main(){

char zakodirachti[10]={'n','p','r','c','v','m','x','z','b','s'};
char vhod[101];
long long e;
cin>>vhod;
cin.getline(  vhod,'.');
e=strlen(vhod);
cout<<vhod[2]<<endl;
cout<<e<<endl;

return 0;
}
