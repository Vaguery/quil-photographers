// Compiled by ClojureScript 1.9.225 {}
goog.provide('photographers.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
photographers.core.setup = (function photographers$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
photographers.core.update_state = (function photographers$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.01)], null);
});
photographers.core.build_area = (function photographers$core$build_area(camera_x,camera_y,focus_distance,focal_depth,field_of_view){
var inner = (focus_distance - (((1) / (3)) * focal_depth));
var outer = (focus_distance + (((2) / (3)) * focal_depth));
var half_angle = (field_of_view / (2));
quil.core.line.call(null,(0),(0),((1000) * quil.core.cos.call(null,half_angle)),((1000) * quil.core.sin.call(null,half_angle)));

quil.core.line.call(null,(0),(0),((1000) * quil.core.cos.call(null,half_angle)),((-1000) * quil.core.sin.call(null,half_angle)));

return quil.core.line.call(null,focus_distance,(1000),focus_distance,(-1000));
});
photographers.core.draw_state = (function photographers$core$draw_state(state){
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255),(11));

quil.core.stroke.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255),(11));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((100) * quil.core.cos.call(null,angle));
var y = ((100) * quil.core.sin.call(null,angle));
var tr__23043__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__23043__auto__);

var tr__23043__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__23043__auto____$1);

var tr__23049__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12.3 * angle)], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__23049__auto__);

return photographers.core.build_area.call(null,x,y,(100),(50),quil.core.radians.call(null,(85)));
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}});
photographers.core.photographers = (function photographers$core$photographers(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"photographers",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,photographers.core.update_state))?(function() { 
var G__24806__delegate = function (args){
return cljs.core.apply.call(null,photographers.core.update_state,args);
};
var G__24806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24807__i = 0, G__24807__a = new Array(arguments.length -  0);
while (G__24807__i < G__24807__a.length) {G__24807__a[G__24807__i] = arguments[G__24807__i + 0]; ++G__24807__i;}
  args = new cljs.core.IndexedSeq(G__24807__a,0);
} 
return G__24806__delegate.call(this,args);};
G__24806.cljs$lang$maxFixedArity = 0;
G__24806.cljs$lang$applyTo = (function (arglist__24808){
var args = cljs.core.seq(arglist__24808);
return G__24806__delegate(args);
});
G__24806.cljs$core$IFn$_invoke$arity$variadic = G__24806__delegate;
return G__24806;
})()
:photographers.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(800)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,photographers.core.setup))?(function() { 
var G__24809__delegate = function (args){
return cljs.core.apply.call(null,photographers.core.setup,args);
};
var G__24809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24810__i = 0, G__24810__a = new Array(arguments.length -  0);
while (G__24810__i < G__24810__a.length) {G__24810__a[G__24810__i] = arguments[G__24810__i + 0]; ++G__24810__i;}
  args = new cljs.core.IndexedSeq(G__24810__a,0);
} 
return G__24809__delegate.call(this,args);};
G__24809.cljs$lang$maxFixedArity = 0;
G__24809.cljs$lang$applyTo = (function (arglist__24811){
var args = cljs.core.seq(arglist__24811);
return G__24809__delegate(args);
});
G__24809.cljs$core$IFn$_invoke$arity$variadic = G__24809__delegate;
return G__24809;
})()
:photographers.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,photographers.core.draw_state))?(function() { 
var G__24812__delegate = function (args){
return cljs.core.apply.call(null,photographers.core.draw_state,args);
};
var G__24812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24813__i = 0, G__24813__a = new Array(arguments.length -  0);
while (G__24813__i < G__24813__a.length) {G__24813__a[G__24813__i] = arguments[G__24813__i + 0]; ++G__24813__i;}
  args = new cljs.core.IndexedSeq(G__24813__a,0);
} 
return G__24812__delegate.call(this,args);};
G__24812.cljs$lang$maxFixedArity = 0;
G__24812.cljs$lang$applyTo = (function (arglist__24814){
var args = cljs.core.seq(arglist__24814);
return G__24812__delegate(args);
});
G__24812.cljs$core$IFn$_invoke$arity$variadic = G__24812__delegate;
return G__24812;
})()
:photographers.core.draw_state));
});
goog.exportSymbol('photographers.core.photographers', photographers.core.photographers);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__22663__22664__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__22663__22664__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),photographers.core.photographers,new cljs.core.Keyword(null,"host-id","host-id",742376279),"photographers"], null));
}

//# sourceMappingURL=core.js.map?rel=1471800919136