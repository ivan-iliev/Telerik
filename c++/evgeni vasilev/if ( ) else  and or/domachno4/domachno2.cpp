#include <iostream>
using namespace std;

int main ()
{
long long a1,b1,a2,b2,S1,P1,S2,P2;

cout<<"vuvedi duljinata na purvia prawoygylnik:";
cin>>a1;
cout<<endl;
cout<<"vuvedi schirotchinata na purvia prawoygylnik:";
cin>>b1;
cout<<endl;
cout<<"vuvedi duljinata na vtoria prawoygylnik:";
cin>>a2;
cout<<endl;
cout<<"vuvedi schirotchinata na vtoria prawoygylnik:";
cin>>b2;
cout<<endl;
cin>>P1>>P2>>S1>>S2;
cout<<"P1 e raven na:"<<P1==a1*2+b1*2;
cout<<"P2 e raven na:"<<P2==a2*2+b2*2;
cout<<"S1 e raven na:"<<S1==a1*b1;
cout<<"S2 e raven na:"<<S2==a2*b2;

if(P1==P2){
cout<<"P1 e raven na P2";
}

if(P1<P2){
cout<<"P1 e po-maluk ot P2";
}else{
cout<<"P1 e po-goliam ot P2";
}

if(S1==S2){
cout<<"S1 e ravno na S2";
}


if(S1<S2){
cout<<"S1 e po-maluk ot S2";
}else{
cout<<"S1 e po-goliam ot S2";
}





return 0;
}
