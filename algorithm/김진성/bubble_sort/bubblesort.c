# include <stdio.h>
# define MAX_SIZE 5
void bubble_sort_DESC(int array[], int length){
    int i, j, temp;

    for (i=length-1; i>0; i--){
        for(j=0; j<i; j++){
            if(array[j] < array[j+1]){
                temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }
}

void bubble_sort_ASC(int array[], int length){
    int i, j, temp;

    for (i=length-1; i>0; i--){
        for(j=0; j<i; j++){
            if(array[j] > array[j+1]){
                temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }
}

int main() {
    int i;
    int n = MAX_SIZE;
    int list[MAX_SIZE] = {7,4,5,1,3};

    printf("===버블정렬 오름차순===\n");
    bubble_sort_ASC(list, n);

    for(i=0; i < 5; i++){
        printf("%d ", list[i]);
    }

    printf("\n\n");

    bubble_sort_DESC(list, n);

    printf("===버블정렬 내림차순===\n");
    for(i=0; i < 5; i++){
        printf("%d ", list[i]);
    }

    return 0;
}