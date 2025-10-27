array = [7,4,5,1,3]

MAX_LENGTH = 5

result = []

for i in range(MAX_LENGTH -1,0, -1):
    for j in range(0,i):
        if(array[j] > array[j+1]):
            temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp

print("===버블정렬 오름차순===")
print(array)

print()

for i in range(MAX_LENGTH -1,0, -1):
    for j in range(0,i):
        if(array[j] < array[j+1]):
            temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp

print("===버블정렬 내림차순===")
print(array)