#include <iostream>
using namespace std;

///long long fib(long long otkolko){
///long long otg;
/**
    if(otkolko>0){
        otg = fib(otkolko-1)+fib(otkolko-2);
    }else{
        return 1;
    }
    return otg;
}

*/
long long kolkoBroiaPutq(long long CX,long long CY){
    if(CX == 0 || CY==0) {
        return 1;
    }
return  kolkoBroiaPutq(CX-1,CY)+kolkoBroiaPutq(CX,CY-1);
}
int main(){
///xwcout<<fib(50)<<endl;

cout<<kolkoBroiaPutq(10,20)<<endl;
return 0 ;
}
