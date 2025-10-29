array = [7,4,5,1,3]

MAX_LENGTH = 5

function insertionSort_ASC(array, MAX_LENGTH){
    for_length = MAX_LENGTH

    for(i=1; i<for_length; i++){
        key = array[i]

        for(j=i-1; j>=0 && array[j] > key; j--){
            array[j+1] = array[j]
        }

        array[j+1] = key
    }
}

function insertionSort_DESC(array, MAX_LENGTH){
    for_length = MAX_LENGTH

    for(i=1; i<for_length; i++){
        key = array[i]

        for(j=i-1; j>=0 && array[j] < key; j--){
            array[j+1] = array[j]
        }

        array[j+1] = key
    }
}

insertionSort_ASC(array,MAX_LENGTH)
console.log("===선택정렬 오름차순===")
console.log(array)

console.log()

insertionSort_DESC(array,MAX_LENGTH)
console.log("===선택정렬 내림차순===")
console.log(array)