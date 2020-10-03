#include <iostream>
using namespace std;

int main ()
{
long long white;
long long green;
long long red;
long long temp;

cout<<"vuvedete stoinosta na white:";
cin>>white;
cout<<endl;
cout<<"vuvedete stoinosta na green:";
cin>>green;
cout<<endl;
cout<<"vuvedete stoinosta na red:";
cin>>red;
cout<<endl;

cout<<"v white ima:"<<white <<endl;
cout<<"v green ima:"<<green <<endl;
cout<<"v red ima:"<<red <<endl;
cout<<"sega gi razmeni"<<endl;


temp=white;
white=green;
green=red;
red=temp;


cout<<"v white ima:"<<white<<endl;
cout<<"v green ima:"<<green <<endl;
cout<<"v red ima:"<<red <<endl;

return 0;
}
