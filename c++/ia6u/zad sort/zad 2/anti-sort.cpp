#include <iostream>
using namespace std;
long long seg[20],vhS[20];

int main(){

long long brSys,kolkoC,pCif,ipr,trc;


cin>>brSys>>kolkoC;

while(true){
bool shtepechatamsegashnoto=true;
    for(trc=0;trc<brSys;trc++){
        bool namerihLiQ=false;
        for(pCif=19-kolkoC;pCif<20;pCif++){
            if(seg[pCif]==trc){
                namerihLiQ=true;
            }
        }
        if(!namerihLiQ){
          shtepechatamsegashnoto=false;
        }
    }



if(shtepechatamsegashnoto){
    for(pCif=0;pCif<20;pCif++){
        cout<<s[pCif]<<" ";
    }
}

    cout<<"/n";
    seg[19]=seg[19]+1;
    ip=19;
    while(seg[ipr]>=brSys){
          seg[ipr]=0;
          seg[ipr-1]=seg[ip-1]+1;
    }
}

return 0;
}
