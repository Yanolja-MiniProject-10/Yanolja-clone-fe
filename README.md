# Yanoja Clone (FE & BE 협업)

<p align="center">
  <img src="public/favicon.ico"  width="150" height="150"/><br/>
  <a href="/">
    <img src="https://img.shields.io/badge/Yanolja Clone-red?style=for-the-badge&logoColor=white" alt="Yanolja Clone"/>
  </a>
  <a href="https://github.com/Yanolja-MiniProject-10/KDT_Y_FE_Mini-Project">
    <img src="https://img.shields.io/badge/배포 repository-212125?style=for-the-badge&logoColor=white" alt="배포 레포"/>
  </a>
  <br/>
</p>

```
Test ID : test@yanolja.com
Test PW : 00000
```

<br/>

<details>
<summary>[요구 사항 체크]</summary>

  <details>
  <summary>a. 프로젝트 요구 사항</summary>

  [회원 회원가입 기능]

  ✅  회원은 회원가입을 할 수 있습니다.
  ❎  기본 정보는 ID 역할로 이메일 주소와, 비밀번호, 이름 입니다.

  [회원 로그인 기능]

  - [ ]  이메일과 비밀번호로 로그인할 수 있습니다.
  - [ ]  회원 정보를 저장해둔 데이터베이스를 검색하여 해당 사용자가 유효한 사용자 인지 판단합니다.
  - [ ]  상품 조회(전체, 개별), 회원 가입은 로그인 없이 사용 가능합니다. 이 외 기능은 로그인이 필요합니다.

  [전체 상품 목록 조회]

  - [ ]  데이터베이스에서 전체 상품 목록을 가져옵니다.
  - [ ]  이미지, 상품명, 상품가격을 기본으로 출력합니다.
  - [ ]  재고에 따라 품절일 경우, 출력 여부에 대해선 팀별로 결정합니다.
  - [ ]  (옵션) 카테고리를 분류하여, 상품을 출력할 수도 있습니다.
  - [ ]  한 페이지에 출력되는 상품 개수는 팀별로 정하여, 페이징을 수행합니다.

  [개별 상품 조회]

  - [ ]  전체 상품 목록에서 특정 상품 이미지를 클릭하면, 해당 상품에 대한 상세 정보를 상품에 저장해 둔 데이터베이스에서 가져옵니다.
  - [ ]  이미지, 상품명, 상품가격, 상품 상세 소개 (1줄 이상)을 기본으로 출력합니다.
  - [ ]  재고에 따라 품절일 경우, 화면 구성은 팀별로 결정합니다.

  [상품 옵션 선택]

  - [ ]  상품 상세 소개 페이지에서 상품 옵션을 선택할 수 있습니다.
  - [ ]  날짜, 숙박 인원은 기본으로 포함됩니다.
  - [ ]  이 외 룸 형태 등 필요한 요소는 팀별로 기획합니다.

  [장바구니 담기]

  - [ ]  상품 옵션을 선택한 후, 장바구니 담기 버튼을 클릭하면 선택한 상품이 장바구니에 담깁니다.

  [장바구니 보기]

  - [ ]  장바구니에 담긴 상품 데이터 (이미지, 상품명, 옵션 등)에 따른 상품별 구매 금액, 전체 주문 합계 금액 등을 화면에 출력합니다.
  - [ ]  체크 박스를 통해 결제할 상품을 선택/제외할 수도 있습니다.
  - [ ]  주문하기 버튼을 통해 주문/결제 화면으로 이동합니다.

  [주문하기]
  
  - [ ]  장바구니에서 주문하기 버튼 또는 개별 상품 조회 페이지에서 주문하기 버튼을 누르면 전환되는 페이지입니다.
  - [ ]  만 14세 이상 이용 동의를 체크 박스로 입력 받으면, 화면 최하단에 결제하기 버튼이 활성화됩니다.

  [결제하기]

  - [ ]  주문 페이지에서 결제하기 버튼을 클릭하면, 실제 결제 로직 및 절차 없이 상품을 바로
  주문한 것으로 처리합니다.
  - [ ]  주문을 저장하는 데이터베이스에 주문 정보를 저장합니다.

  [주문 결과 확인]

  - [ ]  결제를 성공적으로 처리하면, 주문한 상품(들)에 대한 주문 결과를 출력해줍니다.

  [(옵션) 주문 내역 확인]
  
  - [ ]  별도 주문 내역 페이지에 여태 주문한 모든 이력을 출력해줍니다.
  </details>

  <details>
  <summary>b. 기능적 요구 사항</summary>
  [공통]

  - [ ]  모든 단계에서 협업을 기반으로 프로젝트를 진행합니다.
  - [ ]  각 기능을 구현하기 위해 HTTP Request Body / Response Body 에 전달할 데이터는 프론트엔드와 백엔드의 협업을 통해 결정합니다.
  - [ ]  모든 단계에서 **테스트를 수행**합니다.

  [프론트엔드]

  - [ ]  사용자 인터페이스 예시를 참고하여, 화면을 구성합니다.
  - [ ]  API 명세에 따라 백엔드에 전달된 JSON 데이터를 필요에 따라 정돈하여 화면에 출력합니다.
  - [ ]  프론트엔드 단에서 **유효성 검사**를 수행해야하는 지점을 고려합니다.
  - [ ]  React.js 또는 Next.js를 기반으로 구현하며, 컴포넌트 단위로 구조를 설계합니다.
  - [ ]  (옵션) 페이징 처리 시, **무한 스크롤**을 고려합니다.

  </details>

  <details>
  <summary>c. 평가 항목 분석</summary>
  [프로젝트 관리]

  - [ ]  일정을 설정하고 업무를 효과적으로 분배하고 관리했는가?
  - [ ]  일정 계획 및 관리, 업무 분배, 이슈 관리 등 프로젝트 관리에 충실히 노력했는가?

  [설계]

  - [ ]  사용자 경험(UX)을 고려한 사용자 친화적인 인터페이스(UI)로 사용에 어색함 또는 불편함이 없는가?
  - [ ]  API 문서에 모든 기능을 포함하고, Request/Response 에 대해 명확히 설명하였는가?
  - [ ]  데이터베이스 테이블 간 연관관계를 적절히 설정하였는가?

  [기능]

  - [ ]  Spring Security 의 인증/인가를 활용하여 회원가입/로그인 기능을 구현하였는가?
  - [ ]  프론트엔드에서 필요한 유효성 검사가 1 개 이상 고려되었는가?
  - [ ]  이메일, 비밀번호, 이름을 포함한 정보로 회원 가입 기능이 구현되었는가?
  - [ ]  이메일과 비밀번호로 로그인 기능이 구현되었는가?
  - [ ]  숙박 상품 전체 조회 기능이 정상적으로 구현되었는가?
  - [ ]  숙박 상품 개별 조회 기능이 정상적으로 구현되었는가?
  - [ ]  장바구니(담기, 보기) 기능이 정상적으로 구동되는가?
  - [ ]  주문하기 기능이 정상적으로 구동되는가?
  - [ ]  결제하기 기능이 정상적으로 구동되는가?
  - [ ]  결제하기가 성공할 경우, 주문 결과를 확인할 수 있는가?

  [프로젝트 완성도]

  - [ ]  Open API 의 데이터를 검증하고 적절하게 활용하였는가?
  - [ ]  화면 컴포넌트 단위는 적절한가?
  - [ ]  코드 품질과 안정성을 고려하여 테스트 케이스를 작성하고 테스트를 수행했는가?

  [협업 및 커뮤니케이션]

  - [ ]  협업 도구와 팀원들 간의 원활한 커뮤니케이션을 얼마나 잘 이끌어 나갔는가?
  - [ ]  팀원들과의 원활한 커뮤니케이션과 정보 공유를 수행했는가?
  </details>

</details>

<br/>

## 🧑🏻‍💻 프로젝트 소개

Front-End와 Back-End와의 협업을 통해 완성한 숙박 예약 API 서비스 `Yanolja Clone` 프로젝트입니다.

## 🧑🏻‍💻 Contributor (각자 확인 필요)
### FE
> @[신현진](https://github.com/xxxjinn) : 개별 상품 조회, 개별 상품 상세 (accommodation, cart)  
> @[남현준](https://github.com/applevalley) : 검색, 전체 상품 조회, 카테고리 별 상품 조회 (accommodation, category, region)  
> @[박은영](https://github.com/SKY-PEY) : 메인, 헤더, 네비바 (accommodation, category, region)  
> @[이연수](https://github.com/suehub) : 로그인, 회원가입, 마이페이지 (auth, user)  
> @[최지훈](https://github.com/JitHoon) : 장바구니, 주문하기, 주문 결과 확인, 주문 내역 확인 (cart, reservation)

### BE
> @[김동준](https://github.com/Kim-Dong-Jun99) : accommodation, category, region  
> @[김종훈](https://github.com/whdgns5059) : cart, reservation  
> @[노재혁](https://github.com/NoJaeHyuk) : auth, user

## 🧑🏻‍💻 Stack (수정 필요)

![Stack](https://github.com/MOVIEJOJO7/cat-talk/assets/101972330/68bb2746-7f5f-40da-9cd6-3a57cb4c89fc)

## 🧑🏻‍💻 디자인 (수정 필요)

### Userflow

## 🧑🏻‍💻 주요 기능 구현

## 🧑🏻‍💻 Script

### Development Mode

```
$ git clone https://github.com/Yanolja-MiniProject-10/KDT_Y_FE_Mini-Project.git
$ npm ci
$ npm run dev
```

## 🧑🏻‍💻 팀 소개

<table>
  <tr>
    <td align="center" width="150px">
      <img src="https://avatars.githubusercontent.com/u/102955516?v=4" alt="신현진 프로필" />
    </td>
    <td align="center" width="150px">
      <img src="https://avatars.githubusercontent.com/u/62874043?v=4" alt="남현준 프로필" />
    </td>
    <td align="center" width="150px">
      <img src="https://avatars.githubusercontent.com/u/139188760?v=4" alt="박은영 프로필" />
    </td>
    <td align="center" width="150px">
      <img src="https://avatars.githubusercontent.com/u/111065848?v=4" alt="이연수 프로필" />
    </td>
    <td align="center" width="150px">
      <img src="https://avatars.githubusercontent.com/u/101972330?v=4" alt="최지훈 프로필" />
    </td>
  </tr>
  <tr> 
    <td align="center">
      <a href="https://github.com/xxxjinn" target="_blank">
        신현진<br />
        Frontend
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/applevalley" target="_blank">
        남현준<br />
        Frontend
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SKY-PEY" target="_blank">
        박은영<br />
        Frontend
      </a>
    </td>    
    <td align="center">
      <a href="https://github.com/suehub" target="_blank">
        이연수<br />
        Frontend
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/JitHoon" target="_blank">
        최지훈<br />
        Frontend
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td align="center" width="150px">
      <img src="https://avatars.githubusercontent.com/u/95599193?v=4" alt="김동준 프로필" />
    </td>
    <td align="center" width="150px">
      <img src="https://avatars.githubusercontent.com/u/40512982?v=4" alt="김종훈 프로필" />
    </td>
    <td align="center" width="150px">
      <img src="https://avatars.githubusercontent.com/u/32382839?v=4" alt="노재혁 프로필" />
  </tr>
  <tr> 
    <td align="center">
      <a href="https://github.com/Kim-Dong-Jun99" target="_blank">
        김동준<br />
        BackEnd
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/whdgns5059" target="_blank">
        김종훈<br />
        BackEnd
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/NoJaeHyuk" target="_blank">
        노재혁<br />
        BackEnd
      </a>
    </td>
  </tr>
</table>

## 🧑🏻‍💻 Convention
### 파일 관리

### Commit
- Feat: 기능 구현
- Fix: 수정
- Refactor: 개선
- Design: 스타일
- Command: 주석
- Doc: 문서, 이슈 템플릿
- Chore: npm 설치
- Delete: 파일 삭제

### Issues, PR, Merge

### Style
<a href="https://www.figma.com/file/nXHa5NqJdIhkRjZIQ3a2kq/mini-project?type=whiteboard&node-id=0%3A1&t=5zXImadm92h4kzvE-1">🥇 유저플로우 🥇</a>
<br/>
<a href="https://www.figma.com/file/xzhsFAOTqHb6HgtcopNyq8/miniProject?type=design&node-id=0%3A1&mode=design&t=3IQv0goIdhTfOUTv-1">🥇 피그마 🥇</a>

### Branch 전략

### API

### 프로젝트 회고

## 🧑🏻‍💻 개발 기간 : `2주, 23.11.20 (월) ~ 23.12.01 (금)`
