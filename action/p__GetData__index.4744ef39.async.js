"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[857],{5665:function(ge,w,i){i.r(w),i.d(w,{default:function(){return ue}});var z=i(38416),c=i.n(z),J=i(42122),v=i.n(J),S=i(27424),x=i.n(S),a=i(67294),B=i(27790),K=i(50583),U=i(17917),k=i(75081),R=i(31620),W=i(71577),$=i(5328),Q=i(31955),X=i(9669),q=i.n(X),j="http://10.147.20.160",Y=q().create({baseURL:j,withCredentials:!0,headers:{}});Y.interceptors.request.use(function(o){var h=Q.Z.get("tianpeng-token");return o.headers.common.Authorization=h||"",o},function(o){return o}),Y.interceptors.response.use(function(o){if(o.status!==200)throw new Error("\u7F51\u7EDC\u9519\u8BEF");o=o.data;var h=typeof o.errCode!="undefined"?parseInt(o.errCode,0):0;if(h!==0){if(h===1502)throw new Error(o.message);if(h===1001)return o;throw h!==200&&B.ZP.error(o.message),new Error(o.message)}return o},function(o){throw new Error(o.message)});var _=function(){return{ajaxService:Y}},pe=null,ee=_,ae=function(h,g){var f=ee(),p=f.ajaxService,C=function(m){return m||{}},N=function(m){return typeof m.data=="undefined"||g&&g.response?m:m.data};return(0,$.ZP)(C,v()({requestMethod:function(m){return p(v()(v()({},h),m))},onError:function(m){console.log(m)},formatResult:N},g))},L=ae,te=i(30381),H=i.n(te),re=function(h){switch(h){case"\u5168\u8EAB\u9EBB\u9189":return 1;case"\u690E\u7BA1\u5185\u9EBB\u9189":return 2;case"\u5C40\u90E8\u9EBB\u9189":return 3;case"\u590D\u5408\u9EBB\u9189":return 4;case"\u5176\u4ED6\u9EBB\u9189\u65B9\u6CD5":return 9;case"\u5438\u5165\u9EBB\u9189":return 11;case"\u9759\u8109\u9EBB\u9189":return 12;case"\u57FA\u7840\u9EBB\u9189":return 12;case"\u86DB\u7F51\u819C\u4E0B\u8154\u963B\u6EDE\u9EBB\u9189":return 21;case"\u786C\u810A\u819C\u5916\u8154\u963B\u6EDE\u9EBB\u9189":return 22;case"\u795E\u7ECF\u4E1B\u963B\u6EDE\u9EBB\u9189":return 31;case"\u795E\u7ECF\u8282\u963B\u6EDE\u9EBB\u9189":return 32;case"\u795E\u7ECF\u963B\u6EDE\u9EBB\u9189":return 33;case"\u533A\u57DF\u963B\u6EDE\u9EBB\u9189":return 34;case"\u5C40\u90E8\u6D78\u6DA6\u9EBB\u9189":return 35;case"\u8868\u9762\u9EBB\u9189":return 36;case"\u9759\u5438\u590D\u5408\u5168\u9EBB":return 41;case"\u9488\u836F\u590D\u5408\u9EBB\u9189":return 42;case"\u795E\u7ECF\u4E1B\u4E0E\u786C\u819C\u5916\u963B\u6EDE\u590D\u5408\u9EBB\u9189":return 43;case"\u5168\u9EBB\u590D\u5408\u5168\u8EAB\u964D\u6E29":return 44;case"\u5168\u9EBB\u590D\u5408\u63A7\u5236\u6027\u964D\u538B":return 45;default:return null}},d={item:"item___huSYS",label:"label___KSFBf"},ne={searchValue:"searchValue___ly2Nc"},oe=function(h){var g=h.label,f=g===void 0?"":g,p=h.searchValue,C=p===void 0?"":p,N=h.color;if(!C)return f||"-";var F=f,m="".concat(f),y=m.toLowerCase(),E=C.toLowerCase();if(y.indexOf(E)!==-1){var V=m.substring(0,y.indexOf(E)),T=m.substring(y.indexOf(E),y.indexOf(E)+E.length),P=m.substring(y.indexOf(E)+E.length,y.length);F=a.createElement(a.Fragment,null,V,a.createElement("span",{style:{color:N},className:ne.searchValue},T),P)}return F},A=oe,le={url:"/bzfy/inhospitalBase/list",method:"GET"},ie={url:"/bzfy/inhospitalBase/detail",method:"GET"},se=function(){var h=(0,a.useState)(""),g=x()(h,2),f=g[0],p=g[1],C=L(le,{}),N=C.loading,F=C.data,m=C.run,y=function(r){var e=r||{},t=r.costGatherResult||{},ce={D43:t.totalCost,F44:t.generalTreatmentOperation,H44:t.nurse,K44:t.other,D45:t.pathologicDiagnosis,F45:t.laboratoryDiagnosis,H45:t.imagingDiagnosis,K45:t.clinicalDiagnosis,D46:t.nonOperativeTreatment,F46:t.clinicalPhysicalTherapy,H46:t.surgicalTreatment,J46:t.anesthesia,L46:t.operation,D47:t.rehabilitation,F47:t.TCMTreatment,H47:t.westernMedicine,J47:t.antimicrobialDrug,D48:t.chinesePatentDrug,F48:t.chineseHerbalMedicine,H48:t.blood,K48:t.protein,D49:t.globulin,F49:t.clottingFactor,H49:t.cytokine,L49:t.disposableInspection,D50:t.disposableTreatment,F50:t.disposableOperation,J50:t.other2},D=r.operationResult||{},me={D37:D.departureMode,J37:D.hospitalMame,J38:D.townshipHospital,D39:D.rehospitalizationPlan,J39:D.rehospitalizationPurpose,D40:D.beforeDay,F40:D.beforeHour,H40:D.beforeMinute,D41:D.afterDay,F41:D.afterHour,H41:D.afterMinute},ve=r.operationDetailResult||[],O={};ve.forEach(function(n,s){if(!(s>6)){var u;O=v()(v()({},O),{},(u={},c()(u,"B".concat(30+s),n.operationCode),c()(u,"C".concat(30+s),H()(n.operationDate).format("YYYYMMDD")),c()(u,"D".concat(30+s),n.operationLevel),c()(u,"E".concat(30+s),n.operationName),c()(u,"F".concat(30+s),n.operator),c()(u,"G".concat(30+s),n.firstAssistant),c()(u,"H".concat(30+s),n.lastAssistant),c()(u,"I".concat(30+s),n.notchGrade),c()(u,"J".concat(30+s),n.IncisionHealingCategory),c()(u,"K".concat(30+s),re(n.anesthesiaType)),c()(u,"L".concat(30+s),n.anesthesiologist),u))}});var l=r.outHospitalResult||{},de={C20:l.externalCauses,H20:l.externalCausesDisease,C21:l.pathologicDiagnosis,G21:l.pathologicDiagnosisDisease,J21:l.pathologicalNo,C22:l.drugAllergy,G22:l.allergicDrugs,J22:l.autopsy,C23:l.bloodGroup,H23:l.rh,C24:l.chiefOfDepartment,F24:l.firstMate,H24:l.attendingPhysician,K24:l.residentPhysician,C25:l.chargeNurse,F25:l.refresherPhysician,H25:l.internPhysician,K25:l.coder,C26:l.medicalRecordQuality,F26:l.qualityControlPhysician,H26:l.qualityControlNurse,K26:H()(l.qualityControlDate).format("YYYYMMDD")},b=r.outhospitalDetailResult||[],I=b.find(function(n){return n.isMain===1})||{},he=b.filter(function(n){return n.isMain!==1})||[],M={};he.forEach(function(n,s){if(!(s>14))if(s>6){var u;M=v()(v()({},M),{},(u={},c()(u,"G".concat(12+(s-7)),n.dischargeDiagnosis),c()(u,"H".concat(12+(s-7)),n.diseaseCode?n.diseaseCode.split(",").map(function(Z){return Z.split("x")[0]}).join(","):""),c()(u,"J".concat(12+(s-7)),n.admissionDiagnosis),u))}else{var G;M=v()(v()({},M),{},(G={},c()(G,"C".concat(13+s),n.dischargeDiagnosis),c()(G,"D".concat(13+s),n.diseaseCode.split(",").map(function(Z){return Z.split("x")[0]}).join(",")),c()(G,"E".concat(13+s),n.admissionDiagnosis),G))}});var fe=v()({C12:I.dischargeDiagnosis,D12:I.diseaseCode?I.diseaseCode.split(",").map(function(n){return n.split("x")[0]}).join(","):"",E12:I.admissionDiagnosis},M),De={I2:e.age,C3:e.ageMonth,I3:e.birthPlace,G2:H()(e.birthday).format("YYYYMMDD"),K6:e.contactAddress,C7:e.contactPhone,I6:e.contactRelationship,G6:e.contactsName,K4:e.currentAddress,E5:e.currentZipCode,G9:e.diagnose,E1:e.healthCard,G7:H()(e.hospitalizationDate).format("YYYYMMDD"),K7:e.hospitalizationDepartment,I7:e.hospitalizationHour,E9:e.hospitalizationLength,E7:e.hospitalizationMethod,C8:e.hospitalizationRoom,G1:e.hospitalizationsNumber,E4:e.idCard,G8:H()(e.leaveDate).format("YYYYMMDD"),K8:e.leaveDepartment,I8:e.leaveHour,C9:e.leaveRoom,I4:e.marriage,C1:e.medicalPayment.length>1?e.medicalPayment:"0"+e.medicalPayment,C2:e.name,C4:e.nation,K2:e.nationality==="501"?"CHN":"",K3:e.nativePlace,E3:e.newbornBirthWeight,G4:e.occupation,C5:e.phone,K5:e.placeOfWork,E6:e.placeOfWorkZipCode,G5:e.registeredAddress,I5:e.registeredZipCode,E2:e.sex,E8:e.transferDepartment,C6:e.workPhone},Ee=v()(v()(v()(v()(v()(v()({},ce),O),me),de),fe),De);window.electronAPI&&window.electronAPI.LoadData(Ee),B.ZP.success("\u6DFB\u52A0\u6210\u529F\uFF01")},E=L(ie,{manual:!0,onSuccess:function(r){y(r)},onError:function(){B.ZP.error("\u83B7\u53D6\u6570\u636E\u5931\u8D25!")}}),V=E.loading,T=E.run;return(0,a.useEffect)(function(){window.document.title="\u6570\u636E\u5217\u8868",window.electronAPI&&window.electronAPI.queryList(function(P,r){var e=r.name;K.Z.confirm({content:"\u662F\u5426\u641C\u7D22\u3010"+e+"\u3011",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){p(e),m({params:{keyword:e}})}})})},[]),a.createElement("div",null,a.createElement(U.Z.Search,{value:f,placeholder:"\u8BF7\u8F93\u5165\u75C5\u6848\u53F7",onChange:function(r){var e=r.target.value;p(e)},onSearch:function(r){p(r),m({params:{keyword:r}})}}),a.createElement("div",{style:{padding:"24px 0 24px 24px",maxHeight:"calc(100vh - 120px)",overflow:"auto",marginTop:16}},a.createElement(k.Z,{spinning:N,tip:"\u6B63\u5728\u5237\u65B0\u6570\u636E\uFF0C\u8BF7\u7A0D\u540E..."},a.createElement(R.ZP,{dataSource:F||[],renderItem:function(r){return a.createElement(R.ZP.Item,{actions:[a.createElement(W.ZP,{loading:V,type:"link",onClick:function(){K.Z.confirm({content:"\u786E\u5B9A\u628A\u3010".concat(r.name,"\u3011\u7684\u6570\u636E\u586B\u5199\u8FDB\u8868\u683C\u5417\uFF1F"),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){return T({params:{id:r.patientId}})}})}},"\u586B\u5199\u6570\u636E")]},a.createElement(R.ZP.Item.Meta,{description:a.createElement("div",{style:{color:"#000"}},a.createElement("div",{className:d.item},a.createElement("div",{className:d.label},"\u75C5\u6848\u53F7\uFF1A"),a.createElement("div",null,a.createElement(A,{searchValue:f,label:r.medicalRecordNumber}))),a.createElement("div",{className:d.item},a.createElement("div",{className:d.label},"\u75C5\u4EBAId\uFF1A"),a.createElement("div",null,a.createElement(A,{searchValue:f,label:r.patientId}))),a.createElement("div",{className:d.item},a.createElement("div",{className:d.label},"\u59D3\u540D\uFF1A"),a.createElement("div",null,a.createElement(A,{searchValue:f,label:r.name}))),a.createElement("div",{className:d.item},a.createElement("div",{className:d.label},"\u8EAB\u4EFD\u8BC1\u53F7\uFF1A"),a.createElement("div",null,a.createElement(A,{searchValue:f,label:r.idCard}))),a.createElement("div",{className:d.item},a.createElement("div",{className:d.label},"\u624B\u673A\u53F7\uFF1A"),a.createElement("div",null,a.createElement(A,{searchValue:f,label:r.phone}))),a.createElement("div",{className:d.item},a.createElement("div",{className:d.label},"\u8054\u7CFB\u4EBA\u624B\u673A\u53F7\uFF1A"),a.createElement("div",null,a.createElement(A,{searchValue:f,label:r.contactPhone}))),a.createElement("div",{className:d.item},a.createElement("div",{className:d.label},"\u5355\u4F4D\u7535\u8BDD\uFF1A"),a.createElement("div",null,a.createElement(A,{searchValue:f,label:r.workPhone}))),a.createElement("div",{className:d.item},a.createElement("div",{className:d.label},"\u5165\u9662\u65F6\u95F4\uFF1A"),a.createElement("div",null,r.hospitalizationDate)))}))}}))))},ue=se}}]);
