<div class="box">
  <div class="pro-txt">
    오늘 공부하는 이벤트의 작동과 메서드의 종류 사용방법
    <a href="https://developer.mozilla.org/ko/docs/Web/API/Event" target="_balnk">MDN - 이벤트의 핸들러</a>
    에서 확인하실 수 있습니다.
  </div>
  <div class="small-title">이벤트 핸들링(Event Handling)</div>
  <p>이벤트 속성은 on + EventType : click, onmouseover ... 등등</p>
  <p>이벤트 속성에 연결되어있는 함수 : 이벤트 객체(Event Objext)를 매개변수로 전달 받습니다.</p>
</div>
<div class="box">
{% highlight javascript %}
// CSS
#box {
    width: 100%;
    max-width: 400px;
    background-color: antiquewhite;
    padding: 20px;
    border-radius: 7px;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    position: absolute;
}
#box input {
    width: 30%;
    border: 1px solid #ddd;
    height: 30px;
    padding-left: 10px;
}
#box output {
    width: 20%;
    text-align: center;
    display: inline-block;
    color: #fff;
    background-color: #333;
    vertical-align: middle;
    height: 30px;
    line-height: 30px;
}

// HTML
<form oninput="sum()">
	<div id="box">
		<input value="4" aria-label="첫번째" type="number"> 
		+ 
		<input value="6" aria-label="두번째" type="number">
		=
		<output aria-label="결과값">10</output>
	</div>
</form> 
{% endhighlight %}

<p>아직은 자바스크립트 이벤트가 존재하지않아 결과값이 변하지 않습니다.</p>
<p>이제 이 작은 계산기에 이벤트를 부여하여 작동할 수 있게 해보도록 하겠습니다.</p>
</div>
<div class="box">
{% highlight javascript %}
	function $(selector, context) {
	  if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
	  if (context && context.nodeType !== document.ELEMENT_NODE) { context = el(String(context)); }
	  if (!context) { context = document; }
	  return context.querySelector(selector);
	}
	
	function c(object){
		console.log(object);
	}
	
	function sum() {
    // 변수 val_1 과 val_2 에 각각의 input 값을 할당합니다.
    // *주의 Number 를 해줘야합니다. 안할경우 value 값을 string 으로 인식하여 46 이 출력됩니다
		var val_1 = Number($('input[aria-label="첫번째"]').value);
		var val_2 = Number($('input[aria-label="두번째"]').value);
		var output = $('output[aria-label="결과값"]');
		var result = val_1 + val_2;
		output.value = result;

		c(val_1);
		c(val_2);
		c(result);
	}
{% endhighlight %}
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-16-1.png" alt="자바스크립트 출력확인" />
</div>
<p>이벤트를 핸들링 하기위해서 계산식을 함수 sum 에 담았습니다.</p>
<p>이벤트를 담은 sum 함수를 실행시키기 위해서는</p>
<p>첫번째 요소에 이벤트 속성을 넣어주는것 입니다.</p>
<p>두번째는 대상을 찾아서 설정을 해주는 것 입니다.</p>
<div class="small-title">요소에 직접 이벤트 속성을 넣어 실행하기.</div>
<p>'form' 요소에 oninput="sum()" 을 추가합니다.</p>
<p>사용자가 input 값을 변경 할때마다 sum() 함수를 실행하여 값을 출력합니다.</p>
<div class="pro-txt">
  <a href="https://codepen.io/anon/pen/ZMMXBE" target="_balnk">결과 확인하기</a>
</div>

<div class="small-title">대상을 직접 찾아서 설정해 실행하기</div>
{% highlight javascript %}
// HTML
<form>
	<div id="box">
		<input value="4" aria-label="첫번째" type="number"> 
		+ 
		<input value="6" aria-label="두번째" type="number">
		=
		<output aria-label="결과값">10</output>
	</div>
</form> 

// JavaScript
	function $(selector, context) {
	  if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
	  if (context && context.nodeType !== document.ELEMENT_NODE) { context = el(String(context)); }
	  if (!context) { context = document; }
	  return context.querySelector(selector);
	}
	
	function c(object){
		console.log(object);
	}
	
	function sum() {
    // 변수 val_1 과 val_2 에 각각의 input 값을 할당합니다.
    // *주의 Number 를 해줘야합니다. 안할경우 value 값을 string 으로 인식하여 46 이 출력됩니다
		var val_1 = Number($('input[aria-label="첫번째"]').value);
		var val_2 = Number($('input[aria-label="두번째"]').value);
		var output = $('output[aria-label="결과값"]');
		var result = val_1 + val_2;
		output.value = result;
	}
  
	var form = $('form');
	form.oninput = sum;
{% endhighlight %}

<div class="pro-txt">
  <a href="https://codepen.io/anon/pen/OooxME" target="_balnk">결과 확인하기</a>
</div>
</div>
