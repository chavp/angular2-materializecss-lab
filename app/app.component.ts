import {Component, OnInit} from 'angular2/core';
import {AppFooterComponent} from './components/app-footer.component';
import {AppNavComponent} from './components/app-nav.component';

@Component({
    selector: 'dogfoods-app',
    templateUrl: './app/views/app.component.html',
    directives: [AppFooterComponent, AppNavComponent]
})
export class AppComponent implements OnInit{ 
	ngOnInit() {
		$('.button-collapse').sideNav();
		$('.dropdown-button').dropdown();
    }
}