sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller) => {
    "use strict";

    return Controller.extend("com.login.lkm.loginpagedemo.controller.View1", {
        onInit() {
        },

	// ----Login page demo---start
    onPress:function()
	{
		var v1 = this.getView().byId("name").getValue();
		var v2 = this.getView().byId("pwd").getValue();  
		if((v1==="") || (v2===""))
		{
			toast.show("Please enter all Values!");
		}
		else
		{
			this.getView().byId("vals").setText("Welcome,"+ v1);
			toast.show("Welcome," + this.getView().byId("name").getValue());
		}
	},
	onClear:function()
	{
		this.getView().byId("name").setValue("");
		this.getView().byId("pwd").setValue("");
	},
    });
});