# 연습을 위해 포크한 버전입니다.
 
오로지 학습의 목적으로 이미 완성된 다른 프로젝트를 포크한 버전이며, battlecruisers 팀은 원본 레포에 어떠한 기여도 하지 않았음을 밝힙니다.

원본 레포: https://github.com/Yanolja-MiniProject-10/Yanolja-clone-fe

# Yanoja Clone (FE & BE 협업)

<p align="center">
  <img src="public/favicon.ico"  width="100" height="100"/><br/>
  <a href="https://yanolja.vercel.app/">
    <img src="https://img.shields.io/badge/배포 링크-212125?style=for-the-badge&logoColor=white" alt="배포 링크"/>
  </a>
</p>

```
Test ID : test@yanolja.com
Test PW : 00000
```

<details>
<summary>a. 프로젝트 요구 사항</summary>

  [회원 회원가입 기능]

  - [ ] 회원은 회원가입을 할 수 있습니다.  
  - [ ] 기본 정보는 ID 역할로 이메일 주소와, 비밀번호, 이름 입니다.

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

## 🧑🏻‍💻 프로젝트 소개

Yanoja Clone은 `야놀자`의 숙박 예약 서비스 `Clone 프로젝트`입니다.

- 🧑🏻‍💻 개발 기간 : `2주, 23.11.20 (월) ~ 23.12.01 (금)`

<br/>

## 🧑🏻‍💻 Script

### Development Mode

```
$ git clone https://github.com/Yanolja-MiniProject-10/KDT_Y_FE_Mini-Project.git
$ npm ci
$ npm run dev
```

<br/>

## 🧑🏻‍💻 Stack

![mini-project](https://github.com/cs-yum/cs-yum-blog/assets/101972330/ea06a2f1-e5c6-4d9f-8b8a-7b4431eb5837)

<br/>

## 🧑🏻‍💻 Contributor
### Frontend
> @[신현진](https://github.com/xxxjinn) : 개별 상품 조회, 개별 상품 상세 (accommodation, cart)  
> @[남현준](https://github.com/applevalley) : 검색, 전체 상품 조회, 카테고리 별 상품 조회 (accommodation, category, region)  
> @[박은영](https://github.com/SKY-PEY) : 메인, 헤더, 네비바 (accommodation, category, region)  
> @[이연수](https://github.com/suehub) : 로그인, 회원가입, 마이페이지 (auth, user)  
> @[최지훈](https://github.com/JitHoon) : 장바구니, 주문하기, 주문 결과 확인, 주문 내역 확인 (cart, reservation)

### Backend
> @[김동준](https://github.com/Kim-Dong-Jun99) : accommodation, category, region  
> @[김종훈](https://github.com/whdgns5059) : cart, reservation  
> @[노재혁](https://github.com/NoJaeHyuk) : auth, user

<br/>

## 🧑🏻‍💻 주요 협업 링크

[🥇 Userflow 🥇](https://www.figma.com/file/nXHa5NqJdIhkRjZIQ3a2kq/mini-project?type=whiteboard&node-id=0%3A1&t=5zXImadm92h4kzvE-1)

[🥇 Figma 🥇](https://www.figma.com/file/xzhsFAOTqHb6HgtcopNyq8/miniProject?type=design&node-id=0%3A1&mode=design&t=3IQv0goIdhTfOUTv-1)

[🥇 Swagger 🥇](https://ybe-mini.site/swagger-ui/index.html)

## 🧑🏻‍💻 주요 기능 구현
<details>
<summary>신현진</summary>

- **숙소 상세 페이지**
    - 숙소 정보 (이름, 주소, 소개)를 보여줍니다.
    - 해당 숙소에 존재하는 객실의 목록과, 정보(객실 이름, 체크인/아웃 시간, 숙박 기간, 가격, 남은 객실의 수, 인원)를 보여줍니다.
    
    - 장바구니 버튼을 누르면 해당 객실이 장바구니에 담긴 뒤 toast가 나오고, 해당 toast를 통해 장바구니로 이동이 가능합니다.
    - 예약하기 버튼을 누르면 해당 객실에 대한 단일 상품 예약 페이지로 이동합니다.
    - 상세보기 버튼을 누르면 해당 객실의 상세 페이지로 이동합니다.
    
    - 사용자가 선택한 날짜, 인원에 따라 예약 마감/인원 초과에 관한 text를 띄워주고, 이에 따라 장바구니와 예약하기 버튼(text⇒예약 불가로 변경)이 비활성화됩니다.
    
- **객실 상세 페이지**
    - 객실 정보 (이름, 체크인/아웃 시간, 가격, 숙박 기간, 소개, 남은 객실 개수, 인원)를 보여줍니다.
    
    - 하단 바
        - 사용자가 선택한 날짜, 인원, 가격, 숙박 기간 정보를 보여줍니다.
        - 장바구니 버튼을 누르면 해당 객실이 장바구니에 담긴 뒤 toast가 나오고, toast를 통해 장바구니로 이동이 가능합니다.
        - 예약하기 버튼을 누르면 해당 객실에 대한 단일 상품 예약 페이지로 이동합니다.
    
- **404 페이지**
    - 사용자가 잘못된 url을 입력했을 때 이동하는 페이지입니다.
    - 버튼을 통해 메인으로 이동이 가능합니다.

</details>

<details>
<summary>남현준</summary>

- **공통 컴포넌트**
    - 숙박 날짜, 인원, 지역을 선택할 수 있는 nav 구현
        - 각각의 정보를 recoil로 관리해 날짜와 인원 정보를 필요로 하는 다른 페이지에서 가져와 사용할 수 있게 구현
        - react-datepicker 라이브러리 커스텀을 통한 숙박 기간 설정 구현
            - 현재 날짜로부터 최대 6개월, 연속 14일만 선택 가능하게 디자인

- **전체 상품 조회 페이지**
    - 전체 상품 목록 조회
    - 반응형 디자인 적용

- **검색 페이지**
    - state로 관리하는 inputValue가 변경될 때마다 API를 호출하지 않게 디바운싱 적용
    - 반응형 디자인 적용

- **카테고리별 상품 조회 페이지**
    - 반응형 디자인 적용

</details>

<details>
<summary>박은영</summary>

- **디자인**
    - 로딩 시에 스켈레톤을 먼저 보여주며, 반응형을 구현했다.

- **이벤트 캐러셀**
    - openAPI

- **카테고리**

- **모든 숙소 둘러보기**
    - 전체 숙소 조회 API

- **최근 본 상품의 연관 상품** 
    - 고객이 클릭해서 본 숙소에서 정보를 recoil에 저장하고 불러와 메인에 보여준다.
    - 로그인을 하지 않거나, 클릭한 상품이 없을 경우 보여주지 않는다.

- **지역 별 상품 추천** 
    - 모든지역API, 지역별숙소조회API
    - 지역에 따른 숙소를 분류해서 보여준다.

- **예약 숙소 랭킹** 
    - 랭킹 숙소 API
    - 예약 빈도에 따른 숙소를 불러온다

- **헤더** 
    - 페이지별로 헤더의 제목과 아이콘 등의 배열을 바꾼다

- **푸터**

- **내비바** 
    - 메인에서 보여주며, 예약내역 확인페이지, 마이페이지로 이동한다. 가운데의 야놀자 마크와 투탑버튼으로 화면 상단으로 이동한다.

</details>

<details>
<summary>이연수</summary>

- **회원가입**
    - 이름, 이메일, 비밀번호 유효성을 검사하고, 이메일 중복을 확인한 후 버튼이 활성화됐을 때 유저 정보를 생성합니다.
    
- **로그인**
    - 가입되어 있는 유저의 이메일과 비밀번호 계정으로 로그인을 합니다.
    - 이메일 또는 비밀번호가 존재하지 않을 경우 ‘이메일 또는 비밀번호가 일치하지 않습니다.’ 라는 메시지가 렌더링됩니다.

- **토큰 재발급**
    - API 호출 시 토큰이 만료됐을 때, 토큰을 재발급 받고 기존에 호출하려고 했던 API를 재호출합니다.
    
- **사용자 정보 수정**
    - 로그인한 유저의 이름을 변경합니다. 변경에 성공했을 경우 변경된 이름으로 바로 변경됩니다.

</details>

<details>
<summary>최지훈</summary>

- **장바구니 페이지**
    - 로그인한 유저만 접근이 가능합니다.
    - 장바구니에 담긴 상품이 없을 때와 있을 때 보여지는 UI를 분리하였습니다.
    - 장바구니에 상품이 담겨 있을 때, 전체 선택 기능, 선택 숙소 삭제, 개별 숙소 삭제 기능, 결제하기 버튼 기능을 활성화 합니다.
    - 사용자가 선택한 장바구니 상품에 따라서 총 상품 금액을 다르게 받아와 실시간으로 보여줍니다.
    - 사용자가 장바구니 숙소를 삭제하면 서버에 DELETE 요청을 하고 업데이트 된 서버 상태를 바로 화면에 보여줍니다.
    
- **주문하기 페이지**
    - 로그인한 유저만 접근이 가능합니다.
    - 예약 전 주의 사항을 사용자에게 보여줍니다.
    - 장바구니에서 선택한 상품 정보만 받아와 예약 대기 상품을 보여줍니다.
    - 사용자가 방문 수단을 필수로 선택하도록 합니다.
    - 사용자 정보를 GET 하여 예약자 정보를 보여줍니다.
    - 결제 전 확인 사항을 필수로 선택하도록 합니다.
    - 모든 체크 박스를 선택했을 때 결제하기 버튼이 활성화 됩니다.
    
- **주문 결과 확인 페이지**
    - 로그인한 유저만 접근이 가능합니다.
    - 주문 완료 메시지를 보여줍니다.
    - 사용자가 결제한 숙소 정보를 보여줍니다.

- **주문 내역 확인**
    - 로그인한 유저만 접근이 가능합니다.
    - 지금까지 예약한 전체 내역을 보여줍니다.
    - 결제 단위로 숙소를 묶어서 보여줍니다.
    - 예약 취소 버튼을 누르게 되면 예약 재확인 모달이 뜨며, 예약 취소를 하면 서버에 상태를 업데이트하고 해당 상태를 바로 사용자에게 실시간으로 보여줍니다.

</details>

## 🧑🏻‍💻 프로젝트 회고
<details>
<summary>신현진</summary>

- 백엔드 분들과 제대로 협업 하는 것은 이번 프로젝트가 처음이었습니다. 이전부터 소통의 중요성에 대한 말을 많이 들었어서 혹시 안좋은 상황이 생길까 걱정도 되었는데, 좋은 분들과 한 팀이 되어 서로 얼굴 붉히는 일 없이 배려하며 협업을 진행할 수 있었던 것에 대해 감사한 마음입니다.

- 부족한 실력을 가지고 있지만 조장을 맡게 되어서 부담이 되었었는데, 적지 않은 양의 피드백에 즉각적으로 대응을 해주시고, 잘 안풀리는 부분이 있을 때는 본인의 일처럼 다함께 고민해주시던 프론트엔드 팀원분들께도 너무 감사한 마음이 듭니다.

- 개인적으로 기간이 조금 더 길었다면 기한에 쫓기지 않고 조금 더 기능을 추가하거나 더욱 단단한 프로젝트를 완성시킬 수 있지 않았을까 하는 아쉬움이 정말 많이 남아서, 리팩토링 기간을 아깝게 보내지 않고 이어서 공부하는 시간을 가지고자 합니다.

- 먼 거리에 있던 가까운 거리에 있던 모두 현장에 나와 낮부터 밤까지 계속해서 함께 진행을 해서 피곤할 때도 있었지만 계속해서 해야 할 일이 생기고, 그 일을 해결해나가며 진심으로 재미있다는 생각이 들었고, 완벽하지는 않더라도 완성을 하고 얻게 된 성취감은 무엇과도 비교하지 못할 소중한 자산이라고 생각해 정말 의미 있는 시간을 보냈다고 말할 수 있을 것 같습니다.

</details>

<details>
<summary>남현준</summary>

- 백엔드와의 협업이 처음 이루어지는 프로젝트였기 때문에 2주라는 짧은 시간동안 성공적으로 기능을 구현하고 프로젝트를 잘 해낼 수 있을지 걱정이 많았는데, 운이 좋게도 너무나 좋은 분들을 만나 성공적으로 마무리할 수 있었던것같습니다! API 관련해서 문의드릴 때마다 항상 친절하게 알려주신 백엔드팀 동준님, 재혁님, 종훈님께 매우 감사드리며 항상 웃으면서 즐겁게 프로젝트 진행할 수 있게 이끌어주신 프런트팀 은영님, 연수님, 지훈님, 현진님께도 매우 감사드립니다! 정말 저희 팀 분위기 너무 훈훈하고 소통도 잘 되고 좋았어요… 할 수만 있다면 파이널까지 함께 하고 싶다고 생각했습니다!

- 검색, 상품 조회, 카테고리별 상품 조회 기능을 담당하게 되면서 2가지 고민이 생겼는데, 하나는 컴포넌트 구조를 어떻게 효율적으로 가져갈 것인지, 그리고 어떻게 API의 호출을 최소화할 것인지였습니다.
    - 공통 컴포넌트는 어려워
        - 상품 전체 조회와 카테고리별 상품 조회는 물론이고, 검색 기능 역시 사용자로부터 입력받은 특정 검색어를 전달 인자로 한 조회이기 때문에, 상품을 조회하고, 그 결과를 보여주는 하나의 공통된 컴포넌트가 중심이 될 것이라고 생각하였습니다.

        - 이 과정에서, 과연 어디까지가 공통된 기능이며 어느 부분을 각 컴포넌트별로 분리해야 할지 고민하는 과정에서 많은 시간을 사용하게 되었는데, 이전까지는 일단 구현하고 본다는 마음가짐이었지만 이번 프로젝트에서의 경험을 통해 큰 흐름에서의 구조에 대해 조금 더 깊게 생각하게 되는 계기가 되었습니다.

    - API 호출을 줄이자
        - 단순하게는 서버 비용을 줄이는 측면도 있겠지만, 프런트엔드 측면에서도 더 효율적인 코드를 작성하기 위해, 검색 페이지에서 사용자로부터 입력을 받을 때마다 조회하는 것이 아닌 디바운싱을 적용해 호출 횟수를 줄일 수 있었습니다.

        - 데이터 캐싱 등에 대한 기대를 가지고 리액트 쿼리를 사용하게 되었지만, 라이브러리에 대한 숙련도가 많이 부족해 기대한 것만큼 효율적으로 사용하지 못한 것이 많이 아쉬웠습니다.

</details>

<details>
<summary>박은영</summary>

- 처음 미니를 시작할 때 토이2와 사용하는 것들이 거의 똑같아서 크게 어려움이 없을 거라 생각했다.

- 시간을 널널하게 가지며 api 호출이나 리액트 최적화 등에 시간을 더 쓸거라 생각했지만, 이전과 달리 세세하게 신경 쓸 부분들이 많아 새로 도전하지 못한 부분들이 있어 아쉬움이 컸다. 

- 그래도 리팩토링 기간이 있으니 기능적인 부분과 최적화에 더 힘을 써 보고 싶다.

</details>

<details>
<summary>이연수</summary>

- 프론드, 백엔드 분들과 함께 프로젝트를 진행할 수 있어서 좋은 경험이었던 것 같습니다. 모든 분들이 다 열심히 즐겁게 참여하셔서 저도 즐겁게 진행할 수 있었습니다.

- 토큰을 관리하며는 로그인이 처음이라 여러움을 많이 겪었는데, 백엔드분들과 함께 구현하면서 많이 배울 수 있었습니다. 기간이 조금 더 길었다면 쿠키로 관리할 수 있도록 구현해봤을 텐데, 개인적으로 조금 아쉬웠습니다. 

- 마지막까지 모든 분들과 열심히 완성할 수 있어서 많이 배울 수 있었고 의미있는 시간이었습니다.

</details>

<details>
<summary>최지훈</summary>

- 첫 백엔드와의 협업을 통해 프로젝트 초반 데이터 구조 설계의 중요성을 깨닫게 되었습니다. 

- 단순 기능 구현을 우선시 하는 것 보다, 담당한 기능에 대해서 충분히 백엔드와 소통하고 다양한 예외 사항에대해서도 사전에 많은 시간을 들여 합의해야 프로젝트 완성도가 높아질 수 있다는 점을 알 수 있었습니다.

- 리코일과 리액트 쿼리를 활용하여 장바구니 구현을 해보면서, 클라이언트 및 서버 상태 관리를 하는데 많은 공부를 할 수 있었습니다.

- 공통 컴포넌트 작업을 하는데 어려움을 겪었습니다. 페이지마다 조금씩 다른 데이터 조건을 하나씩 추가를 하다보니 가독성이 많이 떨어졌고, 결국 다시 분리하여 작업하는 일이 많았습니다. 단순 UI로만 공통 컴포넌트를 묶는것이 아닌, 같은 UI여도 데이터가 어떻게 다른지 생각하여 작업해야겠다고 느꼈습니다. (리팩토링 과정에서 해당 문제점을 해결하였습니다.)

- 

</details>

## 🧑🏻‍💻 리팩토링

<details>
<summary>신현진</summary>

<br/>

 **(숙소 이미지 깜빡임 관련)**
    
    
  숙소 상세 페이지의 주소는 다음과 같이 구성되어 있습니다.
  `/accommodation/:id` (숙소 고유 id)

  <br/>
  
  #### ❓ 문제
  
  숙소 a의 상세 페이지에 들어갔다 나온 뒤 또 다른 숙소 b의 상세 페이지에 들어갔을 때,  숙소 a의 이미지가 잠깐 보였다가 b의 이미지로 바뀌면서 깜빡이는 것 처럼 보이는 현상이 있었습니다.
  
  <br/>

  #### 💡해결
  
  - getAccommodationInfoData 함수를 통해 숙소 상세 정보를 받아오는 API를 호출하고 있는 React-Query를 활용한 코드입니다.
  
  - **이전 방식**
      
      ```jsx
      export const useAccommodationInfoQuery = ({
        id,
        reservationStartDate,
        reservationEndDate,
        member,
      }: AccommodationInfoParams) => {
        const { startDate, endDate } = useRecoilValue(accommodationDateState);
        const { guest } = useRecoilValue(accommodationMemberState);
        return useQuery({
          queryKey: ["getAccommodationInfoData", startDate, endDate, guest],
          queryFn: () => getAccommodationInfoData({ id, reservationStartDate, reservationEndDate, member }),
        });
      };
      ```
      
      - 리팩토링 전에는 queryKey에 id를 작성하지 않았습니다.
   
        <br/>
        
  - **리팩토링 후**
      - queryKey 배열에 id를 추가로 작성해주었습니다.
      
      ```jsx
      //생략
        return useQuery({
          queryKey: ["getAccommodationInfoData", startDate, endDate, guest, id],
          queryFn: () => getAccommodationInfoData({ id, reservationStartDate, reservationEndDate, member }),
        });
      };
      ```
        
    <br/>
    <br/>

**(장바구니 연속 호출 방지)**
    
    
  로그인 된 상태일 때, 숙소 상세 페이지 혹은 방 상세 페이지에서 장바구니 버튼을 누르면 3초간 Toast가 뜨도록 구현했습니다.
  
  <br/>
  
  #### ❓ 문제
  
  Toast가 뜨는 3초 동안 사용자가 또 다시 장바구니 버튼을 누르게 되었을 때 Toast가 중복해서 뜨지는 않지만 장바구니에 상품이 추가되는 상황이 발생합니다.

  <br/>
  
  #### 💡해결
  
  - postCart 함수를 통해 장바구니에 상품을 추가하는 API를 호출하고 있는 React-Query를 활용한 코드입니다.

    <br/>
  
  - **리팩토링 후**
      - onSuccess 함수 내부에 setTimeout 메서드를 사용해서 Toast가 떠있는 시간 (3초) 동안에 버튼을 disabled 상태가 되도록 했습니다.
          
          ```jsx
          export const usePostCart = () => {
            const queryClient = useQueryClient();
          
            const navigation = useNavigate();
          
            const setIsButtonDisabled = useSetRecoilState(cartButtonState);
          
            return useMutation({
              mutationFn: ({ roomOptionId, numberOfGuest, reservationStartDate, reservationEndDate, stayDuration }: PostCart) => {
                return postCart(roomOptionId, numberOfGuest, reservationStartDate, reservationEndDate, stayDuration);
              },
              onSuccess: () => {
                setIsButtonDisabled(true);
                queryClient.invalidateQueries({ queryKey: ["fetchCarts"] });
                setTimeout(() => setIsButtonDisabled(false), 3000);
              },
              onError: () => {
                window.alert("장바구니에 상품을 추가하는 과정에서 문제가 발생했습니다. 메인화면으로 돌아갑니다.");
                navigation("/");
              },
            });
          };
          ```
          
      - disabled를 `Recoil` 을 사용한 이유는 실제 CartButton 컴포넌트에서 이를 통해 버튼의 상태를 변경시키기 위함입니다.
          
          ```jsx
          <style.CartButton onClick={() => !cartButtonDisabled && (user.accessToken ? handleAddCart() : setLogInModal(true))}>
              <style.CartIcon />
          </style.CartButton>
          ```
            

<br/>
<br/>

**(로그인 모달 버그)**
    
    
  로그인 되지 않은 상태일 때 장바구니 버튼/예약하기 버튼을 누르면 로그인이 필요하다는 모달이 나오게 됩니다.
  
  <br/>
  
  #### ❓ 문제
  
  로그인을 하지 않은 채로 장바구니 버튼을 누름 → 로그인 모달이 띄워짐 → 로그인 화면으로 이동 → 로그인 진행 → 숙소 상세 페이지 진입
  
  위 과정에서 
  
  - 로그인을 이미 한 상태임에도
  - 장바구니/예약하기 버튼을 누르지 않고 그저 상세 페이지로 진입했을 뿐임에도
  
  로그인 모달이 띄워지는 버그가 발생하였습니다.

  <br/>
  
  #### 💡해결
  
  - 숙소 상세 페이지에서 `Recoil` 을 사용해 전역으로 관리하는 userState를 가져와 사용합니다.
  - 이를 useEffect 내부에서 accessToken이 있을 시에 로그인 모달이 닫히도록 처리해주는 것으로 해결하였습니다.
  
  ```jsx
  const user = useRecoilValue(userState);
  
  useEffect(() => {
      //관련 없는 코드이므로 생략
      if (user.accessToken) {
        setLogInModal(false);
      }
    }, [/*생략*/, user.accessToken]);
  ```

</details>

<details>
<summary>남현준</summary>

### 캘린더 날짜 설정 / 인원 설정 관련 리팩토링

- 문제
    - 숙박 상품을 조회하는 경우, 캘린더 컴포넌트 내에서 시작-종료일을 설정하거나, 인원 컴포넌트 내에서 숙박 인원을 변동하려는 경우 오류가 발생하는 경우 발생
- 기존 코드를 통한 원인 파악
    
    ```jsx
    const setAccommodationDateState = useSetRecoilState(accommodationDateState);
    const handleDatePick = dates => {
        const [start, end] = dates;
        setAccommodationDateState({
          startDate: start,
          endDate: end,
        });
      };
    ...
    <DatePicker
      selected={startDate}
      onChange={handleDatePick}
      selectsRange
      shouldCloseOnSelect={false}
      startDate={startDate}
      endDate={endDate}
      locale={ko}
      monthsShown={6}
      inline
    />
    ```
    
    - 위와 같이 설정하였을 때, 사용자가 캘린더 안에서 날짜를 클릭할 때마다 react-datepicker 라이브러리의 DatePicker 컴포넌트에서 onChange 메서드가 동작하게 됩니다.
    - 이로 인해 시작 날짜의 변동이 발생하는데, 시작 날짜만 설정한 시점에서는 끝 날짜를 의미하는 endDate의 값이 null임에도 onChange 메서드에 전달 인자로 넘겨주고 있는 handleDatePick 함수 내에서 useSetRecoilState 훅으로 인해 recoil로 관리하는 날짜 상태의 값에 대한 변경이 이루어지게 되었습니다.
    - 컴포넌트가 리렌더링되며 새롭게 지정된 시작 날짜와 끝 날짜를 기준으로 상품 전체 조회 메서드를 호출할 때, 유효하지 않은 날짜 데이터(null)을 전달했기 때문에 오류가 발생하게 되었습니다.
- 개선
    - 날짜를 선택해도 useSetRecoilState 훅이 돌지 않게 개선
        
        ```jsx
        const handleDatePick = (dates: Array<Date | null>) => {
            const [start, end] = dates;
        
            setStartTime(start!);
            setEndTime(end!);
          };
        ...
          const handleDateChange = () => {
            setIsCalendarShow(prev => !prev);
            setAccommodationDateState({
              startDate: startTime,
              endDate: endTime,
            });
          };
        
        ...
        
        <DatePicker
          selected={startTime}
          onChange={handleDatePick}
          selectsRange
          shouldCloseOnSelect={false}
          startDate={startTime}
          endDate={endTime}
          minDate={new Date()}
          maxDate={handleMaxDate()}
          locale={ko}
          monthsShown={6}
          inline
        />
        <style.CalendarNav>
          <style.CalendarButton onClick={handleDateChange}>확인</style.CalendarButton>
        </style.CalendarNav>
        ```
        
        - 기존에는 날짜를 선택한 시점에(onChange 메서드가 동작할 시점) useSetRecoilState 훅이 동작하게 하였지만, 해당 훅이 동작하는 시점을 캘린더 컴포넌트 하단의 확인 버튼을 선택했을 때로 변경하였고, 이를 통해 상품 조회 API 호출시 올바른 날짜 데이터가 포함될 수 있도록 개선할 수 있었으며 기존 오류 역시 해결할 수 있었습니다.

</details>

<details>
<summary>박은영</summary>

### 메인홈&헤더 리팩토링
- CommonHeader에서 useMemo, memo 사용
-  MainHeader 장바구니 개수 불러오는 useQuery 수정
-> **장바구니 개수 버그** 해결, 홈 버튼, 뒤로가기 버튼으로 **이동 시 에러** 해결

에러 코드
```
//기존 하나의 useQuery 이용 시 enabled를 사용하지 않는 경우가 있어 이 부분에서 에러 발생

export const useFetchCarts = (isLoginModal?: boolean) =>
  useQuery({
    queryKey: ["fetchCarts"],
    queryFn: () => fetchCarts(),
    enabled: isLoginModal,
  });
```

에러 해결
```
//useQuery 분리 후 enabled 조건을 user로 변경

export const useFetchCarts = () =>
  useQuery({
    queryKey: ["fetchCarts"],
    queryFn: () => fetchCarts(),
  });

export const useFetchCartCount = (user: UserToken) =>
  useQuery({
    queryKey: ["fetchCarts"],
    queryFn: () => fetchCarts(),
    enabled: !!user.accessToken,
  });
```

</details>

<details>
<summary>이연수</summary>

#### 회원가입 버튼 연속 클릭 방지
* 문제 : 회원가입 버튼 연속 클릭 시 API 중복 호출되는 이슈
* 해결 : 버튼 클릭 여부를 확인할 수 있는 state를 선언하여 제출중/제출완료 상태를 체크해서 button ```disabled``` 설정
  ```tsx
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string, name: string) => {
      e.preventDefault();
  
      if (isSubmitting) return; // 이미 제출 중이면 반환
      setIsSubmitting(true); // 제출 중으로 상태 변경
  
      try {
        const data = await postSignUp(email, password, name);
        if (data.status === 201) {
          alert("회원가입되었습니다.");
          navigate("/login");
        } else {
          alert("회원가입에 실패하였습니다.");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false); // 처리 완료 시 제출 중 상태 변경
      }
    };
  ```
<br/>

#### Refresh Token 만료 시 재로그인 로직 추가
* 문제 : Access Token 만료 시 재발급받는 로직만 있어서 Refresh Token 만료 시 에러 발생 
* 해결 : Refresh Token 만료 시 로그인 페이지로 이동하게 해서 재로그인하는 로직 추가
<br />
  
#### 401, 405 에러 핸들링
* 문제 : Token을 사용하는 API 호출 시 에러 핸들링이 불안정해 중복 alert 창이 뜨던 이슈
* 해결 : API를 호출하는 컴포넌트 내에서 ```try catch``` 문으로 공통된 에러 처리 패턴 사용
  ```tsx
    if (error.response.status === 401 || error.response.status === 405) {
      setUser({
        accessToken: "",
        refreshToken: "",
      });
      window.alert("인증 오류가 발생했습니다. 로그인을 다시 해주세요.");
      navigate("/login");
    } else {
      window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
      navigate("/");
    }
  }
  ```
<br/>

#### 프로필 수정 버튼 ```submit``` 으로 변경
* 문제 : 프로필 수정 모달에서 엔터키 입력 시 변경되지 않고 모달만 닫히던 이슈
* 해결 : 프로필 수정 버튼 type을 submit으로 변경
<br/>

#### 공통 헤더를 가지는 instance 생성
* 문제 : 같은 헤더를 사용하는 API들의 중복되는 코드 발생
* 해결 : 공통 instance를 생성하여 사용
  ```tsx
  const authInstance = axios.create({
    baseURL: "https://ybe-mini.site/",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  });
  ```

</details>

<details>
<summary>최지훈</summary>

### 💡 문제
- 공통 컴포넌트 분리 작업에서의 의존성 파악 능력 부족  

- 여러 곳에서 함께 사용하는 컴포넌트가 시간이 갈수록 전달받는 속성과 조건문이 추가되면서 수정하기엔 몸집이 너무 커지는 현상을 경험하였습니다.  
    
### 💡 해결 방식
- 관련 아티클 정독 후 정리 및 공통 컴포넌트 생성

- FE 의존성에 대한 아티클을 정독하고 Blog에 해당 내용을 정리하였습니다. [blog 글 발행](https://cs-yum-blog.vercel.app/blog/Front-End%20%EC%9D%98%EC%A1%B4%EC%84%B1)  

- 공통 컴포넌트로 묶으려고 시도했던 각 페이지에서 요구하는 props와 상태, 함수, 컴포넌트, 타입을 하나씩 확인해 보았습니다.

- 공통 컴포넌트가 시간이 지날수록 수정하기 어려웠던 이유는 타입 의존성를 고려하지 않았기 때문이었습니다.

- 장바구니에서 페이지에서의 숙소 리스트와 예약 내역 확인 페이지에서 사용하는 숙소의 정보가 UI 측면에서는 동일했지만, 결제 전과 결제 후의 숙소 데이터 관리 방식이 달라지기 때문에 타입이 서로 달랐습니다.

    ```tsx
    // 장바구니 페이지에서의 숙소 리스트 타입

    export interface RoomOption {
    cartProductId: number;
    roomOptionId: number;
    name: string;
    thumbnailImage: string;
    capacity: number;
    pricePerNight: number;
    reservationStartDate: string;
    reservationEndDate: string;
    stayDuration: number;
    transportation?: string;
    totalPrice?: number;
    }
    ```

    ```tsx
    // 예약 내역 확인 페이지에서의 숙소 리스트 타입

    export interface PaymentRoomOption {
    paymentProductId: number;
    accommodationId: number;
    roomOptionId: number;
    name: string;
    thumbnailImage: string;
    capacity: number;
    pricePerNight: number;
    totalPrice: number;
    reservationStartDate: string;
    reservationEndDate: string;
    stayDuration: number;
    numberOfGuest: number;
    transportation: string;
    }
    ```

- 장바구니 페이지에서 RoomOption 타입을 사용하는 숙소 리스트의 경우 모두 공통 컴포넌트로 쉽게 묶을 수 있었습니다.

- 예약 내역 확인 페이지에서의 숙소 리스트 컴포넌트의 경우 독립적으로 관리하는 것으로 결정하였습니다.

</details>
