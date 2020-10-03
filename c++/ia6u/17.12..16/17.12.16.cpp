#include <iostream>
using namespace std;

int main(){
char pole[12][12];
long long  x,y,tyrseno;
for(y=0;y<10;y=y++){
    for(x=0;x<10;x++){

    }
}

for(tyrseno=0;tyrseno<100;tyrseno++){
    for(x=0;x<10;x++){
        for(y=0;y<10;y=y++){
                if(x+1<10  and pole[x][y]=='0'+tyrseno){
                    pole[x+1][y]='1';
            }
        }
    }
}
cout<<pole[0];
cout<<pole[1];
cout<<pole[3];
cout<<pole[4];
cout<<pole[5];
cout<<pole[6];
cout<<pole[7];
cout<<pole[8];
cout<<pole[9];

return 0;
}
