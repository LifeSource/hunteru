!function(){"use strict";angular.module("app",["app.core","app.common","app.hunter","app.layout"])}(),function(){"use strict";angular.module("app.common",[])}(),function(){"use strict";angular.module("app.core",["ui.router","ui.bootstrap","ngResource","ngAnimate"])}(),function(){"use strict";angular.module("app.hunter",["app.core"])}(),function(){"use strict";angular.module("app.layout",[])}(),function(){"use strict";function t(t){function e(){return t.get("/api/nenTypes").then(a)["catch"](i)}function n(){return t.get("/api/occupations").then(a)["catch"](i)}function a(t){return t.data}function i(t){toastr.error(t)}var r={getNenTypes:e,getOccupations:n};return r}angular.module("app.core").factory("dataService",t),t.$inject=["$http"]}(),function(){"use strict";function t(t){function e(e){return t.get(s+e).then(a)["catch"](i)}function n(){return t.get(s).then(a)["catch"](i)}function a(t){return t.data}function i(t){return t}function r(t){return t.status}function l(e){return t.post(s,e).then(a)["catch"](i)}function o(e){return t.patch(s+e._id,e).then(r)["catch"](i)}function u(e){return t["delete"](s+e).then(r)["catch"](i)}var s="/api/hunters/",c={post:l,get:e,query:n,update:o,"delete":u};return c}angular.module("app.hunter").factory("hunterService",["$http",t])}(),function(){"use strict";function t(){this.name={first:null,last:null},this.age=0,this.gender="Male",this.nen=[],this.nenData=[0,0,0,0,0,0],this.occupation=[],this.abilities=[],this.bio=null}angular.module("app.hunter").value("Hunter",t),t.$inject=[]}(),function(){"use strict";function t(t){t.options.timeOut=500,t.options.positionClass="toast-bottom-right"}angular.module("app.core").config(t),t.$inject=["toastr"]}(),function(){"use strict";angular.module("app.core").constant("toastr",toastr)}(),function(){"use strict";function t(t,e){var n=this;n.hunter=e,n.ok=function(){t.close(n.hunter)},n.cancel=function(){t.dismiss("Cancel")}}angular.module("app.hunter").controller("ModalController",t),t.$inject=["$uibModalInstance","hunter"]}(),function(){"use strict";function t(t,e){e.otherwise("/"),t.state("home",{url:"/",templateUrl:"app/hunter/hunterListView.html",controller:"HunterListController",controllerAs:"vm"}).state("hunterList",{url:"/hunterList",templateUrl:"app/hunter/hunterListView.html",controller:"HunterListController",controllerAs:"vm"}).state("hunter",{url:"/hunters/:id",templateUrl:"app/hunter/hunterEdit.html",controller:"HunterEditController",controllerAs:"vm"}).state("info",{url:"/hunters/info/:id",templateUrl:"app/hunter/hunterInfoView.html",controller:"HunterInfoController",controllerAs:"vm"})}angular.module("app.core").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function t(){}angular.module("app.hunter").controller("HunterCardController",[t])}(),function(){"use strict";function t(){var t={restrict:"AE",templateUrl:"app/hunter/hunterCard.template.html"};return t}angular.module("app.hunter").directive("htrHunterCard",t),t.$inject=[]}(),function(){"use strict";function t(t,e,n,a,i,r){function l(){var e=n.id,a=[c(),d()];e?(a.push(o(e)),t.all(a).then(function(){$.title=e?"Editing: "+$.hunter.name.first:"New";var t=document.getElementById("nen").getContext("2d");new Chart(t).Radar(y(),C());toastr.info("Hunter Edit View activated")})):$.hunter=new r}function o(t){return i.get(t).then(u)["catch"](s)}function u(t){return $.hunter=t,t}function s(t){toastr.error(t)}function c(){return a.getNenTypes().then(function(t){return $.nenTypes=t,$.nenTypes})}function d(){return a.getOccupations().then(function(t){return $.occupations=t,$.occupations})}function m(t){$.hunter.nen=[],$.hunter.nen.push(t)}function h(t){$.ability="",$.hunter.abilities.push(t)}function p(t){$.hunter.occupation=[],$.hunter.occupation.push(t)}function v(t){t?(console.log("vm.hunter: ",$.hunter),$.hunter._id?i.update($.hunter).then(f)["catch"](g):i.post($.hunter).then(f)["catch"](g)):toastr.error("The form contains invalid data. Please correct the data and try again.")}function f(t){toastr.success("Data saved successfully! (HTTP status: "+t.status+")"),b()}function g(t){toastr.error(t)}function b(){e.go("home")}function y(){var t={labels:["Enhancer","Transmutter","Conjurer","Specialist","Manipulator","Emitter"],datasets:[{fillColor:"rgba(58,141,224,0.4)",strokeColor:"rgba(20,220,220,1)",pointColor:"rgba(200,0,0,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",data:$.hunter.nenData}]};return t}function C(){var t={scaleFontSize:64,pointLabelFontSize:14};return t}var $=this;$.cancel=b,$.submit=v,$.addNen=m,$.addAbility=h,$.addOccupation=p,l()}angular.module("app.hunter").controller("HunterEditController",t),t.$inject=["$q","$state","$stateParams","dataService","hunterService","Hunter"]}(),function(){"use strict";function t(t,e,n,a,i,r){function l(){var e=n.id,a=[o(e),u()];t.all(a).then(function(){toastr.info("Hunter info view activated");var t=document.getElementById("nen").getContext("2d");new Chart(t).Radar(d(),m())})}function o(t){return r.get(t).then(s)["catch"](c)}function u(){return i.getNenTypes().then(function(t){return b.nenTypes=t,b.nenTypes})["catch"](c)}function s(t){return b.hunter=t,t}function c(t){toastr.err(t)}function d(){var t={labels:["Enhancer","Transmutter","Conjurer","Specialist","Manipulator","Emitter"],datasets:[{fillColor:"rgba(58,141,224,0.4)",strokeColor:"rgba(20,220,220,1)",pointColor:"rgba(200,0,0,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",data:b.hunter.nenData}]};return t}function m(){var t={scaleFontSize:64,pointLabelFontSize:14};return t}function h(t){e.go("hunter",{id:t})}function p(){v("md")}function v(t){var e=a.open({animation:!0,templateUrl:"app/core/modal.html",controller:"ModalController as vm",size:t,resolve:{hunter:function(){return b.hunter}}});e.result.then(function(t){return b.hunter=t,r["delete"](b.hunter._id).then(f)["catch"](g)},function(){toastr.info("Delete operation cancelled!")})}function f(t){toastr.success("Hunter removed successfully!"),e.go("home")}function g(t){toastr.error(t)}var b=this;b.nenTypes=[],b.editHunter=h,b.deleteHunter=p,l()}angular.module("app.hunter").controller("HunterInfoController",t),t.$inject=["$q","$state","$stateParams","$uibModal","dataService","hunterService"]}(),function(){"use strict";function t(t,e,n,a){function i(){var e=[r()];t.all(e).then(function(){a.info("Hunter list view activated")})}function r(){return n.query().then(l)["catch"](o)}function l(t){s.hunters=t}function o(t){a.error("Failed to retrieve hunters. ",t)}function u(){e.go("hunter")}var s=this;s.addHunter=u,i()}angular.module("app.hunter").controller("HunterListController",t),t.$inject=["$q","$state","hunterService","toastr"]}(),function(){"use strict";function t(){var t={restrict:"AE",scope:{label:"@",icon:"@"},templateUrl:"app/layout/htrMenuItem.html"};return t}angular.module("app.layout").directive("htrMenuItem",t),t.$inject=[]}(),function(){"use strict";function t(){var t=this;t.menuItems=[{label:"Home",icon:"fa-home"},{label:"About",icon:"fa-fax"}]}angular.module("app.layout").controller("SideBarController",[t])}(),function(){"use strict";function t(){var t=this;t.navLinks=[{label:"Hunter List",state:"home",icon:"fa-plus"},{label:"About",state:"newHunter",icon:"fa-plus"}]}angular.module("app.layout").controller("TopNavigationController",t),t.$inject=[]}(),angular.module("app.core").run(["$templateCache",function(t){t.put("app/core/modal.html",'<div><div class="panel panel-primary"><div class=panel-heading><h1>{{ vm.hunter.name.first }}</h1></div><div class=panel-body><h3>Are you sure you want to delete?</h3></div><div class=panel-footer><button class="btn btn-success" data-ng-click=vm.ok()>Confirm</button> <button class="btn btn-default pull-right" data-ng-click=vm.cancel()>Cancel</button></div></div></div>'),t.put("app/hunter/hunterCard.template.html",'<div><img ng-src="/images/thumbnail/{{ hunter.name.first.toLowerCase() }}.png"> <span>{{ hunter.name.first }} {{ hunter.name.last }}</span></div>'),t.put("app/hunter/hunterEdit.html",'<div class=htr-container><div class="panel panel-default"><div class=panel-heading>{{ vm.title }}</div><div class=panel-body><form novalidate name=hunterEditForm class=form-horizontal><div class=col-md-6><div class=form-group data-ng-class="{ \'has-error\': hunterEditForm.firstName.$invalid && hunterEditForm.firstName.$dirty }"><label class="control-label col-md-2" for=firstName>First name:</label><div class=col-md-4><input required data-ng-model=vm.hunter.name.first placeholder="first name (required)" id=firstName type=text name=firstName class=form-control></div><span class="help-block has-error" data-ng-if="hunterEditForm.firstName.$invalid && hunterEditForm.firstName.$dirty">First name is a required field.</span></div><div class=form-group><label class="control-label col-md-2" for=lastName>Last name:</label><div class=col-md-4><input data-ng-model=vm.hunter.name.last id=lastName type=text name=lastName class=form-control></div></div><div class=form-group><label class="control-label col-md-2" for=age>Age:</label><div class=col-md-4><input data-ng-model=vm.hunter.age id=age type=text name=age class=form-control></div></div><div class=form-group><label class="control-label col-md-2" for=gender>Gender:</label><div class=col-md-4><label class=checkbox-inline for=male><input id=male type=radio name=male value=Male data-ng-model=vm.hunter.gender> Male</label> <label class=checkbox-inline for=female><input id=female type=radio name=female value=Female data-ng-model=vm.hunter.gender> Female</label></div></div><div class=form-group><label class="control-label col-md-2" for=occupation>Occupation:</label><div class=col-md-6><select name=occupation class=form-control data-ng-change=vm.addOccupation(vm.occupation) data-ng-model=vm.occupation data-ng-options="occ for occ in vm.occupations"><option value>Please select one...</option></select></div></div><div class=form-group><label class="control-label col-md-2" for=bio>Biography:</label><div class=col-md-6><textarea id=bio class=form-control name=bio cols=30 rows=10 data-ng-model=vm.hunter.bio></textarea></div></div></div><div class=col-md-6><div class=form-group><label class="control-label col-md-2" for=nen>Nen Type:</label><div class=col-md-6><select name=nen class=form-control data-ng-change=vm.addNen(vm.nen) data-ng-options="nen for nen in vm.nenTypes" data-ng-model=vm.nen><option value>Please select one...</option></select></div></div><div class=form-group><label class="control-label col-md-2" for=nenData>Nen Data:</label><div class=col-md-4><ul><li data-ng-repeat="nen in vm.nenTypes track by $index">{{ nen }} <input type=range name=nenType id=nenType min=0 max=100 value={{nd}} data-ng-model=vm.hunter.nenData[$index]></li></ul></div></div><div class=form-group><label class="control-label col-md-2" for=abilities>Abilities:</label><div class=col-md-4><input type=text class="form-control col-md-2" data-ng-model=vm.ability></div><button class="btn btn-success" data-ng-disabled="(vm.ability.length <= 0 || !vm.ability)" data-ng-click=vm.addAbility(vm.ability)>Add</button><ul class=abList data-ng-if="vm.hunter.abilities.length > 0"><li data-ng-repeat="ability in vm.hunter.abilities">{{ ability }} - <button class="btn btn-sm btn-danger" data-ng-click=vm.hunter.abilities.pop($index)>delete</button></li></ul></div></div></form></div><div class=panel-footer><button class="btn btn-default" data-ng-click=vm.cancel()>Back</button> <button class="btn btn-success pull-right" data-ng-click=vm.submit(hunterEditForm.$valid)>Save</button></div></div><div class=col-md-12><div class="panel panel-primary"><div class=panel-heading>{{ vm.hunter.name.first }} {{ vm.hunter.name.last }}</div><div class=panel-body><div class=profile><div class=profile-image><img data-ng-src="/images/full/{{ vm.hunter.name.first }}.png" alt="{{ vm.hunter.name.first }} image"></div><div><div><h1 class=profile-heading>{{ vm.hunter.name.first }} {{ vm.hunter.name.last }}</h1></div></div><div class=background><h4>{{ vm.hunter.gender }}, {{ vm.hunter.age }}, {{ vm.hunter.occupation[0] }} Hunter</h4><div class=bio><p>"{{ vm.hunter.bio }}"</p></div><div class=abilities data-ng-if="vm.hunter.abilities.length > 0"><h3 class=sub-heading>Abilities</h3><ul class="no-style content-only ab-list"><li data-ng-repeat="ab in vm.hunter.abilities">{{ ab }}</li></ul></div></div><div class=nenChart><canvas id=nen width=400 height=400></canvas></div></div></div></div></div><div class=col-md-4><div class="panel panel-success"><div class=panel-heading>{{ vm.hunter.name.first }}\'s JSON Data</div><div class=panel-body><pre>\n                    {{ vm.hunter | json }}\n                </pre></div></div></div></div>'),t.put("app/hunter/hunterInfoView.html",'<div class=htr-container><div class=profile><div class=profile-image><img data-ng-src="/images/full/{{ vm.hunter.name.first }}.png" alt="{{ vm.hunter.name.first }} image"></div><div><button data-ng-click=vm.editHunter(vm.hunter._id) class="btn btn-lg btn-primary">Edit</button> <button data-ng-click=vm.deleteHunter(vm.hunter._id) class="btn btn-lg btn-danger">Delete</button></div><div><h1 class=profile-heading>{{ vm.hunter.name.first }} {{ vm.hunter.name.last }}</h1></div><div class=background><h4>{{ vm.hunter.gender }}, {{ vm.hunter.age }}, {{ vm.hunter.occupation[0] }} Hunter</h4><div class=bio><p>"{{ vm.hunter.bio }}"</p></div><div class=abilities data-ng-if="vm.hunter.abilities.length > 0"><h3 class=sub-heading>Abilities</h3><ul class="no-style content-only ab-list"><li data-ng-repeat="ab in vm.hunter.abilities">{{ ab }}</li></ul></div></div><div class=nenChart><canvas id=nen width=400 height=400></canvas></div></div></div>'),t.put("app/hunter/hunterListView.html",'<ul class=htr-hunter-list><li class=htr-hunter-card ng-repeat="hunter in vm.hunters"><a data-ui-sref="info({ id: hunter._id })"><htr-hunter-card></htr-hunter-card></a></li><li class="htr-hunter-card add-token" data-ng-click=vm.addHunter()><i class="fa fa-plus"></i></li></ul>'),t.put("app/layout/htrMenuItem.html",'<div class=htr-menu-item><i class="fa {{ icon }} htr-menu-icon"></i> <span>{{ label }}</span></div>'),t.put("app/layout/sidebar.html",'<div data-ng-controller="SideBarController as vm"><ul><li data-ng-repeat="item in vm.menuItems"><htr-menu-item label={{item.label}} icon="{{ item.icon }}"></htr-menu-item></li></ul></div>'),t.put("app/layout/topnav.html","<div class=navigation></div>")}]);