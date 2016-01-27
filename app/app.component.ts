import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AppFooterComponent} from './components/app-footer.component';
import {AppNavComponent} from './components/app-nav.component';
import {AppBagesComponent} from './components/app-bages.component';
import {AppButtonsComponent} from './components/app-buttons.component';
import {AppBreadcrumbsComponent} from './components/app-breadcrumbs.component';

@Component({
    selector: 'dogfoods-app',
    templateUrl: './app/views/app.component.html',
    directives: [
    	AppFooterComponent, 
    	AppNavComponent, 
    	AppBagesComponent, 
    	AppButtonsComponent, 
        AppBreadcrumbsComponent, 
    	ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/bages', name: 'Bages', component: AppBagesComponent},
  {path:'/buttons', name: 'Buttons', component: AppButtonsComponent},
  {path:'/breadcrumbs', name: 'Breadcrumbs', component: AppBreadcrumbsComponent}
])
export class AppComponent implements OnInit{ 
	ngOnInit() {
		$('.button-collapse').sideNav();
		$('.dropdown-button').dropdown();
    }
}