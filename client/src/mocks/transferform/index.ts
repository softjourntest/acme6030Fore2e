export let mock_transferform = {
    Submit: function Submit(params) {
        this.go("confirmation");
    },
    menu: function menu(params) {
        this.go("menuicons");
    },
    Submit2: function Submit2(params) {
        this.go("confirmation");
    }
};
