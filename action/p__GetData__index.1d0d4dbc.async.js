"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[857],{5665:function(ke,K,n){n.r(K),n.d(K,{default:function(){return Ie}});var te=n(38416),m=n.n(te),re=n(42122),f=n.n(re),ne=n(861),w=n.n(ne),le=n(27424),P=n.n(le),e=n(67294),Z=n(11588),x=n(16448),se=n(43916),oe=n(50915),ie=n(2831),J=n(71577),ue=n(11382),ce=n(27049),R=n(46535),ve=n(5328),me=n(31955),de=n(9669),he=n.n(de);console.log("http://10.10.10.17");var fe="http://10.10.10.17",L=he().create({baseURL:fe,withCredentials:!0,headers:{}});L.interceptors.request.use(function(o){var v=me.Z.get("tianpeng-token");return o.headers.common.Authorization=v||"",o},function(o){return o}),L.interceptors.response.use(function(o){if(o.status!==200)throw new Error("\u7F51\u7EDC\u9519\u8BEF");o=o.data;var v=typeof o.errCode!="undefined"?parseInt(o.errCode,0):0;if(v!==0){if(v===1502)throw new Error(o.message);if(v===1001)return o;throw v!==200&&Z.ZP.error(o.message),new Error(o.message)}return o},function(o){throw new Error(o.message)});var Ee=function(){return{ajaxService:L}},$e=null,De=Ee,ge=function(v,C){var F=De(),N=F.ajaxService,H=function(h){return h||{}},S=function(h){return typeof h.data=="undefined"||C&&C.response?h:h.data};return(0,ve.ZP)(H,f()({requestMethod:function(h){return N(f()(f()({},v),h))},onError:function(h){console.log(h)},formatResult:S},C))},U=ge,pe=n(30381),M=n.n(pe),Ce=function(v){switch(v){case"\u5168\u8EAB\u9EBB\u9189":return 1;case"\u690E\u7BA1\u5185\u9EBB\u9189":return 2;case"\u5C40\u90E8\u9EBB\u9189":return 3;case"\u590D\u5408\u9EBB\u9189":return 4;case"\u5176\u4ED6\u9EBB\u9189\u65B9\u6CD5":return 9;case"\u5438\u5165\u9EBB\u9189":return 11;case"\u9759\u8109\u9EBB\u9189":return 12;case"\u57FA\u7840\u9EBB\u9189":return 12;case"\u86DB\u7F51\u819C\u4E0B\u8154\u963B\u6EDE\u9EBB\u9189":return 21;case"\u786C\u810A\u819C\u5916\u8154\u963B\u6EDE\u9EBB\u9189":return 22;case"\u795E\u7ECF\u4E1B\u963B\u6EDE\u9EBB\u9189":return 31;case"\u795E\u7ECF\u8282\u963B\u6EDE\u9EBB\u9189":return 32;case"\u795E\u7ECF\u963B\u6EDE\u9EBB\u9189":return 33;case"\u533A\u57DF\u963B\u6EDE\u9EBB\u9189":return 34;case"\u5C40\u90E8\u6D78\u6DA6\u9EBB\u9189":return 35;case"\u8868\u9762\u9EBB\u9189":return 36;case"\u9759\u5438\u590D\u5408\u5168\u9EBB":return 41;case"\u9488\u836F\u590D\u5408\u9EBB\u9189":return 42;case"\u795E\u7ECF\u4E1B\u4E0E\u786C\u819C\u5916\u963B\u6EDE\u590D\u5408\u9EBB\u9189":return 43;case"\u5168\u9EBB\u590D\u5408\u5168\u8EAB\u964D\u6E29":return 44;case"\u5168\u9EBB\u590D\u5408\u63A7\u5236\u6027\u964D\u538B":return 45;default:return null}},Fe=function(v){switch(v){case"1":case"1.1":case"1.2":return"01";case"2":case"2.2":return"02";case"2.1":return"09";case"3":case"3.1":case"3.2":return"03";case"4":return"04";case"5":return"05";case"6":return"06";case"7":return"07";case"8":return"08";case"9":return"99";default:return"99"}},s={item:"item___huSYS",label:"label___KSFBf",search:"search___dkipw",input:"input___tWoLl",type:"type___YiqD3",searchLabel:"searchLabel___dzkib"},ye={searchValue:"searchValue___ly2Nc"},Ae=function(v){var C=v.label,F=C===void 0?"":C,N=v.searchValue,H=N===void 0?"":N,S=v.color;if(!H)return F||"-";var d=F,h="".concat(F),y=h.toLowerCase(),D=H.toLowerCase();if(y.indexOf(D)!==-1){var I=h.substring(0,y.indexOf(D)),G=h.substring(y.indexOf(D),y.indexOf(D)+D.length),V=h.substring(y.indexOf(D)+D.length,y.length);d=e.createElement(e.Fragment,null,I,e.createElement("span",{style:{color:S},className:ye.searchValue},G),V)}return d},A=Ae,Ne=n(58533),Pe=n(61791),Me={url:"/bzfy/inhospitalBase/list",method:"GET"},He={url:"/bzfy/inhospitalBase/detail",method:"GET"},Se=function(){var v=(0,e.useState)(1),C=P()(v,2),F=C[0],N=C[1],H=(0,e.useState)(""),S=P()(H,2),d=S[0],h=S[1],y=(0,e.useState)([]),D=P()(y,2),I=D[0],G=D[1],V=(0,e.useState)(""),W=P()(V,2),g=W[0],k=W[1],Ye=(0,e.useState)("in"),$=P()(Ye,2),b=$[0],Q=$[1],Be=(0,e.useState)(!0),X=P()(Be,2),Ge=X[0],Te=X[1],q=U(Me,{onSuccess:function(r){N(F+1),G([].concat(w()(I),w()(r))),Te(r.length>=20)}}),Ze=q.loading,j=q.run,Re=function(r){var a=r||{},t=r.costGatherResult||{},Oe={D43:t.totalCost,F44:t.generalTreatmentOperation,H44:t.nurse,K44:t.other,D45:t.pathologicDiagnosis,F45:t.laboratoryDiagnosis,H45:t.imagingDiagnosis,K45:t.clinicalDiagnosis,D46:t.nonOperativeTreatment,F46:t.clinicalPhysicalTherapy,H46:t.surgicalTreatment,J46:t.anesthesia,L46:t.operation,D47:t.rehabilitation,F47:t.tcmTreatment,H47:t.westernMedicine,J47:t.antimicrobialDrug,D48:t.chinesePatentDrug,F48:t.chineseHerbalMedicine,H48:t.blood,K48:t.protein,D49:t.globulin,F49:t.clottingFactor,H49:t.cytokine,L49:t.disposableInspection,D50:t.disposableTreatment,F50:t.disposableOperation,J50:t.other2,I43:t.fY_FY0ZFJE,D44:t.ordnMedServfee},E=r.operationResult||{},ze={D37:E.departureMode,J37:E.hospitalName,J38:E.townshipHospital,D39:E.rehospitalizationPlan,J39:E.rehospitalizationPurpose,D40:E.beforeDay,F40:E.beforeHour,H40:E.beforeMinute,D41:E.afterDay,F41:E.afterHour,H41:E.afterMinute},Ke=r.operationDetailResult||[],O={};Ke.forEach(function(l,u){if(!(u>6)){var c;O=f()(f()({},O),{},(c={},m()(c,"B".concat(30+u),l.operationCode),m()(c,"C".concat(30+u),M()(l.operationDate).format("YYYYMMDD")),m()(c,"D".concat(30+u),l.operationLevel),m()(c,"E".concat(30+u),l.operationName),m()(c,"F".concat(30+u),l.operator),m()(c,"G".concat(30+u),l.firstAssistant),m()(c,"H".concat(30+u),l.lastAssistant),m()(c,"I".concat(30+u),l.notchGrade),m()(c,"J".concat(30+u),l.incisionHealingCategory),m()(c,"K".concat(30+u),Ce(l.anesthesiaType)),m()(c,"L".concat(30+u),l.anesthesiologist),c))}});var i=r.outHospitalResult||{},we={C20:i.externalCauses,H20:i.externalCausesDisease,C21:i.pathologicDiagnosis,G21:i.pathologicDiagnosisDisease,J21:i.pathologicalNo,C22:i.drugAllergy,G22:i.allergicDrugs,J22:i.autopsy,C23:i.bloodGroup,H23:i.rh,C24:i.chiefOfDepartment,F24:i.firstMate,H24:i.attendingPhysician,K24:i.residentPhysician,C25:i.chargeNurse,F25:i.refresherPhysician,H25:i.internPhysician,K25:i.coder,C26:i.medicalRecordQuality,F26:i.qualityControlPhysician,H26:i.qualityControlNurse,K26:M()(i.qualityControlDate).format("YYYYMMDD")},ae=r.outhospitalDetailResult||[],T=ae.find(function(l){return l.isMain===1})||{},xe=ae.filter(function(l){return l.isMain!==1})||[],Y={};xe.forEach(function(l,u){if(!(u>14))if(u>6){var c;Y=f()(f()({},Y),{},(c={},m()(c,"G".concat(12+(u-7)),l.dischargeDiagnosis),m()(c,"H".concat(12+(u-7)),l.diseaseCode?l.diseaseCode.split(",").map(function(z){return z.split("x")[0]}).join(","):""),m()(c,"J".concat(12+(u-7)),l.admissionDiagnosis),c))}else{var B;Y=f()(f()({},Y),{},(B={},m()(B,"C".concat(13+u),l.dischargeDiagnosis),m()(B,"D".concat(13+u),l.diseaseCode.split(",").map(function(z){return z.split("x")[0]}).join(",")),m()(B,"E".concat(13+u),l.admissionDiagnosis),B))}});var Je=f()({C12:T.dischargeDiagnosis,D12:T.diseaseCode?T.diseaseCode.split(",").map(function(l){return l.split("x")[0]}).join(","):"",E12:T.admissionDiagnosis},Y),Ue={I2:a.age,C3:a.ageMonth,I3:a.birthPlace,G2:M()(a.birthday).format("YYYYMMDD"),K6:a.contactAddress,C7:a.contactPhone,I6:a.contactRelationship,G6:a.contactsName,K4:a.currentAddress,E5:a.currentZipCode,G9:a.diagnose,E1:a.healthCard,G7:M()(a.hospitalizationDate).format("YYYYMMDD"),K7:a.hospitalizationDepartment,I7:a.hospitalizationHour,E9:a.hospitalizationLength,E7:a.hospitalizationMethod,C8:a.hospitalizationRoom,G1:a.hospitalizationsNumber,E4:a.idCard,G8:M()(a.leaveDate).format("YYYYMMDD"),K8:a.leaveDepartment,I8:a.leaveHour,C9:a.leaveRoom,I4:a.marriage,C1:Fe(a.medicalPayment),C2:a.name,C4:a.nation,K2:a.nationality==="501"?"CHN":"",K3:a.nativePlace,E3:a.newbornBirthWeight,G4:a.occupation,C5:a.phone,K5:a.placeOfWork,E6:a.placeOfWorkZipCode,G5:a.registeredAddress,I5:a.registeredZipCode,E2:a.sex,E8:a.transferDepartment,C6:a.workPhone,I9:a.diagnoseCode?a.diagnoseCode.split("x")[0]:null},We=f()(f()(f()(f()(f()(f()({},Oe),O),ze),we),Je),Ue);window.electronAPI&&window.electronAPI.LoadData(We),Z.ZP.success("\u6DFB\u52A0\u6210\u529F\uFF01")},_=U(He,{manual:!0,onSuccess:function(r){Re(r)},onError:function(){Z.ZP.error("\u83B7\u53D6\u6570\u636E\u5931\u8D25!")}}),Le=_.loading,Ve=_.run,ee=function(r){N(1),G([]),j({params:r})};(0,e.useEffect)(function(){window.document.title="\u6570\u636E\u5217\u8868",window.electronAPI&&window.electronAPI.queryList(function(p,r){var a=r.name;x.Z.confirm({content:"\u662F\u5426\u641C\u7D22\u3010"+a+"\u3011",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){ee({keyword:a}),h(a),k(""),Q("in")}})})},[]);var be=function(){Ze||j({params:{page:F,keyword:d,year:g?g.split("-")[0]:null,month:g?g.split("-")[1]:null,type:b}})};return e.createElement("div",null,e.createElement("div",{className:s.search},e.createElement("div",{className:s.type},e.createElement("div",{className:s.searchLabel},"\u7C7B\u578B\uFF1A"),e.createElement(se.Z,{options:[{label:"\u5165\u9662",value:"in"},{label:"\u51FA\u9662",value:"out"}],value:b,onChange:Q}),e.createElement(oe.Z,{locale:Pe.Z,value:g?M()(g):null,placeholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",picker:"month",onChange:function(r,a){k(a)}})),e.createElement("div",{className:s.type},e.createElement("div",{className:s.searchLabel},"\u5173\u952E\u5B57\uFF1A"),e.createElement(ie.Z,{className:s.input,value:d,placeholder:"\u8BF7\u8F93\u5165\u75C5\u6848\u53F7",onChange:function(r){var a=r.target.value;h(a)}})),e.createElement("div",null,e.createElement(J.Z,{type:"primary",onClick:function(){ee({keyword:d,year:g?g.split("-")[0]:null,month:g?g.split("-")[1]:null,type:b})}},"\u641C\u7D22"))),e.createElement("div",{id:"scrollableDiv",style:{padding:"0 0 24px 24px",maxHeight:"calc(100vh - 160px)",overflow:"auto",marginTop:16}},e.createElement(Ne.Z,{dataLength:I.length,next:be,scrollThreshold:1,hasMore:Ge,loader:e.createElement("div",{style:{textAlign:"center"}},e.createElement(ue.Z,null)),endMessage:e.createElement(ce.Z,{plain:!0},"\u6CA1\u6709\u66F4\u591A\u6570\u636E\u5566~"),scrollableTarget:"scrollableDiv"},e.createElement(R.ZP,{dataSource:I||[],renderItem:function(r){return e.createElement(R.ZP.Item,{actions:[e.createElement(J.Z,{loading:Le,type:"link",onClick:function(){x.Z.confirm({content:"\u786E\u5B9A\u628A\u3010".concat(r.name,"\u3011\u7684\u6570\u636E\u586B\u5199\u8FDB\u8868\u683C\u5417\uFF1F"),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){return Ve({params:{id:r.patientId}})}})}},"\u586B\u5199\u6570\u636E")]},e.createElement(R.ZP.Item.Meta,{description:e.createElement("div",{style:{color:"#000"}},e.createElement("div",{className:s.item},e.createElement("div",{className:s.label},"\u75C5\u6848\u53F7\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:d,label:r.medicalRecordNumber}))),e.createElement("div",{className:s.item},e.createElement("div",{className:s.label},"\u75C5\u4EBAId\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:d,label:r.patientId}))),e.createElement("div",{className:s.item},e.createElement("div",{className:s.label},"\u59D3\u540D\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:d,label:r.name}))),e.createElement("div",{className:s.item},e.createElement("div",{className:s.label},"\u8EAB\u4EFD\u8BC1\u53F7\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:d,label:r.idCard}))),e.createElement("div",{className:s.item},e.createElement("div",{className:s.label},"\u624B\u673A\u53F7\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:d,label:r.phone}))),e.createElement("div",{className:s.item},e.createElement("div",{className:s.label},"\u8054\u7CFB\u4EBA\u624B\u673A\u53F7\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:d,label:r.contactPhone}))),e.createElement("div",{className:s.item},e.createElement("div",{className:s.label},"\u5355\u4F4D\u7535\u8BDD\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:d,label:r.workPhone}))),e.createElement("div",{className:s.item},e.createElement("div",{className:s.label},"\u5165\u9662\u65F6\u95F4\uFF1A"),e.createElement("div",null,r.hospitalizationDate||"-")),e.createElement("div",{className:s.item},e.createElement("div",{className:s.label},"\u51FA\u9662\u65F6\u95F4\uFF1A"),e.createElement("div",null,r.leaveDate||"-")))}))}}))))},Ie=Se}}]);
