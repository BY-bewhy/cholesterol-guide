@AGENTS.md

## 커밋 규칙
- 커밋하기 전, `docs/todo.md`에서 이번 커밋에 포함된 완료 작업 항목을 `- [x]`로 체크하고 todo.md 변경분도 같은 커밋에 함께 포함한다.

## 컴포넌트 배치 규칙
- `src/components/`는 **승인된 공용 디자인시스템 컴포넌트만** (Header, Footer, Button, Card, Accordion 등). 새 공용 컴포넌트를 함부로 추가하지 않는다.
- 페이지 전용 인터랙티브 로직(수치체커, 위험요인 체크리스트 등 그 페이지에서만 쓰는 위젯)은 `src/app/_components/`처럼 라우트에 colocate한다. `src/components/`에 넣지 않는다.

## 타이포 반응형 규칙
- `globals.css`의 커스텀 타입스케일(`text-hero-display`, `text-display-lg` 등)은 고정 px이고 원본 정적 사이트(`dyslipidemia-guide.html`)처럼 `clamp()`로 반응형이 아니다.
- 큰 헤딩(히어로 h1, 섹션 h2)에 그대로 쓰면 모바일 너비에서 줄바꿈이 어색해지거나(고아 글자) 넘칠 수 있다 — 모바일엔 한 단계 작은 토큰, `sm:` 이상에서 원래 토큰을 쓰는 식으로 반응형 클래스를 짝지어 쓴다. 예: `text-display-md sm:text-hero-display`.

## 마이그레이션 중 외부 링크 규칙
- 음식가이드(`cholesterol-food-guide.html`)·먹어도 돼(`meogeodo-dwae.html`)는 아직 Next.js로 옮기지 않았다 (todo.md "이번 라운드 범위 아님"). 이 페이지들로의 링크는 절대경로로 실제 배포된 `https://cholesterol-guide.vercel.app/...`를 가리킨다. 나중에 해당 페이지를 이 프로젝트로 포팅하면 내부 라우트 링크로 교체한다.
