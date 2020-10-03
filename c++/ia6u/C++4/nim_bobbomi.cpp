#include <iostream>
#include<algorithm>
using namespace std;

long long n, p, m,q;
long long a[200], b[200];
long long igrach1LiE=true;
long long endd=true;

int main(){
    cin>>n>>p>>q;
    for(int i=0;i<p;i++){
        cin>>a[i];
    }
    sort(a,a+p);
    for(int i=0;i<q;i++){
        cin>>b[i];
    }
    sort(b,b+q);
    while(true){
        if(igrach1LiE){
            for(int i=0;i<p;i++){
                if(a[i]==n){
                    cout<<'a \n';
                    endd=true;
                    break;
                }
            }


        }
        if(!igrach1LiE){

        }
    }
}
