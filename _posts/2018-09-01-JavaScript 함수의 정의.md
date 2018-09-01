오늘의  JavaScript 함수에 관한 참고 자료는 
<div class="pro-txt">
  <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%ED%95%A8%EC%88%98" target="_balnk">MDN 함수의 정의</a> 입니다.
</div>

우선 함수에 대에 알아보겠습니다.

<div class="pro-txt">
사전적의 의미의 함수 
  <a href="https://ko.wikipedia.org/wiki/%ED%95%A8%EC%88%98_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)" target="_balnk"> - 위키백과</a>
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
