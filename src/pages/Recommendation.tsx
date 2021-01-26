import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonSlides, IonSlide, IonIcon} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Recommendation.css';

import img_lightbulb from '../../src/img/lightbulb.png';
import img_washing_hands from '../../src/img/washing-hands.png';
import img_mask from '../../src/img/medical-mask.png';

import Modo1 from './Mode1';
import Modo2 from './Mode2';
import Modo3 from './Mode3';

import {bandage, moon, home, cloudyNight} from  'ionicons/icons';

const Recommendation: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recomendações</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Recomendações</IonTitle>
          </IonToolbar>
        </IonHeader>
      
      
      <div>
      <IonButton routerLink={"./Mode1"} size="large"> <IonIcon slot="start" icon={bandage} />Modulo 1</IonButton>
      </div>
      <div>
      <IonButton routerLink={"./Mode2"} size="large"> <IonIcon slot="start" icon={cloudyNight} />Modulo 2</IonButton>
      </div>
      <div>
      <IonButton routerLink={"./Mode3"} size="large"> <IonIcon slot="start" icon={home} />Modulo 3</IonButton>
      </div>
      
      </IonContent>
    </IonPage>
  );
};

export default Recommendation;
