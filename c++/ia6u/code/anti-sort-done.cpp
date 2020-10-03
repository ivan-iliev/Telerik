#include<iostream>
using namespace std;
long long segashno[20],vhodZaSortirane[20];
int main(){
long long brSys, kolkoCif,pechatanaCifra,indexPrevurtqla,tyrsenaCifra;
cin>>brSys>>kolkoCif;
while(true){
    bool shtePechatamSegashnoto=true;
    for(tyrsenaCifra=0;tyrsenaCifra<brSys;tyrsenaCifra=1+tyrsenaCifra){
        bool namerihLiQ=false;
        for(pechatanaCifra=19-kolkoCif;pechatanaCifra<20;pechatanaCifra=1+pechatanaCifra){
            if(segashno[pechatanaCifra]==tyrsenaCifra){
                namerihLiQ=true;
            }
        }
        if(!namerihLiQ){
            shtePechatamSegashnoto=false;
        }
    }
    if(shtePechatamSegashnoto){
        for(pechatanaCifra=0;pechatanaCifra<20;pechatanaCifra=pechatanaCifra+1){
            cout<<segashno[pechatanaCifra]<<" ";
        }
        cout<<"\n";
    }
    segashno[19]=segashno[19]+1;
    indexPrevurtqla=19;
    while(segashno[indexPrevurtqla]>=brSys){
        segashno[indexPrevurtqla]=0;
        segashno[indexPrevurtqla-1]=segashno[indexPrevurtqla-1]+1;
        indexPrevurtqla=indexPrevurtqla-1;
    }
}

return 0;
}
