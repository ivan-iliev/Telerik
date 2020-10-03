#include <iostream>
#include <cstring>
using namespace std;

int main () {
  char word[81], word2[100];
  cin >> word;
  int length;

  /// length <-- count chars in word

  length=strlen(word);


  /// print result
  cout << length << endl;
  return 0;
}

