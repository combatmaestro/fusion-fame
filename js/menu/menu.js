;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_mmenu_all_js = factory(root.jQuery);
  }
}(this, function(jQuery) {
/*
 * jQuery mmenu v6.1.4
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(e){function t(){e[n].glbl||(r={$wndw:e(window),$docu:e(document),$html:e("html"),$body:e("body")},s={},a={},o={},e.each([s,a,o],function(e,t){t.add=function(e){e=e.split(" ");for(var n=0,i=e.length;n<i;n++)t[e[n]]=t.mm(e[n])}}),s.mm=function(e){return"mm-"+e},s.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"),s.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent child"),o.mm=function(e){return e+".mm"},o.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),e[n]._c=s,e[n]._d=a,e[n]._e=o,e[n].glbl=r)}var n="mmenu",i="6.1.4";if(!(e[n]&&e[n].version>i)){e[n]=function(e,t,n){return this.$menu=e,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=t,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initAddons(),this._initExtensions(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},e[n].version=i,e[n].addons={},e[n].uniqueId=0,e[n].defaults={extensions:[],initMenu:function(){},initPanels:function(){},navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},e[n].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[n].prototype={getInstance:function(){return this},initPanels:function(e){this._initPanels(e)},openPanel:function(t,i){if(this.trigger("openPanel:before",t),t&&t.length&&(t.is("."+s.panel)||(t=t.closest("."+s.panel)),t.is("."+s.panel))){var o=this;if("boolean"!=typeof i&&(i=!0),t.hasClass(s.vertical))t.add(t.parents("."+s.vertical)).removeClass(s.hidden).parent("li").addClass(s.opened),this.openPanel(t.parents("."+s.panel).not("."+s.vertical).first()),this.trigger("openPanel:start",t),this.trigger("openPanel:finish",t);else{if(t.hasClass(s.opened))return;var r=this.$pnls.children("."+s.panel),l=r.filter("."+s.opened);if(!e[n].support.csstransitions)return l.addClass(s.hidden).removeClass(s.opened),t.removeClass(s.hidden).addClass(s.opened),this.trigger("openPanel:start",t),void this.trigger("openPanel:finish",t);r.not(t).removeClass(s.subopened);for(var d=t.data(a.parent);d;)d=d.closest("."+s.panel),d.is("."+s.vertical)||d.addClass(s.subopened),d=d.data(a.parent);r.removeClass(s.highest).not(l).not(t).addClass(s.hidden),t.removeClass(s.hidden);var c=function(){l.removeClass(s.opened),t.addClass(s.opened),t.hasClass(s.subopened)?(l.addClass(s.highest),t.removeClass(s.subopened)):(l.addClass(s.subopened),t.addClass(s.highest)),this.trigger("openPanel:start",t)},h=function(){l.removeClass(s.highest).addClass(s.hidden),t.removeClass(s.highest),this.trigger("openPanel:finish",t)};i&&!t.hasClass(s.noanimation)?setTimeout(function(){o.__transitionend(t,function(){h.call(o)},o.conf.transitionDuration),c.call(o)},this.conf.openingInterval):(c.call(this),h.call(this))}this.trigger("openPanel:after",t)}},closePanel:function(e){this.trigger("closePanel:before",e);var t=e.parent();t.hasClass(s.vertical)&&(t.removeClass(s.opened),this.trigger("closePanel",e)),this.trigger("closePanel:after",e)},closeAllPanels:function(){this.trigger("closeAllPanels:before"),this.$pnls.find("."+s.listview).children().removeClass(s.selected).filter("."+s.vertical).removeClass(s.opened);var e=this.$pnls.children("."+s.panel),t=e.first();this.$pnls.children("."+s.panel).not(t).removeClass(s.subopened).removeClass(s.opened).removeClass(s.highest).addClass(s.hidden),this.openPanel(t),this.trigger("closeAllPanels:after")},togglePanel:function(e){var t=e.parent();t.hasClass(s.vertical)&&this[t.hasClass(s.opened)?"closePanel":"openPanel"](e)},setSelected:function(e){this.trigger("setSelected:before",e),this.$menu.find("."+s.listview).children("."+s.selected).removeClass(s.selected),e.addClass(s.selected),this.trigger("setSelected:after",e)},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=this,t=Array.prototype.slice.call(arguments),n=t.shift();if(this.cbck[n])for(var i=0,s=this.cbck[n].length;i<s;i++)this.cbck[n][i].apply(e,t)},matchMedia:function(e,t,n){var i={yes:t,no:n};this.mtch[e]=this.mtch[e]||[],this.mtch[e].push(i)},_initAddons:function(){this.trigger("initAddons:before");var t;for(t in e[n].addons)e[n].addons[t].add.call(this),e[n].addons[t].add=function(){};for(t in e[n].addons)e[n].addons[t].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var e=this;this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions});for(var t in this.opts.extensions)this.opts.extensions[t]=this.opts.extensions[t].length?"mm-"+this.opts.extensions[t].join(" mm-"):"",this.opts.extensions[t]&&!function(t){e.matchMedia(t,function(){this.$menu.addClass(this.opts.extensions[t])},function(){this.$menu.removeClass(this.opts.extensions[t])})}(t);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before");this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",s.mm(e(this).attr("id")))})),this.opts.initMenu.call(this,this.$menu,this.$orig),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=e('<div class="'+s.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu);var t=[s.menu];this.opts.slidingSubmenus||t.push(s.vertical),this.$menu.addClass(t.join(" ")).parent().addClass(s.wrapper),this.trigger("initMenu:after")},_initPanels:function(t){this.trigger("initPanels:before",t),t=t||this.$pnls.children(this.conf.panelNodetype);var n=e(),i=this,a=function(t){t.filter(this.conf.panelNodetype).each(function(){var t=i._initPanel(e(this));if(t){i._initNavbar(t),i._initListview(t),n=n.add(t);var o=t.children("."+s.listview).children("li").children(i.conf.panelNodeType).add(t.children("."+i.conf.classNames.panel));o.length&&a.call(i,o)}})};a.call(this,t),this.opts.initPanels.call(this,n),this.trigger("initPanels:after",n)},_initPanel:function(e){this.trigger("initPanel:before",e);if(e.hasClass(s.panel))return e;if(this.__refactorClass(e,this.conf.classNames.panel,"panel"),this.__refactorClass(e,this.conf.classNames.nopanel,"nopanel"),this.__refactorClass(e,this.conf.classNames.vertical,"vertical"),this.__refactorClass(e,this.conf.classNames.inset,"inset"),e.filter("."+s.inset).addClass(s.nopanel),e.hasClass(s.nopanel))return!1;var t=e.hasClass(s.vertical)||!this.opts.slidingSubmenus;e.removeClass(s.vertical);var n=e.attr("id")||this.__getUniqueId();e.removeAttr("id"),e.is("ul, ol")&&(e.wrap("<div />"),e=e.parent()),e.addClass(s.panel+" "+s.hidden).attr("id",n);var i=e.parent("li");return t?e.add(i).addClass(s.vertical):e.appendTo(this.$pnls),i.length&&(i.data(a.child,e),e.data(a.parent,i)),this.trigger("initPanel:after",e),e},_initNavbar:function(t){if(this.trigger("initNavbar:before",t),!t.children("."+s.navbar).length){var i=t.data(a.parent),o=e('<div class="'+s.navbar+'" />'),r=e[n].i18n(this.opts.navbar.title),l="";if(i&&i.length){if(i.hasClass(s.vertical))return;if(i.parent().is("."+s.listview))var d=i.children("a, span").not("."+s.next);else var d=i.closest("."+s.panel).find('a[href="#'+t.attr("id")+'"]');d=d.first(),i=d.closest("."+s.panel);var c=i.attr("id");switch(r=d.text(),this.opts.navbar.titleLink){case"anchor":l=d.attr("href");break;case"parent":l="#"+c}o.append('<a class="'+s.btn+" "+s.prev+'" href="#'+c+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&t.addClass(s.hasnavbar),o.append('<a class="'+s.title+'"'+(l.length?' href="'+l+'"':"")+">"+r+"</a>").prependTo(t),this.trigger("initNavbar:after",t)}},_initListview:function(t){this.trigger("initListview:before",t);var n=this.__childAddBack(t,"ul, ol");this.__refactorClass(n,this.conf.classNames.nolistview,"nolistview"),n.filter("."+this.conf.classNames.inset).addClass(s.nolistview);var i=n.not("."+s.nolistview).addClass(s.listview).children();this.__refactorClass(i,this.conf.classNames.selected,"selected"),this.__refactorClass(i,this.conf.classNames.divider,"divider"),this.__refactorClass(i,this.conf.classNames.spacer,"spacer");var o=t.data(a.parent);if(o&&o.parent().is("."+s.listview)&&!o.children("."+s.next).length){var r=o.children("a, span").first(),l=e('<a class="'+s.next+'" href="#'+t.attr("id")+'" />').insertBefore(r);r.is("span")&&l.addClass(s.fullsubopen)}this.trigger("initListview:after",t)},_initOpened:function(){this.trigger("initOpened:before");var e=this.$pnls.find("."+s.listview).children("."+s.selected).removeClass(s.selected).last().addClass(s.selected),t=e.length?e.closest("."+s.panel):this.$pnls.children("."+s.panel).first();this.openPanel(t,!1),this.trigger("initOpened:after")},_initAnchors:function(){var t=this;r.$body.on(o.click+"-oncanvas","a[href]",function(i){var a=e(this),o=!1,r=t.$menu.find(a).length;for(var l in e[n].addons)if(e[n].addons[l].clickAnchor.call(t,a,r)){o=!0;break}var d=a.attr("href");if(!o&&r&&d.length>1&&"#"==d.slice(0,1))try{var c=e(d,t.$menu);c.is("."+s.panel)&&(o=!0,t[a.parent().hasClass(s.vertical)?"togglePanel":"openPanel"](c))}catch(h){}if(o&&i.preventDefault(),!o&&r&&a.is("."+s.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){t.__valueOrFn(t.opts.onClick.setSelected,a)&&t.setSelected(e(i.target).parent());var f=t.__valueOrFn(t.opts.onClick.preventDefault,a,"#"==d.slice(0,1));f&&i.preventDefault(),t.__valueOrFn(t.opts.onClick.close,a,f)&&t.close()}})},_initMatchMedia:function(){var e=this;this._fireMatchMedia(),r.$wndw.on(o.resize,function(t){e._fireMatchMedia()})},_fireMatchMedia:function(){for(var e in this.mtch)for(var t=window.matchMedia&&window.matchMedia(e).matches?"yes":"no",n=0;n<this.mtch[e].length;n++)this.mtch[e][n][t].call(this)},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return this.conf.clone&&e&&e.length&&(e=s.umm(e)),e},__api:function(){var t=this,n={};return e.each(this._api,function(e){var i=this;n[i]=function(){var e=t[i].apply(t,arguments);return"undefined"==typeof e?n:e}}),n},__valueOrFn:function(e,t,n){return"function"==typeof e?e.call(t[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(s[n])},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__childAddBack:function(e,t){return e.children(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+s.divider).not("."+s.hidden)},__filterListItemAnchors:function(e){return this.__filterListItems(e).children("a").not("."+s.next)},__transitionend:function(e,t,n){var i=!1,s=function(n){"undefined"!=typeof n&&n.target!=e[0]||(i||(e.unbind(o.transitionend),e.unbind(o.webkitTransitionEnd),t.call(e[0])),i=!0)};e.on(o.transitionend,s),e.on(o.webkitTransitionEnd,s),setTimeout(s,1.1*n)},__getUniqueId:function(){return s.mm(e[n].uniqueId++)}},e.fn[n]=function(i,s){t(),i=e.extend(!0,{},e[n].defaults,i),s=e.extend(!0,{},e[n].configuration,s);var a=e();return this.each(function(){var t=e(this);if(!t.data(n)){var o=new e[n](t,i,s);o.$menu.data(n,o.__api()),a=a.add(o.$menu)}}),a},e[n].i18n=function(){var t={};return function(n){switch(typeof n){case"object":return e.extend(t,n),t;case"string":return t[n]||n;case"undefined":default:return t}}}(),e[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransitions||Modernizr.csstransitions}(),csstransforms:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms||Modernizr.csstransforms}(),csstransforms3d:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms3d||Modernizr.csstransforms3d}()};var s,a,o,r}}(jQuery),/*
 * jQuery mmenu offCanvas add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="offCanvas";e[t].addons[n]={setup:function(){if(this.opts[n]){var s=this,a=this.opts[n],r=this.conf[n];o=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),"object"!=typeof a&&(a={}),"top"!=a.position&&"bottom"!=a.position||(a.zposition="front"),a=this.opts[n]=e.extend(!0,{},e[t].defaults[n],a),"string"!=typeof r.pageSelector&&(r.pageSelector="> "+r.pageNodetype),o.$allMenus=(o.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var l=[i.offcanvas];"left"!=a.position&&l.push(i.mm(a.position)),"back"!=a.zposition&&l.push(i.mm(a.zposition)),e[t].support.csstransforms||l.push(i["no-csstransforms"]),e[t].support.csstransforms3d||l.push(i["no-csstransforms3d"]),this.bind("initMenu:after",function(){var e=this;this.setPage(o.$page),this._initBlocker(),this["_initWindow_"+n](),this.$menu.addClass(l.join(" ")).parent("."+i.wrapper).removeClass(i.wrapper),this.$menu[r.menuInsertMethod](r.menuInsertSelector);var t=window.location.hash;if(t){var s=this._getOriginalMenuId();s&&s==t.slice(1)&&setTimeout(function(){e.open()},1e3)}}),this.bind("initExtensions:after",function(){for(var e=[i.mm("widescreen"),i.mm("iconbar")],t=0;t<e.length;t++)for(var n in this.opts.extensions)if(this.opts.extensions[n].indexOf(e[t])>-1){!function(t,n){s.matchMedia(t,function(){o.$html.addClass(e[n])},function(){o.$html.removeClass(e[n])})}(n,t);break}}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)})}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"),s.add("style")},clickAnchor:function(e,t){var s=this;if(this.opts[n]){var a=this._getOriginalMenuId();if(a&&e.is('[href="#'+a+'"]')){if(t)return!0;var r=e.closest("."+i.menu);if(r.length){var l=r.data("mmenu");if(l&&l.close)return l.close(),s.__transitionend(r,function(){s.open()},s.conf.transitionDuration),!0}return this.open(),!0}if(o.$page)return a=o.$page.first().attr("id"),a&&e.is('[href="#'+a+'"]')?(this.close(),!0):void 0}}},e[t].defaults[n]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},e[t].configuration[n]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuInsertMethod:"prependTo",menuInsertSelector:"body"},e[t].prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},e[t].prototype._openSetup=function(){var t=this,r=this.opts[n];this.closeAllOthers(),o.$page.each(function(){e(this).data(s.style,e(this).attr("style")||"")}),o.$wndw.trigger(a.resize+"-"+n,[!0]);var l=[i.opened];r.blockUI&&l.push(i.blocking),"modal"==r.blockUI&&l.push(i.modal),r.moveBackground&&l.push(i.background),"left"!=r.position&&l.push(i.mm(this.opts[n].position)),"back"!=r.zposition&&l.push(i.mm(this.opts[n].zposition)),o.$html.addClass(l.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(i.opened)},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(o.$page.first(),function(){e.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),o.$html.addClass(i.opening)},e[t].prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var t=this;this.__transitionend(o.$page.first(),function(){t.$menu.removeClass(i.opened);var a=[i.opened,i.blocking,i.modal,i.background,i.mm(t.opts[n].position),i.mm(t.opts[n].zposition)];o.$html.removeClass(a.join(" ")),o.$page.each(function(){e(this).attr("style",e(this).data(s.style))}),t.vars.opened=!1,t.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),o.$html.removeClass(i.opening),this.trigger("close:after")}},e[t].prototype.closeAllOthers=function(){o.$allMenus.not(this.$menu).each(function(){var n=e(this).data(t);n&&n.close&&n.close()})},e[t].prototype.setPage=function(t){this.trigger("setPage:before",t);var s=this,a=this.conf[n];t&&t.length||(t=o.$body.find(a.pageSelector),a.noPageSelector.length&&(t=t.not(a.noPageSelector.join(", "))),t.length>1&&a.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())),t.each(function(){e(this).attr("id",e(this).attr("id")||s.__getUniqueId())}),t.addClass(i.page+" "+i.slideout),o.$page=t,this.trigger("setPage:after",t)},e[t].prototype["_initWindow_"+n]=function(){o.$wndw.off(a.keydown+"-"+n).on(a.keydown+"-"+n,function(e){if(o.$html.hasClass(i.opened)&&9==e.keyCode)return e.preventDefault(),!1});var e=0;o.$wndw.off(a.resize+"-"+n).on(a.resize+"-"+n,function(t,n){if(1==o.$page.length&&(n||o.$html.hasClass(i.opened))){var s=o.$wndw.height();(n||s!=e)&&(e=s,o.$page.css("minHeight",s))}})},e[t].prototype._initBlocker=function(){var t=this;this.opts[n].blockUI&&(o.$blck||(o.$blck=e('<div id="'+i.blocker+'" class="'+i.slideout+'" />')),o.$blck.appendTo(o.$body).off(a.touchstart+"-"+n+" "+a.touchmove+"-"+n).on(a.touchstart+"-"+n+" "+a.touchmove+"-"+n,function(e){e.preventDefault(),e.stopPropagation(),o.$blck.trigger(a.mousedown+"-"+n)}).off(a.mousedown+"-"+n).on(a.mousedown+"-"+n,function(e){e.preventDefault(),o.$html.hasClass(i.modal)||(t.closeAllOthers(),t.close())}))};var i,s,a,o}(jQuery),/*
 * jQuery mmenu scrollBugFix add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="scrollBugFix";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];o=e[t].glbl,e[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof s&&(s={fix:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),s.fix&&(this.bind("open:start",function(){this.$pnls.children("."+i.opened).scrollTop(0)}),this.bind("initMenu:after",function(){this["_initWindow_"+n]()})))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e},clickAnchor:function(e,t){}},e[t].defaults[n]={fix:!0},e[t].prototype["_initWindow_"+n]=function(){var t=this;o.$docu.off(a.touchmove+"-"+n).on(a.touchmove+"-"+n,function(e){o.$html.hasClass(i.opened)&&e.preventDefault()});var s=!1;o.$body.off(a.touchstart+"-"+n).on(a.touchstart+"-"+n,"."+i.panels+"> ."+i.panel,function(e){o.$html.hasClass(i.opened)&&(s||(s=!0,0===e.currentTarget.scrollTop?e.currentTarget.scrollTop=1:e.currentTarget.scrollHeight===e.currentTarget.scrollTop+e.currentTarget.offsetHeight&&(e.currentTarget.scrollTop-=1),s=!1))}).off(a.touchmove+"-"+n).on(a.touchmove+"-"+n,"."+i.panels+"> ."+i.panel,function(t){o.$html.hasClass(i.opened)&&e(this)[0].scrollHeight>e(this).innerHeight()&&t.stopPropagation()}),o.$wndw.off(a.orientationchange+"-"+n).on(a.orientationchange+"-"+n,function(){t.$pnls.children("."+i.opened).scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})};var i,s,a,o}(jQuery),/*
 * jQuery mmenu screenReader add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="screenReader";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n],l=this.conf[n];o=e[t].glbl,"boolean"==typeof r&&(r={aria:r,text:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),r.aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("open:finish",function(){this.trigger("open:finish:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+i.listview).children().each(function(){a.__sr_aria(e(this),"hidden",e(this).is("."+i.hidden))})}),this.bind("openPanel:start",function(e){var t=this.$menu.find("."+i.panel).not(e).not(e.parents("."+i.panel)),n=e.add(e.find("."+i.vertical+"."+i.opened).children("."+i.panel));this.__sr_aria(t,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(e){this.__sr_aria(e,"hidden",!0)}),this.bind("initPanels:after",function(t){var n=t.find("."+i.prev+", ."+i.next).each(function(){a.__sr_aria(e(this),"owns",e(this).attr("href").replace("#",""))});this.__sr_aria(n,"haspopup",!0)}),this.bind("initNavbar:after",function(e){var t=e.children("."+i.navbar);this.__sr_aria(t,"hidden",!e.hasClass(i.hasnavbar))}),r.text&&(this.bind("initlistview:after",function(e){var t=e.find("."+i.listview).find("."+i.fullsubopen).parent().children("span");this.__sr_aria(t,"hidden",!0)}),"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(e){var t=e.children("."+i.navbar),n=!!t.children("."+i.prev).length;this.__sr_aria(t.children("."+i.title),"hidden",n)}))),r.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])})}),this.bind("initNavbar:after",function(n){var s=n.children("."+i.navbar),a=s.children("."+i.title).text(),o=e[t].i18n(l.text.closeSubmenu);a&&(o+=" ("+a+")"),s.children("."+i.prev).html(this.__sr_text(o))}),this.bind("initListview:after",function(n){var o=n.data(s.parent);if(o&&o.length){var r=o.children("."+i.next),d=r.nextAll("span, a").first().text(),c=e[t].i18n(l.text[r.parent().is("."+i.vertical)?"toggleSubmenu":"openSubmenu"]);d&&(c+=" ("+d+")"),r.html(a.__sr_text(c))}}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("sronly")},clickAnchor:function(e,t){}},e[t].defaults[n]={aria:!0,text:!0},e[t].configuration[n]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},e[t].prototype.__sr_aria=function(e,t,n){e.prop("aria-"+t,n)[n?"attr":"removeAttr"]("aria-"+t,n)},e[t].prototype.__sr_text=function(e){return'<span class="'+i.sronly+'">'+e+"</span>"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu autoHeight add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="autoHeight";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof s&&s&&(s={height:"auto"}),"string"==typeof s&&(s={height:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),"auto"==s.height||"highest"==s.height){this.bind("initMenu:after",function(){this.$menu.addClass(i.autoheight)});var a=function(t){if(!this.opts.offCanvas||this.vars.opened){var n=Math.max(parseInt(this.$pnls.css("top"),10),0)||0,a=Math.max(parseInt(this.$pnls.css("bottom"),10),0)||0,o=0;this.$menu.addClass(i.measureheight),"auto"==s.height?(t=t||this.$pnls.children("."+i.opened),t.is("."+i.vertical)&&(t=t.parents("."+i.panel).not("."+i.vertical)),t.length||(t=this.$pnls.children("."+i.panel)),o=t.first().outerHeight()):"highest"==s.height&&this.$pnls.children().each(function(){var t=e(this);t.is("."+i.vertical)&&(t=t.parents("."+i.panel).not("."+i.vertical).first()),o=Math.max(o,t.outerHeight())}),this.$menu.height(o+n+a).removeClass(i.measureheight)}};this.opts.offCanvas&&this.bind("open:start",a),"highest"==s.height&&this.bind("initPanels:after",a),"auto"==s.height&&(this.bind("updateListview",a),this.bind("openPanel:start",a),this.bind("closePanel",a))}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("autoheight measureheight"),a.add("resize")},clickAnchor:function(e,t){}},e[t].defaults[n]={height:"default"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu backButton add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="backButton";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var s=this,a=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof a&&(a={close:a}),"object"!=typeof a&&(a={}),a=e.extend(!0,{},e[t].defaults[n],a),a.close){var r="#"+s.$menu.attr("id");this.bind("open:finish",function(e){location.hash!=r&&history.pushState(null,document.title,r)}),e(window).on("popstate",function(e){o.$html.hasClass(i.opened)?(e.stopPropagation(),s.close()):location.hash==r&&(e.stopPropagation(),s.open())})}}},add:function(){return window.history&&window.history.pushState?(i=e[t]._c,s=e[t]._d,void(a=e[t]._e)):void(e[t].addons[n].setup=function(){})},clickAnchor:function(e,t){}},e[t].defaults[n]={close:!1};var i,s,a,o}(jQuery),/*
 * jQuery mmenu columns add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="columns";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof s&&(s={add:s}),"number"==typeof s&&(s={add:!0,visible:s}),"object"!=typeof s&&(s={}),"number"==typeof s.visible&&(s.visible={min:s.visible,max:s.visible}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),s.add){s.visible.min=Math.max(1,Math.min(6,s.visible.min)),s.visible.max=Math.max(s.visible.min,Math.min(6,s.visible.max));for(var a=this.opts.offCanvas?this.$menu.add(o.$html):this.$menu,r="",l=0;l<=s.visible.max;l++)r+=" "+i.columns+"-"+l;r.length&&(r=r.slice(1));var d=function(e){var t=this.$pnls.children("."+i.subopened).length;e&&!e.hasClass(i.subopened)&&t++,t=Math.min(s.visible.max,Math.max(s.visible.min,t)),a.removeClass(r).addClass(i.columns+"-"+t)},c=function(t){t=t||this.$pnls.children("."+i.opened),this.$pnls.children("."+i.panel).removeClass(r).filter("."+i.subopened).add(t).slice(-s.visible.max).each(function(t){e(this).addClass(i.columns+"-"+t)})};this.bind("initMenu:after",function(){this.$menu.addClass(i.columns)}),this.bind("openPanel:start",d),this.bind("openPanel:start",c)}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("columns")},clickAnchor:function(t,s){if(!this.opts[n].add)return!1;if(s){var a=t.attr("href");if(a.length>1&&"#"==a.slice(0,1))try{var o=e(a,this.$menu);if(o.is("."+i.panel))for(var r=parseInt(t.closest("."+i.panel).attr("class").split(i.columns+"-")[1].split(" ")[0],10)+1;r>0;){var l=this.$pnls.children("."+i.columns+"-"+r);if(!l.length){r=-1;break}r++,l.removeClass(i.subopened).removeClass(i.opened).removeClass(i.highest).addClass(i.hidden)}}catch(d){}}}},e[t].defaults[n]={add:!1,visible:{min:1,max:3}};var i,s,a,o}(jQuery),/*
 * jQuery mmenu counters add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="counters";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof r&&(r={add:r,update:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("initListview:after",function(t){this.__refactorClass(e("em",t),this.conf.classNames[n].counter,"counter")}),r.add&&this.bind("initListview:after",function(t){var n;switch(r.addTo){case"panels":n=t;break;default:n=t.filter(r.addTo)}n.each(function(){var t=e(this).data(s.parent);t&&(t.children("em."+i.counter).length||t.prepend(e('<em class="'+i.counter+'" />')))})}),r.update){var l=function(t){t=t||this.$pnls.children("."+i.panel),t.each(function(){var t=e(this),n=t.data(s.parent);if(n){var o=n.children("em."+i.counter);o.length&&(t=t.children("."+i.listview),t.length&&o.html(a.__filterListItems(t.children()).length))}})};this.bind("initListview:after",l),this.bind("updateListview",l)}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("counter search noresultsmsg")},clickAnchor:function(e,t){}},e[t].defaults[n]={add:!1,addTo:"panels",count:!1},e[t].configuration.classNames[n]={counter:"Counter"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu dividers add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="dividers";e[t].addons[n]={setup:function(){var s=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof r&&(r={add:r,fixed:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("initListview:after",function(e){this.__refactorClass(e.find("li"),this.conf.classNames[n].collapsed,"collapsed")}),r.add&&this.bind("initListview:after",function(t){var n;switch(r.addTo){case"panels":n=t;break;default:n=t.filter(r.addTo)}n.length&&n.find("."+i.listview).find("."+i.divider).remove().end().each(function(){var t="";s.__filterListItems(e(this).children()).each(function(){var n=e.trim(e(this).children("a, span").text()).slice(0,1).toLowerCase();n!=t&&n.length&&(t=n,e('<li class="'+i.divider+'">'+n+"</li>").insertBefore(this))})})}),r.collapse&&this.bind("initListview:after",function(t){t.find("."+i.divider).each(function(){var t=e(this),n=t.nextUntil("."+i.divider,"."+i.collapsed);n.length&&(t.children("."+i.next).length||(t.wrapInner("<span />"),t.prepend('<a href="#" class="'+i.next+" "+i.fullsubopen+'" />')))})}),r.fixed){this.bind("initPanels:after",function(){"undefined"==typeof this.$fixeddivider&&(this.$fixeddivider=e('<ul class="'+i.listview+" "+i.fixeddivider+'"><li class="'+i.divider+'"></li></ul>').prependTo(this.$pnls).children())});var l=function(t){if(t=t||this.$pnls.children("."+i.opened),!t.is(":hidden")){var n=t.children("."+i.listview).children("."+i.divider).not("."+i.hidden),s=t.scrollTop()||0,a="";n.each(function(){e(this).position().top+s<s+1&&(a=e(this).text())}),this.$fixeddivider.text(a),this.$pnls[a.length?"addClass":"removeClass"](i.hasdividers)}};this.bind("open:start",l),this.bind("openPanel:start",l),this.bind("updateListview",l),this.bind("initPanel:after",function(e){e.off(a.scroll+"-"+n+" "+a.touchmove+"-"+n).on(a.scroll+"-"+n+" "+a.touchmove+"-"+n,function(t){l.call(s,e)})})}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("collapsed uncollapsed fixeddivider hasdividers"),a.add("scroll")},clickAnchor:function(e,t){if(this.opts[n].collapse&&t){var s=e.parent();if(s.is("."+i.divider)){var a=s.nextUntil("."+i.divider,"."+i.collapsed);return s.toggleClass(i.opened),a[s.hasClass(i.opened)?"addClass":"removeClass"](i.uncollapsed),!0}}return!1}},e[t].defaults[n]={add:!1,addTo:"panels",fixed:!1,collapse:!1},e[t].configuration.classNames[n]={collapsed:"Collapsed"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu drag add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function t(e,t,n){return e<t&&(e=t),e>n&&(e=n),e}function n(n,i,s){var r,l,d,c=this,h={events:"panleft panright",typeLower:"x",typeUpper:"X",open_dir:"right",close_dir:"left",negative:!1},f="width",u=h.open_dir,p=function(e){e<=n.maxStartPos&&(m=1)},v=function(){return e("."+o.slideout)},m=0,b=0,g=0;switch(this.opts.offCanvas.position){case"top":case"bottom":h.events="panup pandown",h.typeLower="y",h.typeUpper="Y",f="height"}switch(this.opts.offCanvas.position){case"right":case"bottom":h.negative=!0,p=function(e){e>=s.$wndw[f]()-n.maxStartPos&&(m=1)}}switch(this.opts.offCanvas.position){case"left":break;case"right":h.open_dir="left",h.close_dir="right";break;case"top":h.open_dir="down",h.close_dir="up";break;case"bottom":h.open_dir="up",h.close_dir="down"}switch(this.opts.offCanvas.zposition){case"front":v=function(){return this.$menu}}var _=this.__valueOrFn(n.node,this.$menu,s.$page);"string"==typeof _&&(_=e(_));var y=new Hammer(_[0],this.opts[a].vendors.hammer);y.on("panstart",function(e){p(e.center[h.typeLower]),s.$slideOutNodes=v(),u=h.open_dir}),y.on(h.events+" panend",function(e){m>0&&e.preventDefault()}),y.on(h.events,function(e){if(r=e["delta"+h.typeUpper],h.negative&&(r=-r),r!=b&&(u=r>=b?h.open_dir:h.close_dir),b=r,b>n.threshold&&1==m){if(s.$html.hasClass(o.opened))return;m=2,c._openSetup(),c.trigger("open:start"),s.$html.addClass(o.dragging),g=t(s.$wndw[f]()*i[f].perc,i[f].min,i[f].max)}2==m&&(l=t(b,10,g)-("front"==c.opts.offCanvas.zposition?g:0),h.negative&&(l=-l),d="translate"+h.typeUpper+"("+l+"px )",s.$slideOutNodes.css({"-webkit-transform":"-webkit-"+d,transform:d}))}),y.on("panend",function(e){2==m&&(s.$html.removeClass(o.dragging),s.$slideOutNodes.css("transform",""),c[u==h.open_dir?"_openFinish":"close"]()),m=0})}function i(e,t,n,i){var s=this,l=e.data(r.parent);if(l){l=l.closest("."+o.panel);var d=new Hammer(e[0],s.opts[a].vendors.hammer),c=null;d.on("panright",function(e){c||(s.openPanel(l),c=setTimeout(function(){clearTimeout(c),c=null},s.conf.openingInterval+s.conf.transitionDuration))})}}var s="mmenu",a="drag";e[s].addons[a]={setup:function(){if(this.opts.offCanvas){var t=this.opts[a],o=this.conf[a];d=e[s].glbl,"boolean"==typeof t&&(t={menu:t,panels:t}),"object"!=typeof t&&(t={}),"boolean"==typeof t.menu&&(t.menu={open:t.menu}),"object"!=typeof t.menu&&(t.menu={}),"boolean"==typeof t.panels&&(t.panels={close:t.panels}),"object"!=typeof t.panels&&(t.panels={}),t=this.opts[a]=e.extend(!0,{},e[s].defaults[a],t),t.menu.open&&this.bind("setPage:after",function(){n.call(this,t.menu,o.menu,d)}),t.panels.close&&this.bind("initPanel:after",function(e){i.call(this,e,t.panels,o.panels,d)})}},add:function(){return"function"!=typeof Hammer||Hammer.VERSION<2?(e[s].addons[a].add=function(){},void(e[s].addons[a].setup=function(){})):(o=e[s]._c,r=e[s]._d,l=e[s]._e,void o.add("dragging"))},clickAnchor:function(e,t){}},e[s].defaults[a]={menu:{open:!1,maxStartPos:100,threshold:50},panels:{close:!1},vendors:{hammer:{}}},e[s].configuration[a]={menu:{width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}},panels:{}};var o,r,l,d}(jQuery),/*
 * jQuery mmenu dropdown add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="dropdown";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var r=this,l=this.opts[n],d=this.conf[n];if(o=e[t].glbl,"boolean"==typeof l&&l&&(l={drop:l}),"object"!=typeof l&&(l={}),"string"==typeof l.position&&(l.position={of:l.position}),l=this.opts[n]=e.extend(!0,{},e[t].defaults[n],l),l.drop){var c;this.bind("initMenu:after",function(){if(this.$menu.addClass(i.dropdown),l.tip&&this.$menu.addClass(i.tip),"string"!=typeof l.position.of){var t=this._getOriginalMenuId();t&&t.length&&(l.position.of='[href="#'+t+'"]')}"string"==typeof l.position.of&&(c=e(l.position.of),l.event=l.event.split(" "),1==l.event.length&&(l.event[1]=l.event[0]),"hover"==l.event[0]&&c.on(a.mouseenter+"-"+n,function(){r.open()}),"hover"==l.event[1]&&this.$menu.on(a.mouseleave+"-"+n,function(){r.close()}))}),this.bind("open:start",function(){this.$menu.data(s.style,this.$menu.attr("style")||""),o.$html.addClass(i.dropdown)}),this.bind("close:finish",function(){this.$menu.attr("style",this.$menu.data(s.style)),o.$html.removeClass(i.dropdown)});var h=function(e,t){var n=t[0],s=t[1],a="x"==e?"scrollLeft":"scrollTop",r="x"==e?"outerWidth":"outerHeight",h="x"==e?"left":"top",f="x"==e?"right":"bottom",u="x"==e?"width":"height",p="x"==e?"maxWidth":"maxHeight",v=null,m=o.$wndw[a](),b=c.offset()[h]-=m,g=b+c[r](),_=o.$wndw[u](),y=d.offset.button[e]+d.offset.viewport[e];if(l.position[e])switch(l.position[e]){case"left":case"bottom":v="after";break;case"right":case"top":v="before"}null===v&&(v=b+(g-b)/2<_/2?"after":"before");var C,w;return"after"==v?(C="x"==e?b:g,w=_-(C+y),n[h]=C+d.offset.button[e],n[f]="auto",s.push(i["x"==e?"tipleft":"tiptop"])):(C="x"==e?g:b,w=C-y,n[f]="calc( 100% - "+(C-d.offset.button[e])+"px )",n[h]="auto",s.push(i["x"==e?"tipright":"tipbottom"])),n[p]=Math.min(d[u].max,w),[n,s]},f=function(e){if(this.vars.opened){this.$menu.attr("style",this.$menu.data(s.style));var t=[{},[]];t=h.call(this,"y",t),t=h.call(this,"x",t),this.$menu.css(t[0]),l.tip&&this.$menu.removeClass(i.tipleft+" "+i.tipright+" "+i.tiptop+" "+i.tipbottom).addClass(t[1].join(" "))}};this.bind("open:start",f),o.$wndw.on(a.resize+"-"+n,function(e){f.call(r)}),this.opts.offCanvas.blockUI||o.$wndw.on(a.scroll+"-"+n,function(e){f.call(r)})}}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("dropdown tip tipleft tipright tiptop tipbottom"),a.add("mouseenter mouseleave resize scroll")},clickAnchor:function(e,t){}},e[t].defaults[n]={drop:!1,event:"click",position:{},tip:!0},e[t].configuration[n]={offset:{button:{x:-10,y:10},viewport:{x:20,y:20}},height:{max:880},width:{max:440}};var i,s,a,o}(jQuery),/*
 * jQuery mmenu fixedElements add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="fixedElements";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var i=this.opts[n],s=this.conf[n];o=e[t].glbl,i=this.opts[n]=e.extend(!0,{},e[t].defaults[n],i);var a=function(t){var i=this.conf.classNames[n].fixed,a=t.find("."+i);this.__refactorClass(a,i,"slideout"),a[s.elemInsertMethod](s.elemInsertSelector);var r=this.conf.classNames[n].sticky,l=t.find("."+r);this.__refactorClass(l,r,"sticky"),l.length&&(this.bind("open:before",function(){var t=o.$wndw.scrollTop();l.each(function(){e(this).css("top",parseInt(e(this).css("top"),10)+t)})}),this.bind("close:finish",function(){l.css("top","")}))};this.bind("setPage:after",a)}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("sticky")},clickAnchor:function(e,t){}},e[t].configuration[n]={elemInsertMethod:"appendTo",elemInsertSelector:"body"},e[t].configuration.classNames[n]={fixed:"Fixed",sticky:"Sticky"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu iconPanels add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="iconPanels";e[t].addons[n]={setup:function(){var s=this,a=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof a&&(a={add:a}),"number"==typeof a&&(a={add:!0,visible:a}),"object"!=typeof a&&(a={}),a=this.opts[n]=e.extend(!0,{},e[t].defaults[n],a),a.visible++,a.add){for(var r="",l=0;l<=a.visible;l++)r+=" "+i.iconpanel+"-"+l;r.length&&(r=r.slice(1));var d=function(t){t.hasClass(i.vertical)||s.$pnls.children("."+i.panel).removeClass(r).filter("."+i.subopened).removeClass(i.hidden).add(t).not("."+i.vertical).slice(-a.visible).each(function(t){e(this).addClass(i.iconpanel+"-"+t)})};this.bind("initMenu:after",function(){this.$menu.addClass(i.iconpanel)}),this.bind("openPanel:start",d),this.bind("initPanels:after",function(e){d.call(s,s.$pnls.children("."+i.opened))}),this.bind("initListview:after",function(e){e.hasClass(i.vertical)||e.children("."+i.subblocker).length||e.prepend('<a href="#'+e.closest("."+i.panel).attr("id")+'" class="'+i.subblocker+'" />')})}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("iconpanel subblocker")},clickAnchor:function(e,t){}},e[t].defaults[n]={add:!1,visible:3};var i,s,a,o}(jQuery),/*
 * jQuery mmenu keyboardNavigation add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function t(t,n){t=t||this.$pnls.children("."+a.opened);var i=e(),s=this.$menu.children("."+a.mm("navbars-top")+", ."+a.mm("navbars-bottom")).children("."+a.navbar);s.find(d).filter(":focus").length||("default"==n&&(i=t.children("."+a.listview).find("a[href]").not("."+a.hidden),i.length||(i=t.find(d).not("."+a.hidden)),i.length||(i=s.find(d).not("."+a.hidden))),i.length||(i=this.$menu.children("."+a.tabstart)),i.first().focus())}function n(e){e||(e=this.$pnls.children("."+a.opened));var t=this.$pnls.children("."+a.panel),n=t.not(e);n.find(d).attr("tabindex",-1),e.find(d).attr("tabindex",0),e.find("."+a.mm("toggle")+", ."+a.mm("check")).attr("tabindex",-1),e.children("."+a.navbar).children("."+a.title).attr("tabindex",-1)}var i="mmenu",s="keyboardNavigation";e[i].addons[s]={setup:function(){if(!e[i].support.touch){var o=this.opts[s];this.conf[s];if(l=e[i].glbl,"boolean"!=typeof o&&"string"!=typeof o||(o={enable:o}),"object"!=typeof o&&(o={}),o=this.opts[s]=e.extend(!0,{},e[i].defaults[s],o),o.enable){var r=e('<button class="'+a.tabstart+'" tabindex="0" type="button" />'),d=e('<button class="'+a.tabend+'" tabindex="0" type="button" />');this.bind("initMenu:after",function(){o.enhance&&this.$menu.addClass(a.keyboardfocus),this["_initWindow_"+s](o.enhance)}),this.bind("initOpened:before",function(){this.$menu.prepend(r).append(d).children("."+a.mm("navbars-top")+", ."+a.mm("navbars-bottom")).children("."+a.navbar).children("a."+a.title).attr("tabindex",-1)}),this.bind("open:start",function(){n.call(this)}),this.bind("open:finish",function(){t.call(this,null,o.enable)}),this.bind("openPanel:start",function(e){n.call(this,e)}),this.bind("openPanel:finish",function(e){t.call(this,e,o.enable)}),this.bind("initOpened:after",function(){this.__sr_aria(this.$menu.children("."+a.mm("tabstart")+", ."+a.mm("tabend")),"hidden",!0)})}}},add:function(){a=e[i]._c,o=e[i]._d,r=e[i]._e,a.add("tabstart tabend keyboardfocus"),r.add("focusin keydown")},clickAnchor:function(e,t){}},e[i].defaults[s]={enable:!1,enhance:!1},e[i].configuration[s]={},e[i].prototype["_initWindow_"+s]=function(t){l.$wndw.off(r.keydown+"-offCanvas"),l.$wndw.off(r.focusin+"-"+s).on(r.focusin+"-"+s,function(t){if(l.$html.hasClass(a.opened)){var n=e(t.target);n.is("."+a.tabend)&&n.parent().find("."+a.tabstart).focus()}}),l.$wndw.off(r.keydown+"-"+s).on(r.keydown+"-"+s,function(t){var n=e(t.target),i=n.closest("."+a.menu);if(i.length){i.data("mmenu");if(n.is("input, textarea"));else switch(t.keyCode){case 13:(n.is(".mm-toggle")||n.is(".mm-check"))&&n.trigger(r.click);break;case 32:case 37:case 38:case 39:case 40:t.preventDefault()}}}),t&&l.$wndw.off(r.keydown+"-"+s).on(r.keydown+"-"+s,function(t){var n=e(t.target),i=n.closest("."+a.menu);if(i.length){var s=i.data("mmenu");if(n.is("input, textarea"))switch(t.keyCode){case 27:n.val("")}else switch(t.keyCode){case 8:var r=n.closest("."+a.panel).data(o.parent);r&&r.length&&s.openPanel(r.closest("."+a.panel));break;case 27:i.hasClass(a.offcanvas)&&s.close()}}})};var a,o,r,l,d="input, select, textarea, button, label, a[href]"}(jQuery),/*
 * jQuery mmenu lazySubmenus add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="lazySubmenus";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];o=e[t].glbl,"boolean"==typeof s&&(s={load:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),s.load&&(this.bind("initMenu:after",function(){this.$pnls.find("li").children(this.conf.panelNodetype).not("."+i.inset).not("."+i.nolistview).not("."+i.nopanel).addClass(i.lazysubmenu+" "+i.nolistview+" "+i.nopanel)}),this.bind("initPanels:before",function(e){e=e||this.$pnls.children(this.conf.panelNodetype),this.__findAddBack(e,"."+i.lazysubmenu).not("."+i.lazysubmenu+" ."+i.lazysubmenu).removeClass(i.lazysubmenu+" "+i.nolistview+" "+i.nopanel)}),this.bind("initOpened:before",function(){var e=this.$pnls.find("."+this.conf.classNames.selected).parents("."+i.lazysubmenu);e.length&&(e.removeClass(i.lazysubmenu+" "+i.nolistview+" "+i.nopanel),this.initPanels(e.last()))}),this.bind("openPanel:before",function(e){var t=this.__findAddBack(e,"."+i.lazysubmenu).not("."+i.lazysubmenu+" ."+i.lazysubmenu);t.length&&this.initPanels(t)}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("lazysubmenu"),s.add("lazysubmenu")},clickAnchor:function(e,t){}},e[t].defaults[n]={load:!1},e[t].configuration[n]={};var i,s,a,o}(jQuery),/*
 * jQuery mmenu navbar add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars";e[t].addons[n]={setup:function(){var s=this,a=this.opts[n],r=this.conf[n];if(o=e[t].glbl,"undefined"!=typeof a){a instanceof Array||(a=[a]);var l={},d={};a.length&&(e.each(a,function(o){var c=a[o];"boolean"==typeof c&&c&&(c={}),"object"!=typeof c&&(c={}),"undefined"==typeof c.content&&(c.content=["prev","title"]),c.content instanceof Array||(c.content=[c.content]),c=e.extend(!0,{},s.opts.navbar,c);var h=e('<div class="'+i.navbar+'" />'),f=c.height;"number"!=typeof f&&(f=1),f=Math.min(4,Math.max(1,f)),h.addClass(i.navbar+"-size-"+f);var u=c.position;"bottom"!=u&&(u="top"),l[u]||(l[u]=0),l[u]+=f,d[u]||(d[u]=e('<div class="'+i.navbars+"-"+u+'" />')),d[u].append(h);for(var p=0,v=0,m=c.content.length;v<m;v++){var b=e[t].addons[n][c.content[v]]||!1;b?p+=b.call(s,h,c,r):(b=c.content[v],b instanceof e||(b=e(c.content[v])),h.append(b))}p+=Math.ceil(h.children().not("."+i.btn).length/f),p>1&&h.addClass(i.navbar+"-content-"+p),h.children("."+i.btn).length&&h.addClass(i.hasbtns)}),this.bind("initMenu:after",function(){for(var e in l)this.$menu.addClass(i.hasnavbar+"-"+e+"-"+l[e]),this.$menu["bottom"==e?"append":"prepend"](d[e])}))}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("navbars close hasbtns")},clickAnchor:function(e,t){}},e[t].configuration[n]={breadcrumbSeparator:"/"},e[t].configuration.classNames[n]={};var i,s,a,o}(jQuery),/*
 * jQuery mmenu navbar add-on breadcrumbs content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="breadcrumbs";e[t].addons[n][i]=function(n,i,s){var a=this,o=e[t]._c,r=e[t]._d;o.add("breadcrumbs separator");var l=e('<span class="'+o.breadcrumbs+'" />').appendTo(n);return this.bind("initNavbar:after",function(t){t.removeClass(o.hasnavbar);for(var n=[],i=e('<span class="'+o.breadcrumbs+'"></span>'),a=t,l=!0;a&&a.length;){if(a.is("."+o.panel)||(a=a.closest("."+o.panel)),!a.hasClass(o.vertical)){var d=a.children("."+o.navbar).children("."+o.title).text();n.unshift(l?"<span>"+d+"</span>":'<a href="#'+a.attr("id")+'">'+d+"</a>"),l=!1}a=a.data(r.parent)}i.append(n.join('<span class="'+o.separator+'">'+s.breadcrumbSeparator+"</span>")).appendTo(t.children("."+o.navbar))}),this.bind("openPanel:start",function(e){l.html(e.children("."+o.navbar).children("."+o.breadcrumbs).html()||"")}),this.bind("initNavbar:after:sr-aria",function(t){t.children("."+o.navbar).children("."+o.breadcrumbs).children("a").each(function(){a.__sr_aria(e(this),"owns",e(this).attr("href").slice(1))})}),0}}(jQuery),/*
 * jQuery mmenu navbar add-on close content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="close";e[t].addons[n][i]=function(n,i){var s=e[t]._c,a=(e[t].glbl,e('<a class="'+s.close+" "+s.btn+'" href="#" />').appendTo(n));return this.bind("setPage:after",function(e){a.attr("href","#"+e.attr("id"))}),this.bind("setPage:after:sr-text",function(n){a.html(this.__sr_text(e[t].i18n(this.conf.screenReader.text.closeMenu))),this.__sr_aria(a,"owns",a.attr("href").slice(1))}),-1}}(jQuery),/*
 * jQuery mmenu navbar add-on next content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="next";e[t].addons[n][i]=function(i,s){var a,o,r,l=e[t]._c,d=e('<a class="'+l.next+" "+l.btn+'" href="#" />').appendTo(i);return this.bind("openPanel:start",function(e){a=e.find("."+this.conf.classNames[n].panelNext),o=a.attr("href"),r=a.html(),o?d.attr("href",o):d.removeAttr("href"),d[o||r?"removeClass":"addClass"](l.hidden),d.html(r)}),this.bind("openPanel:start:sr-aria",function(e){this.__sr_aria(d,"hidden",d.hasClass(l.hidden)),this.__sr_aria(d,"owns",(d.attr("href")||"").slice(1))}),-1},e[t].configuration.classNames[n].panelNext="Next"}(jQuery),/*
 * jQuery mmenu navbar add-on prev content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="prev";e[t].addons[n][i]=function(i,s){var a=e[t]._c,o=e('<a class="'+a.prev+" "+a.btn+'" href="#" />').appendTo(i);this.bind("initNavbar:after",function(e){e.removeClass(a.hasnavbar)});var r,l,d;return this.bind("openPanel:start",function(e){e.hasClass(a.vertical)||(r=e.find("."+this.conf.classNames[n].panelPrev),r.length||(r=e.children("."+a.navbar).children("."+a.prev)),l=r.attr("href"),d=r.html(),l?o.attr("href",l):o.removeAttr("href"),o[l||d?"removeClass":"addClass"](a.hidden),o.html(d))}),this.bind("initNavbar:after:sr-aria",function(e){var t=e.children("."+a.navbar);this.__sr_aria(t,"hidden",!0)}),this.bind("openPanel:start:sr-aria",function(e){this.__sr_aria(o,"hidden",o.hasClass(a.hidden)),this.__sr_aria(o,"owns",(o.attr("href")||"").slice(1))}),-1},e[t].configuration.classNames[n].panelPrev="Prev"}(jQuery),/*
 * jQuery mmenu navbar add-on searchfield content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="searchfield";e[t].addons[n][i]=function(n,i){var s=e[t]._c,a=e('<div class="'+s.search+'" />').appendTo(n);return"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=a,0}}(jQuery),/*
 * jQuery mmenu navbar add-on title content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="title";e[t].addons[n][i]=function(i,s){var a,o,r,l=e[t]._c,d=e('<a class="'+l.title+'" />').appendTo(i);this.bind("openPanel:start",function(e){e.hasClass(l.vertical)||(r=e.find("."+this.conf.classNames[n].panelTitle),r.length||(r=e.children("."+l.navbar).children("."+l.title)),a=r.attr("href"),o=r.html()||s.title,a?d.attr("href",a):d.removeAttr("href"),d[a||o?"removeClass":"addClass"](l.hidden),d.html(o))});var c;return this.bind("openPanel:start:sr-aria",function(e){if(this.opts.screenReader.text&&(c||(c=this.$menu.children("."+l.navbars+"-top, ."+l.navbars+"-bottom").children("."+l.navbar).children("."+l.prev)),c.length)){var t=!0;"parent"==this.opts.navbar.titleLink&&(t=!c.hasClass(l.hidden)),this.__sr_aria(d,"hidden",t)}}),0},e[t].configuration.classNames[n].panelTitle="Title"}(jQuery),/*
 * jQuery mmenu pageScroll add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function t(e){d&&d.length&&d.is(":visible")&&l.$html.add(l.$body).animate({scrollTop:d.offset().top+e}),d=!1}function n(e){try{return!("#"==e||"#"!=e.slice(0,1)||!l.$page.find(e).length)}catch(t){return!1}}var i="mmenu",s="pageScroll";e[i].addons[s]={setup:function(){var o=this,d=this.opts[s],c=this.conf[s];if(l=e[i].glbl,"boolean"==typeof d&&(d={scroll:d}),d=this.opts[s]=e.extend(!0,{},e[i].defaults[s],d),d.scroll&&this.bind("close:finish",function(){t(c.scrollOffset)}),d.update){var o=this,h=[],f=[];o.bind("initListview:after",function(t){o.__filterListItemAnchors(t.find("."+a.listview).children("li")).each(function(){var t=e(this).attr("href");n(t)&&h.push(t)}),f=h.reverse()});var u=-1;l.$wndw.on(r.scroll+"-"+s,function(t){for(var n=l.$wndw.scrollTop(),i=0;i<f.length;i++)if(e(f[i]).offset().top<n+c.updateOffset){u!==i&&(u=i,o.setSelected(o.__filterListItemAnchors(o.$pnls.children("."+a.opened).find("."+a.listview).children("li")).filter('[href="'+f[i]+'"]').parent()));break}})}},add:function(){a=e[i]._c,o=e[i]._d,r=e[i]._e},clickAnchor:function(i,o){if(d=!1,o&&this.opts[s].scroll&&this.opts.offCanvas&&l.$page&&l.$page.length){var r=i.attr("href");n(r)&&(d=e(r),l.$html.hasClass(a.mm("widescreen"))&&t(this.conf[s].scrollOffset))}}},e[i].defaults[s]={scroll:!1,update:!1},e[i].configuration[s]={scrollOffset:0,updateOffset:50};var a,o,r,l,d=!1}(jQuery),/*
 * jQuery mmenu RTL add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="rtl";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];o=e[t].glbl,"object"!=typeof s&&(s={use:s}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),"boolean"!=typeof s.use&&(s.use="rtl"==(o.$html.attr("dir")||"").toLowerCase()),s.use&&this.bind("initMenu:after",function(){this.$menu.addClass(i.rtl)})},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("rtl")},clickAnchor:function(e,t){}},e[t].defaults[n]={use:"detect"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu searchfield add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function t(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var n="mmenu",i="searchfield";e[n].addons[i]={setup:function(){var l=this,d=this.opts[i],c=this.conf[i];r=e[n].glbl,"boolean"==typeof d&&(d={add:d}),"object"!=typeof d&&(d={}),"boolean"==typeof d.resultsPanel&&(d.resultsPanel={add:d.resultsPanel}),d=this.opts[i]=e.extend(!0,{},e[n].defaults[i],d),c=this.conf[i]=e.extend(!0,{},e[n].configuration[i],c),this.bind("close:start",function(){this.$menu.find("."+s.search).find("input").blur()}),this.bind("initPanels:after",function(r){if(d.add){var h;switch(d.addTo){case"panels":h=r;break;default:h=this.$menu.find(d.addTo)}if(h.each(function(){var t=e(this);if(!t.is("."+s.panel)||!t.is("."+s.vertical)){if(!t.children("."+s.search).length){var i=l.__valueOrFn(c.clear,t),a=l.__valueOrFn(c.form,t),r=l.__valueOrFn(c.input,t),h=l.__valueOrFn(c.submit,t),f=e("<"+(a?"form":"div")+' class="'+s.search+'" />'),u=e('<input placeholder="'+e[n].i18n(d.placeholder)+'" type="text" autocomplete="off" />');f.append(u);var p;if(r)for(p in r)u.attr(p,r[p]);if(i&&e('<a class="'+s.btn+" "+s.clear+'" href="#" />').appendTo(f).on(o.click+"-searchfield",function(e){e.preventDefault(),u.val("").trigger(o.keyup+"-searchfield")}),a){for(p in a)f.attr(p,a[p]);h&&!i&&e('<a class="'+s.btn+" "+s.next+'" href="#" />').appendTo(f).on(o.click+"-searchfield",function(e){e.preventDefault(),f.submit()})}t.hasClass(s.search)?t.replaceWith(f):t.prepend(f).addClass(s.hassearch)}if(d.noResults){var v=t.closest("."+s.panel).length;if(v||(t=l.$pnls.children("."+s.panel).first()),!t.children("."+s.noresultsmsg).length){var m=t.children("."+s.listview).first(),b=e('<div class="'+s.noresultsmsg+" "+s.hidden+'" />');b.append(e[n].i18n(d.noResults))[m.length?"insertAfter":"prependTo"](m.length?m:t)}}}}),d.search){if(d.resultsPanel.add){d.showSubPanels=!1;var f=this.$pnls.children("."+s.resultspanel);f.length||(f=e('<div class="'+s.resultspanel+" "+s.noanimation+" "+s.hidden+'" />').appendTo(this.$pnls).append('<div class="'+s.navbar+" "+s.hidden+'"><a class="'+s.title+'">'+e[n].i18n(d.resultsPanel.title)+"</a></div>").append('<ul class="'+s.listview+'" />').append(this.$pnls.find("."+s.noresultsmsg).first().clone()),this._initPanel(f))}this.$menu.find("."+s.search).each(function(){var n,r,c=e(this),h=c.closest("."+s.panel).length;h?(n=c.closest("."+s.panel),r=n):(n=e("."+s.panel,l.pnls),r=l.$menu),d.resultsPanel.add&&(n=n.not(f));var u=c.children("input"),p=l.__findAddBack(n,"."+s.listview).children("li"),v=p.filter("."+s.divider),m=l.__filterListItems(p),b="a",g=b+", span",_="",y=function(){var t=u.val().toLowerCase();if(t!=_){if(_=t,d.resultsPanel.add&&f.children("."+s.listview).empty(),n.scrollTop(0),m.add(v).addClass(s.hidden).find("."+s.fullsubopensearch).removeClass(s.fullsubopen+" "+s.fullsubopensearch),m.each(function(){var t=e(this),n=b;(d.showTextItems||d.showSubPanels&&t.find("."+s.next))&&(n=g);var i=t.data(a.searchtext)||t.children(n).not("."+s.next).text();i.toLowerCase().indexOf(_)>-1&&t.add(t.prevAll("."+s.divider).first()).removeClass(s.hidden)}),d.showSubPanels&&n.each(function(t){var n=e(this);l.__filterListItems(n.find("."+s.listview).children()).each(function(){var t=e(this),n=t.data(a.child);t.removeClass(s.nosubresults),n&&n.find("."+s.listview).children().removeClass(s.hidden)})}),d.resultsPanel.add)if(""===_)this.closeAllPanels(),this.openPanel(this.$pnls.children("."+s.subopened).last());else{var i=e();n.each(function(){var t=l.__filterListItems(e(this).find("."+s.listview).children()).not("."+s.hidden).clone(!0);t.length&&(d.resultsPanel.dividers&&(i=i.add('<li class="'+s.divider+'">'+e(this).children("."+s.navbar).children("."+s.title).text()+"</li>")),t.children("."+s.mm("toggle")+", ."+s.mm("check")).remove(),i=i.add(t))}),i.find("."+s.next).remove(),f.children("."+s.listview).append(i),this.openPanel(f)}else e(n.get().reverse()).each(function(t){var n=e(this),i=n.data(a.parent);i&&(l.__filterListItems(n.find("."+s.listview).children()).length?(i.hasClass(s.hidden)&&i.children("."+s.next).not("."+s.fullsubopen).addClass(s.fullsubopen).addClass(s.fullsubopensearch),i.removeClass(s.hidden).removeClass(s.nosubresults).prevAll("."+s.divider).first().removeClass(s.hidden)):h||(n.hasClass(s.opened)&&setTimeout(function(){l.openPanel(i.closest("."+s.panel))},(t+1)*(1.5*l.conf.openingInterval)),i.addClass(s.nosubresults)))});r.find("."+s.noresultsmsg)[m.not("."+s.hidden).length?"addClass":"removeClass"](s.hidden),this.trigger("updateListview")}};u.off(o.keyup+"-"+i+" "+o.change+"-"+i).on(o.keyup+"-"+i,function(e){t(e.keyCode)||y.call(l)}).on(o.change+"-"+i,function(e){y.call(l)});var C=c.children("."+s.btn);C.length&&u.on(o.keyup+"-"+i,function(e){C[u.val().length?"removeClass":"addClass"](s.hidden)}),u.trigger(o.keyup+"-"+i)})}}})},add:function(){s=e[n]._c,a=e[n]._d,o=e[n]._e,s.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"),a.add("searchtext"),o.add("change keyup")},clickAnchor:function(e,t){}},e[n].defaults[i]={add:!1,addTo:"panels",placeholder:"Search",noResults:"No results found.",resultsPanel:{add:!1,dividers:!0,title:"Search results"},search:!0,showTextItems:!1,showSubPanels:!0},e[n].configuration[i]={clear:!1,form:!1,input:!1,submit:!1};var s,a,o,r}(jQuery),/*
 * jQuery mmenu setSelected add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="setSelected";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof r&&(r={hover:r,parent:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),"detect"==r.current){var l=function(e){e=e.split("?")[0].split("#")[0];var t=a.$menu.find('a[href="'+e+'"], a[href="'+e+'/"]');t.length?a.setSelected(t.parent(),!0):(e=e.split("/").slice(0,-1),e.length&&l(e.join("/")))};this.bind("initMenu:after",function(){l(window.location.href)})}else r.current||this.bind("initListview:after",function(e){this.$pnls.find("."+i.listview).children("."+i.selected).removeClass(i.selected)});r.hover&&this.bind("initMenu:after",function(){this.$menu.addClass(i.hoverselected)}),r.parent&&(this.bind("openPanel:finish",function(e){this.$pnls.find("."+i.listview).find("."+i.next).removeClass(i.selected);for(var t=e.data(s.parent);t;)t.not("."+i.vertical).children("."+i.next).addClass(i.selected),t=t.closest("."+i.panel).data(s.parent)}),this.bind("initMenu:after",function(){this.$menu.addClass(i.parentselected)}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("hoverselected parentselected")},clickAnchor:function(e,t){}},e[t].defaults[n]={current:!0,hover:!1,parent:!1};var i,s,a,o}(jQuery),/*
 * jQuery mmenu sectionIndexer add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="sectionIndexer";e[t].addons[n]={setup:function(){var s=this,r=this.opts[n];this.conf[n];o=e[t].glbl,"boolean"==typeof r&&(r={add:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("initPanels:after",function(t){if(r.add){var o;switch(r.addTo){case"panels":o=t;break;default:o=e(r.addTo,this.$menu).filter("."+i.panel)}o.find("."+i.divider).closest("."+i.panel).addClass(i.hasindexer),this.$indexer||(this.$indexer=e('<div class="'+i.indexer+'" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'),this.$indexer.children().on(a.mouseover+"-"+n+" "+a.touchstart+"-"+n,function(t){var n=e(this).attr("href").slice(1),a=s.$pnls.children("."+i.opened),o=a.find("."+i.listview),r=-1,l=a.scrollTop();a.scrollTop(0),o.children("."+i.divider).not("."+i.hidden).each(function(){r<0&&n==e(this).text().slice(0,1).toLowerCase()&&(r=e(this).position().top)}),a.scrollTop(r>-1?r:l)}));var l=function(e){e=e||this.$pnls.children("."+i.opened),this.$menu[(e.hasClass(i.hasindexer)?"add":"remove")+"Class"](i.hasindexer)};this.bind("openPanel:start",l),this.bind("initPanels:after",l)}})},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("indexer hasindexer"),a.add("mouseover")},clickAnchor:function(e,t){if(e.parent().is("."+i.indexer))return!0}},e[t].defaults[n]={add:!1,addTo:"panels"};var i,s,a,o}(jQuery),/*
 * jQuery mmenu toggles add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="toggles";e[t].addons[n]={setup:function(){var s=this;this.opts[n],this.conf[n];o=e[t].glbl,this.bind("initListview:after",function(t){this.__refactorClass(t.find("input"),this.conf.classNames[n].toggle,"toggle"),this.__refactorClass(t.find("input"),this.conf.classNames[n].check,"check"),t.find("input."+i.toggle+", input."+i.check).each(function(){var t=e(this),n=t.closest("li"),a=t.hasClass(i.toggle)?"toggle":"check",o=t.attr("id")||s.__getUniqueId();n.children('label[for="'+o+'"]').length||(t.attr("id",o),n.prepend(t),e('<label for="'+o+'" class="'+i[a]+'"></label>').insertBefore(n.children("a, span").last()))})})},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("toggle check")},clickAnchor:function(e,t){}},e[t].configuration.classNames[n]={toggle:"Toggle",check:"Check"};var i,s,a,o}(jQuery);
return true;
}));




;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_mhead_js = factory(root.jQuery);
  }
}(this, function(jQuery) {
/*
 * jQuery mhead v1.0.1
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl/mhead-plugin
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-4.0
 * http://creativecommons.org/licenses/by/4.0/
 */
!function(t){function i(){t[n].glbl||(a={$wndw:t(window),$docu:t(document),$html:t("html"),$body:t("body")},o={},r={},h={},t.each([o,r,h],function(t,i){i.add=function(t){t=t.split(" ");for(var n=0,s=t.length;n<s;n++)i[t[n]]=i.mh(t[n])}}),o.mh=function(t){return"mh-"+t},o.add("head sticky scrolledout align btns list hamburger"),o.umh=function(t){return"mh-"==t.slice(0,3)&&(t=t.slice(3)),t},r.mh=function(t){return"mh-"+t},h.mh=function(t){return t+".mh"},h.add("scroll click"),t[n]._c=o,t[n]._d=r,t[n]._e=h,t[n].glbl=a)}var n="mhead",s="1.0.1";if(!(t[n]&&t[n].version>s)){t[n]=function(t,i,n){return this.$head=t,this.opts=i,this.conf=n,this._initButtons(),this._initList(),this._initHamburger(),this._initScroll(),this},t[n].version=s,t[n].defaults={scroll:{hide:0,show:0,tolerance:4},hamburger:{menu:null,animation:"collapse"}},t[n].configuration={initButtons:!0,initList:!0,initHamburger:!0,initScroll:!0},t[n].prototype={_initButtons:function(){if(!this.conf.initButtons)return this;var t=!1,i={left:0,right:0},n=0,s=0;for(var r in i)t=t||this.$head.hasClass(o.align+"-"+r),(n=this.$head.children("."+o.btns+"-"+r).children().length)&&(s=Math.max(n,s),i[r]=n);if(!t)for(var r in i)i[r]=s;for(var r in i)if(i[r]){var h=o.btns+"-"+r;i[r]>1&&(h+="-"+i[r]),this.$head.addClass(h)}return this},_initList:function(){return this.conf.initList?void this.$head.find("."+o.list).each(function(){t(this).children().appendTo(this)}):this},_initScroll:function(){if(!this.conf.initScroll)return this;if(!this.opts.scroll||this.opts.scroll.hide===!1)return this;this.$head.hasClass(o.sticky)||this.$head.addClass(o.sticky);var t=this,i=0,n=null,s=this.$head.offset().top+this.$head.outerHeight();return this.opts.scroll.hide=Math.max(s,this.opts.scroll.hide||0),this.opts.scroll.show=Math.max(s,this.opts.scroll.show||0),a.$wndw.on(h.scroll,function(){var s=a.$wndw.scrollTop(),r=i-s,h=r<0?"down":"up";r=Math.abs(r),i=s,null===n&&(n=s>t.opts.scroll.show),n?"up"==h&&(s<t.opts.scroll.show||r>t.opts.scroll.tolerance)&&(n=!1,t.$head.removeClass(o.scrolledout)):"down"==h&&s>t.opts.scroll.hide&&r>t.opts.scroll.tolerance&&(n=!0,t.$head.addClass(o.scrolledout))}).trigger(h.scroll),this},_initHamburger:function(){if(!this.conf.initHamburger)return this;var i=this.$head.find("."+o.hamburger);if(i.length){var n=this;return i.each(function(){var i=t(this),s=t('<button class="hamburger"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button>'),o=i.attr("href");i.replaceWith(s),s.addClass("hamburger--"+n.opts.hamburger.animation);for(var r=t(),a=[o,n.opts.hamburger.menu,".mm-menu"],e=0;e<a.length;e++)if(a[e]&&(r=t(a[e]),r.length&&r.is(".mm-menu"))){r=r.first();break}var l=r.data("mmenu");s.on(h.click,function(){l.open()}),l.bind("open:finish",function(){setTimeout(function(){s.addClass("is-active")},100)}),l.bind("close:finish",function(){setTimeout(function(){s.removeClass("is-active")},100)})}),this}}},t.fn[n]=function(s,o){return i(),s=t.extend(!0,{},t[n].defaults,s),o=t.extend(!0,{},t[n].configuration,o),this.each(function(){var i=t(this);if(!i.data(n)){var r=new t[n](i,s,o);i.data(n,r)}})},t[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1};var o,r,h,a}}(jQuery);
return true;
}));





///////////////////////// end mobile menu /////////////////////////




var ddsmoothmenu = {

///////////////////////// Global Configuration Options: /////////////////////////

mobilemediaquery: "screen and (max-width: 920px)", // CSS media query string that when matched activates mobile menu (while hiding default)
//Specify full URL to down and right arrow images (23 is padding-right for top level LIs with drop downs, 6 is for vertical top level items with fly outs):
arrowimages: {down:['downarrowclass'], right:['rightarrowclass', 'js/menu/right.png', 6], left:['leftarrowclass', 'js/menu/left.gif']},
transition: {overtime:300, outtime:300}, //duration of slide in/ out animation, in milliseconds
mobiletransition: 200, // duration of slide animation in mobile menu, in milliseconds
shadow: false, //enable shadow? (offsets now set in ddsmoothmenu.css stylesheet)
showhidedelay: {showdelay: 100, hidedelay: 200}, //set delay in milliseconds before sub menus appear and disappear, respectively
zindexvalue: 60000, //set z-index value for menus
closeonnonmenuclick: true, //when clicking outside of any "toggle" method menu, should all "toggle" menus close? 
closeonmouseout: false, //when leaving a "toggle" menu, should all "toggle" menus close? Will not work on touchscreen

/////////////////////// End Global Configuration Options ////////////////////////

overarrowre: /(?=\.(gif|jpg|jpeg|png|bmp))/i,
overarrowaddtofilename: '_over',
detecttouch: !!('ontouchstart' in window) || !!('ontouchstart' in document.documentElement) || !!window.ontouchstart || (!!window.Touch && !!window.Touch.length) || !!window.onmsgesturechange || (window.DocumentTouch && window.document instanceof window.DocumentTouch),
detectwebkit: navigator.userAgent.toLowerCase().indexOf("applewebkit") > -1, //detect WebKit browsers (Safari, Chrome etc)
detectchrome: navigator.userAgent.toLowerCase().indexOf("chrome") > -1, //detect chrome
ismobile: navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) != null, //boolean check for popular mobile browsers
idevice: /ipad|iphone/i.test(navigator.userAgent),
detectie6: (function(){var ie; return (ie = /MSIE (\d+)/.exec(navigator.userAgent)) && ie[1] < 7;})(),
detectie9: (function(){var ie; return (ie = /MSIE (\d+)/.exec(navigator.userAgent)) && ie[1] > 8;})(),
ie9shadow: function(){},
css3support: typeof document.documentElement.style.boxShadow === 'string' || (!document.all && document.querySelector), //detect browsers that support CSS3 box shadows (ie9+ or FF3.5+, Safari3+, Chrome etc)
prevobjs: [], menus: null,
mobilecontainer: {$main: null, $topulsdiv: null, $toggler: null, hidetimer: null},
mobilezindexvalue: 2000, // mobile menus starting zIndex

executelink: function($, prevobjs, e){
	var prevscount = prevobjs.length, link = e.target;
	while(--prevscount > -1){
		if(prevobjs[prevscount] === this){
			prevobjs.splice(prevscount, 1);
			if(link.href !== ddsmoothmenu.emptyhash && link.href && $(link).is('a') && !$(link).children('span.' + ddsmoothmenu.arrowimages.down[0] +', span.' + ddsmoothmenu.arrowimages.right[0]).length){
				if(link.target && link.target !== '_self'){
					window.open(link.href, link.target);
				} else {
					window.location.href = link.href;
				}
				e.stopPropagation();
			}
		}
	}
},

repositionv: function($subul, $link, newtop, winheight, doctop, method, menutop){
	menutop = menutop || 0;
	var topinc = 0, doclimit = winheight + doctop;
	$subul.css({top: newtop, display: 'block'});
	while($subul.offset().top < doctop) {
		$subul.css({top: ++newtop});
		++topinc;
	}
	if(!topinc && $link.offset().top + $link.outerHeight() < doclimit && $subul.data('height') + $subul.offset().top > doclimit){
		$subul.css({top: doctop - $link.parents('ul').last().offset().top - $link.position().top});
	}
	method === 'toggle' && $subul.css({display: 'none'});
	if(newtop !== menutop){$subul.addClass('repositionedv');}
	return [topinc, newtop];
},

updateprev: function($, prevobjs, $curobj){
	var prevscount = prevobjs.length, prevobj, $indexobj = $curobj.parents().add(this);
	while(--prevscount > -1){
		if($indexobj.index((prevobj = prevobjs[prevscount])) < 0){
			$(prevobj).trigger('click', [1]);
			prevobjs.splice(prevscount, 1);
		}
	}
	prevobjs.push(this);
},

subulpreventemptyclose: function(e){
	var link = e.target;
	if(link.href === ddsmoothmenu.emptyhash && $(link).parent('li').find('ul').length < 1){
		e.preventDefault();
		e.stopPropagation();
	}
},

getajaxmenu: function($, setting, nobuild){ //function to fetch external page containing the panel DIVs
	var $menucontainer=$('#'+setting.contentsource[0]); //reference empty div on page that will hold menu
	$menucontainer.html("Loading Menu...");
	$.ajax({
		url: setting.contentsource[1], //path to external menu file
		async: true,
		dataType: 'html',
		error: function(ajaxrequest){
			setting.menustate = "error"
			$menucontainer.html('Error fetching content. Server Response: '+ajaxrequest.responseText);
		},
		success: function(content){
			setting.menustate = "fetched"
			$menucontainer.html(content).find('#' + setting.mainmenuid).css('display', 'block');
			!!!nobuild && ddsmoothmenu.buildmenu($, setting);
		}
	});
},

getajaxmenuMobile: function($, setting){ //function to fetch external page containing the primary menu UL
	setting.mobilemenustate = 'fetching'
	$.ajax({
		url: setting.contentsource[1], //path to external menu file
		async: true,
		dataType: 'html',
		error: function(ajaxrequest){
			setting.mobilemenustate = 'error'
			alert("Error fetching Ajax content " + ajaxrequest.responseText)
		},
		success: function(content){
			var $ul = $(content).find('>ul')
			setting.mobilemenustate = 'fetched'
			ddsmoothmenu.buildmobilemenu($, setting, $ul);
		}
	});
},

closeall: function(e){
	var smoothmenu = ddsmoothmenu, prevscount;
	if(!smoothmenu.globaltrackopen){return;}
	if(e.type === 'mouseleave' || ((e.type === 'click' || e.type === 'touchstart') && smoothmenu.menus.index(e.target) < 0)){
		prevscount = smoothmenu.prevobjs.length;
		while(--prevscount > -1){
			$(smoothmenu.prevobjs[prevscount]).trigger('click');
			smoothmenu.prevobjs.splice(prevscount, 1);
		}
	}
},

emptyhash: $('<a href="#"></a>').get(0).href,

togglemobile: function(action, duration){
	if (!this.mobilecontainer.$main)
		return
	clearTimeout(this.mobilecontainer.hidetimer)
	var $mobilemenu = this.mobilecontainer.$main
	var duration = duration || this.mobiletransition
	if ($mobilemenu.css('visibility') == 'hidden' && (!action || action == 'open')){
		$mobilemenu.css({left: '-100%', visibility: 'visible'}).animate({left: 0}, duration)
		this.mobilecontainer.$toggler.addClass('open')
	}
	else if ($mobilemenu.css('visibility') == 'visible' && (!action || action != 'open')){
		$mobilemenu.animate({left: '-100%'}, duration, function(){this.style.visibility = 'hidden'})
		this.mobilecontainer.$toggler.removeClass('open')
	}
	return false
	
},

buildmobilemenu: function($, setting, $ul){

	function flattenuls($mainul, cloneulBol, callback, finalcall){
		var callback = callback || function(){}
		var finalcall = finalcall || function(){}
		var $headers = $mainul.find('ul').parent()
		var $mainulcopy = cloneulBol? $mainul.clone() : $mainul
		var $flattened = jQuery(document.createDocumentFragment())
		var $headers = $mainulcopy.find('ul').parent()
		for (var i=$headers.length-1; i>=0; i--){ // loop through headers backwards, so we end up with topmost UL last
			var $header = $headers.eq(i)
			var $subul = $header.find('>ul').prependTo($flattened)
			callback(i, $header, $subul)
		}
		$mainulcopy.prependTo($flattened) // Add top most UL to collection
		finalcall($mainulcopy)
		return $flattened
	}

	var $mainmenu = $('#' + setting.mainmenuid)
	var $mainul = $ul
	var $topulref = null

	var flattened = flattenuls($mainul, false,
		function(i, $header, $subul){ // loop through header LIs and sub ULs
			$subul.addClass("submenu")
			var $breadcrumb = $('<li class="breadcrumb" />')
				.html('<img src="' + ddsmoothmenu.arrowimages.left[1] +'" class="' + ddsmoothmenu.arrowimages.left[0] +'" />' + $header.text())
				.prependTo($subul)
			$header.find('a:eq(0)').append('<img src="' + ddsmoothmenu.arrowimages.right[1] +'" class="' + ddsmoothmenu.arrowimages.right[0] +'" />')
			$header.on('click', function(e){
				var $headermenu = $(this).parent('ul')
				$headermenu = $headermenu.hasClass('submenu')? $headermenu : $headermenu.parent()
				$headermenu.css({zIndex: ddsmoothmenu.mobilezindexvalue++, left: 0}).animate({left: '-100%'}, ddsmoothmenu.mobiletransition)
				$subul.css({zIndex: ddsmoothmenu.mobilezindexvalue++, left: '100%'}).animate({left: 0}, ddsmoothmenu.mobiletransition)
				e.stopPropagation()
				e.preventDefault()
			})
			$breadcrumb.on('click', function(e){
				var $headermenu = $header.parent('ul')
				$headermenu = $headermenu.hasClass('submenu')? $headermenu : $headermenu.parent()
				$headermenu.css({zIndex: ddsmoothmenu.mobilezindexvalue++, left: '-100%'}).animate({left: 0}, ddsmoothmenu.mobiletransition)
				$subul.css({zIndex: ddsmoothmenu.mobilezindexvalue++, left: 0}).animate({left: '100%'}, ddsmoothmenu.mobiletransition)
				e.stopPropagation()
				e.preventDefault()
			})
		},
		function($topul){
			$topulref = $topul
		}
	)


	if (!this.mobilecontainer.$main){ // if primary mobile menu container not defined yet
		var $maincontainer = $('<div class="ddsmoothmobile"><div class="topulsdiv"></div></div>').appendTo(document.body)
		$maincontainer
			.css({zIndex: this.mobilezindexvalue++, left: '-100%', visibility: 'hidden'})
			.on('click', function(e){ // assign click behavior to mobile container
				ddsmoothmenu.mobilecontainer.hidetimer = setTimeout(function(){
					ddsmoothmenu.togglemobile('close', 0)
				}, 50)
				e.stopPropagation()
			})
			.on('touchstart', function(e){
				e.stopPropagation()
			})
		var $topulsdiv = $maincontainer.find('div.topulsdiv')
		var $mobiletoggler = $('#ddsmoothmenu-mobiletoggle').css({display: 'block'})
		$mobiletoggler
			.on('click', function(e){ // assign click behavior to main mobile menu toggler
				ddsmoothmenu.togglemobile()
				e.stopPropagation()
			})
			.on('touchstart', function(e){
				e.stopPropagation()
			})		
		var hidemobilemenuevent = /(iPad|iPhone|iPod)/g.test( navigator.userAgent )? 'touchstart' : 'click' // ios doesnt seem to respond to clicks on BODY
		$(document.body).on(hidemobilemenuevent, function(e){
			if (!$maincontainer.is(':animated'))
				ddsmoothmenu.togglemobile('close', 0)
		})

		this.mobilecontainer.$main = $maincontainer
		this.mobilecontainer.$topulsdiv = $topulsdiv
		this.mobilecontainer.$toggler = $mobiletoggler
	}
	else{ // else, just reference mobile container on page
		var $maincontainer = this.mobilecontainer.$main
		var $topulsdiv = this.mobilecontainer.$topulsdiv
	}
	$topulsdiv.append($topulref).css({zIndex: this.mobilezindexvalue++})
	$maincontainer.append(flattened)

	setting.mobilemenustate = 'done'
	

},

buildmenu: function($, setting){
	// additional step to detect true touch support. Chrome desktop mistakenly returns true for this.detecttouch
	var detecttruetouch = (this.detecttouch && !this.detectchrome) || (this.detectchrome && this.ismobile)
	var smoothmenu = ddsmoothmenu;
	smoothmenu.globaltrackopen = smoothmenu.closeonnonmenuclick || smoothmenu.closeonmouseout;
	var zsub = 0; //subtractor to be incremented so that each top level menu can be covered by previous one's drop downs
	var prevobjs = smoothmenu.globaltrackopen? smoothmenu.prevobjs : [];
	var $mainparent = $("#"+setting.mainmenuid).removeClass("ddsmoothmenu ddsmoothmenu-v").addClass(setting.classname || "ddsmoothmenu");
	setting.repositionv = setting.repositionv !== false;
	var $mainmenu = $mainparent.find('>ul'); //reference main menu UL
	var method = (detecttruetouch)? 'toggle' : setting.method === 'toggle'? 'toggle' : 'hover';
	var $topheaders = $mainmenu.find('>li>ul').parent();//has('ul');
	var orient = setting.orientation!='v'? 'down' : 'right', $parentshadow = $(document.body);
	$mainmenu.click(function(e){e.target.href === smoothmenu.emptyhash && e.preventDefault();});
	if(method === 'toggle') {
		if(smoothmenu.globaltrackopen){
			smoothmenu.menus = smoothmenu.menus? smoothmenu.menus.add($mainmenu.add($mainmenu.find('*'))) : $mainmenu.add($mainmenu.find('*'));
		}
		if(smoothmenu.closeonnonmenuclick){
			if(orient === 'down'){$mainparent.click(function(e){e.stopPropagation();});}
			$(document).unbind('click.smoothmenu').bind('click.smoothmenu', smoothmenu.closeall);
			if(smoothmenu.idevice){
				document.removeEventListener('touchstart', smoothmenu.closeall, false);
				document.addEventListener('touchstart', smoothmenu.closeall, false);
			}
		} else if (setting.closeonnonmenuclick){
			if(orient === 'down'){$mainparent.click(function(e){e.stopPropagation();});}
			$(document).bind('click.' + setting.mainmenuid, function(e){$mainmenu.find('li>a.selected').parent().trigger('click');});
			if(smoothmenu.idevice){
				document.addEventListener('touchstart', function(e){$mainmenu.find('li>a.selected').parent().trigger('click');}, false);
			}
		}
		if(smoothmenu.closeonmouseout){
			var $leaveobj = orient === 'down'? $mainparent : $mainmenu;
			$leaveobj.bind('mouseleave.smoothmenu', smoothmenu.closeall);
		} else if (setting.closeonmouseout){
			var $leaveobj = orient === 'down'? $mainparent : $mainmenu;
			$leaveobj.bind('mouseleave.smoothmenu', function(){$mainmenu.find('li>a.selected').parent().trigger('click');});
		}
		if(!$('style[title="ddsmoothmenushadowsnone"]').length){
			$('head').append('<style title="ddsmoothmenushadowsnone" type="text/css">.ddsmoothmenushadowsnone{display:none!important;}</style>');
		}
		var shadowstimer;
		$(window).bind('resize scroll', function(){
			clearTimeout(shadowstimer);
			var $selected = $mainmenu.find('li>a.selected').parent(),
			$shadows = $('.ddshadow').addClass('ddsmoothmenushadowsnone');
			$selected.eq(0).trigger('click');
			$selected.trigger('click');
			if ( !window.matchMedia || (window.matchMedia && !setting.mobilemql.matches))
				shadowstimer = setTimeout(function(){$shadows.removeClass('ddsmoothmenushadowsnone');}, 100);
		});
	}

	$topheaders.each(function(){
		var $curobj=$(this).css({zIndex: (setting.zindexvalue || smoothmenu.zindexvalue) + zsub--}); //reference current LI header
		var $subul=$curobj.children('ul:eq(0)').css({display:'block'}).data('timers', {});
		var $link = $curobj.children("a:eq(0)").css({paddingRight: smoothmenu.arrowimages[orient][2]}).append( //add arrow images
			'<span style="display: block;" class="' + smoothmenu.arrowimages[orient][0] + '"></span>'
		);
		var dimensions = {
			w	: $link.outerWidth(),
			h	: $curobj.innerHeight(),
			subulw	: $subul.outerWidth(),
			subulh	: $subul.outerHeight()
		};
		var menutop = orient === 'down'? dimensions.h : 0;
		$subul.css({top: menutop});
		function restore(){$link.removeClass('selected');}
		method === 'toggle' && $subul.click(smoothmenu.subulpreventemptyclose);
		$curobj[method](
			function(e){
				if(!$curobj.data('headers')){
					smoothmenu.buildsubheaders($, $subul, $subul.find('>li>ul').parent(), setting, method, prevobjs);
					$curobj.data('headers', true).find('>ul').each(function(i, ul){
						var $ul = $(ul);
						$ul.data('height', $ul.outerHeight());
					}).css({display:'none', visibility:'visible'});
				}
				method === 'toggle' && smoothmenu.updateprev.call(this, $, prevobjs, $curobj);
				clearTimeout($subul.data('timers').hidetimer);
				$link.addClass('selected');
				$subul.data('timers').showtimer=setTimeout(function(){
					var menuleft = orient === 'down'? 0 : dimensions.w;
					var menumoved = menuleft, newtop, doctop, winheight, topinc = 0;
					var offsetLeft = $curobj.offset().left
					menuleft=(offsetLeft+menuleft+dimensions.subulw>$(window).width())? (orient === 'down'? -dimensions.subulw+dimensions.w : -dimensions.w) : menuleft; 
//calculate this sub menu's offsets from its parent
					if (orient === 'right' && menuleft < 0){ // for vertical menu, if top level sub menu drops left, test to see if it'll be obscured by left window edge
						var scrollX = window.pageXOffset || (document.documentElement || document.body.parentNode || document.body).scrollLeft
						if (offsetLeft - dimensions.subulw < 0) // if menu will be obscured by left window edge
							menuleft = 0
					}
					menumoved = menumoved !== menuleft;
					$subul.css({top: menutop}).removeClass('repositionedv');
					if(setting.repositionv && $link.offset().top + menutop + $subul.data('height') > (winheight = $(window).height()) + (doctop = $(document).scrollTop())){
						newtop = (orient === 'down'? 0 : $link.outerHeight()) - $subul.data('height');
						topinc = smoothmenu.repositionv($subul, $link, newtop, winheight, doctop, method, menutop)[0];
					}
					$subul.css({left:menuleft, width:dimensions.subulw}).stop(true, true).animate({height:'show',opacity:'show'}, smoothmenu.transition.overtime, function(){this.style.removeAttribute && this.style.removeAttribute('filter');});
					if(menumoved){$subul.addClass('repositioned');} else {$subul.removeClass('repositioned');}
					if (setting.shadow){
						if(!$curobj.data('$shadow')){
							$curobj.data('$shadow', $('<div></div>').addClass('ddshadow toplevelshadow').prependTo($parentshadow).css({zIndex: $curobj.css('zIndex')}));  //insert shadow DIV and set it to parent node for the next shadow div
						}
						smoothmenu.ie9shadow($curobj.data('$shadow'));
						var offsets = $subul.offset();
						var shadowleft = offsets.left;
						var shadowtop = offsets.top;
						$curobj.data('$shadow').css({overflow: 'visible', width:dimensions.subulw, left:shadowleft, top:shadowtop}).stop(true, true).animate({height:dimensions.subulh}, smoothmenu.transition.overtime);
					}
				}, smoothmenu.showhidedelay.showdelay);
			},
			function(e, speed){
				var $shadow = $curobj.data('$shadow');
				if(method === 'hover'){restore();}
				else{smoothmenu.executelink.call(this, $, prevobjs, e);}
				clearTimeout($subul.data('timers').showtimer);
				$subul.data('timers').hidetimer=setTimeout(function(){
					$subul.stop(true, true).animate({height:'hide', opacity:'hide'}, speed || smoothmenu.transition.outtime, function(){method === 'toggle' && restore();});
					if ($shadow){
						if (!smoothmenu.css3support && smoothmenu.detectwebkit){ //in WebKit browsers, set first child shadow's opacity to 0, as "overflow:hidden" doesn't work in them
							$shadow.children('div:eq(0)').css({opacity:0});
						}
						$shadow.stop(true, true).animate({height:0}, speed || smoothmenu.transition.outtime, function(){if(method === 'toggle'){this.style.overflow = 'hidden';}});
					}
				}, smoothmenu.showhidedelay.hidedelay);
			}
		); //end hover/toggle
		$subul.css({display: 'none'}); // collapse sub UL 
	}); //end $topheaders.each()
},

buildsubheaders: function($, $subul, $headers, setting, method, prevobjs){
	//setting.$mainparent.data('$headers').add($headers);
	$subul.css('display', 'block');
	$headers.each(function(){ //loop through each LI header
		var smoothmenu = ddsmoothmenu;
		var $curobj=$(this).css({zIndex: $(this).parent('ul').css('z-index')}); //reference current LI header
		var $subul=$curobj.children('ul:eq(0)').css({display:'block'}).data('timers', {}), $parentshadow;
		method === 'toggle' && $subul.click(smoothmenu.subulpreventemptyclose);
		var $link = $curobj.children("a:eq(0)").append( //add arrow images
			'<span style="display: block;" class="' + smoothmenu.arrowimages['right'][0] + '"></span>'
		);
		var dimensions = {
			w	: $link.outerWidth(),
			subulw	: $subul.outerWidth(),
			subulh	: $subul.outerHeight()
		};
		$subul.css({top: 0});
		function restore(){$link.removeClass('selected');}
		$curobj[method](
			function(e){
				if(!$curobj.data('headers')){
					smoothmenu.buildsubheaders($, $subul, $subul.find('>li>ul').parent(), setting, method, prevobjs);
					$curobj.data('headers', true).find('>ul').each(function(i, ul){
						var $ul = $(ul);
						$ul.data('height', $ul.height());
					}).css({display:'none', visibility:'visible'});
				}
				method === 'toggle' && smoothmenu.updateprev.call(this, $, prevobjs, $curobj);
				clearTimeout($subul.data('timers').hidetimer);
				$link.addClass('selected');
				$subul.data('timers').showtimer=setTimeout(function(){
					var menuleft= dimensions.w;
					var menumoved = menuleft, newtop, doctop, winheight, topinc = 0;
					var offsetLeft = $curobj.offset().left
					menuleft=(offsetLeft+menuleft+dimensions.subulw>$(window).width())? -dimensions.w : menuleft; //calculate this sub menu's offsets from its parent
					if (menuleft < 0){ // if drop left, test to see if it'll be obscured by left window edge
						var scrollX = window.pageXOffset || (document.documentElement || document.body.parentNode || document.body).scrollLeft
						if (offsetLeft - dimensions.subulw < scrollX) // if menu will be obscured by left window edge
							menuleft = 0
					}
					menumoved = menumoved !== menuleft;

					$subul.css({top: 0}).removeClass('repositionedv');
					if(setting.repositionv && $link.offset().top + $subul.data('height') > (winheight = $(window).height()) + (doctop = $(document).scrollTop())){
						newtop = $link.outerHeight() - $subul.data('height');
						topinc = smoothmenu.repositionv($subul, $link, newtop, winheight, doctop, method);
						newtop = topinc[1];
						topinc = topinc[0];
					}
					$subul.css({left:menuleft, width:dimensions.subulw}).stop(true, true).animate({height:'show',opacity:'show'}, smoothmenu.transition.overtime, function(){this.style.removeAttribute && this.style.removeAttribute('filter');});
					if(menumoved){$subul.addClass('repositioned');} else {$subul.removeClass('repositioned');}
					if (setting.shadow){
						if(!$curobj.data('$shadow')){
							$parentshadow = $curobj.parents("li:eq(0)").data('$shadow');
							$curobj.data('$shadow', $('<div></div>').addClass('ddshadow').prependTo($parentshadow).css({zIndex: $parentshadow.css('z-index')}));  //insert shadow DIV and set it to parent node for the next shadow div
						}
						var offsets = $subul.offset();
						var shadowleft = menuleft;
						var shadowtop = $curobj.position().top - (newtop? $subul.data('height') - $link.outerHeight() - topinc : 0);
						if (smoothmenu.detectwebkit && !smoothmenu.css3support){ //in WebKit browsers, restore shadow's opacity to full
							$curobj.data('$shadow').css({opacity:1});
						}
						$curobj.data('$shadow').css({overflow: 'visible', width:dimensions.subulw, left:shadowleft, top:shadowtop}).stop(true, true).animate({height:dimensions.subulh}, smoothmenu.transition.overtime);
					}
				}, smoothmenu.showhidedelay.showdelay);
			},
			function(e, speed){
				var $shadow = $curobj.data('$shadow');
				if(method === 'hover'){restore();}
				else{smoothmenu.executelink.call(this, $, prevobjs, e);}
				clearTimeout($subul.data('timers').showtimer);
				$subul.data('timers').hidetimer=setTimeout(function(){
					$subul.stop(true, true).animate({height:'hide', opacity:'hide'}, speed || smoothmenu.transition.outtime, function(){
						method === 'toggle' && restore();
					});
					if ($shadow){
						if (!smoothmenu.css3support && smoothmenu.detectwebkit){ //in WebKit browsers, set first child shadow's opacity to 0, as "overflow:hidden" doesn't work in them
							$shadow.children('div:eq(0)').css({opacity:0});
						}
						$shadow.stop(true, true).animate({height:0}, speed || smoothmenu.transition.outtime, function(){if(method === 'toggle'){this.style.overflow = 'hidden';}});
					}
				}, smoothmenu.showhidedelay.hidedelay);
			}
		); //end hover/toggle for subheaders
	}); //end $headers.each() for subheaders
},


initmenu: function(setting){
	if (setting.mobilemql.matches){ // if mobile mode
		jQuery(function($){
			var $mainmenu = $('#' + setting.mainmenuid)
			$mainmenu.css({display: 'none'}) // hide regular menu
			//setTimeout(function(){$('.ddshadow').addClass('ddsmoothmenushadowsnone')}, 150)
			if (!setting.$mainulclone){ // store a copy of the main menu's UL menu before it gets manipulated
				setting.$mainulclone = $mainmenu.find('>ul').clone()
			}
			var mobilemenustate = setting.mobilemenustate
			if (setting.contentsource == "markup" && !mobilemenustate){ // if mobile menu not built yet
				ddsmoothmenu.buildmobilemenu($, setting, setting.$mainulclone)
			}
			else if (setting.contentsource != "markup" && (!mobilemenustate || mobilemenustate == "error")){ // if Ajax content and mobile menu not built yet
				ddsmoothmenu.getajaxmenuMobile($, setting)
			}
			else{ // if mobile menu built already, just show mobile togger
				$('#ddsmoothmenu-mobiletoggle').css({display: 'block'})				
			}
		})
		return
	}
	else{ // if desktop mode
		var menustate = setting.menustate
		if (menustate && menustate != "error"){ // if menustate is anything other than "error" (meaning error fetching ajax content), it means menu's built already, so exit init()
			var $mainmenu = $('#' + setting.mainmenuid)
			$mainmenu.css({display: 'block'}) // show regular menu
			if (this.mobilecontainer.$main){ // if mobile menu defined, hide it
				this.togglemobile('close', 0)
			}
			$('#ddsmoothmenu-mobiletoggle').css({display: 'none'}) // hide mobile menu toggler
			return
		}
	}

	if(this.detectie6 && parseFloat(jQuery.fn.jquery) > 1.3){
		this.initmenu = function(setting){
			if (typeof setting.contentsource=="object"){ //if external ajax menu
				jQuery(function($){ddsmoothmenu.getajaxmenu($, setting, 'nobuild');});
			}
			return false;
		};
		jQuery('link[href*="ddsmoothmenu"]').attr('disabled', true);
		jQuery(function($){
			alert('You Seriously Need to Update Your Browser!\n\nDynamic Drive Smooth Navigational Menu Showing Text Only Menu(s)\n\nDEVELOPER\'s NOTE: This script will run in IE 6 when using jQuery 1.3.2 or less,\nbut not real well.');
				$('link[href*="ddsmoothmenu"]').attr('disabled', true);
		});
		return this.initmenu(setting);
	}
	var mainmenuid = '#' + setting.mainmenuid, right, down, stylestring = ['</style>\n'], stylesleft = setting.arrowswap? 4 : 2;
	function addstyles(){
		if(stylesleft){return;}
		if (typeof setting.customtheme=="object" && setting.customtheme.length==2){ //override default menu colors (default/hover) with custom set?
			var mainselector=(setting.orientation=="v")? mainmenuid : mainmenuid+', '+mainmenuid;
			stylestring.push([mainselector,' ul li a {background:',setting.customtheme[0],';}\n',
				mainmenuid,' ul li a:hover {background:',setting.customtheme[1],';}'].join(''));
		}
		stylestring.push('\n<style type="text/css">');
		stylestring.reverse();
		jQuery('head').append(stylestring.join('\n'));
	}
	if(setting.arrowswap){
		right = ddsmoothmenu.arrowimages.right[1].replace(ddsmoothmenu.overarrowre, ddsmoothmenu.overarrowaddtofilename);
		down = ddsmoothmenu.arrowimages.down[1].replace(ddsmoothmenu.overarrowre, ddsmoothmenu.overarrowaddtofilename);
		jQuery(new Image()).bind('load error', function(e){
			setting.rightswap = e.type === 'load';
			if(setting.rightswap){
				stylestring.push([mainmenuid, ' ul li a:hover .', ddsmoothmenu.arrowimages.right[0], ', ',
				mainmenuid, ' ul li a.selected .', ddsmoothmenu.arrowimages.right[0],
				' { background-image: url(', this.src, ');}'].join(''));
			}
			--stylesleft;
			addstyles();
		}).attr('src', right);
		jQuery(new Image()).bind('load error', function(e){
			setting.downswap = e.type === 'load';
			if(setting.downswap){
				stylestring.push([mainmenuid, ' ul li a:hover .', ddsmoothmenu.arrowimages.down[0], ', ',
				mainmenuid, ' ul li a.selected .', ddsmoothmenu.arrowimages.down[0],
				' { background-image: url(', this.src, ');}'].join(''));
			}
			--stylesleft;
			addstyles();
		}).attr('src', down);
	}
	jQuery(new Image()).bind('load error', function(e){
		if(e.type === 'load'){
			stylestring.push([mainmenuid+' ul li a .', ddsmoothmenu.arrowimages.right[0],' { background: url(', this.src, ') no-repeat;width:', this.width,'px;height:', this.height, 'px;}'].join(''));
		}
		--stylesleft;
		addstyles();
	}).attr('src', ddsmoothmenu.arrowimages.right[1]);
	jQuery(new Image()).bind('load error', function(e){
		if(e.type === 'load'){
			stylestring.push([mainmenuid+' ul li a .', ddsmoothmenu.arrowimages.down[0],' { background: url(', this.src, ') no-repeat;width:', this.width,'px;height:', this.height, 'px;}'].join(''));
		}
		--stylesleft;
		addstyles();
	}).attr('src', ddsmoothmenu.arrowimages.down[1]);
	setting.shadow = this.detectie6 && (setting.method === 'hover' || setting.orientation === 'v')? false : setting.shadow || this.shadow; //in IE6, always disable shadow except for horizontal toggle menus
	jQuery(document).ready(function($){
		var $mainmenu = $('#' + setting.mainmenuid)
		$mainmenu.css({display: 'block'}) // show regular menu (in case previously hidden by mobile menu activation)
		if (ddsmoothmenu.mobilecontainer.$main){ // if mobile menu defined, hide it
				ddsmoothmenu.togglemobile('close', 0)
		}
		$('#ddsmoothmenu-mobiletoggle').css({display: 'none'}) // hide mobile menu toggler
		if (!setting.$mainulclone){ // store a copy of the main menu's UL menu before it gets manipulated
			setting.$mainulclone = $mainmenu.find('>ul').clone()
		}
		if (setting.shadow && ddsmoothmenu.css3support){$('body').addClass('ddcss3support');}
		if (typeof setting.contentsource=="object"){ //if external ajax menu
			ddsmoothmenu.getajaxmenu($, setting);
		}
		else{ //else if markup menu
			ddsmoothmenu.buildmenu($, setting);
		}

		setting.menustate = "initialized" // set menu state to initialized
	});
},

init: function(setting){
	setting.mobilemql = (window.matchMedia)? window.matchMedia(this.mobilemediaquery) : {matches: false, addListener: function(){}}
	this.initmenu(setting)
	setting.mobilemql.addListener(function(){
		ddsmoothmenu.initmenu(setting)
	})
}
}; //end ddsmoothmenu variable


// Patch for jQuery 1.9+ which lack click toggle (deprecated in 1.8, removed in 1.9)
// Will not run if using another patch like jQuery Migrate, which also takes care of this
if(
	(function($){
		var clicktogglable = false;
		try {
			$('<a href="#"></a>').toggle(function(){}, function(){clicktogglable = true;}).trigger('click').trigger('click');
		} catch(e){}
		return !clicktogglable;
	})(jQuery)
){
	(function(){
		var toggleDisp = jQuery.fn.toggle; // There's an animation/css method named .toggle() that toggles display. Save a reference to it.
		jQuery.extend(jQuery.fn, {
			toggle: function( fn, fn2 ) {
				// The method fired depends on the arguments passed.
				if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
					return toggleDisp.apply(this, arguments);
				}
				// Save reference to arguments for access in closure
				var args = arguments, guid = fn.guid || jQuery.guid++,
					i = 0,
					toggler = function( event ) {
						// Figure out which function to execute
						var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
						jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
	
						// Make sure that clicks stop
						event.preventDefault();
	
						// and execute the function
						return args[ lastToggle ].apply( this, arguments ) || false;
					};

				// link all the functions, so any of them can unbind this click handler
				toggler.guid = guid;
				while ( i < args.length ) {
					args[ i++ ].guid = guid;
				}

				return this.click( toggler );
			}
		});
	})();
}

/* TECHNICAL NOTE: To overcome an intermittent layout bug in IE 9+, the script will change margin top and left for the shadows to 
   1px less than their computed values, and the first two values for the box-shadow property will be changed to 1px larger than 
   computed, ex: -1px top and left margins and 6px 6px 5px #aaa box-shadow results in what appears to be a 5px box-shadow. 
   Other browsers skip this step and it shouldn't affect you in most cases. In some rare cases it will result in 
   slightly narrower (by 1px) box shadows for IE 9+ on one or more of the drop downs. Without this, sometimes 
   the shadows could be 1px beyond their drop down resulting in a gap. This is the first of the two patches below. 
   and also relates to the MS CSSOM which uses decimal fractions of pixels for layout while only reporting rounded values. 
   There appears to be no computedStyle workaround for this one. */

//Scripted CSS Patch for IE 9+ intermittent mis-rendering of box-shadow elements (see above TECHNICAL NOTE for more info)
//And jQuery Patch for IE 9+ CSSOM re: offset Width and Height and re: getBoundingClientRect(). Both run only in IE 9 and later.
//IE 9 + uses decimal fractions of pixels internally for layout but only reports rounded values using the offset and getBounding methods.
//These are sometimes rounded inconsistently. This second patch gets the decimal values directly from computedStyle.
if(ddsmoothmenu.detectie9){
	(function($){ //begin Scripted CSS Patch
		function incdec(v, how){return parseInt(v) + how + 'px';}
		ddsmoothmenu.ie9shadow = function($elem){ //runs once
			var getter = document.defaultView.getComputedStyle($elem.get(0), null),
			curshadow = getter.getPropertyValue('box-shadow').split(' '),
			curmargin = {top: getter.getPropertyValue('margin-top'), left: getter.getPropertyValue('margin-left')};
			$('head').append(['\n<style title="ie9shadow" type="text/css">',
			'.ddcss3support .ddshadow {',
			'\tbox-shadow: ' + incdec(curshadow[0], 1) + ' ' + incdec(curshadow[1], 1) + ' ' + curshadow[2] + ' ' + curshadow[3] + ';',
			'}', '.ddcss3support .ddshadow.toplevelshadow {',
			'\topacity: ' + ($('.ddcss3support .ddshadow').css('opacity') - 0.1) + ';',
			'\tmargin-top: ' + incdec(curmargin.top, -1) + ';',
			'\tmargin-left: ' + incdec(curmargin.left, -1) + ';', '}',
			'</style>\n'].join('\n'));
			ddsmoothmenu.ie9shadow = function(){}; //becomes empty function after running once
		}; //end Scripted CSS Patch
		var jqheight = $.fn.height, jqwidth = $.fn.width; //begin jQuery Patch for IE 9+ .height() and .width()
		$.extend($.fn, {
			height: function(){
				var obj = this.get(0);
				if(this.length < 1 || arguments.length || obj === window || obj === document){
					return jqheight.apply(this, arguments);
				}
				return parseFloat(document.defaultView.getComputedStyle(obj, null).getPropertyValue('height'));
			},
			innerHeight: function(){
				if(this.length < 1){return null;}
				var val = this.height(), obj = this.get(0), getter = document.defaultView.getComputedStyle(obj, null);
				val += parseInt(getter.getPropertyValue('padding-top'));
				val += parseInt(getter.getPropertyValue('padding-bottom'));
				return val;
			},
			outerHeight: function(bool){
				if(this.length < 1){return null;}
				var val = this.innerHeight(), obj = this.get(0), getter = document.defaultView.getComputedStyle(obj, null);
				val += parseInt(getter.getPropertyValue('border-top-width'));
				val += parseInt(getter.getPropertyValue('border-bottom-width'));
				if(bool){
					val += parseInt(getter.getPropertyValue('margin-top'));
					val += parseInt(getter.getPropertyValue('margin-bottom'));
				}
				return val;
			},
			width: function(){
				var obj = this.get(0);
				if(this.length < 1 || arguments.length || obj === window || obj === document){
					return jqwidth.apply(this, arguments);
				}
				return parseFloat(document.defaultView.getComputedStyle(obj, null).getPropertyValue('width'));
			},
			innerWidth: function(){
				if(this.length < 1){return null;}
				var val = this.width(), obj = this.get(0), getter = document.defaultView.getComputedStyle(obj, null);
				val += parseInt(getter.getPropertyValue('padding-right'));
				val += parseInt(getter.getPropertyValue('padding-left'));
				return val;
			},
			outerWidth: function(bool){
				if(this.length < 1){return null;}
				var val = this.innerWidth(), obj = this.get(0), getter = document.defaultView.getComputedStyle(obj, null);
				val += parseInt(getter.getPropertyValue('border-right-width'));
				val += parseInt(getter.getPropertyValue('border-left-width'));
				if(bool){
					val += parseInt(getter.getPropertyValue('margin-right'));
					val += parseInt(getter.getPropertyValue('margin-left'));
				}
				return val;
			}
		}); //end jQuery Patch for IE 9+ .height() and .width()
	})(jQuery);
}


ddsmoothmenu.init({
	mainmenuid: "smoothmenu1", //menu DIV id
	orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'ddsmoothmenu', //class added to menu's outer DIV
	//customtheme: ["#1c5a80", "#18374a"],
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})
ddsmoothmenu.init({
	mainmenuid: "smoothmenu2", //menu DIV id
	orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'ddsmoothmenu', //class added to menu's outer DIV
	//customtheme: ["#1c5a80", "#18374a"],
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})





