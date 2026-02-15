📌 YB Korea Agency 웹사이트 프로젝트 요약
1️⃣ 프로젝트 목적

대만 고객 대상 한국 구매대행 사이트 구축

현재: 한국어 + 번체중국어 병행

최종 목표: 번체중국어 단독 사이트 전환

형태: 정적 랜딩형 사이트 → 향후 주문 시스템 확장 가능성 있음

2️⃣ 현재 기술 구조
🟢 배포 환경

GitHub 저장소 생성 완료

Vercel 연동 완료

자동 배포(Deploy) 설정 완료

main 브랜치 커밋 시 자동 Production 반영

현재 배포 URL:

korea-yb-agency.vercel.app

3️⃣ 코드 구조
📁 기본 구조
/ (root)
 ├─ index.html
 ├─ purchase.html
 ├─ shipping.html
 ├─ pickup.html
 ├─ trade.html
 ├─ board.html
 ├─ tracking.html
 ├─ css/
 ├─ js/
 └─ images/

4️⃣ 다국어 구조 핵심

⚠️ 가장 중요한 부분

텍스트는 HTML이 아니라 JSON에서 관리됨

현재 구조는:

HTML → data-lang-key 사용
↓
language.js
↓
json 파일에서 실제 텍스트 로딩


예시:

<h1 data-lang-key="hero_title"></h1>


실제 표시되는 문구는
👉 JSON 파일에서 관리됨

그래서:

HTML 직접 수정해도 화면 안 바뀜

JSON 수정하면 즉시 반영됨

✔ 현재 구조 이해 완료

5️⃣ 최근 작업 내용

GitHub에서 index.html 수정

Commit → Vercel 자동 재배포 확인

JSON 수정 시 화면 변경 확인

HTML 수정은 텍스트에 영향 없음 확인

6️⃣ 현재 상태

Vercel Production 정상 작동

Deployments 정상

GitHub → Vercel 자동 연결 정상

다국어 시스템 정상 동작

7️⃣ 향후 방향
단기 목표

번체중국어 기준으로 문구 정리

한국어 병행 유지 (작업 중)

중기 목표

한국어 제거

JSON 구조 단순화

중국어 단일화

장기 목표

주문 시스템 추가

폼 → DB → 관리자 구조 확장

Next.js 또는 백엔드 구조로 확장 가능성 검토

🔥 현재 사이트 유형 정리

✔ 정적 HTML 사이트
✔ JSON 기반 다국어
✔ Vercel 배포
✔ GitHub CI 자동 배포

📌 핵심 이해 포인트

이 사이트는 지금:

정적 랜딩 + 다국어 JSON 기반 사이트

React / Next 아님
완전 정적 구조
