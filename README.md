# Vue3, TypeScript 기반 반응형 대시보드 실습 프로젝트

![반응형 대시보드 실습 프로젝트 스크린샷]([https://github.com/user-attachments/assets/61ef495b-ec33-4d22-8e70-485c79f9c3b3"](https://github.com/user-attachments/assets/61ef495b-ec33-4d22-8e70-485c79f9c3b3)

<p align="center">
<a href="https://vue-responsive-practice.vercel.app/">
<img src="https://img.shields.io/badge/Visit_App-Open_Demo-blue?style=for-the-badge&logo=vercel" />
</a>
</p>

> Vue 3 · TypeScript · Tailwind CSS를 활용해
> PC/모바일 반응형 레이아웃, 네비게이션, 차트 시각화를 중심으로 구성한 연습용 프로젝트입니다.

## 주요 기능

- **반응형 레이아웃 구현** - PC에서는 고정 헤더 구조, 모바일에서는 햄버거 메뉴 기반 구현
- **페이지 라우팅(Vue Router)** - `/` 홈, `/dashboard` 대시보드, `/settings` 설정, `/:pathMatch(.*)*` NotFound 페이지 처리
- **PrimeVue 차트 적용** - 방문자 수, 매출/전환율/체류시간 라인 + 바 차트
- **전역 Layout 구조 설계** - DefaultLayout.vue에서 Header · MobileSidebar · RouterView 관리
- **Tailwind 기반 UI 컴포넌트** - 카드형 통계 박스, 반응형 Grid, 모바일/PC에서 자동 레이아웃 변경

## 🚀 빠른 시작

### 설치

```bash
git clone https://github.com/doyeonkim1997/vue-responsive-practice
cd vue-responsive-practice
yarn install
```

### 개발 서버 실행

```bash
yarn serve
```

### 빌드

```bash
yarn build
```

## 🛠 기술 스택

- **Vue 3** – Composition API 기반 UI 구성
- **TypeScript** – 정적 타입 안정성
- **Vue Router 4** – 페이지 라우팅
- **Pinia** – 상태 관리 준비 (현재 구조만 포함)
- **Tailwind CSS 4.x** – 퍼블리싱/반응형 스타일링
- **PrimeVue 4.x** – 차트 및 UI 요소
- **Chart.js** – 데이터 시각화
- **Vercel** – 배포

## 📁 프로젝트 폴더 구조

```
src/
├── assets/               # 이미지, 폰트 등
├── components/
│   ├── common/           # Header, MobileSidebar 등 공용 UI
│   └── charts/           # SalesChart.vue, VisitorLineChart.vue
├── layouts/
│   └── DefaultLayout.vue # 모든 페이지 공통 Layout
├── pages/
│   ├── Home.vue          # 홈 화면
│   ├── Dashboard.vue     # 대시보드
│   ├── Settings.vue      # 설정
│   └── NotFound.vue      # 404
├── router/
│   └── index.ts
├── styles/
│   └── global.css
└── main.ts
```
