#include <iostream>
using namespace std;

int main ()
{
long long A ,B ,Buf;
cout<<"vuvedi 2 celi chisla razdeleni s interval:";

cin>>A>>B;

cout<<"v A ima:"<<A<<endl;
cout<<"v B ima:"<<B<<endl;
cout<<"sega gi razmeni"<<endl;

Buf=A;
A=B;
B=Buf;

cout<<"v A ima:"<<A<<endl;
cout<<"v B ima:"<<B<<endl;

return 0;
}
