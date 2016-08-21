// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27617){
var map__27642 = p__27617;
var map__27642__$1 = ((((!((map__27642 == null)))?((((map__27642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27642):map__27642);
var m = map__27642__$1;
var n = cljs.core.get.call(null,map__27642__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27642__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27644_27666 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27645_27667 = null;
var count__27646_27668 = (0);
var i__27647_27669 = (0);
while(true){
if((i__27647_27669 < count__27646_27668)){
var f_27670 = cljs.core._nth.call(null,chunk__27645_27667,i__27647_27669);
cljs.core.println.call(null,"  ",f_27670);

var G__27671 = seq__27644_27666;
var G__27672 = chunk__27645_27667;
var G__27673 = count__27646_27668;
var G__27674 = (i__27647_27669 + (1));
seq__27644_27666 = G__27671;
chunk__27645_27667 = G__27672;
count__27646_27668 = G__27673;
i__27647_27669 = G__27674;
continue;
} else {
var temp__4657__auto___27675 = cljs.core.seq.call(null,seq__27644_27666);
if(temp__4657__auto___27675){
var seq__27644_27676__$1 = temp__4657__auto___27675;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27644_27676__$1)){
var c__20963__auto___27677 = cljs.core.chunk_first.call(null,seq__27644_27676__$1);
var G__27678 = cljs.core.chunk_rest.call(null,seq__27644_27676__$1);
var G__27679 = c__20963__auto___27677;
var G__27680 = cljs.core.count.call(null,c__20963__auto___27677);
var G__27681 = (0);
seq__27644_27666 = G__27678;
chunk__27645_27667 = G__27679;
count__27646_27668 = G__27680;
i__27647_27669 = G__27681;
continue;
} else {
var f_27682 = cljs.core.first.call(null,seq__27644_27676__$1);
cljs.core.println.call(null,"  ",f_27682);

var G__27683 = cljs.core.next.call(null,seq__27644_27676__$1);
var G__27684 = null;
var G__27685 = (0);
var G__27686 = (0);
seq__27644_27666 = G__27683;
chunk__27645_27667 = G__27684;
count__27646_27668 = G__27685;
i__27647_27669 = G__27686;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27687 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20152__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20152__auto__)){
return or__20152__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27687);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27687)))?cljs.core.second.call(null,arglists_27687):arglists_27687));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27648_27688 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27649_27689 = null;
var count__27650_27690 = (0);
var i__27651_27691 = (0);
while(true){
if((i__27651_27691 < count__27650_27690)){
var vec__27652_27692 = cljs.core._nth.call(null,chunk__27649_27689,i__27651_27691);
var name_27693 = cljs.core.nth.call(null,vec__27652_27692,(0),null);
var map__27655_27694 = cljs.core.nth.call(null,vec__27652_27692,(1),null);
var map__27655_27695__$1 = ((((!((map__27655_27694 == null)))?((((map__27655_27694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27655_27694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27655_27694):map__27655_27694);
var doc_27696 = cljs.core.get.call(null,map__27655_27695__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27697 = cljs.core.get.call(null,map__27655_27695__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27693);

cljs.core.println.call(null," ",arglists_27697);

if(cljs.core.truth_(doc_27696)){
cljs.core.println.call(null," ",doc_27696);
} else {
}

var G__27698 = seq__27648_27688;
var G__27699 = chunk__27649_27689;
var G__27700 = count__27650_27690;
var G__27701 = (i__27651_27691 + (1));
seq__27648_27688 = G__27698;
chunk__27649_27689 = G__27699;
count__27650_27690 = G__27700;
i__27651_27691 = G__27701;
continue;
} else {
var temp__4657__auto___27702 = cljs.core.seq.call(null,seq__27648_27688);
if(temp__4657__auto___27702){
var seq__27648_27703__$1 = temp__4657__auto___27702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27648_27703__$1)){
var c__20963__auto___27704 = cljs.core.chunk_first.call(null,seq__27648_27703__$1);
var G__27705 = cljs.core.chunk_rest.call(null,seq__27648_27703__$1);
var G__27706 = c__20963__auto___27704;
var G__27707 = cljs.core.count.call(null,c__20963__auto___27704);
var G__27708 = (0);
seq__27648_27688 = G__27705;
chunk__27649_27689 = G__27706;
count__27650_27690 = G__27707;
i__27651_27691 = G__27708;
continue;
} else {
var vec__27657_27709 = cljs.core.first.call(null,seq__27648_27703__$1);
var name_27710 = cljs.core.nth.call(null,vec__27657_27709,(0),null);
var map__27660_27711 = cljs.core.nth.call(null,vec__27657_27709,(1),null);
var map__27660_27712__$1 = ((((!((map__27660_27711 == null)))?((((map__27660_27711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27660_27711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27660_27711):map__27660_27711);
var doc_27713 = cljs.core.get.call(null,map__27660_27712__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27714 = cljs.core.get.call(null,map__27660_27712__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27710);

cljs.core.println.call(null," ",arglists_27714);

if(cljs.core.truth_(doc_27713)){
cljs.core.println.call(null," ",doc_27713);
} else {
}

var G__27715 = cljs.core.next.call(null,seq__27648_27703__$1);
var G__27716 = null;
var G__27717 = (0);
var G__27718 = (0);
seq__27648_27688 = G__27715;
chunk__27649_27689 = G__27716;
count__27650_27690 = G__27717;
i__27651_27691 = G__27718;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__27662 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27663 = null;
var count__27664 = (0);
var i__27665 = (0);
while(true){
if((i__27665 < count__27664)){
var role = cljs.core._nth.call(null,chunk__27663,i__27665);
var temp__4657__auto___27719__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27719__$1)){
var spec_27720 = temp__4657__auto___27719__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_27720));
} else {
}

var G__27721 = seq__27662;
var G__27722 = chunk__27663;
var G__27723 = count__27664;
var G__27724 = (i__27665 + (1));
seq__27662 = G__27721;
chunk__27663 = G__27722;
count__27664 = G__27723;
i__27665 = G__27724;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__27662);
if(temp__4657__auto____$1){
var seq__27662__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27662__$1)){
var c__20963__auto__ = cljs.core.chunk_first.call(null,seq__27662__$1);
var G__27725 = cljs.core.chunk_rest.call(null,seq__27662__$1);
var G__27726 = c__20963__auto__;
var G__27727 = cljs.core.count.call(null,c__20963__auto__);
var G__27728 = (0);
seq__27662 = G__27725;
chunk__27663 = G__27726;
count__27664 = G__27727;
i__27665 = G__27728;
continue;
} else {
var role = cljs.core.first.call(null,seq__27662__$1);
var temp__4657__auto___27729__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27729__$2)){
var spec_27730 = temp__4657__auto___27729__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_27730));
} else {
}

var G__27731 = cljs.core.next.call(null,seq__27662__$1);
var G__27732 = null;
var G__27733 = (0);
var G__27734 = (0);
seq__27662 = G__27731;
chunk__27663 = G__27732;
count__27664 = G__27733;
i__27665 = G__27734;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1471784892838