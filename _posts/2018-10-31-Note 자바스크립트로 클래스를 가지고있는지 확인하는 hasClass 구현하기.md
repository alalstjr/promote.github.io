<div class="box">
  <p>정말 오랜만에 블로그 글을 쓰는거같다.</p>
  <p>일도 일이지만 막상 인강을보고 책을보고 블로그에 노트식으로 올릴려니 시간도 많이들고</p>
  <p>(귀찮음이 90%를 차지하지만) 인강 내용을 정리해서 블로그에 쓰기가 만만치않게 어렵다는것을 다시한번 느끼고있다.</p>
  <p>그래도 나만의 개발 && 공부 발자취를 남기고 모르는게 있다면 바로 블로그에서 찾아 참고할 수 있도록 오늘 노트를 남깁니다.</p>
</div>

<div class="box">
  <p>그래서 오늘 작성할 Note 기록은 인강과 책으로 배웠던 지식을 활용하여 제이쿼리의 함수 hasClass 를 구현해 볼것입니다.</p>  
  <div class="pro-txt">
    <a href="https://api.jquery.com/hasclass/" target="_balnk">JQuery - hasClass</a>
    <p>여기서 hasClass 함수란 클래스명이 일치하는 것이 있을 경우 true 를 반환합니다.</p>
  </div>
  <p>여러개의 li 중에서 3번째만 active 라는 클래스 가지고있습니다.</p>
  <p>li를 차례차례 클릭하여 active 클래스를 가지고있는 li만 반응할수 있도록 해야합니다.</p>
</div>

<div class="box">
{% highlight javascript %}
<ol>
  <li>첫번째 클릭을 해주세요!</li>
  <li>두번째 클릭을 해주세요!</li>
  <li class="active">세번째 클릭을 해주세요!</li>
  <li>네번째 클릭을 해주세요!</li>
  <li>다섯번째 클릭을 해주세요!</li>
  <li>여섯번째 클릭을 해주세요!</li>
  <li>일곱번째 클릭을 해주세요!</li>
</ol>

<script>
  // _hc 라는 독립적인 구역을 만들었습니다.
  var _hc = [];

  _hc.listLi = document.getElementsByTagName('li');
  console.log(_hc.listLi)
</script>
{% endhighlight %}
<p>우선 전역을 오염시키지 않기 위해서 변수 _hc 배열을 생성하여 독립적인 클레스를 생성하였습니다.</p>
<p>다음 행동을 하기위해서 필요한 li 리스트를 _hc.listLi 변수에 담았습니다.</p>
<p>console.log 로 잘 담겨져 있는지 확인해 보겠습니다.</p>
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-10-31-1.png" alt="자바스크립트 출력확인" />
</div>
<p>li 리스트를 전부 가져오는 것을 확인하였습니다.</p>
<p>저는 일곱개의 li 리스트중에서 세번째인 active 클래스만 가져올것입니다.</p>
</div>

<div class="box">
  <p>다음은 li를 클릭했을때 클릭한 대상을 참조하여야 합니다.</p>
  <p>클릭한 li의 상태를 체크하여 원하는 결과를 얻어야 하기 때문입니다.</p>
  <p>클릭한 li의 값을 확인하기 위해서 사용 할 것은 this 와 addEventListener 입니다.</p>
  
{% highlight javascript %}
// _hc 라는 독립적인 구역을 만들었습니다.
var _hc 		 = [];

_hc.listLi 		 = document.getElementsByTagName('li');
_hc.listFunction = function(){
	console.log(this);
}

// 클릭했을때 반복문을 돌면서 getElementsByTagName에서 클릭한 대상만 체크합니다.
for(var i = 0; i < _hc.listLi.length; ++i){
	_hc.listLi[i].addEventListener('click',_hc.listFunction);
}
{% endhighlight %}
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-10-31-2.png" alt="자바스크립트 출력확인" />
</div>
<p>클릭한 대상만 this로 잘 가져오는 것을 확인할 수 있습니다.</p>
<p>[의문] 왜 for문을 사용하여 addEventListener 를 사용했을까? 라는 생각이 듭니다.</p>
<p>그냥 _hc.addEventListener('click',_hc.listFunction); 이렇게 코드를 작성하면</p>
<p>클릭한 document.getElementsByTagName('li') 를 가져오는거 아닌가? 라는 생각이 들었습니다.</p>
<p>반복문 for문 제거한후 실행해 보겠습니다.</p>
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-10-31-3.png" alt="자바스크립트 출력확인" />
</div>
<p>결과는 typeError인  _hc.listLi.addEventListener is not a function 오류를 출력합니다.</p>
<p>getElementsByTagName 메소드 는 단일 요소가 아닌 노드의 콜렉션을 리턴합니다.</p>
<p>하나가 아닌 여러개의 배열로 값을 리턴한다 라고도 생각하면 될꺼같습니다.</p>
<p>addEventListener를 할당하려면 해당 컬렉션을 반복하고 이벤트를 각 DOM 요소에 할당해야합니다.</p>
<p>그래서 for문을 사용하여 getElementsByTagName('li') 각각에 addEventListener를 할당하여 이벤트를 담아줬습니다.</p>
</div>

<div class="box">
  <p>다음 가장 중요한 클릭한 대상이 가지고 있는 class list 를 가져오는 것입니다.</p>
  <p>DOM이 가지고있는 class list 를 확인하려면 classList 프로퍼티 를 활용하는것입니다.</p>
<div class="pro-txt">
  <a href="https://developer.mozilla.org/ko/docs/Web/API/Element/classList" target="_balnk">MDN - classList란</a>
  <p>Element.classList 는 요소의 클래스 속성의 컬렉션인 활성 DOMTokenList 를 반환하는 읽기전용 프로퍼티이다.</p>
</div>
{% highlight javascript %}
// _hc 라는 독립적인 구역을 만들었습니다.
var _hc 		 = [];

_hc.listLi 		 = document.getElementsByTagName('li');
_hc.listFunction = function(){
	console.log(this.classList)
}

for(var i = 0; i < _hc.listLi.length; ++i){
	_hc.listLi[i].addEventListener('click',_hc.listFunction);
}	
{% endhighlight %}
<p>실행하여 결과를 확인해보면</p>
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-10-31-4.png" alt="자바스크립트 출력확인" />
</div>
<p>클릭한 대상의 DOMTokenList 를 확인할 수 있습니다.</p>
<p>DOMTokenList에서 세번째 li 만 active 클레스를 배열로 가지고 있습니다.</p>
<p>이제 클릭한 대상이 active 클레스를 가지고 있는지 없는지 구분하는 단계입니다.</p>
</div>

<div class="box">
{% highlight javascript %}
// _hc 라는 독립적인 구역을 만들었습니다.
var _hc 		 = [];

_hc.listLi 		 = document.getElementsByTagName('li');
_hc.listFunction = function(){
	if( this.classList == 'active' ) console.log('active 클래스를 가지고 있습니다.');
	else console.log('클래스가 없습니다.');
}

for(var i = 0; i < _hc.listLi.length; ++i){
	_hc.listLi[i].addEventListener('click',_hc.listFunction);
}	
{% endhighlight %}
</div>
