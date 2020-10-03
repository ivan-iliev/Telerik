#include <iostream>
using namespace std;
bool minatLiEVruhVSegPyt [20];
long long iS,is,broiSusediNa[50][50],koiSaSusediteNa[50][50];
long long  broiSegaMinatiVurhove = 0,broiVarhove;

void stignahDo(long long posledenStignat){
    if(minatLiEVruhVSegPyt[posledenStignat]){
        return;
    }
    minatLiEVruhVSegPyt[posledenStignat] = true;
    broiSegaMinatiVurhove = broiSegaMinatiVurhove+1;
    if(broiSegaMinatiVurhove==20){
        cout<<"nsmerich pyt v "<< posledenStignat;
    }
    for(iS=0;iS<broiSusediNa[posledenStignat];iS=iS+1){
        stignahDo(koiSaSusediteNa[posledenStignat][iS]);
    }

    broiSegaMinatiVurhove=broiSegaMinatiVurhove-1;
    minatLiEVruhVSegPyt[posledenStignat] = false;
    return;
}


int main(){
long long iv,iS;
cin>>broiVarhovel;
for(;;){
    for(;;){


    }

}






return 0;
}
