/*(function() {
  let ths = document.getElementsByTagName('option');
  //console.log(ths);
  
  let i;

  for (i = 0; i < ths.length; i++) {
    ths[i].addEventListener('click', function() {*/
      
      function dispArr() {
        const items = [
        {
          id: 1,
          name: 'fukushi',
          value: 19,
          price: 400,
          date: '2018-04-01'
        },
        {
          id: 2,
          name: 'tanabe',
          value: 1,
          price: 100,
          date: '2018-09-01'
        },
        {
          id: 3,
          name: 'yoshimara',
          value: 30,
          price: 500,
          date: '2018-02-01'
        }
      ];
    
      items.sort(
        /*function(a,b){
          let aName = a['name'];
          let bName = b['name'];
    
          if( aName < bName ) return -1;
          if( aName > bName ) return 1;
          return 0;
        }*/
      );
    
      //document.getElementById('list').innerHTML='';
      

      for(let i = 0 ; i < items.length ; i++ ) {
        document.getElementById('list').innerHTML += items[i]+'';
        }
      


  /* //並び替えるデータ
  $(function() {
    const items = [
    {
      id: 1,
      name: 'fukushi',
      value: 19,
      price: 400,
      date: '2018-04-01'
    },
    {
      id: 2,
      name: 'tanabe',
      value: 1,
      price: 100,
      date: '2018-09-01'
    },
    {
      id: 3,
      name: 'yoshimara',
      value: 30,
      price: 500,
      date: '2018-02-01'
    }
  ];

  items.sort(
    function(a,b){
      let aName = a['name'];
      let bName = b['name'];

      if( aName < bName ) return -1;
      if( aName > bName ) return 1;
      return 0;
    }
  );

  for(i = 0 ; i < items.length ; i++ ) {
    document.writeln(i + ':' + items[i]['name'] + items[i]['id'] + items[i]['value'] + items[i]['price'] + items[i]['date'] );
    }
  });
  
// プルダウン uiで切り替えたら
// リストの表示が変わる
// 切り替え項目は以下
// id順
// 値段順
// 名前順
// 個数順
// 日付順
  
  すべてできたら名前を日本語に変更してみてください
  */