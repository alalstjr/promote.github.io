<div class="box">
  <div class="small-title">JavaScript Load, DOMContentLoaded 이벤트</div>
  <p>HTML, CSS , JS 해석에 관련하여 정리하겠습니다.</p>
  <p>HTML의 해석 순서는 위에서 부터 아래로 해석하며 내려갑니다.</p>
  <div class="pro-txt">
    <a href="https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html" target="_balnk">HTML의 해석 참고 사이트</a>
  </div>
  <p>아래 html 코드가 있습니다.</p>
{% highlight javascript %}
<!DOCTYPE html>
<html lang="ko-KR">
  <head>
  <meta charset="UTF-8">
  <title>Javascript Slide Example</title>
  <link rel="stylesheet" href="link">
  <script src="link_1"></script>
  <script src="link_2"></script>
  </head>
    <body>
      <header>
        <div class="JJun">쭌프로</div>
          <div>블로그</div>
        </header>
    </body>
</html>
{% endhighlight %}
  <p>코드를 위에서 부터 해석하며 웹상으로 불러옵니다.</p>
  <p>html 에서 시작하여 내려오다가 CSS 파일을 불러오는 link 코드를 만납니다.</p>
  <p>다행이 CSS link 는 HTML 파싱(해석)을 방해하지 않아 멈추지않고 내려갑니다.</p>
  <p>하지만 js 파일을 불러오는 script 코드를 마주치는 순간 HTML 파싱(해석)은 잠시 멈추게 됩니다.</p>
  <p>script 파일을 서버에 요청하고 다운로드 한후에 실행 시켜야 하기 때문입니다.</p>
  <p>이렇게 중간에 script 파일이 HTML 파싱(해석)을 중단시키는 상황이 발생되면 어떤 문제가 일어날까요.</p>
  <p>바로 사용자가 봐야하는 웹상의 모습이 순간 멈칫한다던가 느리게 불러오는 현상(최악의 UX)이 일어납니다.</p>
  
</div>
