webpackJsonp([1,5,9,13],{"+s2T":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"left flex"},[a("button",{staticClass:"add",on:{click:function(e){t.dialogVisible=!0}}},[t._v("+")]),t._v(" "),t._m(0),t._v(" "),a("button",{staticClass:"Instructions"},[t._v("=")])]),t._v(" "),a("div",{staticClass:"right"}),t._v(" "),a("el-dialog",{attrs:{title:"添加阶段",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("label",{attrs:{for:"phaseName"}}),a("input",{attrs:{type:"text",name:"",id:"phaseName"}}),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stage-item"},[a("div",{staticClass:"stage-item-title flex"},[a("span",[t._v("test")]),a("div",[t._v("...")])]),t._v(" "),a("div",{staticClass:"stage-task con flex"},[a("h5",[t._v("自定义任务")]),a("div",[t._v("*")])]),t._v(" "),a("div",{staticClass:"stage-plus-one flex"},[a("button",{staticClass:"add"},[t._v("+")]),a("span",[t._v("添加并行任务")])])])}]};var i=a("VU/8")({data:function(){return{dialogVisible:!1}},methods:{handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})}}},s,!1,function(t){a("u01G")},"data-v-4ea20896",null);e.default=i.exports},Pf8b:function(t,e){},cbWt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("dwssss")])},staticRenderFns:[]},i=a("VU/8")(null,s,!1,null,null,null);e.default=i.exports},dhXI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{tableData:[],centerDialogVisible:!1}},created:function(){this.getRepoInfo()},methods:{getRepoInfo:function(){var t=this;this.axios.get(" https://api.daocloud.io/v1/ship/project/671eae2e-0712-478b-9bcc-c5278efa020a/pipelines?offset=0&size=10&stream_room=20018a36.1539706689.95ca8e0007dd2a2b6aa44a9bfd57f23e6a24696a",{headers:{Authorization:this.$cookies.get("token")}}).then(function(e){t.tableData=e.data.builds,console.log(e)})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{label:"执行记录编号",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.tag))]),t._v(" "),a("div",[t._v(t._s(e.row.author+("manual"==e.row.trigger_method?"手动触发":"")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"ref",label:"commit",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.ref))]),t._v(" "),a("div",[t._v(t._s(e.row.tag))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"message",label:"commit message"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"status"},t._l(e.row.stages,function(e){return a("span",{key:e.id,class:"Failure"==e.status?"false":"correct",on:{click:function(e){t.centerDialogVisible=!0}}})})),t._v(" "),a("div",[t._v(t._s(e.row.status))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"时间"}})],1),t._v(" "),a("el-dialog",{attrs:{title:"流水线 master-ec450a7 的日志",visible:t.centerDialogVisible,width:"30%","show-close":""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[a("div",[a("div",[t._v("左")]),t._v(" "),a("div",[t._v("右")])])])],1)},staticRenderFns:[]};var n=a("VU/8")(s,i,!1,function(t){a("h5EH")},"data-v-8f48d354",null);e.default=n.exports},h5EH:function(t,e){},"siw+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("dhXI"),i=a("+s2T"),n=a("cbWt"),o={data:function(){return{currentTabComponent:s.default,tabNavItemList:[{name:"执行记录",component:s.default},{name:"流程定义",component:i.default},{name:"设置",component:n.default}]}},methods:{exchange:function(t){this.currentTabComponent=t}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"container"},[a("ul",{staticClass:"dao-tab-nav"},t._l(t.tabNavItemList,function(e){return a("li",{key:e.id,staticClass:"dao-tab-nav-item"},[a("a",{staticClass:"dao-tab-nav-link",on:{click:function(a){t.exchange(e.component)}}},[t._v(t._s(e.name))])])})),t._v(" "),a("div",[a("keep-alive",[a(t.currentTabComponent,{tag:"component"})],1)],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-header"},[a("img",{attrs:{src:"https://dashboard.daocloud.io/assets/images/buildflow/github.svg",alt:""}}),t._v(" "),a("div",{staticClass:"title-container"},[a("h1",[t._v("exciting")]),t._v(" "),a("div",{staticClass:"info"},[a("span",{staticClass:"info-item"},[t._v("\n          镜像:"),a("a",{attrs:{href:"https://dashboard.daocloud.io/packages/c355083e-d2f9-4e09-aa49-947fc903e01c"}},[t._v("exciting")])]),t._v(" "),a("span",{staticClass:"info-item ng-scope"},[t._v("\n          代码源:"),a("a",{attrs:{href:"https://github.com/xuzhenglun/docker-shadowsocks"}},[t._v("xuzhenglun/docker-shadowsocks")])])])]),t._v(" "),a("div",{staticClass:"type"},[a("span",{staticClass:"push-code-info"},[t._v("push代码触发")]),t._v(" "),a("button",[t._v("手动触发")])])])}]};var c=a("VU/8")(o,l,!1,function(t){a("Pf8b")},"data-v-1c388cc3",null);e.default=c.exports},u01G:function(t,e){}});
//# sourceMappingURL=1.a171faf734e28647aff7.js.map