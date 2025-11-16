# DFS와 DFS

![DFS와 BFS](https://miro.medium.com/v2/resize:fit:1280/format:webp/1*GT9oSo0agIeIj6nTg3jFEA.gif)

## 스택과 큐
![스택과 큐](https://media.licdn.com/dms/image/v2/D5612AQE5UK9gNgZ6IQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711988875949?e=2147483647&v=beta&t=gRdsy3VUFvvpqZCn8h8II02ZzehR4dXHe_xGAzubGEA)

## DFS
그래프 탐색 알고리즘 중 하나로 한 방향으로 갈 수 있을 때까지 최대한 깊게 탐색한 후 더 이상 갈 수 없게 되면 다시 돌아와 다음 경로를 탐색하는 방식이다.

스택 또는 재귀를 사용하여 구현이 가능하다. 탐색을 시작한 정점을 스택에 push하고 해당 정점과 연결된 정점들을 차례로 방문한다.

위의 gif에서 보면 1에서 시작하게 되면 2, 4, 8이 push가 되며 스택에서 pop해서 2로 넘어가게 되면 3이 push 된다. 이때, 3을 방문하게 되는데 3에는 연결된 점이 없기 때문에 다음인 4가 pop 되어 넘어가게 된다.

그래프의 구조를 재귀적으로 탐색하기 때문에 재귀 호출을 사용하는 경우에는 스택 오버플로우에 유의해야 한다.

경로의 길이를 고려하지 않기 때문에 최단 경로를 찾는 문제에서는 다른 알고리즘을 사용해야 한다.

## BFS
하나의 루트 노드에서 시작하여 인접한 모든 노드를 우선 탐색하여 모든 정점을 탐색하는 데 사용되는 방식이다. 이때 인접한 노드는 너비를 우선적으로 탐색한다.

큐를 사용하여 구현된다. 시작 정점에 큐에 넣고 큐에서 하나의 정점을 꺼내서 인접한 정점들을 큐에 넣는 과정을 반복한다.

위의 gif에서 보면 1에서 시작하여 큐에 2, 3, 4이 enqueue된다. 2가 dequeue가 되어 2로 이동해 5을 enqueue한다. 이후에 3이 dequeue되어 3으로 이동해 6, 7을 enqueue한다.

시작 정점에서 목표 정점까지의 최단 경로를 찾을 때 사용이 가능하다.

## 출처
https://adjh54.tistory.com/328

https://www.linkedin.com/pulse/leveraging-stacks-queues-python-efficient-data-arun-neelakandan-9swwc
