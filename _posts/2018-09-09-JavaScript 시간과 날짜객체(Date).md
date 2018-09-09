<div class="box">
  <div class="small-title">Date 날짜 객체</div>
  <div class="pro-txt">
    <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_balnk">MDN- 날짜객체</a>
  </div>
  <p>날짜를 메서드 함수로 가져오는 방법</p>
</div>

{% highlight javascript %}
	var date_object = new Date();
	// Date 객체를 생성한후 변수에 참조
	
	console.log(
		"현재 년도 : ",date_object.getFullYear()
	);
	// 현재 년도를 구합니다.
	// 로컬 시간에 따라 명시된 날짜의 년도를 반환
	
	console.log(
		"현재 월 : ",date_object.getMonth() + 1
	);
	// 현재 월을 구합니다.
	// 로컬 시간에 명시된 월(0 ~ 11)을 반환합니다.
	// 0 = 1월 , 11 = 12월 
	// + 1 을 해주어서 사람이 보기 더 쉽게 해줍니다.
	
	console.log(
		"현재 일 : ",date_object.getDate()
	);
	// 현재 일을 구합니다.
	
	console.log(
		"현재 요일 : ",date_object.getDay()
	);
	// 주중의 몇번째 요일인지 반환 (0 - 6)
	// 0 = 일요일 , 6 = 토요일
	
	console.log(
		"현재 시간 : ",date_object.getHours(),
		"현재 시간 : ",date_object.getHours() - 12
	);
	// 시간(0 ~ 23)을 반환합니다.
	// 12 = 오후 12시

	console.log(
		"현재 분 : ",date_object.getMinutes()
	);
	// 분( 0 ~ 59 )을 반환
	
	console.log(
		"현재 초 : ",date_object.getSeconds()
	);
	// 초를 반환합니다.
	
	console.log(
		"현재 분 : ",date_object.getMilliseconds()
	);
	// 밀리초( 0 ~ 999 )를 반환합니다.
	// 1000밀리초 = 1초
	
	console.log(
		"현재 분 : ",date_object.getTime()
	);
	// 현재 시간을 밀리초 값으로 구하는 방법
	// 1970년 1월 1일 00:00:00 UTC 이후의 밀리 초 수로 변환
	// 지금까지 지나온 시간
{% endhighlight %}  
