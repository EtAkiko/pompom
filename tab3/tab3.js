(function() {
    let tabItems = document.getElementsByClassName('tab_list_menu');
    let contens = document.getElementsByClassName('tab_contents');

    let i;

    for (i=0; i < tabItems.length; i++) {
        tabItems[i].addEventListener('click', function(e) {
            e.preventDefault();

            let i;
            for (i=0; i<tabItems.length; i++){
                tabItems[i].className = 'tab_list_menu';
            }

            this.className = 'tab_list_menu active';

            for (i=0; i<contens.length; i++) {
                contens[i].className = 'tab_contents'
            }
            document.getElementById(this.dataset.id).className = 'tab_contents active';
        });
    }
})();