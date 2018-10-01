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

<div class="box">
  <div class="small-title">HTML 파싱(해석)</div>
  <p>HTML 파싱(해석)하는 과정에서 중간에 script 를 해석하며 불러오는 시간으로</p>
  <p>HTML 파싱(해석)이 늦어지는 현상을 해결하려면 우선</p>
  <p>모든 HTML 이 불러와진 다음에 script 를 적용시키는 것입니다.</p>
  <p>이를 적용시키기 위해서 사용하는 것이 load 이벤트 입니다.</p>
{% highlight javascript %}
window.addEventListener('load',function(){
	console.log('Load');
});
{% endhighlight %}
  <p>결과를 확인하기 전에 크롬 개발자 환경 창에서 Network클릭후 Disable cachi 체크후 새로 고침을 합니다.</p>
  <div class="img-box">
     <img src="{{ site.baseurl }}/static/img/post/2018-10-01-1.png" alt="자바스크립트 출력확인" />
  </div>
  <p>결과는 모든 HTML의 파싱으로 이미지와 CSS, script 를 불러오는데 총 69밀리초가 소비되었습니다.</p>
  <p>(이미지가 더많거나 script 사이즈가 크면 클수록 load 시간은 길어집니다.)</p>
  <p>결론은 load 란 69밀리초가 지난 이후에 console.log 를 출력해 주세요. 라고 해석하면 될거 같습니다. </p>
</div>
