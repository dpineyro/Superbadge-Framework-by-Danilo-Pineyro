({
    doSearch: function (component, event, helper) {
        var params = event.getParam('arguments');
        if (params){
        var boatTypeId = params.boatTypeId;
            helper.onSearch(component,boatTypeId);
        }
    },
    onBoatSelect: function (component, event, helper) {
        var boatId = event.getParam("boatId");
        component.set("v.selectedBoatId",boatId);
        //I get the Id of the boat into the event attribute
        //and then i set the attribute selectedBoatId
    },
})