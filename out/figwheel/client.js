// Compiled by ClojureScript 1.9.225 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args29765 = [];
var len__21227__auto___29768 = arguments.length;
var i__21228__auto___29769 = (0);
while(true){
if((i__21228__auto___29769 < len__21227__auto___29768)){
args29765.push((arguments[i__21228__auto___29769]));

var G__29770 = (i__21228__auto___29769 + (1));
i__21228__auto___29769 = G__29770;
continue;
} else {
}
break;
}

var G__29767 = args29765.length;
switch (G__29767) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29765.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21234__auto__ = [];
var len__21227__auto___29773 = arguments.length;
var i__21228__auto___29774 = (0);
while(true){
if((i__21228__auto___29774 < len__21227__auto___29773)){
args__21234__auto__.push((arguments[i__21228__auto___29774]));

var G__29775 = (i__21228__auto___29774 + (1));
i__21228__auto___29774 = G__29775;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29772){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29772));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21234__auto__ = [];
var len__21227__auto___29777 = arguments.length;
var i__21228__auto___29778 = (0);
while(true){
if((i__21228__auto___29778 < len__21227__auto___29777)){
args__21234__auto__.push((arguments[i__21228__auto___29778]));

var G__29779 = (i__21228__auto___29778 + (1));
i__21228__auto___29778 = G__29779;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29776){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29776));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__29780 = cljs.core._EQ_;
var expr__29781 = (function (){var or__20152__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e29784){if((e29784 instanceof Error)){
var e = e29784;
return false;
} else {
throw e29784;

}
}})();
if(cljs.core.truth_(or__20152__auto__)){
return or__20152__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__29780.call(null,"true",expr__29781))){
return true;
} else {
if(cljs.core.truth_(pred__29780.call(null,"false",expr__29781))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29781)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e29786){if((e29786 instanceof Error)){
var e = e29786;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e29786;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29787){
var map__29790 = p__29787;
var map__29790__$1 = ((((!((map__29790 == null)))?((((map__29790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29790):map__29790);
var message = cljs.core.get.call(null,map__29790__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29790__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20152__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20152__auto__)){
return or__20152__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20140__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20140__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20140__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22324__auto___29952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___29952,ch){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___29952,ch){
return (function (state_29921){
var state_val_29922 = (state_29921[(1)]);
if((state_val_29922 === (7))){
var inst_29917 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29923_29953 = state_29921__$1;
(statearr_29923_29953[(2)] = inst_29917);

(statearr_29923_29953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (1))){
var state_29921__$1 = state_29921;
var statearr_29924_29954 = state_29921__$1;
(statearr_29924_29954[(2)] = null);

(statearr_29924_29954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (4))){
var inst_29874 = (state_29921[(7)]);
var inst_29874__$1 = (state_29921[(2)]);
var state_29921__$1 = (function (){var statearr_29925 = state_29921;
(statearr_29925[(7)] = inst_29874__$1);

return statearr_29925;
})();
if(cljs.core.truth_(inst_29874__$1)){
var statearr_29926_29955 = state_29921__$1;
(statearr_29926_29955[(1)] = (5));

} else {
var statearr_29927_29956 = state_29921__$1;
(statearr_29927_29956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (15))){
var inst_29881 = (state_29921[(8)]);
var inst_29896 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29881);
var inst_29897 = cljs.core.first.call(null,inst_29896);
var inst_29898 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29897);
var inst_29899 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29898)].join('');
var inst_29900 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29899);
var state_29921__$1 = state_29921;
var statearr_29928_29957 = state_29921__$1;
(statearr_29928_29957[(2)] = inst_29900);

(statearr_29928_29957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (13))){
var inst_29905 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29929_29958 = state_29921__$1;
(statearr_29929_29958[(2)] = inst_29905);

(statearr_29929_29958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (6))){
var state_29921__$1 = state_29921;
var statearr_29930_29959 = state_29921__$1;
(statearr_29930_29959[(2)] = null);

(statearr_29930_29959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (17))){
var inst_29903 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29931_29960 = state_29921__$1;
(statearr_29931_29960[(2)] = inst_29903);

(statearr_29931_29960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (3))){
var inst_29919 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29921__$1,inst_29919);
} else {
if((state_val_29922 === (12))){
var inst_29880 = (state_29921[(9)]);
var inst_29894 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29880,opts);
var state_29921__$1 = state_29921;
if(cljs.core.truth_(inst_29894)){
var statearr_29932_29961 = state_29921__$1;
(statearr_29932_29961[(1)] = (15));

} else {
var statearr_29933_29962 = state_29921__$1;
(statearr_29933_29962[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (2))){
var state_29921__$1 = state_29921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29921__$1,(4),ch);
} else {
if((state_val_29922 === (11))){
var inst_29881 = (state_29921[(8)]);
var inst_29886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29887 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29881);
var inst_29888 = cljs.core.async.timeout.call(null,(1000));
var inst_29889 = [inst_29887,inst_29888];
var inst_29890 = (new cljs.core.PersistentVector(null,2,(5),inst_29886,inst_29889,null));
var state_29921__$1 = state_29921;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29921__$1,(14),inst_29890);
} else {
if((state_val_29922 === (9))){
var inst_29881 = (state_29921[(8)]);
var inst_29907 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29908 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29881);
var inst_29909 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29908);
var inst_29910 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29909)].join('');
var inst_29911 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29910);
var state_29921__$1 = (function (){var statearr_29934 = state_29921;
(statearr_29934[(10)] = inst_29907);

return statearr_29934;
})();
var statearr_29935_29963 = state_29921__$1;
(statearr_29935_29963[(2)] = inst_29911);

(statearr_29935_29963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (5))){
var inst_29874 = (state_29921[(7)]);
var inst_29876 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29877 = (new cljs.core.PersistentArrayMap(null,2,inst_29876,null));
var inst_29878 = (new cljs.core.PersistentHashSet(null,inst_29877,null));
var inst_29879 = figwheel.client.focus_msgs.call(null,inst_29878,inst_29874);
var inst_29880 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29879);
var inst_29881 = cljs.core.first.call(null,inst_29879);
var inst_29882 = figwheel.client.autoload_QMARK_.call(null);
var state_29921__$1 = (function (){var statearr_29936 = state_29921;
(statearr_29936[(9)] = inst_29880);

(statearr_29936[(8)] = inst_29881);

return statearr_29936;
})();
if(cljs.core.truth_(inst_29882)){
var statearr_29937_29964 = state_29921__$1;
(statearr_29937_29964[(1)] = (8));

} else {
var statearr_29938_29965 = state_29921__$1;
(statearr_29938_29965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (14))){
var inst_29892 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29939_29966 = state_29921__$1;
(statearr_29939_29966[(2)] = inst_29892);

(statearr_29939_29966[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (16))){
var state_29921__$1 = state_29921;
var statearr_29940_29967 = state_29921__$1;
(statearr_29940_29967[(2)] = null);

(statearr_29940_29967[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (10))){
var inst_29913 = (state_29921[(2)]);
var state_29921__$1 = (function (){var statearr_29941 = state_29921;
(statearr_29941[(11)] = inst_29913);

return statearr_29941;
})();
var statearr_29942_29968 = state_29921__$1;
(statearr_29942_29968[(2)] = null);

(statearr_29942_29968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (8))){
var inst_29880 = (state_29921[(9)]);
var inst_29884 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29880,opts);
var state_29921__$1 = state_29921;
if(cljs.core.truth_(inst_29884)){
var statearr_29943_29969 = state_29921__$1;
(statearr_29943_29969[(1)] = (11));

} else {
var statearr_29944_29970 = state_29921__$1;
(statearr_29944_29970[(1)] = (12));

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
});})(c__22324__auto___29952,ch))
;
return ((function (switch__22212__auto__,c__22324__auto___29952,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22213__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22213__auto____0 = (function (){
var statearr_29948 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29948[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22213__auto__);

(statearr_29948[(1)] = (1));

return statearr_29948;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22213__auto____1 = (function (state_29921){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_29921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e29949){if((e29949 instanceof Object)){
var ex__22216__auto__ = e29949;
var statearr_29950_29971 = state_29921;
(statearr_29950_29971[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29972 = state_29921;
state_29921 = G__29972;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22213__auto__ = function(state_29921){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22213__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22213__auto____1.call(this,state_29921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22213__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22213__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___29952,ch))
})();
var state__22326__auto__ = (function (){var statearr_29951 = f__22325__auto__.call(null);
(statearr_29951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___29952);

return statearr_29951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___29952,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29973_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29973_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29976 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29976){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e29975){if((e29975 instanceof Error)){
var e = e29975;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29976], null));
} else {
var e = e29975;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_29976))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29977){
var map__29986 = p__29977;
var map__29986__$1 = ((((!((map__29986 == null)))?((((map__29986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29986):map__29986);
var opts = map__29986__$1;
var build_id = cljs.core.get.call(null,map__29986__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29986,map__29986__$1,opts,build_id){
return (function (p__29988){
var vec__29989 = p__29988;
var seq__29990 = cljs.core.seq.call(null,vec__29989);
var first__29991 = cljs.core.first.call(null,seq__29990);
var seq__29990__$1 = cljs.core.next.call(null,seq__29990);
var map__29992 = first__29991;
var map__29992__$1 = ((((!((map__29992 == null)))?((((map__29992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29992):map__29992);
var msg = map__29992__$1;
var msg_name = cljs.core.get.call(null,map__29992__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29990__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29989,seq__29990,first__29991,seq__29990__$1,map__29992,map__29992__$1,msg,msg_name,_,map__29986,map__29986__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29989,seq__29990,first__29991,seq__29990__$1,map__29992,map__29992__$1,msg,msg_name,_,map__29986,map__29986__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29986,map__29986__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30000){
var vec__30001 = p__30000;
var seq__30002 = cljs.core.seq.call(null,vec__30001);
var first__30003 = cljs.core.first.call(null,seq__30002);
var seq__30002__$1 = cljs.core.next.call(null,seq__30002);
var map__30004 = first__30003;
var map__30004__$1 = ((((!((map__30004 == null)))?((((map__30004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30004):map__30004);
var msg = map__30004__$1;
var msg_name = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30002__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30006){
var map__30018 = p__30006;
var map__30018__$1 = ((((!((map__30018 == null)))?((((map__30018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30018):map__30018);
var on_compile_warning = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30018,map__30018__$1,on_compile_warning,on_compile_fail){
return (function (p__30020){
var vec__30021 = p__30020;
var seq__30022 = cljs.core.seq.call(null,vec__30021);
var first__30023 = cljs.core.first.call(null,seq__30022);
var seq__30022__$1 = cljs.core.next.call(null,seq__30022);
var map__30024 = first__30023;
var map__30024__$1 = ((((!((map__30024 == null)))?((((map__30024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30024):map__30024);
var msg = map__30024__$1;
var msg_name = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30022__$1;
var pred__30026 = cljs.core._EQ_;
var expr__30027 = msg_name;
if(cljs.core.truth_(pred__30026.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30027))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30026.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30027))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30018,map__30018__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22324__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto__,msg_hist,msg_names,msg){
return (function (state_30235){
var state_val_30236 = (state_30235[(1)]);
if((state_val_30236 === (7))){
var inst_30163 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30163)){
var statearr_30237_30283 = state_30235__$1;
(statearr_30237_30283[(1)] = (8));

} else {
var statearr_30238_30284 = state_30235__$1;
(statearr_30238_30284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (20))){
var inst_30229 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30239_30285 = state_30235__$1;
(statearr_30239_30285[(2)] = inst_30229);

(statearr_30239_30285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (27))){
var inst_30225 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30240_30286 = state_30235__$1;
(statearr_30240_30286[(2)] = inst_30225);

(statearr_30240_30286[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (1))){
var inst_30156 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30156)){
var statearr_30241_30287 = state_30235__$1;
(statearr_30241_30287[(1)] = (2));

} else {
var statearr_30242_30288 = state_30235__$1;
(statearr_30242_30288[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (24))){
var inst_30227 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30243_30289 = state_30235__$1;
(statearr_30243_30289[(2)] = inst_30227);

(statearr_30243_30289[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (4))){
var inst_30233 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30235__$1,inst_30233);
} else {
if((state_val_30236 === (15))){
var inst_30231 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30244_30290 = state_30235__$1;
(statearr_30244_30290[(2)] = inst_30231);

(statearr_30244_30290[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (21))){
var inst_30190 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30245_30291 = state_30235__$1;
(statearr_30245_30291[(2)] = inst_30190);

(statearr_30245_30291[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (31))){
var inst_30214 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30214)){
var statearr_30246_30292 = state_30235__$1;
(statearr_30246_30292[(1)] = (34));

} else {
var statearr_30247_30293 = state_30235__$1;
(statearr_30247_30293[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (32))){
var inst_30223 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30248_30294 = state_30235__$1;
(statearr_30248_30294[(2)] = inst_30223);

(statearr_30248_30294[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (33))){
var inst_30212 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30249_30295 = state_30235__$1;
(statearr_30249_30295[(2)] = inst_30212);

(statearr_30249_30295[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (13))){
var inst_30177 = figwheel.client.heads_up.clear.call(null);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(16),inst_30177);
} else {
if((state_val_30236 === (22))){
var inst_30194 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30195 = figwheel.client.heads_up.append_warning_message.call(null,inst_30194);
var state_30235__$1 = state_30235;
var statearr_30250_30296 = state_30235__$1;
(statearr_30250_30296[(2)] = inst_30195);

(statearr_30250_30296[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (36))){
var inst_30221 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30251_30297 = state_30235__$1;
(statearr_30251_30297[(2)] = inst_30221);

(statearr_30251_30297[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (29))){
var inst_30205 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30252_30298 = state_30235__$1;
(statearr_30252_30298[(2)] = inst_30205);

(statearr_30252_30298[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (6))){
var inst_30158 = (state_30235[(7)]);
var state_30235__$1 = state_30235;
var statearr_30253_30299 = state_30235__$1;
(statearr_30253_30299[(2)] = inst_30158);

(statearr_30253_30299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (28))){
var inst_30201 = (state_30235[(2)]);
var inst_30202 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30203 = figwheel.client.heads_up.display_warning.call(null,inst_30202);
var state_30235__$1 = (function (){var statearr_30254 = state_30235;
(statearr_30254[(8)] = inst_30201);

return statearr_30254;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(29),inst_30203);
} else {
if((state_val_30236 === (25))){
var inst_30199 = figwheel.client.heads_up.clear.call(null);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(28),inst_30199);
} else {
if((state_val_30236 === (34))){
var inst_30216 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(37),inst_30216);
} else {
if((state_val_30236 === (17))){
var inst_30183 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30255_30300 = state_30235__$1;
(statearr_30255_30300[(2)] = inst_30183);

(statearr_30255_30300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (3))){
var inst_30175 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30175)){
var statearr_30256_30301 = state_30235__$1;
(statearr_30256_30301[(1)] = (13));

} else {
var statearr_30257_30302 = state_30235__$1;
(statearr_30257_30302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (12))){
var inst_30171 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30258_30303 = state_30235__$1;
(statearr_30258_30303[(2)] = inst_30171);

(statearr_30258_30303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (2))){
var inst_30158 = (state_30235[(7)]);
var inst_30158__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30235__$1 = (function (){var statearr_30259 = state_30235;
(statearr_30259[(7)] = inst_30158__$1);

return statearr_30259;
})();
if(cljs.core.truth_(inst_30158__$1)){
var statearr_30260_30304 = state_30235__$1;
(statearr_30260_30304[(1)] = (5));

} else {
var statearr_30261_30305 = state_30235__$1;
(statearr_30261_30305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (23))){
var inst_30197 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30197)){
var statearr_30262_30306 = state_30235__$1;
(statearr_30262_30306[(1)] = (25));

} else {
var statearr_30263_30307 = state_30235__$1;
(statearr_30263_30307[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (35))){
var state_30235__$1 = state_30235;
var statearr_30264_30308 = state_30235__$1;
(statearr_30264_30308[(2)] = null);

(statearr_30264_30308[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (19))){
var inst_30192 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30192)){
var statearr_30265_30309 = state_30235__$1;
(statearr_30265_30309[(1)] = (22));

} else {
var statearr_30266_30310 = state_30235__$1;
(statearr_30266_30310[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (11))){
var inst_30167 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30267_30311 = state_30235__$1;
(statearr_30267_30311[(2)] = inst_30167);

(statearr_30267_30311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (9))){
var inst_30169 = figwheel.client.heads_up.clear.call(null);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(12),inst_30169);
} else {
if((state_val_30236 === (5))){
var inst_30160 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30235__$1 = state_30235;
var statearr_30268_30312 = state_30235__$1;
(statearr_30268_30312[(2)] = inst_30160);

(statearr_30268_30312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (14))){
var inst_30185 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30185)){
var statearr_30269_30313 = state_30235__$1;
(statearr_30269_30313[(1)] = (18));

} else {
var statearr_30270_30314 = state_30235__$1;
(statearr_30270_30314[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (26))){
var inst_30207 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30207)){
var statearr_30271_30315 = state_30235__$1;
(statearr_30271_30315[(1)] = (30));

} else {
var statearr_30272_30316 = state_30235__$1;
(statearr_30272_30316[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (16))){
var inst_30179 = (state_30235[(2)]);
var inst_30180 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30181 = figwheel.client.heads_up.display_exception.call(null,inst_30180);
var state_30235__$1 = (function (){var statearr_30273 = state_30235;
(statearr_30273[(9)] = inst_30179);

return statearr_30273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(17),inst_30181);
} else {
if((state_val_30236 === (30))){
var inst_30209 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30210 = figwheel.client.heads_up.display_warning.call(null,inst_30209);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(33),inst_30210);
} else {
if((state_val_30236 === (10))){
var inst_30173 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30274_30317 = state_30235__$1;
(statearr_30274_30317[(2)] = inst_30173);

(statearr_30274_30317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (18))){
var inst_30187 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30188 = figwheel.client.heads_up.display_exception.call(null,inst_30187);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(21),inst_30188);
} else {
if((state_val_30236 === (37))){
var inst_30218 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30275_30318 = state_30235__$1;
(statearr_30275_30318[(2)] = inst_30218);

(statearr_30275_30318[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (8))){
var inst_30165 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(11),inst_30165);
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
});})(c__22324__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22212__auto__,c__22324__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22213__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22213__auto____0 = (function (){
var statearr_30279 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30279[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22213__auto__);

(statearr_30279[(1)] = (1));

return statearr_30279;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22213__auto____1 = (function (state_30235){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_30235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e30280){if((e30280 instanceof Object)){
var ex__22216__auto__ = e30280;
var statearr_30281_30319 = state_30235;
(statearr_30281_30319[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30320 = state_30235;
state_30235 = G__30320;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22213__auto__ = function(state_30235){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22213__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22213__auto____1.call(this,state_30235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22213__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22213__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto__,msg_hist,msg_names,msg))
})();
var state__22326__auto__ = (function (){var statearr_30282 = f__22325__auto__.call(null);
(statearr_30282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto__);

return statearr_30282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto__,msg_hist,msg_names,msg))
);

return c__22324__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22324__auto___30383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto___30383,ch){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto___30383,ch){
return (function (state_30366){
var state_val_30367 = (state_30366[(1)]);
if((state_val_30367 === (1))){
var state_30366__$1 = state_30366;
var statearr_30368_30384 = state_30366__$1;
(statearr_30368_30384[(2)] = null);

(statearr_30368_30384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (2))){
var state_30366__$1 = state_30366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30366__$1,(4),ch);
} else {
if((state_val_30367 === (3))){
var inst_30364 = (state_30366[(2)]);
var state_30366__$1 = state_30366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30366__$1,inst_30364);
} else {
if((state_val_30367 === (4))){
var inst_30354 = (state_30366[(7)]);
var inst_30354__$1 = (state_30366[(2)]);
var state_30366__$1 = (function (){var statearr_30369 = state_30366;
(statearr_30369[(7)] = inst_30354__$1);

return statearr_30369;
})();
if(cljs.core.truth_(inst_30354__$1)){
var statearr_30370_30385 = state_30366__$1;
(statearr_30370_30385[(1)] = (5));

} else {
var statearr_30371_30386 = state_30366__$1;
(statearr_30371_30386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (5))){
var inst_30354 = (state_30366[(7)]);
var inst_30356 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30354);
var state_30366__$1 = state_30366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30366__$1,(8),inst_30356);
} else {
if((state_val_30367 === (6))){
var state_30366__$1 = state_30366;
var statearr_30372_30387 = state_30366__$1;
(statearr_30372_30387[(2)] = null);

(statearr_30372_30387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (7))){
var inst_30362 = (state_30366[(2)]);
var state_30366__$1 = state_30366;
var statearr_30373_30388 = state_30366__$1;
(statearr_30373_30388[(2)] = inst_30362);

(statearr_30373_30388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (8))){
var inst_30358 = (state_30366[(2)]);
var state_30366__$1 = (function (){var statearr_30374 = state_30366;
(statearr_30374[(8)] = inst_30358);

return statearr_30374;
})();
var statearr_30375_30389 = state_30366__$1;
(statearr_30375_30389[(2)] = null);

(statearr_30375_30389[(1)] = (2));


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
});})(c__22324__auto___30383,ch))
;
return ((function (switch__22212__auto__,c__22324__auto___30383,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22213__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22213__auto____0 = (function (){
var statearr_30379 = [null,null,null,null,null,null,null,null,null];
(statearr_30379[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22213__auto__);

(statearr_30379[(1)] = (1));

return statearr_30379;
});
var figwheel$client$heads_up_plugin_$_state_machine__22213__auto____1 = (function (state_30366){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_30366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e30380){if((e30380 instanceof Object)){
var ex__22216__auto__ = e30380;
var statearr_30381_30390 = state_30366;
(statearr_30381_30390[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30391 = state_30366;
state_30366 = G__30391;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22213__auto__ = function(state_30366){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22213__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22213__auto____1.call(this,state_30366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22213__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22213__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto___30383,ch))
})();
var state__22326__auto__ = (function (){var statearr_30382 = f__22325__auto__.call(null);
(statearr_30382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto___30383);

return statearr_30382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto___30383,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22324__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto__){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto__){
return (function (state_30412){
var state_val_30413 = (state_30412[(1)]);
if((state_val_30413 === (1))){
var inst_30407 = cljs.core.async.timeout.call(null,(3000));
var state_30412__$1 = state_30412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30412__$1,(2),inst_30407);
} else {
if((state_val_30413 === (2))){
var inst_30409 = (state_30412[(2)]);
var inst_30410 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30412__$1 = (function (){var statearr_30414 = state_30412;
(statearr_30414[(7)] = inst_30409);

return statearr_30414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30412__$1,inst_30410);
} else {
return null;
}
}
});})(c__22324__auto__))
;
return ((function (switch__22212__auto__,c__22324__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22213__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22213__auto____0 = (function (){
var statearr_30418 = [null,null,null,null,null,null,null,null];
(statearr_30418[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22213__auto__);

(statearr_30418[(1)] = (1));

return statearr_30418;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22213__auto____1 = (function (state_30412){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_30412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e30419){if((e30419 instanceof Object)){
var ex__22216__auto__ = e30419;
var statearr_30420_30422 = state_30412;
(statearr_30420_30422[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30423 = state_30412;
state_30412 = G__30423;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22213__auto__ = function(state_30412){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22213__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22213__auto____1.call(this,state_30412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22213__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22213__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto__))
})();
var state__22326__auto__ = (function (){var statearr_30421 = f__22325__auto__.call(null);
(statearr_30421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto__);

return statearr_30421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto__))
);

return c__22324__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22324__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22324__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__22325__auto__ = (function (){var switch__22212__auto__ = ((function (c__22324__auto__,figwheel_version,temp__4657__auto__){
return (function (state_30446){
var state_val_30447 = (state_30446[(1)]);
if((state_val_30447 === (1))){
var inst_30440 = cljs.core.async.timeout.call(null,(2000));
var state_30446__$1 = state_30446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30446__$1,(2),inst_30440);
} else {
if((state_val_30447 === (2))){
var inst_30442 = (state_30446[(2)]);
var inst_30443 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_30444 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30443);
var state_30446__$1 = (function (){var statearr_30448 = state_30446;
(statearr_30448[(7)] = inst_30442);

return statearr_30448;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30446__$1,inst_30444);
} else {
return null;
}
}
});})(c__22324__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__22212__auto__,c__22324__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22213__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22213__auto____0 = (function (){
var statearr_30452 = [null,null,null,null,null,null,null,null];
(statearr_30452[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22213__auto__);

(statearr_30452[(1)] = (1));

return statearr_30452;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22213__auto____1 = (function (state_30446){
while(true){
var ret_value__22214__auto__ = (function (){try{while(true){
var result__22215__auto__ = switch__22212__auto__.call(null,state_30446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22215__auto__;
}
break;
}
}catch (e30453){if((e30453 instanceof Object)){
var ex__22216__auto__ = e30453;
var statearr_30454_30456 = state_30446;
(statearr_30454_30456[(5)] = ex__22216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30457 = state_30446;
state_30446 = G__30457;
continue;
} else {
return ret_value__22214__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22213__auto__ = function(state_30446){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22213__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22213__auto____1.call(this,state_30446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22213__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22213__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22213__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22213__auto__;
})()
;})(switch__22212__auto__,c__22324__auto__,figwheel_version,temp__4657__auto__))
})();
var state__22326__auto__ = (function (){var statearr_30455 = f__22325__auto__.call(null);
(statearr_30455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22324__auto__);

return statearr_30455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22326__auto__);
});})(c__22324__auto__,figwheel_version,temp__4657__auto__))
);

return c__22324__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30458){
var map__30462 = p__30458;
var map__30462__$1 = ((((!((map__30462 == null)))?((((map__30462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30462):map__30462);
var file = cljs.core.get.call(null,map__30462__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30462__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30462__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30464 = "";
var G__30464__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__30464),cljs.core.str("file "),cljs.core.str(file)].join(''):G__30464);
var G__30464__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__30464__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__30464__$1);
if(cljs.core.truth_((function (){var and__20140__auto__ = line;
if(cljs.core.truth_(and__20140__auto__)){
return column;
} else {
return and__20140__auto__;
}
})())){
return [cljs.core.str(G__30464__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__30464__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30465){
var map__30472 = p__30465;
var map__30472__$1 = ((((!((map__30472 == null)))?((((map__30472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30472):map__30472);
var ed = map__30472__$1;
var formatted_exception = cljs.core.get.call(null,map__30472__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30472__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30472__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30474_30478 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30475_30479 = null;
var count__30476_30480 = (0);
var i__30477_30481 = (0);
while(true){
if((i__30477_30481 < count__30476_30480)){
var msg_30482 = cljs.core._nth.call(null,chunk__30475_30479,i__30477_30481);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30482);

var G__30483 = seq__30474_30478;
var G__30484 = chunk__30475_30479;
var G__30485 = count__30476_30480;
var G__30486 = (i__30477_30481 + (1));
seq__30474_30478 = G__30483;
chunk__30475_30479 = G__30484;
count__30476_30480 = G__30485;
i__30477_30481 = G__30486;
continue;
} else {
var temp__4657__auto___30487 = cljs.core.seq.call(null,seq__30474_30478);
if(temp__4657__auto___30487){
var seq__30474_30488__$1 = temp__4657__auto___30487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30474_30488__$1)){
var c__20963__auto___30489 = cljs.core.chunk_first.call(null,seq__30474_30488__$1);
var G__30490 = cljs.core.chunk_rest.call(null,seq__30474_30488__$1);
var G__30491 = c__20963__auto___30489;
var G__30492 = cljs.core.count.call(null,c__20963__auto___30489);
var G__30493 = (0);
seq__30474_30478 = G__30490;
chunk__30475_30479 = G__30491;
count__30476_30480 = G__30492;
i__30477_30481 = G__30493;
continue;
} else {
var msg_30494 = cljs.core.first.call(null,seq__30474_30488__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30494);

var G__30495 = cljs.core.next.call(null,seq__30474_30488__$1);
var G__30496 = null;
var G__30497 = (0);
var G__30498 = (0);
seq__30474_30478 = G__30495;
chunk__30475_30479 = G__30496;
count__30476_30480 = G__30497;
i__30477_30481 = G__30498;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30499){
var map__30502 = p__30499;
var map__30502__$1 = ((((!((map__30502 == null)))?((((map__30502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30502):map__30502);
var w = map__30502__$1;
var message = cljs.core.get.call(null,map__30502__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20140__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20140__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20140__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30514 = cljs.core.seq.call(null,plugins);
var chunk__30515 = null;
var count__30516 = (0);
var i__30517 = (0);
while(true){
if((i__30517 < count__30516)){
var vec__30518 = cljs.core._nth.call(null,chunk__30515,i__30517);
var k = cljs.core.nth.call(null,vec__30518,(0),null);
var plugin = cljs.core.nth.call(null,vec__30518,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30524 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30514,chunk__30515,count__30516,i__30517,pl_30524,vec__30518,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30524.call(null,msg_hist);
});})(seq__30514,chunk__30515,count__30516,i__30517,pl_30524,vec__30518,k,plugin))
);
} else {
}

var G__30525 = seq__30514;
var G__30526 = chunk__30515;
var G__30527 = count__30516;
var G__30528 = (i__30517 + (1));
seq__30514 = G__30525;
chunk__30515 = G__30526;
count__30516 = G__30527;
i__30517 = G__30528;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30514);
if(temp__4657__auto__){
var seq__30514__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30514__$1)){
var c__20963__auto__ = cljs.core.chunk_first.call(null,seq__30514__$1);
var G__30529 = cljs.core.chunk_rest.call(null,seq__30514__$1);
var G__30530 = c__20963__auto__;
var G__30531 = cljs.core.count.call(null,c__20963__auto__);
var G__30532 = (0);
seq__30514 = G__30529;
chunk__30515 = G__30530;
count__30516 = G__30531;
i__30517 = G__30532;
continue;
} else {
var vec__30521 = cljs.core.first.call(null,seq__30514__$1);
var k = cljs.core.nth.call(null,vec__30521,(0),null);
var plugin = cljs.core.nth.call(null,vec__30521,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30533 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30514,chunk__30515,count__30516,i__30517,pl_30533,vec__30521,k,plugin,seq__30514__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30533.call(null,msg_hist);
});})(seq__30514,chunk__30515,count__30516,i__30517,pl_30533,vec__30521,k,plugin,seq__30514__$1,temp__4657__auto__))
);
} else {
}

var G__30534 = cljs.core.next.call(null,seq__30514__$1);
var G__30535 = null;
var G__30536 = (0);
var G__30537 = (0);
seq__30514 = G__30534;
chunk__30515 = G__30535;
count__30516 = G__30536;
i__30517 = G__30537;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30538 = [];
var len__21227__auto___30545 = arguments.length;
var i__21228__auto___30546 = (0);
while(true){
if((i__21228__auto___30546 < len__21227__auto___30545)){
args30538.push((arguments[i__21228__auto___30546]));

var G__30547 = (i__21228__auto___30546 + (1));
i__21228__auto___30546 = G__30547;
continue;
} else {
}
break;
}

var G__30540 = args30538.length;
switch (G__30540) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30538.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30541_30549 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30542_30550 = null;
var count__30543_30551 = (0);
var i__30544_30552 = (0);
while(true){
if((i__30544_30552 < count__30543_30551)){
var msg_30553 = cljs.core._nth.call(null,chunk__30542_30550,i__30544_30552);
figwheel.client.socket.handle_incoming_message.call(null,msg_30553);

var G__30554 = seq__30541_30549;
var G__30555 = chunk__30542_30550;
var G__30556 = count__30543_30551;
var G__30557 = (i__30544_30552 + (1));
seq__30541_30549 = G__30554;
chunk__30542_30550 = G__30555;
count__30543_30551 = G__30556;
i__30544_30552 = G__30557;
continue;
} else {
var temp__4657__auto___30558 = cljs.core.seq.call(null,seq__30541_30549);
if(temp__4657__auto___30558){
var seq__30541_30559__$1 = temp__4657__auto___30558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30541_30559__$1)){
var c__20963__auto___30560 = cljs.core.chunk_first.call(null,seq__30541_30559__$1);
var G__30561 = cljs.core.chunk_rest.call(null,seq__30541_30559__$1);
var G__30562 = c__20963__auto___30560;
var G__30563 = cljs.core.count.call(null,c__20963__auto___30560);
var G__30564 = (0);
seq__30541_30549 = G__30561;
chunk__30542_30550 = G__30562;
count__30543_30551 = G__30563;
i__30544_30552 = G__30564;
continue;
} else {
var msg_30565 = cljs.core.first.call(null,seq__30541_30559__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30565);

var G__30566 = cljs.core.next.call(null,seq__30541_30559__$1);
var G__30567 = null;
var G__30568 = (0);
var G__30569 = (0);
seq__30541_30549 = G__30566;
chunk__30542_30550 = G__30567;
count__30543_30551 = G__30568;
i__30544_30552 = G__30569;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21234__auto__ = [];
var len__21227__auto___30574 = arguments.length;
var i__21228__auto___30575 = (0);
while(true){
if((i__21228__auto___30575 < len__21227__auto___30574)){
args__21234__auto__.push((arguments[i__21228__auto___30575]));

var G__30576 = (i__21228__auto___30575 + (1));
i__21228__auto___30575 = G__30576;
continue;
} else {
}
break;
}

var argseq__21235__auto__ = ((((0) < args__21234__auto__.length))?(new cljs.core.IndexedSeq(args__21234__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21235__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30571){
var map__30572 = p__30571;
var map__30572__$1 = ((((!((map__30572 == null)))?((((map__30572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30572):map__30572);
var opts = map__30572__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30570){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30570));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30578){if((e30578 instanceof Error)){
var e = e30578;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30578;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30582){
var map__30583 = p__30582;
var map__30583__$1 = ((((!((map__30583 == null)))?((((map__30583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30583):map__30583);
var msg_name = cljs.core.get.call(null,map__30583__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1471781554050