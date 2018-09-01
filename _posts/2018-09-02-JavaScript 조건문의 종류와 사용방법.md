JavaScript의 조건문

<div class="pro-txt">
조건문의 참고 자료는 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#%EC%A1%B0%EA%B1%B4%EB%AC%B8" target="_blank">MDN 의 조건문</a> 입니다.
조건문은 특정 조건이 참인 경우에 실행하는 명령의 집합입니다. JavaScript는 두 가지 조건문을 지원합니다: if...else and switch.
</div>

글로 감을 잡고 바로 예제를보며 확인해보는게 빠를꺼 같습니다.

{% highlight javascript %}
  var state = true;
  
  if( state == true ){
    console.log("state는 참 입니다.");
  } else {
    console.log("state는 거짓 입니다.");
  }
  
  // 결과는 state가 true 라는 논리형 데이터를 가지고있기 때문에 "state는 참 입니다." 를 출력합니다.
  > state는 참 입니다.
  
  // 만약 state 가 false 이면 true 가 아니기 때문에 else 로 이동하여 "state는 거짓 입니다." 를 출력합니다.
  var state = false;
  
  > state는 거짓 입니다.
{% endhighlight %}
