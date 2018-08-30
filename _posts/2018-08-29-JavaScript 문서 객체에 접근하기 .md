문서의 객체(Document Objects)에 접근하는방법

{% highlight JavaScript %}
 <div class="title">hello world</div>
{% endhighlight %}
이렇게 작성한 코드를 웹 브라우저가 해석하면서 객체를 만듭니다.
이것을 Document 라 부릅니다. 

DOM API (Document Application Programming Interface)
웹 에플리 케이션을 만들기위해서는
문서에 있는 객체들의 관계가 형성되어 있고 그것들에 접근하거나
조작하는 사용방법의 표준 방법

1.tagName (div,ul,li,....등등 태그의 이름)
> document.getElementByTagName('tagName')

tagName을 변수에 담아서 출력해보고 출력된 값의 속성을 자세히 보면 여러가지 값들이 들어가 있습니다. 
{% highlight JavaScript %}
  // HTML에는 div 오브젝트 두개가 존재합니다.
 	<div class="box" id="boxId" onclick="">TagName</div>
	<div class="box" id="boxIds" onclick="">TagName</div>
  
  // JavaScript 에는 해당 box 를 접근하여 변수에 담아 출력해보았습니다.
  var boxs = document.getElementsByTagName('div');
  console.log(boxs);
{% endhighlight %}
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-08-29-1.png" alt="자바스크립트" />
</div>
 HTMLCollection(집합객체) div 의 각자의 정보를 가진것을 한번에 담고있습니다.
 화살표를 눌러 더 자세하게 들어가면 document.getElementsByTagName('div')에 대한 더많은 정보를 확인하실 수 있습니다.
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-08-29-2.png" alt="자바스크립트" />
</div>
나열된 정보를 빼오는 방법은 item() 을 활용하여 가져올 수 있습니다.
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-08-29-3.png" alt="자바스크립트" />
</div>
혹은 boxs[0] 로도 똑같은 결과를 얻으실 수 있습니다.
수많은 태그가 존재하면 원하는 값을 찾기 어려울 수 있으니 많이 쓰는 방법은 아닙니다.

혹은 해당 문서에 div 의 갯수를 알고싶다면
boxs.length 를 활용하여 갯수를 알수 있습니다.

2. id 속성 값으로 선택하는 방법
> document.getElementById('ID');
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-08-29-4.png" alt="자바스크립트" />
</div>
고유의 ID 값으로 값을 가져올 수 있습니다.


