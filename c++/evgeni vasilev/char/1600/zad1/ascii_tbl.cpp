#include <iostream>
using namespace std;

int main () {
  long long as_number;
  char as_char;

  as_number = 32;
  while (as_number<256) {
    cout << as_number << " <-> ";
    as_char = as_number;
    cout << as_char << endl;
    as_number = as_number + 1;
  }
  return 0;
}
