import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonText} from '@ionic/react';

import './Recommendation.css';

import {bandage, moon, home, cloudyNight} from  'ionicons/icons';

import thinking from '../../img/thinking.png';



/*Recomendações estão divididas em módulos linkados aqui */

const Recommendation: React.FC = () => {

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><b>RECOMENDAÇÕES</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center" color="light">
      
      
      
      
      <IonContent className="ion-padding" color="light">
       

      
   
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
     
     
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Recommendation;
