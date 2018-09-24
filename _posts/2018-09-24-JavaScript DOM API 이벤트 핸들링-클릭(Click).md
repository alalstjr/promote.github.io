<div class="box">
	<div class="small-title">DOM API 클릭(Click) 이벤트 핸드링</div>
	<p>가장 많이 사용하는 클릭(Click) 이벤트에 대해 정리하겠습니다.</p>
	<p>클릭(Click) 이벤트는 마우스로 작동하는 이벤트이지만 동시에 접근성도 준수 가능한 이벤트 입니다.</p>
	<p>이제부터는 선택자 함수는 생략하고 바로 $('selector') 로 바로 넘어가겠습니다.</p>
{% highlight javascript %}
  // HTML
  <a href="#" class="event">
	<img src="{{ site.baseurl }}/static/img/post/2018-09-16-3.png" alt="자바스크립트 연습"/>
  </a>
	
  // CSS
  .event {
  	display: block;
  	width: 100%;
  	max-width: 300px;
  	position: absolute;
  	left: 50%;
  	top: 50%;
  	transform: translate(-50%,-50%);
  	text-decoration: none;
  	color: #333;
  }
  .event img {
  	width: 300px;
  }
  .event:active {
  	background-color: #fff;
  	color:aqua;
  	border: 1px solid aqua;
  }
{% endhighlight %}

<p>우선 Click 의 대상을 해당 클레스명이 event 를 찾아 변수에 할당합니다.</p>
{% highlight javascript %}
  // 우선 event 의 변수 초기값을 설정합니다.
  var event = null;

  function click() {
	// 클레스명이 event 인 엘리먼트를 이벤트 변수에 담아줍니다.
	event = $('.event');
	// 클릭 이벤트를 만들어 toggle_event 의 함수를 연결시켜 줍니다.
	event.addEventListener('click',toggle_event);
  }
  // 클릭 함수를 실행합니다.
  click();

  // toggle_event 전달 인자값 e 를 넣습니다. 여러가지 속성을 파악하기 필요한 값입니다.
  function toggle_event(e) {
	console.log('클릭')
  }
{% endhighlight %}
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-16-4.png" alt="자바스크립트 출력확인" />
</div>
<p>클레스 명이 event 인 click 을 클릭했을때 정상적으로 click() 함수가 실행되며 동시에 연결된</p>
<p>함수 toggle_event() 가 실행되어 console.log를 정상적으로 출력하는것을 확인할 수 있었습니다.</p>
</div>
<div class="box">
	<div class="small-title">클릭한 대상의 속성(img,url..) 값 가져오기</div>
	<p>클릭한 대상의 이미지 속성을 가져와야 합니다.</p>
	<p>속성을 가져오기 위해서는 target 이벤트를 활용합니다.</p>
{% highlight javascript %}
// 우선 event 의 변수 초기값을 설정합니다.
var event = null;

function click() {
  // 클레스명이 event 인 엘리먼트를 이벤트 변수에 담아줍니다.
  event = $('.event');
  // 클릭 이벤트를 만들어 toggle_event 의 함수를 연결시켜 줍니다.
  event.addEventListener('click',toggle_event);
}
// 클릭 함수를 실행합니다.
click();

function toggle_event(e) {
  e.preventDefault();
  // element의 속성은 e 의 target이벤트 안에 있습니다.
  var target = e.target;
  // element 속성의 src 를 target을 활용해 변경합니다.
  target.src = '{{ site.baseurl }}/static/img/post/2018-09-16-2.png';
}
{% endhighlight %}
</div>
