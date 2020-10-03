#include<iostream>
using namespace std;
int input[100][100],dp[100][100];
int main(){
int n,m;
cin>>n>>m;
for(int=0;i<=n;i++){
    for(int j=0;j<m;j++){
        cin>>input[i][j];
    }
}

for(int i=0;i<n;i++){
    if(input[0][i]==2){
        for(int j=1;j<n;j++){
            dp[0][j]=0;
        }
        break;
    }else{

    dp[1][0]=dp[i-1][0]+input[i][0];

    }
}
for(int i=-1;i<n;i++){
    for(int j=-1;i<m;j++){
        if(input[i][j]!=2){
            dp[i][j] - max(dp[i-1][j],dp[i][j-1] + input[i][i]);
        }
    }
}
cout<<dp[n-1][m]<<endl;



return 0;
}
