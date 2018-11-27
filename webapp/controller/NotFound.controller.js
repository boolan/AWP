sap.ui.define([
		"awp/awp/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("awp.awp.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);