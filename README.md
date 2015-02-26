### WAB-FloatingTheme
## Web AppBuilder for ArcGIS - Floating Theme v1.1

This custom responsive theme was built for demonstrations of Web AppBuilder for ArcGIS – Developer Edition. Each element in this theme is disconnected from others and floats on top of the map. This theme includes 2 textured styles: Wood Plank, and Slate.

![Screenshot](https://github.com/dblanchardDev/WAB-FloatingTheme/raw/master/screenshots.jpg "")

Since this theme does not make use of a controller, widgets are limited to the 5 placeholders that are provided by default (more can be added by modifying the layout configuration).

This is an excellent theme for developers looking for a starting point in building their own themes as the code has been stripped down to a minimum and is well commented.

### Using the Theme

To use this theme, you must have a copy of [Web AppBuilder for ArcGIS – Developer Edition](https://developers.arcgis.com/web-appbuilder/) (does not work with ArcGIS Online of Portal for ArcGIS). You must also have an [ArcGIS Online Organizational Account](http://www.esri.com/software/arcgis/arcgisonline/).

To add the theme to the builder, simply add the `FloatingTheme` folder to the `…/client/stemapp/themes` folder of your Web AppBuilder install; the new theme will be detected automatically and will be available in the builder interface. If you already have Web AppBuilder open in your browser, you will need to refresh the web page before seeing the new theme.

### Settings
Application icon blending can be turned off in the Floating Header settings.

### Known Limitations

- Since this theme does not include a controller widget, widgets can only be added to placeholder. If widgets were included in the controller of the previous theme, they will not show up in this theme. In order to avoid duplicate widgets, it is best to remove all widgets from the controller before using this theme.
- There is no log-in/log-out buttons for ArcGIS Online
- Due to lack of support for CSS3 filters, Internet Explorer does not blend icons with the background texture.

### Supported Browsers

- Internet Explorer 9, 10, 11
- Firefox 36+
- Chrome 40+
- Opera 27+

Although untested, Safari 7.1+ should also work with this theme.

Lack of support for Internet Explorer 8 is intentional in order to make use of modern codding techniques.

### Issues

Found a bug? Please let us know by submitting an issue.

### Contributing

Esri Canada welcomes contributions from anyone and everyone on this open source project. Please see our [guidelines](../master/Contributing.md) in the repository before contributing.

### Licensing

Copyright 2015 Esri Canada - All Rights Reserved

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's [LICENSE](../master/LICENSE) file.

### Support

This theme is distributed as is and is not supported by Esri Canada, Esri Inc. or any other Esri distributor.