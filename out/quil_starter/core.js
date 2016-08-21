// Compiled by ClojureScript 1.9.225 {}
goog.provide('quil_starter.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
quil_starter.core.setup = (function quil_starter$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
quil_starter.core.update_state = (function quil_starter$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
quil_starter.core.draw_state = (function quil_starter$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__8854__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8854__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
quil_starter.core.quil_starter = (function quil_starter$core$quil_starter(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"quil-starter",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,quil_starter.core.update_state))?(function() { 
var G__8953__delegate = function (args){
return cljs.core.apply.call(null,quil_starter.core.update_state,args);
};
var G__8953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8954__i = 0, G__8954__a = new Array(arguments.length -  0);
while (G__8954__i < G__8954__a.length) {G__8954__a[G__8954__i] = arguments[G__8954__i + 0]; ++G__8954__i;}
  args = new cljs.core.IndexedSeq(G__8954__a,0);
} 
return G__8953__delegate.call(this,args);};
G__8953.cljs$lang$maxFixedArity = 0;
G__8953.cljs$lang$applyTo = (function (arglist__8955){
var args = cljs.core.seq(arglist__8955);
return G__8953__delegate(args);
});
G__8953.cljs$core$IFn$_invoke$arity$variadic = G__8953__delegate;
return G__8953;
})()
:quil_starter.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,quil_starter.core.setup))?(function() { 
var G__8956__delegate = function (args){
return cljs.core.apply.call(null,quil_starter.core.setup,args);
};
var G__8956 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8957__i = 0, G__8957__a = new Array(arguments.length -  0);
while (G__8957__i < G__8957__a.length) {G__8957__a[G__8957__i] = arguments[G__8957__i + 0]; ++G__8957__i;}
  args = new cljs.core.IndexedSeq(G__8957__a,0);
} 
return G__8956__delegate.call(this,args);};
G__8956.cljs$lang$maxFixedArity = 0;
G__8956.cljs$lang$applyTo = (function (arglist__8958){
var args = cljs.core.seq(arglist__8958);
return G__8956__delegate(args);
});
G__8956.cljs$core$IFn$_invoke$arity$variadic = G__8956__delegate;
return G__8956;
})()
:quil_starter.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,quil_starter.core.draw_state))?(function() { 
var G__8959__delegate = function (args){
return cljs.core.apply.call(null,quil_starter.core.draw_state,args);
};
var G__8959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8960__i = 0, G__8960__a = new Array(arguments.length -  0);
while (G__8960__i < G__8960__a.length) {G__8960__a[G__8960__i] = arguments[G__8960__i + 0]; ++G__8960__i;}
  args = new cljs.core.IndexedSeq(G__8960__a,0);
} 
return G__8959__delegate.call(this,args);};
G__8959.cljs$lang$maxFixedArity = 0;
G__8959.cljs$lang$applyTo = (function (arglist__8961){
var args = cljs.core.seq(arglist__8961);
return G__8959__delegate(args);
});
G__8959.cljs$core$IFn$_invoke$arity$variadic = G__8959__delegate;
return G__8959;
})()
:quil_starter.core.draw_state));
});
goog.exportSymbol('quil_starter.core.quil_starter', quil_starter.core.quil_starter);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7699__7700__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7699__7700__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),quil_starter.core.quil_starter,new cljs.core.Keyword(null,"host-id","host-id",742376279),"quil-starter"], null));
}

//# sourceMappingURL=core.js.map