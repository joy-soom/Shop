# Soom Shop
침구를 판매 하는 쇼핑몰 사이트
<br><br>
## Start Project
```
git clone https://github.com/soominpark9/Shop.git
cd online
npm i
npm start 
```
## Link
https://select-shop-site.netlify.app/<br>
<br>
## 페이지 설명
### 메인 페이지
- more 버튼 클릭시 데이터를 추가로 보여줌 <br><br>
![2023-05-20 10;12;52](https://github.com/joy-soom/Shop/assets/110961576/82a6ee61-1db4-49af-95c0-93a5150cc9e2)

### 디테일 페이지
- useEffect를 활용하여 2초간 모달창 실행
- useParams를 사용하여 배열이 바뀌더라도 클릭한 상품의 id값의 페이지로 이동
- 담기 클릭시 상품의 id값이 Cart에 있을 경우 alert 띄우도록 구현
- table 태그를 사용하여 상세페이지 레이아웃 구현 및 상세 내용 데이터 바인딩<br><br>
![shop2](https://github.com/joy-soom/Shop/assets/110961576/fcf7627b-631f-4558-a920-20e7c9397ae5)

### 장바구니
- redux-toolkit를 사용하여 구매수량 컨트롤 함수 생성
- 설정한 구매 가능한 상품 개수를 벗어나려고 할시 alert창
- count (- or +) 클릭시 price와 Cart Total금액이 자동으로 업데이트<br><br>
![shop5](https://github.com/joy-soom/Shop/assets/110961576/e7216534-1175-485b-9bab-707a9872e484)

## Stack
- React
- Redux-toolkit
- SCSS

## Directory Structure
```
online/ # react app
.gitignore
```
## 💡 성장 경험

1. useState를 통해 state를 관리하는 방법을 배우고 props를 자식요소들에게 전달 해 주는 흐름에 익숙해 지게 되었다.
2. redux-toolkit를 통해 props 없이 state를 공유 하는 방식을 활용 할 수 있게 되었다.
3. sass를 활용하여 재활용성이 높은 css 코드를 구조화 하여 생성 해 볼 수 있었다.
