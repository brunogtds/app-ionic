import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonText, IonButtons, IonMenuButton, IonItem, IonModal, IonSlides, IonSlide} from '@ionic/react';

import './Recommendation.css';
import {useState} from 'react';

import {bandage, moon, home, cloudyNight} from  'ionicons/icons';

import thinking from '../../img/thinking.png';
import logo_regente from '../../img/logo_regente_branco.svg';

import logo_clinicas from '../../img/logo_clinicas.svg';
import logo_crono from '../../img/logo_crono.svg';
import logo_innovaspace from '../../img/logo_innovaspace.svg';
import logo_neurobio from '../../img/logo_neurobio.svg';
import logo_nnnesp from '../../img/logo_nnnesp.svg';
import logo_ufrgs from '../../img/logo_ufrgs.svg';
import logo_unifesp from '../../img/logo_unifesp.svg';

import covid_1 from '../../img/Covid_1.svg';
import covid_2 from '../../img/Covid_2.svg';
import covid_3 from '../../img/Covid_3.svg';
import covid_4 from '../../img/Covid_4.svg';
import covid_5 from '../../img/Covid_5.svg';
import covid_6 from '../../img/Covid_6.svg';
import covid_7 from '../../img/Covid_7.svg';

import bons_habitos1 from '../../img/Bons_habitos_1.svg';
import bons_habitos2 from '../../img/Bons_habitos_2.svg';
import bons_habitos3 from '../../img/Bons_habitos_3.svg';
import bons_habitos4 from '../../img/Bons_habitos_4.svg';
import bons_habitos5 from '../../img/Bons_habitos_5.svg';
import bons_habitos6 from '../../img/Bons_habitos_6.svg';
import bons_habitos7 from '../../img/bons_habitos7.png';

import sono1 from '../../img/Sono_1.svg';
import sono2 from '../../img/Sono_2.svg';
import sono3 from '../../img/Sono_3.svg';
import sono4 from '../../img/Sono_4.svg';
import sono5 from '../../img/Sono_5.svg';
import sono6 from '../../img/Sono_6.svg';
import sono7 from '../../img/Sono_7.svg';
import sono8 from '../../img/Sono_8.svg';
import sono9 from '../../img/Sono_9.svg';
import sono10 from '../../img/Sono_10.svg';
import sono11 from '../../img/Sono_11.svg';
import sono12 from '../../img/Sono_12.svg';

import ShowMoreText from "react-show-more-text";

/*Recomendações estão divididas em módulos linkados aqui */

const Recommendation: React.FC = () => {

  
  const [showModalCovid, setShowModalCovid] = useState(false);
  const [showModalHabitos, setShowModalHabitos] = useState(false);
  const [showModalSono, setShowModalSono] = useState(false);

  const [saibaMaisCovid1, setSaibaMaisCovid1]= useState(false);
  const saibaMaisTextCovid1= saibaMaisCovid1?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisCovid2, setSaibaMaisCovid2]= useState(false);
  const saibaMaisTextCovid2= saibaMaisCovid2?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisCovid3, setSaibaMaisCovid3]= useState(false);
  const saibaMaisTextCovid3= saibaMaisCovid3?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisCovid4, setSaibaMaisCovid4]= useState(false);
  const saibaMaisTextCovid4= saibaMaisCovid4?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisCovid5, setSaibaMaisCovid5]= useState(false);
  const saibaMaisTextCovid5= saibaMaisCovid5?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisCovid6, setSaibaMaisCovid6]= useState(false);
  const saibaMaisTextCovid6= saibaMaisCovid6?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisCovid7, setSaibaMaisCovid7]= useState(false);
  const saibaMaisTextCovid7= saibaMaisCovid7?'Voltar ▲':'Saiba mais ▼';

  const [saibaMaisBonsHabitos1, setSaibaMaisBonsHabitos1]= useState(false);
  const saibaMaisTextBonsHabitos1= saibaMaisBonsHabitos1?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisBonsHabitos2, setSaibaMaisBonsHabitos2]= useState(false);
  const saibaMaisTextBonsHabitos2= saibaMaisBonsHabitos2?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisBonsHabitos3, setSaibaMaisBonsHabitos3]= useState(false);
  const saibaMaisTextBonsHabitos3= saibaMaisBonsHabitos3?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisBonsHabitos4, setSaibaMaisBonsHabitos4]= useState(false);
  const saibaMaisTextBonsHabitos4= saibaMaisBonsHabitos4?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisBonsHabitos5, setSaibaMaisBonsHabitos5]= useState(false);
  const saibaMaisTextBonsHabitos5= saibaMaisBonsHabitos5?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisBonsHabitos6, setSaibaMaisBonsHabitos6]= useState(false);
  const saibaMaisTextBonsHabitos6= saibaMaisBonsHabitos6?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisBonsHabitos7, setSaibaMaisBonsHabitos7]= useState(false);
  const saibaMaisTextBonsHabitos7= saibaMaisBonsHabitos7?'Voltar ▲':'Saiba mais ▼';

  const [saibaMaisSono1, setSaibaMaisSono1]= useState(false);
  const saibaMaisTextSono1= saibaMaisSono1?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisSono2, setSaibaMaisSono2]= useState(false);
  const saibaMaisTextSono2= saibaMaisSono2?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisSono3, setSaibaMaisSono3]= useState(false);
  const saibaMaisTextSono3= saibaMaisSono3?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisSono4, setSaibaMaisSono4]= useState(false);
  const saibaMaisTextSono4= saibaMaisSono4?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisSono5, setSaibaMaisSono5]= useState(false);
  const saibaMaisTextSono5= saibaMaisSono5?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisSono6, setSaibaMaisSono6]= useState(false);
  const saibaMaisTextSono6= saibaMaisSono6?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisSono7, setSaibaMaisSono7]= useState(false);
  const saibaMaisTextSono7= saibaMaisSono7?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisSono8, setSaibaMaisSono8]= useState(false);
  const saibaMaisTextSono8= saibaMaisSono8?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisSono9, setSaibaMaisSono9]= useState(false);
  const saibaMaisTextSono9= saibaMaisSono9?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisSono10, setSaibaMaisSono10]= useState(false);
  const saibaMaisTextSono10= saibaMaisSono10?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisSono11, setSaibaMaisSono11]= useState(false);
  const saibaMaisTextSono11= saibaMaisSono11?'Voltar ▲':'Saiba mais ▼';
  const [saibaMaisSono12, setSaibaMaisSono12]= useState(false);
  const saibaMaisTextSono12= saibaMaisSono12?'Voltar ▲':'Saiba mais ▼';

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="orange">
        <div id="header-items">
          <div className={"navigation"}>
          <IonButtons slot="start"> <IonMenuButton id="main"></IonMenuButton> </IonButtons> 
          </div>
          <div className={"img-logo"}>
          <img src={logo_regente} className={"logo"}/>
         </div>
  </div> 
       
        
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center" color="background">
      
      
      
      
      <IonContent className="ion-padding" color="background">
       

      <div id="outer">
      <div id="inner texto-padrao">

      <h1 className="texto-titulo">Recomendações</h1>
   
      <div id="recommendations">
      <IonButton id="button-recommendation" onClick={() => setShowModalCovid(true)} color="white"> <div className="texto-button-recommend"> Pandemia COVID-19 </div></IonButton>
      </div>
  
      <div id="recommendations">
      <IonButton id="button-recommendation" color="white" onClick={() => setShowModalHabitos(true)} > <div className="texto-button-recommend-habitos"> Bons hábitos </div></IonButton>
      </div>
    
      <div id="recommendations">
      <IonButton id="button-recommendation" color="white" onClick={() => setShowModalSono(true)} >  <div className="texto-button-recommend">Sono </div></IonButton>
      </div>

      <IonModal isOpen={showModalCovid} showBackdrop={true}
        cssClass='custom-modal'
        onDidDismiss={() => setShowModalCovid(false)}>
       
          <IonContent>
            <IonSlides pager={true} >
            
               <IonSlide>
               
                <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalCovid(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
              
                <img src={covid_1} className={"img-slides"}/>
                 <p className={"main-text"}>Evite ao máximo sair de casa. Se for necessário sair, evite permanecer em espaços fechados ou mal ventilados.</p>
                
              
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisCovid1(!saibaMaisCovid1)}}>{saibaMaisTextCovid1}</IonButton>
                
                {saibaMaisCovid1 ? 
               
                <p className={"readMore-text"}>Trabalhe  de casa sempre que possível. Evite visitar familiares e amigos, principalmente os que estão nos grupos de risco (mantenha contato por telefone  ou redes sociais).
                Caso precise sair, evite aglomerações e espaços fechados ou mal ventilados, onde aerossóis contendo o vírus podem ficar em suspensão no ar por várias horas. Use máscara, cobrindo o nariz, a boca e o queixo e higienize frequentemente as mãos.
                Ao retornar a casa, observe os cuidados de higienização necessários, sobretudo das mãos, roupas e objetos. 
                </p> : <p></p>
                }<br/>
                </IonSlide>
                <IonSlide>
                <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalCovid(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
                <img src={covid_2} className={"img-slides"} width="170" height="122"/>
                <p className={"main-text"}>Use sempre máscara de proteção.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisCovid2(!saibaMaisCovid2)}}>{saibaMaisTextCovid2}</IonButton>
                
                {saibaMaisCovid2 ? 
                <p className={"readMore-text"}> O que fazer:
                <ul>
                  <li>Use sempre máscara quando estiver fora de casa.</li>
                  <li>Se for possível, prefira os respiradores (PFF2 ou N95).</li>
                  <li>Coloque e retire a máscara pelos elásticos.</li>
                  <li>Cubra boca, nariz e queixo e ajuste bem a máscara ao rosto.</li>
                  <li>Troque a máscara a cada 3-4 horas.</li>
                  <li>Descarte a máscara dentro de um saquinho de plástico e feche bem.</li>
                 
                </ul>
                O que não fazer:
                <ul>
                <li>Não use máscara furada ou úmida.</li>
                <li>Não use a máscara abaixo do nariz.</li>
                <li>Não use a máscara frouxa.</li>
                <li>Não toque a frente da máscara.</li>
                <li>Não retire a máscara para falar.</li>
                <li>Não deixe a máscara usada ao alcance de crianças ou outras pessoas.</li>
                <li>Não compartilhe a sua máscara, ela é de uso individual.</li>
                </ul> </p>
                : <p></p>
                }<br/>
                </IonSlide>
                <IonSlide>
                <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalCovid(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
                <img src={covid_3} className={"img-slides"}/>
                <p className={"main-text"}>Lave as mãos regularmente com água e sabão ou use álcool 70%.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisCovid3(!saibaMaisCovid3)}}>{saibaMaisTextCovid3}</IonButton>
                
                {saibaMaisCovid3 ? 
                <p className={"readMore-text"}>Higienize as mãos frequentemente, sobretudo se estiver fora de casa e ao retornar, e sempre que tocar objetos que possam estar contaminados (maçanetas de portas, corrimãos, objetos tocados por outras pessoas, etc.).
                Caso não tenha uma pia disponível, aplique álcool 70% nas mãos e espalhe bem nas palmas, dorso, dedos e punhos.
                Embora não seja a via principal, o contato com superfícies contaminadas também pode contribuir para a transmissão da COVID-19.
                Lavar as mãos frequentemente previne o contato da mão contaminada com o rosto, especialmente olhos e nariz, diminuindo a transmissão do vírus.

                </p> : <p></p>
                }<br/>
                </IonSlide>
                <IonSlide>
                <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalCovid(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
                <img src={covid_4} className={"img-slides"}/>
                <p className={"main-text"}>Procure manter no mínimo 2 metros de distância das pessoas.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisCovid4(!saibaMaisCovid4)}}>{saibaMaisTextCovid4}</IonButton>
                
                {saibaMaisCovid4 ? 
                <p className={"readMore-text"}>Mantenha distância de outras pessoas de pelo menos 2 metros; aumente esta distância para 8 metros se as pessoas em volta estiverem sem máscara. Desta forma, você se protege de nuvens de gotículas e aerossóis, que são emitidas ao falar, espirrar ou tossir, e que podem transportar o vírus. 
                Mesmo mantendo distância segura, sempre use máscara e evite espaços fechados ou mal ventilados.
                
                </p> : <p></p>
                }<br/>
                </IonSlide>
                <IonSlide>
                <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalCovid(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
                <img src={covid_5} className={"img-slides"}/>
                <p className={"main-text"}>Evite tocar no rosto. Ao tossir ou espirrar, cubra a boca e o nariz com a parte interna do cotovelo ou com um lenço descartável. </p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisCovid5(!saibaMaisCovid5)}}>{saibaMaisTextCovid5}</IonButton>
                
                {saibaMaisCovid5 ? 
                <p className={"readMore-text"}>Não retire a máscara para tossir ou espirrar, utilize a parte interna do cotovelo ou um lenço descartável sobre a máscara para reforçar o bloqueio de gotículas de saliva.
                </p> : <p></p>
                }<br/>
                </IonSlide>
                <IonSlide>
                <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalCovid(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
                <img src={covid_6} className={"img-slides"}/>
                <p className={"main-text"}>Fique em casa se não se sentir bem.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisCovid6(!saibaMaisCovid6)}}>{saibaMaisTextCovid6}</IonButton>
                
                {saibaMaisCovid6 ? 
                <p className={"readMore-text"}>Se tiver sintomas de COVID-19 ou tiver suspeita de estar infectado, faça o isolamento profilático:
                Fique em casa, se possível isolado em um cômodo, use máscara na presença dos outros habitantes da casa e não partilhe nenhum objeto de uso pessoal (talheres, toalhas, lençóis, escova de dentes, etc.). Desinfete frequentemente superfícies comuns como maçanetas de portas.
                Se sentir falta de ar, muito cansaço e/ou febre alta, procure atendimento médico. 
                Mantenha o isolamento por 14 dias ou até ser liberado por uma autoridade de Saúde.
                
                </p> : <p></p>
                }<br/>
                </IonSlide>
                <IonSlide>
                <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalCovid(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
                <img src={covid_7} className={"img-slides"}/>
                <p className={"main-text"}>Quando tiver oportunidade, vacine-se.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisCovid7(!saibaMaisCovid7)}}>{saibaMaisTextCovid7}</IonButton>
                
                {saibaMaisCovid7 ? 
                <p className={"readMore-text"}>Focar em prevenção é fundamental para travar a disseminação da COVID-19. A estratégia de imunização pela vacinação é ética e segura, além de conferir proteção para as variantes do coronavírus. As vacinas são partículas utilizadas para treinar o sistema imunitário a criar defesas, tal como acontece após a exposição a uma doença. No entanto, as vacinas não causam a doença e geralmente apresentam baixo risco de complicações. Todas as vacinas são testadas e a sua segurança e eficácia são comprovadas antes de serem aplicadas na população.
                Para garantir o efeito da vacina, tome a segunda dose quando for indicado.
                Mantenha os cuidados de distanciamento social mesmo após a vacina.
                
                </p> : <p></p>
                }<br/>
                </IonSlide>
            </IonSlides>
          </IonContent>
      </IonModal>

       <IonModal isOpen={showModalHabitos} showBackdrop={true}
        cssClass='custom-modal'
        onDidDismiss={() => setShowModalHabitos(false)}>
       
          <IonContent>
            <IonSlides pager={true} >
            
               <IonSlide>
               <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalHabitos(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
                 <img src={bons_habitos1} className={"img-slides"}/>
                 <p className={"main-text"}>Não fique ouvindo notícias o tempo todo.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisBonsHabitos1(!saibaMaisBonsHabitos1)}}>{saibaMaisTextBonsHabitos1}</IonButton>
                
                {saibaMaisBonsHabitos1 ? 
                <p className={"readMore-text"}>Não fique ouvindo notícias o tempo todo. Faça pausas longe do jornal, rádio, TV ou mídias sociais. Para saber mais, clique <a target="_blank" href="https://www.youtube.com/watch?v=X6FOPoZNMVo" className={"link-text"}>aqui</a>.
                </p> : <p></p>
                }<br/>
                </IonSlide>
                <IonSlide>
                <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalHabitos(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
                <img src={bons_habitos2} className={"img-slides"}/>
                <p className={"main-text"}>Use técnicas para relaxar o corpo e a mente.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisBonsHabitos2(!saibaMaisBonsHabitos2)}}>{saibaMaisTextBonsHabitos2}</IonButton>
                
                {saibaMaisBonsHabitos2 ? 
                <p className={"readMore-text"}>Existem algumas técnicas que podem ajudar a diminuir a sua ansiedade. Controlar a respiração já pode ajudar na redução dos sintomas de tensão e estresse. 
                </p> : <p></p>
                }<br/>
                </IonSlide>
                <IonSlide>
                <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalHabitos(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
                <img src={bons_habitos3} className={"img-slides"}/>
                <p className={"main-text"}>Reserve um tempo para atividades de lazer.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisBonsHabitos3(!saibaMaisBonsHabitos3)}}>{saibaMaisTextBonsHabitos3}</IonButton>
                
                {saibaMaisBonsHabitos3 ? 
                <p className={"readMore-text"}>Faça uma lista de possíveis atividades de lazer que você possa fazer e defina em quais momentos da sua semana que você vai realizar essas atividades que você gosta. Programe-se para reservar esse tempo na sua rotina e crie horários específicos para esses momentos.
                </p> : <p></p>
                }<br/>
                </IonSlide>
                <IonSlide>
                <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalHabitos(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
                <img src={bons_habitos4} className={"img-slides"}/>
                <p className={"main-text"}>Pratique atividades físicas.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisBonsHabitos4(!saibaMaisBonsHabitos4)}}>{saibaMaisTextBonsHabitos4}</IonButton>
                
                {saibaMaisBonsHabitos4 ? 
                <p className={"readMore-text"}>Exercícios físicos melhoram a saúde de uma forma geral. As evidências mostram que 30 minutos de exercícios físicos já podem ser benéficos, desde que seja regular (idealmente 5 vezes na semana). Reserve horários específicos para se exercitar para que a prática faça parte da sua rotina. Praticar uma atividade física em casa é sempre uma opção, e você também pode convidar alguém para praticar junto para ajudar na motivação.

                </p> : <p></p>
                }<br/>
                </IonSlide>
                <IonSlide>
                <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalHabitos(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
                <img src={bons_habitos7} className={"img-slides"}/>
                <p className={"main-text"}>Cuide da sua postura corporal.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisBonsHabitos5(!saibaMaisBonsHabitos5)}}>{saibaMaisTextBonsHabitos5}</IonButton>
               
                {saibaMaisBonsHabitos5 ? 
                <p className={"readMore-text"}>Cuidar da postura corporal ao sentar-se, deitar-se e durante o trabalho é muito importante. Ao sentar-se, mantenha ombros e quadris alinhados, pés apoiados no solo ou em um descanso para os pés. Ao deitar-se, se você dorme de lado tente ter um travesseiro que permita a cabeça estar alinhada ao tronco, ou se você dorme de barriga para cima procure elevar um pouco os joelhos com um travesseiro para relaxar os músculos da coluna. Durante o trabalho, caso esteja digitando observe se seus punhos não estão dobrados e mantenha seus braços alinhados ao corpo. Tente não dobrar o pescoço para ler ou escrever (você pode utilizar um suporte para que o texto fique na altura dos olhos, por exemplo). 
                </p> : <p></p>
                }<br/>
                </IonSlide>
                <IonSlide>
                <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalHabitos(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
                <img src={bons_habitos5} className={"img-slides"}/>
                <p className={"main-text"}>Mantenha uma boa higiene bucal.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisBonsHabitos6(!saibaMaisBonsHabitos6)}}>{saibaMaisTextBonsHabitos6}</IonButton>
                
                {saibaMaisBonsHabitos6 ? 
                <p className={"readMore-text"}>Escove os dentes pelo menos 2x ao dia, procurando escovar as partes internas e externas do dentes em todos os dentes. Use fio dental pelo menos 3x na semana. Evite compartilhar escova de dente. Preste atenção na bochecha, língua e gengiva. Se você observar um machucado nessa região que não cicatriza em 15 dias procure seu dentista.
                </p> : <p></p>
                }<br/>
                </IonSlide>
                <IonSlide>
                <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalHabitos(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
                <img src={bons_habitos6} className={"img-slides"}/>
                <p className={"main-text"}>Cuide da sua alimentação.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisBonsHabitos7(!saibaMaisBonsHabitos7)}}>{saibaMaisTextBonsHabitos7}</IonButton>
                
                {saibaMaisBonsHabitos7 ? 
                <p className={"readMore-text"}>Elabore um cardápio semanal com as refeições e planeje a lista de compras baseada nele. Sempre que possível, faça no mínimo 4 refeições ao dia e evite fazer refeições na frente da TV. 
                Faça refeições com grãos integrais, legumes, frutas e menores porções de carne, isso ajuda a controlar a gordura saturada da dieta. Cuidado com a frequência de consumo de alimentos industrializados, frituras, molhos a base de nata, queijos gordurosos e maioneses e tente não abusar do sal e das bebidas alcoólicas. Também é importantíssimo hidratar-se bem ao longo do dia. 
                 
                </p> : <p></p>
                }<br/>
                </IonSlide>
            </IonSlides>
          </IonContent>
      </IonModal>
    
      <IonModal isOpen={showModalSono} showBackdrop={true}
      cssClass='custom-modal'
      onDidDismiss={() => setShowModalSono(false)}>
     
        <IonContent>
          <IonSlides pager={true} >
          
             <IonSlide>
             <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalSono(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
               <img src={sono1} className={"img-slides"}/>
               <p className={"main-text"}>Exponha-se à luz natural durante o dia.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisSono1(!saibaMaisSono1)}}>{saibaMaisTextSono1}</IonButton>
                
                {saibaMaisSono1 ? 
                <p className={"readMore-text"}>Se você puder, exponha-se à luz natural durante a manhã. Claro, lembrando de evitar se expor diretamente ao sol em horários pouco saudáveis para a pele (entre 9h e 15h, quando o sol é muito forte). Mantenha as janelas abertas e fique perto da janela. Se sua casa lhe proporciona essa opção, passe um tempo em um ambiente aberto, mesmo que na sombra e mesmo que o dia esteja nublado. Pense em como a iluminação é diferente dentro e fora de casa.

                </p> : <p></p>
                }<br/>
              </IonSlide>
              <IonSlide>
              <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalSono(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
              <img src={sono2} className={"img-slides"}/>
              <p className={"main-text"}>Apague a luz à noite.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisSono2(!saibaMaisSono2)}}>{saibaMaisTextSono2}</IonButton>
                
                {saibaMaisSono2 ? 
                <p className={"readMore-text"}>Se você ficar na frente da tela de aparelhos eletrônicos (televisão, celular e computador, por exemplo) ou se a luz que estiver ligada for branca e forte, seu corpo vai entender que é “ainda é cedo - não é hora de dormir”, principalmente se durante o dia você nem viu a luz do sol. Se você precisa ligar as luzes após anoitecer, estabeleça um horário padrão aproximado para desligar as luzes todos os dias. Se não for possível desligar, procure por iluminação de coloração amarelada ou avermelhada (e não branca ou azulada).
                </p> : <p></p>
                }<br/>
              </IonSlide>
              <IonSlide>
              <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalSono(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
              <img src={sono3} className={"img-slides"}/>
              <p className={"main-text"}>Reduza o tempo excessivo na frente das telas, em especial à noite.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisSono3(!saibaMaisSono3)}}>{saibaMaisTextSono3}</IonButton>
                
                {saibaMaisSono3 ? 
                <p className={"readMore-text"}>A situação em que estamos pode provocar aumento expressivo do tempo passado na frente de telas: seja pelo trabalho ser agora todo realizado de casa, pelas reuniões de amigos que agora são por vídeo-chamada, ou maratonas de seriados em serviços de streaming. No final do dia, a luz azul das telas dificulta o “desligar” do nosso organismo. Ela, por exemplo, inibe a produção de melatonina, o hormônio que sinaliza para nosso corpo que é escuro e, portanto, nossa hora de repouso.
                </p> : <p></p>
                }<br/>
              </IonSlide>
              <IonSlide>
              <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalSono(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
              <img src={sono4} className={"img-slides"} />
              <p className={"main-text"}>Use apps que deixem a tela mais ‘amarelada’ à noite.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisSono4(!saibaMaisSono4)}}>{saibaMaisTextSono4}</IonButton>
                
                {saibaMaisSono4 ? 
                <p className={"readMore-text"}>Caso largar as telas à noite seja difícil, o uso de aplicativos como nightshift, f.lux (IOS) e Twilight (Android), que deixam a luz ‘amarelada’ à noite são uma ótima ideia! Nosso relógio é muito responsivo à luz azul/branca. A luz menos azulada não tem a mesma capacidade de interferir com o relógio biológico.
                </p> : <p></p>
                }<br/>
              </IonSlide>
              <IonSlide>
              <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalSono(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
              <img src={sono5} className={"img-slides"}/>
              <p className={"main-text"}>Organize sua rotina pensando em seu cronotipo.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisSono5(!saibaMaisSono5)}}>{saibaMaisTextSono5}</IonButton>
                
                {saibaMaisSono5 ? 
                <p className={"readMore-text"}>Você sabe qual é o seu cronotipo? Preenchendo o questionário, você pode ler um pouco a respeito e tentar identificá-lo. Se você puder, organize seu horário de trabalho e sua rotina pensando nele: durma o suficiente e esqueça o despertador. Só não se esqueça da importância de manter a regularidade e de evitar prolongar atividades à noite - em especial, com a luz ligada e com o uso de telas! - quando seu relógio está sinalizando que é hora de dormir.
                </p> : <p></p>
                }<br/>
              </IonSlide>
              <IonSlide>
              <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalSono(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
              <img src={sono6} className={"img-slides"}/>
              <p className={"main-text"}>Mantenha horários regulares.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisSono6(!saibaMaisSono6)}}>{saibaMaisTextSono6}</IonButton>
                
                {saibaMaisSono6 ? 
                <p className={"readMore-text"}>Seja nos seus horários de dormir e acordar, de trabalho-lazer ou de alimentação, a consistência parece ser essencial para ter um relógio biológico e uma vida saudáveis.

                </p> : <p></p>
                }<br/>
              </IonSlide>
              <IonSlide>
              <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalSono(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
              <img src={sono7} className={"img-slides"}/>
              <p className={"main-text"}>Evite cochilos prolongados.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisSono7(!saibaMaisSono7)}}>{saibaMaisTextSono7}</IonButton>
                
                {saibaMaisSono7 ? 
                <p className={"readMore-text"}>Com a maior liberdade para escolher seus horários, é possível que os cochilos durante o dia se tornem mais frequentes, especialmente depois do almoço. No entanto, se você consegue dormir o suficiente à noite, procure não cochilar por períodos muito prolongados ou perto da hora em que você costuma ir dormir, já que isso pode dificultar o início do sono à noite.
                </p> : <p></p>
                }<br/>
              </IonSlide>
              <IonSlide>
              <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalSono(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
              <img src={sono8} className={"img-slides"}/>
              <p className={"main-text"}>Na hora de deitar, evite ficar pensando nos problemas.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisSono8(!saibaMaisSono8)}}>{saibaMaisTextSono8}</IonButton>
                
                {saibaMaisSono8 ? 
                <p className={"readMore-text"}>Pensar em problemas ou em tarefas pode fazer com que seja mais difícil pegar no sono. Esse comportamento é comumente associado à insônia. Tente ir dormir só quando estiver com sono e, ao deitar, tente pensar em coisas agradáveis.
                </p> : <p></p>
                }<br/>
              </IonSlide>
              <IonSlide>
              <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalSono(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
              <img src={sono9} className={"img-slides"}/>
              <p className={"main-text"}>Torne o seu quarto um ambiente que facilite o sono.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisSono9(!saibaMaisSono9)}}>{saibaMaisTextSono9}</IonButton>
                
                {saibaMaisSono9 ? 
                <p className={"readMore-text"}>Torne o ambiente em que dorme tão confortável quanto possível. Um ambiente escuro, quieto, com temperatura agradável e com ventilação adequada podem ajudá-lo a ter uma melhor noite de sono. 
                Caso seja impossível bloquear o barulho que vem da rua, um ruído constante que mascare os demais pode ajudar.
                
                </p> : <p></p>
                }<br/>
              </IonSlide>
              <IonSlide>
              <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalSono(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
              <img src={sono10} className={"img-slides"}/>
              <p className={"main-text"}> Evite alimentos pesados muito próximo do horário de dormir.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisSono10(!saibaMaisSono10)}}>{saibaMaisTextSono10}</IonButton>
                
                {saibaMaisSono10 ? 
                <p className={"readMore-text"}>Tanto comer alimentos pesados, quanto ir para cama com fome pode prejudicar a qualidade do sono de algumas pessoas. Alimentos pesados exigem do seu organismo  tempo e esforço para digeri-los e metabolizá-los. Portanto, não deixe para comer muito tarde e prefira alimentos leves.
                </p> : <p></p>
                }<br/>
              </IonSlide>
              <IonSlide>
              <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalSono(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
              <img src={sono11} className={"img-slides"}/>
              <p className={"main-text"}>Evite ingerir cafeína ou álcool perto da hora de dormir.</p>
                
                <IonButton className={"readMore-button"} fill="clear" onClick={()=>{setSaibaMaisSono11(!saibaMaisSono11)}}>{saibaMaisTextSono11}</IonButton>
                
                {saibaMaisSono11 ? 
                <p className={"readMore-text"}>Algumas substâncias podem  manter acordado ou alterar o sono de certas pessoas por ativarem certos sistemas neurobiológicos. Por isso, é recomendado evitar cafeína (café, chimarrão, ...), nicotina e álcool perto do horário de dormir. O álcool, apesar de inicialmente induzir sonolência, perturba e fragmenta o sono, em especial na segunda metade da noite.
                </p> : <p></p>
                }<br/>
              </IonSlide>
              <IonSlide>
              <IonToolbar color="white">
                <div id="header-items">
                  
                 <p className={"header-title"}>Recomendações</p>
                 <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalSono(false)}>Fechar</IonButton>
                 
                </div>   
                </IonToolbar>
              <img src={sono12} className={"img-slides"}/>
              <p className={"main-text"}>Planeje os horários dos seus exercícios considerando seu sono.</p>
                
                <IonButton className={"readMore-button"} fill="clear"onClick={()=>{setSaibaMaisSono12(!saibaMaisSono12)}}>{saibaMaisTextSono12}</IonButton>
                
                {saibaMaisSono12 ? 
                <p className={"readMore-text"}>Para uma noite de sono ótima, evitar exercícios intensos perto da hora de dormir pode ser uma boa recomendação para a maioria das pessoas. Entretanto, o efeito do exercício à noite é diferente para cada pessoa, portanto, descubra os horários que funcionam melhor para você.
                </p> : <p></p>
                }<br/>
              </IonSlide>
          </IonSlides>
        </IonContent>
    </IonModal>

      <div className="subtitle">
      <h2 className="texto-sobre-titulo">Sobre a pesquisa</h2>
      </div>
      <h4 className="texto-sobre-explicacao">O impacto do distanciamento social nos ritmos biológicos e na saúde mental</h4>
      <div className="texto-padrao">
        Agradecemos a sua disposição em nos ajudar a entender as consequências do <b>distanciamento social</b>.
        Com esse estudo, pretendemos encontrar maneiras de estar melhor preparados e munidos de mais informação para diminuir as consequências 
           do distanciamento social na saúde mental. 
        Além disso, poderemos avaliar quais são as recomendações mais para quem está passando por tal situação. Muito obrigado! </div>

      <div className="subtitle">
      <h2 className="texto-sobre-titulo">Sobre a equipe</h2>
      </div>
      <h4 className="texto-sobre-explicacao">Equipe do estudo</h4>

        <div className="texto-padrao">
          <div>
          Laboratório de Cronobiologia e Sono - HCPA/ UFRGS
          </div>
          <div>
          Laboratório de Neurofisiologia e Neuroquímica da Excitabilidade Neuronal e Plasticidade Sináptica - UFRGS
          </div>
          <div>
          Laboratório de Neurobiologia da Pineal - UNIFESP
          </div>
          </div>
      </div>
     
        <div>
            <img src={logo_crono} width="120px" height="140px"/>
            <img src={logo_clinicas} width="120px" height="140px"/>
            <img src={logo_innovaspace} width="120px" height="140px"/>
            <img src={logo_neurobio} width="120px" height="140px"/>
            </div>
            <div>
            <img src={logo_nnnesp} width="120px" height="140px"/>
            <img src={logo_ufrgs} width="120px" height="140px"/>
            <img src={logo_unifesp} width="120px" height="140px"/>
            
        </div>
      
      </div>
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Recommendation;
