// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20758__auto__,writer__20759__auto__,opt__20760__auto__){
return cljs.core._write.call(null,writer__20759__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26353 = arguments.length;
var i__21228__auto___26354 = (0);
while(true){
if((i__21228__auto___26354 < len__21227__auto___26353)){
args__21234__auto__.push((arguments[i__21228__auto___26354]));

var G__26355 = (i__21228__auto___26354 + (1));
i__21228__auto___26354 = G__26355;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq26352){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26352));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26357 = arguments.length;
var i__21228__auto___26358 = (0);
while(true){
if((i__21228__auto___26358 < len__21227__auto___26357)){
args__21234__auto__.push((arguments[i__21228__auto___26358]));

var G__26359 = (i__21228__auto___26358 + (1));
i__21228__auto___26358 = G__26359;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq26356){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26356));
});

var g_QMARK__26360 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_26361 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26360){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26360))
,null));
var mkg_26362 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26360,g_26361){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26360,g_26361))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__26360,g_26361,mkg_26362){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__26360).call(null,x);
});})(g_QMARK__26360,g_26361,mkg_26362))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__26360,g_26361,mkg_26362){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_26362).call(null,gfn);
});})(g_QMARK__26360,g_26361,mkg_26362))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__26360,g_26361,mkg_26362){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_26361).call(null,generator);
});})(g_QMARK__26360,g_26361,mkg_26362))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__26324__auto___26381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__26324__auto___26381){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26382 = arguments.length;
var i__21228__auto___26383 = (0);
while(true){
if((i__21228__auto___26383 < len__21227__auto___26382)){
args__21234__auto__.push((arguments[i__21228__auto___26383]));

var G__26384 = (i__21228__auto___26383 + (1));
i__21228__auto___26383 = G__26384;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26381))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26381){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26381),args);
});})(g__26324__auto___26381))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__26324__auto___26381){
return (function (seq26363){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26363));
});})(g__26324__auto___26381))
;


var g__26324__auto___26385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__26324__auto___26385){
return (function cljs$spec$impl$gen$list(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26386 = arguments.length;
var i__21228__auto___26387 = (0);
while(true){
if((i__21228__auto___26387 < len__21227__auto___26386)){
args__21234__auto__.push((arguments[i__21228__auto___26387]));

var G__26388 = (i__21228__auto___26387 + (1));
i__21228__auto___26387 = G__26388;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26385))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26385){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26385),args);
});})(g__26324__auto___26385))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__26324__auto___26385){
return (function (seq26364){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26364));
});})(g__26324__auto___26385))
;


var g__26324__auto___26389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__26324__auto___26389){
return (function cljs$spec$impl$gen$map(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26390 = arguments.length;
var i__21228__auto___26391 = (0);
while(true){
if((i__21228__auto___26391 < len__21227__auto___26390)){
args__21234__auto__.push((arguments[i__21228__auto___26391]));

var G__26392 = (i__21228__auto___26391 + (1));
i__21228__auto___26391 = G__26392;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26389))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26389){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26389),args);
});})(g__26324__auto___26389))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__26324__auto___26389){
return (function (seq26365){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26365));
});})(g__26324__auto___26389))
;


var g__26324__auto___26393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__26324__auto___26393){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26394 = arguments.length;
var i__21228__auto___26395 = (0);
while(true){
if((i__21228__auto___26395 < len__21227__auto___26394)){
args__21234__auto__.push((arguments[i__21228__auto___26395]));

var G__26396 = (i__21228__auto___26395 + (1));
i__21228__auto___26395 = G__26396;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26393))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26393){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26393),args);
});})(g__26324__auto___26393))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__26324__auto___26393){
return (function (seq26366){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26366));
});})(g__26324__auto___26393))
;


var g__26324__auto___26397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__26324__auto___26397){
return (function cljs$spec$impl$gen$set(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26398 = arguments.length;
var i__21228__auto___26399 = (0);
while(true){
if((i__21228__auto___26399 < len__21227__auto___26398)){
args__21234__auto__.push((arguments[i__21228__auto___26399]));

var G__26400 = (i__21228__auto___26399 + (1));
i__21228__auto___26399 = G__26400;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26397))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26397){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26397),args);
});})(g__26324__auto___26397))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__26324__auto___26397){
return (function (seq26367){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26367));
});})(g__26324__auto___26397))
;


var g__26324__auto___26401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__26324__auto___26401){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26402 = arguments.length;
var i__21228__auto___26403 = (0);
while(true){
if((i__21228__auto___26403 < len__21227__auto___26402)){
args__21234__auto__.push((arguments[i__21228__auto___26403]));

var G__26404 = (i__21228__auto___26403 + (1));
i__21228__auto___26403 = G__26404;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26401))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26401){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26401),args);
});})(g__26324__auto___26401))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__26324__auto___26401){
return (function (seq26368){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26368));
});})(g__26324__auto___26401))
;


var g__26324__auto___26405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__26324__auto___26405){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26406 = arguments.length;
var i__21228__auto___26407 = (0);
while(true){
if((i__21228__auto___26407 < len__21227__auto___26406)){
args__21234__auto__.push((arguments[i__21228__auto___26407]));

var G__26408 = (i__21228__auto___26407 + (1));
i__21228__auto___26407 = G__26408;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26405))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26405){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26405),args);
});})(g__26324__auto___26405))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__26324__auto___26405){
return (function (seq26369){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26369));
});})(g__26324__auto___26405))
;


var g__26324__auto___26409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__26324__auto___26409){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26410 = arguments.length;
var i__21228__auto___26411 = (0);
while(true){
if((i__21228__auto___26411 < len__21227__auto___26410)){
args__21234__auto__.push((arguments[i__21228__auto___26411]));

var G__26412 = (i__21228__auto___26411 + (1));
i__21228__auto___26411 = G__26412;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26409))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26409){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26409),args);
});})(g__26324__auto___26409))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__26324__auto___26409){
return (function (seq26370){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26370));
});})(g__26324__auto___26409))
;


var g__26324__auto___26413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__26324__auto___26413){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26414 = arguments.length;
var i__21228__auto___26415 = (0);
while(true){
if((i__21228__auto___26415 < len__21227__auto___26414)){
args__21234__auto__.push((arguments[i__21228__auto___26415]));

var G__26416 = (i__21228__auto___26415 + (1));
i__21228__auto___26415 = G__26416;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26413))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26413){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26413),args);
});})(g__26324__auto___26413))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__26324__auto___26413){
return (function (seq26371){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26371));
});})(g__26324__auto___26413))
;


var g__26324__auto___26417 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__26324__auto___26417){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26418 = arguments.length;
var i__21228__auto___26419 = (0);
while(true){
if((i__21228__auto___26419 < len__21227__auto___26418)){
args__21234__auto__.push((arguments[i__21228__auto___26419]));

var G__26420 = (i__21228__auto___26419 + (1));
i__21228__auto___26419 = G__26420;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26417))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26417),args);
});})(g__26324__auto___26417))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__26324__auto___26417){
return (function (seq26372){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26372));
});})(g__26324__auto___26417))
;


var g__26324__auto___26421 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__26324__auto___26421){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26422 = arguments.length;
var i__21228__auto___26423 = (0);
while(true){
if((i__21228__auto___26423 < len__21227__auto___26422)){
args__21234__auto__.push((arguments[i__21228__auto___26423]));

var G__26424 = (i__21228__auto___26423 + (1));
i__21228__auto___26423 = G__26424;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26421))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26421),args);
});})(g__26324__auto___26421))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__26324__auto___26421){
return (function (seq26373){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26373));
});})(g__26324__auto___26421))
;


var g__26324__auto___26425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__26324__auto___26425){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26426 = arguments.length;
var i__21228__auto___26427 = (0);
while(true){
if((i__21228__auto___26427 < len__21227__auto___26426)){
args__21234__auto__.push((arguments[i__21228__auto___26427]));

var G__26428 = (i__21228__auto___26427 + (1));
i__21228__auto___26427 = G__26428;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26425))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26425),args);
});})(g__26324__auto___26425))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__26324__auto___26425){
return (function (seq26374){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26374));
});})(g__26324__auto___26425))
;


var g__26324__auto___26429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__26324__auto___26429){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26430 = arguments.length;
var i__21228__auto___26431 = (0);
while(true){
if((i__21228__auto___26431 < len__21227__auto___26430)){
args__21234__auto__.push((arguments[i__21228__auto___26431]));

var G__26432 = (i__21228__auto___26431 + (1));
i__21228__auto___26431 = G__26432;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26429))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26429),args);
});})(g__26324__auto___26429))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__26324__auto___26429){
return (function (seq26375){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26375));
});})(g__26324__auto___26429))
;


var g__26324__auto___26433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__26324__auto___26433){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26434 = arguments.length;
var i__21228__auto___26435 = (0);
while(true){
if((i__21228__auto___26435 < len__21227__auto___26434)){
args__21234__auto__.push((arguments[i__21228__auto___26435]));

var G__26436 = (i__21228__auto___26435 + (1));
i__21228__auto___26435 = G__26436;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26433))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26433),args);
});})(g__26324__auto___26433))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__26324__auto___26433){
return (function (seq26376){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26376));
});})(g__26324__auto___26433))
;


var g__26324__auto___26437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__26324__auto___26437){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26438 = arguments.length;
var i__21228__auto___26439 = (0);
while(true){
if((i__21228__auto___26439 < len__21227__auto___26438)){
args__21234__auto__.push((arguments[i__21228__auto___26439]));

var G__26440 = (i__21228__auto___26439 + (1));
i__21228__auto___26439 = G__26440;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26437))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26437){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26437),args);
});})(g__26324__auto___26437))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__26324__auto___26437){
return (function (seq26377){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26377));
});})(g__26324__auto___26437))
;


var g__26324__auto___26441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__26324__auto___26441){
return (function cljs$spec$impl$gen$return(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26442 = arguments.length;
var i__21228__auto___26443 = (0);
while(true){
if((i__21228__auto___26443 < len__21227__auto___26442)){
args__21234__auto__.push((arguments[i__21228__auto___26443]));

var G__26444 = (i__21228__auto___26443 + (1));
i__21228__auto___26443 = G__26444;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26441))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26441){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26441),args);
});})(g__26324__auto___26441))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__26324__auto___26441){
return (function (seq26378){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26378));
});})(g__26324__auto___26441))
;


var g__26324__auto___26445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__26324__auto___26445){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26446 = arguments.length;
var i__21228__auto___26447 = (0);
while(true){
if((i__21228__auto___26447 < len__21227__auto___26446)){
args__21234__auto__.push((arguments[i__21228__auto___26447]));

var G__26448 = (i__21228__auto___26447 + (1));
i__21228__auto___26447 = G__26448;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26445))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26445){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26445),args);
});})(g__26324__auto___26445))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__26324__auto___26445){
return (function (seq26379){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26379));
});})(g__26324__auto___26445))
;


var g__26324__auto___26449 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__26324__auto___26449){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26450 = arguments.length;
var i__21228__auto___26451 = (0);
while(true){
if((i__21228__auto___26451 < len__21227__auto___26450)){
args__21234__auto__.push((arguments[i__21228__auto___26451]));

var G__26452 = (i__21228__auto___26451 + (1));
i__21228__auto___26451 = G__26452;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26324__auto___26449))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26324__auto___26449){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26324__auto___26449),args);
});})(g__26324__auto___26449))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__26324__auto___26449){
return (function (seq26380){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26380));
});})(g__26324__auto___26449))
;

var g__26337__auto___26474 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__26337__auto___26474){
return (function cljs$spec$impl$gen$any(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26475 = arguments.length;
var i__21228__auto___26476 = (0);
while(true){
if((i__21228__auto___26476 < len__21227__auto___26475)){
args__21234__auto__.push((arguments[i__21228__auto___26476]));

var G__26477 = (i__21228__auto___26476 + (1));
i__21228__auto___26476 = G__26477;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26474))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26474){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26474);
});})(g__26337__auto___26474))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__26337__auto___26474){
return (function (seq26453){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26453));
});})(g__26337__auto___26474))
;


var g__26337__auto___26478 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__26337__auto___26478){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26479 = arguments.length;
var i__21228__auto___26480 = (0);
while(true){
if((i__21228__auto___26480 < len__21227__auto___26479)){
args__21234__auto__.push((arguments[i__21228__auto___26480]));

var G__26481 = (i__21228__auto___26480 + (1));
i__21228__auto___26480 = G__26481;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26478))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26478){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26478);
});})(g__26337__auto___26478))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__26337__auto___26478){
return (function (seq26454){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26454));
});})(g__26337__auto___26478))
;


var g__26337__auto___26482 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__26337__auto___26482){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26483 = arguments.length;
var i__21228__auto___26484 = (0);
while(true){
if((i__21228__auto___26484 < len__21227__auto___26483)){
args__21234__auto__.push((arguments[i__21228__auto___26484]));

var G__26485 = (i__21228__auto___26484 + (1));
i__21228__auto___26484 = G__26485;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26482))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26482){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26482);
});})(g__26337__auto___26482))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__26337__auto___26482){
return (function (seq26455){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26455));
});})(g__26337__auto___26482))
;


var g__26337__auto___26486 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__26337__auto___26486){
return (function cljs$spec$impl$gen$char(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26487 = arguments.length;
var i__21228__auto___26488 = (0);
while(true){
if((i__21228__auto___26488 < len__21227__auto___26487)){
args__21234__auto__.push((arguments[i__21228__auto___26488]));

var G__26489 = (i__21228__auto___26488 + (1));
i__21228__auto___26488 = G__26489;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26486))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26486){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26486);
});})(g__26337__auto___26486))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__26337__auto___26486){
return (function (seq26456){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26456));
});})(g__26337__auto___26486))
;


var g__26337__auto___26490 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__26337__auto___26490){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26491 = arguments.length;
var i__21228__auto___26492 = (0);
while(true){
if((i__21228__auto___26492 < len__21227__auto___26491)){
args__21234__auto__.push((arguments[i__21228__auto___26492]));

var G__26493 = (i__21228__auto___26492 + (1));
i__21228__auto___26492 = G__26493;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26490))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26490){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26490);
});})(g__26337__auto___26490))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__26337__auto___26490){
return (function (seq26457){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26457));
});})(g__26337__auto___26490))
;


var g__26337__auto___26494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__26337__auto___26494){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26495 = arguments.length;
var i__21228__auto___26496 = (0);
while(true){
if((i__21228__auto___26496 < len__21227__auto___26495)){
args__21234__auto__.push((arguments[i__21228__auto___26496]));

var G__26497 = (i__21228__auto___26496 + (1));
i__21228__auto___26496 = G__26497;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26494))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26494){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26494);
});})(g__26337__auto___26494))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__26337__auto___26494){
return (function (seq26458){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26458));
});})(g__26337__auto___26494))
;


var g__26337__auto___26498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__26337__auto___26498){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26499 = arguments.length;
var i__21228__auto___26500 = (0);
while(true){
if((i__21228__auto___26500 < len__21227__auto___26499)){
args__21234__auto__.push((arguments[i__21228__auto___26500]));

var G__26501 = (i__21228__auto___26500 + (1));
i__21228__auto___26500 = G__26501;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26498))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26498){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26498);
});})(g__26337__auto___26498))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__26337__auto___26498){
return (function (seq26459){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26459));
});})(g__26337__auto___26498))
;


var g__26337__auto___26502 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__26337__auto___26502){
return (function cljs$spec$impl$gen$double(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26503 = arguments.length;
var i__21228__auto___26504 = (0);
while(true){
if((i__21228__auto___26504 < len__21227__auto___26503)){
args__21234__auto__.push((arguments[i__21228__auto___26504]));

var G__26505 = (i__21228__auto___26504 + (1));
i__21228__auto___26504 = G__26505;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26502))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26502){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26502);
});})(g__26337__auto___26502))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__26337__auto___26502){
return (function (seq26460){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26460));
});})(g__26337__auto___26502))
;


var g__26337__auto___26506 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__26337__auto___26506){
return (function cljs$spec$impl$gen$int(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26507 = arguments.length;
var i__21228__auto___26508 = (0);
while(true){
if((i__21228__auto___26508 < len__21227__auto___26507)){
args__21234__auto__.push((arguments[i__21228__auto___26508]));

var G__26509 = (i__21228__auto___26508 + (1));
i__21228__auto___26508 = G__26509;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26506))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26506){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26506);
});})(g__26337__auto___26506))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__26337__auto___26506){
return (function (seq26461){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26461));
});})(g__26337__auto___26506))
;


var g__26337__auto___26510 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__26337__auto___26510){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26511 = arguments.length;
var i__21228__auto___26512 = (0);
while(true){
if((i__21228__auto___26512 < len__21227__auto___26511)){
args__21234__auto__.push((arguments[i__21228__auto___26512]));

var G__26513 = (i__21228__auto___26512 + (1));
i__21228__auto___26512 = G__26513;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26510))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26510){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26510);
});})(g__26337__auto___26510))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__26337__auto___26510){
return (function (seq26462){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26462));
});})(g__26337__auto___26510))
;


var g__26337__auto___26514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__26337__auto___26514){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26515 = arguments.length;
var i__21228__auto___26516 = (0);
while(true){
if((i__21228__auto___26516 < len__21227__auto___26515)){
args__21234__auto__.push((arguments[i__21228__auto___26516]));

var G__26517 = (i__21228__auto___26516 + (1));
i__21228__auto___26516 = G__26517;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26514))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26514){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26514);
});})(g__26337__auto___26514))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__26337__auto___26514){
return (function (seq26463){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26463));
});})(g__26337__auto___26514))
;


var g__26337__auto___26518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__26337__auto___26518){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26519 = arguments.length;
var i__21228__auto___26520 = (0);
while(true){
if((i__21228__auto___26520 < len__21227__auto___26519)){
args__21234__auto__.push((arguments[i__21228__auto___26520]));

var G__26521 = (i__21228__auto___26520 + (1));
i__21228__auto___26520 = G__26521;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26518))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26518){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26518);
});})(g__26337__auto___26518))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__26337__auto___26518){
return (function (seq26464){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26464));
});})(g__26337__auto___26518))
;


var g__26337__auto___26522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__26337__auto___26522){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26523 = arguments.length;
var i__21228__auto___26524 = (0);
while(true){
if((i__21228__auto___26524 < len__21227__auto___26523)){
args__21234__auto__.push((arguments[i__21228__auto___26524]));

var G__26525 = (i__21228__auto___26524 + (1));
i__21228__auto___26524 = G__26525;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26522))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26522){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26522);
});})(g__26337__auto___26522))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__26337__auto___26522){
return (function (seq26465){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26465));
});})(g__26337__auto___26522))
;


var g__26337__auto___26526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__26337__auto___26526){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26527 = arguments.length;
var i__21228__auto___26528 = (0);
while(true){
if((i__21228__auto___26528 < len__21227__auto___26527)){
args__21234__auto__.push((arguments[i__21228__auto___26528]));

var G__26529 = (i__21228__auto___26528 + (1));
i__21228__auto___26528 = G__26529;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26526))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26526){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26526);
});})(g__26337__auto___26526))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__26337__auto___26526){
return (function (seq26466){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26466));
});})(g__26337__auto___26526))
;


var g__26337__auto___26530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__26337__auto___26530){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26531 = arguments.length;
var i__21228__auto___26532 = (0);
while(true){
if((i__21228__auto___26532 < len__21227__auto___26531)){
args__21234__auto__.push((arguments[i__21228__auto___26532]));

var G__26533 = (i__21228__auto___26532 + (1));
i__21228__auto___26532 = G__26533;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26530))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26530){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26530);
});})(g__26337__auto___26530))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__26337__auto___26530){
return (function (seq26467){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26467));
});})(g__26337__auto___26530))
;


var g__26337__auto___26534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__26337__auto___26534){
return (function cljs$spec$impl$gen$string(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26535 = arguments.length;
var i__21228__auto___26536 = (0);
while(true){
if((i__21228__auto___26536 < len__21227__auto___26535)){
args__21234__auto__.push((arguments[i__21228__auto___26536]));

var G__26537 = (i__21228__auto___26536 + (1));
i__21228__auto___26536 = G__26537;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26534))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26534){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26534);
});})(g__26337__auto___26534))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__26337__auto___26534){
return (function (seq26468){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26468));
});})(g__26337__auto___26534))
;


var g__26337__auto___26538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__26337__auto___26538){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26539 = arguments.length;
var i__21228__auto___26540 = (0);
while(true){
if((i__21228__auto___26540 < len__21227__auto___26539)){
args__21234__auto__.push((arguments[i__21228__auto___26540]));

var G__26541 = (i__21228__auto___26540 + (1));
i__21228__auto___26540 = G__26541;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26538))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26538){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26538);
});})(g__26337__auto___26538))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__26337__auto___26538){
return (function (seq26469){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26469));
});})(g__26337__auto___26538))
;


var g__26337__auto___26542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__26337__auto___26542){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26543 = arguments.length;
var i__21228__auto___26544 = (0);
while(true){
if((i__21228__auto___26544 < len__21227__auto___26543)){
args__21234__auto__.push((arguments[i__21228__auto___26544]));

var G__26545 = (i__21228__auto___26544 + (1));
i__21228__auto___26544 = G__26545;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26542))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26542){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26542);
});})(g__26337__auto___26542))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__26337__auto___26542){
return (function (seq26470){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26470));
});})(g__26337__auto___26542))
;


var g__26337__auto___26546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__26337__auto___26546){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26547 = arguments.length;
var i__21228__auto___26548 = (0);
while(true){
if((i__21228__auto___26548 < len__21227__auto___26547)){
args__21234__auto__.push((arguments[i__21228__auto___26548]));

var G__26549 = (i__21228__auto___26548 + (1));
i__21228__auto___26548 = G__26549;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26546))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26546){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26546);
});})(g__26337__auto___26546))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__26337__auto___26546){
return (function (seq26471){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26471));
});})(g__26337__auto___26546))
;


var g__26337__auto___26550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__26337__auto___26550){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26551 = arguments.length;
var i__21228__auto___26552 = (0);
while(true){
if((i__21228__auto___26552 < len__21227__auto___26551)){
args__21234__auto__.push((arguments[i__21228__auto___26552]));

var G__26553 = (i__21228__auto___26552 + (1));
i__21228__auto___26552 = G__26553;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26550))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26550){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26550);
});})(g__26337__auto___26550))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__26337__auto___26550){
return (function (seq26472){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26472));
});})(g__26337__auto___26550))
;


var g__26337__auto___26554 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__26337__auto___26554){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26555 = arguments.length;
var i__21228__auto___26556 = (0);
while(true){
if((i__21228__auto___26556 < len__21227__auto___26555)){
args__21234__auto__.push((arguments[i__21228__auto___26556]));

var G__26557 = (i__21228__auto___26556 + (1));
i__21228__auto___26556 = G__26557;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});})(g__26337__auto___26554))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26337__auto___26554){
return (function (args){
return cljs.core.deref.call(null,g__26337__auto___26554);
});})(g__26337__auto___26554))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__26337__auto___26554){
return (function (seq26473){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26473));
});})(g__26337__auto___26554))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21234__auto__ = [];
var len__21227__auto___26560 = arguments.length;
var i__21228__auto___26561 = (0);
while(true){
if((i__21228__auto___26561 < len__21227__auto___26560)){
args__21234__auto__.push((arguments[i__21228__auto___26561]));

var G__26562 = (i__21228__auto___26561 + (1));
i__21228__auto___26561 = G__26562;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__26558_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__26558_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq26559){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26559));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__26563_SHARP_){
return (new Date(p1__26563_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1471784889404