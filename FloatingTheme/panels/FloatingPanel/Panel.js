/*
Copyright 2015 Esri Canada - All Rights Reserved

Licensed under the Apache License Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

define(["dojo/_base/declare",
		"jimu/BaseWidgetPanel",
		"jimu/BaseWidgetFrame",
		"./PanelWrapper"
	], function(
		declare,
		BaseWidgetPanel,
		BaseWidgetFrame,
		PanelWrapper
		//By declaring BaseWidgetPanel with PanelWrapper, the frame will be contained in the
		//wrappers element with the data-dojo-attach-point="containerNode" attribute
	) { return declare([BaseWidgetPanel, PanelWrapper], {

		baseClass: "jimu-panel-floating",

		//INITIALIZATION///////////////////////////////////////////////////////////////////////////
		startup: function() {
			this.inherited(arguments);

			//Close the panel on close button click
			this.domNode.querySelector(".close").addEventListener("click", this.closePanel.bind(this));
		},

		//REMOVE LISTENERS ON DESTRUCTION//////////////////////////////////////////////////////////
		destroy: function() {
			this.domNode.querySelector(".close").removeEventListener("click", this.closePanel.bind(this));
		},

		//CLOSE THE PANEL ON BUTTON CLICK//////////////////////////////////////////////////////////
		closePanel: function() {
			this.panelManager.closePanel(this);
		},

		//SET LABEL WHEN A NEW WIDGET IS LOADED////////////////////////////////////////////////////
		reloadWidget: function(widgetConfig) {
			this.inherited(arguments);
			this.setTitleLabel(widgetConfig.label);
		},

		//UPDATE LABEL WHEN CONFIG CHANGED/////////////////////////////////////////////////////////
		updateConfig: function(config) {
			this.inherited(arguments);
			this.setTitleLabel(config.label);
		},

		//CREATE A NEW FRAME///////////////////////////////////////////////////////////////////////
		//This element will contain the widget and is called by BaseWidgetPanel
		createFrame: function(widgetConfig) {
			return new BaseWidgetFrame();
		}
	}); //End of declare
});