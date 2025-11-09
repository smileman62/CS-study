array = [7,4,5,1,3]

MAX_LENGTH = 5

function selectionsort_ASC(array, MAX_LENGTH){
    for_length = MAX_LENGTH

    for(i=0; i<for_length; i++){
        least = array[i]
        least_idx = i

        for(j=i+1; j<for_length; j++){
            if(least > array[j]){
                least = array[j]
                least_idx = j
            }
        }

        if(i != least_idx){
            temp = array[i]
            array[i] = array[least_idx]
            array[least_idx] = temp
        }
    }
}

function selectionsort_DESC(array, MAX_LENGTH){
    for_length = MAX_LENGTH

    for(i=0; i<for_length; i++){
        most = array[i]
        most_idx = i

        for(j=i+1; j<for_length; j++){
            if(most < array[j]){
                most = array[j]
                most_idx = j
            }
        }

        if(i != least_idx){
            temp = array[i]
            array[i] = array[most_idx]
            array[most_idx] = temp
        }
    }
}

selectionsort_ASC(array,MAX_LENGTH)
console.log("===선택정렬 오름차순===")
console.log(array)

console.log()

selectionsort_DESC(array,MAX_LENGTH)
console.log("===선택정렬 내림차순===")
console.log(array)