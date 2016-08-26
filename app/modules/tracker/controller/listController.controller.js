angular.module('tracker').controller('ListController', ListController);

function ListController() {
    this.items = [{
            type: 'Running'
            , distance: '3.5km'
            , date: '01/08/2016'
}
        , {
            type: 'Running'
            , distance: '2.5km'
            , date: '03/08/2016'
}

             ];
}