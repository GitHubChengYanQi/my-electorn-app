"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[857],{5665:function(Ve,b,n){n.r(b),n.d(b,{default:function(){return Ee}});var Q=n(38416),v=n.n(Q),k=n(42122),d=n.n(k),X=n(861),z=n.n(X),q=n(27424),S=n.n(q),e=n(67294),Y=n(27790),w=n(50583),j=n(17917),_=n(75081),ee=n(96074),V=n(31620),ae=n(71577),te=n(5328),re=n(31955),ne=n(9669),oe=n.n(ne),le="http://10.147.20.160",B=oe().create({baseURL:le,withCredentials:!0,headers:{}});B.interceptors.request.use(function(l){var h=re.Z.get("tianpeng-token");return l.headers.common.Authorization=h||"",l},function(l){return l}),B.interceptors.response.use(function(l){if(l.status!==200)throw new Error("\u7F51\u7EDC\u9519\u8BEF");l=l.data;var h=typeof l.errCode!="undefined"?parseInt(l.errCode,0):0;if(h!==0){if(h===1502)throw new Error(l.message);if(h===1001)return l;throw h!==200&&Y.ZP.error(l.message),new Error(l.message)}return l},function(l){throw new Error(l.message)});var se=function(){return{ajaxService:B}},Be=null,ie=se,ue=function(h,E){var p=ie(),C=p.ajaxService,P=function(c){return c||{}},M=function(c){return typeof c.data=="undefined"||E&&E.response?c:c.data};return(0,te.ZP)(P,d()({requestMethod:function(c){return C(d()(d()({},h),c))},onError:function(c){console.log(c)},formatResult:M},E))},x=ue,ce=n(30381),H=n.n(ce),ve=function(h){switch(h){case"\u5168\u8EAB\u9EBB\u9189":return 1;case"\u690E\u7BA1\u5185\u9EBB\u9189":return 2;case"\u5C40\u90E8\u9EBB\u9189":return 3;case"\u590D\u5408\u9EBB\u9189":return 4;case"\u5176\u4ED6\u9EBB\u9189\u65B9\u6CD5":return 9;case"\u5438\u5165\u9EBB\u9189":return 11;case"\u9759\u8109\u9EBB\u9189":return 12;case"\u57FA\u7840\u9EBB\u9189":return 12;case"\u86DB\u7F51\u819C\u4E0B\u8154\u963B\u6EDE\u9EBB\u9189":return 21;case"\u786C\u810A\u819C\u5916\u8154\u963B\u6EDE\u9EBB\u9189":return 22;case"\u795E\u7ECF\u4E1B\u963B\u6EDE\u9EBB\u9189":return 31;case"\u795E\u7ECF\u8282\u963B\u6EDE\u9EBB\u9189":return 32;case"\u795E\u7ECF\u963B\u6EDE\u9EBB\u9189":return 33;case"\u533A\u57DF\u963B\u6EDE\u9EBB\u9189":return 34;case"\u5C40\u90E8\u6D78\u6DA6\u9EBB\u9189":return 35;case"\u8868\u9762\u9EBB\u9189":return 36;case"\u9759\u5438\u590D\u5408\u5168\u9EBB":return 41;case"\u9488\u836F\u590D\u5408\u9EBB\u9189":return 42;case"\u795E\u7ECF\u4E1B\u4E0E\u786C\u819C\u5916\u963B\u6EDE\u590D\u5408\u9EBB\u9189":return 43;case"\u5168\u9EBB\u590D\u5408\u5168\u8EAB\u964D\u6E29":return 44;case"\u5168\u9EBB\u590D\u5408\u63A7\u5236\u6027\u964D\u538B":return 45;default:return null}},m={item:"item___huSYS",label:"label___KSFBf"},de={searchValue:"searchValue___ly2Nc"},me=function(h){var E=h.label,p=E===void 0?"":E,C=h.searchValue,P=C===void 0?"":C,M=h.color;if(!P)return p||"-";var f=p,c="".concat(p),F=c.toLowerCase(),g=P.toLowerCase();if(F.indexOf(g)!==-1){var N=c.substring(0,F.indexOf(g)),G=c.substring(F.indexOf(g),F.indexOf(g)+g.length),O=c.substring(F.indexOf(g)+g.length,F.length);f=e.createElement(e.Fragment,null,N,e.createElement("span",{style:{color:M},className:de.searchValue},G),O)}return f},A=me,he=n(58533),fe={url:"/bzfy/inhospitalBase/list",method:"GET"},De={url:"/bzfy/inhospitalBase/detail",method:"GET"},ge=function(){var h=(0,e.useState)(1),E=S()(h,2),p=E[0],C=E[1],P=(0,e.useState)(""),M=S()(P,2),f=M[0],c=M[1],F=(0,e.useState)([]),g=S()(F,2),N=g[0],G=g[1],O=(0,e.useState)(!0),J=S()(O,2),pe=J[0],Ce=J[1],U=x(fe,{onSuccess:function(r){C(p+1),G([].concat(z()(N),z()(r))),Ce(r.length>=20)}}),Fe=U.loading,Z=U.run,ye=function(r){var a=r||{},t=r.costGatherResult||{},He={D43:t.totalCost,F44:t.generalTreatmentOperation,H44:t.nurse,K44:t.other,D45:t.pathologicDiagnosis,F45:t.laboratoryDiagnosis,H45:t.imagingDiagnosis,K45:t.clinicalDiagnosis,D46:t.nonOperativeTreatment,F46:t.clinicalPhysicalTherapy,H46:t.surgicalTreatment,J46:t.anesthesia,L46:t.operation,D47:t.rehabilitation,F47:t.TCMTreatment,H47:t.westernMedicine,J47:t.antimicrobialDrug,D48:t.chinesePatentDrug,F48:t.chineseHerbalMedicine,H48:t.blood,K48:t.protein,D49:t.globulin,F49:t.clottingFactor,H49:t.cytokine,L49:t.disposableInspection,D50:t.disposableTreatment,F50:t.disposableOperation,J50:t.other2},D=r.operationResult||{},Ne={D37:D.departureMode,J37:D.hospitalMame,J38:D.townshipHospital,D39:D.rehospitalizationPlan,J39:D.rehospitalizationPurpose,D40:D.beforeDay,F40:D.beforeHour,H40:D.beforeMinute,D41:D.afterDay,F41:D.afterHour,H41:D.afterMinute},Ge=r.operationDetailResult||[],K={};Ge.forEach(function(o,i){if(!(i>6)){var u;K=d()(d()({},K),{},(u={},v()(u,"B".concat(30+i),o.operationCode),v()(u,"C".concat(30+i),H()(o.operationDate).format("YYYYMMDD")),v()(u,"D".concat(30+i),o.operationLevel),v()(u,"E".concat(30+i),o.operationName),v()(u,"F".concat(30+i),o.operator),v()(u,"G".concat(30+i),o.firstAssistant),v()(u,"H".concat(30+i),o.lastAssistant),v()(u,"I".concat(30+i),o.notchGrade),v()(u,"J".concat(30+i),o.IncisionHealingCategory),v()(u,"K".concat(30+i),ve(o.anesthesiaType)),v()(u,"L".concat(30+i),o.anesthesiologist),u))}});var s=r.outHospitalResult||{},Ie={C20:s.externalCauses,H20:s.externalCausesDisease,C21:s.pathologicDiagnosis,G21:s.pathologicDiagnosisDisease,J21:s.pathologicalNo,C22:s.drugAllergy,G22:s.allergicDrugs,J22:s.autopsy,C23:s.bloodGroup,H23:s.rh,C24:s.chiefOfDepartment,F24:s.firstMate,H24:s.attendingPhysician,K24:s.residentPhysician,C25:s.chargeNurse,F25:s.refresherPhysician,H25:s.internPhysician,K25:s.coder,C26:s.medicalRecordQuality,F26:s.qualityControlPhysician,H26:s.qualityControlNurse,K26:H()(s.qualityControlDate).format("YYYYMMDD")},$=r.outhospitalDetailResult||[],T=$.find(function(o){return o.isMain===1})||{},Re=$.filter(function(o){return o.isMain!==1})||[],I={};Re.forEach(function(o,i){if(!(i>14))if(i>6){var u;I=d()(d()({},I),{},(u={},v()(u,"G".concat(12+(i-7)),o.dischargeDiagnosis),v()(u,"H".concat(12+(i-7)),o.diseaseCode?o.diseaseCode.split(",").map(function(L){return L.split("x")[0]}).join(","):""),v()(u,"J".concat(12+(i-7)),o.admissionDiagnosis),u))}else{var R;I=d()(d()({},I),{},(R={},v()(R,"C".concat(13+i),o.dischargeDiagnosis),v()(R,"D".concat(13+i),o.diseaseCode.split(",").map(function(L){return L.split("x")[0]}).join(",")),v()(R,"E".concat(13+i),o.admissionDiagnosis),R))}});var Se=d()({C12:T.dischargeDiagnosis,D12:T.diseaseCode?T.diseaseCode.split(",").map(function(o){return o.split("x")[0]}).join(","):"",E12:T.admissionDiagnosis},I),Te={I2:a.age,C3:a.ageMonth,I3:a.birthPlace,G2:H()(a.birthday).format("YYYYMMDD"),K6:a.contactAddress,C7:a.contactPhone,I6:a.contactRelationship,G6:a.contactsName,K4:a.currentAddress,E5:a.currentZipCode,G9:a.diagnose,E1:a.healthCard,G7:H()(a.hospitalizationDate).format("YYYYMMDD"),K7:a.hospitalizationDepartment,I7:a.hospitalizationHour,E9:a.hospitalizationLength,E7:a.hospitalizationMethod,C8:a.hospitalizationRoom,G1:a.hospitalizationsNumber,E4:a.idCard,G8:H()(a.leaveDate).format("YYYYMMDD"),K8:a.leaveDepartment,I8:a.leaveHour,C9:a.leaveRoom,I4:a.marriage,C1:a.medicalPayment.length>1?a.medicalPayment:"0"+a.medicalPayment,C2:a.name,C4:a.nation,K2:a.nationality==="501"?"CHN":"",K3:a.nativePlace,E3:a.newbornBirthWeight,G4:a.occupation,C5:a.phone,K5:a.placeOfWork,E6:a.placeOfWorkZipCode,G5:a.registeredAddress,I5:a.registeredZipCode,E2:a.sex,E8:a.transferDepartment,C6:a.workPhone},Ye=d()(d()(d()(d()(d()(d()({},He),K),Ne),Ie),Se),Te);window.electronAPI&&window.electronAPI.LoadData(Ye),Y.ZP.success("\u6DFB\u52A0\u6210\u529F\uFF01")},W=x(De,{manual:!0,onSuccess:function(r){ye(r)},onError:function(){Y.ZP.error("\u83B7\u53D6\u6570\u636E\u5931\u8D25!")}}),Ae=W.loading,Pe=W.run;(0,e.useEffect)(function(){window.document.title="\u6570\u636E\u5217\u8868",window.electronAPI&&window.electronAPI.queryList(function(y,r){var a=r.name;w.Z.confirm({content:"\u662F\u5426\u641C\u7D22\u3010"+a+"\u3011",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){c(a),C(1),G([]),Z({params:{page:1,keyword:a}})}})})},[]);var Me=function(){Fe||Z({params:{page:p,keyword:f}})};return e.createElement("div",null,e.createElement(j.Z.Search,{value:f,placeholder:"\u8BF7\u8F93\u5165\u75C5\u6848\u53F7",onChange:function(r){var a=r.target.value;c(a)},onSearch:function(r){c(r),C(1),G([]),Z({params:{keyword:r}})}}),e.createElement("div",{id:"scrollableDiv",style:{padding:"24px 0 24px 24px",maxHeight:"calc(100vh - 120px)",overflow:"auto",marginTop:16}},e.createElement(he.Z,{dataLength:N.length,next:Me,scrollThreshold:1,hasMore:pe,loader:e.createElement("div",{style:{textAlign:"center"}},e.createElement(_.Z,null)),endMessage:e.createElement(ee.Z,{plain:!0},"\u6CA1\u6709\u66F4\u591A\u6570\u636E\u5566~"),scrollableTarget:"scrollableDiv"},e.createElement(V.ZP,{dataSource:N||[],renderItem:function(r){return e.createElement(V.ZP.Item,{actions:[e.createElement(ae.ZP,{loading:Ae,type:"link",onClick:function(){w.Z.confirm({content:"\u786E\u5B9A\u628A\u3010".concat(r.name,"\u3011\u7684\u6570\u636E\u586B\u5199\u8FDB\u8868\u683C\u5417\uFF1F"),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){return Pe({params:{id:r.patientId}})}})}},"\u586B\u5199\u6570\u636E")]},e.createElement(V.ZP.Item.Meta,{description:e.createElement("div",{style:{color:"#000"}},e.createElement("div",{className:m.item},e.createElement("div",{className:m.label},"\u75C5\u6848\u53F7\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:f,label:r.medicalRecordNumber}))),e.createElement("div",{className:m.item},e.createElement("div",{className:m.label},"\u75C5\u4EBAId\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:f,label:r.patientId}))),e.createElement("div",{className:m.item},e.createElement("div",{className:m.label},"\u59D3\u540D\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:f,label:r.name}))),e.createElement("div",{className:m.item},e.createElement("div",{className:m.label},"\u8EAB\u4EFD\u8BC1\u53F7\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:f,label:r.idCard}))),e.createElement("div",{className:m.item},e.createElement("div",{className:m.label},"\u624B\u673A\u53F7\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:f,label:r.phone}))),e.createElement("div",{className:m.item},e.createElement("div",{className:m.label},"\u8054\u7CFB\u4EBA\u624B\u673A\u53F7\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:f,label:r.contactPhone}))),e.createElement("div",{className:m.item},e.createElement("div",{className:m.label},"\u5355\u4F4D\u7535\u8BDD\uFF1A"),e.createElement("div",null,e.createElement(A,{searchValue:f,label:r.workPhone}))),e.createElement("div",{className:m.item},e.createElement("div",{className:m.label},"\u5165\u9662\u65F6\u95F4\uFF1A"),e.createElement("div",null,r.hospitalizationDate)))}))}}))))},Ee=ge}}]);
