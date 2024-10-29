import{e as d,d as p,g as I,c as Q}from"./@babel-BtPi2XIt.js";import{P as ve}from"./@rc-component-DfeRbotr.js";import{r as n,a as f}from"./react-DHBI0EtI.js";import{c as E}from"./classnames-C9FZUsQl.js";import{e as Ce,A as oe,m as ye,E as ee,K as te}from"./rc-util-C-ojZSMc.js";import{C as le}from"./rc-motion-CcFStZqK.js";var re=n.createContext({});function ae(t,e,a){var o=e;return!o&&a&&(o="".concat(t,"-").concat(a)),o}function ne(t,e){var a=t["page".concat(e?"Y":"X","Offset")],o="scroll".concat(e?"Top":"Left");if(typeof a!="number"){var r=t.document;a=r.documentElement[o],typeof a!="number"&&(a=r.body[o])}return a}function be(t){var e=t.getBoundingClientRect(),a={left:e.left,top:e.top},o=t.ownerDocument,r=o.defaultView||o.parentWindow;return a.left+=ne(r),a.top+=ne(r,!0),a}const Ne=n.memo(function(t){var e=t.children;return e},function(t,e){var a=e.shouldUpdate;return!a});var ge={width:0,height:0,overflow:"hidden",outline:"none"},Re={outline:"none"},he=f.forwardRef(function(t,e){var a=t.prefixCls,o=t.className,r=t.style,m=t.title,c=t.ariaId,v=t.footer,l=t.closable,C=t.closeIcon,N=t.onClose,b=t.children,y=t.bodyStyle,k=t.bodyProps,R=t.modalRender,S=t.onMouseDown,x=t.onMouseUp,T=t.holderRef,M=t.visible,_=t.forceRender,g=t.width,D=t.height,i=t.classNames,u=t.styles,H=f.useContext(re),L=H.panel,X=Ce(T,L),O=n.useRef(),V=n.useRef();f.useImperativeHandle(e,function(){return{focus:function(){var h;(h=O.current)===null||h===void 0||h.focus({preventScroll:!0})},changeActive:function(h){var q=document,B=q.activeElement;h&&B===V.current?O.current.focus({preventScroll:!0}):!h&&B===O.current&&V.current.focus({preventScroll:!0})}}});var U={};g!==void 0&&(U.width=g),D!==void 0&&(U.height=D);var w=v?f.createElement("div",{className:E("".concat(a,"-footer"),i==null?void 0:i.footer),style:d({},u==null?void 0:u.footer)},v):null,P=m?f.createElement("div",{className:E("".concat(a,"-header"),i==null?void 0:i.header),style:d({},u==null?void 0:u.header)},f.createElement("div",{className:"".concat(a,"-title"),id:c},m)):null,A=n.useMemo(function(){return p(l)==="object"&&l!==null?l:l?{closeIcon:C??f.createElement("span",{className:"".concat(a,"-close-x")})}:{}},[l,C,a]),$=oe(A,!0),W=p(l)==="object"&&l.disabled,Y=l?f.createElement("button",I({type:"button",onClick:N,"aria-label":"Close"},$,{className:"".concat(a,"-close"),disabled:W}),A.closeIcon):null,K=f.createElement("div",{className:E("".concat(a,"-content"),i==null?void 0:i.content),style:u==null?void 0:u.content},Y,P,f.createElement("div",I({className:E("".concat(a,"-body"),i==null?void 0:i.body),style:d(d({},y),u==null?void 0:u.body)},k),b),w);return f.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":m?c:null,"aria-modal":"true",ref:X,style:d(d({},r),U),className:E(a,o),onMouseDown:S,onMouseUp:x},f.createElement("div",{ref:O,tabIndex:0,style:Re},f.createElement(Ne,{shouldUpdate:M||_},R?R(K):K)),f.createElement("div",{tabIndex:0,ref:V,style:ge}))}),ie=n.forwardRef(function(t,e){var a=t.prefixCls,o=t.title,r=t.style,m=t.className,c=t.visible,v=t.forceRender,l=t.destroyOnClose,C=t.motionName,N=t.ariaId,b=t.onVisibleChanged,y=t.mousePosition,k=n.useRef(),R=n.useState(),S=Q(R,2),x=S[0],T=S[1],M={};x&&(M.transformOrigin=x);function _(){var g=be(k.current);T(y&&(y.x||y.y)?"".concat(y.x-g.left,"px ").concat(y.y-g.top,"px"):"")}return n.createElement(le,{visible:c,onVisibleChanged:b,onAppearPrepare:_,onEnterPrepare:_,forceRender:v,motionName:C,removeOnLeave:l,ref:k},function(g,D){var i=g.className,u=g.style;return n.createElement(he,I({},t,{ref:e,title:o,ariaId:N,prefixCls:a,holderRef:D,style:d(d(d({},u),r),M),className:E(m,i)}))})});ie.displayName="Content";var Ee=function(e){var a=e.prefixCls,o=e.style,r=e.visible,m=e.maskProps,c=e.motionName,v=e.className;return n.createElement(le,{key:"mask",visible:r,motionName:c,leavedClassName:"".concat(a,"-mask-hidden")},function(l,C){var N=l.className,b=l.style;return n.createElement("div",I({ref:C,style:d(d({},b),o),className:E("".concat(a,"-mask"),N,v)},m))})},ke=function(e){var a=e.prefixCls,o=a===void 0?"rc-dialog":a,r=e.zIndex,m=e.visible,c=m===void 0?!1:m,v=e.keyboard,l=v===void 0?!0:v,C=e.focusTriggerAfterClose,N=C===void 0?!0:C,b=e.wrapStyle,y=e.wrapClassName,k=e.wrapProps,R=e.onClose,S=e.afterOpenChange,x=e.afterClose,T=e.transitionName,M=e.animation,_=e.closable,g=_===void 0?!0:_,D=e.mask,i=D===void 0?!0:D,u=e.maskTransitionName,H=e.maskAnimation,L=e.maskClosable,X=L===void 0?!0:L,O=e.maskStyle,V=e.maskProps,U=e.rootClassName,w=e.classNames,P=e.styles,A=n.useRef(),$=n.useRef(),W=n.useRef(),Y=n.useState(c),K=Q(Y,2),j=K[0],h=K[1],q=ye();function B(){ee($.current,document.activeElement)||(A.current=document.activeElement)}function se(){if(!ee($.current,document.activeElement)){var s;(s=W.current)===null||s===void 0||s.focus()}}function ce(s){if(s)se();else{if(h(!1),i&&A.current&&N){try{A.current.focus({preventScroll:!0})}catch{}A.current=null}j&&(x==null||x())}S==null||S(s)}function F(s){R==null||R(s)}var z=n.useRef(!1),G=n.useRef(),ue=function(){clearTimeout(G.current),z.current=!0},de=function(){G.current=setTimeout(function(){z.current=!1})},Z=null;X&&(Z=function(J){z.current?z.current=!1:$.current===J.target&&F(J)});function fe(s){if(l&&s.keyCode===te.ESC){s.stopPropagation(),F(s);return}c&&s.keyCode===te.TAB&&W.current.changeActive(!s.shiftKey)}n.useEffect(function(){c&&(h(!0),B())},[c]),n.useEffect(function(){return function(){clearTimeout(G.current)}},[]);var me=d(d(d({zIndex:r},b),P==null?void 0:P.wrapper),{},{display:j?null:"none"});return n.createElement("div",I({className:E("".concat(o,"-root"),U)},oe(e,{data:!0})),n.createElement(Ee,{prefixCls:o,visible:i&&c,motionName:ae(o,u,H),style:d(d({zIndex:r},O),P==null?void 0:P.mask),maskProps:V,className:w==null?void 0:w.mask}),n.createElement("div",I({tabIndex:-1,onKeyDown:fe,className:E("".concat(o,"-wrap"),y,w==null?void 0:w.wrapper),ref:$,onClick:Z,style:me},k),n.createElement(ie,I({},e,{onMouseDown:ue,onMouseUp:de,ref:W,closable:g,ariaId:q,prefixCls:o,visible:c&&j,onClose:F,onVisibleChanged:ce,motionName:ae(o,T,M)}))))},Se=function(e){var a=e.visible,o=e.getContainer,r=e.forceRender,m=e.destroyOnClose,c=m===void 0?!1:m,v=e.afterClose,l=e.panelRef,C=n.useState(a),N=Q(C,2),b=N[0],y=N[1],k=n.useMemo(function(){return{panel:l}},[l]);return n.useEffect(function(){a&&y(!0)},[a]),!r&&c&&!b?null:n.createElement(re.Provider,{value:k},n.createElement(ve,{open:a||r||b,autoDestroy:!1,getContainer:o,autoLock:a||b},n.createElement(ke,I({},e,{destroyOnClose:c,afterClose:function(){v==null||v(),y(!1)}}))))};Se.displayName="Dialog";export{Se as D,he as P};
