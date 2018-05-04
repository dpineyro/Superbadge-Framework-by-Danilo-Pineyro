({
	/*getBoatTypeNames : function(component) {
            var action = component.get("c.getBoatTypes");

            //add the callback behavior for when the response is received
            action.setCallback(this,function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.boatTypes", response.getReturnValue());
                console.log(response.getReturnValue());
                }
                else {
                console.log("Failed with state: " + state);
                }
            });

            //send action off to be executed
            $A.enqueueAction(action);
       },
    handleGetBoatTypeNamesResponse : function (component) {
        return $A.getCallback(function (response) {
            console.log(response)
            //Set Boat Type Names in aura attribute
            var boatTypes = response;
            component.set('v.boatTypes', boatTypes)
            console.log(component.get('v.boatTypes'))
        }.bind(this));
    },
    handleError : function (component) {
        return $A.getCallback(function (error) {
            //Log error and display toast
            console.log(error);
            var opts = {
                title : 'Boat Search Form',
                message : error,
                type : 'error'
            }
            this.displayToast(opts)
        }.bind(this));
    },*/
})