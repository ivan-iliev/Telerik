#include <iostream>
using namespace std;

int main(){
long long n,sum,price;


cin>>n;
while(n>0){
cin>>price;
sum=sum+price;


n=n-1;
}

cout<<  "Total "<<sum/100<<"leva " <<sum%100<<" stotinki" <<endl;



return 0;
}
