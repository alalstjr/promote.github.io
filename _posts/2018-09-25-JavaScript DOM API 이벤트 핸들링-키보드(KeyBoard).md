 <div class="box">
  <div class="small-title">JavaScript DOM API 이벤트 핸들링-키보드(KeyBoard)</div>
  <p>우리 프로그래밍 개발자들은 모든이들의 편의성과 접근성을 고려 해야하기 때문에</p>
  <p>마우스로 작동하는 Click 이벤트뿐만 아니라 KeyBoard 도 생각해서 프로그래밍 을 해야합니다.</p>
 </div>
 
 <div class="box">
  <p>KeyBoardEvent 에는 keydown, keypress, keyup 세가지가 존재합니다.</p>
  <p>이벤트 발생 순서는 keydown → keypress → keyup 순으로 나열 됩니다.</p>
  <br/>
  <p>키가 처음 눌러지면 keydown 이벤트가 발생합니다.</p>
  <p>keydown이 발생하는 조건 버튼은</p>
  <p>keydown - 영문, 숫자, space, enter, 한글, tab, caps, lock, shift, ctrl, alt(option), command, arrow, F1 ~ F12</p>
  <br/>
  <p>keydown 이벤트 이후 keypress 이벤트가 발생합니다.</p>
  <p>keypress - 영문, 숫자, space, enter</p>
  <br/>
  <p>키를 놓으면 keyup 이벤트가 발생합니다.</p>
  <p>keyup - tab, caps lock발생 X</p>
 </div>
 
 <div class="box">
  <p>KeyBoardEvent 실행 방법에는 구형 과 신형 방법이 있습니다.</p>
  <p>예전 방식인 구형은 window.onkeydown = function(){}; 으로 이벤트를 조작하지만</p>
  <p>신형 방식은 window.addEventListener('keydown', function(){}); 으로 이벤트를 실행 조작합니다.</p>
 </div>

<div class="box">
 <p>window.addEventListener('keydown', function(){}); 의 함수 전달받는 인자값에는 event, evt, e 세개를 받을 수 있습니다.</p>
 <p>ex) function(event), function(evt), function(e) 이런식으로 인자값을 받을 수 있습니다.</p>
 <p>간단한 KeyBoardEvent 를 구현해 보고 확인해 보도록 하겠습니다.</p>
{% highlight javascript %}
 window.addEventListener('keydown',function(e){
  console.log('이벤트 작동'+e.type);
 });
{% endhighlight %}
</div>
