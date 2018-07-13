console.log(window.screen.height)
document.addEventListener('click', event => {
  console.log(event)
  if (event.target.classList.contains('tab-content__item') && !event.target.classList.contains('tab-content__item--active')) {
    let tabs = event.target.parentNode.children //クリックされたクラスの親の子供を指定（つまりクリックされたクラス自身を含む兄弟クラス）
    let tabContent = event.target.parentNode.parentNode //クリックされた親の親クラス
    let index = event.target.getAttribute('index') //クリックされたクラスのindexを取得

    let list_tabs = tabContent.querySelector('.list--tab')
    let lists = list_tabs.querySelectorAll('.list__item')

    let lists = tabContent.querySelector('.list--tab').querySelectorAll('.list__item')

    //list--tab内のdivを全て取ってくる
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('tab-content__item--active') //タブを全て非アクティブに
    }
    for (let j = 0; j < lists.length; j++) {
      lists[j].classList.remove('list--active')
      lists[j].classList.add('list--inactive') //listを全て非アクティブに
    }
    event.target.classList.add('tab-content__item--active') //クリックされたタブをアクティブに
    lists[index].classList.remove('list--inactive')
    lists[index].classList.add('list--active') //クリックされたlist（indexされた）をアクティブに
  }
 })

 //１ addEventListener - イベントを登録する方法　clickがイベ発生のきっかけ
 //２ もし イベント 要素のクラスリストが特定クラス（tab-content__item）を含む場合に　！ただし（tab-content__item--active）は含まない　　event.targetとは？
 //３  tabs という変数をつくる 親ノード　
 //4   tabContent　という変数をつくる
 //5   index という変数をつくる　.getAttribute eventの中のhtmlのindexの番号が取れる (Event.currentTarget)
 //6   lists という変数をつくる　
 //7    


 // document window
 // メソッドチェーン（ドットで繋ぐこと＝チェーン　9−10行目と12行目は同じこと