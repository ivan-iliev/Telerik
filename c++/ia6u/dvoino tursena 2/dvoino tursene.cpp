#include <iostream>
using namespace std;

int main(){
long long  celX,celY,rez[100][100],x,y;

cin>>celX>>celY;

for(x=0;x<celX;x++){
    rez[x][0];
}

for(y=0;y<celX;y++){
    rez[0][y];
}

for(x=1;x<=celX;x++){
    for(y=1;y<=celY;y++){
        rez[x][y]=rez[x-1][y]+rez[x][y-1];

    }

}
return 0;
}
