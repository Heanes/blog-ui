/*!
 * blog-ui 1.0.0
 * @author: Heanes
 * @time: 2019-03-26 22:58:05 周二
 * (c) 2014-2019 Heanes
 * Released under the MIT License.
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{53:function(t,e,a){},57:function(t,e,a){"use strict";a.r(e);var i=a(1),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("he-layout",[a("div",{staticClass:"main",attrs:{slot:"main"},slot:"main"},[a("div",{staticClass:"article-list-wrap main-width"},[a("he-article-list",{attrs:{"article-list":t.articleList.items}}),t._v(" "),a("div",{staticClass:"article-pager"},[a("he-pagination",t._b({on:{"change-page-number":t.changeArticlePage}},"he-pagination",t.articleList.page,!1))],1)],1)])])};n._withStripped=!0;var r=a(5),c=a(11),s=a(10),l=(a(53),a(9),a(6)),o={name:"Index",components:{"he-layout":r.a,"he-article-list":s.a,"he-pagination":c.a},data:function(){return{pageTitle:"首页",articleList:{items:[],page:{pageNumber:1,pageSize:20}}}},methods:{getArticleList:function(t){var e=this;l.a.article.getList(t).then(function(t){e.articleList=t.data})},changeArticlePage:function(t,e){this.articleQueryParam.pageNumber=t},changeArticleQueryParam:function(t,e){this.getArticleList({params:this.articleQueryParam})}},created:function(){document.title=this.pageTitle},watch:{articleQueryParam:{handler:function(t,e){this.changeArticleQueryParam(t,e)},deep:!0,immediate:!0}}},u=a(0),p=Object(u.a)(o,n,[],!1,null,"0c6f0290",null);p.options.__file="src/pages/index/IndexPage.vue";var h=p.exports;i.a.config.productionTip=!1,new i.a({render:function(t){return t(h)}}).$mount("#app")}},[[57,2,1,0]]]);