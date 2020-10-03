#include <iostream>
using namespace std;

int main () {
  long long variable_for_number;
  char variable_for_character;

  cout << "Enter a character: ";
  cin >> variable_for_character;
  cout << "Readed char is: "
       <<variable_for_character << endl;

  cin >> variable_for_character;
  cout << "Next readed char is: "
       <<variable_for_character << endl;

  variable_for_character = '*';
  cout << "Char const is: "<<variable_for_character<< endl;

  variable_for_character = 65;
  cout << "Char by number: "<<variable_for_character<< endl;

  variable_for_number = 'T' ;
  cout << "Number by char: "<<variable_for_number<<endl;

  return 0;
}
