<div class="box">
  <p>JavaScript 공부 못한지 3일.. 요즘 회사에 일이 너무 많아 공부할 시간이 너무 부족하다.</p>
  <p>어서 JavaScript 를 더 공부해서 막히지 않고 작업하면 공부시간이 더 늘어날탠데..</p>
  <p>이번엔 외부 작업 스크립트 & 프론트 작업 수정이라 더욱 힘든 작업중이다..</p>
  <p>반조애 - http://www.vanzoe.co.kr/ 5년전 작업물이라 그런지 코드도 예전 코드이며 html은 표준이 되어 있지않는다.</p>
  <p>다행이 일부분 수정이라 그리 어려운 부분은 없지만 코드 분석에 어려움을 많이 느낀다..</p>
</div>

<div class="box">
  <div class="small-title">
    다른 조건문의 switch 문
  </div>

  <div class="pro-txt">
    <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/switch" target="_balnk"> - MDN switch문</a>
    <p>Swicth문은 프로그램이 표현식을 평가하고 값을 조건과 비교합니다. 만약 값이 일치한다면, 프로그램은 각 조건의 하위 문장을 실행합니다.</p>
  </div>
  <p>바로 예제를 통해 알아보도록 하겠습니다.</p>
</div>

<div class="box">
{% highlight javascript %}
  var buy = '아이스크림';
  
  if( buy === '과자' ) {
    console.log('과자를 구매합니다.');
  } else if ( buy === '음료수' ) {
    console.log('음료수를 구매합니다.');
  } else if ( buy === '아이스크림' ) {
    console.log('아이스크림를 구매합니다.');
  } else if (
    buy === '치약' ||
    buy === '칫솔'
  ) {
    console.log('치약 이나 칫솔 구매시 1+1행사도 둘다 드립니다.');
  } else {
     console.log('고객님이 찾으시는 물건이 없습니다.');
  }
{% endhighlight %}

<p>아이스 크림을 사려고 편의점에 들어갑니다.<p/>
<p>아이스 크림을 변수 buy 라고 생각하고 if문 조건문으로 물건을 찾아보겠습니다.</p>
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-06-1.png" alt="자바스크립트 출력확인" />
</div>
<p>이렇게 결과가 '아이스크림' 이라는 값을 출력하는 과정에</p>
<p>2번의 if문을 걸쳐서 찾습니다.</p>
<p>첫번째로 과자를 찾고 값이 다르기때문에 다음으로 넘어가</p>
<p>두번째로 음료수를 찾고 값이 다르기때문에 다름으로 넘어가</p>
<p>세번째 아이스크립을 찾고 값이 동일 하기 때문에 값을 출력합니다.</p>
<br/>
<p>만약에 buy 값이 젤리 라면 조건문에는 존재하지 않기때문에</p>
<p>처음부터 마지막(else)까지 조건문을 찾으며 내려가야 합니다.</p>
<br/>
<p>이럴경우 필요없는 행동이 많이 들어가게 됩니다.</p>
<p>찾는 값은 하나인데 전부 하나하나 비교를 해야 하기때문입니다.</p>
<br/>
<p>조건이 많을 경우 많은 행동을 할 필요없이 원하는 값을 찾는것이 switch 문입니다.</p>
</div>

<div class="box">
  <div class="small-title">switch 문</div>
{% highlight javascript %}
  buy = '치약';
	
  switch ( buy ) {
	  case '과자':
		  console.log('과자를 구매합니다.')
	  case '음료수':
		  console.log('음료수를 구매합니다.');
	  case '아이스크림':
		  console.log('아이스크림를 구매합니다.');
	  case '칫솔':
	  case '치약':
		  console.log('치약 이나 칫솔 구매시 1+1행사도 둘다 드립니다.');
	  default:
		  console.log('고객님이 찾으시는 물건이 없습니다.');
  }
{% endhighlight %}
</div>
