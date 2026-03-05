# 💊 동화약품 웹사이트 리뉴얼 (DONG WHA PHARM)

> **"민족이 합심하면 잘 살 수 있다"**
> 1897년부터 이어온 국내 최초 제약사 동화약품의 정신을 담아 현대적이고 신뢰감 있는 UI로 재해석한 반응형 퍼블리싱 프로젝트입니다.

## 🚀 Project Summary

| 항목 | 내용 |
| :--- | :--- |
| **작업 기간** | 2026.01.28 - 2026.03.05 (약 5주) |
| **담당 역할** | 기획, UI/UX 디자인, 퍼블리싱 (단독 진행 100%) |
| **기술 스택** | HTML5, SCSS, JavaScript, GSAP (ScrollTrigger) |
| **배포 링크** | [🔗 사이트 바로가기](https://yeonju-s5.github.io/promotion_site_DW/) |

## 📅 Project Timeline
<details>
<summary><b>상세 일정 보기 (클릭하여 열기/닫기)</b></summary>
<div markdown="1">

### ▫️ Phase 1. Planning & Design `(01.28 - 02.11)`
- 브랜드 아이덴티티 분석 및 리뉴얼 제안서 작성
- UI/UX 와이어프레임 기획 및 고정밀 디자인 시안 제작

### ▫️ Phase 2. Publishing `(02.12 - 03.02)`
- 메인 페이지 마크업 및 인터랙션 구현 (GSAP ScrollTrigger)
- *설 연휴(02.14-18) 프로젝트 리서치 및 보완*

### ▫️ Phase 3. Refinement `(03.03 - 03.05)`
- 피드백 반영을 통한 여백 및 세부 디테일 조정 (최종 통과 ✨)

</div>
</details>

## 🛠 Tech Stacks
<p>
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white">
</p>

## ✨ Key Points & Improvements

### 1️⃣ 가독성을 고려한 뉴스 카드 UI
- **Visual Balance**: 밝은 이미지 위에서도 텍스트가 묻히지 않도록 `linear-gradient` 오버레이를 적용해 가독성 확보
- **Brand Identity**: 알약 형태를 모티브로 한 캡슐 디자인의 '더보기' 버튼과 부드러운 스케일 애니메이션

### 2️⃣ GSAP 기반의 시각적 인터랙션
- **Motion UI**: `ScrollTrigger`를 활용해 스크롤 흐름에 따라 텍스트가 순차적으로 등장하는 부드러운 패럴랙스 효과
- **Data Highlight**: 설립 연도(1897) 카운팅 애니메이션을 통해 역사성과 신뢰감 강조

### 3️⃣ 클린 & 모던 푸터 레이아웃
- **Information Architecture**: 제약회사 특유의 신뢰감을 위해 화이트 톤을 유지하되, 물리적인 구분선을 최소화하고 **여백(Space)** 으로 정보를 구획화

## 📂 Directory Structure
```text
project/
├── css/ (SCSS 컴파일 파일)
├── images/ (최적화 이미지 자산)
├── js/
│   └── main.js (GSAP & UI Interaction Logic)
└── index.html
```

© 2026 Seo YeonJu. All rights reserved.
