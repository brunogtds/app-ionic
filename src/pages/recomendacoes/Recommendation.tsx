import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonText, IonButtons, IonMenuButton, IonItem} from '@ionic/react';

import './Recommendation.css';

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


/*Recomendações estão divididas em módulos linkados aqui */

const Recommendation: React.FC = () => {

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="orange">
        <div id="header-items">
          <img src={logo_regente} className={"logo"}/>
          <IonButtons slot="end"> <IonMenuButton id="main"></IonMenuButton> </IonButtons>
        </div>   
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center" color="background">
      
      
      
      
      <IonContent className="ion-padding" color="background">
       

      <div id="outer">
      <div id="inner texto-padrao">

      <h1 className="texto-titulo">Recomendações</h1>
   
      <div id="recommendations">
      <IonButton routerLink={"./Mode1"} id="button-recommendation" color="white"> <div className="texto-button"> Pandemia COVID-19 </div></IonButton>
      
      </div>
  
      <div id="recommendations">
      <IonButton routerLink={"./Mode2"} id="button-recommendation" color="white" > <div className="texto-button"> Bons hábitos </div></IonButton>
      </div>
    
      <div id="recommendations">
      <IonButton routerLink={"./Mode3"} id="button-recommendation" color="white" >  <div className="texto-button">Sono </div></IonButton>
      </div>
    
      <div className="subtitle">
      <h2 className="texto-sobre-titulo">Sobre a pesquisa</h2>
      </div>
      <h4>O impacto do distanciamento social nos ritmos biológicos e na saúde mental</h4>
      <div className="texto-padrao">
        Agradecemos a sua disposição em nos ajudar a entender as consequências do <b>distanciamento social</b>.
        Com esse estudo, pretendemos encontrar maneiras de estar melhor preparados e munidos de mais informação para diminuir as consequências 
           do distanciamento social na saúde mental. 
        Além disso, poderemos avaliar quais são as recomendações mais para quem está passando por tal situação. Muito obrigado! </div>

      <div className="subtitle">
      <h2 className="texto-sobre-titulo">Sobre a equipe</h2>
      </div>
      <h4 >Equipe do estudo</h4>

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
