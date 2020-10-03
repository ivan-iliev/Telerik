#include <iostream>
using namespace std;

int main () {
    long long n, m, i=0, dist=0;
    cin >> n >> m;
    long long num, A[n], ans = n;
    while (i<n) {
        cin >> A[i];
        i++;
    }
    cin >> num;
    num--;
    i = 0;
    while (i<n) {
        if (A[i]>=m) {
            dist = num - i;
            if (dist < 0) {
                dist = -dist;
            }
            if (dist < ans) {
                ans = dist;
            }
        }
        i++;
    }
    if (dist == 0) {
        cout << "Stoi si gladna" << endl;
    } else {
        cout << ans << endl;
    }

    return 0;
}
