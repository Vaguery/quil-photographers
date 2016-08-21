// Compiled by ClojureScript 1.9.225 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20152__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20152__auto__){
return or__20152__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20152__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20152__auto__)){
return or__20152__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25252_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25252_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25257 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25258 = null;
var count__25259 = (0);
var i__25260 = (0);
while(true){
if((i__25260 < count__25259)){
var n = cljs.core._nth.call(null,chunk__25258,i__25260);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25261 = seq__25257;
var G__25262 = chunk__25258;
var G__25263 = count__25259;
var G__25264 = (i__25260 + (1));
seq__25257 = G__25261;
chunk__25258 = G__25262;
count__25259 = G__25263;
i__25260 = G__25264;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25257);
if(temp__4657__auto__){
var seq__25257__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25257__$1)){
var c__20963__auto__ = cljs.core.chunk_first.call(null,seq__25257__$1);
var G__25265 = cljs.core.chunk_rest.call(null,seq__25257__$1);
var G__25266 = c__20963__auto__;
var G__25267 = cljs.core.count.call(null,c__20963__auto__);
var G__25268 = (0);
seq__25257 = G__25265;
chunk__25258 = G__25266;
count__25259 = G__25267;
i__25260 = G__25268;
continue;
} else {
var n = cljs.core.first.call(null,seq__25257__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25269 = cljs.core.next.call(null,seq__25257__$1);
var G__25270 = null;
var G__25271 = (0);
var G__25272 = (0);
seq__25257 = G__25269;
chunk__25258 = G__25270;
count__25259 = G__25271;
i__25260 = G__25272;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25323_25334 = cljs.core.seq.call(null,deps);
var chunk__25324_25335 = null;
var count__25325_25336 = (0);
var i__25326_25337 = (0);
while(true){
if((i__25326_25337 < count__25325_25336)){
var dep_25338 = cljs.core._nth.call(null,chunk__25324_25335,i__25326_25337);
topo_sort_helper_STAR_.call(null,dep_25338,(depth + (1)),state);

var G__25339 = seq__25323_25334;
var G__25340 = chunk__25324_25335;
var G__25341 = count__25325_25336;
var G__25342 = (i__25326_25337 + (1));
seq__25323_25334 = G__25339;
chunk__25324_25335 = G__25340;
count__25325_25336 = G__25341;
i__25326_25337 = G__25342;
continue;
} else {
var temp__4657__auto___25343 = cljs.core.seq.call(null,seq__25323_25334);
if(temp__4657__auto___25343){
var seq__25323_25344__$1 = temp__4657__auto___25343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25323_25344__$1)){
var c__20963__auto___25345 = cljs.core.chunk_first.call(null,seq__25323_25344__$1);
var G__25346 = cljs.core.chunk_rest.call(null,seq__25323_25344__$1);
var G__25347 = c__20963__auto___25345;
var G__25348 = cljs.core.count.call(null,c__20963__auto___25345);
var G__25349 = (0);
seq__25323_25334 = G__25346;
chunk__25324_25335 = G__25347;
count__25325_25336 = G__25348;
i__25326_25337 = G__25349;
continue;
} else {
var dep_25350 = cljs.core.first.call(null,seq__25323_25344__$1);
topo_sort_helper_STAR_.call(null,dep_25350,(depth + (1)),state);

var G__25351 = cljs.core.next.call(null,seq__25323_25344__$1);
var G__25352 = null;
var G__25353 = (0);
var G__25354 = (0);
seq__25323_25334 = G__25351;
chunk__25324_25335 = G__25352;
count__25325_25336 = G__25353;
i__25326_25337 = G__25354;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25327){
var vec__25331 = p__25327;
var seq__25332 = cljs.core.seq.call(null,vec__25331);
var first__25333 = cljs.core.first.call(null,seq__25332);
var seq__25332__$1 = cljs.core.next.call(null,seq__25332);
var x = first__25333;
var xs = seq__25332__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25331,seq__25332,first__25333,seq__25332__$1,x,xs,get_deps__$1){
return (function (p1__25273_SHARP_){
return clojure.set.difference.call(null,p1__25273_SHARP_,x);
});})(vec__25331,seq__25332,first__25333,seq__25332__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25367 = cljs.core.seq.call(null,provides);
var chunk__25368 = null;
var count__25369 = (0);
var i__25370 = (0);
while(true){
if((i__25370 < count__25369)){
var prov = cljs.core._nth.call(null,chunk__25368,i__25370);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25371_25379 = cljs.core.seq.call(null,requires);
var chunk__25372_25380 = null;
var count__25373_25381 = (0);
var i__25374_25382 = (0);
while(true){
if((i__25374_25382 < count__25373_25381)){
var req_25383 = cljs.core._nth.call(null,chunk__25372_25380,i__25374_25382);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25383,prov);

var G__25384 = seq__25371_25379;
var G__25385 = chunk__25372_25380;
var G__25386 = count__25373_25381;
var G__25387 = (i__25374_25382 + (1));
seq__25371_25379 = G__25384;
chunk__25372_25380 = G__25385;
count__25373_25381 = G__25386;
i__25374_25382 = G__25387;
continue;
} else {
var temp__4657__auto___25388 = cljs.core.seq.call(null,seq__25371_25379);
if(temp__4657__auto___25388){
var seq__25371_25389__$1 = temp__4657__auto___25388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25371_25389__$1)){
var c__20963__auto___25390 = cljs.core.chunk_first.call(null,seq__25371_25389__$1);
var G__25391 = cljs.core.chunk_rest.call(null,seq__25371_25389__$1);
var G__25392 = c__20963__auto___25390;
var G__25393 = cljs.core.count.call(null,c__20963__auto___25390);
var G__25394 = (0);
seq__25371_25379 = G__25391;
chunk__25372_25380 = G__25392;
count__25373_25381 = G__25393;
i__25374_25382 = G__25394;
continue;
} else {
var req_25395 = cljs.core.first.call(null,seq__25371_25389__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25395,prov);

var G__25396 = cljs.core.next.call(null,seq__25371_25389__$1);
var G__25397 = null;
var G__25398 = (0);
var G__25399 = (0);
seq__25371_25379 = G__25396;
chunk__25372_25380 = G__25397;
count__25373_25381 = G__25398;
i__25374_25382 = G__25399;
continue;
}
} else {
}
}
break;
}

var G__25400 = seq__25367;
var G__25401 = chunk__25368;
var G__25402 = count__25369;
var G__25403 = (i__25370 + (1));
seq__25367 = G__25400;
chunk__25368 = G__25401;
count__25369 = G__25402;
i__25370 = G__25403;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25367);
if(temp__4657__auto__){
var seq__25367__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25367__$1)){
var c__20963__auto__ = cljs.core.chunk_first.call(null,seq__25367__$1);
var G__25404 = cljs.core.chunk_rest.call(null,seq__25367__$1);
var G__25405 = c__20963__auto__;
var G__25406 = cljs.core.count.call(null,c__20963__auto__);
var G__25407 = (0);
seq__25367 = G__25404;
chunk__25368 = G__25405;
count__25369 = G__25406;
i__25370 = G__25407;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25367__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25375_25408 = cljs.core.seq.call(null,requires);
var chunk__25376_25409 = null;
var count__25377_25410 = (0);
var i__25378_25411 = (0);
while(true){
if((i__25378_25411 < count__25377_25410)){
var req_25412 = cljs.core._nth.call(null,chunk__25376_25409,i__25378_25411);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25412,prov);

var G__25413 = seq__25375_25408;
var G__25414 = chunk__25376_25409;
var G__25415 = count__25377_25410;
var G__25416 = (i__25378_25411 + (1));
seq__25375_25408 = G__25413;
chunk__25376_25409 = G__25414;
count__25377_25410 = G__25415;
i__25378_25411 = G__25416;
continue;
} else {
var temp__4657__auto___25417__$1 = cljs.core.seq.call(null,seq__25375_25408);
if(temp__4657__auto___25417__$1){
var seq__25375_25418__$1 = temp__4657__auto___25417__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25375_25418__$1)){
var c__20963__auto___25419 = cljs.core.chunk_first.call(null,seq__25375_25418__$1);
var G__25420 = cljs.core.chunk_rest.call(null,seq__25375_25418__$1);
var G__25421 = c__20963__auto___25419;
var G__25422 = cljs.core.count.call(null,c__20963__auto___25419);
var G__25423 = (0);
seq__25375_25408 = G__25420;
chunk__25376_25409 = G__25421;
count__25377_25410 = G__25422;
i__25378_25411 = G__25423;
continue;
} else {
var req_25424 = cljs.core.first.call(null,seq__25375_25418__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25424,prov);

var G__25425 = cljs.core.next.call(null,seq__25375_25418__$1);
var G__25426 = null;
var G__25427 = (0);
var G__25428 = (0);
seq__25375_25408 = G__25425;
chunk__25376_25409 = G__25426;
count__25377_25410 = G__25427;
i__25378_25411 = G__25428;
continue;
}
} else {
}
}
break;
}

var G__25429 = cljs.core.next.call(null,seq__25367__$1);
var G__25430 = null;
var G__25431 = (0);
var G__25432 = (0);
seq__25367 = G__25429;
chunk__25368 = G__25430;
count__25369 = G__25431;
i__25370 = G__25432;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25437_25441 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25438_25442 = null;
var count__25439_25443 = (0);
var i__25440_25444 = (0);
while(true){
if((i__25440_25444 < count__25439_25443)){
var ns_25445 = cljs.core._nth.call(null,chunk__25438_25442,i__25440_25444);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25445);

var G__25446 = seq__25437_25441;
var G__25447 = chunk__25438_25442;
var G__25448 = count__25439_25443;
var G__25449 = (i__25440_25444 + (1));
seq__25437_25441 = G__25446;
chunk__25438_25442 = G__25447;
count__25439_25443 = G__25448;
i__25440_25444 = G__25449;
continue;
} else {
var temp__4657__auto___25450 = cljs.core.seq.call(null,seq__25437_25441);
if(temp__4657__auto___25450){
var seq__25437_25451__$1 = temp__4657__auto___25450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25437_25451__$1)){
var c__20963__auto___25452 = cljs.core.chunk_first.call(null,seq__25437_25451__$1);
var G__25453 = cljs.core.chunk_rest.call(null,seq__25437_25451__$1);
var G__25454 = c__20963__auto___25452;
var G__25455 = cljs.core.count.call(null,c__20963__auto___25452);
var G__25456 = (0);
seq__25437_25441 = G__25453;
chunk__25438_25442 = G__25454;
count__25439_25443 = G__25455;
i__25440_25444 = G__25456;
continue;
} else {
var ns_25457 = cljs.core.first.call(null,seq__25437_25451__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25457);

var G__25458 = cljs.core.next.call(null,seq__25437_25451__$1);
var G__25459 = null;
var G__25460 = (0);
var G__25461 = (0);
seq__25437_25441 = G__25458;
chunk__25438_25442 = G__25459;
count__25439_25443 = G__25460;
i__25440_25444 = G__25461;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20152__auto__ = goog.require__;
if(cljs.core.truth_(or__20152__auto__)){
return or__20152__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25462__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25463__i = 0, G__25463__a = new Array(arguments.length -  0);
while (G__25463__i < G__25463__a.length) {G__25463__a[G__25463__i] = arguments[G__25463__i + 0]; ++G__25463__i;}
  args = new cljs.core.IndexedSeq(G__25463__a,0);
} 
return G__25462__delegate.call(this,args);};
G__25462.cljs$lang$maxFixedArity = 0;
G__25462.cljs$lang$applyTo = (function (arglist__25464){
var args = cljs.core.seq(arglist__25464);
return G__25462__delegate(args);
});
G__25462.cljs$core$IFn$_invoke$arity$variadic = G__25462__delegate;
return G__25462;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25466 = cljs.core._EQ_;
var expr__25467 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25466.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25467))){
var path_parts = ((function (pred__25466,expr__25467){
return (function (p1__25465_SHARP_){
return clojure.string.split.call(null,p1__25465_SHARP_,/[\/\\]/);
});})(pred__25466,expr__25467))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25466,expr__25467){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25469){if((e25469 instanceof Error)){
var e = e25469;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25469;

}
}})());
});
;})(path_parts,sep,root,pred__25466,expr__25467))
} else {
if(cljs.core.truth_(pred__25466.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25467))){
return ((function (pred__25466,expr__25467){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__25466,expr__25467){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25466,expr__25467))
);

return deferred.addErrback(((function (deferred,pred__25466,expr__25467){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25466,expr__25467))
);
});
;})(pred__25466,expr__25467))
} else {
return ((function (pred__25466,expr__25467){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25466,expr__25467))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25470,callback){
var map__25473 = p__25470;
var map__25473__$1 = ((((!((map__25473 == null)))?((((map__25473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25473):map__25473);
var file_msg = map__25473__$1;
var request_url = cljs.core.get.call(null,map__25473__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25473,map__25473__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25473,map__25473__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22324__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto__){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto__){
return (function (state_25497){
var state_val_25498 = (state_25497[(1)]);
if((state_val_25498 === (7))){
var inst_25493 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
var statearr_25499_25519 = state_25497__$1;
(statearr_25499_25519[(2)] = inst_25493);

(statearr_25499_25519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (1))){
var state_25497__$1 = state_25497;
var statearr_25500_25520 = state_25497__$1;
(statearr_25500_25520[(2)] = null);

(statearr_25500_25520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (4))){
var inst_25477 = (state_25497[(7)]);
var inst_25477__$1 = (state_25497[(2)]);
var state_25497__$1 = (function (){var statearr_25501 = state_25497;
(statearr_25501[(7)] = inst_25477__$1);

return statearr_25501;
})();
if(cljs.core.truth_(inst_25477__$1)){
var statearr_25502_25521 = state_25497__$1;
(statearr_25502_25521[(1)] = (5));

} else {
var statearr_25503_25522 = state_25497__$1;
(statearr_25503_25522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (6))){
var state_25497__$1 = state_25497;
var statearr_25504_25523 = state_25497__$1;
(statearr_25504_25523[(2)] = null);

(statearr_25504_25523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (3))){
var inst_25495 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25497__$1,inst_25495);
} else {
if((state_val_25498 === (2))){
var state_25497__$1 = state_25497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25497__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25498 === (11))){
var inst_25489 = (state_25497[(2)]);
var state_25497__$1 = (function (){var statearr_25505 = state_25497;
(statearr_25505[(8)] = inst_25489);

return statearr_25505;
})();
var statearr_25506_25524 = state_25497__$1;
(statearr_25506_25524[(2)] = null);

(statearr_25506_25524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (9))){
var inst_25483 = (state_25497[(9)]);
var inst_25481 = (state_25497[(10)]);
var inst_25485 = inst_25483.call(null,inst_25481);
var state_25497__$1 = state_25497;
var statearr_25507_25525 = state_25497__$1;
(statearr_25507_25525[(2)] = inst_25485);

(statearr_25507_25525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (5))){
var inst_25477 = (state_25497[(7)]);
var inst_25479 = figwheel.client.file_reloading.blocking_load.call(null,inst_25477);
var state_25497__$1 = state_25497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25497__$1,(8),inst_25479);
} else {
if((state_val_25498 === (10))){
var inst_25481 = (state_25497[(10)]);
var inst_25487 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25481);
var state_25497__$1 = state_25497;
var statearr_25508_25526 = state_25497__$1;
(statearr_25508_25526[(2)] = inst_25487);

(statearr_25508_25526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (8))){
var inst_25477 = (state_25497[(7)]);
var inst_25483 = (state_25497[(9)]);
var inst_25481 = (state_25497[(2)]);
var inst_25482 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25483__$1 = cljs.core.get.call(null,inst_25482,inst_25477);
var state_25497__$1 = (function (){var statearr_25509 = state_25497;
(statearr_25509[(9)] = inst_25483__$1);

(statearr_25509[(10)] = inst_25481);

return statearr_25509;
})();
if(cljs.core.truth_(inst_25483__$1)){
var statearr_25510_25527 = state_25497__$1;
(statearr_25510_25527[(1)] = (9));

} else {
var statearr_25511_25528 = state_25497__$1;
(statearr_25511_25528[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22324__auto__))
;
return ((function (switch__22212__auto__,c__22324__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22213__auto__ = null;
var figwheel$client$file_reloading$state_machine__22213__auto____0 = (function (){
var statearr_25515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25515[(0)] = figwheel$client$file_reloading$state_machine__22213__auto__);

(statearr_25515[(1)] = (1));

return statearr_25515;
});
var figwheel$client$file_reloading$state_machine__22213__auto____1 = (function (state_25497){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_25497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e25516){if((e25516 instanceof Object)){
var ex__22216__auto__ = e25516;
var statearr_25517_25529 = state_25497;
(statearr_25517_25529[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25530 = state_25497;
state_25497 = G__25530;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22213__auto__ = function(state_25497){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22213__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22213__auto____1.call(this,state_25497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22213__auto____0;
figwheel$client$file_reloading$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22213__auto____1;
return figwheel$client$file_reloading$state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto__))
})();
var state__22326__auto__ = (function (){var statearr_25518 = f__22325__auto__.call(null);
(statearr_25518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto__);

return statearr_25518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto__))
);

return c__22324__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25531,callback){
var map__25534 = p__25531;
var map__25534__$1 = ((((!((map__25534 == null)))?((((map__25534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25534):map__25534);
var file_msg = map__25534__$1;
var namespace = cljs.core.get.call(null,map__25534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25534,map__25534__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25534,map__25534__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25536){
var map__25539 = p__25536;
var map__25539__$1 = ((((!((map__25539 == null)))?((((map__25539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25539):map__25539);
var file_msg = map__25539__$1;
var namespace = cljs.core.get.call(null,map__25539__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20140__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20140__auto__){
var or__20152__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20152__auto__)){
return or__20152__auto__;
} else {
var or__20152__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20152__auto____$1)){
return or__20152__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20140__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25541,callback){
var map__25544 = p__25541;
var map__25544__$1 = ((((!((map__25544 == null)))?((((map__25544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25544):map__25544);
var file_msg = map__25544__$1;
var request_url = cljs.core.get.call(null,map__25544__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25544__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22324__auto___25648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___25648,out){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___25648,out){
return (function (state_25630){
var state_val_25631 = (state_25630[(1)]);
if((state_val_25631 === (1))){
var inst_25604 = cljs.core.seq.call(null,files);
var inst_25605 = cljs.core.first.call(null,inst_25604);
var inst_25606 = cljs.core.next.call(null,inst_25604);
var inst_25607 = files;
var state_25630__$1 = (function (){var statearr_25632 = state_25630;
(statearr_25632[(7)] = inst_25607);

(statearr_25632[(8)] = inst_25605);

(statearr_25632[(9)] = inst_25606);

return statearr_25632;
})();
var statearr_25633_25649 = state_25630__$1;
(statearr_25633_25649[(2)] = null);

(statearr_25633_25649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (2))){
var inst_25613 = (state_25630[(10)]);
var inst_25607 = (state_25630[(7)]);
var inst_25612 = cljs.core.seq.call(null,inst_25607);
var inst_25613__$1 = cljs.core.first.call(null,inst_25612);
var inst_25614 = cljs.core.next.call(null,inst_25612);
var inst_25615 = (inst_25613__$1 == null);
var inst_25616 = cljs.core.not.call(null,inst_25615);
var state_25630__$1 = (function (){var statearr_25634 = state_25630;
(statearr_25634[(10)] = inst_25613__$1);

(statearr_25634[(11)] = inst_25614);

return statearr_25634;
})();
if(inst_25616){
var statearr_25635_25650 = state_25630__$1;
(statearr_25635_25650[(1)] = (4));

} else {
var statearr_25636_25651 = state_25630__$1;
(statearr_25636_25651[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (3))){
var inst_25628 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25630__$1,inst_25628);
} else {
if((state_val_25631 === (4))){
var inst_25613 = (state_25630[(10)]);
var inst_25618 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25613);
var state_25630__$1 = state_25630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25630__$1,(7),inst_25618);
} else {
if((state_val_25631 === (5))){
var inst_25624 = cljs.core.async.close_BANG_.call(null,out);
var state_25630__$1 = state_25630;
var statearr_25637_25652 = state_25630__$1;
(statearr_25637_25652[(2)] = inst_25624);

(statearr_25637_25652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (6))){
var inst_25626 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25638_25653 = state_25630__$1;
(statearr_25638_25653[(2)] = inst_25626);

(statearr_25638_25653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (7))){
var inst_25614 = (state_25630[(11)]);
var inst_25620 = (state_25630[(2)]);
var inst_25621 = cljs.core.async.put_BANG_.call(null,out,inst_25620);
var inst_25607 = inst_25614;
var state_25630__$1 = (function (){var statearr_25639 = state_25630;
(statearr_25639[(7)] = inst_25607);

(statearr_25639[(12)] = inst_25621);

return statearr_25639;
})();
var statearr_25640_25654 = state_25630__$1;
(statearr_25640_25654[(2)] = null);

(statearr_25640_25654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22324__auto___25648,out))
;
return ((function (switch__22212__auto__,c__22324__auto___25648,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22213__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22213__auto____0 = (function (){
var statearr_25644 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25644[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22213__auto__);

(statearr_25644[(1)] = (1));

return statearr_25644;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22213__auto____1 = (function (state_25630){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_25630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e25645){if((e25645 instanceof Object)){
var ex__22216__auto__ = e25645;
var statearr_25646_25655 = state_25630;
(statearr_25646_25655[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25656 = state_25630;
state_25630 = G__25656;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22213__auto__ = function(state_25630){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22213__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22213__auto____1.call(this,state_25630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22213__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22213__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___25648,out))
})();
var state__22326__auto__ = (function (){var statearr_25647 = f__22325__auto__.call(null);
(statearr_25647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___25648);

return statearr_25647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___25648,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25657,opts){
var map__25661 = p__25657;
var map__25661__$1 = ((((!((map__25661 == null)))?((((map__25661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25661):map__25661);
var eval_body__$1 = cljs.core.get.call(null,map__25661__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25661__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20140__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20140__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20140__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25663){var e = e25663;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25664_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25664_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25673){
var vec__25674 = p__25673;
var k = cljs.core.nth.call(null,vec__25674,(0),null);
var v = cljs.core.nth.call(null,vec__25674,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25677){
var vec__25678 = p__25677;
var k = cljs.core.nth.call(null,vec__25678,(0),null);
var v = cljs.core.nth.call(null,vec__25678,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25684,p__25685){
var map__25932 = p__25684;
var map__25932__$1 = ((((!((map__25932 == null)))?((((map__25932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25932):map__25932);
var opts = map__25932__$1;
var before_jsload = cljs.core.get.call(null,map__25932__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25932__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25932__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25933 = p__25685;
var map__25933__$1 = ((((!((map__25933 == null)))?((((map__25933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25933):map__25933);
var msg = map__25933__$1;
var files = cljs.core.get.call(null,map__25933__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25933__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25933__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22324__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26086){
var state_val_26087 = (state_26086[(1)]);
if((state_val_26087 === (7))){
var inst_25947 = (state_26086[(7)]);
var inst_25948 = (state_26086[(8)]);
var inst_25949 = (state_26086[(9)]);
var inst_25950 = (state_26086[(10)]);
var inst_25955 = cljs.core._nth.call(null,inst_25948,inst_25950);
var inst_25956 = figwheel.client.file_reloading.eval_body.call(null,inst_25955,opts);
var inst_25957 = (inst_25950 + (1));
var tmp26088 = inst_25947;
var tmp26089 = inst_25948;
var tmp26090 = inst_25949;
var inst_25947__$1 = tmp26088;
var inst_25948__$1 = tmp26089;
var inst_25949__$1 = tmp26090;
var inst_25950__$1 = inst_25957;
var state_26086__$1 = (function (){var statearr_26091 = state_26086;
(statearr_26091[(7)] = inst_25947__$1);

(statearr_26091[(11)] = inst_25956);

(statearr_26091[(8)] = inst_25948__$1);

(statearr_26091[(9)] = inst_25949__$1);

(statearr_26091[(10)] = inst_25950__$1);

return statearr_26091;
})();
var statearr_26092_26178 = state_26086__$1;
(statearr_26092_26178[(2)] = null);

(statearr_26092_26178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (20))){
var inst_25990 = (state_26086[(12)]);
var inst_25998 = figwheel.client.file_reloading.sort_files.call(null,inst_25990);
var state_26086__$1 = state_26086;
var statearr_26093_26179 = state_26086__$1;
(statearr_26093_26179[(2)] = inst_25998);

(statearr_26093_26179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (27))){
var state_26086__$1 = state_26086;
var statearr_26094_26180 = state_26086__$1;
(statearr_26094_26180[(2)] = null);

(statearr_26094_26180[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (1))){
var inst_25939 = (state_26086[(13)]);
var inst_25936 = before_jsload.call(null,files);
var inst_25937 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25938 = (function (){return ((function (inst_25939,inst_25936,inst_25937,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25681_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25681_SHARP_);
});
;})(inst_25939,inst_25936,inst_25937,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25939__$1 = cljs.core.filter.call(null,inst_25938,files);
var inst_25940 = cljs.core.not_empty.call(null,inst_25939__$1);
var state_26086__$1 = (function (){var statearr_26095 = state_26086;
(statearr_26095[(14)] = inst_25937);

(statearr_26095[(15)] = inst_25936);

(statearr_26095[(13)] = inst_25939__$1);

return statearr_26095;
})();
if(cljs.core.truth_(inst_25940)){
var statearr_26096_26181 = state_26086__$1;
(statearr_26096_26181[(1)] = (2));

} else {
var statearr_26097_26182 = state_26086__$1;
(statearr_26097_26182[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (24))){
var state_26086__$1 = state_26086;
var statearr_26098_26183 = state_26086__$1;
(statearr_26098_26183[(2)] = null);

(statearr_26098_26183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (39))){
var inst_26040 = (state_26086[(16)]);
var state_26086__$1 = state_26086;
var statearr_26099_26184 = state_26086__$1;
(statearr_26099_26184[(2)] = inst_26040);

(statearr_26099_26184[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (46))){
var inst_26081 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26100_26185 = state_26086__$1;
(statearr_26100_26185[(2)] = inst_26081);

(statearr_26100_26185[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (4))){
var inst_25984 = (state_26086[(2)]);
var inst_25985 = cljs.core.List.EMPTY;
var inst_25986 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25985);
var inst_25987 = (function (){return ((function (inst_25984,inst_25985,inst_25986,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25682_SHARP_){
var and__20140__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25682_SHARP_);
if(cljs.core.truth_(and__20140__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25682_SHARP_));
} else {
return and__20140__auto__;
}
});
;})(inst_25984,inst_25985,inst_25986,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25988 = cljs.core.filter.call(null,inst_25987,files);
var inst_25989 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25990 = cljs.core.concat.call(null,inst_25988,inst_25989);
var state_26086__$1 = (function (){var statearr_26101 = state_26086;
(statearr_26101[(12)] = inst_25990);

(statearr_26101[(17)] = inst_25984);

(statearr_26101[(18)] = inst_25986);

return statearr_26101;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26102_26186 = state_26086__$1;
(statearr_26102_26186[(1)] = (16));

} else {
var statearr_26103_26187 = state_26086__$1;
(statearr_26103_26187[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (15))){
var inst_25974 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26104_26188 = state_26086__$1;
(statearr_26104_26188[(2)] = inst_25974);

(statearr_26104_26188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (21))){
var inst_26000 = (state_26086[(19)]);
var inst_26000__$1 = (state_26086[(2)]);
var inst_26001 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26000__$1);
var state_26086__$1 = (function (){var statearr_26105 = state_26086;
(statearr_26105[(19)] = inst_26000__$1);

return statearr_26105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26086__$1,(22),inst_26001);
} else {
if((state_val_26087 === (31))){
var inst_26084 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26086__$1,inst_26084);
} else {
if((state_val_26087 === (32))){
var inst_26040 = (state_26086[(16)]);
var inst_26045 = inst_26040.cljs$lang$protocol_mask$partition0$;
var inst_26046 = (inst_26045 & (64));
var inst_26047 = inst_26040.cljs$core$ISeq$;
var inst_26048 = (inst_26046) || (inst_26047);
var state_26086__$1 = state_26086;
if(cljs.core.truth_(inst_26048)){
var statearr_26106_26189 = state_26086__$1;
(statearr_26106_26189[(1)] = (35));

} else {
var statearr_26107_26190 = state_26086__$1;
(statearr_26107_26190[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (40))){
var inst_26061 = (state_26086[(20)]);
var inst_26060 = (state_26086[(2)]);
var inst_26061__$1 = cljs.core.get.call(null,inst_26060,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26062 = cljs.core.get.call(null,inst_26060,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26063 = cljs.core.not_empty.call(null,inst_26061__$1);
var state_26086__$1 = (function (){var statearr_26108 = state_26086;
(statearr_26108[(20)] = inst_26061__$1);

(statearr_26108[(21)] = inst_26062);

return statearr_26108;
})();
if(cljs.core.truth_(inst_26063)){
var statearr_26109_26191 = state_26086__$1;
(statearr_26109_26191[(1)] = (41));

} else {
var statearr_26110_26192 = state_26086__$1;
(statearr_26110_26192[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (33))){
var state_26086__$1 = state_26086;
var statearr_26111_26193 = state_26086__$1;
(statearr_26111_26193[(2)] = false);

(statearr_26111_26193[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (13))){
var inst_25960 = (state_26086[(22)]);
var inst_25964 = cljs.core.chunk_first.call(null,inst_25960);
var inst_25965 = cljs.core.chunk_rest.call(null,inst_25960);
var inst_25966 = cljs.core.count.call(null,inst_25964);
var inst_25947 = inst_25965;
var inst_25948 = inst_25964;
var inst_25949 = inst_25966;
var inst_25950 = (0);
var state_26086__$1 = (function (){var statearr_26112 = state_26086;
(statearr_26112[(7)] = inst_25947);

(statearr_26112[(8)] = inst_25948);

(statearr_26112[(9)] = inst_25949);

(statearr_26112[(10)] = inst_25950);

return statearr_26112;
})();
var statearr_26113_26194 = state_26086__$1;
(statearr_26113_26194[(2)] = null);

(statearr_26113_26194[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (22))){
var inst_26000 = (state_26086[(19)]);
var inst_26003 = (state_26086[(23)]);
var inst_26004 = (state_26086[(24)]);
var inst_26008 = (state_26086[(25)]);
var inst_26003__$1 = (state_26086[(2)]);
var inst_26004__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26003__$1);
var inst_26005 = (function (){var all_files = inst_26000;
var res_SINGLEQUOTE_ = inst_26003__$1;
var res = inst_26004__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26000,inst_26003,inst_26004,inst_26008,inst_26003__$1,inst_26004__$1,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25683_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25683_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26000,inst_26003,inst_26004,inst_26008,inst_26003__$1,inst_26004__$1,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26006 = cljs.core.filter.call(null,inst_26005,inst_26003__$1);
var inst_26007 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26008__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26007);
var inst_26009 = cljs.core.not_empty.call(null,inst_26008__$1);
var state_26086__$1 = (function (){var statearr_26114 = state_26086;
(statearr_26114[(26)] = inst_26006);

(statearr_26114[(23)] = inst_26003__$1);

(statearr_26114[(24)] = inst_26004__$1);

(statearr_26114[(25)] = inst_26008__$1);

return statearr_26114;
})();
if(cljs.core.truth_(inst_26009)){
var statearr_26115_26195 = state_26086__$1;
(statearr_26115_26195[(1)] = (23));

} else {
var statearr_26116_26196 = state_26086__$1;
(statearr_26116_26196[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (36))){
var state_26086__$1 = state_26086;
var statearr_26117_26197 = state_26086__$1;
(statearr_26117_26197[(2)] = false);

(statearr_26117_26197[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (41))){
var inst_26061 = (state_26086[(20)]);
var inst_26065 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26066 = cljs.core.map.call(null,inst_26065,inst_26061);
var inst_26067 = cljs.core.pr_str.call(null,inst_26066);
var inst_26068 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26067)].join('');
var inst_26069 = figwheel.client.utils.log.call(null,inst_26068);
var state_26086__$1 = state_26086;
var statearr_26118_26198 = state_26086__$1;
(statearr_26118_26198[(2)] = inst_26069);

(statearr_26118_26198[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (43))){
var inst_26062 = (state_26086[(21)]);
var inst_26072 = (state_26086[(2)]);
var inst_26073 = cljs.core.not_empty.call(null,inst_26062);
var state_26086__$1 = (function (){var statearr_26119 = state_26086;
(statearr_26119[(27)] = inst_26072);

return statearr_26119;
})();
if(cljs.core.truth_(inst_26073)){
var statearr_26120_26199 = state_26086__$1;
(statearr_26120_26199[(1)] = (44));

} else {
var statearr_26121_26200 = state_26086__$1;
(statearr_26121_26200[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (29))){
var inst_26040 = (state_26086[(16)]);
var inst_26006 = (state_26086[(26)]);
var inst_26000 = (state_26086[(19)]);
var inst_26003 = (state_26086[(23)]);
var inst_26004 = (state_26086[(24)]);
var inst_26008 = (state_26086[(25)]);
var inst_26036 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26039 = (function (){var all_files = inst_26000;
var res_SINGLEQUOTE_ = inst_26003;
var res = inst_26004;
var files_not_loaded = inst_26006;
var dependencies_that_loaded = inst_26008;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26040,inst_26006,inst_26000,inst_26003,inst_26004,inst_26008,inst_26036,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26038){
var map__26122 = p__26038;
var map__26122__$1 = ((((!((map__26122 == null)))?((((map__26122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26122):map__26122);
var namespace = cljs.core.get.call(null,map__26122__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26040,inst_26006,inst_26000,inst_26003,inst_26004,inst_26008,inst_26036,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26040__$1 = cljs.core.group_by.call(null,inst_26039,inst_26006);
var inst_26042 = (inst_26040__$1 == null);
var inst_26043 = cljs.core.not.call(null,inst_26042);
var state_26086__$1 = (function (){var statearr_26124 = state_26086;
(statearr_26124[(16)] = inst_26040__$1);

(statearr_26124[(28)] = inst_26036);

return statearr_26124;
})();
if(inst_26043){
var statearr_26125_26201 = state_26086__$1;
(statearr_26125_26201[(1)] = (32));

} else {
var statearr_26126_26202 = state_26086__$1;
(statearr_26126_26202[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (44))){
var inst_26062 = (state_26086[(21)]);
var inst_26075 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26062);
var inst_26076 = cljs.core.pr_str.call(null,inst_26075);
var inst_26077 = [cljs.core.str("not required: "),cljs.core.str(inst_26076)].join('');
var inst_26078 = figwheel.client.utils.log.call(null,inst_26077);
var state_26086__$1 = state_26086;
var statearr_26127_26203 = state_26086__$1;
(statearr_26127_26203[(2)] = inst_26078);

(statearr_26127_26203[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (6))){
var inst_25981 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26128_26204 = state_26086__$1;
(statearr_26128_26204[(2)] = inst_25981);

(statearr_26128_26204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (28))){
var inst_26006 = (state_26086[(26)]);
var inst_26033 = (state_26086[(2)]);
var inst_26034 = cljs.core.not_empty.call(null,inst_26006);
var state_26086__$1 = (function (){var statearr_26129 = state_26086;
(statearr_26129[(29)] = inst_26033);

return statearr_26129;
})();
if(cljs.core.truth_(inst_26034)){
var statearr_26130_26205 = state_26086__$1;
(statearr_26130_26205[(1)] = (29));

} else {
var statearr_26131_26206 = state_26086__$1;
(statearr_26131_26206[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (25))){
var inst_26004 = (state_26086[(24)]);
var inst_26020 = (state_26086[(2)]);
var inst_26021 = cljs.core.not_empty.call(null,inst_26004);
var state_26086__$1 = (function (){var statearr_26132 = state_26086;
(statearr_26132[(30)] = inst_26020);

return statearr_26132;
})();
if(cljs.core.truth_(inst_26021)){
var statearr_26133_26207 = state_26086__$1;
(statearr_26133_26207[(1)] = (26));

} else {
var statearr_26134_26208 = state_26086__$1;
(statearr_26134_26208[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (34))){
var inst_26055 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
if(cljs.core.truth_(inst_26055)){
var statearr_26135_26209 = state_26086__$1;
(statearr_26135_26209[(1)] = (38));

} else {
var statearr_26136_26210 = state_26086__$1;
(statearr_26136_26210[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (17))){
var state_26086__$1 = state_26086;
var statearr_26137_26211 = state_26086__$1;
(statearr_26137_26211[(2)] = recompile_dependents);

(statearr_26137_26211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (3))){
var state_26086__$1 = state_26086;
var statearr_26138_26212 = state_26086__$1;
(statearr_26138_26212[(2)] = null);

(statearr_26138_26212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (12))){
var inst_25977 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26139_26213 = state_26086__$1;
(statearr_26139_26213[(2)] = inst_25977);

(statearr_26139_26213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (2))){
var inst_25939 = (state_26086[(13)]);
var inst_25946 = cljs.core.seq.call(null,inst_25939);
var inst_25947 = inst_25946;
var inst_25948 = null;
var inst_25949 = (0);
var inst_25950 = (0);
var state_26086__$1 = (function (){var statearr_26140 = state_26086;
(statearr_26140[(7)] = inst_25947);

(statearr_26140[(8)] = inst_25948);

(statearr_26140[(9)] = inst_25949);

(statearr_26140[(10)] = inst_25950);

return statearr_26140;
})();
var statearr_26141_26214 = state_26086__$1;
(statearr_26141_26214[(2)] = null);

(statearr_26141_26214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (23))){
var inst_26006 = (state_26086[(26)]);
var inst_26000 = (state_26086[(19)]);
var inst_26003 = (state_26086[(23)]);
var inst_26004 = (state_26086[(24)]);
var inst_26008 = (state_26086[(25)]);
var inst_26011 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26013 = (function (){var all_files = inst_26000;
var res_SINGLEQUOTE_ = inst_26003;
var res = inst_26004;
var files_not_loaded = inst_26006;
var dependencies_that_loaded = inst_26008;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26006,inst_26000,inst_26003,inst_26004,inst_26008,inst_26011,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26012){
var map__26142 = p__26012;
var map__26142__$1 = ((((!((map__26142 == null)))?((((map__26142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26142):map__26142);
var request_url = cljs.core.get.call(null,map__26142__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26006,inst_26000,inst_26003,inst_26004,inst_26008,inst_26011,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26014 = cljs.core.reverse.call(null,inst_26008);
var inst_26015 = cljs.core.map.call(null,inst_26013,inst_26014);
var inst_26016 = cljs.core.pr_str.call(null,inst_26015);
var inst_26017 = figwheel.client.utils.log.call(null,inst_26016);
var state_26086__$1 = (function (){var statearr_26144 = state_26086;
(statearr_26144[(31)] = inst_26011);

return statearr_26144;
})();
var statearr_26145_26215 = state_26086__$1;
(statearr_26145_26215[(2)] = inst_26017);

(statearr_26145_26215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (35))){
var state_26086__$1 = state_26086;
var statearr_26146_26216 = state_26086__$1;
(statearr_26146_26216[(2)] = true);

(statearr_26146_26216[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (19))){
var inst_25990 = (state_26086[(12)]);
var inst_25996 = figwheel.client.file_reloading.expand_files.call(null,inst_25990);
var state_26086__$1 = state_26086;
var statearr_26147_26217 = state_26086__$1;
(statearr_26147_26217[(2)] = inst_25996);

(statearr_26147_26217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (11))){
var state_26086__$1 = state_26086;
var statearr_26148_26218 = state_26086__$1;
(statearr_26148_26218[(2)] = null);

(statearr_26148_26218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (9))){
var inst_25979 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26149_26219 = state_26086__$1;
(statearr_26149_26219[(2)] = inst_25979);

(statearr_26149_26219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (5))){
var inst_25949 = (state_26086[(9)]);
var inst_25950 = (state_26086[(10)]);
var inst_25952 = (inst_25950 < inst_25949);
var inst_25953 = inst_25952;
var state_26086__$1 = state_26086;
if(cljs.core.truth_(inst_25953)){
var statearr_26150_26220 = state_26086__$1;
(statearr_26150_26220[(1)] = (7));

} else {
var statearr_26151_26221 = state_26086__$1;
(statearr_26151_26221[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (14))){
var inst_25960 = (state_26086[(22)]);
var inst_25969 = cljs.core.first.call(null,inst_25960);
var inst_25970 = figwheel.client.file_reloading.eval_body.call(null,inst_25969,opts);
var inst_25971 = cljs.core.next.call(null,inst_25960);
var inst_25947 = inst_25971;
var inst_25948 = null;
var inst_25949 = (0);
var inst_25950 = (0);
var state_26086__$1 = (function (){var statearr_26152 = state_26086;
(statearr_26152[(7)] = inst_25947);

(statearr_26152[(32)] = inst_25970);

(statearr_26152[(8)] = inst_25948);

(statearr_26152[(9)] = inst_25949);

(statearr_26152[(10)] = inst_25950);

return statearr_26152;
})();
var statearr_26153_26222 = state_26086__$1;
(statearr_26153_26222[(2)] = null);

(statearr_26153_26222[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (45))){
var state_26086__$1 = state_26086;
var statearr_26154_26223 = state_26086__$1;
(statearr_26154_26223[(2)] = null);

(statearr_26154_26223[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (26))){
var inst_26006 = (state_26086[(26)]);
var inst_26000 = (state_26086[(19)]);
var inst_26003 = (state_26086[(23)]);
var inst_26004 = (state_26086[(24)]);
var inst_26008 = (state_26086[(25)]);
var inst_26023 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26025 = (function (){var all_files = inst_26000;
var res_SINGLEQUOTE_ = inst_26003;
var res = inst_26004;
var files_not_loaded = inst_26006;
var dependencies_that_loaded = inst_26008;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26006,inst_26000,inst_26003,inst_26004,inst_26008,inst_26023,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26024){
var map__26155 = p__26024;
var map__26155__$1 = ((((!((map__26155 == null)))?((((map__26155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26155):map__26155);
var namespace = cljs.core.get.call(null,map__26155__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26155__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26006,inst_26000,inst_26003,inst_26004,inst_26008,inst_26023,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26026 = cljs.core.map.call(null,inst_26025,inst_26004);
var inst_26027 = cljs.core.pr_str.call(null,inst_26026);
var inst_26028 = figwheel.client.utils.log.call(null,inst_26027);
var inst_26029 = (function (){var all_files = inst_26000;
var res_SINGLEQUOTE_ = inst_26003;
var res = inst_26004;
var files_not_loaded = inst_26006;
var dependencies_that_loaded = inst_26008;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26006,inst_26000,inst_26003,inst_26004,inst_26008,inst_26023,inst_26025,inst_26026,inst_26027,inst_26028,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26006,inst_26000,inst_26003,inst_26004,inst_26008,inst_26023,inst_26025,inst_26026,inst_26027,inst_26028,state_val_26087,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26030 = setTimeout(inst_26029,(10));
var state_26086__$1 = (function (){var statearr_26157 = state_26086;
(statearr_26157[(33)] = inst_26023);

(statearr_26157[(34)] = inst_26028);

return statearr_26157;
})();
var statearr_26158_26224 = state_26086__$1;
(statearr_26158_26224[(2)] = inst_26030);

(statearr_26158_26224[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (16))){
var state_26086__$1 = state_26086;
var statearr_26159_26225 = state_26086__$1;
(statearr_26159_26225[(2)] = reload_dependents);

(statearr_26159_26225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (38))){
var inst_26040 = (state_26086[(16)]);
var inst_26057 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26040);
var state_26086__$1 = state_26086;
var statearr_26160_26226 = state_26086__$1;
(statearr_26160_26226[(2)] = inst_26057);

(statearr_26160_26226[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (30))){
var state_26086__$1 = state_26086;
var statearr_26161_26227 = state_26086__$1;
(statearr_26161_26227[(2)] = null);

(statearr_26161_26227[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (10))){
var inst_25960 = (state_26086[(22)]);
var inst_25962 = cljs.core.chunked_seq_QMARK_.call(null,inst_25960);
var state_26086__$1 = state_26086;
if(inst_25962){
var statearr_26162_26228 = state_26086__$1;
(statearr_26162_26228[(1)] = (13));

} else {
var statearr_26163_26229 = state_26086__$1;
(statearr_26163_26229[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (18))){
var inst_25994 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
if(cljs.core.truth_(inst_25994)){
var statearr_26164_26230 = state_26086__$1;
(statearr_26164_26230[(1)] = (19));

} else {
var statearr_26165_26231 = state_26086__$1;
(statearr_26165_26231[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (42))){
var state_26086__$1 = state_26086;
var statearr_26166_26232 = state_26086__$1;
(statearr_26166_26232[(2)] = null);

(statearr_26166_26232[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (37))){
var inst_26052 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26167_26233 = state_26086__$1;
(statearr_26167_26233[(2)] = inst_26052);

(statearr_26167_26233[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (8))){
var inst_25947 = (state_26086[(7)]);
var inst_25960 = (state_26086[(22)]);
var inst_25960__$1 = cljs.core.seq.call(null,inst_25947);
var state_26086__$1 = (function (){var statearr_26168 = state_26086;
(statearr_26168[(22)] = inst_25960__$1);

return statearr_26168;
})();
if(inst_25960__$1){
var statearr_26169_26234 = state_26086__$1;
(statearr_26169_26234[(1)] = (10));

} else {
var statearr_26170_26235 = state_26086__$1;
(statearr_26170_26235[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22212__auto__,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22213__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22213__auto____0 = (function (){
var statearr_26174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26174[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22213__auto__);

(statearr_26174[(1)] = (1));

return statearr_26174;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22213__auto____1 = (function (state_26086){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_26086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e26175){if((e26175 instanceof Object)){
var ex__22216__auto__ = e26175;
var statearr_26176_26236 = state_26086;
(statearr_26176_26236[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26237 = state_26086;
state_26086 = G__26237;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22213__auto__ = function(state_26086){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22213__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22213__auto____1.call(this,state_26086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22213__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22213__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22326__auto__ = (function (){var statearr_26177 = f__22325__auto__.call(null);
(statearr_26177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto__);

return statearr_26177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto__,map__25932,map__25932__$1,opts,before_jsload,on_jsload,reload_dependents,map__25933,map__25933__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22324__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26240,link){
var map__26243 = p__26240;
var map__26243__$1 = ((((!((map__26243 == null)))?((((map__26243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26243):map__26243);
var file = cljs.core.get.call(null,map__26243__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__26243,map__26243__$1,file){
return (function (p1__26238_SHARP_,p2__26239_SHARP_){
if(cljs.core._EQ_.call(null,p1__26238_SHARP_,p2__26239_SHARP_)){
return p1__26238_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__26243,map__26243__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26249){
var map__26250 = p__26249;
var map__26250__$1 = ((((!((map__26250 == null)))?((((map__26250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26250):map__26250);
var match_length = cljs.core.get.call(null,map__26250__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26250__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26245_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26245_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26252 = [];
var len__21227__auto___26255 = arguments.length;
var i__21228__auto___26256 = (0);
while(true){
if((i__21228__auto___26256 < len__21227__auto___26255)){
args26252.push((arguments[i__21228__auto___26256]));

var G__26257 = (i__21228__auto___26256 + (1));
i__21228__auto___26256 = G__26257;
continue;
} else {
}
break;
}

var G__26254 = args26252.length;
switch (G__26254) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26252.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26259_SHARP_,p2__26260_SHARP_){
return cljs.core.assoc.call(null,p1__26259_SHARP_,cljs.core.get.call(null,p2__26260_SHARP_,key),p2__26260_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26261){
var map__26264 = p__26261;
var map__26264__$1 = ((((!((map__26264 == null)))?((((map__26264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26264):map__26264);
var f_data = map__26264__$1;
var file = cljs.core.get.call(null,map__26264__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26266,files_msg){
var map__26273 = p__26266;
var map__26273__$1 = ((((!((map__26273 == null)))?((((map__26273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26273):map__26273);
var opts = map__26273__$1;
var on_cssload = cljs.core.get.call(null,map__26273__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26275_26279 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26276_26280 = null;
var count__26277_26281 = (0);
var i__26278_26282 = (0);
while(true){
if((i__26278_26282 < count__26277_26281)){
var f_26283 = cljs.core._nth.call(null,chunk__26276_26280,i__26278_26282);
figwheel.client.file_reloading.reload_css_file.call(null,f_26283);

var G__26284 = seq__26275_26279;
var G__26285 = chunk__26276_26280;
var G__26286 = count__26277_26281;
var G__26287 = (i__26278_26282 + (1));
seq__26275_26279 = G__26284;
chunk__26276_26280 = G__26285;
count__26277_26281 = G__26286;
i__26278_26282 = G__26287;
continue;
} else {
var temp__4657__auto___26288 = cljs.core.seq.call(null,seq__26275_26279);
if(temp__4657__auto___26288){
var seq__26275_26289__$1 = temp__4657__auto___26288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26275_26289__$1)){
var c__20963__auto___26290 = cljs.core.chunk_first.call(null,seq__26275_26289__$1);
var G__26291 = cljs.core.chunk_rest.call(null,seq__26275_26289__$1);
var G__26292 = c__20963__auto___26290;
var G__26293 = cljs.core.count.call(null,c__20963__auto___26290);
var G__26294 = (0);
seq__26275_26279 = G__26291;
chunk__26276_26280 = G__26292;
count__26277_26281 = G__26293;
i__26278_26282 = G__26294;
continue;
} else {
var f_26295 = cljs.core.first.call(null,seq__26275_26289__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26295);

var G__26296 = cljs.core.next.call(null,seq__26275_26289__$1);
var G__26297 = null;
var G__26298 = (0);
var G__26299 = (0);
seq__26275_26279 = G__26296;
chunk__26276_26280 = G__26297;
count__26277_26281 = G__26298;
i__26278_26282 = G__26299;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26273,map__26273__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26273,map__26273__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1471784888389