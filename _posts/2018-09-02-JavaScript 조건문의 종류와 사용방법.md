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
  } else if ( state == "다른 조건" ) {
    console.log("state는 다른 조건입니다.");
  } else {
    console.log("state는 거짓 입니다.");
  }
  
  // 결과는 state가 true 라는 논리형 데이터를 가지고있기 때문에 "state는 참 입니다." 를 출력합니다.
  > state는 참 입니다.
  
  // 만약 state 가 "다른 조건" 이면 "state는 다른 조건입니다." 출력하고
  var state = "다른 조건";
  > state는 다른 조건입니다.
  
  // 만약 state 가 false 이면 true 도 아니고 "다른 조건" 도 아니기 때문에 else 로 이동하여 "state는 거짓 입니다." 를 출력합니다.
  var state = false;
  > state는 거짓 입니다.
  
{% endhighlight %}

참 or 거짓 이라는 조건을 활용하면 여러가지 갈림길이 생기고 선택지도 많이 생깁니다. 
이를 활용해서 웹페이지에서 많은 기능을 구현할 수 있죠.

전에 만들었던 함수를 조건문을 추가하여 직접만든 함수의 기능을 더욱 향상 시켜 보겠습니다.
{% highlight javascript %}
 function $(selector) {
   return document.querySelectorAll(selector);
 }
 
 console.log($('#box'));
{% endhighlight %}

위에있는 코드에 조건문을 추가해 보도록 하겠습니다.

{% highlight javascript %}
 function $(selector, context) {
   if( !context ){  // 앞에 ! 가 붙을 경우 context가 존재하지않을경우 (undefined) 부정을 나타냅니다.
   // (context == undefined) 이런형태의 부정형태도 됩니다. 다만 최대한 짧게 줄이는 것이 프로그래머의 역할이니 짧게 쓰도록 하겠습니다.
     context = document;   
   }
   
   return context.querySelectorAll(selector);
 }
 
 console.log($('.title',$('#box_two')));
{% endhighlight %}

기존 코드와 변화된 점과 추가된 기능을 설명드리자면

function $(selector) 처음엔 인자값을 하나 selector 만 가져왔습니다. 
그러다 보니 사용자가 원하는 값이 아닌 맨위에 존재하는 selector 만 가져옵니다.
그래서 함수에 사용자가 원하는 값 내부에 있는 selector 을 가져왔으면 좋겠으니
조건문을 추가하여 
if( !context ){ context 가 존재하지 않을경우 document 를 추가하고 document 내부(전체)에서 selector를 찾고
context 가 존재할경우 인자값을 넣어 context내부에서 사용자가 원하는 값을 찾게 도와줍니다.

제가 쓴글로는 이해가 어려울 수 있으니 바로 예제를 보여드리겠습니다.

{% highlight javascript %}
  //HTML
  <div id="box">
    <div class="title">안녕하세요. MIN SEOK 블로그입니다.</div>
    <span>댓글로 응원의 한마디 작성해주세요!</span>
  </div>
  <div id="box_two">
    <div class="title">이쪽 타이틀을 불러오고 싶어요.</div>
  </div>
{% endhighlight %} 

사용자는 id가 box_two 인 div 안에있는 class명이 title 인 div 를 가져오고 싶어합니다.

사용자는 기존에 만든 사용자 함수 를 이용해 불러왔습니다.
{% highlight javascript %}
 function $(selector) {
   return document.querySelectorAll(selector);
 }
 console.log($('.title'));
 > <div class="title">안녕하세요. MIN SEOK 블로그입니다.</div>
{% endhighlight %}

하지만 값은 첫번째 title 을 불러옵니다. 
그 이유는 매개변수 return값이 document 로 되어있어서 전체를 찾아 불러왔기 때문입니다.
document 맨위부터 차례로 내려가다보니 box_two 보다 위에있는 box 내부의 title을 불러왔기 때문입니다.
이 문제를 해결하기 위해 조건문을 추가하여 사용자가 직접 지정해주도록 해주었습니다.

{% highlight javascript %}
 function $(selector, context) {
   if( !context ){
     context = document;   
   }
   
   return context.querySelectorAll(selector);
 }
 
 console.log($('.title',$('#box_two')));
 
 > <div class="title">이쪽 타이틀을 불러오고 싶어요.</div> 
{% endhighlight %}

$('.title',$('#box_two')) #box_two 내부에있는 .title 값을 가져와라 
만약에 $('.title') 전달 인자 값에 context가 없다면 document를 추가하여 문서 전체에서 찾아와라
라는 조건문을 추가하였습니다.
