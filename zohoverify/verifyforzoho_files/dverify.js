function autoResize(a){var b=document.getElementById(a).contentWindow.document.body.scrollHeight,c=document.getElementById(a).contentWindow.document.body.scrollWidth;$a("cnameMainDiv").height=b+"px",document.getElementById(a).height=b+"px",document.getElementById(a).width=c+"px"}Collaboration.join=function(a){WebMessanger.joinCollab(a)},Collaboration.quit=function(a){WebMessanger.quit(a)},Collaboration.handleCrossProductMessage=function(a,b){if(b=evaluate(b),b.customId)return b.customId===customId&&($a("cpanel-14")&&"seltd"===$a("cpanel-14").className?"undefined"!=typeof cp.goToStorageDetails&&cp.goToStorageDetails():$a("cpanel-1")&&"seltd"===$a("cpanel-1").className&&"undefined"!=typeof cp.goToOrgDetails&&cp.goToOrgDetails()),!1},Collaboration.handleCustomMessage=function(a){setTimeout(function(){pushData(a)},1e3)},Collaboration.handleComposeMail=function(a,b){return!1},Collaboration.getPageTitle=function(){return DocumentTitle},WmsUIImpl.handleAnnouncement=function(a,b){return!1},Collaboration.handleServiceMessage=function(a){var b;try{b=$.parseJSON(a.msg)}catch(c){return window.console.error("Improper wms message"),!1}b.v?$.getScript(scheme+"://"+staticJsUrl+"/zmail/ac/"+b.v+conPath+"/js/cpanel.min.js",function(a,c,d){handleZMServiceMessage(b)}):handleZMServiceMessage(b)};var handleZMServiceMessage=function(a){isValidWmsMessage(a)&&($a("reloadBand").style.display="block")},isValidWmsMessage=function(a){if(a&&a.app&&"cpanel"===a.app){if(a.all)return!0;if(a.zuid&&a.zuid instanceof Array&&a.zuid.indexOf(ZUID+"")>-1)return!0;if(a.zoid&&a.zoid instanceof Array&&a.zoid.indexOf(customId+"")>-1)return!0;if(a.zgid&&a.zgid instanceof Array){for(var b=[],c=0;c<a.zgid.length;c++)if(b.indexOf(a.zgid[c])>-1)return!0}else if(a.admin&&isOrgAdmn)return!0}return!1};WmsUIImpl.handleUIHidden=function(){cp.chatBar=!1,cp.contentsize()};var verify_status=1,mailaccount_status=2,adduser_status=3,groups_status=4,mx_status=5,control_spam_status=6,migration_status=7,mail_client_status=8,docs_configure_status=9,claim_referral_status=10,mobileaccess_status=11,done_status=12,setupStatus=0,bodyheight="",leftOption="",nonsecparam="http",secparam="https",pageSenseString="",maskEle="maskDiv";showMaskDiv=function(){var a=$a(maskEle);showElement(maskEle),a.style.height=document.documentElement.clientWidth+"px"},hideMaskDiv=function(){hideElement(maskEle)},resize=function(){$a("div_height").style.height=bodyheight-82+"px"},initDomainSetup=function(){var a=(document.body.clientHeight,zohoUrl.split("."));if(pageSenseString=a[a.length-1],pageSenseString+=isPaidOrg?"paid":"free",1==domainSize&&(leftOption="&left=false"),cpAjax(conPath+"/orgAct.do",getOrgSetupStatusParam(),function(a){""!=a&&(setupStatus=parseInt(a.st),0===setupStatus?(setupStatus=isDomainVerified?isMBExists?adduser_status:mailaccount_status:verify_status,pushDataToPageSense(setupStatus),cpAjax(conPath+"/orgAct.do",addOrgSetupStatusParam(setupStatus),function(a){isDomainVerified?isMailHosted?mailHostDomainCallBack():mailHostDomain():gotoVerifyPage(),hideElement("lodingDiv")})):isDomainVerified?(isMailHosted?mailHostDomainCallBack():mailHostDomain(),hideElement("lodingDiv")):setupStatus>verify_status?(pushDataToPageSense(verify_status),cpAjax(conPath+"/orgAct.do",updateOrgSetupStatusParam(verify_status),function(a){gotoVerifyPage(),hideElement("lodingDiv")})):(pushDataToPageSense(setupStatus),gotoVerifyPage()))}),hideElement("maskDiv"),"undefined"!=typeof serviceUrl)setCookie("dmnRetUrl","frmOtherService~"+serviceUrl,1);else if("true"===fromCpanelWarn)showElement("maskDiv"),showElement("fromCpanelWarnDiv"),setCookie("dmnRetUrl","frmCpanel",1);else try{isFuji||document.referrer.indexOf(workplaceHostName)==-1&&"true"!==initialSetup?document.referrer.indexOf("/biz/")!=-1&&setCookie("dmnRetUrl","fromBiz",1):setCookie("dmnRetUrl","fromWorkplace",1)}catch(b){}registerMailChat(!0)},closefromCpanelWarn=function(){hideElement("maskDiv"),hideElement("fromCpanelWarnDiv")},closeconfirmdomainedit=function(a){hideElement("maskDiv"),hideElement("confirmdomainedit"),addZOIDinReqUrl(conPath+"/verify.do?dname="+a,"pageReload")};var selectMenu=function(a){$a("verifySetup")&&($a("verifySetup").className=""),$a("add_Users")&&($a("add_Users").className=""),$a("add_Group")&&($a("add_Group").className=""),$a("change_Mx")&&($a("change_Mx").className=""),$a("control_Spam")&&($a("control_Spam").className=""),$a("migrate_user")&&($a("migrate_user").className=""),$a("mobileAccess")&&($a("mobileAccess").className=""),$a("claim_referral")&&($a("claim_referral").className=""),$a("mail_client")&&($a("mail_client").className=""),$a("docs_setup")&&($a("docs_setup").className=""),null!=a&&(a.className="selec")},bindMenuClick=function(a){a>verify_status&&($a("domaintick").className="ticksel",$a("verifySetup").style.cursor="default"),$a("add_Users")&&a>adduser_status&&($a("addusertick").className="ticksel",$a("add_Users").className="cursorselect",$a("add_Users").onclick=function(){gotoNextPage(adduser_status)}),$a("add_Group")&&a>groups_status&&($a("groupick").className="ticksel",$a("add_Group").className="cursorselect",$a("add_Group").onclick=function(){gotoNextPage(groups_status)}),$a("change_Mx")&&a>mx_status&&($a("recordtick").className="ticksel",$a("change_Mx").className="cursorselect",$a("change_Mx").onclick=function(){gotoNextPage(mx_status)}),$a("control_Spam")&&a>control_spam_status&&($a("spamtick").className="ticksel",$a("control_Spam").className="cursorselect",$a("control_Spam").onclick=function(){gotoNextPage(control_spam_status)}),$a("migrate_user")&&a>migration_status&&($a("migratetick").className="ticksel",$a("migrate_user").className="cursorselect",$a("migrate_user").onclick=function(){gotoNextPage(migration_status)}),$a("mail_client")&&a>mail_client_status&&($a("mailclienttick").className="ticksel",$a("mail_client").className="cursorselect",$a("mail_client").onclick=function(){gotoNextPage(mail_client_status)}),$a("docs_setup")&&a>docs_configure_status&&($a("docssetuptick").className="ticksel",$a("docs_setup").className="cursorselect",$a("docs_setup").onclick=function(){gotoNextPage(docs_configure_status)}),$a("claim_referral")&&a>claim_referral_status&&($a("referraltick").className="ticksel",$a("claim_referral").className="cursorselect",$a("claim_referral").onclick=function(){gotoNextPage(claim_referral_status)}),$a("mobileAccess")&&a>mobileaccess_status&&(isBaihui||($a("mobiletick").className="ticksel",$a("mobileAccess").className="cursorselect",$a("mobile_Sync").style.display="none",$a("mobileAccess").onclick=function(){gotoNextPage(mobileaccess_status)})),hideElement("lodingDiv")},closeAllDiv=function(){$a("alreadyverifeddomain").style.display="none",$a("verify_domain").style.display="none",$a("add_Userspage").style.display="none",$a("createGrpHelp").style.display="none",$a("alreadymxpoint").style.display="none",$a("mxpoint_Steps").style.display="none",$a("migrateUser").style.display="none",$a("mobile_Sync").style.display="none",$a("admin_Acccount").style.display="none",$a("setupdone_Div").style.display="none",$a("previous_button").style.display="none",$a("next_button").style.display="none",$a("done_button1").style.display="none",$a("cname_button").style.display="none",$a("html_button").style.display="none",$a("txt_button").style.display="none",$a("done_button").style.display="none",$a("addUserButton").style.display="none",$a("groupPageButton").style.display="none",$a("migrationButton").style.display="none",$a("mailAccountButton").style.display="none",$a("docsSetupHelp").style.display="none",$a("docsSetupButton").style.display="none",$a("domain_connect_button").style.display="none",$a("spam_configure_help").style.display="none",$a("verifyMX_button").style.display="none",$a("spamDkimButton").style.display="none",$a("claimReferralDiv")&&($a("claimReferralDiv").style.display="none"),$a("mailClientHelp").style.display="none"},openDiv=function(a){if(closeAllDiv(),setupStatus<=a?$("#next_button").text($a("skipButtonText").value):$("#next_button").text($a("nextButtonText").value),$(window).scrollTop(0),a==verify_status)gotoVerifyPage();else if(a==mailaccount_status)$a("domaintick").className="ticksel",$a("admin_Acccount").style.display="";else if(a==adduser_status)selectMenu($a("add_Users")),$a("next_button").style.display="",$a("next_button").setAttribute("onClick","javascript:gotoNextPage(groups_status);"),$a("add_Userspage").style.display="",$a("addUserButton").style.display="";else if(a==groups_status)selectMenu($a("add_Group")),isOneZohoPlan?$a("previous_button").style.display="none":($a("previous_button").style.display="",$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(adduser_status);")),$a("next_button").style.display="",$a("next_button").setAttribute("onClick","javascript:gotoNextPage(mx_status);"),$a("createGrpHelp").style.display="",$a("groupPageButton").style.display="";else if(a==mx_status){selectMenu($a("change_Mx")),$a("next_button").style.display="",$("#next_button").text($a("nextButtonText").value),$a("next_button").setAttribute("onClick","javascript:gotoNextPage(control_spam_status);"),orgHasVerifiedDomains||($a("previous_button").style.display="",$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(groups_status);")),isDomainConnectAvailable?($a("domainConnectRecords").style.display="",$a("verifyMX_button").style.display="",$("#next_button").text($a("skipButtonText").value),orgHasVerifiedDomains?$a("next_button").setAttribute("onClick","javascript:gotoNextPage(done_status);"):$a("next_button").setAttribute("onClick","javascript:gotoNextPage(migration_status);")):"true"==mxRecord?($a("alreadymxpoint").style.display="",$a("change_Mx").style.cursor="pointer"):($a("verify_domain").style.display="none",$a("mxpoint_Steps").style.display="",$a("mxVideoframe")&&!$a("mxVideoframe").hasAttribute("src")&&($a("mxVideoframe").src=$a("mxHelpUrl").value),$a("verifyMX_button").style.display="");var b={contentDiv:"#mxhelpdiv",combo:"#choosemx_method"};setHlpDisp(domPrvHlp,domPrvHlp_lang,b),setScroll()}else if(a==control_spam_status)selectMenu($a("control_Spam")),$a("spam_configure_help").style.display="",$a("spfVideoframe")&&!$a("spfVideoframe").hasAttribute("src")&&($a("spfVideoframe").src=$a("spfHelpUrl").value),orgHasVerifiedDomains?($a("spamDkimButton").setAttribute("onClick","javascript:gotoDKIMPage(0);"),$a("done_button1").style.display=""):($a("next_button").style.display="",$a("next_button").setAttribute("onClick","javascript:gotoNextPage(migration_status);")),$a("previous_button").style.display="",$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(mx_status);"),$a("spamDkimButton").style.display="";else if(a==migration_status)selectMenu($a("migrate_user")),$a("previous_button").style.display="",isDomainConnectAvailable?$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(mx_status);"):$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(control_spam_status);"),$a("next_button").style.display="",isRestrictedFreeOrg?goToMailClientStep():$a("next_button").setAttribute("onClick","javascript:gotoNextPage(mail_client_status);"),$a("migrationButton").style.display="",$a("migrateUser").style.display="";else if(a==mail_client_status)selectMenu($a("mail_client")),$a("previous_button").style.display="",$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(migration_status);"),$("#next_button").text($a("nextButtonText").value),$a("next_button").style.display="",goToMailClientStep(),$a("mailClientHelp").style.display="";else if(a==docs_configure_status)selectMenu($a("docs_setup")),$a("previous_button").style.display="",isRestrictedFreeOrg?$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(migration_status);"):$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(mail_client_status);"),$("#next_button").text($a("nextButtonText").value),$a("next_button").style.display="",$a("claim_referral")?$a("next_button").setAttribute("onClick","javascript:gotoNextPage(claim_referral_status);"):$a("next_button").setAttribute("onClick","javascript:gotoNextPage(mobileaccess_status);"),$a("docsSetupHelp").style.display="",$a("docsSetupButton").style.display="";else if(a==claim_referral_status)selectMenu($a("claim_referral")),$a("previous_button").style.display="",$a("docs_setup")?$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(docs_configure_status);"):isRestrictedFreeOrg?$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(migration_status);"):$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(mail_client_status);"),$a("next_button").style.display="",$a("next_button").setAttribute("onClick","javascript:gotoNextPage(mobileaccess_status);"),$a("claimReferralDiv").style.display="";else if(a==mobileaccess_status)selectMenu($a("mobileAccess")),$a("previous_button").style.display="",$a("claim_referral")?$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(claim_referral_status);"):$a("docs_setup")?$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(docs_configure_status);"):isRestrictedFreeOrg?$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(migration_status);"):$a("previous_button").setAttribute("onClick","javascript:gotoNextPage(mail_client_status);"),$a("next_button").style.display="",$a("next_button").setAttribute("onClick","javascript:gotoNextPage(done_status);"),$a("mobile_Sync").style.display="";else if(a==done_status){selectMenu(null);var c="https://"+businessHost+"/biz/index.do",d=!1;$a("done_button").value=$a("proceedBizMail").value;try{var e=getCookie("dmnRetUrl");void 0!=e&&(0==e.indexOf("frmOtherService")?(d=!0,c=e.split("~")[1],$a("done_button").value=$a("proceedOneZoho").value):"fromWorkplace"===e?(c="https://"+workplaceHostName+"/biz/serviceList.do?initialSetup=true",$a("done_button").value=$a("proceedWorkplace").value):"frmCpanel"===e?(c="/cpanel/index.do",$a("done_button").value=$a("proceedCpanel").value):"fromDomain"===e&&(c="/cpanel/index.do?tabmode=domain",$a("done_button").value=$a("proceedCpanel").value))}catch(f){}$a("done_button").setAttribute("onClick","javascript:gotoBizControlPanel('"+c+"',"+d+");"),$a("done_button").style.display="",$a("setupdone_Div").style.display=""}bindMenuClick(a)},goToMailClientStep=function(){return isOneZohoPlan?($a("next_button").setAttribute("onClick","javascript:gotoNextPage(mobileaccess_status);"),mobileaccess_status):$a("docs_setup")?($a("next_button").setAttribute("onClick","javascript:gotoNextPage(docs_configure_status);"),docs_configure_status):$a("claim_referral")?($a("next_button").setAttribute("onClick","javascript:gotoNextPage(claim_referral_status);"),claim_referral_status):isBaihui?($a("next_button").setAttribute("onClick","javascript:gotoNextPage(done_status);"),done_status):($a("next_button").setAttribute("onClick","javascript:gotoNextPage(mobileaccess_status);"),mobileaccess_status)},setScroll=function(){var a=$(".navigationList").outerHeight()+$(".navigationList").offset().top,b=$("#cnameblk1").offset().top,c=$("#div_height").next().outerWidth(),d=$("body>div");d.css("height",$(window).height()+"px"),d.scroll(function(){var e=d[0].scrollTop;e>a?$("#div_height>ul").css({position:"fixed",width:"230px",top:"0px"}):$("#div_height>ul").css({position:"",width:"",top:""}),$("#cnameblk1").is(":visible")&&(b=b<1?$("#cnameblk1").offset().top:b,e>b?($("#cnameblk2").css("height",$("#cnameblk1").outerHeight()+"px").show(),$("#cnameblk1").css({position:"fixed",width:c+"px",top:"0px","background-color":"#fff","box-shadow":"0 6px 7px -6px rgba(0, 0, 0, 0.4)","margin-left":"-20px","padding-left":"20px"})):($("#cnameblk2").hide(),$("#cnameblk1").css({position:"",width:"",top:"","background-color":"","box-shadow":"","margin-left":"","padding-left":""})))}),$("#signoutDialog").css("height","auto"),$("#mask_div").css("height","100%"),$("#fromCpanelWarnDiv").css("height","auto"),$("#domainConnectFailedDiv").css("height","auto")};getOrgSetupStatusParam=function(){var a={};return a.mode="getOrgSetupStatus",a=addZOIDinReqUrl(a,"param")},updateOrgSetupStatusParam=function(a){var b={};return b.mode="updateOrgSetupStatus",b=addZOIDinReqUrl(b,"param"),b.status=a+"",b},addOrgSetupStatusParam=function(a){var b={};return b.mode="addOrgSetupStatus",b=addZOIDinReqUrl(b,"param"),b.status=a+"",b},gotoVerifyPage=function(){closeAllDiv(),isDomainVerified?(selectMenu($a("verifySetup")),$a("alreadyverifeddomain").style.display="",$a("domaintick").className="ticksel",$a("verify_domain").style.display="none",$("#next_button").text($a("nextButtonText").value),isMBExists?isMailHosted?mailHostDomainCallBack():mailHostDomain():($a("next_button").style.display="",isMailHosted?$a("next_button").onclick=function(){mailHostDomainCallBack()}:$a("next_button").onclick=function(){mailHostDomain()}),$a("verifySetup").style.cursor="default"):($a("verify_domain").style.display="",$a("alreadyverifeddomain").style.display="none",$("#div_height ul li.selec").removeClass("selec"),$("#div_height ul li#verifySetup").addClass("selec"),$a("verify_domain").style.display="",$a("alreadyverifeddomain").style.display="none",setScroll(),$a("dmnVeriVideoframe")&&!$a("dmnVeriVideoframe").hasAttribute("src")&&($a("dmnVeriVideoframe").src=$a("dmnVeriHelpUrl").value)),hideElement("lodingDiv")};var setHlpDisp=function(a,b,c){setHlpDisp.lang=b,setHlpDisp.mlst=a,setHlpDisp.hlpdv=$(c.contentDiv),setHlpDisp.mxhlp=!1,setHlpDisp.gnrl=0;var d=$(c.combo),e=document.createDocumentFragment();"#choosemx_method"==c.combo&&(setHlpDisp.mxhlp=!0,hideElement("chosedomain.warnmsg"));for(var f in a){"general"==a[f].type&&(setHlpDisp.gnrl=f);var g=document.createElement("option");$(g).text(a[f].text),g.className="oAuthSelectOption",g.value=f,e.appendChild(g)}d.html(""),d[0].appendChild(e),d.unbind("change").change(function(){hideElement("chosedomain.warnmsg"),setHlpDisp.getContent($(this).val())})};setHlpDisp.getContent=function(a){var b=setHlpDisp.mlst[a],c=setHlpDisp.hlpdv,d=setHlpDisp.mxhlp;d||($a("all_tab").style.display="",$a("domain_connect_method_tab")?changeMethod("4"):changeMethod("3"));var e=$("#cmsHelpDiv"+(d?"mx":"")),f=b.type+(d?"-mx":"")+".html";if(setHlpDisp.gnrl==a||"choose"==b.type)c.show(),e.hide();else{e.show(),c.hide(),displayInnerEle("cmsHelpDiv"+(d?"mx":""),"iframe","none");var g="cmshelp"+(d?"mx":"")+b.type,h=$("#"+g);h.length>0?(h.show(),setIFrameHeight(g)):(h=$1("iframe"),h.id=g,h.src=bizHelpLink+"/adminconsole/print/"+f,h.width="100%",h.height="1000px",h.frameBorder="0",h.setAttribute("onLoad",'setIFrameHeight("'+g+'");'),e.append(h))}},setIFrameHeight=function(a){$a(a).height=$a(a).contentWindow.document.body.offsetHeight+100+"px"},displayInnerEle=function(a,b,c){$a(a).style.display="";for(var d=$a(a).getElementsByTagName(b),e=0;e<d.length;e++)d[e].style.display=c},editRename=function(){$("#saveRename").css("display","inline-block"),showElement("renameText"),hideElement("editRename"),hideElement("domainRename"),$a("renameText").value=mail_domain,$("#renameText").focus()},cancelRename=function(){hideElement("saveRename"),showElement("editRename"),showElement("domainRename"),hideElement("renameText")},saveRename=function(){var a=$.trim($a("renameText").value);if(0==a.indexOf("www.")&&(a=a.substring(a.indexOf("www.")+4)),mail_domain.trim()===a)return void cancelRename();if(null===a||""===a)return void showErrMsg($a("notempty").value);if(a.match("'")||a.match('"'))return void showErrMsg($a("cannotvalidatedomnam").value);if(!a.match(REGEX.DOMAIN))return void showErrMsg($a("invaliddomspe").value);var b={};b.mode="renameDomain",b.newDomainName=a,b.oldDomainName=mail_domain,b=addZOIDinReqUrl(b,"param"),cpAjax(conPath+"/domainAct.do",b,function(b){"true"===b.st&&(showElement("confirmdomainedit"),$a("savedomainrename").setAttribute("onclick","javascript:closeconfirmdomainedit('"+a+"');"))})},changeMethod=function(a){hideElement("next_button"),hideElement("previous_button"),$a("cname_method_tab").className="zatabunsel",$a("html_method_tab").className="zatabunsel",$a("txt_method_tab").className="zatabunsel",$a("domain_connect_method_tab")&&($a("domain_connect_method_tab").className="zatabunsel"),hideElement("cname_method"),hideElement("html_method"),hideElement("txt_method"),hideElement("domain_connect_method"),hideElement("cname_button"),hideElement("html_button"),hideElement("txt_button"),hideElement("txt_button"),hideElement("domain_connect_button"),$("#cnameblk1,#cnameblk2").hide(),"1"==a?($a("cname_method_tab").className="zatabsel",showElement("cname_button"),showElement("cname_method"),$("#cnameblk1").show()):"2"==a?($a("html_method_tab").className="zatabsel",showElement("html_method"),showElement("html_button")):"3"==a?($a("txt_method_tab").className="zatabsel",showElement("txt_method"),showElement("txt_button"),"godaddy"==setHlpDisp.mlst[$a("choose_method").value].type?$a("zoomimg").style.display="block":$a("zoomimg").style.display="none"):"4"==a&&($a("domain_connect_method_tab")&&($a("domain_connect_method_tab").className="zatabsel"),showElement("domain_connect_method"),showElement("domain_connect_button"))};var timer,openGodaddyDomainConnectLogin=function(a){var b="fullscreen=no,location=yes,menubar=no,titlebar=yes,directories=no,status=yes,toolbar=no,resizable=no,width=780,height=785",c=window.open(a,"gdconnect",b);timer=setInterval(function(){c.closed&&clearIntervalAndHideMask()},1e3),showMaskDiv()},clearIntervalAndHideMask=function(){clearInterval(timer),hideMaskDiv()};validateCNAME=function(){showMaskDiv(),checkCNAMERecord()},_validateCNAME=function(){$a("verify_domain").style.display="";var a={};a.mode="vCNAME",a.domainName=mail_domain,a.dontValidate=!0,cpAjax(conPath+"/domainAct.do",a,function(a){callbackCNAME(a),hideElement("lodingDiv")})},showCNAMEFailure=function(){hideElement("failed.trycname"),showElement("failed.trytxt"),showElement("failed.tryhtml"),hideElement("htmlfailhlp"),hideElement("txtfailhlp"),showElement("cnamefailhlp"),hideElement("cnamefailrecord"),hideElement("txtfailrecord"),hideElement("txtfailnorecord"),hideElement("cnamefailnorecord"),hideElement("cnameverifyPopdiv"),hideElement("txtverifyPopdiv"),hideElement("recordlist"),hideElement("recordlistss"),$(".hilight").text($a("cnamevalfail").value),$("#valfailed").css("height","auto"),$("#recordlist td:nth-child(1)").css("width","30%"),displayDiv($a("valfailed")),$a("admin_Acccount").style.display="none"},callbackCNAME=function(a){var b=a[1].st;return $a("maskDiv").style.height=document.body.clientHeight+20+"px",hideElement("maskDiv"),hideElement("cnameverifyPopdiv"),isValidResult(a,!0)&&1==b?void mailHostDomain():(showErrMsg(b,!0),!1)},trycnameMethod=function(){hideElement("maskDiv"),$a("verify_domain").style.display="",hideElement("valfailed"),changeMethod("1")},validateTXT=function(){checkTXTRecord(),showMaskDiv()},_validateTXT=function(){showElement("lodingDiv");var a={};a.mode="vTXT",a.domainName=mail_domain,a.dontValidate=!0,cpAjax(conPath+"/domainAct.do",a,function(a){callbackTXT(a),hideElement("lodingDiv")})},showTXTFailure=function(){showElement("failed.trycname"),hideElement("failed.trytxt"),showElement("failed.tryhtml"),hideElement("htmlfailhlp"),hideElement("cnamefailhlp"),showElement("txtfailhlp"),hideElement("cnamefailrecord"),hideElement("txtfailrecord"),hideElement("txtfailnorecord"),hideElement("cnamefailnorecord"),hideElement("txtverifyPopdiv"),hideElement("cnameverifyPopdiv"),hideElement("recordlist"),hideElement("recordlistss"),$(".hilight").text($a("txtvalfail").value),$("#valfailed").css("height","auto"),$("#recordlist td:nth-child(1)").css("width","13%"),displayDiv($a("valfailed")),$a("admin_Acccount").style.display="none"},callbackTXT=function(a){var b=a[1].st;return $a("maskDiv").style.height=document.body.clientHeight+20+"px",hideElement("maskDiv"),hideElement("txtverifyPopdiv"),isValidResult(a,!0)&&1==b?void mailHostDomain():(showErrMsg(b,!0),!1)},trytxtMethod=function(){hideElement("maskDiv"),$a("verify_domain").style.display="",hideElement("valfailed"),changeMethod("3")},validateHTML=function(){$a("verify_domain").style.display="",showElement("maskDiv"),$a("maskDiv").style.height=document.body.clientHeight+20+"px";var a={};a.mode="vHTML",a.domainName=mail_domain,a.dontValidate=!0,cpAjax(conPath+"/domainAct.do",a,function(a){callbackHTML(a),hideElement("lodingDiv")})},callbackHTML=function(a){var b=a[1].st;return $a("maskDiv").style.height=document.body.clientHeight+20+"px",hideElement("maskDiv"),isValidResult(a,!0)&&1==b?void mailHostDomain():(showElement("failed.trycname"),showElement("failed.trytxt"),hideElement("failed.tryhtml"),hideElement("cnamefailhlp"),hideElement("txtfailhlp"),showElement("htmlfailhlp"),hideElement("cnamefailnorecord"),hideElement("txtfailnorecord"),hideElement("txtfailrecord"),hideElement("cnamefailrecord"),hideElement("cnameverifyPopdiv"),hideElement("txtverifyPopdiv"),hideElement("recordlist"),$("#recordlistss").text(b),showElement("recordlistss"),$(".hilight").text($a("commonverfail").value),$("#valfailed").css("height","auto"),displayDiv($a("valfailed")),$a("admin_Acccount").style.display="none",!1)},downloadHtml=function(){document.downloadhtml.domainName.value=mail_domain,document.downloadhtml.zmrcsr.value=csrfToken,document.downloadhtml.submit()},tryhtmlMethod=function(){hideElement("maskDiv"),$a("verify_domain").style.display="",hideElement("valfailed"),changeMethod("2")},closeValdiv=function(){hideElement("maskDiv"),hideElement("valfailed")},closeProceedDiv=function(){hideElement("maskDiv"),$a("cnameverifyPopdiv").style.display="none",$a("txtverifyPopdiv").style.display="none",$a("confirmmxdiv").style.display="none"},mailHostDomain=function(){if(0==isMailHosted){var a={};a.mode="verifydom",a.dname=mail_domain,cpAjax(conPath+"/domainAct.do",a,function(a){isMailHosted=!0,mailHostDomainCallBack()})}else mailHostDomainCallBack()},mailHostDomainCallBack=function(){isMBExists?setupStatus<adduser_status?gotoNextPage(adduser_status):orgHasVerifiedDomains?gotoNextPage(mx_status):gotoNextPage(setupStatus):gotoMailBoxTab()},gotoMailBoxTab=function(){closeAllDiv(),setupStatus=mailaccount_status,pushDataToPageSense(setupStatus),cpAjax(conPath+"/orgAct.do",updateOrgSetupStatusParam(setupStatus),function(a){$a("domaintick").className="ticksel"}),isDomainVerified=!0,$a("admin_Acccount").style.display="",$(window).scrollTop(0),hideElement("lodingDiv")},createAdminAcc=function(){var a=$a("adminEmail").value.trim();if(""==a)return showElement("adminEmail.warnmsg"),!1;if(!a.match(REGEX.USERNAME))return showElement("adminEmail.warnmsg1"),!1;showElement("lodingDiv");var b=a+"@"+$a("adminDomain").value.trim();if(isMailBoxExists){var c={};c.mode="a",c.e=b,c.cud="no",c.z=zid,c=addZOIDinReqUrl(c,"param"),cpAjax("/cpanel/userDetails.do",c,function(a){gotoNextPage(adduser_status),hideElement("lodingDiv")})}else{var c={};c.mode="createMailAccount",c.e=b,c.z=zid,c=addZOIDinReqUrl(c,"param"),cpAjax("/cpanel/userDetails.do",c,function(a){gotoNextPage(adduser_status),hideElement("lodingDiv")})}},gotoNextPage=function(a){if(showElement("lodingDiv"),orgHasVerifiedDomains&&(a==adduser_status?a=mx_status:a>control_spam_status&&(a=control_spam_status)),isOneZohoPlan&&a==adduser_status&&(a=groups_status),setupStatus<a){setupStatus=a;var b;b=0==setupStatus?addOrgSetupStatusParam(setupStatus):updateOrgSetupStatusParam(setupStatus),pushDataToPageSense(setupStatus),cpAjax(conPath+"/orgAct.do",b,function(a){openDiv(setupStatus)})}else pushDataToPageSense(setupStatus),openDiv(a)},claimBonusUsers=function(a){var b=a.trim();return""==b?(showErrMsg(specifyrfrlcode),!1):b.match(REGEX.ALPHANUMERIC)?(param={},param.mode="verifyInvite",param.invcode=b,param=addZOIDinReqUrl(param,"param"),showElement("lodingDiv"),void cpAjax(conPath+"/orgAct.do",param,function(a){isBaihui?gotosetupDonefn():gotoNextPage(mobileaccess_status),hideElement("lodingDiv")})):(showErrMsg(rfrlcodeInvalid),!1)};var entryexist=function(a,b,c){var d="";if("txt"==c){$("#recordlist").find("tr:gt(0)").remove();for(var e=[],f=0;f<a.length;f++){if(d=a[f].entry,a[f].entry.lastIndexOf(".")+1==a[f].entry.length&&(d=a[f].entry.substring(0,a[f].entry.lastIndexOf("."))),d==b)return!0;0==f?e.push("<tr><td valign='top' rowspan='"+a.length+"' style='border-top: 1px solid #DDD; border-left: 1px solid #DDD;text-align:center;vertical-align:middle;'><span class='normtext'>Blank or @</span></td>"):e.push("<tr>"),e.push("<td valign='top' style='border-top: 1px solid #DDD;'><span class='normtext'>"+d+"</span></td></tr>")}return $("#recordlist").append(e.join("")),!1}if("mx"==c){$("#mxrecordtable").find("tr:gt(0)").remove();var e=[];null!=a.data&&e.push("<tr><td valign='top' colspan='3' style='border-top: 1px solid #DDD; border-left: 1px solid #DDD;text-align:center;vertical-align:middle;'><span class='normtext'>"+a.data+"</span></td></tr>");for(var g,f=0;f<a.length;f++){d=a[f].target,g=!1,d.endsWith(".")&&(d=d.substring(0,d.lastIndexOf("."))),e.push("<tr><td valign='top' style='border-top: 1px solid #DDD; border-left: 1px solid #DDD;'><span class='normtext'><b>"+d+"</b></span></td>"),e.push("<td valign='top' style='border-top: 1px solid #DDD;'><span class='normtext'><b>"+a[f].priority+" </b></span></td>"),e.push("<td valign='top' style='border-top: 1px solid #DDD;'>");for(var h=0;h<MXVal.split(":").length-1;h++){var i=MXVal.split(":")[h];if(i.endsWith(".")&&(i=i.substring(0,i.lastIndexOf("."))),d==i){g=!0;break}}e.push("<span class='"+(g?"ticksel":"wrongsel")+"' style='width:50%'><b></b></span></td></tr>")}return $("#mxrecordtable").append(e.join("")),a.length>0}if("cname"==c){if($("#recordlist").find("tr:gt(0)").remove(),d=a.target,a.target.lastIndexOf(".")+1==a.target.length&&(d=a.target.substring(0,a.target.lastIndexOf("."))),d==b)return!0;var e=[];return e.push("<tr><td valign='top' style='border-top: 1px solid #DDD; border-left: 1px solid #DDD;text-align:center;vertical-align:middle;'><span class='normtext'>"+cvcode+"</span>"),e.push("<td valign='top' style='border-top: 1px solid #DDD;'><span class='normtext'>"+d+"</span></td></tr>"),$("#recordlist").append(e.join("")),!1}};checkTXTRecord=function(){param={},param.mode="domainInfo",param.rectype="tRec",param.domainName=mail_domain,$a("txt_button").disabled=!0,$("#recordlist").find("tr:gt(0)").remove(),cpAjax(conPath+"/tools.do",param,function(a){""!=a&&0!=a.txtRecord.length&&entryexist(a.txtRecord,txtValue,"txt")?showElement("txtverifyPopdiv"):(showTXTFailure(),1==$("#recordlist tr").length?showElement("txtfailnorecord"):(showElement("txtfailrecord"),showElement("recordlist"))),$a("txt_button").disabled=!1})},checkCNAMERecord=function(){param={},param.mode="domainInfo",param.rectype="cRec",param.domainName=cvcode+"."+mail_domain,$a("cname_button").disabled=!0,$("#recordlist").find("tr:gt(0)").remove(),cpAjax(conPath+"/tools.do",param,function(a){""!=a&&0!=a.cnameRecord.length&&entryexist(a.cnameRecord[0],cnameValue,"cname")?showElement("cnameverifyPopdiv"):(showCNAMEFailure(),1==$("#recordlist tr").length?showElement("cnamefailnorecord"):(showElement("cnamefailrecord"),showElement("recordlist"))),$a("cname_button").disabled=!1})},verifyMXRecord=function(){showElement("lodingDiv"),param={},param.mode="checkmx",param.domainName=mail_domain,cpAjax(conPath+"/tools.do",param,function(a){""!=a&&0!=a.length&&(entryexist(a,null,"mx"),$a("confirmmxdiv").style.display=""),hideElement("lodingDiv")})};var pointMXUsingDomainConnect=function(){showElement("lodingDiv"),param={},param.mode="pointAllRecordsUsingDomainConnect",param.domainName=mail_domain,cpAjax(conPath+"/domainAct.do",param,function(a){$a("domainConnectRecords").style.display="none",a&&"true"==a.st?$a("domainConnectRecordsSuccess").style.display="":$a("domainConnectRecordsFailure").style.display="",hideElement("lodingDiv")})},domainConnectVerificationSuccess=function(){location.reload()},domainConnectVerificationFailure=function(){showElement("domainConnectFailedDiv"),clearIntervalAndHideMask()};gotoZmail=function(){
addZOIDinReqUrl("/biz/index.do","pageReload")},gotoControlPanel=function(){addZOIDinReqUrl(conPath+"/index.do","pageReload")},gotoBizControlPanel=function(a,b){deleteCookie("dmnRetUrl"),b?window.location.replace(a):addZOIDinReqUrl(a,"pageReload")},gotoCPAddUser=function(){showElement("lodingDiv"),cpAjax(conPath+"/orgAct.do",updateOrgSetupStatusParam(groups_status),function(a){addZOIDinReqUrl(conPath+"/index.do?tabmode=useradd"+leftOption+"&dname="+mail_domain,"pageReload"),hideElement("lodingDiv")})},gotoGroupPage=function(){showElement("lodingDiv"),cpAjax(conPath+"/orgAct.do",updateOrgSetupStatusParam(mx_status),function(a){addZOIDinReqUrl(conPath+"/index.do?tabmode=addgroup"+leftOption+"&dname="+mail_domain,"pageReload"),hideElement("lodingDiv")})},gotoMigrationPage=function(){showElement("lodingDiv");var a=mail_client_status;isRestrictedFreeOrg&&(a=goToMailClientStep()),cpAjax(conPath+"/orgAct.do",updateOrgSetupStatusParam(a),function(a){addZOIDinReqUrl(conPath+"/index.do?tabmode=migration"+leftOption+"&dname="+mail_domain,"pageReload"),hideElement("lodingDiv")})},gotoDocsSetupPage=function(){var a=mobileaccess_status;$a("claim_referral")&&(a=claim_referral_status),showElement("lodingDiv"),cpAjax(conPath+"/orgAct.do",updateOrgSetupStatusParam(a),function(a){addZOIDinReqUrl(conPath+"/index.do?tabmode=privileges"+leftOption+"&dname="+mail_domain,"pageReload"),hideElement("lodingDiv")})},gotoMailAccountsPage=function(){showElement("lodingDiv"),cpAjax(conPath+"/orgAct.do",updateOrgSetupStatusParam(done_status),function(a){addZOIDinReqUrl(conPath+"/index.do?tabmode=mailAccountsmode"+leftOption+"&dname="+mail_domain,"pageReload"),hideElement("lodingDiv")})},gotoDKIMPage=function(a){showElement("lodingDiv"),a?cpAjax(conPath+"/orgAct.do",updateOrgSetupStatusParam(migration_status),function(a){addZOIDinReqUrl(conPath+"/index.do?tabmode=dkimselector"+leftOption+"&dname="+mail_domain,"pageReload")}):addZOIDinReqUrl(conPath+"/index.do#dkimselector","pageReload"),hideElement("lodingDiv")};var pushDataToPageSense=function(a){if(isPageSenseEnabled){var b=pageSenseString+a;window.pagesense=window.pagesense||[],window.pagesense.push(["trackEvent",b])}},showChatWidget=function(){"undefined"!=typeof isLCEnabledUser&&isLCEnabledUser&&($zoho.salesiq.floatwindow.visible("show"),$zoho.salesiq.visitor.email(primaryEmail))};$(document).ready(function(){setHlpDisp(domPrvHlp,domPrvHlp_lang,verifyElmObj),setScroll(),$(window).resize(function(){setScroll()}),$a("choose_method").value=0,initDomainSetup()});