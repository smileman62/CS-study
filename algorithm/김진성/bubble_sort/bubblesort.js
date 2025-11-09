var MAX_SIZE = 5;

let array = [7,4,5,1,3];

function bubblesort_ASC(list, max_size) {
    let i, j, temp;

    for (i=max_size; i>0; i--){
        for (j=0; j<i; j++){
            if(list[j] > list[j+1]){
                temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp;
            }
        }
    }
}

function bubblesort_DESC(list, max_size) {
    let i, j, temp;

    for (i=max_size - 1; i>0; i--){
        for (j=0; j<i; j++){
            if(list[j] < list[j+1]){
                temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp;
            }
        }
    }
}

bubblesort_ASC(array, MAX_SIZE);

console.log(array)

bubblesort_DESC(array, MAX_SIZE);

console.log(array)