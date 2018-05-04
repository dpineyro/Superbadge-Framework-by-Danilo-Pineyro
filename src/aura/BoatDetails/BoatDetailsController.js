({
    onBoatSelected: function (component, event, helper) {
        var boatId = event.getParam("boat").Id;
        component.set("v.id",boatId);
        var service = component.find("service");
        service.reloadRecord();
    },
    onRecordUpdated: function (component, event, helper) {
        var boatReviewsComp =component.find("boatReviews");
        if(boatReviewsComp){
            boatReviewsComp.refresh();
        }
    },
    onBoatReviewAdded: function (component, event, helper) {
        component.find("tab").set("v.selectedTabId","boatreviewtab");
        var boatReviewsComp =component.find("boatReviews");
        if(boatReviewsComp){
            boatReviewsComp.refresh();
        }
    },
})