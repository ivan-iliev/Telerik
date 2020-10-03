#include <iostream>
using namespace std;

int main () {
  char word[81];
  cin >> word;
  int length;

  /// length <-- count chars in word

  length=0;
  while (word[length] != '\0') {length++;}


  /// print result
  cout << length << endl;
  return 0;
}
