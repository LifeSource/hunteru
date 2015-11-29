angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/hunter/hunterCard.template.html","<div><img ng-src=\"/images/thumbnail/{{ hunter.name.first.toLowerCase() }}.png\"> <span>{{ hunter.name.first }} {{ hunter.name.last }}</span></div>");
$templateCache.put("app/hunter/hunterEdit.html","<div class=htr-container><div class=\"panel panel-default\"><div class=panel-heading>{{ vm.title }}</div><div class=panel-body><form novalidate name=hunterEditForm class=form-horizontal><div class=col-md-6><div class=form-group data-ng-class=\"{ \'has-error\': hunterEditForm.firstName.$invalid && hunterEditForm.firstName.$dirty }\"><label class=\"control-label col-md-2\" for=firstName>First name:</label><div class=col-md-4><input required data-ng-model=vm.hunter.name.first id=firstName type=text name=firstName class=form-control></div><span class=\"help-block has-error\" data-ng-if=\"hunterEditForm.firstName.$invalid && hunterEditForm.firstName.$dirty\">First name is a required field.</span></div><div class=form-group><label class=\"control-label col-md-2\" for=lastName>Last name:</label><div class=col-md-4><input data-ng-model=vm.hunter.name.last id=lastName type=text name=lastName class=form-control></div></div><div class=form-group><label class=\"control-label col-md-2\" for=age>Age:</label><div class=col-md-4><input data-ng-model=vm.hunter.age id=age type=text name=age class=form-control></div></div><div class=form-group><label class=\"control-label col-md-2\" for=gender>Gender:</label><div class=col-md-4><label class=checkbox-inline for=male><input id=male type=radio name=male value=Male data-ng-model=vm.hunter.gender> Male</label> <label class=checkbox-inline for=female><input id=female type=radio name=female value=Female data-ng-model=vm.hunter.gender> Female</label></div></div><div class=form-group><label class=\"control-label col-md-2\" for=occupation>Occupation:</label><div class=col-md-6><select name=occupation class=form-control data-ng-change=vm.addOccupation(vm.occupation) data-ng-model=vm.hunter.occupation[0] data-ng-options=\"occ for occ in vm.occupations\"><option value>Please select one...</option></select></div></div><div class=form-group><label class=\"control-label col-md-2\" for=bio>Biography:</label><div class=col-md-6><textarea id=bio class=form-control name=bio cols=30 rows=10 data-ng-model=vm.hunter.bio></textarea></div></div></div><div class=col-md-6><div class=form-group><label class=\"control-label col-md-2\" for=nen>Nen Type:</label><div class=col-md-6><select name=nen class=form-control data-ng-change=vm.addNen(vm.nen) data-ng-options=\"nen for nen in vm.nenTypes\" data-ng-model=vm.hunter.nen[0]><option value>Please select one...</option></select></div></div><div class=form-group><label class=\"control-label col-md-2\" for=nenData>Nen Data:</label><div class=col-md-4><ul><li data-ng-repeat=\"nen in vm.nenTypes track by $index\">{{ nen }} <input type=range name=nenType id=nenType min=0 max=100 value={{nd}} data-ng-model=vm.hunter.nenData[$index]></li></ul></div></div><div class=form-group><label class=\"control-label col-md-2\" for=abilities>Abilities:</label><div class=col-md-4><input type=text class=\"form-control col-md-2\" data-ng-model=vm.ability></div><button class=\"btn btn-success\" data-ng-click=vm.addAbility(vm.ability)>Add</button><ul class=abList data-ng-if=\"vm.hunter.abilities.length > 0\"><li data-ng-repeat=\"ability in vm.hunter.abilities\">{{ ability }}</li></ul></div></div></form></div><div class=panel-footer><button class=\"btn btn-default\" data-ng-click=vm.cancel()>Back</button> <button class=\"btn btn-success pull-right\" data-ng-click=vm.submit(hunterEditForm.$valid)>Save</button></div></div><div class=col-md-12><div class=\"panel panel-primary\"><div class=panel-heading>{{ vm.hunter.name.first }} {{ vm.hunter.name.last }}</div><div class=panel-body><div class=profile><div class=profile-image><img data-ng-src=\"/images/full/{{ vm.hunter.name.first }}.png\" alt=\"{{ vm.hunter.name.first }} image\"></div><div><div><h1 class=profile-heading>{{ vm.hunter.name.first }} {{ vm.hunter.name.last }}</h1></div></div><div class=background><h4>{{ vm.hunter.gender }}, {{ vm.hunter.age }}, {{ vm.hunter.occupation[0] }} Hunter</h4><div class=bio><p>\"{{ vm.hunter.bio }}\"</p></div><div class=abilities data-ng-if=\"vm.hunter.abilities.length > 0\"><h3 class=sub-heading>Abilities</h3><ul class=\"no-style content-only ab-list\"><li data-ng-repeat=\"ab in vm.hunter.abilities\">{{ ab }}</li></ul></div></div><div class=nenChart><canvas id=nen width=400 height=400></canvas></div></div></div></div></div><div class=col-md-4><div class=\"panel panel-success\"><div class=panel-heading>{{ vm.hunter.name.first }}\'s JSON Data</div><div class=panel-body><pre>\n                    {{ vm.hunter | json }}\n                </pre></div></div></div></div>");
$templateCache.put("app/hunter/hunterInfoView.html","<div class=htr-container><div class=profile><div class=profile-image><img data-ng-src=\"/images/full/{{ vm.hunter.name.first }}.png\" alt=\"{{ vm.hunter.name.first }} image\"></div><div><button data-ng-click=vm.editHunter(vm.hunter._id) class=\"btn btn-lg btn-primary\">Edit</button> <button data-ng-click=vm.deleteHunter(vm.hunter._id) class=\"btn btn-lg btn-danger\">Delete</button></div><div><h1 class=profile-heading>{{ vm.hunter.name.first }} {{ vm.hunter.name.last }}</h1></div><div class=background><h4>{{ vm.hunter.gender }}, {{ vm.hunter.age }}, {{ vm.hunter.occupation[0] }} Hunter</h4><div class=bio><p>\"{{ vm.hunter.bio }}\"</p></div><div class=abilities data-ng-if=\"vm.hunter.abilities.length > 0\"><h3 class=sub-heading>Abilities</h3><ul class=\"no-style content-only ab-list\"><li data-ng-repeat=\"ab in vm.hunter.abilities\">{{ ab }}</li></ul></div></div><div class=nenChart><canvas id=nen width=400 height=400></canvas></div></div></div>");
$templateCache.put("app/hunter/hunterListView.html","<ul class=htr-hunter-list><li class=htr-hunter-card ng-repeat=\"hunter in vm.hunters\"><a data-ui-sref=\"info({ id: hunter._id })\"><htr-hunter-card></htr-hunter-card></a></li><li class=\"htr-hunter-card add-token\" data-ng-click=vm.addHunter()><i class=\"fa fa-plus\"></i></li></ul>");
$templateCache.put("app/layout/htrMenuItem.html","<div class=htr-menu-item><i class=\"fa {{ icon }} htr-menu-icon\"></i> <span>{{ label }}</span></div>");
$templateCache.put("app/layout/sidebar.html","<div data-ng-controller=\"SideBarController as vm\"><ul><li data-ng-repeat=\"item in vm.menuItems\"><htr-menu-item label={{item.label}} icon=\"{{ item.icon }}\"></htr-menu-item></li></ul></div>");
$templateCache.put("app/layout/topnav.html","<div class=navigation></div>");}]);