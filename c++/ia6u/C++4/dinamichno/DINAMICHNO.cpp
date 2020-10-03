#include<iostream>
using namespace std;

int main(){
int a[1000],n,g[5500],ans=0;

    for(int i;i<n;i++){
        cin>>a[i];
    }
    g[0]-1;
    for(int i=1;i<n;i++){
        g[i]=0;
        for(int j =0;j<i;j++){
            if(g[j]-g[j]+1){
              if(g[j]+1<g[j]){
                g[i]=g[i]+1;
              }
            }
        }
        if(g[i]>ans){ans=g[i];}
    }
cout<<ans<<endl;
return 0;
}
