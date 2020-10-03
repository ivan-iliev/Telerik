/**strlen
#include<iostream>
#include<cstring>
using namespace std;
int main(){
char a[1000];
long long e=0;
cin>>a;
e=strlen(a);
cout<<e;
return 0;
}
*/

/**strcpy
#include<iostream>
#include<cstring>
using namespace std;
int main(){
char a[1000],b[1000];
///long long e=0;
cin>>a;
cin>>b;
strcpy(a,b);
cout<<a<<endl;
cout<<b<<endl;
return 0;
}

*/
/**strcat
#include<iostream>
#include<cstring>
using namespace std;
int main(){
char a[1000],b[1000];
cin>>a;
cin>>b;
strcat(a,b);
cout<<a<<" "<<b;
*/
#include<iostream>
#include<cstring>
using namespace std;
int main(){
int   i=0;
char a[1000],b[1000];
cin>>a>>b;
i=strcmp(a,b);
cout<<i<<endl;
return 0;
}



