<h2 class="title">Javascript의 특징 및 소개</h2>
<div class="box">
  <p>같이 Javascript를 알아보기전 참고할만한 책이 있으면 공부하기 쉬울꺼같습니다.</p>
  <p>필자는 처음 (비전공자로서) 접한 Javascript의 책은 Do it Javascript & 제이쿼리 라는 책으로 공부하였습니다.</p>
  <p>하지만 지금 Javascript의 특징 및 소개 글을 보고있는 모두가 같은 책을 가지고 있지않으니</p>
  <p>다른방법으로 같은 내용의 <strong>Javascript의 교육 문서를 볼수있는 자료</strong>가 필요했습니다.</p>
  <p>바로 책이아닌 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript" target="_blank">MDN 웹 문서</a> 입니다.</p>
  <p>Mozilla Developer Network는 개발자 및 기술 작가 커뮤니티가 관리하고 HTML5 , JavaScript , CSS , Web API , Node.js , WebExtensions 및        MathML 과 같은 다양한 주제에 대해 많은 문서를 호스팅하는 개발자를위한 리소스입니다 .</p>
</div>

<div class="box">
  Javascript는 많은 내용을 가지고있는 언어입니다.
  HTML 이나 CSS 같은 표현하는 것이 아니기때문에 많은 논리를 필요로하는 프로그래밍 언어입니다.
</div>
<div class="box">
  <div class="small-title">Javascript 는 (JS) 라 불리며 인터프리터형 또는 JIT-컴파일형 프로그래밍 입니다.</div>
  <p>컴파일형 이라는것은 (해석기, 번역) 라는 의미로 한번 내용을 번역하면 빠르게 해당내용을 다시 읽어올수 있습니다.</p>
  <p>인터프리터형이라는것은 (통역) 이라는 의미로 내용을 듣고 해석하고 상대방이 알아들을 수 있는 언어로 다시 바꾸어 보여줍니다.</p>
  <p>상대적으로 컴파일형 보다는 인터프리터형이 느린형태를 가집니다.</p>
</div>
<div class="box">
  <div class="small-title"> Javascript 는 웹브라우저에서 작동하고 있습니다.</div>
  {% highlight javascript %} var asd = asd; {% endhighlight %}
  
  <p>사용자가 서버를통해 자료를 요청하면 서버에서 전달받은 내용(HTML , CSS , Javacript) 을 해석을 해야합니다.</p>
  <p>Javacript 는 우선 사용자가 작성한 Javacript 프로그래밍을 보고 1차적으로 기계어로 번역하여 운영체제에 전송합니다.</p>
  <p>운영체제에서 보내서 돌아온 응답신호를 다시 Javacript는 인간언어에 가깝게 2차적으로 번역을하여 웹상에 보여줍니다.</p>
  <p>그러다보니 컴파일형언어 보다는 느린 언어라는것을 알아야 합니다.</p>
</div>
<div class="box">
  <div class="small-title">주로 웹 페이지를 위한 스크립팅 언어로 알려져 있습니다.</div>
  <p>최근에는 클라이언트사이드가 아니라 서버사이드 언어로 Javascript 가 사용되고 있습니다. 바로 유명한 <a href="https://ko.wikipedia.org/wiki/Node.js">Node.js</a> 입니다. Javascript 를 알고있다면 미래에 백엔드 분야로 진출할때 보다 쉽게 접근할 수 있습니다.)</p>
</div>
<div class="box">
  <div class="small-title">Javascript 는 프로토타입 기반의 다중 패러다임 스크립팅 언어입니다.</div>
  <p>프로토타입 기반이란 </p>
  <p>
    <q> 객체지향 프로그래밍의 한 형태의 갈래로 클래스가 없고, 클래스 기반 언어에서 상속을 사용하는 것과는 다르게, 객체를 원형(프로토타입)으로 하여 복제의 과정을 통하여 객체의 동작 방식을 다시 사용할 수 있다. </q> 라는 내용을 가지고 있습니다. </p>
  <p>지금봐서는 이해하기 어려운 말들이 많습니다. </p>
  <p>일단 이렇다 하다는 것만 알고 다음으로 넘어가겠습니다.</p>
  <p>더 자세한것은 좀더 Javascript 를 알았을때 해석해 보도록 하겠습니다.</p>
  <p>다중 패러다임 스크립팅 언어 는 개발에 필요한 방향성을 한개가 아닌 여러개를 가지고 있다는 뜻을 가지고 있습니다.</p>
</div>
<div class="box">
  <div class="small-title">Javascript 는 역동적 입니다.</div>
  웹 브라우저에서 정적으로 되어있는 것을 사용자가 요구사항을 요청한것을 받고 동적으로 바꾸어 변환해주는 동적인 언어입니다. 
</div>
<div class="box">
  <div class="small-title">Javascript 는 객체지향형 언어입니다.</div>
  <p>
    <a href="https://namu.wiki/w/%EA%B0%9D%EC%B2%B4%20%EC%A7%80%ED%96%A5%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D" >나무위키 : 프로그램을 어떻게 설계해야 하는지에 대한 일종의 개념이자 방법론.</a>
  </p>
  <p>간단하게 설명하자면 객체를 중심으로 하는 언어입니다.</p>
  <p>나 자신 를 중심으로 팔다리를 움직이고 생각하고 말을 합니다.</p>
  <p>나 자신을 중심으로 프로그래밍 하는것을 객체지향형 언어입니다.</p>
  <p>그리고 Javascript 는 명령형 및 선언형(가령 함수형 프로그래밍) 스타일을 지원합니다.</p>
</div>
<div class="box">
  <div class="small-title">웹 브라우저에도 표준이 되는 언어가 존재한다.</div>
  <p>웹 브라우저는 한개가 아닌 여러개가 존재합니다.</p>
  <p>그중에서도 표준이 필요합니다. </p>
  <p>그래서 ECMA를 통해서 웹브라우저에 적합한언어라는 표준을 받은것이 JavaScript 언어 입니다. </p>
  <p>JavaScript의 표준의 명칭은 ECMAScript 입니다.</p>
  <p>최근에는 ECMAScript 6 혹은 ES6 라고 부릅니다. </p>
  <p>실무에서 많이 사용되는 버전은 ECMAScript 5.1 버전입니다.</p>
  <p>차세대 버전으로는 ECMAScript 6 이 있습니다. 매 1주년 마다 업그레이드 되고 있습니다.</p>
</div>
<div class="box">
  <div class="small-title">JavaScript 와 Java 프로그래밍 언어 와는 완전 다른 언어이다. </div>
  <p>많은 사람들이 혼동하는 부분이 있습니다.</p>
  <p>JavaScript 를 줄여서 말한게 Java 아니야??</p>
  <p>네 저도 처음에 둘이 똑같은 내용의 언어인줄 알았습니다. (줄여서 말한 이름인줄 알았습니다..)</p>
  <p>하지만 프로그래밍을 배우면서 둘은 완전 다르다는것을 알았습니다.</p>
  <p>간단하게 생각하면 물개 , 개(강아지) 둘은 비슷할 수는 있어도 완전 다릅니다. </p>
  <p>이름만 비슷할뿐 사용방법이나 문법체계가 전혀 다릅니다. 꼭 기억하도록 합니다.</p>
  <p>(마케팅을 목적으로 Java 라는 이름을 사용했다는 이야기가 있다..)</p>
</div>
