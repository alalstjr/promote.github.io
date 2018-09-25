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
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-25-1.png" alt="자바스크립트 출력확인" />
</div>
 <p>정상적으로 KeyBoardEvent 가 작동되는 것을 확인하실 수 있습니다.</p>
 <p>좀더 KeyBoardEvent 에 대해 알아보기 위해서 keyCode, code, key 도 추가해보도록 하겠습니다.</p>
</div>

<div class="box">
 {% highlight javascript %}
 window.addEventListener('keydown',function(e){
  console.log('이벤트 작동'+e.type, '=', e.keyCode, '|', e.code, '|', e.key);
 });
{% endhighlight %}
 <p>이제 화면에서 키보드의 자판을 클릭해보고 결과를 확인해 봅니다.</p>
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-25-2.png" alt="자바스크립트 출력확인" />
</div>
 <p>결과는 사용자가 무엇을 클릭했는지 해당의 keyCode 값 code 값 key 값을 전부 출력하는것을 확인할 수 있었습니다.</p>
</div>

<div class="box">
 <p>하지만 모든 브라우저가 같은 결과를 보여주는 것은 아닙니다.</p>
 <p>호환성 문제로 브라우저 마다 지원하는 것이 다르기 때문입니다.</p>
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-25-3.png" alt="자바스크립트 출력확인" />
</div>
 <p>익스플로러 에서는 code 값을 지원하지 않아 찾을 수 없다는 표시가 나옵니다.</p>
 <p>익스플로러 뿐만 아니라 파이어 폭스나 크롬의 code 값이 다르게 표시됩니다.</p>
 <p>code 경우는 아직 테스트 중인 상태라고 보시면 될꺼같습니다.</p>
 <p>그렇다면 저희가 사용해야할 값은 사람이 읽기 어려운 숫자로 된 keyCode 이지만</p>
 <p>모든 브라우저에서 호환되는 keyCode 를 활용하시면 됩니다.</p>
 <p>keyCode 를 활용하여 간단한 KeyBoard 표시 박스를 만들어 보겠습니다.</p>
</div>

<div class="box">
{% highlight javascript %}
// HTML
<div id="box">
  <div class="body">
    키보드를 클릭해보세요.
  </div>
  <div>키보드 화살표 Left, Right, Up 버튼을 클릭하세요.</div>
</div>
 
// CSS
#box {
  width:100%;
  max-width:600px;
  margin:0 auto;
  padding:5% 0;
  text-align:center;
}
#box .body {
  width:200px;
  height:200px;
  margin:0 auto;
  background-color:pink;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom:10px;
}
{% endhighlight %}
<p>간단하게 눈으로 결과를 확인할 수 있게 만들어주고 자바스크립트 기능을 넣어 확인해 보도록 하겠습니다.</p>
</div>

<div class="box">
{% highlight javascript %}
window.addEventListener('keydown',function(e){
  switch(e.keyCode){
    case 32:
      console.log('스페이스바');
      break;
    case 37:
      console.log('왼쪽');
      break;
    case 39:
      console.log('오른쪽');
  }
});
{% endhighlight %}
 <p>간단하게 만든후에 방향키 오른쪽 왼쪽 스페이스바 를 클릭해 보고 결과를 확인해 봅니다.</p>
 <div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-25-4.png" alt="자바스크립트 출력확인" />
</div>
 <p>결과는 조건문에 맞춰서 해당키를 눌렀을경우에만 결과값이 출력되는것을 확인하실 수 있습니다.</p>
</div>
