#include<iostream>
#include<ctime>
#include<cstdlib>
using namespace std;

int main(){
long long masiv[1000],broihvurlqnia=1 ;
long long i=0;
srand (time(NULL));

for(i=0;i<1000;i++){
    masiv[i]=rand()%2+1;
    cout<<masiv[i]<<endl;
}
for(i=0;true;i++){
    if(masiv[i]!=masiv[i+1]){
        broihvurlqnia++;

    }else{
    broihvurlqnia++;
        cout<<broihvurlqnia<<" "<<"broihvurlqnia"<<endl;
        break;
    }

}



return 0;
}
