/**
#include<iostream>
using namespace std;
char pole[12][12];
void dostignahDo(long long x,long long y){
    if(pole[x][y] != '.'){
        return;
    }
pole[x][y]='1';
dostignahDo(x,y-1);
dostignahDo(x,y+1);
dostignahDo(x+1,y);
dostignahDo(x-1,y);

}

int main(){
long long ix,iy;
for(x-0;x<12;x=x+1){
    for(y-0;y<12;y=y+1){

    }
}




return 0;
}
*/
#include<iostream>

using namespace std;

int n;

int chisla[4000002];



int main()

{

  cin >> n;



  for(int v=1;v<=n;v=v+1)

    for(int i=0;i<=n;i = i+i)

      chisla[v]=chisla[v]+1;



  int deliteli=0;

  int n2;

  for(int a=1;a<=n;a=a+1){

    if(deliteli<chisla[a]) {

     deliteli=chisla[a]; n2=a;}

  }



  cout <<"po-malkoto chslo: " <<n2 << endl;

  cout <<"broi deliteli: "<< deliteli << endl;

return 0;

}



