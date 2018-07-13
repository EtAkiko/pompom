/*document.addEventListener('click', event => {
    if (event.target.classList.contains('tab_list_menu') && !event.target.classList.contains('active')) {
      let tabs = event.target.parentNode.children //クリックされたクラスの親の子供を指定（つまりクリックされたクラス自身を含む兄弟クラス）
      let tabContent = event.target.parentNode.parentNode //クリックされた親の親クラス
      let index = event.target.getAttribute('index') //クリックされたクラスのindexを取得
      let lists = tabContent.querySelector('tab_container').querySelectorAll('tabs')//list--tab内のdivを全て取ってくる
      
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active') //タブを全て非アクティブに
      }
      
      for (let j = 0; j < lists.length; j++) {
        lists[j].classList.remove('tab_contents active')
        lists[j].classList.add('tab_contents') //listを全て非アクティブに
      }
      event.target.classList.add('tab_contents active') //クリックされたタブをアクティブに
      lists[index].classList.remove('')
      lists[index].classList.add('tab_contents active') //クリックされたlist（indexされた）をアクティブに
    }
})*/

document.addEventListener('click', event => {
  if (event.target.classList.contains('tab-content__item') && !event.target.classList.contains('tab-content__item--active')) {
    let tabs = event.target.parentNode.children //クリックされたクラスの親の子供を指定（つまりクリックされたクラス自身を含む兄弟クラス）
    let tabContent = event.target.parentNode.parentNode //クリックされた親の親クラス
    let index = event.target.getAttribute('index') //クリックされたクラスのindexを取得
    let lists = tabContent.querySelector('.list--tab').querySelectorAll('.list__item')//list--tab内のdivを全て取ってくる
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