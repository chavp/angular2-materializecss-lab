System.register(['angular2/core', 'angular2/router', './components/app-footer.component', './components/app-nav.component', './components/app-bages.component', './components/app-buttons.component', './components/app-breadcrumbs.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_footer_component_1, app_nav_component_1, app_bages_component_1, app_buttons_component_1, app_breadcrumbs_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_footer_component_1_1) {
                app_footer_component_1 = app_footer_component_1_1;
            },
            function (app_nav_component_1_1) {
                app_nav_component_1 = app_nav_component_1_1;
            },
            function (app_bages_component_1_1) {
                app_bages_component_1 = app_bages_component_1_1;
            },
            function (app_buttons_component_1_1) {
                app_buttons_component_1 = app_buttons_component_1_1;
            },
            function (app_breadcrumbs_component_1_1) {
                app_breadcrumbs_component_1 = app_breadcrumbs_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                    $('.button-collapse').sideNav();
                    $('.dropdown-button').dropdown();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'dogfoods-app',
                        templateUrl: './app/views/app.component.html',
                        directives: [
                            app_footer_component_1.AppFooterComponent,
                            app_nav_component_1.AppNavComponent,
                            app_bages_component_1.AppBagesComponent,
                            app_buttons_component_1.AppButtonsComponent,
                            app_breadcrumbs_component_1.AppBreadcrumbsComponent,
                            router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/bages', name: 'Bages', component: app_bages_component_1.AppBagesComponent },
                        { path: '/buttons', name: 'Buttons', component: app_buttons_component_1.AppButtonsComponent },
                        { path: '/breadcrumbs', name: 'Breadcrumbs', component: app_breadcrumbs_component_1.AppBreadcrumbsComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map