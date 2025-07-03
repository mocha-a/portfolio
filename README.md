# ![Image](https://github.com/user-attachments/assets/cb084bf7-230b-46d6-bea3-c778174296c0)

> 기술 세계를 탐험하는 신입 프론트엔드 개발자의 첫 렌더링.<br>
>
> React 기반의 SPA로 제작한 이 포트폴리오는,<br>
> JSON 기반 데이터 구조를 활용해 각 프로젝트의 정보, 역할, 트러블슈팅을 구조화된 형식으로 정리하고,<br>
> 사용자에게 일관성 있고 체계적인 방식으로 전달할 수 있도록 구성했습니다.

## 🔗 배포 URL
[anji-frontend-portfolio.vercel.app](https://anji-frontend-portfolio.vercel.app)

## 📑 프로젝트 요약

### 1. 주제

* 변화를 두려워하지 않고 적극적으로 도전하는 개발자
* 다양한 프로젝트 경험 정리
* 직관적이고 깔끔한 UI 제공

### 2. 목표

* 프론트엔드 개발자로서의 기술 역량과 UI 구현 능력을 하나의 웹사이트에 담기
* 프로젝트 정보를 직관적이고 구조적으로 표현해 이해하기 쉽게 전달
* JSON 기반 데이터 렌더링으로 유지보수와 확장성 고려한 설계
* Swiper 슬라이드, 팝업, 반응형 디자인 등 인터랙션 요소로 사용자 경험 향상
* 내 기술 스택과 역할, 문제 해결 능력을 구체적으로 어필할 수 있는 포트폴리오 제작

### 3. 주요 기술 스택

* Front-end: React, JavaScript (ES6+), SCSS
* 데이터 구성: JSON 기반 데이터 설계

## 📆 기간

  * 총 작업 기간 : 8일
    * 기획 & 디자인 기간 : 3일
    * 개발 및 테스트 기간 : 5일

## 💡 주요 기능

### 1. 프로젝트 필터링 (개인 / 팀)
* 사용자가 탭을 클릭해 개인 프로젝트와 팀 프로젝트를 쉽게 구분하여 볼 수 있도록 필터링 기능 구현
* JSON 데이터를 기반으로 각 분류별 프로젝트를 동적 렌더링

### 2. 슬라이드 (Swiper.js)
* Swiper.js 라이브러리를 활용해 기술 스택을 카드 형태의 슬라이드로 구현

### 3. 상세 프로젝트 팝업 (역할 / 기술 / 트러블슈팅 포함)
* 프로젝트 카드 클릭 시 상세 정보 팝업
* 담당 역할, 사용 기술, 문제 해결 과정 표시

### 4. GitHub, 연락처 툴팁 & 클립보드 복사 기능
* 연락처 툴팁 표시 및 클립보드 자동 복사로 사용자 편의성 향상
* GitHub 링크 직관적 연결

### 5. 반응형 웹
* 다양한 화면 크기와 기기 환경에 맞게 레이아웃과 UI 요소들이 유연하게 조정되어 쾌적한 사용자 경험 제공

## 🗂️ 폴더 구조

```

🚀portfolio                   # 프로젝트 최상위 폴더
┣ 📂public
┃ ┣ 📂imgs
┃ ┃ ┣ 📂_icons
┃ ┃ ┗ 📜index.html
┣ 📂src
┃ ┣ 📂component
┃ ┃ ┣ 📂_icon
┃ ┃ ┣ 📂portfolio             # 포트폴리오 주요 섹션별 컴포넌트 모음 폴더
┃ ┃ ┣ 📂about-me              # 자기소개(About Me) 컴포넌트 폴더
┃ ┃ ┣ 📂skills                # 기술 스택 컴포넌트 폴더   
┃ ┃ ┣ 📂projects              # 프로젝트 리스트 컴포넌트 폴더
┃ ┃ ┃ ┗ 📂popup               # 프로젝트 상세 팝업 컴포넌트 폴더
┃ ┣ 📂fonts                   # 웹폰트 파일 모음 폴더
┃ ┣ 📂json                    # JSON 데이터 파일 모음 (프로젝트, 스킬 등)
┃ ┃ ┣ 📜trainingPrograms.json  
┃ ┃ ┣ 📜skills.json
┃ ┃ ┗ 📜projects.json         # 인트로 페이지
┃ ┣ 📂styles                  # scss
┣ 📜App.js                    # 전체 라우팅 및 최상위 컴포넌트
┗ README.md
```

## 💻 개발 환경

### 1. Frond-End

| 사용기술 | 설명 |Badge |
| :---:| :---: | :---: |
| **React** | **프론트엔드 프레임워크 (SPA 구축)** |![react](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)|
|**JavaScript (ES6+)** | **주요 개발 언어** |![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white)|
|**SCSS** | **스타일 전처리기** |![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)|
|**JSON** | **데이터 구조 & 관리** |![json](https://img.shields.io/badge/json-000000?style=flat-square&logo=json&logoColor=white)|


### 2. UI/UX 라이브러리

| 사용기술 | 설명 | Badge |
| :---:| :---: | :---: |
| **MUI** | **UI 프레임워크** |![mui](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white) |
| **Swiper** | **슬라이더** |![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=axios&logoColor=white)|


### 3. 개발 도구

|사용기술 | 설명 | Badge | 
| :---:| :---: | :---: |
| **Visual Studio Code (VS Code)** | **코드 편집기( 에디터 )** |![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjAwMyAyTDEyIDEzLjMwM0w0Ljg0IDhMMiAxMEw4Ljc3MiAxNkwyIDIyTDQuODQgMjRMMTIgMTguNzAyTDI0LjAwMyAzMEwzMCAyNy4wODdWNC45MTNMMjQuMDAzIDJaTTI0IDkuNDM0VjIyLjU2NkwxNS4yODkgMTZMMjQgOS40MzRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K&logoColor=white) |
|**Git** | **로컬 버전 관리** |![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white)| 
|**GitHub** | **버전 관리** |![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white)| 
| **Vercel** | **서버리스 플랫폼** |![vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)|
| **Figma** | **디자인 & UI/UX**|![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white) |

## 🚧 트러블 슈팅

### 🔧 PopupItem.jsx

* 모바일 환경에서 팝업이 화면 대부분을 차지해 바깥 영역 클릭으로 닫기가 어려운 이슈

    ⇒ **원인**: 팝업 바깥 여백이 좁아 ```mousedown``` 이벤트가 바깥 영역에서 잘 발생하지 않음

    ⇒ **해결방법**: 팝업 상단에 명확한 닫기 버튼 추가


### 🔧 ProjectItem.jsx

* 팝업이 열렸을 때, 팝업이 아닌 배경 페이지가 스크롤되는 이슈

    ⇒ **원인**: 팝업 컴포넌트가 화면을 덮고 있지만, body 자체의 스크롤을 막지 않아 뒤 배경이 계속 움직임

    ⇒ **해결방법**: 팝업이 열릴 때 ```document.body.style.overflow = "hidden"```으로 설정<br>팝업이 닫힐 때는 "auto"로 복구하여 정상적인 스크롤 동작 유지
    ```
    useEffect(() => {
        document.body.style.overflow = item ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [item]);
    ```
