import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonSlides, IonSlide, IonIcon, IonRow, IonCol} from '@ionic/react';

import './Recommendation.css';

import img_lightbulb from '../../src/img/lightbulb.png';
import img_washing_hands from '../../src/img/washing-hands.png';
import img_mask from '../../src/img/medical-mask.png';

import Modo1 from './Mode1';
import Modo2 from './Mode2';
import Modo3 from './Mode3';

import {bandage, moon, home, cloudyNight} from  'ionicons/icons';

import thinking from '../../img/thinking.png';

/*Recomendações estão divididas em módulos linkados aqui */

const Recommendation: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recomendações</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
      
      
      
      
      <IonContent className="ion-padding">
      <div>
        <img src={thinking} height="100px" width="100px"/>
      </div>
      

      <div>
      <IonButton routerLink={"./Mode1"} size="large"> <IonIcon slot="start" icon={bandage} />COVID-19</IonButton>
      </div>
      <div>
      <IonButton routerLink={"./Mode2"} size="large"> <IonIcon slot="start" icon={cloudyNight}/>Bons hábitos</IonButton>
      </div>
      <div>
      <IonButton routerLink={"./Mode3"} size="large"> <IonIcon slot="start" icon={home} />Sono</IonButton>
      </div>
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Recommendation;
