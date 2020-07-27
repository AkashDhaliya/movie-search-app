(this["webpackJsonpmovie-search-app"]=this["webpackJsonpmovie-search-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),s=a.n(l),o=(a(37),a(38),a(10));var c=function(){return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"app-header"},r.a.createElement("h1",null,"Movies")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,activeClassName:"active",to:"/favourite"},"Favourites")),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,activeClassName:"active",to:"/"},"Home"))))))},i=a(3),m=a(11);var u=function(){return r.a.createElement("section",{className:"loading"},r.a.createElement("div",{className:"lds-roller"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))};var v=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],l=t[1];function s(){for(var e=[],t=Object.keys(localStorage),a=t.length;a--;)e.push(JSON.parse(localStorage.getItem(t[a])));l(e)}function o(e){window.confirm("Are you sure you want to remove\r ".concat(e.Title," from favourites?"))&&(localStorage.removeItem(e.imdbID),s())}return Object(n.useEffect)((function(){s()}),[]),null!==a&&0!==a.length?r.a.createElement("section",{className:"favouriteMoviesListSec"},r.a.createElement("div",{className:"resultInfo"},"Total favourite items\xa0:\xa0",a.length),a.map((function(e){return r.a.createElement("div",{key:e.imdbID,className:"movieCard"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,r.a.createElement("strong",null,e.Title),"\xa0"),r.a.createElement("small",null,"(",e.Year,")")),r.a.createElement("div",{className:"favourite",onClick:o.bind(null,e)},r.a.createElement(m.a,{className:"liked"})),r.a.createElement("img",{src:e.Poster,alt:e.Title}))}))):null!==a&&0===a.length?r.a.createElement("section",{className:"favouriteMoviesListSec"},r.a.createElement("div",{className:"errorMessage"},"As of now you do not have any favourite item.")):r.a.createElement("section",{className:"favouriteMoviesListSec"},r.a.createElement(u,null))};var d=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],s=a[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),m=c[0],u=c[1],v=Object(n.useState)(""),d=Object(i.a)(v,2),p=d[0],h=d[1];return r.a.createElement("section",null,r.a.createElement("div",{className:"search-section"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;0===t.length||function(e){if(new RegExp(/^[a-z\d\-:\s]+$/i).test(e.target.value))return!0;return!1}(e)?(s(t),u("")):(u("Special character not allowed excluding : and -"),setTimeout((function(){u("")}),3e3))},maxLength:"50",autoComplete:"off",type:"text",value:l,placeholder:"Search...",name:"search"}),r.a.createElement("select",{className:"search-category",value:p,onChange:function(e){return h(e.target.value)},name:"searchDropdown"},r.a.createElement("option",{value:""},"Options"),r.a.createElement("option",{value:"movie"},"Movies"),r.a.createElement("option",{value:"series"},"Series"),r.a.createElement("option",{value:"episode"},"Episodes")),r.a.createElement("button",{className:"search-btn",onClick:function(){""!==l&&e.setSearch(l,p)}},"Search")),r.a.createElement("div",{className:"search-input-error"},m))},p=a(12),h=a(13),E=a(15),f=a(14),g=a(31),b=a.n(g);var S=function(e){return b.a.get("".concat("https://www.omdbapi.com/"),{params:e})};var N=function(e){return function(t){Object(E.a)(n,t);var a=Object(f.a)(n);function n(){return Object(p.a)(this,n),a.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.showMovieDetailmodal?"modal show-modal":"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{className:"close-button",onClick:this.props.hideMovieDetailmodal},"\xd7"),r.a.createElement(e,this.props)))}}]),n}(n.Component)}((function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],s=a[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),m=c[0],v=c[1],d=Object(n.useState)(!1),p=Object(i.a)(d,2),h=p[0],E=p[1],f=Object(n.useState)(!1),g=Object(i.a)(f,2),b=g[0],N=g[1];return Object(n.useEffect)((function(){!function(e){S(e).then((function(e){var t,a=Object.keys(e.data),n=[];a.forEach((function(a){"Poster"!==a&&"imdbID"!==a&&"Plot"!==a&&"Ratings"!==a?n.push({key:a,val:e.data[a]}):"Ratings"===a?t={key:a,val:e.data[a]}:"Plot"===a&&v(e.data[a])})),n.push(t),s(n),E(!0),N(!1)}),(function(e){E(!0),N(!0)}))}({apikey:"8c351687",i:e.id,plot:"full"})}),[e.id]),h&&!b?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"movieSummary"},r.a.createElement("span",{className:"movieSummaryLabel"},"Summary"),r.a.createElement("span",null,":"),r.a.createElement("span",{className:"movieDetailLableVal"},m)),r.a.createElement("div",{className:"moviedetailSec"},r.a.createElement("div",{className:"movieDetailImg"},r.a.createElement("img",{src:e.posterurl,alt:"Movie Name"})),r.a.createElement("ul",null,l.map((function(e){return"Ratings"===e.key?r.a.createElement("li",{className:"ratingListItem",key:e.key},r.a.createElement("span",{className:"movieDetailLable"},e.key),r.a.createElement("span",null,":"),r.a.createElement("span",{className:"movieDetailLableVal"},e.val.map((function(e){return r.a.createElement("span",{className:"customeTags",key:e.Source},e.Source,"\xa0:\xa0",e.Value)})))):r.a.createElement("li",{key:e.key},r.a.createElement("span",{className:"movieDetailLable"},e.key),r.a.createElement("span",null,":"),r.a.createElement("span",{className:"movieDetailLableVal"},e.val))}))))):h&&b?r.a.createElement("div",{className:"moviedetailSec"},"Oops something went wrong."):r.a.createElement("div",{className:"moviedetailSec"},r.a.createElement(u,null))})),y=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).checkToRenderOnUpdate=function(e){var t=n.props,a=t.searchQuery,r=t.searchType;return 0!==a.length&&(a!==e.searchQuery||(a===e.searchQuery?r!==e.searchType:void 0))},n.getSearchData=function(e){S(e).then((function(e){if("True"===e.data.Response){var t=n.state.moviesList.concat(e.data.Search).filter((function(e,t,a){return a.findIndex((function(t){return t.imdbID===e.imdbID}))===t}));t=t.map((function(e){return 0!==n.state.favItemsId.length?n.state.favItemsId.map((function(t){return t===e.imdbID&&(e.favourite=!0),e})):e.favourite=!1,e})),n.setState({moviesList:t,totalResults:e.data.totalResults,isResponse:!0,isError:!1,page_no:t.length/10})}else n.setState({moviesList:[],isResponse:!0,isError:!1,errorMessage:e.data.Error})}),(function(e){n.setState({isResponse:!0,isError:!0,errorMessage:"Oops Something went wrong. Please check you r internet connection or connect with our technical support."})}))},n.loadMoreData=function(e){var t=n.state.moviesList.length/10+1;if(e.target.scrollHeight-e.target.scrollTop<1e3&&n.state.page_no!==t&&n.state.isResponse&&parseInt(n.state.totalResults)!==n.state.moviesList.length){var a={apikey:"8c351687",s:n.props.searchQuery,type:n.props.searchType,plot:"full",page:t};n.getSearchData(a)}},n.favouriteHandler=function(e,t){var a=!1;localStorage.getItem(e.imdbID)?(localStorage.removeItem(e.imdbID),a=!1):(localStorage.setItem(e.imdbID,JSON.stringify(e)),a=!0);var r=n.state.moviesList.map((function(t){return t.imdbID===e.imdbID?(t.favourite=a,t):t}));n.setState({moviesList:r}),t.stopPropagation()},n.showMovieDetails=function(e){var t=e.currentTarget.dataset.imdbid,a=e.currentTarget.dataset.posterurl;n.setState({showMovieDetail:t,showMovieDetailPosterUrl:a,movieDetailmodal:!0}),e.stopPropagation()},n.state={moviesList:[],favItemsId:[],page_no:1,totalResults:0,isError:!1,isResponse:!0,showMovieDetail:"",showMovieDetailPosterUrl:"",movieDetailmodal:!1,errorMessage:"Your search begins here."},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.setState({favItemsId:Object.keys(localStorage)})}},{key:"componentDidUpdate",value:function(e){if(this.checkToRenderOnUpdate(e)){var t={apikey:"8c351687",s:this.props.searchQuery,type:this.props.searchType,plot:"full",page:1};this.setState({moviesList:[],isResponse:!0,isError:!1,errorMessage:""}),this.getSearchData(t)}}},{key:"render",value:function(){var e=this,t=this.state,a=t.isResponse,n=t.isError,l=t.moviesList,s=t.errorMessage,o=t.totalResults;return a&&!n?0!==l.length?r.a.createElement("section",{className:"movieCardSec",onScroll:this.loadMoreData},""!==this.state.showMovieDetail&&r.a.createElement(N,{id:this.state.showMovieDetail,posterurl:this.state.showMovieDetailPosterUrl,showMovieDetailmodal:this.state.movieDetailmodal,hideMovieDetailmodal:function(){return e.setState({showMovieDetail:"",showMovieDetailPosterUrl:"",movieDetailmodal:!1})}}),r.a.createElement("div",{className:"resultInfo"},"Showing\xa0",l.length,"\xa0out of\xa0",o),l.map((function(t){return r.a.createElement("div",{key:t.imdbID,className:"movieCard","data-imdbid":t.imdbID,"data-posterurl":t.Poster,onClick:e.showMovieDetails},r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,r.a.createElement("strong",null,t.Title),"\xa0"),r.a.createElement("small",null,"(",t.Year,")")),r.a.createElement("div",{className:"favourite",onClick:e.favouriteHandler.bind(null,t)},t.favourite&&r.a.createElement(m.a,{className:"liked"}),!t.favourite&&r.a.createElement(m.b,null)),r.a.createElement("img",{src:t.Poster,alt:t.Title}))}))):r.a.createElement("section",{className:"movieCardSec"},r.a.createElement("div",{className:"errorMessage"},s)):a&&n?r.a.createElement("section",{className:"movieCardSec"},r.a.createElement("div",{className:"errorMessage"},s)):r.a.createElement("section",{className:"movieCardSec"},r.a.createElement(u,null))}}]),a}(n.Component);var D=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),c=o[0],m=o[1];return r.a.createElement("section",{className:"moviesContainerSec"},r.a.createElement(d,{setSearch:function(e,t){l(e),m(t)}}),r.a.createElement(y,{searchQuery:a,searchType:c}))};var O=function(){return r.a.createElement("footer",{className:"app-footer"},r.a.createElement("div",null,r.a.createElement("p",null,"Let's Fun"," ",r.a.createElement("span",{role:"img","aria-label":"smile"},"\ud83d\ude0a"))))},w=a(1);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(c,null),r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:D}),r.a.createElement(w.a,{exact:!0,path:"/favourite",component:v})),r.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b04f4c2a.chunk.js.map