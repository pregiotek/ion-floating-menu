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
 
    <link href="lib/ion-floating-menu/dist/ion-floating-menu.css" rel="stylesheet" type="text/css"/>
        ...
    <script src="lib/ion-floating-menu/dist/ion-floating-menu.js" type="text/javascript"></script>

#### Angular Dependency (app.js)
Add `ion-floating-menu` as a module dependency of your angular module.
    
    angular.module('MyApp', ['ionic', 'ion-floating-menu'])
      ...

## Usage: ionic-floating-button

![Alt ion-floating-button](/doc/ion-floating-button.png?raw=true)

Add the `ion-floating-button` directive in your template.

Important: put it before and outside the `ion-content` node:

    <ion-floating-button click="myEvent()" has-footer="false" button-color="#2AC9AA" icon="ion-plus" iconColor="#fff">
    </ion-floating-button>

    <ion-content>
        ...

where `myEvent()` is trigger when you tap or click.

#### Config

* __click__: event expression
* __button-color__: CSS Color for the button (`#2AC9AA` by default)
* __button-class__: CSS Class to apply your style to the button (alternative to `button-color`) 
* __icon__: ionic icon (`ion-plus` by default; note that the `icon` class is already defined)
* __icon-color__: CSS Color for the icon (`#fff` by default) 
* __has-footer__: if the template has a footer, so it fixes the position (`false` by default)

## Usage: ion-floating-menu

![Alt ion-floating-menu](/doc/ion-floating-menu.png)
![Alt ion-floating-menu](/doc/ion-floating-menu-2.png)

Add the `ion-floating-menu` directive in your template.

Important put it before `ion-content`.

    <ion-floating-menu>
        <ion-floating-item icon="ion-camera" click="myEvent()"></ion-floating-item>
        <ion-floating-item icon="ion-person" click="myEvent()"></ion-floating-item>
    </ion-floating-menu>

where `myEvent()` is trigger when you tap or click.

#### Config

ion-floating-menu:
* __menu-color__: CSS Color for the button (`#2AC9AA` by default)
* __menu-icon__: ionic icon (`ion-plus` by default; note that the `icon` class is already defined)
* __menu-icon-color__: CSS Color for the icon (`#fff` by default) 
* __menu-open-color__: CSS Color for the button (`#2AC9AA` by default)
* __menu-open-icon__: ionic icon (`ion-minus` by default; note that the `icon` class is already defined)
* __menu-open-icon-color__: CSS Color for the icon (`#fff` by default) 
* __has-footer__: if the template has a footer, so it fixes the position (`false` by default)

ion-floating-item:
* __click__: event expression (required)
* __icon__: ionic icon (required)
* __text__: if you want to attach a lable to the button
* __text-class__: CSS Class for the button. Note: add !important to the CSS statements if they are not applied correctly. 
* __button-color__: CSS Color for the button (`#2AC9AA` by default)
* __button-class__: CSS Class to apply your style to the button (alternative to `button-color`) 
* __icon-color__: CSS Color for the icon (`#fff` by default) 


## Questions?

If you have any question or remark, you can either: 
* posting a comment on this site, 
* send me an email: ndg@pregiotek.com
* report it on the [Github page](https://github.com/pregiotek/ion-floating-menu) 

Have fun!

