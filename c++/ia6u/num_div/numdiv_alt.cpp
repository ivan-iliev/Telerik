#include<iostream>
using namespace std;
int n;

int chisla[3000001];

int main()
{
    int delitel=0;
    int n2;
    cin >> n;
    
    for(int v=1;v<=n;v++){
        for(int a=0;a<=n;a = a+v){
            chisla[a]++;
        }
    }
    
    for(int a=1;a<=n;a++){
        if(delitel<chisla[a]) {delitel=chisla[a]; n2=a;}
    }
    cout <<n2 << endl;
    cout <<delitel << endl;
    return 0;
}
