(function() {
  let ths = document.getElementsByTagName('th');
  let i;
  let sortOrder = 1;//1：昇順　−1：降順

  for (i = 0; i < ths.length; i++) {
    ths[i].addEventListener('click', function() {

      //sortするぞ〜
  
      let rows = Array.prototype.slice.call(document.querySelectorAll('tbody > tr'));
      let col = this.cellIndex;
      let type = this.dataset.type;//string number

      rows.sort(function(a,b) { //tr,trを取得
        if (type === "number") {
          var _a = a.children[col].textContent * 1;//letだとエラーでる
          var _b = b.children[col].textContent * 1;
        }
        if (type === "string") {
          var _a = a.children[col].textContent.toLowerCase();//お前もかletだとエラー出るのなんで？？？
          var _b = b.children[col].textContent.toLowerCase();
        }
        
        if(_a < _b) {
          return -1 * sortOrder;
        }
        if (_a > _b) {
          return 1 * sortOrder;
        }
        return 0;
      });
      //console.log(rows);

      let tbody = document.querySelector('tbody');

      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }

      let j;
      for (j = 0; j < rows.length; j++) {
        tbody.appendChild(rows[j]);
      }
      let k;
      for (k = 0; k < ths.length; k++) {
        ths[k].className = '';//thについたclass名をリセット
      }
      this.className = sortOrder === 1 ? 'asc' : 'desc';

      sortOrder *=-1;

    });
  }
})();


  /* 並び替えるデータ
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
  });*/