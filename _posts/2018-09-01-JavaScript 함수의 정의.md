오늘의  JavaScript 함수에 관한 참고 자료는 
<div class="pro-txt">
  <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%ED%95%A8%EC%88%98" target="_balnk">MDN 함수의 정의</a> 입니다.
</div>

우선 함수에 대에 알아보겠습니다.

<div class="pro-txt">
사전적의 의미의 함수 
  <a href="https://ko.wikipedia.org/wiki/%ED%95%A8%EC%88%98_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)" target="_balnk"> - 위키백과</a>
함수는 절차(procedure) 일을 하는 데 거쳐야 하는 일정한 차례와 방법
함수는 대부분의 프로그래밍 언어에서 지원하는 기능으로, 하나의 큰 프로그램을 여러 부분으로 나누어주기 때문에 같은 함수를 여러 상황에서 여러 차례 호출할 수 있으며 일부분을 수정하기 쉽다는 장점을 가진다.
</div>

개인적으로 가장 핵심인 부분만 가져왔습니다.
더 필요하신게 있으시면 직접 들어가셔서 확인하셔도 좋습니다.

함수에 대한 쉬운 예제를 하나 들면
전봇대를 수리하는 기사 아저씨가 있습니다.
기사아저씨는 전봇대 맨위에 위치한 전선을 수리를 해야합니다.
우선 드라이버를 하나집고 올라갑니다. 그리고 드라이버로 망가진 전선을 해체합니다.
그리고 새로운 전선을 합쳐야하는데 다른 장비는 전부 아래에 있습니다.
내려갔다 올라갔다 하기에는 너무 많은 시간이 소모되기에 기사 아저씨는 
주머니(함수)에 필요한 장비를 전부 집어넣고 올라가 필요할때마다 
주머니(함수) 안에있는 기능을 꺼내서 사용했습니다.

이처럼 함수는 무언가를 담고 필요할때마다 사용할수 있게 도와주는 주머니 박스입니다.

<div class="small-title">기본으로 내장되어 있는 함수</div>
직접 정의하지 않고 사용할수 있는 함수 모음 입니다.
window.parseInt()
window.parseFloat()
window.alert()
window.confirm()
window.prompt()
window 는 전역 객체(global object)는 생략이 가능합니다. 
이미 window는 전체적으로 존재하기 때문입니다. 
그리고 이를 객체가 함수를 가지고 있다해서 메소드 라고 부릅니다. 

1. window.parseInt() 문자열을 정수로 변환하는 메소드입니다.
{% highlight javascript %}
 var num = "100문자";
 // num 변수에는 "100문자" 이라는 문자가 있습니다.
 // window.parseInt() 를 활용하여 숫자로 변환합니다.
 
 var num = window.parseInt(num, 10);
 num
 > 100
{% endhighlight %}

2. window.parseFloat() 문자열을 부동 소수점 숫자로 변환하는 메소드입니다.
{% highlight javascript %}
 var num = "100.123문자";
 // num 변수에는 "100.123문자" 이라는 문자가 있습니다.
 // window.parseInt() 를 활용하여 숫자로 변환합니다.
 
 var num = window.parseFloat(num, 10);
 num
 > 100.123
{% endhighlight %}

3. window.alert() 메서드는 지정한 내용과 확인(OK) 버튼이 있는 경고 대화 상자를 띄웁니다.
{% highlight javascript %}
 window.alert("안녕하세요 Min Seock 블로그입니다.")
{% endhighlight %}
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-01-1.png" alt="자바스크립트 출력확인" />
</div>

4. window.confirm() 메소드는 옵션인 메세지와 확인과 취소 버튼으로 구성된 모달창을 화면에 보여줍니다. 
{% highlight javascript %}
 window.confirm("안녕하세요 Min Seock 블로그입니다.")
{% endhighlight %}
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-01-2.png" alt="자바스크립트 출력확인" />
</div>
모달창의 확인, 취소 선택에 따라 저장되는 값도 다릅니다. 
확인을 선택할경우 true 값이 저장되고
취소를 선택할 경우 false 값이 저장됩니다.
이 저장된값을 활용하면 선택지 관련 함수를 만들때 많이 유용합니다.

5. window.prompt() 사용자가 텍스트를 입력할 수 있도록 안내하는 메시지가 적힌 대화 상자를 띄웁니다.
{% highlight javascript %}
 window.prompt("안녕하세요 Min Seock 블로그입니다.")
{% endhighlight %}
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-01-3.png" alt="자바스크립트 출력확인" />
</div>
prompt() 메소드는 변수에 담아 사용할경우 사용자가 입력한 값을 저장하여 사용할 수 있습니다.

지금까지는 미리 정의되어 있는 함수를 알아보았습니다.

이제는 사용자가 직접 정의할 수 있는 함수에 대에 알아보겠습니다.

사용자가 직접 함수를 정의할때는 우선 함수(function)을 선언해 주어야합니다.
function name(){
   함수의 내용
}
이를 Code Block 이라 부릅니다.
함수를 만들고 불러올때는 함수의 name 을 불러주면 됩니다.
단 name() 뒤에 ()라는 가로가 필수로 들어가야 합니다.

바로 예제를 들어보겠습니다.
{% highlight javascript %}
 function list(){
  console.log("첫번째");
  console.log("두번째");
  console.log("세번째");
 }
 
 list()
 > 첫번째
 > 두번째
 > 세번째
{% endhighlight %}
