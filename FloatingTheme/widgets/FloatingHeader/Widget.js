/*
	Copyright 2015 - Esri Canada

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

define([
	"dojo/_base/declare",
	"dojo/dom-class",
	"jimu/BaseWidget"
], function(
		declare,
		domClass,
		BaseWidget
	) { return declare([BaseWidget], {

		baseClass: "jimu-widget-floatingheader",
		name: "Floating Header",

		constructor: function() {

		},
		
		//INITIALIATION///////////////////////////////////////////////////////////////////////////
		postCreate: function() {
			this.inherited(arguments);
			
			//Set title, subtitle, and links according to configuration
			this.domNode.querySelector("h1").innerHTML = this.appConfig.title;
			this.domNode.querySelector("h2").innerHTML = this.appConfig.subtitle;
			this._buildLinks(this.appConfig.links);
			
			//Add logo if available and apply filter is enabled
			this._logoChange(this.appConfig.logo);
			
			//Apply the logo blending filter if enabled
			if (this.config.filterLogo) {
				domClass.add(this.domNode, "filterLogo");
			}
			else {
				domClass.remove(this.domNode, "filterLogo");
			}
			
			//On links button click, expand/collapse the links sections
			this.domNode.querySelector(".linksButton").addEventListener("click", this.linksButtonClick.bind(this));
			
			//Ensure the links section is closed on load
			domClass.remove(this.domNode, "linksOpen");
			domClass.remove(document.body, "headerLinksOpen");
		},
		
		//REMOVE LISTENERS & TIMERS////////////////////////////////////////////////////////////////
		destroy: function() {
			this.domNode.querySelector(".linksButton").removeEventListener("click", this.linksButtonClick.bind(this));
			this.inherited(arguments);
		},
		
		//CONFIGURATION CHANGES////////////////////////////////////////////////////////////////////
		onAppConfigChanged: function(appConfig, reason, changedData) {
			if (reason == "attributeChange") {
				if (changedData.title && changedData.title !== this.appConfig.title) {
					this.domNode.querySelector("h1").innerHTML = changedData.title;
				}
				if (changedData.subtitle && changedData.subtitle !== this.appConfig.subtitle) {
					this.domNode.querySelector("h2").innerHTML = changedData.subtitle;
				}
				if (changedData.logo) {
					this._logoChange(changedData.logo);
				}
				if (changedData.links) {
					this._buildLinks(changedData.links);
				}
			}
		},
		
		//LINKS BUTTON CLICK///////////////////////////////////////////////////////////////////////
		linksButtonClick: function(evt) {
			domClass.toggle(this.domNode, "linksOpen");
			domClass.toggle(document.body, "headerLinksOpen");
		},
		
		//BUILD LINKS//////////////////////////////////////////////////////////////////////////////
		_buildLinks: function(links) {
			var cnt = this.domNode.querySelector(".links");
			
			//Clear existing links
			cnt.innerHTML = "";
			
			//Adjust sizing via CSS with class
			if (links.length > 2) {
				cnt.className = "links plus";
			}
			else if (links.length > 1) {
				cnt.className = "links two";
			}
			else {
				cnt.className = "links";
			}
			
			//Create a master anchor element to be cloned
			var masterAnchor = document.createElement("a");
			masterAnchor.target = "_blank";
			
			//Append the first 4 links
			links.forEach(function(item, i) {
				if (i < 4) {
					var anchor = masterAnchor.cloneNode();
					anchor.href = item.url;
					anchor.innerHTML = item.label;
					cnt.appendChild(anchor);
				}
			});
		},
		
		//LOGO SOURCE CHANGE///////////////////////////////////////////////////////////////////////
		_logoChange: function(source) {
			this.domNode.querySelector(".logo img").src = source;
		}

	});//End of declare
});