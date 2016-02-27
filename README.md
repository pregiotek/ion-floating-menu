# ion-floating-menu
Menu and Button Material UI-like for Ionic applications

## Features

* Button similar to the Material UI Floating Action Button
* Menu similar to the Material UI Floating Action Button

## Setup

#### Install

`bower install ion-floating-menu`


#### JS/CSS Imports (index.html)

Include the following file imports in your index.html (the example assumes ./lib/ion-floating-menu folder):
 
    <link rel="stylesheet" href="lib/ion-floating-menu/dist/ion-floating-menu.css">
    ...
    <script src="lib/ion-floating-menu/dist/ion-floating-menu.js"></script>

#### Angular Dependency (app.js)
Add `ion-floating-menu` as a module dependency of your angular module.

    angular.module('MyApp', ['ionic', __ 'ion-floating-menu' __ ])
      .config(function () {..});

## Usage
Add the `ion-floating-menu` directive in your template.
Important put it before `ion-content`:

#### ionic-plus-button
```
<ionic-plus-button button-color="#2AC9AA" icon="ion-plus" iconColor="#fff" click="myEvent()">
</ionic-plus-button>
```

##### Config
* _button-color_: CSS Color for the button
* _icon_: ionic icon (icon class is already defined)
* _iconColor_: CSS Color for the icon 
* _has-footer_: (false by default) if the template has a footer, so it fixes the position

#### ion-floating-menu
TODO



## Questions?

If you have any question or remark, you can either: 
* posting a comment on this site, 
* send me an email: ndg@pregiotek.com
* report it on the [Github page](https://github.com/pregiotek/ion-floating-menu) 

Have fun!

