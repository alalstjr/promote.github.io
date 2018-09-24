<div class="box">
  <p>조건문과 연산자를 정리하고 공부하였습니다.</p>
  <p>무엇인지만 개념만알고있다면 실제로 사용할 수 있는 가 에대한</p>
  <p>'감' 을 잡기가 사실 많이 힘듭니다.</p>
  <p>저도 처음 개념만 알고있는 상태로 실무에서 작업기에는 많은 시간이걸려</p>
  <p>JavaScript 적응하고 여러가지 기능을 활용하기 시작했습니다.</p>
  <p>이번에는 이전에 만든 함수를 조건문과 연산자를 더해 사용자가 더 쉽게 사용할수 있게 활용할 수 있도록</p>
  <p>수정 보안해보도록 하겠습니다.</p>
</div>

<div class="box">
{% highlight javascript %}
// HTML
<div class="box">
  <div class="select">no</div>
</div>
<div class="box">
  <div class="select">element</div>
</div>
{% endhighlight %}
</div>

<div class="box">
  <div class="small-title">HTML 에서 element CLASS명이 box 안에 있는 CLASS명이 select 인 div 를 찾아라</div>
  <p>조건문과 함수를 사용하지 않고 구하는방법은</p>
{% highlight javascript %}
// 변수 box 안에 CLASS 명이 box인 것을찾고 그안에서 item메서드를 활용하여 두번째인 div를 선택하여 값을 할당합니다.
var box = document.getElementsByClassName('box').item(1);
// 해당 box 안에서 CLASS 명이 select 인것을 찾아 값을 할당합니다. 
var select = box.querySelector('.select');
// 찾은 값을 콘솔창에 띄웁니다.
console.log(select);
{% endhighlight %}
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-02-1.png" alt="자바스크립트 출력확인" />
</div>
  
</div>
