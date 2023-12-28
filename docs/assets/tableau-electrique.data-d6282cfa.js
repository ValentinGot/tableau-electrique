import{d,o as i,c as r,b as g,u as L,F as _,r as u,t as E,e as n,n as A,_ as S,a as I}from"./index-f43e0953.js";const R="/tableau-electrique/assets/chaudiere-049ce884.png",v="/tableau-electrique/assets/chauffe-eau-1326a73a.png",C="/tableau-electrique/assets/eclairage-ccfe5589.png",h="/tableau-electrique/assets/evier-40ea8219.png",b="/tableau-electrique/assets/four-4b052400.png",N="/tableau-electrique/assets/garage-15576226.png",U="/tableau-electrique/assets/lave-vaisselle-580816d4.png",f="/tableau-electrique/assets/plaque-de-cuisson-4883890e.png",y="/tableau-electrique/assets/prise-b0c4501d.png",m="/tableau-electrique/assets/seche-linge-147ff13f.png",B="/tableau-electrique/assets/vmc-ea9f41fc.png",O="/tableau-electrique/assets/volet-roulant-d81c9fe6.png",V=["src","alt","title"],D={key:0,class:"pieces"},q={key:1},G={key:2},H=d({__name:"LigneDisjoncteur",props:{type:{},disjoncteur:{}},setup(s){const l=s,p=new URL(Object.assign({"/src/assets/chaudiere.png":R,"/src/assets/chauffe-eau.png":v,"/src/assets/eclairage.png":C,"/src/assets/evier.png":h,"/src/assets/four.png":b,"/src/assets/garage.png":N,"/src/assets/lave-vaisselle.png":U,"/src/assets/plaque-de-cuisson.png":f,"/src/assets/prise.png":y,"/src/assets/seche-linge.png":m,"/src/assets/vmc.png":B,"/src/assets/volet-roulant.png":O})[`/src/assets/${l.disjoncteur.type}.png`],self.location).href;return(a,k)=>(i(),r("div",{class:A(["disjoncteur",a.type])},[g("img",{src:L(p),alt:a.disjoncteur.type,title:a.disjoncteur.type},null,8,V),a.type==="view"?(i(),r("div",D,[(i(!0),r(_,null,u(a.disjoncteur.pieces,(o,c)=>(i(),r("span",{class:"piece",key:c},E(o),1))),128))])):n("",!0),a.type==="view"&&a.disjoncteur.detail?(i(),r("ul",q,[(i(!0),r(_,null,u(a.disjoncteur.detail,(o,c)=>(i(),r("li",{key:c},E(o),1))),128))])):n("",!0),a.type==="print"?(i(),r("p",G,E(a.disjoncteur.shortDescription),1)):n("",!0)],2))}});const T=S(H,[["__scopeId","data-v-c93b7d10"]]),M={key:0,class:"differentiel"},F=d({__name:"Ligne",props:{type:{},ligne:{}},setup(s){return(l,p)=>(i(),r("div",{class:A(["ligne",l.type])},[l.type==="print"?(i(),r("div",M,"Interrupteur différentiel")):n("",!0),(i(!0),r(_,null,u(l.ligne.disjoncteurs,a=>(i(),I(T,{type:l.type,disjoncteur:a,key:a.id},null,8,["type","disjoncteur"]))),128))],2))}});const P=S(F,[["__scopeId","data-v-c229d1db"]]);var t=(s=>(s.PRISE="prise",s.ECLAIRAGE="eclairage",s.FOUR="four",s.EVIER="evier",s.VOLET_ROULANT="volet-roulant",s.CHAUFFE_EAU="chauffe-eau",s.CHAUDIERE="chaudiere",s.PLAQUE_DE_CUISSON="plaque-de-cuisson",s.LAVE_VAISSELLE="lave-vaisselle",s.SECHE_LINGE="seche-linge",s.VMC="vmc",s.GARAGE="garage",s))(t||{}),e=(s=>(s.SALON="Salon",s.CUISINE="Cuisine",s.ENTREE="Entrée",s.SALLE_D_EAU="Salle d'eau",s.TERASSE="Terasse",s.GARAGE="Garage",s.BUREAU="Bureau",s.SALLE_DE_BAIN="Salle de bain",s.PALIER_ESCALIER="Palier / Escalier",s.CHAMBRE_LEONORE="Chambre Léonore",s.CHAMBRE_VALENTIN_LAURENE="Chambre V&L",s.TOILETTE="Toilette",s.SAS="Sas",s))(e||{});const w=[{id:1,disjoncteurs:[{id:1,type:t.ECLAIRAGE,pieces:[e.SALON,e.ENTREE,e.CUISINE,e.SALLE_D_EAU,e.TERASSE,e.GARAGE],shortDescription:"Rez-de-chaussée"},{id:2,type:t.PRISE,pieces:[e.ENTREE,e.CUISINE],detail:["Entrée x2","Cuisine x5","Hotte cuisine"],shortDescription:"Entrée, Cuisine, Hotte"},{id:3,type:t.PRISE,pieces:[e.BUREAU,e.SALLE_DE_BAIN,e.PALIER_ESCALIER],detail:["Salle de bain - Lave linge","Salle de bain - Lavabo","Palier x1","Bureau x3"],shortDescription:"Palier, Bureau, SdB - Lavabo et lave linge"},{id:4,type:t.PRISE,pieces:[e.CHAMBRE_LEONORE,e.CHAMBRE_VALENTIN_LAURENE],detail:["Chambre Léonore x3","Chambre V&L x3"],shortDescription:"Chambres"},{id:5,type:t.FOUR,pieces:[e.CUISINE],detail:["Four"],shortDescription:"Four"},{id:6,type:t.EVIER,pieces:[e.CUISINE],detail:["Prise sous l'évier"],shortDescription:"Prise sous l'évier"}]},{id:2,disjoncteurs:[{id:1,type:t.ECLAIRAGE,pieces:[e.CHAMBRE_LEONORE,e.CHAMBRE_VALENTIN_LAURENE,e.TOILETTE,e.BUREAU,e.SALLE_DE_BAIN,e.PALIER_ESCALIER],shortDescription:"Etage"},{id:2,type:t.VOLET_ROULANT,pieces:[e.SALON,e.CHAMBRE_VALENTIN_LAURENE,e.BUREAU],detail:["Volets roulant"],shortDescription:"Volets roulant"},{id:3,type:t.PRISE,pieces:[e.SALON],detail:["Afficheur de consommations EC450"],shortDescription:"Afficheur de conso EC450"},{id:4,type:t.PRISE,pieces:[e.SALON,e.SAS,e.GARAGE],detail:["A gauche du tableau électrique","Bar","Table à manger","Mur vers l'extérieur x2","TV x3","Sas côté jardin","Garage"],shortDescription:"Salon, sas côté jardin, garage"},{id:5,type:t.CHAUFFE_EAU,pieces:[e.GARAGE],detail:["Chauffe eau"],shortDescription:"Chauffe eau"},{id:6,type:t.CHAUDIERE,pieces:[e.CUISINE],detail:["Chaudière","Frigo"],shortDescription:"Chaudière et frigo"}]},{id:3,disjoncteurs:[{id:1,type:t.PLAQUE_DE_CUISSON,pieces:[e.CUISINE],detail:["Plaque de cuisson"],shortDescription:"Plaque de cuisson"},{id:2,type:t.ECLAIRAGE,pieces:[e.SAS],shortDescription:"Sas"},{id:3,type:t.LAVE_VAISSELLE,pieces:[e.CUISINE],detail:["Lave vaisselle"],shortDescription:"Lave vaisselle"},{id:4,type:t.PRISE,pieces:[e.SALON,e.SAS],detail:["Sas côté porte d'entrée","Tableau électrique"],shortDescription:"Sas côté porte entrée, tableau électrique"},{id:5,type:t.SECHE_LINGE,pieces:[e.SALLE_DE_BAIN],detail:["Sèche linge"],shortDescription:"Sèche linge"},{id:6,type:t.VMC,pieces:[e.CUISINE],detail:["VMC"],shortDescription:"VMC"}]}];export{P as L,w as t};
