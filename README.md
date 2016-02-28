# ion-floating-menu
Material UI-like Floating Action Button and Menu for Ionic applications

## Features

* Button similar to the Material UI Floating Action Button
* Menu similar to the Material UI Floating Action Button

## Setup

#### Install

`bower install ion-floating-menu`


#### JS/CSS Imports (index.html)

Include the following file imports in your index.html (the example assumes ./lib/ion-floating-menu folder):
 
    ```
    <link href="lib/ion-floating-menu/dist/ion-floating-menu.css" rel="stylesheet" type="text/css"/>
        ...
    <script src="lib/ion-floating-menu/dist/ion-floating-menu.js" type="text/javascript"></script>
    ```

#### Angular Dependency (app.js)
Add `ion-floating-menu` as a module dependency of your angular module.
    
    ```
    angular.module('MyApp', ['ionic', 'ion-floating-menu'])
      ...
    ```

## Usage
Add the `ion-floating-menu` directive in your template.
Important put it before `ion-content`:

#### ionic-floating-button

Add the `ion-floating-button` directive in your template.

Important: put it before and outside the `ion-content` node:

```
    <ion-floating-button click="myEvent()" has-footer="false" button-color="#2AC9AA" icon="ion-plus" iconColor="#fff">
    </ion-floating-button>

    <ion-content>
        ...
```

where `myEvent()` is trigger when you tap or click.

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

