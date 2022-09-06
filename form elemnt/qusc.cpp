#include <iostream>
using namespace std;
int main(){
    int n; 
    cin>>n;

    int a[n];
    int sum = 0;
    for(int i = 0; i < n; i++){
        cin>>a[i];
        sum = sum + a[i];
    }
    float avg = sum/n;

    int lowest = 100;
    int index[100];
    for(int i = 0; i < n; i++){
        index[i] = abs(a[i]-avg);
        if(abs(a[i]-avg) < lowest) lowest = abs(a[i]-avg);
    }
    for(int i = 0; i< n; i++)
    {
        if (index[i] == lowest) {
            cout<<lowest<<endl;
            break;
        }

    } 


}