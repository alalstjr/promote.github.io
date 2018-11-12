<div class="box">
  <p>자바스크립트를 공부하니 문득 배운것을 활용하여 무언가를 만들고 싶어졌다.</p>
  <p>그래서 무엇을 만들어볼까 하다 첫번째로 생각난것이 오목!</p>
  <p>하지만 딱 10분 머릿속으로 여러가지 for문 if문 간단하게 돌려본 순간 '아! 이건 안된다. 어떻게 선택한 위치에서 상하좌우 5개 체크를 확인하지?'</p>
  <p>심지어 대각선까지.. 너무나 이해가 안갔다. 우선 천천히 해보자는 의미로 오목보다 간단한 BINGO 로 시작해 보자고 생각하고 바로 판을 만들었다.</p>
{% highlight javascript %}
// Style
ul {padding: 0;margin: 0;width: 100%;max-width: 300px;position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);border: 1px solid #ddd;}
ul::after {display: block;content: '';clear: both;}
ul li {
  width: 33.333%;
  float: left;
  border: 1px solid #ddd;
  list-style: none;
  height: 100px;
  box-sizing: border-box;
  cursor: pointer;
}
ul li:hover {
  background-color: rgba(95,45,10,0.5);
}
ul li.on {
  background-color: red;
}

// HTML
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
</ul>
{% endhighlight %}
</div>

<div class="box">
  <p>우선 틀을 만들고 생각을 해보았다. 어떻게 해야 가로 세로 대각선을 체크할까?</p>
  <p>이번에 배운 자바스크립트를 돌려 생각해보며 고민해보니 for문 과 if 문을 활용하면 충분하겠다. 라는 생각이 들었다.</p>
  <p>for문으로 먼저 가로줄을 체크해서 if문으로 해당 줄이 체크가 되어있다면 true 를 반환하게 하면 되겠다! 라는 생각이 들어</p>
  <p>바로 실전으로 만들어 보았습니다. (결국 생각이랑 많이 달라서 2틀은 더 고민했습니다..)</p>
</div>

<div class="box">
{% highlight javascript %}
	// Bingo 개별적인 공간을 배열로 만듭니다.
	var _bg = [];
	
	// Bingo 3*3 판을 생성
	_bg.bingoNum 		= 3 ; 
	_bg.bingoLength = _bg.bingoNum * _bg.bingoNum ;
	
	_bg.bingo = [];
	_bg.j = 0;
	for(;_bg.j <= _bg.bingoLength;_bg.j++){
		_bg.bingo[_bg.j] = _bg.j;
		_bg.bingo.push(_bg.bingo);
	}
	
	_bg.list = document.getElementsByTagName('li');
	
	_bg.active = function(target){
		// 선택한 빙고 css효과 추가
		this.classList.add('on');
		
		// 선택한 순서를 배열에서 체크
		_bg.bingo[target] = true;
		
		// 빙고판을 체크합니다.
		_bg.scan();
	}
	
	// 빙고 체크 함수
	_bg.scan = function() {
		
		// 가로 빙고를 체크합니다.
		var i = 0;
		var l = _bg.list.length / 3;
		
		var j = 0;
		var r = _bg.list.length;
		
		// 라인 체크를 확인합니다.
		var check = 0;
		//
    var line = 0;
    
		for(;i < l; ++i){
			for(;j < r; ++j){
				line++;
        if( line > _bg.bingoNum) {
          line = 0;
          check = 0;
          console.log('리셋');
          break;
        }
				if (_bg.bingo[j] === true) {
          check++; 
        }
        if( check === _bg.bingoNum ) {
          console.log('라인완성');
        }

				 console.log('i'+i+'j'+j+'check'+check+'line'+line);
			}
		}
/*		var c = 0;
var j = 0;
		for(var i = 0;i < _bg.list.length / 3; ++i){
			for(;j < _bg.list.length; ++j){
				c++;
				if( c > (_bg.list.length / _bg.bingoNum) ) {
					c = 0;
					break;
				} else {
					console.log('i'+i+'j'+j);
				}
			}
		}*/
		
	}
	
	_bg.i = 0;
	_bg.l = _bg.list.length;
	for(;_bg.i<_bg.l;++_bg.i){
		_bg.list[_bg.i].addEventListener('click',(function(index){
			return _bg.active.bind(_bg.list[_bg.i],index);
		})(_bg.i));
	}	
{% endhighlight %}
</div>
