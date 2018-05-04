({
    doInit: function (component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        if (createRecordEvent) {
            component.set("v.createRecordIsSupported", true);
        }
        var action = component.get("c.getBoatTypes");
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                var list = response.getReturnValue();
                component.set("v.boatTypes", list);
            }
        })
        $A.enqueueAction(action);
    },
    newBoat: function (component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        var selectedBoatTypeId = component.get("v.boatTypeId");
        createRecordEvent.setParams({
            "entityApiName": "Boat__c"
        });
        if (selectedBoatTypeId) {
            createRecordEvent.setParams({
                "defaultFieldValues": {'BoatType__c': selectedBoatTypeId}
            });
        }
        createRecordEvent.fire();
    },
    onFormSubmit: function (component, event, helper) {
        var submitEvent = component.getEvent("formsubmit");
        var boatTypeId = component.get("v.boatTypeId");
        submitEvent.setParams({
            "formData": {"boatTypeId": boatTypeId}
        });
        submitEvent.fire();
    },
})