#include <iostream>
using namespace std;

int main(){
long long sec,br;

sec=10;
while(sec>0){
 cout<< "ostavat" <<  sec  <<  "sekundi" << endl ;
 br=0;
 while(br<400000000){
    br=br+1;
 }
 sec=sec-1;
}
cout<<"Start!"<<endl;





return 0;
}
