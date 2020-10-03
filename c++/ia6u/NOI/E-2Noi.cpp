#include <iostream>
using namespace std;
int main(){
    long a,b,k;

  cin>>a>>b>>k;

  long m,i,t,S,st,s1,s2;
  s1=0;
  t=a;
  while (t>0){
    s1=s1+t%10;
    t=t/10;
  }
  S=s1;
  s2=s1;
  for (i=a+1;i<a+k;i++){
        t=i-1;
        while (t%10==9){
            s2=s2-9;
            t=t/10;
        }
        s2++;
        S=S+s2;
  }
  m=S;




  for (st=a+1;st<=b-k+1;st++){
        S=S-s1;
        t=st-1;
        while (t%10==9){
            s1=s1-9;
            t=t/10;
        }

        s1++;
        t=st+k-2;


        while (t%10==9){
            s2=s2-9;
            t=t/10;
        }
        s2++;
        S=S+s2;
        if (S>m){
            m=S;
        }

  }

  cout<<m<<endl;

  return 0;

}


