JavaScript 는 동적형 언어 입니다.
이것은 변수를 선언할 때 데이터 형을 지정할 필요가 없고 
데이터 형이 스크립트 실행 도중 필요할때 자동으로 변환하는것을 의미합니다.

예제를 들어보겠습니다.
{% highlight javascript %}
  var str = 'String';
  var num = 12345;
  var bul = falsel;
{% endhighlight %}
위의 변수를
{% highlight javascript %}
  > str = true;
  > str
  > str = true
{% endhighlight %}
str 변수에 논리형 데이터 true 를 넣은다음 다시 str 출력했을때 결과는
> ture 가 출력되는 것을 볼수 있습니다.

이처럼 처음에 문자값이였던 변수에 다른 데이터 형을 집어넣어도 오류가 발생하지않습니다.
이것을 동적형 언어라고 부릅니다.

정적형 언어
동적형 언어를 알아보았으니 다음은 정적형 언어를 알아보겠습니다.

{% highlight javascript %}
  var str:string = 'String';
  var num:number = 12345;
  var bul:boolean = falsel;
{% endhighlight %}

동적형 언어와 다르게 변수 뒤에 해당 변수의 데이터 형을 지정해줍니다.
그러면 해당 변수에 다른 데이터 형이 들어갈 경우 오류를 발생 하게 됩니다.

정적형 언어의 장점은 디버깅 하기가 좋습니다.
긴 문장의 코드에 str:string 이라는 문자형 데이터 변수에
숫자를 넣을경우 오류를 발생시켜서 코드가 망가지지않게 할수 있습니다.
(아무래도 처음부터 깨끗하게 정돈하고 관리하는 정리정돈 같은 개념 같습니다.)


다시 자바스크립트의 동적형 언어로 돌아오겠습니다.
자바스크립트의 특징중 하나는 자동으로 데이터 형이 변환되는거 였습니다.
이것은 장점이 될수 있으며 혹은 단점이 될수있는 기능입니다. (양날의 도끼같은 느낌을 받았습니다.)
예제를 들어보겠습니다.
{% highlight javascript %}
  var str = 'String';
  var num = 12345;
{% endhighlight %}

이처럼 문자형 데이터 값과 숫자형 데이터 값이 있습니다.
이 둘을 더하면 어떤 결과가 나타날까요?

{% highlight javascript %}
  var str = 'String';
  var num = 12345;
  
  str + num
  숫자형인 num 이
  'String' + 12345
  문자형으로 변환되어 더해집니다.
  'String' + '12345'
  결과는 문자형 데이터 입니다.
  > String12345
{% endhighlight %}

결과는 문자와 숫자가 합쳐진 문자형 데이터값이 출력됩니다.

이것이 매우 혼란 스러울때를 경험담(실무에서)으로 얘기해보자면
어느 계산식에 있는 input 의 value값 을 가져와서 변수와 더해 값을 출력하는 것이였습니다. 
하지만 왜인지 계속 NAN(숫자가 아니다) 를 출력해서 왜그런가해서 천천히 찾아보아습니다.
{% highlight javascript %}
      //HTML
      <input value="100" class="num">
    
      //JavaScript
			var firstNum = 100;
			var num = $('.num').val();
			
			var result = firstNum + num ;
			console.log(result);
      
      > 100100
{% endhighlight %}
value 값에는 숫자형이 아닌 문자형으로 저장되는것을 모른체 결과값을 저장했습니다.
둘의 데이터 형이 다르기때문에 숫자형인 firstNum 값은 문자형으로 변환되어서 계산식에 들어갔습니다.
결과 값은 200 이 아닌 100100을 출력했습니다.
