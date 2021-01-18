import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonSlides, IonSlide} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Recommendation.css';

import img_lightbulb from '../../src/img/lightbulb.png';
import img_washing_hands from '../../src/img/washing-hands.png';
import img_mask from '../../src/img/medical-mask.png';

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
        

        <IonSlides>
          
          <IonSlide className={"slide"}>
            <img src={img_mask}/>
            <h2>Máscara</h2>
            <p>Usar máscara como medida de prevenção da COVID-19.</p>
          </IonSlide>
        
          <IonSlide className={"slide"}>
            <img src={img_washing_hands}/>
            <h2>Lavar as mãos</h2>
            <p>Usar máscara como medida de prevenção da COVID-19.</p>
          </IonSlide>

          <IonSlide className={"slide"}>
            <img src={img_lightbulb}/>
            <h2>Lavar as mãos</h2>
            <p>Minimizar a exposição à luz antes de dormir.</p>
          </IonSlide>
        
        </IonSlides>
       
      </IonContent>
    </IonPage>
  );
};

export default Recommendation;
