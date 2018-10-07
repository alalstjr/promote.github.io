<div class="box">
  <div class="small-title">값 복사</div>
  <p>값 복사의 값은 원시형 데이터로</p>
  <p>null, undefinned, number, string, boolean 값이 있습니다.</p>
{% highlight javascript %}
var string = '값 복사의 증명';
var num = 100;

// val 이라는 변수를 만듭니다.
var val = null;

// val 변수이기 때문에 다른값으로 변경할 수 있습니다.
// val 변수에 num 변수를 할당합니다.
val = num;

// val 과 num 의 값을 확인해보면 둘다 100인것을 확인할 수 있다.
> val 값은 100
> num 값은 100

// 복사된것을 증명하기 위해서 val 값에 변화를 주겠습니다.
val +=100
> val = 200;
> num = 100;
{% endhighlight %}
  <p>변수 num의 100 은 원시데이터 숫자값이기 때문에 불변데이터로 num 의 100값은 val 값으로 복사되는것 입니다.</p>
  <p>복사된것을 검증하여 결과를 확인했을때 val 값을 수정했다 하더라고 num값이 변경되지 않는것입니다.</p>
</div>

<div class="box">
  <div class="small-title">값 참조</div>
  <p>가변(Mutable)의 데이터의 경우 그 값이 참조</p>
  <p>객체 유형으로 객체, 배열, 함수 가 있습니다.</p>
{% highlight javascript %}
var blog = {
    name:'쭌프로의 개발노트',
    year:'2018-10-07,
    list:['자바스크립트','파이썬','자바','C언어'],
    action: function() {
        console.log('함수입니다.')
    }
};

var list = [
    '사과',
    '포도',
    '딸기',
    '배'
];

// blog 의 정보를 담고있는 객체를 변수(new_val)를 만들어 할당했습니다.
var new_val = blog;
{% endhighlight %}
<p>가변 데이터인 객체와 배열의 값이 있습니다.</p>
<p>blog 의 정보를 담고있는 객체를 변수 new_val 를 만들어 할당했기 때문에</p>
<p>변수 blog는 객체를 가리키고 새로 만들어진 변수 new_val 도 blog의 객체를 가리킵니다.</p>
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-10-07-1.png" alt="자바스크립트 출력확인" />
</div>
<p>검증 방법으로 new_val 객체를 변경했을때 blog의 객체또한 값이 동시에 바뀌는지 확인해보면 됩니다.</p>
<p>new_val 객체의 name 값을 '쭌프로의 열공가능?' 으로 바꿔보도록 하겠습니다.</p>
<div class="img-box">
  <img src="{{ site.baseurl }}/static/img/post/2018-10-07-2.png" alt="자바스크립트 출력확인" />
</div>
</div>
