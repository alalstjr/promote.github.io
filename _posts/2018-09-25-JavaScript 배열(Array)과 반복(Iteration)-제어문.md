<div class="box">
  <div class="pro-txt">
    <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Loops_and_iteration" target="_balnk">MDN - 루프와 반복</a>
  </div>
  <div class="small-title">JavaScript 배열(Array)과 반복(Iteration)</div>
  <p>무언가를 반복적으로 시행할때 빠르고 간편하게 방법을 제공합니다.</p>
  <p>반복문이 필요한 이유는</p>
  <p>반복 처리가 필요한 일을 사람 대신 프로그래밍으로 처리해 줌으로서</p>
  <p>불필요한 작업을 줄여줍니다.</p>
  <p>간단한 예제로 수많은 상품 리스트가 존재합니다.</p>
  <p>수많은 상품의 정보를 바꿔줘야 하는데 하나하나 바꾸기에는 많은 작업이 소요됩니다.</p>
  <p>하지만 반복문을 활용하여 한번만 수정하면 나머지가 수정되도록 합니다.</p>
</div>

<div class="box">
  <div class="small-title">반복 while문</div>
  <p>while문 을 확인하기 전에 배열 하나를 생성하여</p>
  <p>그 배열 내부의 갯수를 하나하나 삭제 하는 반복문을 들어 보겠습니다.</p>
  <p>배열 생성에는 New Array 를 활용하여 만들 수 있지만 권장하지는 않습니다.</p>
{% highlight javascript %}
  var array_list = ['사과','배','포도','딸기','바나나'];
{% endhighlight %}
  <p>배열 array_list 에서 while문을 활용하여 하나하나 지워보도록 하겠습니다.</p>
</div>

<div class="box">
  <p>while() {} 조건이 참이면 코드 블럭을 실행한다.</p>
  <p>조건이 맞으면 실행하라 이는 조건문 if 문과 비슷해 보입니다.</p>
  <p>하지만 차이점이 있습니다.</p>
  <p>if문은 단 한번 실행하지만</p>
  <p>while문은 조건이 참일경우 계속 실행합니다.</p>
  <p>while문은 조건을 거짓으로 변경하는 중단점이 필요합니다.</p>
  <p>만약 중단점이 존재하지 않는다면 무한 반복에 빠지게 됩니다.</p>
{% highlight javascript %}
while( array_list.length ) {
  array_list.pop();
  // 여기서 pop() 는 배열의 맨 끝부분을 제거하는 배열 메서드입니다.
  console.log(array_list);
}
{% endhighlight %}
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-25-6.png" alt="자바스크립트 출력확인" />
</div>
  <p>결과를 확인해 보면 첫번째 반복 조건문이 array_list.length 가 5 참 이므로</p>
  <p>array_list.pop() 메서드를 실행하여 맨뒤 배열을 삭제 합니다.</p>
  <p>다시 조건문을 확인하여 array_list.length 값이 4 참 이므로</p>
  <p>다시한번 pop 메서드를 실행합니다.</p>
  <p>이렇게 array_list.length 값이 0 거짓 이 될때까지 실행 반복한후</p>
  <p>반복문을 빠져 나가는것을 확인할 수 있습니다.</p>
</div>

<div class="box">
  <div class="small-title">제어문</div>
  <p>continue 문</p>
  <p>반복(순환) 중 조건이 충족할 경우, 조건 확인 영역(초기영역)으로 이동</p>
  <p>break 문</p>
  <p>반복(순환) 중 조건이 충족할 경우, 실행 종료 (반복문 종료)</p>
  <p>label 문</p>
  <p>참조 가능한 식별자로 continue, break에 의해 식별</p>
</div>

<div class="box">
  <div class="small-title">제어문 예제</div>
  <p>while 문 증가 식을 간단하게 만들어 보겠습니다.</p>
  <div class="small-title">continue문</div>
{% highlight javascript %}
var while_if = true;
var count = 0;
var limit_count = 8;
 
while(while_if) {
  // 선 증가 연산자로 1씩 증가
  ++count;
  // 조건이 count 가 3 or 7 일경우에는 반복문을 초기로 돌립니다.
  if( count === 3 || count === 7 ) {
    continue;
  }
  console.log(count);
  if( count >= limit_count ) {
    while_if = false;
  }
}
{% endhighlight %}
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-25-7.png" alt="자바스크립트 출력확인" />
</div>
<p>while 문 중간 조건문 count 가 3 과 7 이 해당되어 있는 부분은 continue 건너뛰어서</p>
<p>출력 되지 않는 것을 확인할 수 있습니다.</p>
</div>

<div class="box">
<div class="small-title">break문</div>  
{% highlight javascript %}
var while_if = true;
var count = 0;
var limit_count = 8;
 
while(while_if) {
  // 선 증가 연산자로 1씩 증가
  ++count;
  // 선 증가가 있다면 후 증가도 있습니다.
  // 후 증가는 count++ 로 표현합니다.
  
  // 조건이 count 가 3 or 7 일경우에는 반복문을 초기로 돌립니다.
  if( count === 3 || count === 7 ) {
    continue;
  }
  if( count === 5 ) {
   break;
  }
  console.log(count);
  if( count >= limit_count ) {
    while_if = false;
  }
}
{% endhighlight %}
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-09-25-8.png" alt="자바스크립트 출력확인" />
</div>
<p>count 값이 5 인 조건에 해당되어 제어문 break 으로 인해 반복문을 빠져 나오는것을</p>
<p>확인하실 수 있습니다.</p>
</div>

<div class="box">
  <div class="small-title">label 문</div>
{% highlight javascript %}
var while_if = true;
var count = 0;
var innerCount = 0;
var limit_count = 8;

loopCount:
while(while_if) {
  ++count;
  if( count === 3 || count === 7 ) {
    continue;
  }
  // 반복문 안에 반복문 하나 더 만듭니다.
  while(true) {
    // innerCount를 후 증가 시킵니다.
    innerCount++;
    if( innerCount === limit_count / 2 ) {
      break loopCount;
    }
    console.log('innerCount:',innerCount);
  }
  if( count === 5 ) {
   break;
  }
  console.log('count:',count);
  if( count >= limit_count ) {
    while_if = false;
  }
}
{% endhighlight %}
</div>
