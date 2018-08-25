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
자신에게 맞는 코드에디터를 고르시고 설치하시면 충분할꺼같습니다.

바로 지금 이 블로그를 보게해주는 웹 브라우저 프로그램에는 개발자 도구가 존재합니다.
대표적으로 (Chrome크롬, Firefox파이어폭스, Internet Explorer익스플로러) 가 있습니다.
저는 Chrome크롬을 사용중이기에 크롬기준으로 설명하겠습니다. 다른 개발자 도구도 전부 비슷할꺼라 생각합니다. 
Chrome크롬 에서의 개발자도구창 여는방법은 F12버튼 or ctrl+shift+c 를 눌러주시면 바로 개발자창을 확인하실수 있습니다.

오늘 참고하면서 공부할 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals" target="_blank">MDN-문법과 타입</a> 페이지 입니다.

```markdown
JavaScript는 Java로부터 구문 대부분을 빌려온 것 뿐만 아니라 Awk, Perl 및 Python의 영향도 받았습니다.
JavaScript는 대소문자를 구별합니다.
```
JavaScript는 HTML과 CSS와는 다르게 대소문자를 엄격하게 구별합니다.
직접 작성해 보고 결과의 차이를 확인해 보면서 머리속에 확실하게 넣어줍니다.

{% highlight javascript %}
var code = true;

console.log(code);
{% endhighlight %}
이렇게 작성할경우

<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-08-26-1.png" alt="자바스크립트 출력확인" />
</div>
ture 가 출력되는것을 확인하실 수 있습니다. (ture는 값이 존재한다는 것을 의미합니다)

{% highlight javascript %}
var code = true;

console.log(COde);
{% endhighlight %}
하지만 이렇게 작성할경우

<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-08-26-2.png" alt="자바스크립트 출력확인" />
</div>
빨간색으로 경고표시를 해주는듯한 텍스트가 나옵니다.
출력문을 해석하면
```markdown
COde is not defined - COde가 정의되지 않았습니다.
```
저장되어있는 코드는 소문자로만 이루어져있는데
출력하려는 코드의 네임에는 대문자가 섞여 있어서 JavaScript가 code 라는 값을 찾을수가 없어 출력할 수 없었습니다.

이처럼 JavaScript에서는 대소문자 구분이 매우 중요합니다. 초보가자 많이 실수하는 것중 하나이기에 길게 설명했습니다.
꼭 머리속에 넣어주세요.

JavaScript 의 주석
```markdown
// 한 줄 주석

/* 이건 더 긴,
 * 여러 줄 주석입니다.
 */

/* 그러나, /* 중첩된 주석은 쓸 수 없습니다 */ SyntaxError */
```
중첩된 형태로는 주석을 사용할수는 없습니다.
{% highlight javascript %}
/*
  /*주석을 중첩하여 사용할수 없습니다.*/
*/
{% endhighlight %}
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-08-26-3.png" alt="자바스크립트 출력확인" />
</div>
보시다 시피 문법오류가 나옵니다.

주석은 자주 사용됩니다.
개인적으로 실무에서 사용할때는 해당 코드의 변수(저장된)값의 설명을 적는다던가
코드와 코드사이의 구분선을 만든다던가
제가 만든 코드를 보기쉽고 찾기 쉽게 하기위해서 자주 쓰는거 같습니다.
제가 만든 코드를 저만보는게 아닌 다른 팀원도 많이 보기때문입니다.
그렇기에 주석으로는 꼭 자신이 만든 코드에 설명을 작성해서 표시해줍시다.

JavaScript 의 선언
JavaScript에서 선언은 3가지 방법이 있습니다.

```markdown
var
변수를 선언. 추가로 동시에 값을 초기화.
let
블록 범위(scope) 지역 변수를 선언. 추가로 동시에 값을 초기화.
const
읽기 전용 상수를 선언.
```
메모리를 저장해주는 그릇이며 선언한 변수에는 단 하나의 값만 저장됩니다.
