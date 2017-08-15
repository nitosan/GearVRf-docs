!function(i,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():e()(i.lunr)}(this,function(){return function(i){if(void 0===i)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===i.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");i.fi=function(){this.pipeline.reset(),this.pipeline.add(i.fi.trimmer,i.fi.stopWordFilter,i.fi.stemmer),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add(i.fi.stemmer))},i.fi.wordCharacters="A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ",i.fi.trimmer=i.trimmerSupport.generateTrimmer(i.fi.wordCharacters),i.Pipeline.registerFunction(i.fi.trimmer,"trimmer-fi"),i.fi.stemmer=function(){var e=i.stemmerSupport.Among,r=i.stemmerSupport.SnowballProgram,n=new function(){function i(){f=A.limit,d=f,n()||(f=A.cursor,n()||(d=A.cursor))}function n(){for(var i;;){if(i=A.cursor,A.in_grouping(W,97,246))break;if(A.cursor=i,i>=A.limit)return!0;A.cursor++}for(A.cursor=i;!A.out_grouping(W,97,246);){if(A.cursor>=A.limit)return!0;A.cursor++}return!1}function t(){return d<=A.cursor}function s(){var i,e;if(A.cursor>=f)if(e=A.limit_backward,A.limit_backward=f,A.ket=A.cursor,i=A.find_among_b(h,10)){switch(A.bra=A.cursor,A.limit_backward=e,i){case 1:if(!A.in_grouping_b(x,97,246))return;break;case 2:if(!t())return}A.slice_del()}else A.limit_backward=e}function o(){var i,e,r;if(A.cursor>=f)if(e=A.limit_backward,A.limit_backward=f,A.ket=A.cursor,i=A.find_among_b(v,9))switch(A.bra=A.cursor,A.limit_backward=e,i){case 1:r=A.limit-A.cursor,A.eq_s_b(1,"k")||(A.cursor=A.limit-r,A.slice_del());break;case 2:A.slice_del(),A.ket=A.cursor,A.eq_s_b(3,"kse")&&(A.bra=A.cursor,A.slice_from("ksi"));break;case 3:A.slice_del();break;case 4:A.find_among_b(p,6)&&A.slice_del();break;case 5:A.find_among_b(g,6)&&A.slice_del();break;case 6:A.find_among_b(j,2)&&A.slice_del()}else A.limit_backward=e}function l(){return A.find_among_b(q,7)}function a(){return A.eq_s_b(1,"i")&&A.in_grouping_b(L,97,246)}function u(){var i,e,r;if(A.cursor>=f)if(e=A.limit_backward,A.limit_backward=f,A.ket=A.cursor,i=A.find_among_b(C,30)){switch(A.bra=A.cursor,A.limit_backward=e,i){case 1:if(!A.eq_s_b(1,"a"))return;break;case 2:case 9:if(!A.eq_s_b(1,"e"))return;break;case 3:if(!A.eq_s_b(1,"i"))return;break;case 4:if(!A.eq_s_b(1,"o"))return;break;case 5:if(!A.eq_s_b(1,"ä"))return;break;case 6:if(!A.eq_s_b(1,"ö"))return;break;case 7:if(r=A.limit-A.cursor,!l()&&(A.cursor=A.limit-r,!A.eq_s_b(2,"ie"))){A.cursor=A.limit-r;break}if(A.cursor=A.limit-r,A.cursor<=A.limit_backward){A.cursor=A.limit-r;break}A.cursor--,A.bra=A.cursor;break;case 8:if(!A.in_grouping_b(W,97,246)||!A.out_grouping_b(W,97,246))return}A.slice_del(),k=!0}else A.limit_backward=e}function c(){var i,e,r;if(A.cursor>=d)if(e=A.limit_backward,A.limit_backward=d,A.ket=A.cursor,i=A.find_among_b(P,14)){if(A.bra=A.cursor,A.limit_backward=e,1==i){if(r=A.limit-A.cursor,A.eq_s_b(2,"po"))return;A.cursor=A.limit-r}A.slice_del()}else A.limit_backward=e}function m(){var i;A.cursor>=f&&(i=A.limit_backward,A.limit_backward=f,A.ket=A.cursor,A.find_among_b(F,2)?(A.bra=A.cursor,A.limit_backward=i,A.slice_del()):A.limit_backward=i)}function w(){var i,e,r,n,t,s;if(A.cursor>=f){if(e=A.limit_backward,A.limit_backward=f,A.ket=A.cursor,A.eq_s_b(1,"t")&&(A.bra=A.cursor,r=A.limit-A.cursor,A.in_grouping_b(W,97,246)&&(A.cursor=A.limit-r,A.slice_del(),A.limit_backward=e,n=A.limit-A.cursor,A.cursor>=d&&(A.cursor=d,t=A.limit_backward,A.limit_backward=A.cursor,A.cursor=A.limit-n,A.ket=A.cursor,i=A.find_among_b(S,2))))){if(A.bra=A.cursor,A.limit_backward=t,1==i){if(s=A.limit-A.cursor,A.eq_s_b(2,"po"))return;A.cursor=A.limit-s}return void A.slice_del()}A.limit_backward=e}}function _(){var i,e,r,n;if(A.cursor>=f){for(i=A.limit_backward,A.limit_backward=f,e=A.limit-A.cursor,l()&&(A.cursor=A.limit-e,A.ket=A.cursor,A.cursor>A.limit_backward&&(A.cursor--,A.bra=A.cursor,A.slice_del())),A.cursor=A.limit-e,A.ket=A.cursor,A.in_grouping_b(y,97,228)&&(A.bra=A.cursor,A.out_grouping_b(W,97,246)&&A.slice_del()),A.cursor=A.limit-e,A.ket=A.cursor,A.eq_s_b(1,"j")&&(A.bra=A.cursor,r=A.limit-A.cursor,A.eq_s_b(1,"o")?A.slice_del():(A.cursor=A.limit-r,A.eq_s_b(1,"u")&&A.slice_del())),A.cursor=A.limit-e,A.ket=A.cursor,A.eq_s_b(1,"o")&&(A.bra=A.cursor,A.eq_s_b(1,"j")&&A.slice_del()),A.cursor=A.limit-e,A.limit_backward=i;;){if(n=A.limit-A.cursor,A.out_grouping_b(W,97,246)){A.cursor=A.limit-n;break}if(A.cursor=A.limit-n,A.cursor<=A.limit_backward)return;A.cursor--}A.ket=A.cursor,A.cursor>A.limit_backward&&(A.cursor--,A.bra=A.cursor,b=A.slice_to(),A.eq_v_b(b)&&A.slice_del())}}var k,b,d,f,h=[new e("pa",-1,1),new e("sti",-1,2),new e("kaan",-1,1),new e("han",-1,1),new e("kin",-1,1),new e("hän",-1,1),new e("kään",-1,1),new e("ko",-1,1),new e("pä",-1,1),new e("kö",-1,1)],p=[new e("lla",-1,-1),new e("na",-1,-1),new e("ssa",-1,-1),new e("ta",-1,-1),new e("lta",3,-1),new e("sta",3,-1)],g=[new e("llä",-1,-1),new e("nä",-1,-1),new e("ssä",-1,-1),new e("tä",-1,-1),new e("ltä",3,-1),new e("stä",3,-1)],j=[new e("lle",-1,-1),new e("ine",-1,-1)],v=[new e("nsa",-1,3),new e("mme",-1,3),new e("nne",-1,3),new e("ni",-1,2),new e("si",-1,1),new e("an",-1,4),new e("en",-1,6),new e("än",-1,5),new e("nsä",-1,3)],q=[new e("aa",-1,-1),new e("ee",-1,-1),new e("ii",-1,-1),new e("oo",-1,-1),new e("uu",-1,-1),new e("ää",-1,-1),new e("öö",-1,-1)],C=[new e("a",-1,8),new e("lla",0,-1),new e("na",0,-1),new e("ssa",0,-1),new e("ta",0,-1),new e("lta",4,-1),new e("sta",4,-1),new e("tta",4,9),new e("lle",-1,-1),new e("ine",-1,-1),new e("ksi",-1,-1),new e("n",-1,7),new e("han",11,1),new e("den",11,-1,a),new e("seen",11,-1,l),new e("hen",11,2),new e("tten",11,-1,a),new e("hin",11,3),new e("siin",11,-1,a),new e("hon",11,4),new e("hän",11,5),new e("hön",11,6),new e("ä",-1,8),new e("llä",22,-1),new e("nä",22,-1),new e("ssä",22,-1),new e("tä",22,-1),new e("ltä",26,-1),new e("stä",26,-1),new e("ttä",26,9)],P=[new e("eja",-1,-1),new e("mma",-1,1),new e("imma",1,-1),new e("mpa",-1,1),new e("impa",3,-1),new e("mmi",-1,1),new e("immi",5,-1),new e("mpi",-1,1),new e("impi",7,-1),new e("ejä",-1,-1),new e("mmä",-1,1),new e("immä",10,-1),new e("mpä",-1,1),new e("impä",12,-1)],F=[new e("i",-1,-1),new e("j",-1,-1)],S=[new e("mma",-1,1),new e("imma",0,-1)],y=[17,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],W=[17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,8,0,32],L=[17,65,16,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,32],x=[17,97,24,1,0,0,0,0,0,0,0,0,0,0,0,0,8,0,32],A=new r;this.setCurrent=function(i){A.setCurrent(i)},this.getCurrent=function(){return A.getCurrent()},this.stem=function(){var e=A.cursor;return i(),k=!1,A.limit_backward=e,A.cursor=A.limit,s(),A.cursor=A.limit,o(),A.cursor=A.limit,u(),A.cursor=A.limit,c(),A.cursor=A.limit,k?(m(),A.cursor=A.limit):(A.cursor=A.limit,w(),A.cursor=A.limit),_(),!0}};return function(i){return"function"==typeof i.update?i.update(function(i){return n.setCurrent(i),n.stem(),n.getCurrent()}):(n.setCurrent(i),n.stem(),n.getCurrent())}}(),i.Pipeline.registerFunction(i.fi.stemmer,"stemmer-fi"),i.fi.stopWordFilter=i.generateStopWordFilter("ei eivät emme en et ette että he heidän heidät heihin heille heillä heiltä heissä heistä heitä hän häneen hänelle hänellä häneltä hänen hänessä hänestä hänet häntä itse ja johon joiden joihin joiksi joilla joille joilta joina joissa joista joita joka joksi jolla jolle jolta jona jonka jos jossa josta jota jotka kanssa keiden keihin keiksi keille keillä keiltä keinä keissä keistä keitä keneen keneksi kenelle kenellä keneltä kenen kenenä kenessä kenestä kenet ketkä ketkä ketä koska kuin kuka kun me meidän meidät meihin meille meillä meiltä meissä meistä meitä mihin miksi mikä mille millä miltä minkä minkä minua minulla minulle minulta minun minussa minusta minut minuun minä minä missä mistä mitkä mitä mukaan mutta ne niiden niihin niiksi niille niillä niiltä niin niin niinä niissä niistä niitä noiden noihin noiksi noilla noille noilta noin noina noissa noista noita nuo nyt näiden näihin näiksi näille näillä näiltä näinä näissä näistä näitä nämä ole olemme olen olet olette oli olimme olin olisi olisimme olisin olisit olisitte olisivat olit olitte olivat olla olleet ollut on ovat poikki se sekä sen siihen siinä siitä siksi sille sillä sillä siltä sinua sinulla sinulle sinulta sinun sinussa sinusta sinut sinuun sinä sinä sitä tai te teidän teidät teihin teille teillä teiltä teissä teistä teitä tuo tuohon tuoksi tuolla tuolle tuolta tuon tuona tuossa tuosta tuota tähän täksi tälle tällä tältä tämä tämän tänä tässä tästä tätä vaan vai vaikka yli".split(" ")),i.Pipeline.registerFunction(i.fi.stopWordFilter,"stopWordFilter-fi")}});