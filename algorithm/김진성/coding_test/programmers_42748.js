/**
 * 코딩테스트연습 > 정렬 > K번째 수
 * 
 * 문제를 푼 날짜:
 * 2025년 10월 27일
 * 
 * 문제 설명:
 * 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
 * 
 * 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
 * 
 * array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
 * 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
 * 2에서 나온 배열의 3번째 숫자는 5입니다.
 * 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 * 
 * 제한사항
 * array의 길이는 1 이상 100 이하입니다.
 * array의 각 원소는 1 이상 100 이하입니다.
 * commands의 길이는 1 이상 50 이하입니다.
 * commands의 각 원소는 길이가 3입니다.
 * 입출력 예
 * array	commands	return
 * [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
 * 입출력 예 설명
 * [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
 * [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
 * [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.
 * 
 * 문제 풀이 및 후기:
 * 크게 어려운 문제는 아니였던거 같다. 명령어들을 받아온 후 for문을 통해 분배 후 내장된 sort 메소드를 활용하여 정답을 맞췄다.
 * 허나 기존에 존재하는 javascript 메소드들이 무엇이 있었는지, 어떻게 활용하는지에 대해서 공부가 더 필요할 것 같다.
 * 
*/

function solution(array, commands) {
    var answer = [];
    
    let i;
    
    for (i=0; i<commands.length; i++){
        answer.push(command_shell(array,commands[i][0],commands[i][1],commands[i][2]))
    }
    
    return answer;
}

function command_shell(array, start, end, index) {
    list = []
    
    for (i = start -1; i<= end-1; i++){
        list.push(array[i])
    }
    
    result = list.sort((a, b) => a - b);
    
    return result[index-1]
}
