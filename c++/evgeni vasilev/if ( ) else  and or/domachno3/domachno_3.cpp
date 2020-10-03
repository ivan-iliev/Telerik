#include <iostream>
using namespace std;

int main(){
long long A1,A2,A3,B1,B2,B3,priceMAX,priceMEDIUM,priceLOW,barelMAX,barelMEDIUM,barelLOW;


cin>>A1>>A2>>A3;
cout<<endl;

cin>>B1>>B2>>B3;
cout<<endl;

 if( 0 <= A1 or 0<=A2 or 0<=A3 or 0<=B1 or 0<=B2 or 0<= B3 or A1 <= 100000000 or A2 <= 100n000000 or A3 <= 100000000 or B1 <= 100000000 or B2<= 100000000 or B3 <= 100000000){
 cout<<"YES"<<endl;

}else{

cout<<"ERROR";
}

if(A1>A2 and A1>A3){
priceMAX=A1;

}

if(A2>A1 and A2>A3){
priceMAX=A2;

}

if(A3>A1 and A3>A2){
priceMAX=A3;
}









if(A1<A2 and A1<A3){
priceLOW=A1;

}

if(A2<A1 and A2<A3){
priceLOW=A2;

}

if(A3<A1 and A3<A2){
priceLOW=A3;

}










if((A2<A1 and A1<A3) or (A3<A1 and A1<A2)){
priceMEDIUM=A1;

}

if((A1<A2 and A2<A3) or (A3<A2 and A2<A1)){
priceMEDIUM=A2;

}


if((A1<A3 and A3<A2) or (A2<A3 and A3<A1)){
priceMEDIUM=A1;

}



/**
---------------------------------------------------------------------------------------------------------------------------


*/

if(B1>B2 and B1>B3){
barelMAX=B1;

}

if(B2>B1 and B2>B3){
barelMAX=B2;

}

if(B3>B1 and B3>B2){
barelMAX=B3;
}









if(B1<B2 and B1<B3){
barelLOW=B1;

}

if(B2<B1 and B2<B3){
barelLOW=B2;

}

if(B3<B1 and B3<B2){
barelLOW=B3;

}










if((B2<B1 and B1<B3) or (B3<B1 and B1<B2)){
barelMEDIUM=B1;

}

if((B1<B2 and B2<B3) or (B3<B2 and B2<B1)){
barelMEDIUM=B2;

}


if((B1<B3 and B3<B2) or (B2<B3 and B3<B1)){
barelMEDIUM=B1;

}

cout<< (priceMAX*barelMAX)+(priceMEDIUM*barelMEDIUM)+(priceLOW*barelLOW)<<endl;


return 0;
}
