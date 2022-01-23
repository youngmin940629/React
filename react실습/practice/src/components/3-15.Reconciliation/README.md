- 루트부터 비교 => 무엇을 렌더링할 지 알려주는 함수
- 트리를 파괴할 때 => 부모가 바뀌었다면 트리를 버림
- keys => 자식 재귀 처리 시 효율성 확보

- Virtual DOM => 실제 DOM과 동기화 할 가상 표현
- 재조정 => 실제 DOM과 Virtual DOM의 동기화
- React Fiber => 스택 reconciler 대체한 재조정 엔진