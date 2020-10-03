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

