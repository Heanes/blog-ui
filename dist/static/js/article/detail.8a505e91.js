/*!
 * blog-ui 1.0.0
 * @author: Heanes
 * @time: 2019-03-25 21:55:20 周一
 * (c) 2014-2019 Heanes
 * Released under the MIT License.
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{14:function(t,a,e){},24:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main article-detail-page"},[e("div",{staticClass:"page-breadcrumb main-width"},[e("he-breadcrumb",{attrs:{"breadcrumb-list":t.breadcrumbList}})],1),t._v(" "),e("div",{staticClass:"main-content main-width clearfix"},[e("div",{staticClass:"main-area article-wrap"},[e("div",{staticClass:"center-content"},[e("div",{staticClass:"article-detail"},[e("he-article-detail-title",[t._t("articleTitle",null,{slot:"articleTitle"})],2),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"article-title-block-placeholder",attrs:{id:"articleTitleBlockPlaceholder"}}),t._v(" "),e("he-article-detail-content",[t._t("articleContent",null,{slot:"articleContent"})],2)],1)])]),t._v(" "),t._m(1)])])};i._withStripped=!0;var l=e(4),r=function(){var t=this,a=t.$createElement;return(t._self._c||a)("div",{staticClass:"article-content",attrs:{id:"articleContent"},domProps:{innerHTML:t._s(t.content)}})};r._withStripped=!0;var n={name:"ArticleDetailContent",props:{content:{type:String,default:"Article content is loading..."}}},c=e(0),s=Object(c.a)(n,r,[],!1,null,"adaea88a",null);s.options.__file="src/components/article/ArticleDetailContent.vue";var o=s.exports,d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"article-title-wrap"},[e("div",{staticClass:"article-title"},[e("h1",{staticClass:"entry-title"},[t._t("articleTitle")],2)]),t._v(" "),t._m(0)])};d._withStripped=!0;var v={name:"ArticleDetailTitle"},m=Object(c.a)(v,d,[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"article-info"},[e("dl",{staticClass:"article-info-dl"},[e("dt",[t._v("点击:")]),t._v(" "),e("dd",[t._v("987")]),t._v(" "),e("dt",[e("a",{staticClass:"comment-count",attrs:{href:"#comment-list"}},[t._v("评论:")])]),t._v(" "),e("dd",[e("a",{staticClass:"comment-count",attrs:{href:"#comment-list"}},[t._v("2")])]),t._v(" "),e("dt",[t._v("作者:")]),t._v(" "),e("dd",[t._v("Heanes")]),t._v(" "),e("dt",[t._v("责编:")]),t._v(" "),e("dd",[t._v("Heanes")]),t._v(" "),e("dt",[t._v("时间:")]),t._v(" "),e("dd",[t._v("2015-05-19 09:46:35")]),t._v(" "),e("dt",[t._v("来源:")]),t._v(" "),e("dd",[t._v("原创")])])])}],!1,null,"0f59d49a",null);m.options.__file="src/components/article/ArticleDetailTitle.vue";var u=m.exports,_=e(3),p=e.n(_),h=(e(15),e(16),e(14),e(9),{name:"ArticleDetail",components:{"he-breadcrumb":l.a,"he-article-detail-title":u,"he-article-detail-content":o},data:function(){return{pageTitle:"文章详情",breadcrumbList:[{name:"首页",link:"/"},{name:"文章索引",link:"archive.html"},{name:"文章详情",link:""}]}},mounted:function(){p()("#articleContent").autoCatalog({catalogContainer:p()("#articleCatalog"),formatChapterAnchor:function(t){return t.outline.join(".")+"."+t.text},step:90,alwaysShow:!0})},created:function(){document.title=this.pageTitle}}),C=Object(c.a)(h,i,[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"article-toolbar-top"},[e("span",{staticClass:"op-item op-to-small-text",attrs:{id:"opToSmallTextBtn",title:"减小正文字体"}},[t._v("T")]),t._v(" "),e("span",{staticClass:"op-item op-to-large-text",attrs:{id:"opToLargeTextBtn",title:"增大正文字体"}},[t._v("T")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sidebar-right"},[a("div",{staticClass:"article-catalog-wrap",attrs:{id:"articleCatalog"}})])}],!1,null,"275f308e",null);C.options.__file="src/components/article/ArticleDetail.vue";a.a=C.exports},55:function(t,a,e){"use strict";e.r(a);var i=e(1),l=e(7);e(24);i.a.use(l.a);var r=new l.a({mode:"history",base:"/article",routes:[{path:"/:articleQueryParam?.html"}],scrollBehavior:function(t,a,e){return e||{x:0,y:0}}}),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("he-layout",[e("div",{staticClass:"main article-detail-page",attrs:{slot:"main"},slot:"main"},[e("div",{staticClass:"page-breadcrumb main-width"},[e("he-breadcrumb",{attrs:{"breadcrumb-list":t.breadcrumbList}})],1),t._v(" "),e("div",{staticClass:"main-content main-width clearfix"},[e("div",{staticClass:"main-area article-wrap"},[e("div",{staticClass:"center-content"},[e("div",{staticClass:"article-detail"},[e("div",{staticClass:"article-title-wrap"},[e("div",{staticClass:"article-title"},[e("h1",{staticClass:"entry-title",domProps:{innerHTML:t._s(t.article.title)}})]),t._v(" "),e("div",{staticClass:"article-info"},[e("dl",{staticClass:"article-info-dl"},[e("dt",[t._v("点击:")]),t._v(" "),e("dd",[t._v(t._s(t.article.clickCount))]),t._v(" "),e("dt",[e("a",{staticClass:"comment-count",attrs:{href:"#comment-list"}},[t._v("评论:")])]),t._v(" "),e("dd",[e("a",{staticClass:"comment-count",attrs:{href:"#comment-list"}},[t._v(t._s(t.article.commentCount))])]),t._v(" "),e("dt",[t._v("作者:")]),t._v(" "),void 0!==t.article.author?e("dd",[t._v(t._s(t.article.author.name))]):t._e(),t._v(" "),e("dt",[t._v("时间:")]),t._v(" "),e("dd",[t._v(t._s(t.article.publishDateTimeFormative))]),t._v(" "),e("dt",[t._v("来源:")]),t._v(" "),e("dd",[t._v("原创")])])])]),t._v(" "),e("div",{staticClass:"article-toolbar-top"},[e("span",{staticClass:"op-item op-to-small-text",attrs:{id:"opToSmallTextBtn",title:"减小正文字体"}},[t._v("T")]),t._v(" "),e("span",{staticClass:"op-item op-to-large-text",attrs:{id:"opToLargeTextBtn",title:"增大正文字体"}},[t._v("T")])]),t._v(" "),e("div",{staticClass:"article-title-block-placeholder",attrs:{id:"articleTitleBlockPlaceholder"}}),t._v(" "),e("div",{staticClass:"article-content",attrs:{id:"articleContent"},domProps:{innerHTML:t._s(t.article.content)}})])])]),t._v(" "),e("div",{staticClass:"sidebar-right"},[e("div",{staticClass:"article-catalog-wrap",attrs:{id:"articleCatalog"}})])])])])};n._withStripped=!0;var c=e(5),s=e(4),o=e(6),d=e(3),v=e.n(d),m=(e(15),e(16),e(14),e(9),{name:"ArticleDetail",components:{"he-layout":c.a,"he-breadcrumb":s.a},data:function(){return{pageTitle:"文章详情",breadcrumbList:[{name:"首页",link:"/"},{name:"文章列表",link:"list.html"},{name:"文章详情",link:""}],articleQueryParam:"",article:{title:"Article title is loading...",content:"Article content is loading...",other:"<h1>title</h1>",author:{}}}},methods:{getArticleDetail:function(t){var a=this;o.a.article.getDetail(t).then(function(t){a.article=t.data})},generateCatalog:function(){console.log("generateCatalog"),v()("#articleContent").autoCatalog({catalogContainer:v()("#articleCatalog"),formatChapterAnchor:function(t){return t.outline.join(".")+"."+t.text},step:90,alwaysShow:!0})}},mounted:function(){this.articleQueryParam={param:this.$route.params.articleQueryParam}},created:function(){document.title=this.pageTitle},watch:{articleQueryParam:{handler:function(t,a){this.getArticleDetail({params:this.articleQueryParam})}},"article.content":{handler:function(t,a){var e=this;this.$nextTick(function(){e.generateCatalog()})},deep:!0}}}),u=e(0),_=Object(u.a)(m,n,[],!1,null,"ca1ee6f4",null);_.options.__file="src/pages/article/detail/ArticleDetail.vue";var p=_.exports;i.a.config.productionTip=!1,new i.a({router:r,render:function(t){return t(p)}}).$mount("#app")}},[[55,2,1,0]]]);