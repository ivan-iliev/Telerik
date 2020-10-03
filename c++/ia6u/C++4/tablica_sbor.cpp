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

    dp[0][0]=input[0][0];

    for(int i=1;i<m;i++){
        dp[0][i]=dp[0][i-1]+input[0][i];
    }

    for(int i=1;i<n;i++){
        dp[i][0]=dp[i-1][0]+input[i][0];
    }

    for(inti=1;i<n;i++){
        for(int j=1;j<m;j++){
            dp[i][j]=dp[i][j-1]+dp[i-1][j]+input[i][j]-dp[i-1][j-1;]
        }
    }
return 0;
}

