(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),l=n(8),r=n.n(l),s=(n(15),n(2)),c=n(3),u=n(5),o=n(4),h=n(1),m=n(6),d=(n(16),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={inputValue:""},n.handleChangeInput=n.handleChangeInput.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChangeInput",value:function(e){var t=e.target.value;t=parseInt(t),isNaN(t)&&(t=""),this.setState({inputValue:t})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleSubmit(+this.state.inputValue)}},{key:"render",value:function(){var e="\n    ".concat("X"===this.props.currentSign?"../img/x-3.png":"O"===this.props.currentSign?"../img/o-3.png":"");return a.a.createElement("div",{className:"header"},a.a.createElement("input",{value:this.state.inputValue,placeholder:"size",onChange:this.handleChangeInput,className:"header__input"}),a.a.createElement("button",{onClick:this.handleSubmit,className:"header__button"},"Generate / Restart game"),a.a.createElement("div",{className:"header__text-block"},this.props.gameOver?this.props.wonSign?a.a.createElement("div",{className:"header__moves-text"},"Player",a.a.createElement("img",{src:e,alt:""}),"Won!"):a.a.createElement("span",null,"It's a draw!"):a.a.createElement("div",{className:"header__moves-text"},a.a.createElement("span",null,"Player"),a.a.createElement("img",{src:e,alt:""}),a.a.createElement("span",null,"is moving"))))}}]),t}(a.a.Component));function g(e){var t="".concat("X"===e.sign?"../img/x-3.png":"O"===e.sign?"../img/o-3.png":"");return a.a.createElement("div",{className:"cell",style:{width:e.size,height:e.size,margin:e.spacing/2},onClick:function(){return e.handleCellClick(e.id)}},a.a.createElement("img",{className:"cell__img",src:t,alt:""}))}function f(e){var t=function(){var t=e.cellSizes,n=e.size;for(var i in t){if(!t.hasOwnProperty(i))return;if(+i>=n)return{cellSize:t[i].size,cellSpacing:t[i].between}}}(),n=t.cellSize,i=t.cellSpacing,l=e.size*(n+i);return a.a.createElement("div",{className:"field",style:{width:l}},e.cells.map(function(t){return a.a.createElement(g,{size:n,spacing:i,sign:t.sign,key:t.id,id:t.id,handleCellClick:e.handleCellClick})}))}var v=function(e){function t(e){var n;Object(s.a)(this,t);return(n=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={fieldSize:3,minFieldSize:3,maxFieldSize:12,cells:n.getCells(3),cellSizes:n.getCellSizes(),currentSign:"X",wonSign:null,pointsToWin:n.getPointsToWin(3),gameOver:!1,freeCells:9},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.handleCellClick=n.handleCellClick.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getCells",value:function(e){return Array(e*e).fill(null).map(function(t,n){return{id:n,sign:"",x:n%e,y:Math.floor(n/e)}})}},{key:"getCellSizes",value:function(){return{3:{size:100,between:10},5:{size:80,between:8},7:{size:70,between:6},10:{size:60,between:4},12:{size:45,between:4}}}},{key:"getPointsToWin",value:function(e){return 3===e?3:4===e?4:5}},{key:"checkLine",value:function(e,t,n,i,a,l){var r=this,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,c=function(c){var u=e-c*i*n,o=t-c*a*n,h=r.state.cells.find(function(e){return e.x===u&&e.y===o});return h?h.sign!==l?"break":++s===r.state.pointsToWin?{v:!0}:void 0:"break"};e:for(var u=0;u<this.state.fieldSize;u++){var o=c(u);switch(o){case"break":break e;default:if("object"===typeof o)return o.v}}if(-1===n&&this.checkLine(e,t,1,i,a,l,s-1))return!0;return!1}},{key:"processMatches",value:function(e,t){for(var n=e.x,i=e.y,a=[[1,0],[0,1],[1,1],[-1,1]],l=0;l<a.length;l++){var r=a[l];if(this.checkLine(n,i,-1,r[0],r[1],t))return!0}return!1}},{key:"endGame",value:function(e,t){this.setState({gameOver:!0,freeCells:e,wonSign:t||null})}},{key:"handleCellClick",value:function(e){if(!this.state.gameOver){var t=this.state.cells.find(function(t){return t.id===e});if(""===t.sign){var n=this.state.currentSign,i=this.state.freeCells-1;t.sign=n;var a=this.processMatches({x:t.x,y:t.y},n);a?this.endGame(i,n):0===i&&this.endGame(i),this.setState(function(e){return a?{currentSign:e.currentSign}:{currentSign:"X"===e.currentSign?"O":"X",freeCells:i}})}}}},{key:"handleSubmit",value:function(e){var t=Math.max(e,this.state.minFieldSize);t=Math.min(t,this.state.maxFieldSize),this.setState({fieldSize:t,cells:this.getCells(t),pointsToWin:this.getPointsToWin(t),currentSign:"X",wonSign:null,gameOver:!1,freeCells:t*t})}},{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement(d,{currentSign:this.state.currentSign,handleSubmit:this.handleSubmit,gameOver:this.state.gameOver,freeCells:this.state.freeCells,wonSign:this.state.wonSign}),a.a.createElement(f,{size:this.state.fieldSize,cellSizes:this.state.cellSizes,cells:this.state.cells,handleCellClick:this.handleCellClick}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.1ae58f42.chunk.js.map