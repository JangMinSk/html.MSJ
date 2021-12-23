//이벤트핸들러 추가및 속성주기
// function popup(){
//     alert('팝업창')
// }
// function setBtnColor(){
//     popupBtn.style.background = 'skyblue'
// }
// function unsetBtnColor(){
//     popupBtn.style.background = ''
// }

// const popupBtn = document.getElementById('popup')
// popupBtn.addEventListener('click', popup)
// popupBtn.addEventListener('mouseover', setBtnColor)
// popupBtn.addEventListener('mouseout', unsetBtnColor)

//팝업 메세지 1회만 작동함.
// function popup(){
//     alert('팝업창')
//     popupBtn.removeEventListener('click', popup)
// }

// const popupBtn = document.getElementById('popup')
// popupBtn.addEventListener('click', popup)


//e.target>>이벤트 타겟 이벤트의 요소를 가르킨다
//타겟(e.target) 을 사용하여 버튼이 클릭될때 해당 버튼의 위치, 모양, 색상을 변경한다.
// function popup(e){
//     const target = e.target
//     const targetStyle = target.style//변수추가

//     targetStyle.all = 'unset'
//     targetStyle.position = 'absolute'
//     targetStyle.left = '500px'
//     targetStyle.width = '200px'
//     targetStyle.height = '70px'
//     targetStyle.textAlign = 'center'
//     targetStyle.background = 'skyblue'
//     targetStyle.borderRadius = '50%'
//     targetStyle.transition = 'all ease 2.5s'
// }

// const popupBtn = document.getElementById('popup')
// popupBtn.addEventListener('click', popup)

// function popup(e){
//     const target = e.target
//     target.classList.add('circle')
// }

// const popupBtn = document.querySelector('.popup')
// popupBtn.addEventListener('click', popup)

//아이디,비번 입력안하면 홈으로 이동 하지 않게하는 코드
// const form = document.querySelector('form')
// const id = document.getElementById('user-id')
// const password = document.getElementById('user-password')
// const p = document.querySelector('p')

// function login(e){
//     if(id.value === '' || password.value === ''){  //사용자 입력id,password가 비어있으면 홈경로로 안 넘어가기 위한 조건문.
//         e.preventDefault()
//         p.innerText = '아이디나 비밀번호가 입력되지 않았습니다 !'
//     }else{
//         alert('login is processing ...')
//     }
// }

// form.addEventListener('submit', login)
// const instantMsg = document.querySelector('.instant-msg')

// function showMsg(){
//     instantMsg.classList.add('show')
// }
// function hideMsg(){
//     instantMsg.classList.remove('show')
// }

// setTimeout(showMsg, 1000)
// setTimeout(hideMsg, 3000)

// const clock = document.getElementById('clock')

// function changeFormat(t){
//     return t < 10 ? `0${t}` : t
// }
// function getTime(){
//     const time = new Date()//자바스크립트
//     const hours = time.getHours()
//     const minutes = time.getMinutes()
//     const seconds = time.getSeconds()

//     clock.innerHTML = `${changeFormat(hours)}:${changeFormat(minutes)}:${changeFormat(seconds)}`//템플릿 리터럴
// }

// setInterval(getTime, 1000)
// const circle = document.getElementById('circle')

// function moveCircle(e){
//     console.log(e.clientX, e.clientY)
//     const mouseX = e.clientX
//     const mouseY = e.clientY
//     circle.style.left = mouseX + 'px'
//     circle.style.top = mouseY + 'px'
// }

// window.addEventListener('click', moveCircle)//click대신 mousemove를 넣으면 커서따라 이벤트가 움직여짐

// const ledContainer = document.getElementById('led-container')//마우스 이벤트를 등록하기 위하여 ledContainer 와 leds 요소를 HTML 문서에서 각각 검색한다. 
// const leds = document.querySelectorAll('.led')

// function lighton(e){//lighton 이벤트핸들러 함수 안에서는 조건문을 사용해서 현재 마우스 포인트의 위치가 led 내부이면 led 를 켠다. 즉, 
//     //현재 마우스 포인트가 위치해 있는 영역의 클래스명이 led 이면 해당 요소의 클래스명에 on 을 추가함으로써 led 가 켜진다.
//     //led 각각에 이벤트를 각각 등록하지 않고 led 를 감싸는 컨테이너에 이벤트를 등록하는 것을 이벤트 위임이라고 한다.
//     console.log(e.target)
//     console.log(e.target.className)

//     if(e.target.className === 'led'){
//         e.target.classList.add('on')
//     }
// }
// function lightoff(e){//마우스 포인트가 해당 led 를 벗어나면 실행되는 이벤트핸들러 함수이다. 
//     //lightoff 함수가 실행되면 클래스명이 'led on' 인 경우에 해당 led 의 on 클래스를 제거함으로써 led 가 꺼지게 한다. 
//     if(e.target.className === 'led on'){
//         e.target.classList.remove('on')
//     }
// }

// ledContainer.addEventListener('mouseover', lighton)//ledContainer 에 mouseover 이벤트를 등록하고 lighton 이벤트핸들러 함수를 연결한다. 
// //ledContainer 영역 안에 마우스가 위치하고 있으면 lighton 이벤트 핸들러함수가 실행된다. 

// for(let led of leds){
//     led.addEventListener('mouseleave', lightoff)
// }
// //반복문을 사용해서 각각의 led 에 같은 이벤트핸들러 함수를 등록한다.
// //각각의 led 에 mouseleave 이벤트를 등록해서 마우스 포인트가 해당 led 영역을 벗어나면 lightoff 이벤트핸들러 함수가 실행되면서 해당 led 가 꺼진다. 

// let index = 0

// function lightoff(){
//     const led = document.querySelectorAll('.led')[index]
//     led.classList.remove('on')
// }
// function lighton(){
//     const led = document.querySelectorAll('.led')[index]
//     led.classList.add('on')
//     index++
  
//     if(index > 2){
//         index = 0
//     }
//     setTimeout(lightoff, 1000)
// }

// function startEffect(){
//     console.log('load') 
//     setInterval(lighton,1000)
// }

// window.addEventListener('load', startEffect)

//메뉴바 생성
// const openBtn = document.getElementById('open-btn')
// const sidebar = document.querySelector('.sidebar')

// function openSidebar(){
//     sidebar.classList.add('show')
// }

// openBtn.addEventListener('mouseenter', openSidebar)

/*const box = document.createElement('div')
box.id = "box"

for (var i=0; i<9; i++){
    const menu = document.createElement('div')
    menu.className = "menu"
    box.appendChild(menu)
}
document.body.appendChild(box)
function getRandomColor(){
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)
    return `rgb(${red},${green},${blue})`
}
function changeBackground(e){
    console.log(e.target)
    e.target.style.background=getRandomColor()
}
const box2=document.querySelectorAll(".menu")
console.log(box2)
for (var menu of box2){
    menu.addEventListener('click',changeBackground)
}

const circle = document.createElement('div')
circle.className = "circle"
document.body.appendChild(circle)
document.body.append(box)
console.log(box)

function moveCircle(e){
    console.log(e.clientX, e.clientY)
    const mouseX = e.clientX
    const mouseY = e.clientY
    circle.style.left = mouseX + 'px'
    circle.style.top = mouseY + 'px'}
    console.log(circle)
window.addEventListener('click', moveCircle)

const open_btn = document.createElement('button')
open_btn.innerText="버튼입니다!"
open_btn.id = "open_btn"

const sidebar = document.createElement('div')
sidebar.className = "sidebar"
photo_names = ['HOME','ABOUT','CONTACT']
for(var i=0;i<3;i++){
    const smenu = document.createElement('div')
    smenu.innerText=photo_names[i]
    smenu.className = "smenu"

    sidebar.appendChild(smenu)
}
document.body.appendChild(open_btn)
document.body.appendChild(sidebar)

const sidebar2 = document.querySelector('.sidebar')

function openSidebar(e){
    sidebar2.classList.add('show')
}
open_btn.addEventListener('mouseenter', openSidebar)

console.log(open_btn)
console.log(sidebar)

const nav = document.createElement('div')
nav.id = "nav"

const nmenu = document.createElement('div')
nmenu.id="nmenu"
nav.appendChild(nmenu)

for(var i=0;i<3;i++){
    const nbar = document.createElement('div')
    nbar.className="bar"
    nmenu.appendChild(nbar)
}
document.body.appendChild(nav)
document.body.appendChild(nmenu)
console.log(nav)
console.log(nmenu)


/*
//로딩창
const box = document.querySelector('.box')
const moves = [
    {pos: 'left', length: 100},
    {pos: 'top', length: 100},
    {pos: 'left', length: 0},
    {pos: 'top', length: 0}
]
let select = 0

function moveBox(){
    const pos = moves[select].pos
    const length = moves[select].length
    box.style[pos] = length + 'px'
    select++
    if(select > moves.length - 1){
        select = 0
    }
}
function startMove(){
    setInterval(moveBox, 1000)
}
window.addEventListener('load', startMove)

//메뉴 설명창
const menuContainer = document.getElementById('menu-container')

function openMenu(e){
    const target = e.target
    if(target.className === 'title'){
        console.dir(target)
        target.nextElementSibling.classList.toggle('open')//toggle=추가,제거 하기위한 함수
    }
}
menuContainer.addEventListener('click', openMenu)

//로딩창
/*
const box = document.querySelectorAll('.box')
cnt=0
pre=0
function changePosition(){
    pre=cnt
    cnt = cnt === box.length - 1 ? 0 : cnt + 1
    box[cnt].style.marginBottom = '50px'
    box[pre].style.marginBottom = '0px'
}
function startMove(){
    setInterval(changePosition, 500)
}
console.log(box)
window.addEventListener('load', startMove)
*/

//사진넘기기,셀렉터 생성 및 셀렉터 선택사진으로 가기
// const photos = document.getElementById('photos')
// const selection = document.getElementById('selection')
// const photoItems = photos.querySelectorAll('.photo')
// const options = document.querySelectorAll('.options')


// let timerID = null
// let cnt = 0
// let prevOption = 0

// function changePosition(){
//     cnt = cnt === photoItems.length - 1 ? 0 : cnt + 1
//     photos.style.marginLeft = cnt * -500 + 'px'

//     // 셀렉터 구현부분
//     options[prevOption].style.width = 20 + 'px' // 이전 셀렉터 초기화
//     options[cnt].style.width = 50 + 'px' // 현재 셀렉터 변경
//     options[cnt].style.borderRaidus = '5px'
//     prevOption = cnt // 현재 셀렉터 인덱스 저장
// }


// function clicks(e){
//     const obj=e.target
//     for(let i=0;i<options.length;i++){
//         if(obj===options[i]){
//             cnt=i
//         }
//     }
    
//     photos.style.marginLeft = cnt * -500 + 'px'

//     // 셀렉터 구현부분
//     options[prevOption].style.width = 20 + 'px' // 이전 셀렉터 초기화
//     options[cnt].style.width = 50 + 'px' // 현재 셀렉터 변경
//     options[cnt].style.borderRaidus = '5px'
//     prevOption = cnt // 현재 셀렉터 인덱스 저장
    
// }

// function startCarousel(){
//     timerID = setInterval(changePosition, 1000)
// }

// function stopCarousel(){
//     clearInterval(timerID)
// }

// selection.addEventListener('click',clicks)
// photos.addEventListener('mouseenter',startCarousel)
// photos.addEventListener('mouseleave', stopCarousel)
// // 페이지네이션
// const pageContents = [] // 데이터를 담고 있는 배열
// const numOfData = 100 // 전체 리스트 수
// const limit = 3 // 페이지당 보여줄 리스트 수
// const numOfBtns = Math.ceil(numOfData / limit)
// let offset = 0
// console.log(numOfBtns)

// const contents = document.getElementById('contents')
// const pageBtns = document.getElementById('page-btns')

// // 리스트 배열 만들기
// for(let i=0;i<numOfData;i++){
//     pageContents.push({ name: 'BTS', age: 11, id: i })
//     pageContents.push({ name: 'IU', age: 1, id: i })
//     pageContents.push({ name: 'AOA', age: 5, id: i })
// }
// console.log(pageContents)

// // 화면에 페이지네이션 버튼 보여주기
// for(let i=0;i<numOfBtns;i++){
//     const btn = document.createElement('button')
//     btn.className = 'page-btn'
//     btn.innerText = i + 1

//     pageBtns.appendChild(btn)
// }

// // 첫페이지 로딩(View)
// for(let i=0; i<offset+limit; i++){
//     const listItem = pageContents[i]
//     contents.innerHTML += `
//                 <div id=${listItem.id} class='list-item'>
//                     <h3>${listItem.name} (${listItem.id})</h3>
//                     <h3>${listItem.age}</h3>
//                 </div>
//             `
// }

// function changePage(e){
//     const target = e.target
//     if(target.className === 'page-btn'){
//         console.log(target)
//         const indexSelected = parseInt(target.innerText) - 1
//         console.log(indexSelected)
//         offset = limit * indexSelected
//         console.log(offset)

//         const listSelected = []
//         // offset ~ offset + limit - 1 까지의 리스트만 추출하기
//         for(let i=offset; i<offset + limit;i++){
//             const item = pageContents[i+1]
//             listSelected.push(item)
//         }
//         console.log(listSelected)

//         // 화면 초기화
//         contents.innerHTML = ''

//         // 화면에 특정 페이지 리스트만 보여주기
//         for(let listItem of listSelected){
//             contents.innerHTML += `
//                 <div id=${listItem.id} class='list-item'>
//                     <h3>${listItem.name} (${listItem.id})</h3>
//                     <h3>${listItem.age}</h3>
//                 </div>
//             `
//         }
//     }
// }
// pageBtns.addEventListener('click', changePage)


// //버블링,캡쳐링 (캡쳐링(true):바디-부모객체-자식 순으로 버튼 이벤트발생, 버블링(false):반대로 자식-부모객채-바디로 이벤트발생)
// const parent = document.querySelector('.parent')
// const child = document.getElementById('child')

// function hideParent(){
//     console.log('parent clicked !')
//     parent.classList.add('hide')
// }
// function popup(e){
//     alert('button clicked !')
//     e.stopPropagation() // 이벤트 버블링 방지
// }

// parent.addEventListener('click', hideParent)
// child.addEventListener('click', popup)

// //이벤트 위임을 하기

// const fruitContainer = document.getElementById('fruits')
// let prevTarget = null
// function openMenu(e){
//     const target = e.target
//     if(prevTarget !==null){
//         prevTarget.nextElementSibling.classList.remove('open')
//         console.log(prevTarget)
//     }
//      if(target.className === 'title'){
//         console.log(target)
//         console.dir(target)
//         target.nextElementSibling.classList.add('open')
//        prevTarget = target
//     }
// }

// fruitContainer.addEventListener('click', openMenu)

// function moveToRight(e){
//     // 바로 전에 클릭한 타겟의 위치 초기화
//     if(prevTarget !== null){
//         prevTarget.style.marginLeft = '0px'
//     }
    
//     // 현재 클릭한 타겟의 위치 변경
//     const target = e.target
//     if(target.className === 'fruit'){
//         target.style.marginLeft = '100px'
        
//         // 현재 타겟 저장
//         prevTarget = target
//     }
//     target.classList.toggle('right')
// }

// fruitContainer.addEventListener('mouseleave', moveToRight)

//스크롤 반응
//  const contents = document.querySelectorAll('.contents')

//  function startAnimation() {
//      for (let content of contents) {
//          console.log(content.getBoundingClientRect().top)
         
//          if (!content.classList.contains('show') && content.getBoundingClientRect().top < 600) {            
//              content.classList.add('show')
//          }
//          else if(content.classList.contains('show') && content.getBoundingClientRect().top < -150){
//             content.classList.remove('show')
//          }    
//      }
//  }

//  window.addEventListener('scroll', startAnimation)

//캐릭터 무빙.
// const box = document.getElementById('box')
// const gravity = 1
// const FPS = 30
// const limitBottom = 500
// const limitLeft = 1300
// const limitTop = 300

// let vx = 100
// let vy = 0
// let isJumping = true
// let isDead = false

// 처음에 isJumping 을 true 로 설정해서 점핑 가능하게 함
// 점핑 가능하면 계속 점프하다가 vy 가 0 보다 작아지면 isJumping 이 false 가 되면서 더이상 점핑이 불가능함
// 중력은 계속 작용하니까 중력에 의해서 아래로 내려오다가 limit 에 닿으면 isJumping 이 다시 true 가 되면서 점핑이 가능하게 됨

// 슈퍼 마리오가 limitLeft 값을 넘어가면, 즉, 땅을 벗어나면 죽었으므로 isDead 가 true 가 되고 isDead 가 true 이면 계속 아래로 떨어짐

// function down(){
//     const topStyle = window.getComputedStyle(box).top
//     let top = parseInt(topStyle)


//     // 중력이 계속 작용하고 있는중
//     vy += gravity
//     top += vy
   

//     // 슈퍼마리오가 땅에 있는 동안에는 죽지 않았으므로 더이상 아래로 떨어지지 않음
//     if(!isDead && top >= limitBottom){
//         top = limitBottom
//         isJumping = true
//     }

//     box.style.top = `${top.toString()}px`
// }
// const timerId = setInterval(down ,1000/FPS)


// function move(e){
   
//     const leftStyle = window.getComputedStyle(box).left
//     const topStyle = window.getComputedStyle(box).top
//     let left = parseInt(leftStyle)
//     let top = parseInt(topStyle)

//     // 여러 키의 동작이 동시에 적용되려면 if 문을 사용하면 됨 (예: spacebar + arrow key)
//     if(e.keyCode === 39){
//         box.style.backgroundImage = "url('hama.gif')";
//         left += vx
//         if(left > limitLeft){
//             isDead = true
//         }
//     }
//     else if(e.keyCode === 37){
//         box.style.backgroundImage = "url('hama.gif')";
//         if(left > 0){
//             left -= vx
//         }
//     }
//     else if(e.keyCode === 32 || e.keyCode === 38){
//         if(isJumping && top >= limitTop){  // 점프 높이에 제한을 둠
//             vy -= gravity
//             top -= vy
//         }
//         if(vy <= 0){ 
//             isJumping = false
//         }
//     }

//     box.style.left = `${left.toString()}px` 
//     box.style.top = `${top.toString()}px` 
// }
// window.addEventListener('keydown', move)


// 로컬스토리지에 이미지 경로 저장하기
const fileInput = document.getElementById('file-input')
const imgBox = document.getElementById('img-box')

function isValid(type){
    return type.split('/')[0] === 'image'
}

function displayImg(src){
    console.log(src.split(':')[0])
    const srcPrefix = src.split(':')[0]
    if(srcPrefix === 'blob' ){
        imgBox.innerHTML += `<div class='img-item'><img src='${src}'/></div>`
    }else{
        imgBox.innerHTML += `<div class='img-item'><img src=${src}/></div>`
    }
    
}
function upload(file){
    const reader = new FileReader() // 사용자가 업로로드한 파일 데이터를 읽어오기 위한 파일 객체

    if(!isValid(file.type)){
        imgBox.innerHTML = 'File type is not valid !'
        return;
    }

    const src = URL.createObjectURL(file)
    displayImg(src) // 화면에 이미지를 보여주기

    reader.onload = rememberImg // 파일 읽기가 끝나면 rememberImg 를 실행함
    reader.readAsDataURL(file) // reader 객체가 파일을 읽어오기
}

function rememberImg(e){
    console.log(e.target.result) // reader 객체로 읽어온 데이터  (이미지 경로)
    const files = JSON.parse(localStorage.getItem('files')) || []
    if(files){
        const file = JSON.stringify(e.target.result)
        files.push(file)
    }
    localStorage.setItem('files', JSON.stringify(files))
}

function uploadImg(e){
    const files = e.target.files
    for(let file of files){
        upload(file)
    }
}

// 화면이 처음 로딩될때 로컬스토리지에 저장된 이미지를 보여주기
function renderImg(){
    imgBox.innerHTML = ''
    const files = JSON.parse(localStorage.getItem('files')) || []
  
    if(files.length > 0){
        for(let file of files){
            displayImg(file)
        }
    }
}

fileInput.addEventListener('change', uploadImg)
window.addEventListener('load', renderImg)