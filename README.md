# CS Study

![waving](https://capsule-render.vercel.app/api?type=waving&height=140&text=CS%20Study&fontAlign=72&fontAlignY=40&fontSize=52&color=gradient&fontColor=FFFFFF)

> 매주 문제 풀이, CS 정리, 토론을 통해 기본기를 다지고 꾸준함을 기록하는 스터디입니다.

---

## 📆 Schedule
- **정기 모임:** 매주 **일요일 22:00–23:00**에 비대면으로 진행합니다.
- **주간 루틴:**
  - **월–금:** 백준 또는 프로그래머스 문제를 풉니다.
  - **토:** 난이도 높은 문제 1개를 선별하여 풉니다.
  - **일:** 문제 풀이를 공유하고, CS 발표 및 토론을 진행하며 다음 주 학습 주제와 문제를 논의합니다.

> 불참하거나 과제를 제출하지 않을 경우 모두에게 **커피 기프티콘 ☕️**을 돌립니다.

---

## 🌳 Rules
- **발표 로테이션:** 매주 랜덤으로 선정하며, 최대 2회 연속까지만 가능합니다.
- **질문과 논의:** 스터디 중 바로 진행하며, 미해결된 주제는 이슈 등록 후 다음 스터디까지 조사하여 논의합니다.
- **문제 풀이 인증:** 백준 또는 프로그래머스 문제를 깃허브나 블로그 인증으로 진행합니다.
- **정리 및 회고 업로드:** 각자 폴더에 학습 내용과 회고를 작성한 뒤 PR로 제출합니다.
- **리뷰와 병합:** 전원이 확인 후 Approve → Merge 순서로 진행합니다.

---

## 👥 Members

|[![](https://github.com/JoonKyoLee.png?size=80)](https://github.com/JoonKyoLee)|[![](https://github.com/ohu-star.png?size=80)](https://github.com/ohu-star)|[![](https://github.com/ejsong25.png?size=80)](https://github.com/ejsong25)|[![](https://github.com/smileman62.png?size=80)](https://github.com/smileman62)|
|:---:|:---:|:---:|:---:|
| 이준교 | 정명서 | 송은정 | 김진성 |

---

## 🗂️ Repository Structure & Submission Guide
- 메인 저장소는 https://github.com/alldayprogramming/CS-study 입니다.
- **포크 → 브랜치 → PR** 흐름으로 진행합니다.

### Folder Structure
```
/ (repo root)
├─ algorithm/                # 알고리즘 주차 (예시)
│  ├─ 이준교/
│  │  ├─ README.md
│  │  └─ (정리 파일)
│  ├─ 정명서/
│  ├─ 송은정/
│  └─ 김진성/
├─ os/
├─ network/
├─ database/
└─ ... (주차별 또는 주제별 디렉터리)
```
> 이번 주차가 **algorithm**이라면 `algorithm/각자이름` 하위에 자유롭게 정리 및 회고 내용을 올립니다.

### Submission Format
스터디 내용 정리는 각자 원하는 형식으로 작성합니다. 회고는 각자 폴더의 `README.md`에 **이번 주 정리 요약 및 회고**를 작성합니다.

예시 (`algorithm/각자이름/README.md`):
```md
# Week N – Algorithm

## 이번 주 학습 내용
- 이분 탐색, 우선순위 큐 정리

## 느낀 점 및 회고
- 주간 문제 풀이를 통해 실전 감각을 되찾았습니다.
- 팀원들의 접근 방식을 공유하며 사고의 폭을 넓혔습니다.
```

---

## 🔀 GitHub Workflow
1. **Fork**: 메인 저장소를 포크합니다.
2. **Branch**: 주차별 또는 주제별로 브랜치를 생성합니다.
   - 예시: `algorithm/week-01-name`
3. **Commit**: 의미 있는 단위로 커밋합니다.
   - 예시: `docs: 퀵 정렬 정리`
4. **PR**: 메인 저장소(`alldayprogramming/CS-study`)로 PR을 생성합니다.
   - PR 제목 예시: `[Week-01][Algorithm] OOO 정리 및 회고`
   - 내용에는 **폴더 경로, 학습 내용 요약, 회고 요약**을 포함합니다.
5. **Review → Approve → Merge**: 전원이 확인 후 병합합니다.

---

## 🎤 Presentation & Random Rotation
- **선정 방법:** 매주 랜덤 추첨으로 발표자를 선정합니다.
- **연속 2회 제한:** 동일 발표자가 2회 연속일 경우 3번째 주에는 제외 후 재추첨합니다.

---

## ❓ Issues (Questions)
- **질문 및 토론 주제 등록 용도**로만 사용합니다.
- `question`, `discussion`로 이슈 타입을 설정합니다.
- 스터디 중 나온 미해결 주제는 제안한 사람이 **이슈로 등록 후** 각자 조사합니다.

이슈 템플릿 예시:
```md
---
title: "[DB] 질문 제목"
labels: [question]
---

## 질문

## 참고 링크
```

---

## 🧭 Contents

- [Algorithm](./algorithm)

---

## 📜 License
- 본 저장소의 문서는 별도 표기가 없는 한 CC BY-NC-SA 4.0을 따릅니다.

