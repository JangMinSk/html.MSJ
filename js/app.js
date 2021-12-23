/*var administrator = "MoM"; //변수 선언및 초기화.(전연변수로 사용)
console.log(administrator);//var 사용시 이름 중복가능 let을 주로이용하자.

administrator = "you";  //const 는 자기자신만 갖는 이름(함수)
console.log(administrator);

const number = 10 //정수
const color = 0x00ff00 //16진수
const unmask = 0o0074 //6진수
const temparature = 21.5 //실수
const e = -2.9e-37 
const inf = Infinity //무한 (예약어)
const ninf = - Infinity 
const nan = NaN //숫자가 아님을 의미 Not a Number

console.log(number) 
console.log(color) 
console.log(unmask) 
console.log(temparature) 
console.log(e) 
console.log(inf) 
console.log(ninf) 
console.log(nan) 

const message="she dosen\t look like"//이스캐이핑 오류 문자열 어퍼스트로피 사용시 역슬래쉬 대체
console.log(message);

const name = 'sunrise'
const name1 = 'sunrise1'

const message1 = 'Happy birthday! ' + name; //구버전
const message2 = `Happy birthday! ${name1} ${name}`; //최신버전 템플릿 리터럴 많은 변수를 여러줄에 이어서 할 수 있다
console.log(message1);
console.log(message2);

const message33= `hohohohoho\   
i hope you have a great day today!\
you are amazing guy for me`//여러줄로 이을때 문장끝에 역슬래쉬
console.log(message33)

const person={}//객체 리터럴 선언{}
console.log(person);

const person1={         //빈 객체 선언
    name: 'syleemomo',  //문자
    age:23,             //정수
    isActive: false     //불리언
}
console.log(person1);



const person12=[0,1,'num',3,"4",5,true,7.14,person1,9]//배열에 다 넣기가능
console.log(person12);

const ikLoading = true;
const personse = null;
let city;

console.log(ikLoading);
console.log(personse);
console.log(city);

const ages = 23;
const msg = "hello world !!!"
const isLoadingg = true;


//자료형 검사
console.log(typeof ages); //typeof 는 변수값의 형태를 알고싶을떄 씀.
console.log(typeof msg);
console.log(typeof isLoadingg);

//객체,배열 구분
const fruits = ["apple", "banana", "orange"] 
const car = { 
    name: "Grandier", 
    year: 2016, 
    owner: 'syleemomo' 
} 

console.log(Array.isArray(fruits))//어레이 (배열)트루 아니면 (펄스)
console.log(Array.isArray(car))



function changeName(){};//함수 자료형 검사
console.log(typeof changeName);

//숫자형에서 정수,실수 구분
const aage=27;
const temperature=32.1;
console.log(Number.isInteger(aage)); //정수 트루
console.log(Number.isInteger(temperature));// 아닌거 펄스

//문자열형 타입
const age = "32" 
const temparature1 = "37.6" 
const msg1 = "hello world 237" 

//숫자형으로 변환
const age_casted = Number(age) 
const temp_casted = Number(temparature1) 
const msg_casted = Number(msg1)

console.log(typeof age) //변수타입
console.log(typeof age_casted) //넘버
console.log(age_casted) //바뀐타입

console.log(typeof temparature1) 
console.log(typeof temp_casted) 
console.log(temp_casted) 

console.log(typeof msg1) 
console.log(typeof msg_casted) 
console.log(msg_casted)

// 문자열형 타입 
const msg4 = "hello world 359" //숫자가 앞쪽에만 있어야 추출가능
const msg5 = "359 hello world" 

// 숫자형으로 변환하기 
const msg4_casted = parseInt(msg4) 
const msg5_casted = parseInt(msg5) //정수값int , 실수값Float

console.log(msg4_casted) 
console.log(msg5_casted)

//실수,정수를 문자열로 바꾸고싶을때 to String을 이용.*
const age = 17 
const temp = 23.9 
const isLoading = false 
const numbers = [1, 2, 3, 4, 5] 
const person = { 
    name: 'sunrise', 
    city: 'seoul' 
}

// 문자열형으로 변환하기 

const age_casted = age.toString() //casted 실수,정수,문자 변환할때 쓰는것 
const temp_casted = temp.toString() //toString 자리에 불리언을 넣으면 불리언타입으로됨
const isLoading_casted = isLoading.toString() 
const numbers_casted = numbers.toString() 
const person_casted = person.toString() 

console.log(age_casted) 
console.log(typeof age_casted) 

console.log(temp_casted) 
console.log(typeof temp_casted) 

console.log(isLoading_casted) 
console.log(typeof isLoading_casted) 

console.log(numbers_casted) 
console.log(typeof numbers_casted) 

console.log(person_casted) 
console.log(typeof person_casted)


//자동 형 변환
const result = 31 + "3" //숫자 +는 문자형이랑 만나면 문자열 반환
console.log(result) 
const result2 = 31 * "3" 
console.log(result2)

const div = document.createElement('div')
div.className = "container"
div.innerText = "Hello world"

console.log(div)//요소 엘리멘트 요력
console.dir(div)//DOM의 전체출력

const input = document.createElement('input')//DOM객체 생성
input.className = "search-img"
input.type = "text"
input.placeholder = "search ..."

console.log(input)


const div = document.createElement('div')
div.className = "container"
div.innerHTML = "<img src='' alt=''/> \
                 <p>You have happy family</p>"//이너HTML 문자열 출력가능

console.log(div)


const img = document.createElement('img')//DOM객체
img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABqlBMVEX61QD2gzP82gD81QD7tB38///51gD2gDfugDLzgTj6gTLvgS30iC/+njXzhDM8PFf00xJPSUX9//s2PVT5nTDxv4D1yKc4PFxxaD2HcTT3liMvLUnfsxr70gRCREcnMkrxwgDxyADn8/L//P/42gDz8+/v0CDXrijgvinvvAArMU3/mDv2///y9vf2nzf2eQD50aE4QVEyOldBPE5hUj8xNVtvXzyHeDf4wBH9riT3uAvvqBnzeS70gCPwlhr3niL9eS7ziyLzmFrxq3v6rVjzvnv0u4X6sWfvvJ3u9f/ofRz01Jv62bbvlS/6zZLwkCvqzizUwCTvt3FbTyVPQ0RAMDOAcSPv2yW9pBuciDShiyT79NwpKVU/OUExRk9vaTArKXAYKE1NPFBFNlsbKC7knGyKbh/qiQBLPjm5qTFdXjy2midwWR2Ibi1uV0VhUTS5sUb78eI3I0pnUluagjlLTDNcTUVwZ0CzkCSenijAmRmCaTyuhSuGcUE8LkaPgjPZuD/jrB2ZhBw3Nm/i1Db53Mv/+uXfkhxGRDOxlFMaIVAsJzfxyLLGqA8H5coOAAALPElEQVR4nO2ajVvT5hbA0wSSficQNND2hQRC2wBWkvBCBUpXcDImSCsqpbZylW0X12kvu4hcprLNueuu8j/fk5SPAl6357m6bt35PQ+2pAkmv55z3vO+CcMgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCNIi8OxvgW/2aX5M+PSVtt/AJMc1+0w/HtzUdCbgPUPgNB6vf4a0sAN+SvCEhTP4ziLMGKTZZ/rxYNumBa//NJ7gaTxhT1ZtZQeTfrjE02EQDp0m6Dho4Vxg0gEh7Gkg7PEHu0KhVFdXCF66UkDYJ7R0HHAkeMqBEPZ/EuwaToEDh9ASvAkKvimthePgrIMMEAwNR44YDnV1BQRPizvINTqYnZubm81cvfbphWsXXOYhK8KeQJvW0rmQ85w4yHw2sjAy+vn19s72QxaXQsOCJzNJWtgBw0X8DZkwN7iwcPHyjfaBkU6X9tGI4yB3ygHH/HrXyPOwEwcvXP3l3Me8+9PwuwvTjKac56Z8dQnhMAwJc5cG+y9eHoU4qEfCyIVIatk/vWxIJyfH6auStEoY7n3nq/M8y+cLhTxIIAyvn/1vdZZjdZY9tMPrPKfzDOG4szv+HvDMexzAvzezqWHBv6w2fkHxlY5btzX2vd8ZXFNh3bYrvXdWwQFz9tLY4lrpR4lljh3A1YMWQpoTB23COQfX2wfa787fnJ+fv7kEcSD4I2rDIVy8w1LKsfcXCJYrVKhs3TOH1iWWP5cL7MTfyvcL3HE+6Hz8zsREiT234+8C1+aZPnHw5YmDSARaxCx0STnBP6M2HiHtmGZfTHv/39WfU1O89WBDjBZZ/tzcm71zP/rFgXZcKHg2btNyN9GbMwRPevzvduC0yU6bGBT8WbXxiHgHFesO6mfMu2+c8sAf/grXFt+URTuxZ1rWmlMcjneuH0HihUTC+RNQX+EAjufiDxQ6bvDNGX7UgO94XPDPDl5y6kHnQOdixO0TwYHPF5jSGoKUkzpkcSimOVVvNa6zhCGs7hY1SWd0qJhxSHQSr8hKbzL2+r75FezDSrCVI7APTyDxV3VdVyWJQKWF41ehZLCrlQ1lXNXZ5jgInnIwWHfQvvh3p03sikAchMEBc9ZBQtNXS086NmsPWfar2td39EJtfCXPrpZqHZValXeKhrlRJYlqMWaw8bWxSu9KSef1b8bHHuV7VlZLK49rcR0OXP9Ht73zkE0+2bBFsbbbHAckd94B5MLW6CJwYznVBQ7aGpP/KA70ibJFZdpX1PepfCtefWnZSWmCyqYpf/uQ09dfyuLrgq6qqqaPU2pRq7yv6xWT/rP7ZW+8h9JoErbLSrRsyZVk4f6GIpp9279SZT4O/P9wUOfVUigy7QMH53OBFKLWvR1boTXykCp2bJvKO0axzxI7TJM+0fTCG0WWewsw6rHFIcj1HQtyQ7dl2bRoxeixzEpCekplefu5aVpr+QkIg47nu0YziuIpB54GB26buDgTCvm8gbaGFunYwVrZelCYoGZvLPlGNBProvJdulS2xARsg4/Zfw0ppvyiCJVizZTtg11LkffYCjiwt0vgQIkmpG5F7I0lvjCt79LxXjjeUJvhAL7fmboDQQgHPN4tpybeGIEOacBtlWdCwz5hOS2di4MftGr3+iNjwtoQY/Fb4lB1nA49U4vPn39jrJUVGDZ0fveFbIovHhJuwomTvXI0uqdVRGrvGao2QcVogrgOkn2i1aM6DsaN9/aeH80Bw2cPHXjCAX/AcZC53nkX2II+8YYzXXing5jG8erBWq9s2zFp3BK3x5ShPZXl1MT+a1nuixGe8MXbG7aymdQnLMVOxIvVakyzRXksZnDsoQOx7kB2HCiOg+b0yuwVb70W+P2ZjOvgcupqV2opdw1GB5guHDo4OeTYQf7Ri7It2g8SZI3aT2+ZlaTG5idE2quIfT8QGBDZ72/L8ss7+h1LrCQ0Nq2qq44Dg/yxHOjHDlwJ9TjoCkWykcgo1MT5CLRInuU0TGrOOPiBSCsK3e6Boh4jRcvusM0xQ1tdt+j2PlVAUWm/tqeXLFPeiW9Tx0E+GWd0UxH/gA74trqB+Vmv4PceOkilQkuLUBevug4i73AANZFCY9dDHQeFPtsWrQmDK5VpTf2Ryn3J/G0a3Sf5ii1vQgGEljHx4sWbpF5RxCfqH8wB5MKk1wcxkNm6dHc2k9nq778YdDrkUG5xZKAz1RUKCr6sdtQVu8sB0AI6uVB7afaoPdS0ExJcwIZJdyf5bgXKW8mJA2mMijv5n3oV+Zb6VVm0D4qKYu4xFQVygePZibLdd0C6YSRNJqOmUxM7KH1sME0ZGnk2HXAdvFr4eTZz+S44+DwLCkKRxZHOn6Fb9nh8U8cOYLSXCs+jJjVj8Zoi7lTHTBFqIttNRVlOGPqKJb6uQoXsizFrVBZrj6ktd4MUcWO7RxblPdIryo+hJEIcmI4DWex9uDYk0v1J6WvT3Bh71JQ44Pl0wF1CerswODedeQX9QSaUCkUi/37V3r4VOe2AwBSnEKWiSLsNab8MTZ59z6yAA8h76IBUfb9M5SHoAe4lIA3KMpihlaKRf02VDcVSajGp15TH3Fwoy9HvHQfiC/GeUq5OsvsvTVl+LTXHgfq5HyaNmYuX+rdejW4N9r/NZGeWrl5YHHAmj44DD0yZyJEDtlCWLbq5Z5B8ra+8+cu30W8Tkl79TzQ6ntS4+EpU2fzlDS3vEb0wNqSI5c2qYbDJMRD3ZicxKd0u07Ekw+l3hqJvEm4cPK3Q8npMZX6qRTfoZqwpPZKu5vwerzfz2eDgwkI/8DYzv3i3022XF+sOoE08mtPyeqHn+aNnCUNluHh1N2YkDw5gCikVDooJQyJ6vFpKwLZETCVsvFh6BnsYMDfOF5/t7sUMVc/DZ5MEaoozdybjstiRSJSqMUNiWOlgt1o0fn8FTlEkEXAQznzWfwkmzv2Dl95CrzzirKMNOA6GPZ7g5ElNZGCWrKrQ6DEs5IWmaqymaQQuSoVXSGaoF5rGSvVtnKbBlIlAt8wTeKtJhOeIpqaJs6AK+7MQBzCq8PCRDjEG+2hqUxwQ4jbLmbnOhf5BoB8cDHRCpwyBMLqcGvZ7ggb0hI0xerzQ4cx0+fpi0NEKCmw8WUlhmIY5d/0df7ywxnPsU6qYMaIfjYjNetKDJ1xWcIri9Jdv7w5egki4ePn6QPvISOfd69dSIcdBzrnxfipPP8yyH6d3l6ECgIMmP+YCmX6l3iRNe72z114NjsB8ob1zcXR+ORKCZmn5nIPDOwH/PzCpLq2VYlpzFlIbzgO6nrqDgB+KQuYT35fzmZufXp3JRdx7z64D9XQcfCgHhGEJlBbSdAfOyrLf7/H5fP6AR/AJn2S8wa6ZSGpp2FlL7AoN+4UZ5+GDjzFmQX11b1k12QGBQGjznCZYv+/uPHswHAyGfVMG1K9Wvu8M9SgdDIcDMC2AwaHBQSgEAvwQGr4ptbUdMJCNatAbho5YOI4D587CcjDsEaYFQfD7wcFvuMv6J4ZwOqe2ZZfD7nKa6yEMARAM+JyuIZjLTk1Oqq3tANoDHZoaaN6uRHIBn3AYDI6NYG4ma0BHKKln24MWBbo9yWjLRoIwOAg+KA/L2Stp6H+lVn724hwsy/OSlm7L5oLBmSlDdQQ4M9m/QgQc4T4uouuMlp5MOxkgtXYReDccAWByDJ2Lu2ZW//XDtIR/EtznhqB3BgksTHGJGxcfqi1GEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEOQvy38Be4jtEK7bHpcAAAAASUVORK5CYII="
img.alt = "javascript"

console.log(img)



const div = document.createElement('div')
div.className = "container"
div.innerHTML = "<img src='' alt=''/> \
                 <p>You have happy family</p>"

console.dir(div) // DOM 객체의 프로퍼티 확인


childElementCount - 자식 요소의 갯수를 의미한다. 현재는 img, p 태그 2개이다. 

childNodes - 자식 노드의 종류를 의미한다. 현재는 img, text, p 가 있다. text 는 공백을 의미한다. 

children -  자식 요소의 종류를 의미한다. 현재는 img, p 가 있다. 

classList - 클래스 목록을 의미한다. 예를 들어, class 속성이 "container checked" 라면 classList 는 "container" 와 "checked" 2개가 존재한다. 

className - 해당 요소의 클래스명이다. 

innerHTML - 시작태그와 종료태그 사이의 HTML 코드를 의미한다. 

innerText - 시작태그와 종료태그 사이의 문자열을 의미한다. 

nodeName, tagName - 대문자 형태의 태그 이름이다. 부모의 태그 이름은 "DIV" 이다. 

 

DOM 검색을 위한 프로퍼티는 다음과 같다. 

firstChild, firstElementChild - 부모의 첫번째 자식 요소를 의미한다. 현재는 img 요소이다. 

previousElementSibling, previousSibling - 해당 요소와 동등한 위치에서 이전 요소를 가리킨다. 두 프로퍼티는 유사하지만 다른점이 있다. 전자는 이전 요소를 의미하고 후자는 이전 노드를 의미한다. 

nextElementSibling, nextSibling - 해당 요소와 동등한 위치에서 다음 요소를 가리킨다. 두 프로퍼티는 유사하지만 다른 점이 있다. 전자는 다음 요소를 의미하고 후자는 다음 노드를 의미한다. 

lastChild, lastElementChild - 부모의 마지막 자식 요소를 의미한다. 현재는 p 요소이다. 

 

이벤트와 관련된 프로퍼티는 다음과 같다. 

onkeydown, onkeypress, onkeyup -  키보드 입력 이벤트이다. 

onmousedown, onmouseenter, onmouseleave, onmouseup - 마우스 이벤트이다. 

 

CSS 스타일 정보와 관련된 프로퍼티는 다음과 같다.

style - 해당 요소의 CSS 스타일에 대한 정보를 담고 있다


// 생성한 DOM 객체
const div = document.createElement('div')
div.className = "parent"
div.innerText = "Hello world !"

// 생성한 DOM 에 자식 요소 추가하기
const img = document.createElement('img')
img.className = "child"
img.src = "http://127.0.0.1:5500"
img.alt = "photo"

div.appendChild(img)

console.log(div)


// 생성한 DOM 객체
const div = document.createElement('div')
div.className = "parent"
div.innerText = "Hello world !"

// 생성한 DOM 에 자식 요소 추가하기
const img = document.createElement('img')
img.className = "child"
img.src = "http://127.0.0.1:5500"
img.alt = "photo"
//자식요소 생성(P)
const p = document.createElement('p')
p.className = "summary"
p.innerText = "this is summary !"
//부모요소에 자식요소 추가하기(img추가한 다음p요소가 추가됨)
div.appendChild(img)
div.appendChild(p)

console.log(div)//DOM객체의 프로퍼티 확인


//마운트할 DOM객체 생성하기
const div = document.createElement('div')
div.className = "child"
div.innerText = "Hello world !"

//HTML문서에 생성한 DOM 객체 실제로 마운트하기
const root = document.getElementById('root')
console.log(root)
root.appendChild(div)//부모요소 root DOM객체에 자식인 div DOM객체를 삽입.


//DOM 조회 (검색) 하기

//document.getElementById("요소의 id 속성값")


const img=document.getElementById('photo')
console.log(img)//img DOM객체


const div = document.createElement('div')
div.className = "parent"
div.innerText = "Hello world !"

const img = document.createElement('img')
img.id = "photo"
img.src = "http://127.0.0.1:5500"
img.alt = "photo"

const p = document.createElement('p')
p.className = "summary"
p.innerText = "this is summary !"

div.appendChild(img)//div에 자식요소둘이 추가
div.appendChild(p)

const photo = document.getElementById('photo')
console.log(photo)


//id 값이 root 인 div 요소에 마운트
const root = document.getElementById('root')
root.appendChild(div)

//HTML 문서에 DOM 객체를 마운트하기 직후
const photo2 = document.getElementById('photo')
console.log(photo2)



// img 요소 검색하기 - id 로 검색함
const img = document.querySelector('#photo')
console.log(img)

// p 요소 검색하기 - 클래스명으로 검색함
const p = document.querySelector('.summary')
console.log(p)


// 사진리스트의 img 요소 검색하기(getElementById)
const img = document.getElementById('photo')
console.log(img)

// 사진리스트의 img 요소 검색하기( parent.querySelector) document 객체의 메서드인 동시에 DOM 객체의 메서드이기도 하기 때문에 parent. 과 같이 해도 동일하게 동작한다. 
const img2 = document.querySelector('#photo')
console.log(img2)

//parent 내부에서 img 요소를 검색함
const img=parent.querySelector('#photo')
console.log(img)


// 사진리스트의 div 요소 검색하기
const photos = document.querySelectorAll('.photo-item')//한번에 여러개의 요소를 검색할때 씀.
console.log(photos)

// 사진리스트의 img 요소 검색하기
const imgs = document.querySelectorAll('.photo-item img')
console.log(imgs)

for(let img of imgs){
    console.log(img)
}


//부모요소에 접근하기

const photos = document.querySelectorAll('.photo-item')
console.log(photos[0].parentElement.parentElement)//부모는 parentElement 1개 부모의 상위는 2개


// 자식 요소 검색하기
const parent = document.querySelector('.parent')
console.log(parent.children)//childNodes 를 입력하면 자식노드에 접근하는것


// 첫번째 자식노드 검색하기
const parent = document.querySelector('.parent')
console.log(parent.firstChild)



// 마지막 자식요소 검색하기
const parent = document.querySelector('.parent')
console.log(parent.lastElementChild)

// 마지막 자식노드 검색하기
const parent = document.querySelector('.parent')
console.log(parent.lastChild)


// 다음 형제요소 검색하기
const img = document.querySelector('#photo')
console.log(img.nextElementSibling)

// 다음 형제노드 검색하기
const img = document.querySelector('#photo')
console.log(img.nextSibling)


// 이전 형제요소 검색하기
const img = document.querySelector('#photo')
console.log(img.previousElementSibling)

// 이전 형제노드 검색하기
const img = document.querySelector('#photo')
console.log(img.previousSibling)


// img 요소의 속성 조회하기
const img = document.querySelector('#photo')
console.log(img.id)
console.log(img.src)
console.log(img.alt)
console.log('------------------------------')

// p 요소의 속성 조회하기
const p = document.querySelector('.summary')
console.log(p.className)
console.log(p.innerText)
console.log('------------------------------')

// input 요소의 속성 조회하기
const input = document.querySelector('#search')
console.log(input.id)
console.log(input.type)
console.log(input.placeholder)

  const photos = document.querySelectorAll('.photo-item')
  console.log(photos[0].parentElement.parentElement)


 const img = document.createElement('img')
 img.className = "photo-item"
 img.src = "http://127.0.0.1:5500/index.html"
 img.alt = "photo"

 const a = document.createElement('img')
 a.className = "photo-item"
 a.src = "http://127.0.0.1:5500/index.html"
 a.alt = "photo"

 const a1 = document.createElement('img')
 a1.className = "photo-item"
 a1.src = "http://127.0.0.1:5500/index.html"
 a1.alt = "photo"

 const a2 = document.createElement('img')
 a2.className = "photo-item"
 a2.src = "http://127.0.0.1:5500/index.html"
 a2.alt = "photo"

 const a3 = document.createElement('img')
 a3.className = "photo-item"
 a3.src = "http://127.0.0.1:5500/index.html"
 a3.alt = "photo"

 const root = document.getElementById('root')
 root.appendChild(img)

 root.appendChild(a)
 
 root.appendChild(a1)
 
 root.appendChild(a2)
 
 root.appendChild(a3)
 console.log(root.firstElementChild)


 index.html 파일은 위와 같다.

const photo = document.getElementById('photo')
photo.src = '이미지 경로'
app.js 파일을 위와 같이 작성하자! 위 코드는 photo 라는 id 값을 가진 요소를 검색한 다음 해당 요소의 src 속성을 변경한다. 
그럼 이미지 경로에 해당하는 사진이 화면에 보이게 된다. 

 

input 요소의 value 속성을 변경하려면 어떻게 하면 될까?

const searchInput = document.getElementById('search')
searchInput.value = 'Input value is updated !'
웹 화면을 처음 로딩하면 입력창의 문자열이 'Input value is updated !' 라고 보여진다.

 

p 요소의 컨텐츠(문자열)를 변경하려면 어떻게 하면 될까?

const paragraph = document.querySelector('.summary')
paragraph.innerText = 'Summary has changed right now !'
화면이 로딩되면 p 요소의 컨텐츠가 변경되었음을 확인할 수 있다.



const photo = document.querySelector('#photo')
photo.remove() DOM 제거하기

부모요소.removeChild(자식요소)
부모요소 내부의 자식요소를 제거하려면 위와 같이 removeChild 메서드를 사용하면 된다.

const parent = document.querySelector('.parent')
const paragraph = document.querySelector('.summary')
parent.removeChild(paragraph)
parent 요소는 부모요소이다. 해당요소의 자식들 중에서 p 요소를 제거하려면 위와 같이 p 요소를 검색한 다음 removeChild 메서드를 사용하여 제거해주면 된다.

const paragraph = document.querySelector('.summary')
paragraph.classList.add('contents')
*/
// 생성한 DOM 객체
//마운트할 DOM객체 생성하기
// 생성한 DOM 객체

// const img = document.createElement('img')
//  img.className = "photo-item"
//  img.src = "http://127.0.0.1:5500/index.html"
//  img.alt = "photo"
const nav = document.createElement('div')
nav.id = "nav"


// 생성한 DOM 에 자식 요소 추가하기
const menu = document.createElement('div')
menu.id = "menu"

for (var i=0; i<3; i++){
const bar=document.createElement('div')
bar.className="bar"
menu.appendChild(bar)
}
nav.appendChild(menu)


const screen_mode = document.createElement('div')
screen_mode.id = "screen-mode"

const circle_btn = document.createElement('div')
circle_btn.id = "circle-btn"
nav.appendChild(screen_mode)
screen_mode.appendChild(circle_btn)


const profile_menu = document.createElement('div')
profile_menu.id="profile-menu"
nav.appendChild(profile_menu)

const img = document.createElement('img')
img.src='data:image/jpeg;base64,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'

profile_menu.appendChild(img)


const title = document.createElement('div')
title.id = "title"
const center = document.createElement('div')
center.id = "center"

const heading = document.createElement('div')
heading.id = "heading"
heading.innerHTML="<h1>My photo gallery</h1>"+"<h4>my old memories from my life</h4>"

const search = document.createElement('div')
search.id = "search"

const text = document.createElement('input')
text.type = "text"
text.placeholder="Search photo ... "


title.appendChild(center)
center.appendChild(heading)
center.appendChild(search)
search.appendChild(text)


const photo_list=document.createElement('div')
photo_list.id="photo-list"
photo_names = ['이름','아','이','우','에','이','으','미','나']
for(var i=0;i<9;i++){
    const photo_container=document.createElement('div')
    photo_container.className="photo-container"
    
    const photo_card=document.createElement('div')
    photo_card.className="photo_card"
    
    const img=document.createElement('img')
    img.src='data:image/png;base64,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'
    
    const photo_name=document.createElement('div')
    photo_name.className="photo-name"
    photo_name.innerText=photo_names[i];

    photo_list.appendChild(photo_container)
    photo_container.appendChild(photo_card)
    photo_card.appendChild(img)
    photo_container.appendChild(photo_name)
}

console.log(nav)
console.log(title)
console.log(photo_list)

const modal_window = document.createElement('div')
modal_window.className = "modal-window"

const header = document.createElement('div')
header.id = "header"
header.innerText="Food Recipe"
modal_window.appendChild(header)

const body = document.createElement('div')
body.id = "body"
body.innerHTML="<p>opoasdasdasdasdasdzzdzDDASDASD;</p>"
modal_window.appendChild(body)

const footer = document.createElement('div')
footer.id = "footer"
modal_window.appendChild(footer)
const button = document.createElement('button')
button.innerText="Close"
footer.appendChild(button)

console.log(modal_window)
document.body.appendChild(nav)
document.body.appendChild(title)
document.body.appendChild(photo_list)
document.body.appendChild(modal_window)



