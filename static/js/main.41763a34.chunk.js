(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"a":"Kairav","c":"","b":"Pithadia","f":"| Engineer | Programmer | ML Developer | Computer Vision | Data Science ","i":[{"id":0,"image":"fa-github","url":"https://github.com/kairavkkp","style":"socialicons"},{"id":1,"image":"fa-linkedin","url":"https://www.linkedin.com/in/kairav-pithadia/","style":"socialicons"},{"id":2,"image":"fa-twitter","url":"https://www.twitter.com/kairavk/","style":"socialicons"}],"e":"About Me","o":true,"j":"https://www.instagram.com/","l":"kairavk","k":"/?__a=1","d":"I am a Google Certified Tensorflow Developer, Deep learning and Data Science Enthusiast and always ready to take up challenges! Currently working at Cilans Systems Pvt. Ltd. as a Jr. Data Science Engineer. Learning and practicing Backend development using Django and NodeJS.","m":"Recent Projects","g":"https://api.github.com/repos/","h":"kairavkkp","p":true,"n":false}')},15:function(e,a,t){e.exports=t.p+"static/media/resume.a8e1ccf5.pdf"},41:function(e,a,t){e.exports=t(73)},46:function(e,a,t){},50:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(33),c=t.n(i),l=(t(46),t(12)),s=t(8),o=(t(47),t(48),t(50),t(1)),u=t(39),m=t(4),d=t(34),p=t.n(d),g=function(){var e=Object(n.useState)(new Array(o.i.length).fill("socialicons")),a=Object(m.a)(e,2),t=a[0],i=a[1],c=function(e){var a=Object(u.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",i(a)):"leave"===e.event?(a[e.icon.id]="socialicons",i(a)):void 0};return r.a.createElement("div",null,r.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{className:"container container-fluid text-center "},r.a.createElement("h1",{className:"display-1"},o.a+" "+o.c+" "+o.b),r.a.createElement(p.a,{className:"lead"}," ",o.f),r.a.createElement("div",{className:"p-5"},o.i.map((function(e){return r.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return c({icon:e,event:"enter"})},onMouseOut:function(){return c({icon:e,event:"leave"})}}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},b=t(9),h=t.n(b),f=t(15),v=t.n(f),E=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],i=a[1],c=Object(n.useState)(o.o),l=Object(m.a)(c,2),s=l[0],u=l[1],d=Object(n.useState)(v.a),p=Object(m.a)(d,1)[0];Object(n.useEffect)((function(){s&&g()}),[s]);var g=function(e){h()({method:"get",url:o.j+o.l+o.k,headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return console.log(e.data.graphql),console.log("Img URL: ",e.data.graphql.user.profile_pic_url_hd),i(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return u(!1),console.error(e.message)})).finally((function(){}))};return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("div",{className:"row"},s&&r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:"border border-secondary rounded-circle",src:t,alt:"profilepicture"})),r.a.createElement("div",{className:"col-lg-".concat(s?"7":"12")},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},o.e),r.a.createElement("p",{className:"lead text-center"},o.d),p&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:v.a,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},N=t(11),k=t.n(N),y=t(18),j=t(17),w=t(35),O=t(38),q=t(40),x=function(e){var a=e.value,t=Object(n.useState)([]),i=Object(m.a)(t,2),c=i[0],l=i[1],s=Object(n.useCallback)((function(e){h.a.get(a).then((function(e){return l(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){s()}),[s]);var o=[],u=0;for(var d in c)o.push(d),u+=c[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",o.map((function(e){return r.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(c[e]/u*1e3)/10," %")})))},P=function(e){var a=e.value,t=Object(n.useState)("0 mints"),i=Object(m.a)(t,2),c=i[0],l=i[1],s=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),r=Math.trunc(n/1e3/60/60);if(r<24)return l("".concat(r.toString()," hours ago"));var i=t.getDate(),c=t.getMonth(),s=t.getFullYear();return l("on ".concat(i," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][c]," ").concat(s))}),[a.pushed_at]);Object(n.useEffect)((function(){s()}),[s]);var o=a.name,u=a.description,d=a.svn_url,p=a.stargazers_count,g=a.languages_url;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},o," "),r.a.createElement("p",{className:"card-text"},u," "),r.a.createElement("a",{href:"".concat(d,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:d,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),r.a.createElement("hr",null),r.a.createElement(x,{value:g}),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},p)),r.a.createElement("small",{className:"text-muted"},"Updated ",c)))))},S=function(e){Object(q.a)(t,e);var a=Object(O.a)(t);function t(){var e;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={projectsArray:[]},e}return Object(w.a)(t,[{key:"componentDidMount",value:function(){this.preparePinnedRepos()}},{key:"getPinnedRepo",value:function(){var e=Object(y.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({url:"https://api.github.com/graphql",headers:{Authorization:"Bearer aab77861e3497f1cd79113fb3fced6329b2c95f8"},method:"post",data:{query:'\n        query {\n          user(login:"'.concat(o.h,'") {\n          pinnedItems(first: 6, types: [REPOSITORY, GIST]) {\n            totalCount\n            edges {\n              node {\n                ... on Repository {\n                  nameWithOwner,\n                  \n                }\n              }\n            }\n          }\n        }\n      }\n      ')}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getRepoDetail",value:function(){var e=Object(y.a)(k.a.mark((function e(a,t,n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(a).concat(t,"/").concat(n));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}()},{key:"preparePinnedRepos",value:function(){var e=Object(y.a)(k.a.mark((function e(){var a,t,n,r,i,c,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,this.getPinnedRepo();case 3:t=e.sent,n=0;case 5:if(!(n<t.data.data.user.pinnedItems.edges.length)){e.next=16;break}return r=t.data.data.user.pinnedItems.edges[n],i=r.node.nameWithOwner.split("/")[0],c=r.node.nameWithOwner.split("/")[1],e.next=11,this.getRepoDetail(o.g,i,c);case 11:l=e.sent,a.push(l.data);case 13:n++,e.next=5;break;case 16:this.setState({projectsArray:a});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid bg-transparent m-0"},this.state.projectsArray.length&&r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},o.m),r.a.createElement("div",{className:"row"},this.state.projectsArray.map((function(e){return r.a.createElement(P,{key:e.id,id:e.id,value:e})})))))}}]),t}(r.a.Component),D=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=Object(m.a)(e,1)[0];return r.a.createElement("footer",{style:a,className:"mt-auto py-3 text-center"},r.a.createElement("strong",null," \xa9 2021 "),"Find me on GitHub "," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/kairavkkp","aria-label":"My GitHub"},"Kairav Pithadia")," ")},_=function(e){var a=Object(n.useState)(!0),t=Object(m.a)(a,2),i=t[0],c=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==i&&c(e)}))}),[i]),r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(i?"bg-transparent":"bg-gradient"," ")},r.a.createElement("a",{className:"navbar-brand",href:"/#home"},"<".concat(o.a," />")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},o.n&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link lead",to:"/blog"},"Blog")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#projects"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:v.a,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("b",null,"Resume"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#aboutme"},r.a.createElement("b",null,"About"))))))},A=function e(a){var t=this,i=a.title,c=a.image,l=a.description;Object(j.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(r.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(r.a.createElement(n.Fragment,{key:t.list.length},r.a.createElement("h1",{className:""},e),r.a.createElement("hr",null))),t},this.getBlog=function(){return r.a.createElement("div",{className:"container-lg"},t.list)},this.title=i,this.image=c,this.description=l},R=[],C=new A({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),M=new A({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");R.push(M),R.push(C);var L=R,B=function(e){return r.a.createElement("div",{className:"container-lg mt-5 bg-blue"},r.a.createElement("h1",{className:"text-center"},"Blogs"),L.map((function(e,a){return r.a.createElement(H,{key:a,title:e.title,description:e.description,index:a})})))},H=function(e){var a=e.index,t=e.title,n=(e.image,e.description);return r.a.createElement("div",{className:"m-5"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-lg-12"}),r.a.createElement("div",{className:"col-8 col-lg-12"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:""},t),r.a.createElement("p",{className:"lead"},n),r.a.createElement(l.b,{to:"".concat("","blog/").concat(a)},"Read more..."," ")))),r.a.createElement("hr",null)))},I=function(e){var a=e.match.params.id,t=L[a];return r.a.createElement("div",{className:"container-lg mt-5"},t&&r.a.createElement("div",null,r.a.createElement("h1",{className:"display-2 text-center"},t.title),r.a.createElement("img",{className:"img-fluid mb-2",src:t.image,alt:t.title}),t.getBlog()),!t&&r.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},T=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,null),r.a.createElement(E,null),r.a.createElement(S,null))},J=function(){return r.a.createElement(l.a,{basename:"/"},o.p&&r.a.createElement(_,null),r.a.createElement(s.a,{path:"/",exact:!0,component:T}),o.n&&r.a.createElement(s.a,{path:"/blog",exact:!0,component:B}),o.n&&r.a.createElement(s.a,{path:"/blog/:id",component:I}),r.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.41763a34.chunk.js.map