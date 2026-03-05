# 💊 동화약품 웹사이트 리뉴얼 프로젝트 (DONG WHA PHARM)

> **1897년부터 이어온 국내 최초 제약사, 동화약품의 아이덴티티를 현대적으로 재해석한 반응형 퍼블리싱 프로젝트입니다.**

---

## 🚀 Project Overview
* **작업 기간**: 2026.02 - 2026.03 (약 4주)
* **구분**: 개인 프로젝트 / 퍼블리싱 (100%)
* **특징**: 신뢰감 있는 화이트 톤 유지 및 트렌디한 UI 인터랙션 구현

## 🛠️ Tech Stacks
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

## ✨ Key Points & Improvements

### 1. 가독성을 고려한 뉴스 카드 UI
* **배경 그라데이션**: 밝은 이미지 위에서도 텍스트가 묻히지 않도록 `linear-gradient`를 활용한 다크 오버레이 적용.
* **알약 버튼 디자인**: 브랜드 아이덴티티를 살린 캡슐 형태의 '더보기' 버튼 구현 및 부드러운 호버 애니메이션 추가.

### 2. GSAP 기반의 시각적 인터랙션
* `ScrollTrigger`를 활용하여 페이지 스크롤 시 텍스트가 밑에서 위로 부드럽게 올라오는(`y`축 이동) 모션 구현.
* 카운팅 애니메이션을 통해 설립 연도(1897)를 강조하는 동적 효과 적용.

### 3. 클린 & 모던 푸터 레이아웃
* 제약회사의 깨끗한 이미지를 위해 화이트 톤을 유지하되, 과한 선(line)을 제거하고 **여백(Space)** 으로 정보를 구획화하여 세련미 강화.

---

## 📂 Directory Structure
```text
project/
├── css/ (SCSS 컴파일)
├── images/
├── js/
│   └── main.js (GSAP & UI Logic)
└── index.html

© 2026 Seo YeonJu. All rights reserved.
