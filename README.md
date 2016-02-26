# ionic-plus-menu
Menu and Button Material UI-like for Ionic applications

## Setup

#### Install

`bower install ionic-plus-menu`

#### JS/CSS Imports (index.html)
Include the following JavaScript/CSS file imports in your index.html.  Remember to import the ionic libraries first!
The example below assumes your 3rd party bower dependencies are located in the default bower_components folder.
    
    <link rel="stylesheet" href="bower_components/ionic-plus-menu/dist/ionic-plus-menu.css">
    <script src="bower_components/ionic-plus-menu/dist/ionic-plus-menu.js"></script>

#### Angular Dependency (app.js)
Add `ionic-plus-menu` as a module dependency of your app module.

    angular.module('Demo', ['ionic', 'ionic-plus-menu'])
      .config(function () {..});


## Usage

### ionic-plus-button

`<ionic-plus-button button-color="#2AC9AA" icon="ion-plus" iconColor="#fff" click="myEvent()">`

`</ionic-plus-button>`





