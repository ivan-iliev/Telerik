#include <iostream>
using namespace std;

int main(){

    long long  brDeca,brDecaVOtboraPoBasket,przKolko;
    cin >> brDeca >> brDecaVOtboraPoBasket >> przKolko;
    long long  first = 0;
    long long  out = 0;
    long long  basket = out;
    long long  ostatak = 0;

    while (brDeca >= przKolko && basket < brDecaVOtboraPoBasket && ostatak < przKolko-1){
        out = (brDeca + ostatak)/przKolko;
        ostatak = (brDeca + ostatak)%przKolko;
        first++;
        basket += out;
        brDeca = brDeca - out;
    }

    if (basket >= brDecaVOtboraPoBasket){
        cout << first << "\n" << "volley" << "\n";
        return 0;
    }

    if (ostatak == przKolko-1){
        cout << first+1 << "\n" << "basket" << "\n";
        return 0;
    }



    long long  posledno = 0;
    while (basket < brDecaVOtboraPoBasket && posledno != 1){
        first += (przKolko - ostatak) / brDeca;
        posledno = (przKolko - ostatak) % brDeca;
        if (posledno >= 1){
            first++;
            ostatak = brDeca - posledno;
        }else
        ostatak = 0;
        brDeca--;
        basket++;
    }
    if (posledno == 1) cout << first << "\n" << "basket" << "\n";
    else cout << first << "\n" << "volley" << "\n";

return 0;
}

