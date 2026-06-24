---
type: Document
tags:
  - 콜레스테롤
  - todo
aliases:
  - 콜레스테롤 가이드 작업 목록
source: "PRD.md 기준 빌드 plan을 페이지/컴포넌트 단위로 분해"
created: 2026-06-25
---

> [!info] 원칙: **기존 파일(`dyslipidemia-guide.html`, `cholesterol-food-guide.html`, `meogeodo-dwae.html/.jsx`)은 수정하지 않고 참고만 한다.** 수정이 필요한 결과물은 동일 파일명에 `-new`를 붙여 새 파일로 만든다 (예: `dyslipidemia-guide-new.html`).
>
> **2026-06-25 업데이트**: 이후 Next.js + Tailwind로 전환되어, 아래 "홈" 항목은 정적 html `-new` 파일이 아니라 `website-gen/src/app/page.tsx`(Next.js 라우트)로 구현했다. `.badge-soon`/`.soon-card`/`.btn-soon` 같은 CSS 클래스 대신 승인된 공용 컴포넌트(`Card`, `Button`)의 variant로 동일한 시각적 의도를 구현 — 새 공용 컴포넌트는 만들지 않음.

## 페이지: 홈 (`website-gen/src/app/page.tsx`)

### 0. 준비 작업
- [x] ~~`dyslipidemia-guide.html` 전체를 `dyslipidemia-guide-new.html`로 복제~~ → Next.js 라우트(`page.tsx`)로 재구현 (원본 html 미수정 확인)
- [x] 이후 모든 작업은 `website-gen/src/app/page.tsx` + `_components/`에서만 진행

### 1. 공용 컴포넌트 — "준비 중" 배지/카드
- [x] ~~`.badge-soon` CSS~~ → `Card`의 `eyebrow="준비 중"` prop으로 구현 (`text-primary` 톤)
- [x] ~~`.soon-card` CSS~~ → `Card` 컴포넌트(`variant="dark"`/`"light"`) 그대로 재사용
- [x] ~~`.btn-soon` CSS~~ → `Button variant="secondary"`로 구현 (오픈 전이라 인스타그램 링크로 연결)

### 2. 섹션 6.5 — 습관단계 자가진단 티저 (`#start` 섹션과 "약" 섹션 사이에 삽입)
- [x] eyebrow: "습관, 지금 몇 단계세요?"
- [x] h2: 약을 잘 챙겨도 습관이 없으면 안 잡힌다는 메시지
- [x] 본문 한 줄: SNUH 2021 근거(규칙적 운동·균형식·적극적인 삶·타인돕기 4대 습관) 요약
- [x] `Card` 1개(dark): 자가진단 도구 미리보기 문구 + eyebrow 배지
- [x] CTA 버튼: "준비 중 — 오픈 알림 받기" → `https://www.instagram.com/daily.doingdoit/` (신규 탭)
- [ ] `.reveal` 스크롤 등장 애니메이션 — 이번 라운드는 생략 (정적 사이트의 IntersectionObserver 패턴, Next.js 쪽엔 아직 미포팅. 백로그로 이동)

### 3. 섹션 9.5 — 콜레스테롤 인사이트 블로그 티저 (요약 섹션과 최종CTA 사이에 삽입)
- [x] eyebrow: "콜레스테롤 인사이트"
- [x] h2: "곧 만나요" 톤의 헤드라인
- [x] 블로그 예고 카드 2개 (기획안 11장 제목 중 발췌: "약 잘 챙겨 먹어도 수치가 안 잡히는 이유", "지금 내 콜레스테롤 관리는 몇 단계?") — 각 카드 `Card eyebrow="준비 중"`
- [x] CTA 버튼: "준비 중 — 인스타에서 먼저 만나기" → `https://www.instagram.com/daily.doingdoit/` (신규 탭)
- [ ] `.reveal` 스크롤 등장 애니메이션 — 2번과 동일하게 백로그로 이동

### 4. QA
- [x] 모바일(390px)·데스크톱(1440px) 스크린샷으로 전 섹션 검토 (Playwright, `scripts/qa-crops.mjs`)
- [x] 기존 기능 포팅 확인 — 수치체커 입력(색상 판정), 위험요인 체크 카운트 모두 정상 동작
- [x] 모바일에서 수치체커 판정 텍스트가 좁은 칸에 줄바꿈되던 문제 발견·수정 (입력행/판정행 분리)
- [x] 히어로 h1·섹션 h2가 모바일에서 어색하게 줄바꿈되던 문제 발견·수정 (반응형 타입스케일 — CLAUDE.md 규칙 추가)
- [x] 신규 섹션 2개(6.5/9.5)의 "준비 중" 표현이 기존 베이지·크림·브라운 톤과 잘 어울리는지 확인
- [x] 전체 스크롤 순서 검토 (히어로→...→6.5→약→...→요약→9.5→최종CTA→푸터)

---

## 페이지: 음식가이드 (`cholesterol-food-guide.html`)
- [ ] 변경 없음 — 이번 라운드 범위 아님 (참고만, 링크 타겟 그대로 유지)

## 페이지: 먹어도 돼? (`meogeodo-dwae.html` / `.jsx`)
- [ ] 변경 없음 — 이번 라운드 범위 아님 (참고만)

---

## 백로그 (이번 라운드 범위 아님 — PRD 4장 참고)
- [ ] 습관단계 자가진단 도구 — 별도 페이지로 분리 개발 (기획안 13장, 수치체커 UI 패턴 재사용 예정)
- [ ] 콜레스테롤 인사이트 블로그 — 글 6개 작성 + 목록/상세 페이지 개발 (기획안 11장)
- [ ] 위 2개 기능이 열리면, 홈의 6.5/9.5 "준비 중" CTA를 인스타 링크 → 실제 기능 페이지 링크로 교체
- [ ] 스크롤 등장(`.reveal`) 애니메이션을 Next.js 쪽에 포팅 (IntersectionObserver 기반 클라이언트 컴포넌트로)
- [ ] 음식가이드·먹어도 돼 페이지를 이 프로젝트(Next.js)로 포팅 — 포팅 전까지 홈의 관련 링크는 `cholesterol-guide.vercel.app` 절대경로 유지 (CLAUDE.md 참고)
