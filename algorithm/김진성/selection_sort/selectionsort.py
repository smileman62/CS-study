array = [7,4,5,1,3]

MAX_LENGTH = 5

for i in range(MAX_LENGTH):
    least = array[i]
    least_idx = i
    for j in range(i + 1, MAX_LENGTH):
        if(least > array[j]):
            least = array[j]
            least_idx = j

    if(i != least_idx):
        temp = array[i]
        array[i] = array[least_idx]
        array[least_idx] = temp

print("===선택정렬 오름차순===")
print(array)

print()

for i in range(MAX_LENGTH):
    most = array[i]
    most_idx = i
    for j in range(i + 1, MAX_LENGTH):
        if(most < array[j]):
            most = array[j]
            most_idx = j

    if(i != most_idx):
        temp = array[i]
        array[i] = array[most_idx]
        array[most_idx] = temp

print("===선택정렬 내림차순===")
print(array)