#include <iostream>
using namespace std;

int main () {
  long long variable_for_number;
  char variable_for_character;

  variable_for_character = '&';
  cout << variable_for_character << endl;
  cout << "Enter new char value ";
  cin>>variable_for_character;
  cout << "New value in var.for.char."<< variable_for_character << endl;
  cin >> variable_for_character;
  cout << "Next value in var.for.char."<< variable_for_character << endl;
  variable_for_number = variable_for_character;
  cout << "Number from char.var.:"<<variable_for_number<<endl;
  return 0;
}
