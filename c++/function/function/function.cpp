
#include <iostream>
using namespace std;
/*
void razbiiQica(){
long long izvikvania;
cout<<"\n"<<izvikvania;
izvikvania = izvikvania + 100;
}
*/

long long resultat;
void smetniFaktorial(long long otkolko){
    if(otkolko<=1){
        resultat=1;

    }else{
    smetniFaktorial(otkolko-1);
    resultat=otkolko*resultat;
    }
return
}



int main(){
long long vhod;
cin>>vhod;
smetniFaktorial(vhod);


return 0;
}

