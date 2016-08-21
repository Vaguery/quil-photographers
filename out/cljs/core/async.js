// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22369 = [];
var len__21227__auto___22375 = arguments.length;
var i__21228__auto___22376 = (0);
while(true){
if((i__21228__auto___22376 < len__21227__auto___22375)){
args22369.push((arguments[i__21228__auto___22376]));

var G__22377 = (i__21228__auto___22376 + (1));
i__21228__auto___22376 = G__22377;
continue;
} else {
}
break;
}

var G__22371 = args22369.length;
switch (G__22371) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22369.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22372 = (function (f,blockable,meta22373){
this.f = f;
this.blockable = blockable;
this.meta22373 = meta22373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22374,meta22373__$1){
var self__ = this;
var _22374__$1 = this;
return (new cljs.core.async.t_cljs$core$async22372(self__.f,self__.blockable,meta22373__$1));
});

cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22374){
var self__ = this;
var _22374__$1 = this;
return self__.meta22373;
});

cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22373","meta22373",-91215852,null)], null);
});

cljs.core.async.t_cljs$core$async22372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22372";

cljs.core.async.t_cljs$core$async22372.cljs$lang$ctorPrWriter = (function (this__20758__auto__,writer__20759__auto__,opt__20760__auto__){
return cljs.core._write.call(null,writer__20759__auto__,"cljs.core.async/t_cljs$core$async22372");
});

cljs.core.async.__GT_t_cljs$core$async22372 = (function cljs$core$async$__GT_t_cljs$core$async22372(f__$1,blockable__$1,meta22373){
return (new cljs.core.async.t_cljs$core$async22372(f__$1,blockable__$1,meta22373));
});

}

return (new cljs.core.async.t_cljs$core$async22372(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22381 = [];
var len__21227__auto___22384 = arguments.length;
var i__21228__auto___22385 = (0);
while(true){
if((i__21228__auto___22385 < len__21227__auto___22384)){
args22381.push((arguments[i__21228__auto___22385]));

var G__22386 = (i__21228__auto___22385 + (1));
i__21228__auto___22385 = G__22386;
continue;
} else {
}
break;
}

var G__22383 = args22381.length;
switch (G__22383) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22381.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22388 = [];
var len__21227__auto___22391 = arguments.length;
var i__21228__auto___22392 = (0);
while(true){
if((i__21228__auto___22392 < len__21227__auto___22391)){
args22388.push((arguments[i__21228__auto___22392]));

var G__22393 = (i__21228__auto___22392 + (1));
i__21228__auto___22392 = G__22393;
continue;
} else {
}
break;
}

var G__22390 = args22388.length;
switch (G__22390) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22388.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22395 = [];
var len__21227__auto___22398 = arguments.length;
var i__21228__auto___22399 = (0);
while(true){
if((i__21228__auto___22399 < len__21227__auto___22398)){
args22395.push((arguments[i__21228__auto___22399]));

var G__22400 = (i__21228__auto___22399 + (1));
i__21228__auto___22399 = G__22400;
continue;
} else {
}
break;
}

var G__22397 = args22395.length;
switch (G__22397) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22395.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22402 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22402);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22402,ret){
return (function (){
return fn1.call(null,val_22402);
});})(val_22402,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22403 = [];
var len__21227__auto___22406 = arguments.length;
var i__21228__auto___22407 = (0);
while(true){
if((i__21228__auto___22407 < len__21227__auto___22406)){
args22403.push((arguments[i__21228__auto___22407]));

var G__22408 = (i__21228__auto___22407 + (1));
i__21228__auto___22407 = G__22408;
continue;
} else {
}
break;
}

var G__22405 = args22403.length;
switch (G__22405) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22403.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21067__auto___22410 = n;
var x_22411 = (0);
while(true){
if((x_22411 < n__21067__auto___22410)){
(a[x_22411] = (0));

var G__22412 = (x_22411 + (1));
x_22411 = G__22412;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22413 = (i + (1));
i = G__22413;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22417 = (function (alt_flag,flag,meta22418){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22418 = meta22418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22419,meta22418__$1){
var self__ = this;
var _22419__$1 = this;
return (new cljs.core.async.t_cljs$core$async22417(self__.alt_flag,self__.flag,meta22418__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22419){
var self__ = this;
var _22419__$1 = this;
return self__.meta22418;
});})(flag))
;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22417.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22418","meta22418",-1177801220,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22417";

cljs.core.async.t_cljs$core$async22417.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20758__auto__,writer__20759__auto__,opt__20760__auto__){
return cljs.core._write.call(null,writer__20759__auto__,"cljs.core.async/t_cljs$core$async22417");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22417 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22417(alt_flag__$1,flag__$1,meta22418){
return (new cljs.core.async.t_cljs$core$async22417(alt_flag__$1,flag__$1,meta22418));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22417(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22423 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22423 = (function (alt_handler,flag,cb,meta22424){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22424 = meta22424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22425,meta22424__$1){
var self__ = this;
var _22425__$1 = this;
return (new cljs.core.async.t_cljs$core$async22423(self__.alt_handler,self__.flag,self__.cb,meta22424__$1));
});

cljs.core.async.t_cljs$core$async22423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22425){
var self__ = this;
var _22425__$1 = this;
return self__.meta22424;
});

cljs.core.async.t_cljs$core$async22423.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22423.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22423.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22423.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22424","meta22424",385030617,null)], null);
});

cljs.core.async.t_cljs$core$async22423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22423";

cljs.core.async.t_cljs$core$async22423.cljs$lang$ctorPrWriter = (function (this__20758__auto__,writer__20759__auto__,opt__20760__auto__){
return cljs.core._write.call(null,writer__20759__auto__,"cljs.core.async/t_cljs$core$async22423");
});

cljs.core.async.__GT_t_cljs$core$async22423 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22423(alt_handler__$1,flag__$1,cb__$1,meta22424){
return (new cljs.core.async.t_cljs$core$async22423(alt_handler__$1,flag__$1,cb__$1,meta22424));
});

}

return (new cljs.core.async.t_cljs$core$async22423(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22426_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22426_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22427_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22427_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20152__auto__ = wport;
if(cljs.core.truth_(or__20152__auto__)){
return or__20152__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22428 = (i + (1));
i = G__22428;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20152__auto__ = ret;
if(cljs.core.truth_(or__20152__auto__)){
return or__20152__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__20140__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20140__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20140__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21234__auto__ = [];
var len__21227__auto___22434 = arguments.length;
var i__21228__auto___22435 = (0);
while(true){
if((i__21228__auto___22435 < len__21227__auto___22434)){
args__21234__auto__.push((arguments[i__21228__auto___22435]));

var G__22436 = (i__21228__auto___22435 + (1));
i__21228__auto___22435 = G__22436;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((1) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21235__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22431){
var map__22432 = p__22431;
var map__22432__$1 = ((((!((map__22432 == null)))?((((map__22432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22432):map__22432);
var opts = map__22432__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22429){
var G__22430 = cljs.core.first.call(null,seq22429);
var seq22429__$1 = cljs.core.next.call(null,seq22429);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22430,seq22429__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22437 = [];
var len__21227__auto___22487 = arguments.length;
var i__21228__auto___22488 = (0);
while(true){
if((i__21228__auto___22488 < len__21227__auto___22487)){
args22437.push((arguments[i__21228__auto___22488]));

var G__22489 = (i__21228__auto___22488 + (1));
i__21228__auto___22488 = G__22489;
continue;
} else {
}
break;
}

var G__22439 = args22437.length;
switch (G__22439) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22437.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22324__auto___22491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___22491){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___22491){
return (function (state_22463){
var state_val_22464 = (state_22463[(1)]);
if((state_val_22464 === (7))){
var inst_22459 = (state_22463[(2)]);
var state_22463__$1 = state_22463;
var statearr_22465_22492 = state_22463__$1;
(statearr_22465_22492[(2)] = inst_22459);

(statearr_22465_22492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22464 === (1))){
var state_22463__$1 = state_22463;
var statearr_22466_22493 = state_22463__$1;
(statearr_22466_22493[(2)] = null);

(statearr_22466_22493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22464 === (4))){
var inst_22442 = (state_22463[(7)]);
var inst_22442__$1 = (state_22463[(2)]);
var inst_22443 = (inst_22442__$1 == null);
var state_22463__$1 = (function (){var statearr_22467 = state_22463;
(statearr_22467[(7)] = inst_22442__$1);

return statearr_22467;
})();
if(cljs.core.truth_(inst_22443)){
var statearr_22468_22494 = state_22463__$1;
(statearr_22468_22494[(1)] = (5));

} else {
var statearr_22469_22495 = state_22463__$1;
(statearr_22469_22495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22464 === (13))){
var state_22463__$1 = state_22463;
var statearr_22470_22496 = state_22463__$1;
(statearr_22470_22496[(2)] = null);

(statearr_22470_22496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22464 === (6))){
var inst_22442 = (state_22463[(7)]);
var state_22463__$1 = state_22463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22463__$1,(11),to,inst_22442);
} else {
if((state_val_22464 === (3))){
var inst_22461 = (state_22463[(2)]);
var state_22463__$1 = state_22463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22463__$1,inst_22461);
} else {
if((state_val_22464 === (12))){
var state_22463__$1 = state_22463;
var statearr_22471_22497 = state_22463__$1;
(statearr_22471_22497[(2)] = null);

(statearr_22471_22497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22464 === (2))){
var state_22463__$1 = state_22463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22463__$1,(4),from);
} else {
if((state_val_22464 === (11))){
var inst_22452 = (state_22463[(2)]);
var state_22463__$1 = state_22463;
if(cljs.core.truth_(inst_22452)){
var statearr_22472_22498 = state_22463__$1;
(statearr_22472_22498[(1)] = (12));

} else {
var statearr_22473_22499 = state_22463__$1;
(statearr_22473_22499[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22464 === (9))){
var state_22463__$1 = state_22463;
var statearr_22474_22500 = state_22463__$1;
(statearr_22474_22500[(2)] = null);

(statearr_22474_22500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22464 === (5))){
var state_22463__$1 = state_22463;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22475_22501 = state_22463__$1;
(statearr_22475_22501[(1)] = (8));

} else {
var statearr_22476_22502 = state_22463__$1;
(statearr_22476_22502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22464 === (14))){
var inst_22457 = (state_22463[(2)]);
var state_22463__$1 = state_22463;
var statearr_22477_22503 = state_22463__$1;
(statearr_22477_22503[(2)] = inst_22457);

(statearr_22477_22503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22464 === (10))){
var inst_22449 = (state_22463[(2)]);
var state_22463__$1 = state_22463;
var statearr_22478_22504 = state_22463__$1;
(statearr_22478_22504[(2)] = inst_22449);

(statearr_22478_22504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22464 === (8))){
var inst_22446 = cljs.core.async.close_BANG_.call(null,to);
var state_22463__$1 = state_22463;
var statearr_22479_22505 = state_22463__$1;
(statearr_22479_22505[(2)] = inst_22446);

(statearr_22479_22505[(1)] = (10));


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
});})(c__22324__auto___22491))
;
return ((function (switch__22212__auto__,c__22324__auto___22491){
return (function() {
var cljs$core$async$state_machine__22213__auto__ = null;
var cljs$core$async$state_machine__22213__auto____0 = (function (){
var statearr_22483 = [null,null,null,null,null,null,null,null];
(statearr_22483[(0)] = cljs$core$async$state_machine__22213__auto__);

(statearr_22483[(1)] = (1));

return statearr_22483;
});
var cljs$core$async$state_machine__22213__auto____1 = (function (state_22463){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_22463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e22484){if((e22484 instanceof Object)){
var ex__22216__auto__ = e22484;
var statearr_22485_22506 = state_22463;
(statearr_22485_22506[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22507 = state_22463;
state_22463 = G__22507;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$state_machine__22213__auto__ = function(state_22463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22213__auto____1.call(this,state_22463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22213__auto____0;
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22213__auto____1;
return cljs$core$async$state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___22491))
})();
var state__22326__auto__ = (function (){var statearr_22486 = f__22325__auto__.call(null);
(statearr_22486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___22491);

return statearr_22486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___22491))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22695){
var vec__22696 = p__22695;
var v = cljs.core.nth.call(null,vec__22696,(0),null);
var p = cljs.core.nth.call(null,vec__22696,(1),null);
var job = vec__22696;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22324__auto___22882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___22882,res,vec__22696,v,p,job,jobs,results){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___22882,res,vec__22696,v,p,job,jobs,results){
return (function (state_22703){
var state_val_22704 = (state_22703[(1)]);
if((state_val_22704 === (1))){
var state_22703__$1 = state_22703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22703__$1,(2),res,v);
} else {
if((state_val_22704 === (2))){
var inst_22700 = (state_22703[(2)]);
var inst_22701 = cljs.core.async.close_BANG_.call(null,res);
var state_22703__$1 = (function (){var statearr_22705 = state_22703;
(statearr_22705[(7)] = inst_22700);

return statearr_22705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22703__$1,inst_22701);
} else {
return null;
}
}
});})(c__22324__auto___22882,res,vec__22696,v,p,job,jobs,results))
;
return ((function (switch__22212__auto__,c__22324__auto___22882,res,vec__22696,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0 = (function (){
var statearr_22709 = [null,null,null,null,null,null,null,null];
(statearr_22709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__);

(statearr_22709[(1)] = (1));

return statearr_22709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1 = (function (state_22703){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_22703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e22710){if((e22710 instanceof Object)){
var ex__22216__auto__ = e22710;
var statearr_22711_22883 = state_22703;
(statearr_22711_22883[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22884 = state_22703;
state_22703 = G__22884;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__ = function(state_22703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1.call(this,state_22703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___22882,res,vec__22696,v,p,job,jobs,results))
})();
var state__22326__auto__ = (function (){var statearr_22712 = f__22325__auto__.call(null);
(statearr_22712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___22882);

return statearr_22712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___22882,res,vec__22696,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22713){
var vec__22714 = p__22713;
var v = cljs.core.nth.call(null,vec__22714,(0),null);
var p = cljs.core.nth.call(null,vec__22714,(1),null);
var job = vec__22714;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21067__auto___22885 = n;
var __22886 = (0);
while(true){
if((__22886 < n__21067__auto___22885)){
var G__22717_22887 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22717_22887) {
case "compute":
var c__22324__auto___22889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22886,c__22324__auto___22889,G__22717_22887,n__21067__auto___22885,jobs,results,process,async){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (__22886,c__22324__auto___22889,G__22717_22887,n__21067__auto___22885,jobs,results,process,async){
return (function (state_22730){
var state_val_22731 = (state_22730[(1)]);
if((state_val_22731 === (1))){
var state_22730__$1 = state_22730;
var statearr_22732_22890 = state_22730__$1;
(statearr_22732_22890[(2)] = null);

(statearr_22732_22890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (2))){
var state_22730__$1 = state_22730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22730__$1,(4),jobs);
} else {
if((state_val_22731 === (3))){
var inst_22728 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22730__$1,inst_22728);
} else {
if((state_val_22731 === (4))){
var inst_22720 = (state_22730[(2)]);
var inst_22721 = process.call(null,inst_22720);
var state_22730__$1 = state_22730;
if(cljs.core.truth_(inst_22721)){
var statearr_22733_22891 = state_22730__$1;
(statearr_22733_22891[(1)] = (5));

} else {
var statearr_22734_22892 = state_22730__$1;
(statearr_22734_22892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (5))){
var state_22730__$1 = state_22730;
var statearr_22735_22893 = state_22730__$1;
(statearr_22735_22893[(2)] = null);

(statearr_22735_22893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (6))){
var state_22730__$1 = state_22730;
var statearr_22736_22894 = state_22730__$1;
(statearr_22736_22894[(2)] = null);

(statearr_22736_22894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (7))){
var inst_22726 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22737_22895 = state_22730__$1;
(statearr_22737_22895[(2)] = inst_22726);

(statearr_22737_22895[(1)] = (3));


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
});})(__22886,c__22324__auto___22889,G__22717_22887,n__21067__auto___22885,jobs,results,process,async))
;
return ((function (__22886,switch__22212__auto__,c__22324__auto___22889,G__22717_22887,n__21067__auto___22885,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0 = (function (){
var statearr_22741 = [null,null,null,null,null,null,null];
(statearr_22741[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__);

(statearr_22741[(1)] = (1));

return statearr_22741;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1 = (function (state_22730){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_22730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e22742){if((e22742 instanceof Object)){
var ex__22216__auto__ = e22742;
var statearr_22743_22896 = state_22730;
(statearr_22743_22896[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22897 = state_22730;
state_22730 = G__22897;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__ = function(state_22730){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1.call(this,state_22730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__;
})()
;})(__22886,switch__22212__auto__,c__22324__auto___22889,G__22717_22887,n__21067__auto___22885,jobs,results,process,async))
})();
var state__22326__auto__ = (function (){var statearr_22744 = f__22325__auto__.call(null);
(statearr_22744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___22889);

return statearr_22744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(__22886,c__22324__auto___22889,G__22717_22887,n__21067__auto___22885,jobs,results,process,async))
);


break;
case "async":
var c__22324__auto___22898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22886,c__22324__auto___22898,G__22717_22887,n__21067__auto___22885,jobs,results,process,async){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (__22886,c__22324__auto___22898,G__22717_22887,n__21067__auto___22885,jobs,results,process,async){
return (function (state_22757){
var state_val_22758 = (state_22757[(1)]);
if((state_val_22758 === (1))){
var state_22757__$1 = state_22757;
var statearr_22759_22899 = state_22757__$1;
(statearr_22759_22899[(2)] = null);

(statearr_22759_22899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (2))){
var state_22757__$1 = state_22757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22757__$1,(4),jobs);
} else {
if((state_val_22758 === (3))){
var inst_22755 = (state_22757[(2)]);
var state_22757__$1 = state_22757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22757__$1,inst_22755);
} else {
if((state_val_22758 === (4))){
var inst_22747 = (state_22757[(2)]);
var inst_22748 = async.call(null,inst_22747);
var state_22757__$1 = state_22757;
if(cljs.core.truth_(inst_22748)){
var statearr_22760_22900 = state_22757__$1;
(statearr_22760_22900[(1)] = (5));

} else {
var statearr_22761_22901 = state_22757__$1;
(statearr_22761_22901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (5))){
var state_22757__$1 = state_22757;
var statearr_22762_22902 = state_22757__$1;
(statearr_22762_22902[(2)] = null);

(statearr_22762_22902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (6))){
var state_22757__$1 = state_22757;
var statearr_22763_22903 = state_22757__$1;
(statearr_22763_22903[(2)] = null);

(statearr_22763_22903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (7))){
var inst_22753 = (state_22757[(2)]);
var state_22757__$1 = state_22757;
var statearr_22764_22904 = state_22757__$1;
(statearr_22764_22904[(2)] = inst_22753);

(statearr_22764_22904[(1)] = (3));


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
});})(__22886,c__22324__auto___22898,G__22717_22887,n__21067__auto___22885,jobs,results,process,async))
;
return ((function (__22886,switch__22212__auto__,c__22324__auto___22898,G__22717_22887,n__21067__auto___22885,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0 = (function (){
var statearr_22768 = [null,null,null,null,null,null,null];
(statearr_22768[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__);

(statearr_22768[(1)] = (1));

return statearr_22768;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1 = (function (state_22757){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_22757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e22769){if((e22769 instanceof Object)){
var ex__22216__auto__ = e22769;
var statearr_22770_22905 = state_22757;
(statearr_22770_22905[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22906 = state_22757;
state_22757 = G__22906;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__ = function(state_22757){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1.call(this,state_22757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__;
})()
;})(__22886,switch__22212__auto__,c__22324__auto___22898,G__22717_22887,n__21067__auto___22885,jobs,results,process,async))
})();
var state__22326__auto__ = (function (){var statearr_22771 = f__22325__auto__.call(null);
(statearr_22771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___22898);

return statearr_22771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(__22886,c__22324__auto___22898,G__22717_22887,n__21067__auto___22885,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22907 = (__22886 + (1));
__22886 = G__22907;
continue;
} else {
}
break;
}

var c__22324__auto___22908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___22908,jobs,results,process,async){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___22908,jobs,results,process,async){
return (function (state_22793){
var state_val_22794 = (state_22793[(1)]);
if((state_val_22794 === (1))){
var state_22793__$1 = state_22793;
var statearr_22795_22909 = state_22793__$1;
(statearr_22795_22909[(2)] = null);

(statearr_22795_22909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22794 === (2))){
var state_22793__$1 = state_22793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22793__$1,(4),from);
} else {
if((state_val_22794 === (3))){
var inst_22791 = (state_22793[(2)]);
var state_22793__$1 = state_22793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22793__$1,inst_22791);
} else {
if((state_val_22794 === (4))){
var inst_22774 = (state_22793[(7)]);
var inst_22774__$1 = (state_22793[(2)]);
var inst_22775 = (inst_22774__$1 == null);
var state_22793__$1 = (function (){var statearr_22796 = state_22793;
(statearr_22796[(7)] = inst_22774__$1);

return statearr_22796;
})();
if(cljs.core.truth_(inst_22775)){
var statearr_22797_22910 = state_22793__$1;
(statearr_22797_22910[(1)] = (5));

} else {
var statearr_22798_22911 = state_22793__$1;
(statearr_22798_22911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22794 === (5))){
var inst_22777 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22793__$1 = state_22793;
var statearr_22799_22912 = state_22793__$1;
(statearr_22799_22912[(2)] = inst_22777);

(statearr_22799_22912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22794 === (6))){
var inst_22779 = (state_22793[(8)]);
var inst_22774 = (state_22793[(7)]);
var inst_22779__$1 = cljs.core.async.chan.call(null,(1));
var inst_22780 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22781 = [inst_22774,inst_22779__$1];
var inst_22782 = (new cljs.core.PersistentVector(null,2,(5),inst_22780,inst_22781,null));
var state_22793__$1 = (function (){var statearr_22800 = state_22793;
(statearr_22800[(8)] = inst_22779__$1);

return statearr_22800;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22793__$1,(8),jobs,inst_22782);
} else {
if((state_val_22794 === (7))){
var inst_22789 = (state_22793[(2)]);
var state_22793__$1 = state_22793;
var statearr_22801_22913 = state_22793__$1;
(statearr_22801_22913[(2)] = inst_22789);

(statearr_22801_22913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22794 === (8))){
var inst_22779 = (state_22793[(8)]);
var inst_22784 = (state_22793[(2)]);
var state_22793__$1 = (function (){var statearr_22802 = state_22793;
(statearr_22802[(9)] = inst_22784);

return statearr_22802;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22793__$1,(9),results,inst_22779);
} else {
if((state_val_22794 === (9))){
var inst_22786 = (state_22793[(2)]);
var state_22793__$1 = (function (){var statearr_22803 = state_22793;
(statearr_22803[(10)] = inst_22786);

return statearr_22803;
})();
var statearr_22804_22914 = state_22793__$1;
(statearr_22804_22914[(2)] = null);

(statearr_22804_22914[(1)] = (2));


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
});})(c__22324__auto___22908,jobs,results,process,async))
;
return ((function (switch__22212__auto__,c__22324__auto___22908,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0 = (function (){
var statearr_22808 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__);

(statearr_22808[(1)] = (1));

return statearr_22808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1 = (function (state_22793){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_22793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e22809){if((e22809 instanceof Object)){
var ex__22216__auto__ = e22809;
var statearr_22810_22915 = state_22793;
(statearr_22810_22915[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22916 = state_22793;
state_22793 = G__22916;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__ = function(state_22793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1.call(this,state_22793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___22908,jobs,results,process,async))
})();
var state__22326__auto__ = (function (){var statearr_22811 = f__22325__auto__.call(null);
(statearr_22811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___22908);

return statearr_22811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___22908,jobs,results,process,async))
);


var c__22324__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto__,jobs,results,process,async){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto__,jobs,results,process,async){
return (function (state_22849){
var state_val_22850 = (state_22849[(1)]);
if((state_val_22850 === (7))){
var inst_22845 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22851_22917 = state_22849__$1;
(statearr_22851_22917[(2)] = inst_22845);

(statearr_22851_22917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (20))){
var state_22849__$1 = state_22849;
var statearr_22852_22918 = state_22849__$1;
(statearr_22852_22918[(2)] = null);

(statearr_22852_22918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (1))){
var state_22849__$1 = state_22849;
var statearr_22853_22919 = state_22849__$1;
(statearr_22853_22919[(2)] = null);

(statearr_22853_22919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (4))){
var inst_22814 = (state_22849[(7)]);
var inst_22814__$1 = (state_22849[(2)]);
var inst_22815 = (inst_22814__$1 == null);
var state_22849__$1 = (function (){var statearr_22854 = state_22849;
(statearr_22854[(7)] = inst_22814__$1);

return statearr_22854;
})();
if(cljs.core.truth_(inst_22815)){
var statearr_22855_22920 = state_22849__$1;
(statearr_22855_22920[(1)] = (5));

} else {
var statearr_22856_22921 = state_22849__$1;
(statearr_22856_22921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (15))){
var inst_22827 = (state_22849[(8)]);
var state_22849__$1 = state_22849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22849__$1,(18),to,inst_22827);
} else {
if((state_val_22850 === (21))){
var inst_22840 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22857_22922 = state_22849__$1;
(statearr_22857_22922[(2)] = inst_22840);

(statearr_22857_22922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (13))){
var inst_22842 = (state_22849[(2)]);
var state_22849__$1 = (function (){var statearr_22858 = state_22849;
(statearr_22858[(9)] = inst_22842);

return statearr_22858;
})();
var statearr_22859_22923 = state_22849__$1;
(statearr_22859_22923[(2)] = null);

(statearr_22859_22923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (6))){
var inst_22814 = (state_22849[(7)]);
var state_22849__$1 = state_22849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22849__$1,(11),inst_22814);
} else {
if((state_val_22850 === (17))){
var inst_22835 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
if(cljs.core.truth_(inst_22835)){
var statearr_22860_22924 = state_22849__$1;
(statearr_22860_22924[(1)] = (19));

} else {
var statearr_22861_22925 = state_22849__$1;
(statearr_22861_22925[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (3))){
var inst_22847 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22849__$1,inst_22847);
} else {
if((state_val_22850 === (12))){
var inst_22824 = (state_22849[(10)]);
var state_22849__$1 = state_22849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22849__$1,(14),inst_22824);
} else {
if((state_val_22850 === (2))){
var state_22849__$1 = state_22849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22849__$1,(4),results);
} else {
if((state_val_22850 === (19))){
var state_22849__$1 = state_22849;
var statearr_22862_22926 = state_22849__$1;
(statearr_22862_22926[(2)] = null);

(statearr_22862_22926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (11))){
var inst_22824 = (state_22849[(2)]);
var state_22849__$1 = (function (){var statearr_22863 = state_22849;
(statearr_22863[(10)] = inst_22824);

return statearr_22863;
})();
var statearr_22864_22927 = state_22849__$1;
(statearr_22864_22927[(2)] = null);

(statearr_22864_22927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (9))){
var state_22849__$1 = state_22849;
var statearr_22865_22928 = state_22849__$1;
(statearr_22865_22928[(2)] = null);

(statearr_22865_22928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (5))){
var state_22849__$1 = state_22849;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22866_22929 = state_22849__$1;
(statearr_22866_22929[(1)] = (8));

} else {
var statearr_22867_22930 = state_22849__$1;
(statearr_22867_22930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (14))){
var inst_22827 = (state_22849[(8)]);
var inst_22829 = (state_22849[(11)]);
var inst_22827__$1 = (state_22849[(2)]);
var inst_22828 = (inst_22827__$1 == null);
var inst_22829__$1 = cljs.core.not.call(null,inst_22828);
var state_22849__$1 = (function (){var statearr_22868 = state_22849;
(statearr_22868[(8)] = inst_22827__$1);

(statearr_22868[(11)] = inst_22829__$1);

return statearr_22868;
})();
if(inst_22829__$1){
var statearr_22869_22931 = state_22849__$1;
(statearr_22869_22931[(1)] = (15));

} else {
var statearr_22870_22932 = state_22849__$1;
(statearr_22870_22932[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (16))){
var inst_22829 = (state_22849[(11)]);
var state_22849__$1 = state_22849;
var statearr_22871_22933 = state_22849__$1;
(statearr_22871_22933[(2)] = inst_22829);

(statearr_22871_22933[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (10))){
var inst_22821 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22872_22934 = state_22849__$1;
(statearr_22872_22934[(2)] = inst_22821);

(statearr_22872_22934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (18))){
var inst_22832 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22873_22935 = state_22849__$1;
(statearr_22873_22935[(2)] = inst_22832);

(statearr_22873_22935[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (8))){
var inst_22818 = cljs.core.async.close_BANG_.call(null,to);
var state_22849__$1 = state_22849;
var statearr_22874_22936 = state_22849__$1;
(statearr_22874_22936[(2)] = inst_22818);

(statearr_22874_22936[(1)] = (10));


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
});})(c__22324__auto__,jobs,results,process,async))
;
return ((function (switch__22212__auto__,c__22324__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0 = (function (){
var statearr_22878 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__);

(statearr_22878[(1)] = (1));

return statearr_22878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1 = (function (state_22849){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_22849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e22879){if((e22879 instanceof Object)){
var ex__22216__auto__ = e22879;
var statearr_22880_22937 = state_22849;
(statearr_22880_22937[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22938 = state_22849;
state_22849 = G__22938;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__ = function(state_22849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1.call(this,state_22849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto__,jobs,results,process,async))
})();
var state__22326__auto__ = (function (){var statearr_22881 = f__22325__auto__.call(null);
(statearr_22881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto__);

return statearr_22881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto__,jobs,results,process,async))
);

return c__22324__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22939 = [];
var len__21227__auto___22942 = arguments.length;
var i__21228__auto___22943 = (0);
while(true){
if((i__21228__auto___22943 < len__21227__auto___22942)){
args22939.push((arguments[i__21228__auto___22943]));

var G__22944 = (i__21228__auto___22943 + (1));
i__21228__auto___22943 = G__22944;
continue;
} else {
}
break;
}

var G__22941 = args22939.length;
switch (G__22941) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22939.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22946 = [];
var len__21227__auto___22949 = arguments.length;
var i__21228__auto___22950 = (0);
while(true){
if((i__21228__auto___22950 < len__21227__auto___22949)){
args22946.push((arguments[i__21228__auto___22950]));

var G__22951 = (i__21228__auto___22950 + (1));
i__21228__auto___22950 = G__22951;
continue;
} else {
}
break;
}

var G__22948 = args22946.length;
switch (G__22948) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22946.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22953 = [];
var len__21227__auto___23006 = arguments.length;
var i__21228__auto___23007 = (0);
while(true){
if((i__21228__auto___23007 < len__21227__auto___23006)){
args22953.push((arguments[i__21228__auto___23007]));

var G__23008 = (i__21228__auto___23007 + (1));
i__21228__auto___23007 = G__23008;
continue;
} else {
}
break;
}

var G__22955 = args22953.length;
switch (G__22955) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22953.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22324__auto___23010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___23010,tc,fc){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___23010,tc,fc){
return (function (state_22981){
var state_val_22982 = (state_22981[(1)]);
if((state_val_22982 === (7))){
var inst_22977 = (state_22981[(2)]);
var state_22981__$1 = state_22981;
var statearr_22983_23011 = state_22981__$1;
(statearr_22983_23011[(2)] = inst_22977);

(statearr_22983_23011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (1))){
var state_22981__$1 = state_22981;
var statearr_22984_23012 = state_22981__$1;
(statearr_22984_23012[(2)] = null);

(statearr_22984_23012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (4))){
var inst_22958 = (state_22981[(7)]);
var inst_22958__$1 = (state_22981[(2)]);
var inst_22959 = (inst_22958__$1 == null);
var state_22981__$1 = (function (){var statearr_22985 = state_22981;
(statearr_22985[(7)] = inst_22958__$1);

return statearr_22985;
})();
if(cljs.core.truth_(inst_22959)){
var statearr_22986_23013 = state_22981__$1;
(statearr_22986_23013[(1)] = (5));

} else {
var statearr_22987_23014 = state_22981__$1;
(statearr_22987_23014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (13))){
var state_22981__$1 = state_22981;
var statearr_22988_23015 = state_22981__$1;
(statearr_22988_23015[(2)] = null);

(statearr_22988_23015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (6))){
var inst_22958 = (state_22981[(7)]);
var inst_22964 = p.call(null,inst_22958);
var state_22981__$1 = state_22981;
if(cljs.core.truth_(inst_22964)){
var statearr_22989_23016 = state_22981__$1;
(statearr_22989_23016[(1)] = (9));

} else {
var statearr_22990_23017 = state_22981__$1;
(statearr_22990_23017[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (3))){
var inst_22979 = (state_22981[(2)]);
var state_22981__$1 = state_22981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22981__$1,inst_22979);
} else {
if((state_val_22982 === (12))){
var state_22981__$1 = state_22981;
var statearr_22991_23018 = state_22981__$1;
(statearr_22991_23018[(2)] = null);

(statearr_22991_23018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (2))){
var state_22981__$1 = state_22981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22981__$1,(4),ch);
} else {
if((state_val_22982 === (11))){
var inst_22958 = (state_22981[(7)]);
var inst_22968 = (state_22981[(2)]);
var state_22981__$1 = state_22981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22981__$1,(8),inst_22968,inst_22958);
} else {
if((state_val_22982 === (9))){
var state_22981__$1 = state_22981;
var statearr_22992_23019 = state_22981__$1;
(statearr_22992_23019[(2)] = tc);

(statearr_22992_23019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (5))){
var inst_22961 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22962 = cljs.core.async.close_BANG_.call(null,fc);
var state_22981__$1 = (function (){var statearr_22993 = state_22981;
(statearr_22993[(8)] = inst_22961);

return statearr_22993;
})();
var statearr_22994_23020 = state_22981__$1;
(statearr_22994_23020[(2)] = inst_22962);

(statearr_22994_23020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (14))){
var inst_22975 = (state_22981[(2)]);
var state_22981__$1 = state_22981;
var statearr_22995_23021 = state_22981__$1;
(statearr_22995_23021[(2)] = inst_22975);

(statearr_22995_23021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (10))){
var state_22981__$1 = state_22981;
var statearr_22996_23022 = state_22981__$1;
(statearr_22996_23022[(2)] = fc);

(statearr_22996_23022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (8))){
var inst_22970 = (state_22981[(2)]);
var state_22981__$1 = state_22981;
if(cljs.core.truth_(inst_22970)){
var statearr_22997_23023 = state_22981__$1;
(statearr_22997_23023[(1)] = (12));

} else {
var statearr_22998_23024 = state_22981__$1;
(statearr_22998_23024[(1)] = (13));

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
});})(c__22324__auto___23010,tc,fc))
;
return ((function (switch__22212__auto__,c__22324__auto___23010,tc,fc){
return (function() {
var cljs$core$async$state_machine__22213__auto__ = null;
var cljs$core$async$state_machine__22213__auto____0 = (function (){
var statearr_23002 = [null,null,null,null,null,null,null,null,null];
(statearr_23002[(0)] = cljs$core$async$state_machine__22213__auto__);

(statearr_23002[(1)] = (1));

return statearr_23002;
});
var cljs$core$async$state_machine__22213__auto____1 = (function (state_22981){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_22981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e23003){if((e23003 instanceof Object)){
var ex__22216__auto__ = e23003;
var statearr_23004_23025 = state_22981;
(statearr_23004_23025[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23026 = state_22981;
state_22981 = G__23026;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$state_machine__22213__auto__ = function(state_22981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22213__auto____1.call(this,state_22981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22213__auto____0;
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22213__auto____1;
return cljs$core$async$state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___23010,tc,fc))
})();
var state__22326__auto__ = (function (){var statearr_23005 = f__22325__auto__.call(null);
(statearr_23005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___23010);

return statearr_23005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___23010,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22324__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto__){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto__){
return (function (state_23090){
var state_val_23091 = (state_23090[(1)]);
if((state_val_23091 === (7))){
var inst_23086 = (state_23090[(2)]);
var state_23090__$1 = state_23090;
var statearr_23092_23113 = state_23090__$1;
(statearr_23092_23113[(2)] = inst_23086);

(statearr_23092_23113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (1))){
var inst_23070 = init;
var state_23090__$1 = (function (){var statearr_23093 = state_23090;
(statearr_23093[(7)] = inst_23070);

return statearr_23093;
})();
var statearr_23094_23114 = state_23090__$1;
(statearr_23094_23114[(2)] = null);

(statearr_23094_23114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (4))){
var inst_23073 = (state_23090[(8)]);
var inst_23073__$1 = (state_23090[(2)]);
var inst_23074 = (inst_23073__$1 == null);
var state_23090__$1 = (function (){var statearr_23095 = state_23090;
(statearr_23095[(8)] = inst_23073__$1);

return statearr_23095;
})();
if(cljs.core.truth_(inst_23074)){
var statearr_23096_23115 = state_23090__$1;
(statearr_23096_23115[(1)] = (5));

} else {
var statearr_23097_23116 = state_23090__$1;
(statearr_23097_23116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (6))){
var inst_23070 = (state_23090[(7)]);
var inst_23077 = (state_23090[(9)]);
var inst_23073 = (state_23090[(8)]);
var inst_23077__$1 = f.call(null,inst_23070,inst_23073);
var inst_23078 = cljs.core.reduced_QMARK_.call(null,inst_23077__$1);
var state_23090__$1 = (function (){var statearr_23098 = state_23090;
(statearr_23098[(9)] = inst_23077__$1);

return statearr_23098;
})();
if(inst_23078){
var statearr_23099_23117 = state_23090__$1;
(statearr_23099_23117[(1)] = (8));

} else {
var statearr_23100_23118 = state_23090__$1;
(statearr_23100_23118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (3))){
var inst_23088 = (state_23090[(2)]);
var state_23090__$1 = state_23090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23090__$1,inst_23088);
} else {
if((state_val_23091 === (2))){
var state_23090__$1 = state_23090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23090__$1,(4),ch);
} else {
if((state_val_23091 === (9))){
var inst_23077 = (state_23090[(9)]);
var inst_23070 = inst_23077;
var state_23090__$1 = (function (){var statearr_23101 = state_23090;
(statearr_23101[(7)] = inst_23070);

return statearr_23101;
})();
var statearr_23102_23119 = state_23090__$1;
(statearr_23102_23119[(2)] = null);

(statearr_23102_23119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (5))){
var inst_23070 = (state_23090[(7)]);
var state_23090__$1 = state_23090;
var statearr_23103_23120 = state_23090__$1;
(statearr_23103_23120[(2)] = inst_23070);

(statearr_23103_23120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (10))){
var inst_23084 = (state_23090[(2)]);
var state_23090__$1 = state_23090;
var statearr_23104_23121 = state_23090__$1;
(statearr_23104_23121[(2)] = inst_23084);

(statearr_23104_23121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (8))){
var inst_23077 = (state_23090[(9)]);
var inst_23080 = cljs.core.deref.call(null,inst_23077);
var state_23090__$1 = state_23090;
var statearr_23105_23122 = state_23090__$1;
(statearr_23105_23122[(2)] = inst_23080);

(statearr_23105_23122[(1)] = (10));


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
});})(c__22324__auto__))
;
return ((function (switch__22212__auto__,c__22324__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22213__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22213__auto____0 = (function (){
var statearr_23109 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23109[(0)] = cljs$core$async$reduce_$_state_machine__22213__auto__);

(statearr_23109[(1)] = (1));

return statearr_23109;
});
var cljs$core$async$reduce_$_state_machine__22213__auto____1 = (function (state_23090){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_23090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e23110){if((e23110 instanceof Object)){
var ex__22216__auto__ = e23110;
var statearr_23111_23123 = state_23090;
(statearr_23111_23123[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23124 = state_23090;
state_23090 = G__23124;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22213__auto__ = function(state_23090){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22213__auto____1.call(this,state_23090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22213__auto____0;
cljs$core$async$reduce_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22213__auto____1;
return cljs$core$async$reduce_$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto__))
})();
var state__22326__auto__ = (function (){var statearr_23112 = f__22325__auto__.call(null);
(statearr_23112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto__);

return statearr_23112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto__))
);

return c__22324__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23125 = [];
var len__21227__auto___23177 = arguments.length;
var i__21228__auto___23178 = (0);
while(true){
if((i__21228__auto___23178 < len__21227__auto___23177)){
args23125.push((arguments[i__21228__auto___23178]));

var G__23179 = (i__21228__auto___23178 + (1));
i__21228__auto___23178 = G__23179;
continue;
} else {
}
break;
}

var G__23127 = args23125.length;
switch (G__23127) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23125.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22324__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto__){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto__){
return (function (state_23152){
var state_val_23153 = (state_23152[(1)]);
if((state_val_23153 === (7))){
var inst_23134 = (state_23152[(2)]);
var state_23152__$1 = state_23152;
var statearr_23154_23181 = state_23152__$1;
(statearr_23154_23181[(2)] = inst_23134);

(statearr_23154_23181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (1))){
var inst_23128 = cljs.core.seq.call(null,coll);
var inst_23129 = inst_23128;
var state_23152__$1 = (function (){var statearr_23155 = state_23152;
(statearr_23155[(7)] = inst_23129);

return statearr_23155;
})();
var statearr_23156_23182 = state_23152__$1;
(statearr_23156_23182[(2)] = null);

(statearr_23156_23182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (4))){
var inst_23129 = (state_23152[(7)]);
var inst_23132 = cljs.core.first.call(null,inst_23129);
var state_23152__$1 = state_23152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23152__$1,(7),ch,inst_23132);
} else {
if((state_val_23153 === (13))){
var inst_23146 = (state_23152[(2)]);
var state_23152__$1 = state_23152;
var statearr_23157_23183 = state_23152__$1;
(statearr_23157_23183[(2)] = inst_23146);

(statearr_23157_23183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (6))){
var inst_23137 = (state_23152[(2)]);
var state_23152__$1 = state_23152;
if(cljs.core.truth_(inst_23137)){
var statearr_23158_23184 = state_23152__$1;
(statearr_23158_23184[(1)] = (8));

} else {
var statearr_23159_23185 = state_23152__$1;
(statearr_23159_23185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (3))){
var inst_23150 = (state_23152[(2)]);
var state_23152__$1 = state_23152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23152__$1,inst_23150);
} else {
if((state_val_23153 === (12))){
var state_23152__$1 = state_23152;
var statearr_23160_23186 = state_23152__$1;
(statearr_23160_23186[(2)] = null);

(statearr_23160_23186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (2))){
var inst_23129 = (state_23152[(7)]);
var state_23152__$1 = state_23152;
if(cljs.core.truth_(inst_23129)){
var statearr_23161_23187 = state_23152__$1;
(statearr_23161_23187[(1)] = (4));

} else {
var statearr_23162_23188 = state_23152__$1;
(statearr_23162_23188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (11))){
var inst_23143 = cljs.core.async.close_BANG_.call(null,ch);
var state_23152__$1 = state_23152;
var statearr_23163_23189 = state_23152__$1;
(statearr_23163_23189[(2)] = inst_23143);

(statearr_23163_23189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (9))){
var state_23152__$1 = state_23152;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23164_23190 = state_23152__$1;
(statearr_23164_23190[(1)] = (11));

} else {
var statearr_23165_23191 = state_23152__$1;
(statearr_23165_23191[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (5))){
var inst_23129 = (state_23152[(7)]);
var state_23152__$1 = state_23152;
var statearr_23166_23192 = state_23152__$1;
(statearr_23166_23192[(2)] = inst_23129);

(statearr_23166_23192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (10))){
var inst_23148 = (state_23152[(2)]);
var state_23152__$1 = state_23152;
var statearr_23167_23193 = state_23152__$1;
(statearr_23167_23193[(2)] = inst_23148);

(statearr_23167_23193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (8))){
var inst_23129 = (state_23152[(7)]);
var inst_23139 = cljs.core.next.call(null,inst_23129);
var inst_23129__$1 = inst_23139;
var state_23152__$1 = (function (){var statearr_23168 = state_23152;
(statearr_23168[(7)] = inst_23129__$1);

return statearr_23168;
})();
var statearr_23169_23194 = state_23152__$1;
(statearr_23169_23194[(2)] = null);

(statearr_23169_23194[(1)] = (2));


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
});})(c__22324__auto__))
;
return ((function (switch__22212__auto__,c__22324__auto__){
return (function() {
var cljs$core$async$state_machine__22213__auto__ = null;
var cljs$core$async$state_machine__22213__auto____0 = (function (){
var statearr_23173 = [null,null,null,null,null,null,null,null];
(statearr_23173[(0)] = cljs$core$async$state_machine__22213__auto__);

(statearr_23173[(1)] = (1));

return statearr_23173;
});
var cljs$core$async$state_machine__22213__auto____1 = (function (state_23152){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_23152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e23174){if((e23174 instanceof Object)){
var ex__22216__auto__ = e23174;
var statearr_23175_23195 = state_23152;
(statearr_23175_23195[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23196 = state_23152;
state_23152 = G__23196;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$state_machine__22213__auto__ = function(state_23152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22213__auto____1.call(this,state_23152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22213__auto____0;
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22213__auto____1;
return cljs$core$async$state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto__))
})();
var state__22326__auto__ = (function (){var statearr_23176 = f__22325__auto__.call(null);
(statearr_23176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto__);

return statearr_23176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto__))
);

return c__22324__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20815__auto__ = (((_ == null))?null:_);
var m__20816__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20815__auto__)]);
if(!((m__20816__auto__ == null))){
return m__20816__auto__.call(null,_);
} else {
var m__20816__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20816__auto____$1 == null))){
return m__20816__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20815__auto__ = (((m == null))?null:m);
var m__20816__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20815__auto__)]);
if(!((m__20816__auto__ == null))){
return m__20816__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20816__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20816__auto____$1 == null))){
return m__20816__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20815__auto__ = (((m == null))?null:m);
var m__20816__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20815__auto__)]);
if(!((m__20816__auto__ == null))){
return m__20816__auto__.call(null,m,ch);
} else {
var m__20816__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20816__auto____$1 == null))){
return m__20816__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20815__auto__ = (((m == null))?null:m);
var m__20816__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20815__auto__)]);
if(!((m__20816__auto__ == null))){
return m__20816__auto__.call(null,m);
} else {
var m__20816__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20816__auto____$1 == null))){
return m__20816__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23422 = (function (mult,ch,cs,meta23423){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23423 = meta23423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23424,meta23423__$1){
var self__ = this;
var _23424__$1 = this;
return (new cljs.core.async.t_cljs$core$async23422(self__.mult,self__.ch,self__.cs,meta23423__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23424){
var self__ = this;
var _23424__$1 = this;
return self__.meta23423;
});})(cs))
;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23422.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23423","meta23423",-2036022245,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23422";

cljs.core.async.t_cljs$core$async23422.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20758__auto__,writer__20759__auto__,opt__20760__auto__){
return cljs.core._write.call(null,writer__20759__auto__,"cljs.core.async/t_cljs$core$async23422");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23422 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23422(mult__$1,ch__$1,cs__$1,meta23423){
return (new cljs.core.async.t_cljs$core$async23422(mult__$1,ch__$1,cs__$1,meta23423));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23422(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22324__auto___23647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___23647,cs,m,dchan,dctr,done){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___23647,cs,m,dchan,dctr,done){
return (function (state_23559){
var state_val_23560 = (state_23559[(1)]);
if((state_val_23560 === (7))){
var inst_23555 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
var statearr_23561_23648 = state_23559__$1;
(statearr_23561_23648[(2)] = inst_23555);

(statearr_23561_23648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (20))){
var inst_23458 = (state_23559[(7)]);
var inst_23470 = cljs.core.first.call(null,inst_23458);
var inst_23471 = cljs.core.nth.call(null,inst_23470,(0),null);
var inst_23472 = cljs.core.nth.call(null,inst_23470,(1),null);
var state_23559__$1 = (function (){var statearr_23562 = state_23559;
(statearr_23562[(8)] = inst_23471);

return statearr_23562;
})();
if(cljs.core.truth_(inst_23472)){
var statearr_23563_23649 = state_23559__$1;
(statearr_23563_23649[(1)] = (22));

} else {
var statearr_23564_23650 = state_23559__$1;
(statearr_23564_23650[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (27))){
var inst_23507 = (state_23559[(9)]);
var inst_23502 = (state_23559[(10)]);
var inst_23500 = (state_23559[(11)]);
var inst_23427 = (state_23559[(12)]);
var inst_23507__$1 = cljs.core._nth.call(null,inst_23500,inst_23502);
var inst_23508 = cljs.core.async.put_BANG_.call(null,inst_23507__$1,inst_23427,done);
var state_23559__$1 = (function (){var statearr_23565 = state_23559;
(statearr_23565[(9)] = inst_23507__$1);

return statearr_23565;
})();
if(cljs.core.truth_(inst_23508)){
var statearr_23566_23651 = state_23559__$1;
(statearr_23566_23651[(1)] = (30));

} else {
var statearr_23567_23652 = state_23559__$1;
(statearr_23567_23652[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (1))){
var state_23559__$1 = state_23559;
var statearr_23568_23653 = state_23559__$1;
(statearr_23568_23653[(2)] = null);

(statearr_23568_23653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (24))){
var inst_23458 = (state_23559[(7)]);
var inst_23477 = (state_23559[(2)]);
var inst_23478 = cljs.core.next.call(null,inst_23458);
var inst_23436 = inst_23478;
var inst_23437 = null;
var inst_23438 = (0);
var inst_23439 = (0);
var state_23559__$1 = (function (){var statearr_23569 = state_23559;
(statearr_23569[(13)] = inst_23437);

(statearr_23569[(14)] = inst_23438);

(statearr_23569[(15)] = inst_23477);

(statearr_23569[(16)] = inst_23439);

(statearr_23569[(17)] = inst_23436);

return statearr_23569;
})();
var statearr_23570_23654 = state_23559__$1;
(statearr_23570_23654[(2)] = null);

(statearr_23570_23654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (39))){
var state_23559__$1 = state_23559;
var statearr_23574_23655 = state_23559__$1;
(statearr_23574_23655[(2)] = null);

(statearr_23574_23655[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (4))){
var inst_23427 = (state_23559[(12)]);
var inst_23427__$1 = (state_23559[(2)]);
var inst_23428 = (inst_23427__$1 == null);
var state_23559__$1 = (function (){var statearr_23575 = state_23559;
(statearr_23575[(12)] = inst_23427__$1);

return statearr_23575;
})();
if(cljs.core.truth_(inst_23428)){
var statearr_23576_23656 = state_23559__$1;
(statearr_23576_23656[(1)] = (5));

} else {
var statearr_23577_23657 = state_23559__$1;
(statearr_23577_23657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (15))){
var inst_23437 = (state_23559[(13)]);
var inst_23438 = (state_23559[(14)]);
var inst_23439 = (state_23559[(16)]);
var inst_23436 = (state_23559[(17)]);
var inst_23454 = (state_23559[(2)]);
var inst_23455 = (inst_23439 + (1));
var tmp23571 = inst_23437;
var tmp23572 = inst_23438;
var tmp23573 = inst_23436;
var inst_23436__$1 = tmp23573;
var inst_23437__$1 = tmp23571;
var inst_23438__$1 = tmp23572;
var inst_23439__$1 = inst_23455;
var state_23559__$1 = (function (){var statearr_23578 = state_23559;
(statearr_23578[(13)] = inst_23437__$1);

(statearr_23578[(14)] = inst_23438__$1);

(statearr_23578[(16)] = inst_23439__$1);

(statearr_23578[(18)] = inst_23454);

(statearr_23578[(17)] = inst_23436__$1);

return statearr_23578;
})();
var statearr_23579_23658 = state_23559__$1;
(statearr_23579_23658[(2)] = null);

(statearr_23579_23658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (21))){
var inst_23481 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
var statearr_23583_23659 = state_23559__$1;
(statearr_23583_23659[(2)] = inst_23481);

(statearr_23583_23659[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (31))){
var inst_23507 = (state_23559[(9)]);
var inst_23511 = done.call(null,null);
var inst_23512 = cljs.core.async.untap_STAR_.call(null,m,inst_23507);
var state_23559__$1 = (function (){var statearr_23584 = state_23559;
(statearr_23584[(19)] = inst_23511);

return statearr_23584;
})();
var statearr_23585_23660 = state_23559__$1;
(statearr_23585_23660[(2)] = inst_23512);

(statearr_23585_23660[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (32))){
var inst_23501 = (state_23559[(20)]);
var inst_23499 = (state_23559[(21)]);
var inst_23502 = (state_23559[(10)]);
var inst_23500 = (state_23559[(11)]);
var inst_23514 = (state_23559[(2)]);
var inst_23515 = (inst_23502 + (1));
var tmp23580 = inst_23501;
var tmp23581 = inst_23499;
var tmp23582 = inst_23500;
var inst_23499__$1 = tmp23581;
var inst_23500__$1 = tmp23582;
var inst_23501__$1 = tmp23580;
var inst_23502__$1 = inst_23515;
var state_23559__$1 = (function (){var statearr_23586 = state_23559;
(statearr_23586[(22)] = inst_23514);

(statearr_23586[(20)] = inst_23501__$1);

(statearr_23586[(21)] = inst_23499__$1);

(statearr_23586[(10)] = inst_23502__$1);

(statearr_23586[(11)] = inst_23500__$1);

return statearr_23586;
})();
var statearr_23587_23661 = state_23559__$1;
(statearr_23587_23661[(2)] = null);

(statearr_23587_23661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (40))){
var inst_23527 = (state_23559[(23)]);
var inst_23531 = done.call(null,null);
var inst_23532 = cljs.core.async.untap_STAR_.call(null,m,inst_23527);
var state_23559__$1 = (function (){var statearr_23588 = state_23559;
(statearr_23588[(24)] = inst_23531);

return statearr_23588;
})();
var statearr_23589_23662 = state_23559__$1;
(statearr_23589_23662[(2)] = inst_23532);

(statearr_23589_23662[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (33))){
var inst_23518 = (state_23559[(25)]);
var inst_23520 = cljs.core.chunked_seq_QMARK_.call(null,inst_23518);
var state_23559__$1 = state_23559;
if(inst_23520){
var statearr_23590_23663 = state_23559__$1;
(statearr_23590_23663[(1)] = (36));

} else {
var statearr_23591_23664 = state_23559__$1;
(statearr_23591_23664[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (13))){
var inst_23448 = (state_23559[(26)]);
var inst_23451 = cljs.core.async.close_BANG_.call(null,inst_23448);
var state_23559__$1 = state_23559;
var statearr_23592_23665 = state_23559__$1;
(statearr_23592_23665[(2)] = inst_23451);

(statearr_23592_23665[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (22))){
var inst_23471 = (state_23559[(8)]);
var inst_23474 = cljs.core.async.close_BANG_.call(null,inst_23471);
var state_23559__$1 = state_23559;
var statearr_23593_23666 = state_23559__$1;
(statearr_23593_23666[(2)] = inst_23474);

(statearr_23593_23666[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (36))){
var inst_23518 = (state_23559[(25)]);
var inst_23522 = cljs.core.chunk_first.call(null,inst_23518);
var inst_23523 = cljs.core.chunk_rest.call(null,inst_23518);
var inst_23524 = cljs.core.count.call(null,inst_23522);
var inst_23499 = inst_23523;
var inst_23500 = inst_23522;
var inst_23501 = inst_23524;
var inst_23502 = (0);
var state_23559__$1 = (function (){var statearr_23594 = state_23559;
(statearr_23594[(20)] = inst_23501);

(statearr_23594[(21)] = inst_23499);

(statearr_23594[(10)] = inst_23502);

(statearr_23594[(11)] = inst_23500);

return statearr_23594;
})();
var statearr_23595_23667 = state_23559__$1;
(statearr_23595_23667[(2)] = null);

(statearr_23595_23667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (41))){
var inst_23518 = (state_23559[(25)]);
var inst_23534 = (state_23559[(2)]);
var inst_23535 = cljs.core.next.call(null,inst_23518);
var inst_23499 = inst_23535;
var inst_23500 = null;
var inst_23501 = (0);
var inst_23502 = (0);
var state_23559__$1 = (function (){var statearr_23596 = state_23559;
(statearr_23596[(20)] = inst_23501);

(statearr_23596[(21)] = inst_23499);

(statearr_23596[(10)] = inst_23502);

(statearr_23596[(11)] = inst_23500);

(statearr_23596[(27)] = inst_23534);

return statearr_23596;
})();
var statearr_23597_23668 = state_23559__$1;
(statearr_23597_23668[(2)] = null);

(statearr_23597_23668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (43))){
var state_23559__$1 = state_23559;
var statearr_23598_23669 = state_23559__$1;
(statearr_23598_23669[(2)] = null);

(statearr_23598_23669[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (29))){
var inst_23543 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
var statearr_23599_23670 = state_23559__$1;
(statearr_23599_23670[(2)] = inst_23543);

(statearr_23599_23670[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (44))){
var inst_23552 = (state_23559[(2)]);
var state_23559__$1 = (function (){var statearr_23600 = state_23559;
(statearr_23600[(28)] = inst_23552);

return statearr_23600;
})();
var statearr_23601_23671 = state_23559__$1;
(statearr_23601_23671[(2)] = null);

(statearr_23601_23671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (6))){
var inst_23491 = (state_23559[(29)]);
var inst_23490 = cljs.core.deref.call(null,cs);
var inst_23491__$1 = cljs.core.keys.call(null,inst_23490);
var inst_23492 = cljs.core.count.call(null,inst_23491__$1);
var inst_23493 = cljs.core.reset_BANG_.call(null,dctr,inst_23492);
var inst_23498 = cljs.core.seq.call(null,inst_23491__$1);
var inst_23499 = inst_23498;
var inst_23500 = null;
var inst_23501 = (0);
var inst_23502 = (0);
var state_23559__$1 = (function (){var statearr_23602 = state_23559;
(statearr_23602[(29)] = inst_23491__$1);

(statearr_23602[(20)] = inst_23501);

(statearr_23602[(21)] = inst_23499);

(statearr_23602[(10)] = inst_23502);

(statearr_23602[(30)] = inst_23493);

(statearr_23602[(11)] = inst_23500);

return statearr_23602;
})();
var statearr_23603_23672 = state_23559__$1;
(statearr_23603_23672[(2)] = null);

(statearr_23603_23672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (28))){
var inst_23499 = (state_23559[(21)]);
var inst_23518 = (state_23559[(25)]);
var inst_23518__$1 = cljs.core.seq.call(null,inst_23499);
var state_23559__$1 = (function (){var statearr_23604 = state_23559;
(statearr_23604[(25)] = inst_23518__$1);

return statearr_23604;
})();
if(inst_23518__$1){
var statearr_23605_23673 = state_23559__$1;
(statearr_23605_23673[(1)] = (33));

} else {
var statearr_23606_23674 = state_23559__$1;
(statearr_23606_23674[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (25))){
var inst_23501 = (state_23559[(20)]);
var inst_23502 = (state_23559[(10)]);
var inst_23504 = (inst_23502 < inst_23501);
var inst_23505 = inst_23504;
var state_23559__$1 = state_23559;
if(cljs.core.truth_(inst_23505)){
var statearr_23607_23675 = state_23559__$1;
(statearr_23607_23675[(1)] = (27));

} else {
var statearr_23608_23676 = state_23559__$1;
(statearr_23608_23676[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (34))){
var state_23559__$1 = state_23559;
var statearr_23609_23677 = state_23559__$1;
(statearr_23609_23677[(2)] = null);

(statearr_23609_23677[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (17))){
var state_23559__$1 = state_23559;
var statearr_23610_23678 = state_23559__$1;
(statearr_23610_23678[(2)] = null);

(statearr_23610_23678[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (3))){
var inst_23557 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23559__$1,inst_23557);
} else {
if((state_val_23560 === (12))){
var inst_23486 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
var statearr_23611_23679 = state_23559__$1;
(statearr_23611_23679[(2)] = inst_23486);

(statearr_23611_23679[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (2))){
var state_23559__$1 = state_23559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23559__$1,(4),ch);
} else {
if((state_val_23560 === (23))){
var state_23559__$1 = state_23559;
var statearr_23612_23680 = state_23559__$1;
(statearr_23612_23680[(2)] = null);

(statearr_23612_23680[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (35))){
var inst_23541 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
var statearr_23613_23681 = state_23559__$1;
(statearr_23613_23681[(2)] = inst_23541);

(statearr_23613_23681[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (19))){
var inst_23458 = (state_23559[(7)]);
var inst_23462 = cljs.core.chunk_first.call(null,inst_23458);
var inst_23463 = cljs.core.chunk_rest.call(null,inst_23458);
var inst_23464 = cljs.core.count.call(null,inst_23462);
var inst_23436 = inst_23463;
var inst_23437 = inst_23462;
var inst_23438 = inst_23464;
var inst_23439 = (0);
var state_23559__$1 = (function (){var statearr_23614 = state_23559;
(statearr_23614[(13)] = inst_23437);

(statearr_23614[(14)] = inst_23438);

(statearr_23614[(16)] = inst_23439);

(statearr_23614[(17)] = inst_23436);

return statearr_23614;
})();
var statearr_23615_23682 = state_23559__$1;
(statearr_23615_23682[(2)] = null);

(statearr_23615_23682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (11))){
var inst_23458 = (state_23559[(7)]);
var inst_23436 = (state_23559[(17)]);
var inst_23458__$1 = cljs.core.seq.call(null,inst_23436);
var state_23559__$1 = (function (){var statearr_23616 = state_23559;
(statearr_23616[(7)] = inst_23458__$1);

return statearr_23616;
})();
if(inst_23458__$1){
var statearr_23617_23683 = state_23559__$1;
(statearr_23617_23683[(1)] = (16));

} else {
var statearr_23618_23684 = state_23559__$1;
(statearr_23618_23684[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (9))){
var inst_23488 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
var statearr_23619_23685 = state_23559__$1;
(statearr_23619_23685[(2)] = inst_23488);

(statearr_23619_23685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (5))){
var inst_23434 = cljs.core.deref.call(null,cs);
var inst_23435 = cljs.core.seq.call(null,inst_23434);
var inst_23436 = inst_23435;
var inst_23437 = null;
var inst_23438 = (0);
var inst_23439 = (0);
var state_23559__$1 = (function (){var statearr_23620 = state_23559;
(statearr_23620[(13)] = inst_23437);

(statearr_23620[(14)] = inst_23438);

(statearr_23620[(16)] = inst_23439);

(statearr_23620[(17)] = inst_23436);

return statearr_23620;
})();
var statearr_23621_23686 = state_23559__$1;
(statearr_23621_23686[(2)] = null);

(statearr_23621_23686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (14))){
var state_23559__$1 = state_23559;
var statearr_23622_23687 = state_23559__$1;
(statearr_23622_23687[(2)] = null);

(statearr_23622_23687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (45))){
var inst_23549 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
var statearr_23623_23688 = state_23559__$1;
(statearr_23623_23688[(2)] = inst_23549);

(statearr_23623_23688[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (26))){
var inst_23491 = (state_23559[(29)]);
var inst_23545 = (state_23559[(2)]);
var inst_23546 = cljs.core.seq.call(null,inst_23491);
var state_23559__$1 = (function (){var statearr_23624 = state_23559;
(statearr_23624[(31)] = inst_23545);

return statearr_23624;
})();
if(inst_23546){
var statearr_23625_23689 = state_23559__$1;
(statearr_23625_23689[(1)] = (42));

} else {
var statearr_23626_23690 = state_23559__$1;
(statearr_23626_23690[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (16))){
var inst_23458 = (state_23559[(7)]);
var inst_23460 = cljs.core.chunked_seq_QMARK_.call(null,inst_23458);
var state_23559__$1 = state_23559;
if(inst_23460){
var statearr_23627_23691 = state_23559__$1;
(statearr_23627_23691[(1)] = (19));

} else {
var statearr_23628_23692 = state_23559__$1;
(statearr_23628_23692[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (38))){
var inst_23538 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
var statearr_23629_23693 = state_23559__$1;
(statearr_23629_23693[(2)] = inst_23538);

(statearr_23629_23693[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (30))){
var state_23559__$1 = state_23559;
var statearr_23630_23694 = state_23559__$1;
(statearr_23630_23694[(2)] = null);

(statearr_23630_23694[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (10))){
var inst_23437 = (state_23559[(13)]);
var inst_23439 = (state_23559[(16)]);
var inst_23447 = cljs.core._nth.call(null,inst_23437,inst_23439);
var inst_23448 = cljs.core.nth.call(null,inst_23447,(0),null);
var inst_23449 = cljs.core.nth.call(null,inst_23447,(1),null);
var state_23559__$1 = (function (){var statearr_23631 = state_23559;
(statearr_23631[(26)] = inst_23448);

return statearr_23631;
})();
if(cljs.core.truth_(inst_23449)){
var statearr_23632_23695 = state_23559__$1;
(statearr_23632_23695[(1)] = (13));

} else {
var statearr_23633_23696 = state_23559__$1;
(statearr_23633_23696[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (18))){
var inst_23484 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
var statearr_23634_23697 = state_23559__$1;
(statearr_23634_23697[(2)] = inst_23484);

(statearr_23634_23697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (42))){
var state_23559__$1 = state_23559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23559__$1,(45),dchan);
} else {
if((state_val_23560 === (37))){
var inst_23518 = (state_23559[(25)]);
var inst_23527 = (state_23559[(23)]);
var inst_23427 = (state_23559[(12)]);
var inst_23527__$1 = cljs.core.first.call(null,inst_23518);
var inst_23528 = cljs.core.async.put_BANG_.call(null,inst_23527__$1,inst_23427,done);
var state_23559__$1 = (function (){var statearr_23635 = state_23559;
(statearr_23635[(23)] = inst_23527__$1);

return statearr_23635;
})();
if(cljs.core.truth_(inst_23528)){
var statearr_23636_23698 = state_23559__$1;
(statearr_23636_23698[(1)] = (39));

} else {
var statearr_23637_23699 = state_23559__$1;
(statearr_23637_23699[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (8))){
var inst_23438 = (state_23559[(14)]);
var inst_23439 = (state_23559[(16)]);
var inst_23441 = (inst_23439 < inst_23438);
var inst_23442 = inst_23441;
var state_23559__$1 = state_23559;
if(cljs.core.truth_(inst_23442)){
var statearr_23638_23700 = state_23559__$1;
(statearr_23638_23700[(1)] = (10));

} else {
var statearr_23639_23701 = state_23559__$1;
(statearr_23639_23701[(1)] = (11));

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
});})(c__22324__auto___23647,cs,m,dchan,dctr,done))
;
return ((function (switch__22212__auto__,c__22324__auto___23647,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22213__auto__ = null;
var cljs$core$async$mult_$_state_machine__22213__auto____0 = (function (){
var statearr_23643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23643[(0)] = cljs$core$async$mult_$_state_machine__22213__auto__);

(statearr_23643[(1)] = (1));

return statearr_23643;
});
var cljs$core$async$mult_$_state_machine__22213__auto____1 = (function (state_23559){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_23559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e23644){if((e23644 instanceof Object)){
var ex__22216__auto__ = e23644;
var statearr_23645_23702 = state_23559;
(statearr_23645_23702[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23703 = state_23559;
state_23559 = G__23703;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22213__auto__ = function(state_23559){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22213__auto____1.call(this,state_23559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22213__auto____0;
cljs$core$async$mult_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22213__auto____1;
return cljs$core$async$mult_$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___23647,cs,m,dchan,dctr,done))
})();
var state__22326__auto__ = (function (){var statearr_23646 = f__22325__auto__.call(null);
(statearr_23646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___23647);

return statearr_23646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___23647,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23704 = [];
var len__21227__auto___23707 = arguments.length;
var i__21228__auto___23708 = (0);
while(true){
if((i__21228__auto___23708 < len__21227__auto___23707)){
args23704.push((arguments[i__21228__auto___23708]));

var G__23709 = (i__21228__auto___23708 + (1));
i__21228__auto___23708 = G__23709;
continue;
} else {
}
break;
}

var G__23706 = args23704.length;
switch (G__23706) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23704.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20815__auto__ = (((m == null))?null:m);
var m__20816__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20815__auto__)]);
if(!((m__20816__auto__ == null))){
return m__20816__auto__.call(null,m,ch);
} else {
var m__20816__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20816__auto____$1 == null))){
return m__20816__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20815__auto__ = (((m == null))?null:m);
var m__20816__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20815__auto__)]);
if(!((m__20816__auto__ == null))){
return m__20816__auto__.call(null,m,ch);
} else {
var m__20816__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20816__auto____$1 == null))){
return m__20816__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20815__auto__ = (((m == null))?null:m);
var m__20816__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20815__auto__)]);
if(!((m__20816__auto__ == null))){
return m__20816__auto__.call(null,m);
} else {
var m__20816__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20816__auto____$1 == null))){
return m__20816__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20815__auto__ = (((m == null))?null:m);
var m__20816__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20815__auto__)]);
if(!((m__20816__auto__ == null))){
return m__20816__auto__.call(null,m,state_map);
} else {
var m__20816__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20816__auto____$1 == null))){
return m__20816__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20815__auto__ = (((m == null))?null:m);
var m__20816__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20815__auto__)]);
if(!((m__20816__auto__ == null))){
return m__20816__auto__.call(null,m,mode);
} else {
var m__20816__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20816__auto____$1 == null))){
return m__20816__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21234__auto__ = [];
var len__21227__auto___23721 = arguments.length;
var i__21228__auto___23722 = (0);
while(true){
if((i__21228__auto___23722 < len__21227__auto___23721)){
args__21234__auto__.push((arguments[i__21228__auto___23722]));

var G__23723 = (i__21228__auto___23722 + (1));
i__21228__auto___23722 = G__23723;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((3) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21235__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23715){
var map__23716 = p__23715;
var map__23716__$1 = ((((!((map__23716 == null)))?((((map__23716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23716):map__23716);
var opts = map__23716__$1;
var statearr_23718_23724 = state;
(statearr_23718_23724[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23716,map__23716__$1,opts){
return (function (val){
var statearr_23719_23725 = state;
(statearr_23719_23725[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23716,map__23716__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23720_23726 = state;
(statearr_23720_23726[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23711){
var G__23712 = cljs.core.first.call(null,seq23711);
var seq23711__$1 = cljs.core.next.call(null,seq23711);
var G__23713 = cljs.core.first.call(null,seq23711__$1);
var seq23711__$2 = cljs.core.next.call(null,seq23711__$1);
var G__23714 = cljs.core.first.call(null,seq23711__$2);
var seq23711__$3 = cljs.core.next.call(null,seq23711__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23712,G__23713,G__23714,seq23711__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23892 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23893){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23893 = meta23893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23894,meta23893__$1){
var self__ = this;
var _23894__$1 = this;
return (new cljs.core.async.t_cljs$core$async23892(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23893__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23894){
var self__ = this;
var _23894__$1 = this;
return self__.meta23893;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23892.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23892.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23892.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23892.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23892.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23892.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23892.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23892.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23892.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23893","meta23893",1207109411,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23892";

cljs.core.async.t_cljs$core$async23892.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20758__auto__,writer__20759__auto__,opt__20760__auto__){
return cljs.core._write.call(null,writer__20759__auto__,"cljs.core.async/t_cljs$core$async23892");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23892 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23892(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23893){
return (new cljs.core.async.t_cljs$core$async23892(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23893));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23892(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22324__auto___24057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___24057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___24057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23994){
var state_val_23995 = (state_23994[(1)]);
if((state_val_23995 === (7))){
var inst_23910 = (state_23994[(2)]);
var state_23994__$1 = state_23994;
var statearr_23996_24058 = state_23994__$1;
(statearr_23996_24058[(2)] = inst_23910);

(statearr_23996_24058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (20))){
var inst_23922 = (state_23994[(7)]);
var state_23994__$1 = state_23994;
var statearr_23997_24059 = state_23994__$1;
(statearr_23997_24059[(2)] = inst_23922);

(statearr_23997_24059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (27))){
var state_23994__$1 = state_23994;
var statearr_23998_24060 = state_23994__$1;
(statearr_23998_24060[(2)] = null);

(statearr_23998_24060[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (1))){
var inst_23898 = (state_23994[(8)]);
var inst_23898__$1 = calc_state.call(null);
var inst_23900 = (inst_23898__$1 == null);
var inst_23901 = cljs.core.not.call(null,inst_23900);
var state_23994__$1 = (function (){var statearr_23999 = state_23994;
(statearr_23999[(8)] = inst_23898__$1);

return statearr_23999;
})();
if(inst_23901){
var statearr_24000_24061 = state_23994__$1;
(statearr_24000_24061[(1)] = (2));

} else {
var statearr_24001_24062 = state_23994__$1;
(statearr_24001_24062[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (24))){
var inst_23954 = (state_23994[(9)]);
var inst_23945 = (state_23994[(10)]);
var inst_23968 = (state_23994[(11)]);
var inst_23968__$1 = inst_23945.call(null,inst_23954);
var state_23994__$1 = (function (){var statearr_24002 = state_23994;
(statearr_24002[(11)] = inst_23968__$1);

return statearr_24002;
})();
if(cljs.core.truth_(inst_23968__$1)){
var statearr_24003_24063 = state_23994__$1;
(statearr_24003_24063[(1)] = (29));

} else {
var statearr_24004_24064 = state_23994__$1;
(statearr_24004_24064[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (4))){
var inst_23913 = (state_23994[(2)]);
var state_23994__$1 = state_23994;
if(cljs.core.truth_(inst_23913)){
var statearr_24005_24065 = state_23994__$1;
(statearr_24005_24065[(1)] = (8));

} else {
var statearr_24006_24066 = state_23994__$1;
(statearr_24006_24066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (15))){
var inst_23939 = (state_23994[(2)]);
var state_23994__$1 = state_23994;
if(cljs.core.truth_(inst_23939)){
var statearr_24007_24067 = state_23994__$1;
(statearr_24007_24067[(1)] = (19));

} else {
var statearr_24008_24068 = state_23994__$1;
(statearr_24008_24068[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (21))){
var inst_23944 = (state_23994[(12)]);
var inst_23944__$1 = (state_23994[(2)]);
var inst_23945 = cljs.core.get.call(null,inst_23944__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23946 = cljs.core.get.call(null,inst_23944__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23947 = cljs.core.get.call(null,inst_23944__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23994__$1 = (function (){var statearr_24009 = state_23994;
(statearr_24009[(13)] = inst_23946);

(statearr_24009[(10)] = inst_23945);

(statearr_24009[(12)] = inst_23944__$1);

return statearr_24009;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23994__$1,(22),inst_23947);
} else {
if((state_val_23995 === (31))){
var inst_23976 = (state_23994[(2)]);
var state_23994__$1 = state_23994;
if(cljs.core.truth_(inst_23976)){
var statearr_24010_24069 = state_23994__$1;
(statearr_24010_24069[(1)] = (32));

} else {
var statearr_24011_24070 = state_23994__$1;
(statearr_24011_24070[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (32))){
var inst_23953 = (state_23994[(14)]);
var state_23994__$1 = state_23994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23994__$1,(35),out,inst_23953);
} else {
if((state_val_23995 === (33))){
var inst_23944 = (state_23994[(12)]);
var inst_23922 = inst_23944;
var state_23994__$1 = (function (){var statearr_24012 = state_23994;
(statearr_24012[(7)] = inst_23922);

return statearr_24012;
})();
var statearr_24013_24071 = state_23994__$1;
(statearr_24013_24071[(2)] = null);

(statearr_24013_24071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (13))){
var inst_23922 = (state_23994[(7)]);
var inst_23929 = inst_23922.cljs$lang$protocol_mask$partition0$;
var inst_23930 = (inst_23929 & (64));
var inst_23931 = inst_23922.cljs$core$ISeq$;
var inst_23932 = (inst_23930) || (inst_23931);
var state_23994__$1 = state_23994;
if(cljs.core.truth_(inst_23932)){
var statearr_24014_24072 = state_23994__$1;
(statearr_24014_24072[(1)] = (16));

} else {
var statearr_24015_24073 = state_23994__$1;
(statearr_24015_24073[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (22))){
var inst_23954 = (state_23994[(9)]);
var inst_23953 = (state_23994[(14)]);
var inst_23952 = (state_23994[(2)]);
var inst_23953__$1 = cljs.core.nth.call(null,inst_23952,(0),null);
var inst_23954__$1 = cljs.core.nth.call(null,inst_23952,(1),null);
var inst_23955 = (inst_23953__$1 == null);
var inst_23956 = cljs.core._EQ_.call(null,inst_23954__$1,change);
var inst_23957 = (inst_23955) || (inst_23956);
var state_23994__$1 = (function (){var statearr_24016 = state_23994;
(statearr_24016[(9)] = inst_23954__$1);

(statearr_24016[(14)] = inst_23953__$1);

return statearr_24016;
})();
if(cljs.core.truth_(inst_23957)){
var statearr_24017_24074 = state_23994__$1;
(statearr_24017_24074[(1)] = (23));

} else {
var statearr_24018_24075 = state_23994__$1;
(statearr_24018_24075[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (36))){
var inst_23944 = (state_23994[(12)]);
var inst_23922 = inst_23944;
var state_23994__$1 = (function (){var statearr_24019 = state_23994;
(statearr_24019[(7)] = inst_23922);

return statearr_24019;
})();
var statearr_24020_24076 = state_23994__$1;
(statearr_24020_24076[(2)] = null);

(statearr_24020_24076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (29))){
var inst_23968 = (state_23994[(11)]);
var state_23994__$1 = state_23994;
var statearr_24021_24077 = state_23994__$1;
(statearr_24021_24077[(2)] = inst_23968);

(statearr_24021_24077[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (6))){
var state_23994__$1 = state_23994;
var statearr_24022_24078 = state_23994__$1;
(statearr_24022_24078[(2)] = false);

(statearr_24022_24078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (28))){
var inst_23964 = (state_23994[(2)]);
var inst_23965 = calc_state.call(null);
var inst_23922 = inst_23965;
var state_23994__$1 = (function (){var statearr_24023 = state_23994;
(statearr_24023[(7)] = inst_23922);

(statearr_24023[(15)] = inst_23964);

return statearr_24023;
})();
var statearr_24024_24079 = state_23994__$1;
(statearr_24024_24079[(2)] = null);

(statearr_24024_24079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (25))){
var inst_23990 = (state_23994[(2)]);
var state_23994__$1 = state_23994;
var statearr_24025_24080 = state_23994__$1;
(statearr_24025_24080[(2)] = inst_23990);

(statearr_24025_24080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (34))){
var inst_23988 = (state_23994[(2)]);
var state_23994__$1 = state_23994;
var statearr_24026_24081 = state_23994__$1;
(statearr_24026_24081[(2)] = inst_23988);

(statearr_24026_24081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (17))){
var state_23994__$1 = state_23994;
var statearr_24027_24082 = state_23994__$1;
(statearr_24027_24082[(2)] = false);

(statearr_24027_24082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (3))){
var state_23994__$1 = state_23994;
var statearr_24028_24083 = state_23994__$1;
(statearr_24028_24083[(2)] = false);

(statearr_24028_24083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (12))){
var inst_23992 = (state_23994[(2)]);
var state_23994__$1 = state_23994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23994__$1,inst_23992);
} else {
if((state_val_23995 === (2))){
var inst_23898 = (state_23994[(8)]);
var inst_23903 = inst_23898.cljs$lang$protocol_mask$partition0$;
var inst_23904 = (inst_23903 & (64));
var inst_23905 = inst_23898.cljs$core$ISeq$;
var inst_23906 = (inst_23904) || (inst_23905);
var state_23994__$1 = state_23994;
if(cljs.core.truth_(inst_23906)){
var statearr_24029_24084 = state_23994__$1;
(statearr_24029_24084[(1)] = (5));

} else {
var statearr_24030_24085 = state_23994__$1;
(statearr_24030_24085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (23))){
var inst_23953 = (state_23994[(14)]);
var inst_23959 = (inst_23953 == null);
var state_23994__$1 = state_23994;
if(cljs.core.truth_(inst_23959)){
var statearr_24031_24086 = state_23994__$1;
(statearr_24031_24086[(1)] = (26));

} else {
var statearr_24032_24087 = state_23994__$1;
(statearr_24032_24087[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (35))){
var inst_23979 = (state_23994[(2)]);
var state_23994__$1 = state_23994;
if(cljs.core.truth_(inst_23979)){
var statearr_24033_24088 = state_23994__$1;
(statearr_24033_24088[(1)] = (36));

} else {
var statearr_24034_24089 = state_23994__$1;
(statearr_24034_24089[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (19))){
var inst_23922 = (state_23994[(7)]);
var inst_23941 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23922);
var state_23994__$1 = state_23994;
var statearr_24035_24090 = state_23994__$1;
(statearr_24035_24090[(2)] = inst_23941);

(statearr_24035_24090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (11))){
var inst_23922 = (state_23994[(7)]);
var inst_23926 = (inst_23922 == null);
var inst_23927 = cljs.core.not.call(null,inst_23926);
var state_23994__$1 = state_23994;
if(inst_23927){
var statearr_24036_24091 = state_23994__$1;
(statearr_24036_24091[(1)] = (13));

} else {
var statearr_24037_24092 = state_23994__$1;
(statearr_24037_24092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (9))){
var inst_23898 = (state_23994[(8)]);
var state_23994__$1 = state_23994;
var statearr_24038_24093 = state_23994__$1;
(statearr_24038_24093[(2)] = inst_23898);

(statearr_24038_24093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (5))){
var state_23994__$1 = state_23994;
var statearr_24039_24094 = state_23994__$1;
(statearr_24039_24094[(2)] = true);

(statearr_24039_24094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (14))){
var state_23994__$1 = state_23994;
var statearr_24040_24095 = state_23994__$1;
(statearr_24040_24095[(2)] = false);

(statearr_24040_24095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (26))){
var inst_23954 = (state_23994[(9)]);
var inst_23961 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23954);
var state_23994__$1 = state_23994;
var statearr_24041_24096 = state_23994__$1;
(statearr_24041_24096[(2)] = inst_23961);

(statearr_24041_24096[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (16))){
var state_23994__$1 = state_23994;
var statearr_24042_24097 = state_23994__$1;
(statearr_24042_24097[(2)] = true);

(statearr_24042_24097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (38))){
var inst_23984 = (state_23994[(2)]);
var state_23994__$1 = state_23994;
var statearr_24043_24098 = state_23994__$1;
(statearr_24043_24098[(2)] = inst_23984);

(statearr_24043_24098[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (30))){
var inst_23954 = (state_23994[(9)]);
var inst_23946 = (state_23994[(13)]);
var inst_23945 = (state_23994[(10)]);
var inst_23971 = cljs.core.empty_QMARK_.call(null,inst_23945);
var inst_23972 = inst_23946.call(null,inst_23954);
var inst_23973 = cljs.core.not.call(null,inst_23972);
var inst_23974 = (inst_23971) && (inst_23973);
var state_23994__$1 = state_23994;
var statearr_24044_24099 = state_23994__$1;
(statearr_24044_24099[(2)] = inst_23974);

(statearr_24044_24099[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (10))){
var inst_23898 = (state_23994[(8)]);
var inst_23918 = (state_23994[(2)]);
var inst_23919 = cljs.core.get.call(null,inst_23918,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23920 = cljs.core.get.call(null,inst_23918,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23921 = cljs.core.get.call(null,inst_23918,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23922 = inst_23898;
var state_23994__$1 = (function (){var statearr_24045 = state_23994;
(statearr_24045[(16)] = inst_23919);

(statearr_24045[(17)] = inst_23921);

(statearr_24045[(7)] = inst_23922);

(statearr_24045[(18)] = inst_23920);

return statearr_24045;
})();
var statearr_24046_24100 = state_23994__$1;
(statearr_24046_24100[(2)] = null);

(statearr_24046_24100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (18))){
var inst_23936 = (state_23994[(2)]);
var state_23994__$1 = state_23994;
var statearr_24047_24101 = state_23994__$1;
(statearr_24047_24101[(2)] = inst_23936);

(statearr_24047_24101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (37))){
var state_23994__$1 = state_23994;
var statearr_24048_24102 = state_23994__$1;
(statearr_24048_24102[(2)] = null);

(statearr_24048_24102[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (8))){
var inst_23898 = (state_23994[(8)]);
var inst_23915 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23898);
var state_23994__$1 = state_23994;
var statearr_24049_24103 = state_23994__$1;
(statearr_24049_24103[(2)] = inst_23915);

(statearr_24049_24103[(1)] = (10));


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
});})(c__22324__auto___24057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22212__auto__,c__22324__auto___24057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22213__auto__ = null;
var cljs$core$async$mix_$_state_machine__22213__auto____0 = (function (){
var statearr_24053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24053[(0)] = cljs$core$async$mix_$_state_machine__22213__auto__);

(statearr_24053[(1)] = (1));

return statearr_24053;
});
var cljs$core$async$mix_$_state_machine__22213__auto____1 = (function (state_23994){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_23994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e24054){if((e24054 instanceof Object)){
var ex__22216__auto__ = e24054;
var statearr_24055_24104 = state_23994;
(statearr_24055_24104[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24105 = state_23994;
state_23994 = G__24105;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22213__auto__ = function(state_23994){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22213__auto____1.call(this,state_23994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22213__auto____0;
cljs$core$async$mix_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22213__auto____1;
return cljs$core$async$mix_$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___24057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22326__auto__ = (function (){var statearr_24056 = f__22325__auto__.call(null);
(statearr_24056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___24057);

return statearr_24056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___24057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20815__auto__ = (((p == null))?null:p);
var m__20816__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20815__auto__)]);
if(!((m__20816__auto__ == null))){
return m__20816__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20816__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20816__auto____$1 == null))){
return m__20816__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20815__auto__ = (((p == null))?null:p);
var m__20816__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20815__auto__)]);
if(!((m__20816__auto__ == null))){
return m__20816__auto__.call(null,p,v,ch);
} else {
var m__20816__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20816__auto____$1 == null))){
return m__20816__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24106 = [];
var len__21227__auto___24109 = arguments.length;
var i__21228__auto___24110 = (0);
while(true){
if((i__21228__auto___24110 < len__21227__auto___24109)){
args24106.push((arguments[i__21228__auto___24110]));

var G__24111 = (i__21228__auto___24110 + (1));
i__21228__auto___24110 = G__24111;
continue;
} else {
}
break;
}

var G__24108 = args24106.length;
switch (G__24108) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24106.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20815__auto__ = (((p == null))?null:p);
var m__20816__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20815__auto__)]);
if(!((m__20816__auto__ == null))){
return m__20816__auto__.call(null,p);
} else {
var m__20816__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20816__auto____$1 == null))){
return m__20816__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20815__auto__ = (((p == null))?null:p);
var m__20816__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20815__auto__)]);
if(!((m__20816__auto__ == null))){
return m__20816__auto__.call(null,p,v);
} else {
var m__20816__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20816__auto____$1 == null))){
return m__20816__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24114 = [];
var len__21227__auto___24239 = arguments.length;
var i__21228__auto___24240 = (0);
while(true){
if((i__21228__auto___24240 < len__21227__auto___24239)){
args24114.push((arguments[i__21228__auto___24240]));

var G__24241 = (i__21228__auto___24240 + (1));
i__21228__auto___24240 = G__24241;
continue;
} else {
}
break;
}

var G__24116 = args24114.length;
switch (G__24116) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24114.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20152__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20152__auto__)){
return or__20152__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20152__auto__,mults){
return (function (p1__24113_SHARP_){
if(cljs.core.truth_(p1__24113_SHARP_.call(null,topic))){
return p1__24113_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24113_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20152__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24117 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24118){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24118 = meta24118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24119,meta24118__$1){
var self__ = this;
var _24119__$1 = this;
return (new cljs.core.async.t_cljs$core$async24117(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24118__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24119){
var self__ = this;
var _24119__$1 = this;
return self__.meta24118;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24117.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24118","meta24118",1801534590,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24117";

cljs.core.async.t_cljs$core$async24117.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20758__auto__,writer__20759__auto__,opt__20760__auto__){
return cljs.core._write.call(null,writer__20759__auto__,"cljs.core.async/t_cljs$core$async24117");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24117 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24117(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24118){
return (new cljs.core.async.t_cljs$core$async24117(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24118));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24117(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22324__auto___24243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___24243,mults,ensure_mult,p){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___24243,mults,ensure_mult,p){
return (function (state_24191){
var state_val_24192 = (state_24191[(1)]);
if((state_val_24192 === (7))){
var inst_24187 = (state_24191[(2)]);
var state_24191__$1 = state_24191;
var statearr_24193_24244 = state_24191__$1;
(statearr_24193_24244[(2)] = inst_24187);

(statearr_24193_24244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (20))){
var state_24191__$1 = state_24191;
var statearr_24194_24245 = state_24191__$1;
(statearr_24194_24245[(2)] = null);

(statearr_24194_24245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (1))){
var state_24191__$1 = state_24191;
var statearr_24195_24246 = state_24191__$1;
(statearr_24195_24246[(2)] = null);

(statearr_24195_24246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (24))){
var inst_24170 = (state_24191[(7)]);
var inst_24179 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24170);
var state_24191__$1 = state_24191;
var statearr_24196_24247 = state_24191__$1;
(statearr_24196_24247[(2)] = inst_24179);

(statearr_24196_24247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (4))){
var inst_24122 = (state_24191[(8)]);
var inst_24122__$1 = (state_24191[(2)]);
var inst_24123 = (inst_24122__$1 == null);
var state_24191__$1 = (function (){var statearr_24197 = state_24191;
(statearr_24197[(8)] = inst_24122__$1);

return statearr_24197;
})();
if(cljs.core.truth_(inst_24123)){
var statearr_24198_24248 = state_24191__$1;
(statearr_24198_24248[(1)] = (5));

} else {
var statearr_24199_24249 = state_24191__$1;
(statearr_24199_24249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (15))){
var inst_24164 = (state_24191[(2)]);
var state_24191__$1 = state_24191;
var statearr_24200_24250 = state_24191__$1;
(statearr_24200_24250[(2)] = inst_24164);

(statearr_24200_24250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (21))){
var inst_24184 = (state_24191[(2)]);
var state_24191__$1 = (function (){var statearr_24201 = state_24191;
(statearr_24201[(9)] = inst_24184);

return statearr_24201;
})();
var statearr_24202_24251 = state_24191__$1;
(statearr_24202_24251[(2)] = null);

(statearr_24202_24251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (13))){
var inst_24146 = (state_24191[(10)]);
var inst_24148 = cljs.core.chunked_seq_QMARK_.call(null,inst_24146);
var state_24191__$1 = state_24191;
if(inst_24148){
var statearr_24203_24252 = state_24191__$1;
(statearr_24203_24252[(1)] = (16));

} else {
var statearr_24204_24253 = state_24191__$1;
(statearr_24204_24253[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (22))){
var inst_24176 = (state_24191[(2)]);
var state_24191__$1 = state_24191;
if(cljs.core.truth_(inst_24176)){
var statearr_24205_24254 = state_24191__$1;
(statearr_24205_24254[(1)] = (23));

} else {
var statearr_24206_24255 = state_24191__$1;
(statearr_24206_24255[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (6))){
var inst_24170 = (state_24191[(7)]);
var inst_24122 = (state_24191[(8)]);
var inst_24172 = (state_24191[(11)]);
var inst_24170__$1 = topic_fn.call(null,inst_24122);
var inst_24171 = cljs.core.deref.call(null,mults);
var inst_24172__$1 = cljs.core.get.call(null,inst_24171,inst_24170__$1);
var state_24191__$1 = (function (){var statearr_24207 = state_24191;
(statearr_24207[(7)] = inst_24170__$1);

(statearr_24207[(11)] = inst_24172__$1);

return statearr_24207;
})();
if(cljs.core.truth_(inst_24172__$1)){
var statearr_24208_24256 = state_24191__$1;
(statearr_24208_24256[(1)] = (19));

} else {
var statearr_24209_24257 = state_24191__$1;
(statearr_24209_24257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (25))){
var inst_24181 = (state_24191[(2)]);
var state_24191__$1 = state_24191;
var statearr_24210_24258 = state_24191__$1;
(statearr_24210_24258[(2)] = inst_24181);

(statearr_24210_24258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (17))){
var inst_24146 = (state_24191[(10)]);
var inst_24155 = cljs.core.first.call(null,inst_24146);
var inst_24156 = cljs.core.async.muxch_STAR_.call(null,inst_24155);
var inst_24157 = cljs.core.async.close_BANG_.call(null,inst_24156);
var inst_24158 = cljs.core.next.call(null,inst_24146);
var inst_24132 = inst_24158;
var inst_24133 = null;
var inst_24134 = (0);
var inst_24135 = (0);
var state_24191__$1 = (function (){var statearr_24211 = state_24191;
(statearr_24211[(12)] = inst_24133);

(statearr_24211[(13)] = inst_24135);

(statearr_24211[(14)] = inst_24157);

(statearr_24211[(15)] = inst_24132);

(statearr_24211[(16)] = inst_24134);

return statearr_24211;
})();
var statearr_24212_24259 = state_24191__$1;
(statearr_24212_24259[(2)] = null);

(statearr_24212_24259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (3))){
var inst_24189 = (state_24191[(2)]);
var state_24191__$1 = state_24191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24191__$1,inst_24189);
} else {
if((state_val_24192 === (12))){
var inst_24166 = (state_24191[(2)]);
var state_24191__$1 = state_24191;
var statearr_24213_24260 = state_24191__$1;
(statearr_24213_24260[(2)] = inst_24166);

(statearr_24213_24260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (2))){
var state_24191__$1 = state_24191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24191__$1,(4),ch);
} else {
if((state_val_24192 === (23))){
var state_24191__$1 = state_24191;
var statearr_24214_24261 = state_24191__$1;
(statearr_24214_24261[(2)] = null);

(statearr_24214_24261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (19))){
var inst_24122 = (state_24191[(8)]);
var inst_24172 = (state_24191[(11)]);
var inst_24174 = cljs.core.async.muxch_STAR_.call(null,inst_24172);
var state_24191__$1 = state_24191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24191__$1,(22),inst_24174,inst_24122);
} else {
if((state_val_24192 === (11))){
var inst_24132 = (state_24191[(15)]);
var inst_24146 = (state_24191[(10)]);
var inst_24146__$1 = cljs.core.seq.call(null,inst_24132);
var state_24191__$1 = (function (){var statearr_24215 = state_24191;
(statearr_24215[(10)] = inst_24146__$1);

return statearr_24215;
})();
if(inst_24146__$1){
var statearr_24216_24262 = state_24191__$1;
(statearr_24216_24262[(1)] = (13));

} else {
var statearr_24217_24263 = state_24191__$1;
(statearr_24217_24263[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (9))){
var inst_24168 = (state_24191[(2)]);
var state_24191__$1 = state_24191;
var statearr_24218_24264 = state_24191__$1;
(statearr_24218_24264[(2)] = inst_24168);

(statearr_24218_24264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (5))){
var inst_24129 = cljs.core.deref.call(null,mults);
var inst_24130 = cljs.core.vals.call(null,inst_24129);
var inst_24131 = cljs.core.seq.call(null,inst_24130);
var inst_24132 = inst_24131;
var inst_24133 = null;
var inst_24134 = (0);
var inst_24135 = (0);
var state_24191__$1 = (function (){var statearr_24219 = state_24191;
(statearr_24219[(12)] = inst_24133);

(statearr_24219[(13)] = inst_24135);

(statearr_24219[(15)] = inst_24132);

(statearr_24219[(16)] = inst_24134);

return statearr_24219;
})();
var statearr_24220_24265 = state_24191__$1;
(statearr_24220_24265[(2)] = null);

(statearr_24220_24265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (14))){
var state_24191__$1 = state_24191;
var statearr_24224_24266 = state_24191__$1;
(statearr_24224_24266[(2)] = null);

(statearr_24224_24266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (16))){
var inst_24146 = (state_24191[(10)]);
var inst_24150 = cljs.core.chunk_first.call(null,inst_24146);
var inst_24151 = cljs.core.chunk_rest.call(null,inst_24146);
var inst_24152 = cljs.core.count.call(null,inst_24150);
var inst_24132 = inst_24151;
var inst_24133 = inst_24150;
var inst_24134 = inst_24152;
var inst_24135 = (0);
var state_24191__$1 = (function (){var statearr_24225 = state_24191;
(statearr_24225[(12)] = inst_24133);

(statearr_24225[(13)] = inst_24135);

(statearr_24225[(15)] = inst_24132);

(statearr_24225[(16)] = inst_24134);

return statearr_24225;
})();
var statearr_24226_24267 = state_24191__$1;
(statearr_24226_24267[(2)] = null);

(statearr_24226_24267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (10))){
var inst_24133 = (state_24191[(12)]);
var inst_24135 = (state_24191[(13)]);
var inst_24132 = (state_24191[(15)]);
var inst_24134 = (state_24191[(16)]);
var inst_24140 = cljs.core._nth.call(null,inst_24133,inst_24135);
var inst_24141 = cljs.core.async.muxch_STAR_.call(null,inst_24140);
var inst_24142 = cljs.core.async.close_BANG_.call(null,inst_24141);
var inst_24143 = (inst_24135 + (1));
var tmp24221 = inst_24133;
var tmp24222 = inst_24132;
var tmp24223 = inst_24134;
var inst_24132__$1 = tmp24222;
var inst_24133__$1 = tmp24221;
var inst_24134__$1 = tmp24223;
var inst_24135__$1 = inst_24143;
var state_24191__$1 = (function (){var statearr_24227 = state_24191;
(statearr_24227[(12)] = inst_24133__$1);

(statearr_24227[(17)] = inst_24142);

(statearr_24227[(13)] = inst_24135__$1);

(statearr_24227[(15)] = inst_24132__$1);

(statearr_24227[(16)] = inst_24134__$1);

return statearr_24227;
})();
var statearr_24228_24268 = state_24191__$1;
(statearr_24228_24268[(2)] = null);

(statearr_24228_24268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (18))){
var inst_24161 = (state_24191[(2)]);
var state_24191__$1 = state_24191;
var statearr_24229_24269 = state_24191__$1;
(statearr_24229_24269[(2)] = inst_24161);

(statearr_24229_24269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (8))){
var inst_24135 = (state_24191[(13)]);
var inst_24134 = (state_24191[(16)]);
var inst_24137 = (inst_24135 < inst_24134);
var inst_24138 = inst_24137;
var state_24191__$1 = state_24191;
if(cljs.core.truth_(inst_24138)){
var statearr_24230_24270 = state_24191__$1;
(statearr_24230_24270[(1)] = (10));

} else {
var statearr_24231_24271 = state_24191__$1;
(statearr_24231_24271[(1)] = (11));

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
});})(c__22324__auto___24243,mults,ensure_mult,p))
;
return ((function (switch__22212__auto__,c__22324__auto___24243,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22213__auto__ = null;
var cljs$core$async$state_machine__22213__auto____0 = (function (){
var statearr_24235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24235[(0)] = cljs$core$async$state_machine__22213__auto__);

(statearr_24235[(1)] = (1));

return statearr_24235;
});
var cljs$core$async$state_machine__22213__auto____1 = (function (state_24191){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_24191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e24236){if((e24236 instanceof Object)){
var ex__22216__auto__ = e24236;
var statearr_24237_24272 = state_24191;
(statearr_24237_24272[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24273 = state_24191;
state_24191 = G__24273;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$state_machine__22213__auto__ = function(state_24191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22213__auto____1.call(this,state_24191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22213__auto____0;
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22213__auto____1;
return cljs$core$async$state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___24243,mults,ensure_mult,p))
})();
var state__22326__auto__ = (function (){var statearr_24238 = f__22325__auto__.call(null);
(statearr_24238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___24243);

return statearr_24238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___24243,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24274 = [];
var len__21227__auto___24277 = arguments.length;
var i__21228__auto___24278 = (0);
while(true){
if((i__21228__auto___24278 < len__21227__auto___24277)){
args24274.push((arguments[i__21228__auto___24278]));

var G__24279 = (i__21228__auto___24278 + (1));
i__21228__auto___24278 = G__24279;
continue;
} else {
}
break;
}

var G__24276 = args24274.length;
switch (G__24276) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24274.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24281 = [];
var len__21227__auto___24284 = arguments.length;
var i__21228__auto___24285 = (0);
while(true){
if((i__21228__auto___24285 < len__21227__auto___24284)){
args24281.push((arguments[i__21228__auto___24285]));

var G__24286 = (i__21228__auto___24285 + (1));
i__21228__auto___24285 = G__24286;
continue;
} else {
}
break;
}

var G__24283 = args24281.length;
switch (G__24283) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24281.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24288 = [];
var len__21227__auto___24359 = arguments.length;
var i__21228__auto___24360 = (0);
while(true){
if((i__21228__auto___24360 < len__21227__auto___24359)){
args24288.push((arguments[i__21228__auto___24360]));

var G__24361 = (i__21228__auto___24360 + (1));
i__21228__auto___24360 = G__24361;
continue;
} else {
}
break;
}

var G__24290 = args24288.length;
switch (G__24290) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24288.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22324__auto___24363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___24363,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___24363,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24329){
var state_val_24330 = (state_24329[(1)]);
if((state_val_24330 === (7))){
var state_24329__$1 = state_24329;
var statearr_24331_24364 = state_24329__$1;
(statearr_24331_24364[(2)] = null);

(statearr_24331_24364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (1))){
var state_24329__$1 = state_24329;
var statearr_24332_24365 = state_24329__$1;
(statearr_24332_24365[(2)] = null);

(statearr_24332_24365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (4))){
var inst_24293 = (state_24329[(7)]);
var inst_24295 = (inst_24293 < cnt);
var state_24329__$1 = state_24329;
if(cljs.core.truth_(inst_24295)){
var statearr_24333_24366 = state_24329__$1;
(statearr_24333_24366[(1)] = (6));

} else {
var statearr_24334_24367 = state_24329__$1;
(statearr_24334_24367[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (15))){
var inst_24325 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
var statearr_24335_24368 = state_24329__$1;
(statearr_24335_24368[(2)] = inst_24325);

(statearr_24335_24368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (13))){
var inst_24318 = cljs.core.async.close_BANG_.call(null,out);
var state_24329__$1 = state_24329;
var statearr_24336_24369 = state_24329__$1;
(statearr_24336_24369[(2)] = inst_24318);

(statearr_24336_24369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (6))){
var state_24329__$1 = state_24329;
var statearr_24337_24370 = state_24329__$1;
(statearr_24337_24370[(2)] = null);

(statearr_24337_24370[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (3))){
var inst_24327 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24329__$1,inst_24327);
} else {
if((state_val_24330 === (12))){
var inst_24315 = (state_24329[(8)]);
var inst_24315__$1 = (state_24329[(2)]);
var inst_24316 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24315__$1);
var state_24329__$1 = (function (){var statearr_24338 = state_24329;
(statearr_24338[(8)] = inst_24315__$1);

return statearr_24338;
})();
if(cljs.core.truth_(inst_24316)){
var statearr_24339_24371 = state_24329__$1;
(statearr_24339_24371[(1)] = (13));

} else {
var statearr_24340_24372 = state_24329__$1;
(statearr_24340_24372[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (2))){
var inst_24292 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24293 = (0);
var state_24329__$1 = (function (){var statearr_24341 = state_24329;
(statearr_24341[(7)] = inst_24293);

(statearr_24341[(9)] = inst_24292);

return statearr_24341;
})();
var statearr_24342_24373 = state_24329__$1;
(statearr_24342_24373[(2)] = null);

(statearr_24342_24373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (11))){
var inst_24293 = (state_24329[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24329,(10),Object,null,(9));
var inst_24302 = chs__$1.call(null,inst_24293);
var inst_24303 = done.call(null,inst_24293);
var inst_24304 = cljs.core.async.take_BANG_.call(null,inst_24302,inst_24303);
var state_24329__$1 = state_24329;
var statearr_24343_24374 = state_24329__$1;
(statearr_24343_24374[(2)] = inst_24304);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24329__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (9))){
var inst_24293 = (state_24329[(7)]);
var inst_24306 = (state_24329[(2)]);
var inst_24307 = (inst_24293 + (1));
var inst_24293__$1 = inst_24307;
var state_24329__$1 = (function (){var statearr_24344 = state_24329;
(statearr_24344[(10)] = inst_24306);

(statearr_24344[(7)] = inst_24293__$1);

return statearr_24344;
})();
var statearr_24345_24375 = state_24329__$1;
(statearr_24345_24375[(2)] = null);

(statearr_24345_24375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (5))){
var inst_24313 = (state_24329[(2)]);
var state_24329__$1 = (function (){var statearr_24346 = state_24329;
(statearr_24346[(11)] = inst_24313);

return statearr_24346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24329__$1,(12),dchan);
} else {
if((state_val_24330 === (14))){
var inst_24315 = (state_24329[(8)]);
var inst_24320 = cljs.core.apply.call(null,f,inst_24315);
var state_24329__$1 = state_24329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24329__$1,(16),out,inst_24320);
} else {
if((state_val_24330 === (16))){
var inst_24322 = (state_24329[(2)]);
var state_24329__$1 = (function (){var statearr_24347 = state_24329;
(statearr_24347[(12)] = inst_24322);

return statearr_24347;
})();
var statearr_24348_24376 = state_24329__$1;
(statearr_24348_24376[(2)] = null);

(statearr_24348_24376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (10))){
var inst_24297 = (state_24329[(2)]);
var inst_24298 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24329__$1 = (function (){var statearr_24349 = state_24329;
(statearr_24349[(13)] = inst_24297);

return statearr_24349;
})();
var statearr_24350_24377 = state_24329__$1;
(statearr_24350_24377[(2)] = inst_24298);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24329__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (8))){
var inst_24311 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
var statearr_24351_24378 = state_24329__$1;
(statearr_24351_24378[(2)] = inst_24311);

(statearr_24351_24378[(1)] = (5));


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
});})(c__22324__auto___24363,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22212__auto__,c__22324__auto___24363,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22213__auto__ = null;
var cljs$core$async$state_machine__22213__auto____0 = (function (){
var statearr_24355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24355[(0)] = cljs$core$async$state_machine__22213__auto__);

(statearr_24355[(1)] = (1));

return statearr_24355;
});
var cljs$core$async$state_machine__22213__auto____1 = (function (state_24329){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_24329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e24356){if((e24356 instanceof Object)){
var ex__22216__auto__ = e24356;
var statearr_24357_24379 = state_24329;
(statearr_24357_24379[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24380 = state_24329;
state_24329 = G__24380;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$state_machine__22213__auto__ = function(state_24329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22213__auto____1.call(this,state_24329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22213__auto____0;
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22213__auto____1;
return cljs$core$async$state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___24363,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22326__auto__ = (function (){var statearr_24358 = f__22325__auto__.call(null);
(statearr_24358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___24363);

return statearr_24358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___24363,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24382 = [];
var len__21227__auto___24440 = arguments.length;
var i__21228__auto___24441 = (0);
while(true){
if((i__21228__auto___24441 < len__21227__auto___24440)){
args24382.push((arguments[i__21228__auto___24441]));

var G__24442 = (i__21228__auto___24441 + (1));
i__21228__auto___24441 = G__24442;
continue;
} else {
}
break;
}

var G__24384 = args24382.length;
switch (G__24384) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24382.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22324__auto___24444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___24444,out){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___24444,out){
return (function (state_24416){
var state_val_24417 = (state_24416[(1)]);
if((state_val_24417 === (7))){
var inst_24396 = (state_24416[(7)]);
var inst_24395 = (state_24416[(8)]);
var inst_24395__$1 = (state_24416[(2)]);
var inst_24396__$1 = cljs.core.nth.call(null,inst_24395__$1,(0),null);
var inst_24397 = cljs.core.nth.call(null,inst_24395__$1,(1),null);
var inst_24398 = (inst_24396__$1 == null);
var state_24416__$1 = (function (){var statearr_24418 = state_24416;
(statearr_24418[(7)] = inst_24396__$1);

(statearr_24418[(9)] = inst_24397);

(statearr_24418[(8)] = inst_24395__$1);

return statearr_24418;
})();
if(cljs.core.truth_(inst_24398)){
var statearr_24419_24445 = state_24416__$1;
(statearr_24419_24445[(1)] = (8));

} else {
var statearr_24420_24446 = state_24416__$1;
(statearr_24420_24446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24417 === (1))){
var inst_24385 = cljs.core.vec.call(null,chs);
var inst_24386 = inst_24385;
var state_24416__$1 = (function (){var statearr_24421 = state_24416;
(statearr_24421[(10)] = inst_24386);

return statearr_24421;
})();
var statearr_24422_24447 = state_24416__$1;
(statearr_24422_24447[(2)] = null);

(statearr_24422_24447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24417 === (4))){
var inst_24386 = (state_24416[(10)]);
var state_24416__$1 = state_24416;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24416__$1,(7),inst_24386);
} else {
if((state_val_24417 === (6))){
var inst_24412 = (state_24416[(2)]);
var state_24416__$1 = state_24416;
var statearr_24423_24448 = state_24416__$1;
(statearr_24423_24448[(2)] = inst_24412);

(statearr_24423_24448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24417 === (3))){
var inst_24414 = (state_24416[(2)]);
var state_24416__$1 = state_24416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24416__$1,inst_24414);
} else {
if((state_val_24417 === (2))){
var inst_24386 = (state_24416[(10)]);
var inst_24388 = cljs.core.count.call(null,inst_24386);
var inst_24389 = (inst_24388 > (0));
var state_24416__$1 = state_24416;
if(cljs.core.truth_(inst_24389)){
var statearr_24425_24449 = state_24416__$1;
(statearr_24425_24449[(1)] = (4));

} else {
var statearr_24426_24450 = state_24416__$1;
(statearr_24426_24450[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24417 === (11))){
var inst_24386 = (state_24416[(10)]);
var inst_24405 = (state_24416[(2)]);
var tmp24424 = inst_24386;
var inst_24386__$1 = tmp24424;
var state_24416__$1 = (function (){var statearr_24427 = state_24416;
(statearr_24427[(10)] = inst_24386__$1);

(statearr_24427[(11)] = inst_24405);

return statearr_24427;
})();
var statearr_24428_24451 = state_24416__$1;
(statearr_24428_24451[(2)] = null);

(statearr_24428_24451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24417 === (9))){
var inst_24396 = (state_24416[(7)]);
var state_24416__$1 = state_24416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24416__$1,(11),out,inst_24396);
} else {
if((state_val_24417 === (5))){
var inst_24410 = cljs.core.async.close_BANG_.call(null,out);
var state_24416__$1 = state_24416;
var statearr_24429_24452 = state_24416__$1;
(statearr_24429_24452[(2)] = inst_24410);

(statearr_24429_24452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24417 === (10))){
var inst_24408 = (state_24416[(2)]);
var state_24416__$1 = state_24416;
var statearr_24430_24453 = state_24416__$1;
(statearr_24430_24453[(2)] = inst_24408);

(statearr_24430_24453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24417 === (8))){
var inst_24396 = (state_24416[(7)]);
var inst_24397 = (state_24416[(9)]);
var inst_24386 = (state_24416[(10)]);
var inst_24395 = (state_24416[(8)]);
var inst_24400 = (function (){var cs = inst_24386;
var vec__24391 = inst_24395;
var v = inst_24396;
var c = inst_24397;
return ((function (cs,vec__24391,v,c,inst_24396,inst_24397,inst_24386,inst_24395,state_val_24417,c__22324__auto___24444,out){
return (function (p1__24381_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24381_SHARP_);
});
;})(cs,vec__24391,v,c,inst_24396,inst_24397,inst_24386,inst_24395,state_val_24417,c__22324__auto___24444,out))
})();
var inst_24401 = cljs.core.filterv.call(null,inst_24400,inst_24386);
var inst_24386__$1 = inst_24401;
var state_24416__$1 = (function (){var statearr_24431 = state_24416;
(statearr_24431[(10)] = inst_24386__$1);

return statearr_24431;
})();
var statearr_24432_24454 = state_24416__$1;
(statearr_24432_24454[(2)] = null);

(statearr_24432_24454[(1)] = (2));


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
});})(c__22324__auto___24444,out))
;
return ((function (switch__22212__auto__,c__22324__auto___24444,out){
return (function() {
var cljs$core$async$state_machine__22213__auto__ = null;
var cljs$core$async$state_machine__22213__auto____0 = (function (){
var statearr_24436 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24436[(0)] = cljs$core$async$state_machine__22213__auto__);

(statearr_24436[(1)] = (1));

return statearr_24436;
});
var cljs$core$async$state_machine__22213__auto____1 = (function (state_24416){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_24416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e24437){if((e24437 instanceof Object)){
var ex__22216__auto__ = e24437;
var statearr_24438_24455 = state_24416;
(statearr_24438_24455[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24456 = state_24416;
state_24416 = G__24456;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$state_machine__22213__auto__ = function(state_24416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22213__auto____1.call(this,state_24416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22213__auto____0;
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22213__auto____1;
return cljs$core$async$state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___24444,out))
})();
var state__22326__auto__ = (function (){var statearr_24439 = f__22325__auto__.call(null);
(statearr_24439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___24444);

return statearr_24439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___24444,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24457 = [];
var len__21227__auto___24506 = arguments.length;
var i__21228__auto___24507 = (0);
while(true){
if((i__21228__auto___24507 < len__21227__auto___24506)){
args24457.push((arguments[i__21228__auto___24507]));

var G__24508 = (i__21228__auto___24507 + (1));
i__21228__auto___24507 = G__24508;
continue;
} else {
}
break;
}

var G__24459 = args24457.length;
switch (G__24459) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24457.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22324__auto___24510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___24510,out){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___24510,out){
return (function (state_24483){
var state_val_24484 = (state_24483[(1)]);
if((state_val_24484 === (7))){
var inst_24465 = (state_24483[(7)]);
var inst_24465__$1 = (state_24483[(2)]);
var inst_24466 = (inst_24465__$1 == null);
var inst_24467 = cljs.core.not.call(null,inst_24466);
var state_24483__$1 = (function (){var statearr_24485 = state_24483;
(statearr_24485[(7)] = inst_24465__$1);

return statearr_24485;
})();
if(inst_24467){
var statearr_24486_24511 = state_24483__$1;
(statearr_24486_24511[(1)] = (8));

} else {
var statearr_24487_24512 = state_24483__$1;
(statearr_24487_24512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (1))){
var inst_24460 = (0);
var state_24483__$1 = (function (){var statearr_24488 = state_24483;
(statearr_24488[(8)] = inst_24460);

return statearr_24488;
})();
var statearr_24489_24513 = state_24483__$1;
(statearr_24489_24513[(2)] = null);

(statearr_24489_24513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (4))){
var state_24483__$1 = state_24483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24483__$1,(7),ch);
} else {
if((state_val_24484 === (6))){
var inst_24478 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24490_24514 = state_24483__$1;
(statearr_24490_24514[(2)] = inst_24478);

(statearr_24490_24514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (3))){
var inst_24480 = (state_24483[(2)]);
var inst_24481 = cljs.core.async.close_BANG_.call(null,out);
var state_24483__$1 = (function (){var statearr_24491 = state_24483;
(statearr_24491[(9)] = inst_24480);

return statearr_24491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24483__$1,inst_24481);
} else {
if((state_val_24484 === (2))){
var inst_24460 = (state_24483[(8)]);
var inst_24462 = (inst_24460 < n);
var state_24483__$1 = state_24483;
if(cljs.core.truth_(inst_24462)){
var statearr_24492_24515 = state_24483__$1;
(statearr_24492_24515[(1)] = (4));

} else {
var statearr_24493_24516 = state_24483__$1;
(statearr_24493_24516[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (11))){
var inst_24460 = (state_24483[(8)]);
var inst_24470 = (state_24483[(2)]);
var inst_24471 = (inst_24460 + (1));
var inst_24460__$1 = inst_24471;
var state_24483__$1 = (function (){var statearr_24494 = state_24483;
(statearr_24494[(10)] = inst_24470);

(statearr_24494[(8)] = inst_24460__$1);

return statearr_24494;
})();
var statearr_24495_24517 = state_24483__$1;
(statearr_24495_24517[(2)] = null);

(statearr_24495_24517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (9))){
var state_24483__$1 = state_24483;
var statearr_24496_24518 = state_24483__$1;
(statearr_24496_24518[(2)] = null);

(statearr_24496_24518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (5))){
var state_24483__$1 = state_24483;
var statearr_24497_24519 = state_24483__$1;
(statearr_24497_24519[(2)] = null);

(statearr_24497_24519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (10))){
var inst_24475 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24498_24520 = state_24483__$1;
(statearr_24498_24520[(2)] = inst_24475);

(statearr_24498_24520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (8))){
var inst_24465 = (state_24483[(7)]);
var state_24483__$1 = state_24483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24483__$1,(11),out,inst_24465);
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
});})(c__22324__auto___24510,out))
;
return ((function (switch__22212__auto__,c__22324__auto___24510,out){
return (function() {
var cljs$core$async$state_machine__22213__auto__ = null;
var cljs$core$async$state_machine__22213__auto____0 = (function (){
var statearr_24502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24502[(0)] = cljs$core$async$state_machine__22213__auto__);

(statearr_24502[(1)] = (1));

return statearr_24502;
});
var cljs$core$async$state_machine__22213__auto____1 = (function (state_24483){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_24483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e24503){if((e24503 instanceof Object)){
var ex__22216__auto__ = e24503;
var statearr_24504_24521 = state_24483;
(statearr_24504_24521[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24522 = state_24483;
state_24483 = G__24522;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$state_machine__22213__auto__ = function(state_24483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22213__auto____1.call(this,state_24483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22213__auto____0;
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22213__auto____1;
return cljs$core$async$state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___24510,out))
})();
var state__22326__auto__ = (function (){var statearr_24505 = f__22325__auto__.call(null);
(statearr_24505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___24510);

return statearr_24505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___24510,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24530 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24530 = (function (map_LT_,f,ch,meta24531){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24531 = meta24531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24532,meta24531__$1){
var self__ = this;
var _24532__$1 = this;
return (new cljs.core.async.t_cljs$core$async24530(self__.map_LT_,self__.f,self__.ch,meta24531__$1));
});

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24532){
var self__ = this;
var _24532__$1 = this;
return self__.meta24531;
});

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24533 = (function (map_LT_,f,ch,meta24531,_,fn1,meta24534){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24531 = meta24531;
this._ = _;
this.fn1 = fn1;
this.meta24534 = meta24534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24535,meta24534__$1){
var self__ = this;
var _24535__$1 = this;
return (new cljs.core.async.t_cljs$core$async24533(self__.map_LT_,self__.f,self__.ch,self__.meta24531,self__._,self__.fn1,meta24534__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24535){
var self__ = this;
var _24535__$1 = this;
return self__.meta24534;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24523_SHARP_){
return f1.call(null,(((p1__24523_SHARP_ == null))?null:self__.f.call(null,p1__24523_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24533.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24531","meta24531",-2074726868,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24530","cljs.core.async/t_cljs$core$async24530",1772711482,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24534","meta24534",2140760504,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24533.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24533";

cljs.core.async.t_cljs$core$async24533.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20758__auto__,writer__20759__auto__,opt__20760__auto__){
return cljs.core._write.call(null,writer__20759__auto__,"cljs.core.async/t_cljs$core$async24533");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24533 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24533(map_LT___$1,f__$1,ch__$1,meta24531__$1,___$2,fn1__$1,meta24534){
return (new cljs.core.async.t_cljs$core$async24533(map_LT___$1,f__$1,ch__$1,meta24531__$1,___$2,fn1__$1,meta24534));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24533(self__.map_LT_,self__.f,self__.ch,self__.meta24531,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20140__auto__ = ret;
if(cljs.core.truth_(and__20140__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20140__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24531","meta24531",-2074726868,null)], null);
});

cljs.core.async.t_cljs$core$async24530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24530";

cljs.core.async.t_cljs$core$async24530.cljs$lang$ctorPrWriter = (function (this__20758__auto__,writer__20759__auto__,opt__20760__auto__){
return cljs.core._write.call(null,writer__20759__auto__,"cljs.core.async/t_cljs$core$async24530");
});

cljs.core.async.__GT_t_cljs$core$async24530 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24530(map_LT___$1,f__$1,ch__$1,meta24531){
return (new cljs.core.async.t_cljs$core$async24530(map_LT___$1,f__$1,ch__$1,meta24531));
});

}

return (new cljs.core.async.t_cljs$core$async24530(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24539 = (function (map_GT_,f,ch,meta24540){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24540 = meta24540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24541,meta24540__$1){
var self__ = this;
var _24541__$1 = this;
return (new cljs.core.async.t_cljs$core$async24539(self__.map_GT_,self__.f,self__.ch,meta24540__$1));
});

cljs.core.async.t_cljs$core$async24539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24541){
var self__ = this;
var _24541__$1 = this;
return self__.meta24540;
});

cljs.core.async.t_cljs$core$async24539.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24539.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24539.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24539.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24539.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24539.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24540","meta24540",-1747244462,null)], null);
});

cljs.core.async.t_cljs$core$async24539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24539";

cljs.core.async.t_cljs$core$async24539.cljs$lang$ctorPrWriter = (function (this__20758__auto__,writer__20759__auto__,opt__20760__auto__){
return cljs.core._write.call(null,writer__20759__auto__,"cljs.core.async/t_cljs$core$async24539");
});

cljs.core.async.__GT_t_cljs$core$async24539 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24539(map_GT___$1,f__$1,ch__$1,meta24540){
return (new cljs.core.async.t_cljs$core$async24539(map_GT___$1,f__$1,ch__$1,meta24540));
});

}

return (new cljs.core.async.t_cljs$core$async24539(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24545 = (function (filter_GT_,p,ch,meta24546){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24546 = meta24546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24547,meta24546__$1){
var self__ = this;
var _24547__$1 = this;
return (new cljs.core.async.t_cljs$core$async24545(self__.filter_GT_,self__.p,self__.ch,meta24546__$1));
});

cljs.core.async.t_cljs$core$async24545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24547){
var self__ = this;
var _24547__$1 = this;
return self__.meta24546;
});

cljs.core.async.t_cljs$core$async24545.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24545.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24545.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24545.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24545.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24545.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24545.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24546","meta24546",-994115435,null)], null);
});

cljs.core.async.t_cljs$core$async24545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24545";

cljs.core.async.t_cljs$core$async24545.cljs$lang$ctorPrWriter = (function (this__20758__auto__,writer__20759__auto__,opt__20760__auto__){
return cljs.core._write.call(null,writer__20759__auto__,"cljs.core.async/t_cljs$core$async24545");
});

cljs.core.async.__GT_t_cljs$core$async24545 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24545(filter_GT___$1,p__$1,ch__$1,meta24546){
return (new cljs.core.async.t_cljs$core$async24545(filter_GT___$1,p__$1,ch__$1,meta24546));
});

}

return (new cljs.core.async.t_cljs$core$async24545(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24548 = [];
var len__21227__auto___24592 = arguments.length;
var i__21228__auto___24593 = (0);
while(true){
if((i__21228__auto___24593 < len__21227__auto___24592)){
args24548.push((arguments[i__21228__auto___24593]));

var G__24594 = (i__21228__auto___24593 + (1));
i__21228__auto___24593 = G__24594;
continue;
} else {
}
break;
}

var G__24550 = args24548.length;
switch (G__24550) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24548.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22324__auto___24596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___24596,out){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___24596,out){
return (function (state_24571){
var state_val_24572 = (state_24571[(1)]);
if((state_val_24572 === (7))){
var inst_24567 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24573_24597 = state_24571__$1;
(statearr_24573_24597[(2)] = inst_24567);

(statearr_24573_24597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (1))){
var state_24571__$1 = state_24571;
var statearr_24574_24598 = state_24571__$1;
(statearr_24574_24598[(2)] = null);

(statearr_24574_24598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (4))){
var inst_24553 = (state_24571[(7)]);
var inst_24553__$1 = (state_24571[(2)]);
var inst_24554 = (inst_24553__$1 == null);
var state_24571__$1 = (function (){var statearr_24575 = state_24571;
(statearr_24575[(7)] = inst_24553__$1);

return statearr_24575;
})();
if(cljs.core.truth_(inst_24554)){
var statearr_24576_24599 = state_24571__$1;
(statearr_24576_24599[(1)] = (5));

} else {
var statearr_24577_24600 = state_24571__$1;
(statearr_24577_24600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (6))){
var inst_24553 = (state_24571[(7)]);
var inst_24558 = p.call(null,inst_24553);
var state_24571__$1 = state_24571;
if(cljs.core.truth_(inst_24558)){
var statearr_24578_24601 = state_24571__$1;
(statearr_24578_24601[(1)] = (8));

} else {
var statearr_24579_24602 = state_24571__$1;
(statearr_24579_24602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (3))){
var inst_24569 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24571__$1,inst_24569);
} else {
if((state_val_24572 === (2))){
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24571__$1,(4),ch);
} else {
if((state_val_24572 === (11))){
var inst_24561 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24580_24603 = state_24571__$1;
(statearr_24580_24603[(2)] = inst_24561);

(statearr_24580_24603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (9))){
var state_24571__$1 = state_24571;
var statearr_24581_24604 = state_24571__$1;
(statearr_24581_24604[(2)] = null);

(statearr_24581_24604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (5))){
var inst_24556 = cljs.core.async.close_BANG_.call(null,out);
var state_24571__$1 = state_24571;
var statearr_24582_24605 = state_24571__$1;
(statearr_24582_24605[(2)] = inst_24556);

(statearr_24582_24605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (10))){
var inst_24564 = (state_24571[(2)]);
var state_24571__$1 = (function (){var statearr_24583 = state_24571;
(statearr_24583[(8)] = inst_24564);

return statearr_24583;
})();
var statearr_24584_24606 = state_24571__$1;
(statearr_24584_24606[(2)] = null);

(statearr_24584_24606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (8))){
var inst_24553 = (state_24571[(7)]);
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24571__$1,(11),out,inst_24553);
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
});})(c__22324__auto___24596,out))
;
return ((function (switch__22212__auto__,c__22324__auto___24596,out){
return (function() {
var cljs$core$async$state_machine__22213__auto__ = null;
var cljs$core$async$state_machine__22213__auto____0 = (function (){
var statearr_24588 = [null,null,null,null,null,null,null,null,null];
(statearr_24588[(0)] = cljs$core$async$state_machine__22213__auto__);

(statearr_24588[(1)] = (1));

return statearr_24588;
});
var cljs$core$async$state_machine__22213__auto____1 = (function (state_24571){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_24571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e24589){if((e24589 instanceof Object)){
var ex__22216__auto__ = e24589;
var statearr_24590_24607 = state_24571;
(statearr_24590_24607[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24608 = state_24571;
state_24571 = G__24608;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$state_machine__22213__auto__ = function(state_24571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22213__auto____1.call(this,state_24571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22213__auto____0;
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22213__auto____1;
return cljs$core$async$state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___24596,out))
})();
var state__22326__auto__ = (function (){var statearr_24591 = f__22325__auto__.call(null);
(statearr_24591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___24596);

return statearr_24591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___24596,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24609 = [];
var len__21227__auto___24612 = arguments.length;
var i__21228__auto___24613 = (0);
while(true){
if((i__21228__auto___24613 < len__21227__auto___24612)){
args24609.push((arguments[i__21228__auto___24613]));

var G__24614 = (i__21228__auto___24613 + (1));
i__21228__auto___24613 = G__24614;
continue;
} else {
}
break;
}

var G__24611 = args24609.length;
switch (G__24611) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24609.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22324__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto__){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto__){
return (function (state_24781){
var state_val_24782 = (state_24781[(1)]);
if((state_val_24782 === (7))){
var inst_24777 = (state_24781[(2)]);
var state_24781__$1 = state_24781;
var statearr_24783_24824 = state_24781__$1;
(statearr_24783_24824[(2)] = inst_24777);

(statearr_24783_24824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (20))){
var inst_24747 = (state_24781[(7)]);
var inst_24758 = (state_24781[(2)]);
var inst_24759 = cljs.core.next.call(null,inst_24747);
var inst_24733 = inst_24759;
var inst_24734 = null;
var inst_24735 = (0);
var inst_24736 = (0);
var state_24781__$1 = (function (){var statearr_24784 = state_24781;
(statearr_24784[(8)] = inst_24758);

(statearr_24784[(9)] = inst_24735);

(statearr_24784[(10)] = inst_24733);

(statearr_24784[(11)] = inst_24734);

(statearr_24784[(12)] = inst_24736);

return statearr_24784;
})();
var statearr_24785_24825 = state_24781__$1;
(statearr_24785_24825[(2)] = null);

(statearr_24785_24825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (1))){
var state_24781__$1 = state_24781;
var statearr_24786_24826 = state_24781__$1;
(statearr_24786_24826[(2)] = null);

(statearr_24786_24826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (4))){
var inst_24722 = (state_24781[(13)]);
var inst_24722__$1 = (state_24781[(2)]);
var inst_24723 = (inst_24722__$1 == null);
var state_24781__$1 = (function (){var statearr_24787 = state_24781;
(statearr_24787[(13)] = inst_24722__$1);

return statearr_24787;
})();
if(cljs.core.truth_(inst_24723)){
var statearr_24788_24827 = state_24781__$1;
(statearr_24788_24827[(1)] = (5));

} else {
var statearr_24789_24828 = state_24781__$1;
(statearr_24789_24828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (15))){
var state_24781__$1 = state_24781;
var statearr_24793_24829 = state_24781__$1;
(statearr_24793_24829[(2)] = null);

(statearr_24793_24829[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (21))){
var state_24781__$1 = state_24781;
var statearr_24794_24830 = state_24781__$1;
(statearr_24794_24830[(2)] = null);

(statearr_24794_24830[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (13))){
var inst_24735 = (state_24781[(9)]);
var inst_24733 = (state_24781[(10)]);
var inst_24734 = (state_24781[(11)]);
var inst_24736 = (state_24781[(12)]);
var inst_24743 = (state_24781[(2)]);
var inst_24744 = (inst_24736 + (1));
var tmp24790 = inst_24735;
var tmp24791 = inst_24733;
var tmp24792 = inst_24734;
var inst_24733__$1 = tmp24791;
var inst_24734__$1 = tmp24792;
var inst_24735__$1 = tmp24790;
var inst_24736__$1 = inst_24744;
var state_24781__$1 = (function (){var statearr_24795 = state_24781;
(statearr_24795[(9)] = inst_24735__$1);

(statearr_24795[(14)] = inst_24743);

(statearr_24795[(10)] = inst_24733__$1);

(statearr_24795[(11)] = inst_24734__$1);

(statearr_24795[(12)] = inst_24736__$1);

return statearr_24795;
})();
var statearr_24796_24831 = state_24781__$1;
(statearr_24796_24831[(2)] = null);

(statearr_24796_24831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (22))){
var state_24781__$1 = state_24781;
var statearr_24797_24832 = state_24781__$1;
(statearr_24797_24832[(2)] = null);

(statearr_24797_24832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (6))){
var inst_24722 = (state_24781[(13)]);
var inst_24731 = f.call(null,inst_24722);
var inst_24732 = cljs.core.seq.call(null,inst_24731);
var inst_24733 = inst_24732;
var inst_24734 = null;
var inst_24735 = (0);
var inst_24736 = (0);
var state_24781__$1 = (function (){var statearr_24798 = state_24781;
(statearr_24798[(9)] = inst_24735);

(statearr_24798[(10)] = inst_24733);

(statearr_24798[(11)] = inst_24734);

(statearr_24798[(12)] = inst_24736);

return statearr_24798;
})();
var statearr_24799_24833 = state_24781__$1;
(statearr_24799_24833[(2)] = null);

(statearr_24799_24833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (17))){
var inst_24747 = (state_24781[(7)]);
var inst_24751 = cljs.core.chunk_first.call(null,inst_24747);
var inst_24752 = cljs.core.chunk_rest.call(null,inst_24747);
var inst_24753 = cljs.core.count.call(null,inst_24751);
var inst_24733 = inst_24752;
var inst_24734 = inst_24751;
var inst_24735 = inst_24753;
var inst_24736 = (0);
var state_24781__$1 = (function (){var statearr_24800 = state_24781;
(statearr_24800[(9)] = inst_24735);

(statearr_24800[(10)] = inst_24733);

(statearr_24800[(11)] = inst_24734);

(statearr_24800[(12)] = inst_24736);

return statearr_24800;
})();
var statearr_24801_24834 = state_24781__$1;
(statearr_24801_24834[(2)] = null);

(statearr_24801_24834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (3))){
var inst_24779 = (state_24781[(2)]);
var state_24781__$1 = state_24781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24781__$1,inst_24779);
} else {
if((state_val_24782 === (12))){
var inst_24767 = (state_24781[(2)]);
var state_24781__$1 = state_24781;
var statearr_24802_24835 = state_24781__$1;
(statearr_24802_24835[(2)] = inst_24767);

(statearr_24802_24835[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (2))){
var state_24781__$1 = state_24781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24781__$1,(4),in$);
} else {
if((state_val_24782 === (23))){
var inst_24775 = (state_24781[(2)]);
var state_24781__$1 = state_24781;
var statearr_24803_24836 = state_24781__$1;
(statearr_24803_24836[(2)] = inst_24775);

(statearr_24803_24836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (19))){
var inst_24762 = (state_24781[(2)]);
var state_24781__$1 = state_24781;
var statearr_24804_24837 = state_24781__$1;
(statearr_24804_24837[(2)] = inst_24762);

(statearr_24804_24837[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (11))){
var inst_24747 = (state_24781[(7)]);
var inst_24733 = (state_24781[(10)]);
var inst_24747__$1 = cljs.core.seq.call(null,inst_24733);
var state_24781__$1 = (function (){var statearr_24805 = state_24781;
(statearr_24805[(7)] = inst_24747__$1);

return statearr_24805;
})();
if(inst_24747__$1){
var statearr_24806_24838 = state_24781__$1;
(statearr_24806_24838[(1)] = (14));

} else {
var statearr_24807_24839 = state_24781__$1;
(statearr_24807_24839[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (9))){
var inst_24769 = (state_24781[(2)]);
var inst_24770 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24781__$1 = (function (){var statearr_24808 = state_24781;
(statearr_24808[(15)] = inst_24769);

return statearr_24808;
})();
if(cljs.core.truth_(inst_24770)){
var statearr_24809_24840 = state_24781__$1;
(statearr_24809_24840[(1)] = (21));

} else {
var statearr_24810_24841 = state_24781__$1;
(statearr_24810_24841[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (5))){
var inst_24725 = cljs.core.async.close_BANG_.call(null,out);
var state_24781__$1 = state_24781;
var statearr_24811_24842 = state_24781__$1;
(statearr_24811_24842[(2)] = inst_24725);

(statearr_24811_24842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (14))){
var inst_24747 = (state_24781[(7)]);
var inst_24749 = cljs.core.chunked_seq_QMARK_.call(null,inst_24747);
var state_24781__$1 = state_24781;
if(inst_24749){
var statearr_24812_24843 = state_24781__$1;
(statearr_24812_24843[(1)] = (17));

} else {
var statearr_24813_24844 = state_24781__$1;
(statearr_24813_24844[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (16))){
var inst_24765 = (state_24781[(2)]);
var state_24781__$1 = state_24781;
var statearr_24814_24845 = state_24781__$1;
(statearr_24814_24845[(2)] = inst_24765);

(statearr_24814_24845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (10))){
var inst_24734 = (state_24781[(11)]);
var inst_24736 = (state_24781[(12)]);
var inst_24741 = cljs.core._nth.call(null,inst_24734,inst_24736);
var state_24781__$1 = state_24781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24781__$1,(13),out,inst_24741);
} else {
if((state_val_24782 === (18))){
var inst_24747 = (state_24781[(7)]);
var inst_24756 = cljs.core.first.call(null,inst_24747);
var state_24781__$1 = state_24781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24781__$1,(20),out,inst_24756);
} else {
if((state_val_24782 === (8))){
var inst_24735 = (state_24781[(9)]);
var inst_24736 = (state_24781[(12)]);
var inst_24738 = (inst_24736 < inst_24735);
var inst_24739 = inst_24738;
var state_24781__$1 = state_24781;
if(cljs.core.truth_(inst_24739)){
var statearr_24815_24846 = state_24781__$1;
(statearr_24815_24846[(1)] = (10));

} else {
var statearr_24816_24847 = state_24781__$1;
(statearr_24816_24847[(1)] = (11));

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
});})(c__22324__auto__))
;
return ((function (switch__22212__auto__,c__22324__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22213__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22213__auto____0 = (function (){
var statearr_24820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24820[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22213__auto__);

(statearr_24820[(1)] = (1));

return statearr_24820;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22213__auto____1 = (function (state_24781){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_24781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e24821){if((e24821 instanceof Object)){
var ex__22216__auto__ = e24821;
var statearr_24822_24848 = state_24781;
(statearr_24822_24848[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24849 = state_24781;
state_24781 = G__24849;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22213__auto__ = function(state_24781){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22213__auto____1.call(this,state_24781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22213__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22213__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto__))
})();
var state__22326__auto__ = (function (){var statearr_24823 = f__22325__auto__.call(null);
(statearr_24823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto__);

return statearr_24823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto__))
);

return c__22324__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24850 = [];
var len__21227__auto___24853 = arguments.length;
var i__21228__auto___24854 = (0);
while(true){
if((i__21228__auto___24854 < len__21227__auto___24853)){
args24850.push((arguments[i__21228__auto___24854]));

var G__24855 = (i__21228__auto___24854 + (1));
i__21228__auto___24854 = G__24855;
continue;
} else {
}
break;
}

var G__24852 = args24850.length;
switch (G__24852) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24850.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24857 = [];
var len__21227__auto___24860 = arguments.length;
var i__21228__auto___24861 = (0);
while(true){
if((i__21228__auto___24861 < len__21227__auto___24860)){
args24857.push((arguments[i__21228__auto___24861]));

var G__24862 = (i__21228__auto___24861 + (1));
i__21228__auto___24861 = G__24862;
continue;
} else {
}
break;
}

var G__24859 = args24857.length;
switch (G__24859) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24857.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24864 = [];
var len__21227__auto___24915 = arguments.length;
var i__21228__auto___24916 = (0);
while(true){
if((i__21228__auto___24916 < len__21227__auto___24915)){
args24864.push((arguments[i__21228__auto___24916]));

var G__24917 = (i__21228__auto___24916 + (1));
i__21228__auto___24916 = G__24917;
continue;
} else {
}
break;
}

var G__24866 = args24864.length;
switch (G__24866) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24864.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22324__auto___24919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___24919,out){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___24919,out){
return (function (state_24890){
var state_val_24891 = (state_24890[(1)]);
if((state_val_24891 === (7))){
var inst_24885 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24892_24920 = state_24890__$1;
(statearr_24892_24920[(2)] = inst_24885);

(statearr_24892_24920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (1))){
var inst_24867 = null;
var state_24890__$1 = (function (){var statearr_24893 = state_24890;
(statearr_24893[(7)] = inst_24867);

return statearr_24893;
})();
var statearr_24894_24921 = state_24890__$1;
(statearr_24894_24921[(2)] = null);

(statearr_24894_24921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (4))){
var inst_24870 = (state_24890[(8)]);
var inst_24870__$1 = (state_24890[(2)]);
var inst_24871 = (inst_24870__$1 == null);
var inst_24872 = cljs.core.not.call(null,inst_24871);
var state_24890__$1 = (function (){var statearr_24895 = state_24890;
(statearr_24895[(8)] = inst_24870__$1);

return statearr_24895;
})();
if(inst_24872){
var statearr_24896_24922 = state_24890__$1;
(statearr_24896_24922[(1)] = (5));

} else {
var statearr_24897_24923 = state_24890__$1;
(statearr_24897_24923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (6))){
var state_24890__$1 = state_24890;
var statearr_24898_24924 = state_24890__$1;
(statearr_24898_24924[(2)] = null);

(statearr_24898_24924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (3))){
var inst_24887 = (state_24890[(2)]);
var inst_24888 = cljs.core.async.close_BANG_.call(null,out);
var state_24890__$1 = (function (){var statearr_24899 = state_24890;
(statearr_24899[(9)] = inst_24887);

return statearr_24899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24890__$1,inst_24888);
} else {
if((state_val_24891 === (2))){
var state_24890__$1 = state_24890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24890__$1,(4),ch);
} else {
if((state_val_24891 === (11))){
var inst_24870 = (state_24890[(8)]);
var inst_24879 = (state_24890[(2)]);
var inst_24867 = inst_24870;
var state_24890__$1 = (function (){var statearr_24900 = state_24890;
(statearr_24900[(10)] = inst_24879);

(statearr_24900[(7)] = inst_24867);

return statearr_24900;
})();
var statearr_24901_24925 = state_24890__$1;
(statearr_24901_24925[(2)] = null);

(statearr_24901_24925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (9))){
var inst_24870 = (state_24890[(8)]);
var state_24890__$1 = state_24890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24890__$1,(11),out,inst_24870);
} else {
if((state_val_24891 === (5))){
var inst_24870 = (state_24890[(8)]);
var inst_24867 = (state_24890[(7)]);
var inst_24874 = cljs.core._EQ_.call(null,inst_24870,inst_24867);
var state_24890__$1 = state_24890;
if(inst_24874){
var statearr_24903_24926 = state_24890__$1;
(statearr_24903_24926[(1)] = (8));

} else {
var statearr_24904_24927 = state_24890__$1;
(statearr_24904_24927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (10))){
var inst_24882 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24905_24928 = state_24890__$1;
(statearr_24905_24928[(2)] = inst_24882);

(statearr_24905_24928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (8))){
var inst_24867 = (state_24890[(7)]);
var tmp24902 = inst_24867;
var inst_24867__$1 = tmp24902;
var state_24890__$1 = (function (){var statearr_24906 = state_24890;
(statearr_24906[(7)] = inst_24867__$1);

return statearr_24906;
})();
var statearr_24907_24929 = state_24890__$1;
(statearr_24907_24929[(2)] = null);

(statearr_24907_24929[(1)] = (2));


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
});})(c__22324__auto___24919,out))
;
return ((function (switch__22212__auto__,c__22324__auto___24919,out){
return (function() {
var cljs$core$async$state_machine__22213__auto__ = null;
var cljs$core$async$state_machine__22213__auto____0 = (function (){
var statearr_24911 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24911[(0)] = cljs$core$async$state_machine__22213__auto__);

(statearr_24911[(1)] = (1));

return statearr_24911;
});
var cljs$core$async$state_machine__22213__auto____1 = (function (state_24890){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_24890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e24912){if((e24912 instanceof Object)){
var ex__22216__auto__ = e24912;
var statearr_24913_24930 = state_24890;
(statearr_24913_24930[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24931 = state_24890;
state_24890 = G__24931;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$state_machine__22213__auto__ = function(state_24890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22213__auto____1.call(this,state_24890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22213__auto____0;
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22213__auto____1;
return cljs$core$async$state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___24919,out))
})();
var state__22326__auto__ = (function (){var statearr_24914 = f__22325__auto__.call(null);
(statearr_24914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___24919);

return statearr_24914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___24919,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24932 = [];
var len__21227__auto___25002 = arguments.length;
var i__21228__auto___25003 = (0);
while(true){
if((i__21228__auto___25003 < len__21227__auto___25002)){
args24932.push((arguments[i__21228__auto___25003]));

var G__25004 = (i__21228__auto___25003 + (1));
i__21228__auto___25003 = G__25004;
continue;
} else {
}
break;
}

var G__24934 = args24932.length;
switch (G__24934) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24932.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22324__auto___25006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___25006,out){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___25006,out){
return (function (state_24972){
var state_val_24973 = (state_24972[(1)]);
if((state_val_24973 === (7))){
var inst_24968 = (state_24972[(2)]);
var state_24972__$1 = state_24972;
var statearr_24974_25007 = state_24972__$1;
(statearr_24974_25007[(2)] = inst_24968);

(statearr_24974_25007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24973 === (1))){
var inst_24935 = (new Array(n));
var inst_24936 = inst_24935;
var inst_24937 = (0);
var state_24972__$1 = (function (){var statearr_24975 = state_24972;
(statearr_24975[(7)] = inst_24936);

(statearr_24975[(8)] = inst_24937);

return statearr_24975;
})();
var statearr_24976_25008 = state_24972__$1;
(statearr_24976_25008[(2)] = null);

(statearr_24976_25008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24973 === (4))){
var inst_24940 = (state_24972[(9)]);
var inst_24940__$1 = (state_24972[(2)]);
var inst_24941 = (inst_24940__$1 == null);
var inst_24942 = cljs.core.not.call(null,inst_24941);
var state_24972__$1 = (function (){var statearr_24977 = state_24972;
(statearr_24977[(9)] = inst_24940__$1);

return statearr_24977;
})();
if(inst_24942){
var statearr_24978_25009 = state_24972__$1;
(statearr_24978_25009[(1)] = (5));

} else {
var statearr_24979_25010 = state_24972__$1;
(statearr_24979_25010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24973 === (15))){
var inst_24962 = (state_24972[(2)]);
var state_24972__$1 = state_24972;
var statearr_24980_25011 = state_24972__$1;
(statearr_24980_25011[(2)] = inst_24962);

(statearr_24980_25011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24973 === (13))){
var state_24972__$1 = state_24972;
var statearr_24981_25012 = state_24972__$1;
(statearr_24981_25012[(2)] = null);

(statearr_24981_25012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24973 === (6))){
var inst_24937 = (state_24972[(8)]);
var inst_24958 = (inst_24937 > (0));
var state_24972__$1 = state_24972;
if(cljs.core.truth_(inst_24958)){
var statearr_24982_25013 = state_24972__$1;
(statearr_24982_25013[(1)] = (12));

} else {
var statearr_24983_25014 = state_24972__$1;
(statearr_24983_25014[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24973 === (3))){
var inst_24970 = (state_24972[(2)]);
var state_24972__$1 = state_24972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24972__$1,inst_24970);
} else {
if((state_val_24973 === (12))){
var inst_24936 = (state_24972[(7)]);
var inst_24960 = cljs.core.vec.call(null,inst_24936);
var state_24972__$1 = state_24972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24972__$1,(15),out,inst_24960);
} else {
if((state_val_24973 === (2))){
var state_24972__$1 = state_24972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24972__$1,(4),ch);
} else {
if((state_val_24973 === (11))){
var inst_24952 = (state_24972[(2)]);
var inst_24953 = (new Array(n));
var inst_24936 = inst_24953;
var inst_24937 = (0);
var state_24972__$1 = (function (){var statearr_24984 = state_24972;
(statearr_24984[(7)] = inst_24936);

(statearr_24984[(10)] = inst_24952);

(statearr_24984[(8)] = inst_24937);

return statearr_24984;
})();
var statearr_24985_25015 = state_24972__$1;
(statearr_24985_25015[(2)] = null);

(statearr_24985_25015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24973 === (9))){
var inst_24936 = (state_24972[(7)]);
var inst_24950 = cljs.core.vec.call(null,inst_24936);
var state_24972__$1 = state_24972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24972__$1,(11),out,inst_24950);
} else {
if((state_val_24973 === (5))){
var inst_24936 = (state_24972[(7)]);
var inst_24940 = (state_24972[(9)]);
var inst_24937 = (state_24972[(8)]);
var inst_24945 = (state_24972[(11)]);
var inst_24944 = (inst_24936[inst_24937] = inst_24940);
var inst_24945__$1 = (inst_24937 + (1));
var inst_24946 = (inst_24945__$1 < n);
var state_24972__$1 = (function (){var statearr_24986 = state_24972;
(statearr_24986[(12)] = inst_24944);

(statearr_24986[(11)] = inst_24945__$1);

return statearr_24986;
})();
if(cljs.core.truth_(inst_24946)){
var statearr_24987_25016 = state_24972__$1;
(statearr_24987_25016[(1)] = (8));

} else {
var statearr_24988_25017 = state_24972__$1;
(statearr_24988_25017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24973 === (14))){
var inst_24965 = (state_24972[(2)]);
var inst_24966 = cljs.core.async.close_BANG_.call(null,out);
var state_24972__$1 = (function (){var statearr_24990 = state_24972;
(statearr_24990[(13)] = inst_24965);

return statearr_24990;
})();
var statearr_24991_25018 = state_24972__$1;
(statearr_24991_25018[(2)] = inst_24966);

(statearr_24991_25018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24973 === (10))){
var inst_24956 = (state_24972[(2)]);
var state_24972__$1 = state_24972;
var statearr_24992_25019 = state_24972__$1;
(statearr_24992_25019[(2)] = inst_24956);

(statearr_24992_25019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24973 === (8))){
var inst_24936 = (state_24972[(7)]);
var inst_24945 = (state_24972[(11)]);
var tmp24989 = inst_24936;
var inst_24936__$1 = tmp24989;
var inst_24937 = inst_24945;
var state_24972__$1 = (function (){var statearr_24993 = state_24972;
(statearr_24993[(7)] = inst_24936__$1);

(statearr_24993[(8)] = inst_24937);

return statearr_24993;
})();
var statearr_24994_25020 = state_24972__$1;
(statearr_24994_25020[(2)] = null);

(statearr_24994_25020[(1)] = (2));


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
});})(c__22324__auto___25006,out))
;
return ((function (switch__22212__auto__,c__22324__auto___25006,out){
return (function() {
var cljs$core$async$state_machine__22213__auto__ = null;
var cljs$core$async$state_machine__22213__auto____0 = (function (){
var statearr_24998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24998[(0)] = cljs$core$async$state_machine__22213__auto__);

(statearr_24998[(1)] = (1));

return statearr_24998;
});
var cljs$core$async$state_machine__22213__auto____1 = (function (state_24972){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_24972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e24999){if((e24999 instanceof Object)){
var ex__22216__auto__ = e24999;
var statearr_25000_25021 = state_24972;
(statearr_25000_25021[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25022 = state_24972;
state_24972 = G__25022;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$state_machine__22213__auto__ = function(state_24972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22213__auto____1.call(this,state_24972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22213__auto____0;
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22213__auto____1;
return cljs$core$async$state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___25006,out))
})();
var state__22326__auto__ = (function (){var statearr_25001 = f__22325__auto__.call(null);
(statearr_25001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___25006);

return statearr_25001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___25006,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25023 = [];
var len__21227__auto___25097 = arguments.length;
var i__21228__auto___25098 = (0);
while(true){
if((i__21228__auto___25098 < len__21227__auto___25097)){
args25023.push((arguments[i__21228__auto___25098]));

var G__25099 = (i__21228__auto___25098 + (1));
i__21228__auto___25098 = G__25099;
continue;
} else {
}
break;
}

var G__25025 = args25023.length;
switch (G__25025) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25023.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22324__auto___25101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___25101,out){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___25101,out){
return (function (state_25067){
var state_val_25068 = (state_25067[(1)]);
if((state_val_25068 === (7))){
var inst_25063 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25069_25102 = state_25067__$1;
(statearr_25069_25102[(2)] = inst_25063);

(statearr_25069_25102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (1))){
var inst_25026 = [];
var inst_25027 = inst_25026;
var inst_25028 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25067__$1 = (function (){var statearr_25070 = state_25067;
(statearr_25070[(7)] = inst_25028);

(statearr_25070[(8)] = inst_25027);

return statearr_25070;
})();
var statearr_25071_25103 = state_25067__$1;
(statearr_25071_25103[(2)] = null);

(statearr_25071_25103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (4))){
var inst_25031 = (state_25067[(9)]);
var inst_25031__$1 = (state_25067[(2)]);
var inst_25032 = (inst_25031__$1 == null);
var inst_25033 = cljs.core.not.call(null,inst_25032);
var state_25067__$1 = (function (){var statearr_25072 = state_25067;
(statearr_25072[(9)] = inst_25031__$1);

return statearr_25072;
})();
if(inst_25033){
var statearr_25073_25104 = state_25067__$1;
(statearr_25073_25104[(1)] = (5));

} else {
var statearr_25074_25105 = state_25067__$1;
(statearr_25074_25105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (15))){
var inst_25057 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25075_25106 = state_25067__$1;
(statearr_25075_25106[(2)] = inst_25057);

(statearr_25075_25106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (13))){
var state_25067__$1 = state_25067;
var statearr_25076_25107 = state_25067__$1;
(statearr_25076_25107[(2)] = null);

(statearr_25076_25107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (6))){
var inst_25027 = (state_25067[(8)]);
var inst_25052 = inst_25027.length;
var inst_25053 = (inst_25052 > (0));
var state_25067__$1 = state_25067;
if(cljs.core.truth_(inst_25053)){
var statearr_25077_25108 = state_25067__$1;
(statearr_25077_25108[(1)] = (12));

} else {
var statearr_25078_25109 = state_25067__$1;
(statearr_25078_25109[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (3))){
var inst_25065 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25067__$1,inst_25065);
} else {
if((state_val_25068 === (12))){
var inst_25027 = (state_25067[(8)]);
var inst_25055 = cljs.core.vec.call(null,inst_25027);
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25067__$1,(15),out,inst_25055);
} else {
if((state_val_25068 === (2))){
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25067__$1,(4),ch);
} else {
if((state_val_25068 === (11))){
var inst_25031 = (state_25067[(9)]);
var inst_25035 = (state_25067[(10)]);
var inst_25045 = (state_25067[(2)]);
var inst_25046 = [];
var inst_25047 = inst_25046.push(inst_25031);
var inst_25027 = inst_25046;
var inst_25028 = inst_25035;
var state_25067__$1 = (function (){var statearr_25079 = state_25067;
(statearr_25079[(7)] = inst_25028);

(statearr_25079[(11)] = inst_25047);

(statearr_25079[(8)] = inst_25027);

(statearr_25079[(12)] = inst_25045);

return statearr_25079;
})();
var statearr_25080_25110 = state_25067__$1;
(statearr_25080_25110[(2)] = null);

(statearr_25080_25110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (9))){
var inst_25027 = (state_25067[(8)]);
var inst_25043 = cljs.core.vec.call(null,inst_25027);
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25067__$1,(11),out,inst_25043);
} else {
if((state_val_25068 === (5))){
var inst_25031 = (state_25067[(9)]);
var inst_25028 = (state_25067[(7)]);
var inst_25035 = (state_25067[(10)]);
var inst_25035__$1 = f.call(null,inst_25031);
var inst_25036 = cljs.core._EQ_.call(null,inst_25035__$1,inst_25028);
var inst_25037 = cljs.core.keyword_identical_QMARK_.call(null,inst_25028,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25038 = (inst_25036) || (inst_25037);
var state_25067__$1 = (function (){var statearr_25081 = state_25067;
(statearr_25081[(10)] = inst_25035__$1);

return statearr_25081;
})();
if(cljs.core.truth_(inst_25038)){
var statearr_25082_25111 = state_25067__$1;
(statearr_25082_25111[(1)] = (8));

} else {
var statearr_25083_25112 = state_25067__$1;
(statearr_25083_25112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (14))){
var inst_25060 = (state_25067[(2)]);
var inst_25061 = cljs.core.async.close_BANG_.call(null,out);
var state_25067__$1 = (function (){var statearr_25085 = state_25067;
(statearr_25085[(13)] = inst_25060);

return statearr_25085;
})();
var statearr_25086_25113 = state_25067__$1;
(statearr_25086_25113[(2)] = inst_25061);

(statearr_25086_25113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (10))){
var inst_25050 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25087_25114 = state_25067__$1;
(statearr_25087_25114[(2)] = inst_25050);

(statearr_25087_25114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (8))){
var inst_25031 = (state_25067[(9)]);
var inst_25035 = (state_25067[(10)]);
var inst_25027 = (state_25067[(8)]);
var inst_25040 = inst_25027.push(inst_25031);
var tmp25084 = inst_25027;
var inst_25027__$1 = tmp25084;
var inst_25028 = inst_25035;
var state_25067__$1 = (function (){var statearr_25088 = state_25067;
(statearr_25088[(7)] = inst_25028);

(statearr_25088[(14)] = inst_25040);

(statearr_25088[(8)] = inst_25027__$1);

return statearr_25088;
})();
var statearr_25089_25115 = state_25067__$1;
(statearr_25089_25115[(2)] = null);

(statearr_25089_25115[(1)] = (2));


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
});})(c__22324__auto___25101,out))
;
return ((function (switch__22212__auto__,c__22324__auto___25101,out){
return (function() {
var cljs$core$async$state_machine__22213__auto__ = null;
var cljs$core$async$state_machine__22213__auto____0 = (function (){
var statearr_25093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25093[(0)] = cljs$core$async$state_machine__22213__auto__);

(statearr_25093[(1)] = (1));

return statearr_25093;
});
var cljs$core$async$state_machine__22213__auto____1 = (function (state_25067){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_25067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e25094){if((e25094 instanceof Object)){
var ex__22216__auto__ = e25094;
var statearr_25095_25116 = state_25067;
(statearr_25095_25116[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25117 = state_25067;
state_25067 = G__25117;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
cljs$core$async$state_machine__22213__auto__ = function(state_25067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22213__auto____1.call(this,state_25067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22213__auto____0;
cljs$core$async$state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22213__auto____1;
return cljs$core$async$state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___25101,out))
})();
var state__22326__auto__ = (function (){var statearr_25096 = f__22325__auto__.call(null);
(statearr_25096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___25101);

return statearr_25096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___25101,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1471781536806