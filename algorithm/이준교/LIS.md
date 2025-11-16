# LIS (최장 증가 수열, Longest Increasing Sequence)

![LIS](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FdkyQPQ%2FbtqTrSCbFPo%2FAAAAAAAAAAAAAAAAAAAAAHtPlnGa4dyeDbx2f3KTWDca8PPs9-i-7Dlp4rz8brsC%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DVMowTQp%252BFMRPDxH7nVmFYT3FP5g%253D)

어떠한 수열에서 오름차순으로 증가하는 가장 긴 부분 수열을 의미한다. 이때, 부분 수열의 각 수는 서로 연속할 필요가 없다.

최장 증가 수열을 찾는 가장 단순한 방법은 완전 탐색이다. 하지만 수열에 존재하는 수의 개수가 k일 때 1개 이상의 원소를 갖는 모든 부분 수열의 가짓수가 2^k로 모든 부분 수열을 확인해 오름차순으로 정렬되어 있는지 확인하는 것은 매우 비효율적이다.

## DP로 보는 LIS
![DP_LIS](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F03S68%2FbtqTyCrck0y%2FAAAAAAAAAAAAAAAAAAAAAFB-AfJBER2eX8E5PP8zOont4SEtlyjTptivITsyKuGk%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DRmcdCmiOABVE88qFVxsPFVAaKS0%253D)

수열의 한 원소에 대해 그 원소(k)에서 끝나는 최장 증가 수열의 경우에는 앞의 모든 원소들이 k보다 작아야 한다.

이때 사진에서 8 이전의 수열 중 각각의 원소에서 끝나는 최장 증가 수열 중 가장 긴 수열은 3일 때의 1, 2, 3이다. 여기에 현재 수 8을 더한 1, 2, 3, 8이 8에서 끝나는 최장 증가 수열이다.

즉, 앞 순서의 모든 원소에서 끝나는 최장 증가 수열들의 길이 중 가장 긴 것을 골라 1을 더한 것이 현재 수에서 끝나는 최장 증가 수열의 길이이다.

따라서 dp[i]는 i번째 인덱스에서 끝나는 최장 증가 수열의 길이이다.

## 이분 탐색으로 보는 LIS
![이분탐색_LIS1](https://velog.velcdn.com/images/kjyeon1101/post/e123ddcc-b0da-4ba4-8848-a14e8b93b2f6/image.png)
![이분탐색_LIS2](https://velog.velcdn.com/images/kjyeon1101/post/1f06210e-7aea-412f-8113-6bd0e407df7e/image.png)
![이분탐색_LIS3](https://velog.velcdn.com/images/kjyeon1101/post/621a17f5-d4e5-430f-9f40-565c67dd0ab6/image.png)

DP를 이용한 방법은 완전 탐색에 비해 시간 복잡도 면에서 효율적이다. 하지만 여전히 시간 복잡도가 O(n^2)이다.

이때, 이분탐색을 이용하면 시간 복잡도를 O(nlogn)까지 줄일 수 있다. 이 방식은 부분수열 전체가 아니라 LIS의 길이를 빠르게 구하는 데 최적화되어 있다.

이 방법에서는 LIS를 기록하는 배열을 하나 더 두고 원래 수열에서 각 원소에 대해 LIS 배열 내에서의 위치를 찾는다.

## Reference
https://4legs-study.tistory.com/106

https://velog.io/@kjyeon1101/%EC%BD%94%ED%85%8C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B0%B1%EC%A4%80-class-4-LIS%EC%B5%9C%EC%9E%A5-%EC%A6%9D%EA%B0%80-%EB%B6%80%EB%B6%84-%EC%88%98%EC%97%B4
