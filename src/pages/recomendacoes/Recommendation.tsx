import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonText, IonButtons, IonMenuButton} from '@ionic/react';

import './Recommendation.css';

import {bandage, moon, home, cloudyNight} from  'ionicons/icons';

import thinking from '../../img/thinking.png';
import logo_regente from '../../img/logo_regente.png';


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
      <div id="inner">
   
      <div id="recommendations">
      <IonButton routerLink={"./Mode1"} id="button-recommendation" shape="round" expand="block" fill="solid" color="white"> <IonIcon slot="start" icon={bandage}/>Pandemia COVID-19</IonButton>
      <IonText>Para proteger você e os outros, prevenindo a disseminação do vírus</IonText>
      </div>

      <div className="row">      </div>

  
      <div id="recommendations">
      <IonButton routerLink={"./Mode2"} id="button-recommendation" shape="round" expand="block" fill="solid"  color="white"> <IonIcon slot="start" icon={cloudyNight}/>Bons hábitos</IonButton>
      </div>
      <IonText>Para lidar com o estresse e manter-se saudável</IonText>
      <div className="row">      </div>
 
      <div id="recommendations">
      <IonButton routerLink={"./Mode3"} id="button-recommendation" shape="round" expand="block" fill="solid"  color="white"> <IonIcon slot="start" icon={home}/>Sono</IonButton>
      </div>
      <IonText>Para manter o ritmo do corpo ajustado</IonText>
     
      </div>
      </div>
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Recommendation;
