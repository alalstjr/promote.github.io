안녕하세요.
개발자의 개인필기노트 블로그의 SEOK 입니다.
오늘 작성하는 개인 필기는 JavaScript 언어를 직접 작성하고 실제로 출력되는 모습을 같이 봐야
이해하기 쉽고 머리 더 오래 남을거라 생각합니다. 
(개인적으로 실무에서 눈으로 공부만 하고 프로젝트를 작업하면 여러 응용문제를 해결하기 어려웠습니다.
하지만 직접 내손으로 작성하고 결과물을 보니 머리에 남는게 많았습니다)

개발에 필요한 개발자도구

여러가지 언어를 작성하고 저장하며 코드를 작성하게 도와주는 무료 프로그램은 많이있습니다.
(대표적인 코드에디터는 : <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code - Code Editing</a> , 저는 웹 개발을 할때에는 <a href="http://brackets.io/" target="_blank">Brackets</a>을 사용중입니다.)
이 두개 말고도 수도없이 많은 코드에디터 프로그램이 존재합니다.
하지만 제가 작성하는 개인필기노트에서는 따로 코드에디터를 설치하고 실행할 필요가 없습니다.

바로 지금 이 블로그를 보게해주는 웹 브라우저 프로그램이 있기 때문입니다.
웹 브라우저에는 개발자 도구가 존재합니다.
대표적으로 (Chrome크롬, Firefox파이어폭스, Internet Explorer익스플로러) 가 있습니다.
저는 Chrome크롬을 사용중이기에 크롬기준으로 설명하겠습니다. 다른 개발자 도구도 전부 비슷할꺼라 생각합니다. 

오늘 참고하면서 공부할 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals" target="_blank">MDN-문법과 타입</a> 페이지 입니다.

```markdown
JavaScript는 Java로부터 구문 대부분을 빌려온 것 뿐만 아니라 Awk, Perl 및 Python의 영향도 받았습니다.
JavaScript는 대소문자를 구별합니다.
```
JavaScript는 HTML과 CSS와는 다르게 대소문자를 엄격하게 구별합니다.
직접 작성해 보고 결과의 차이를 확인해 보면서 머리속에 확실하게 넣어줍니다.

{% highlight ruby %}
var code = true;

console.log(code);
{% endhighlight %}
이렇게 작성할경우

<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-08-26-1.png" alt="자바스크립트 출력확인" />
</div>
