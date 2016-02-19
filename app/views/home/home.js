'use strict';

let vmModule = require("./home-view-model");
let frameModule = require('ui/frame');
let drawerModule = require("nativescript-telerik-ui/sidedrawer");

function pageLoaded(args) {
    let page = args.object;
    page.bindingContext = vmModule.homeViewModel;  
    vmModule.homeViewModel.setDrawerTransition(page, new drawerModule.ScaleDownPusherTransition());
}

function goToFavourites(){
	let topmost = frameModule.topmost();
	topmost.navigate('./views/favourites/favourites');
}

exports.pageLoaded = pageLoaded;
exports.goToFavourites = goToFavourites;