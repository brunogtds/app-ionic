import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Modes.css';

import { IonGrid, IonRow, IonCol, IonSlides, IonSlide, IonLabel} from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';

const Mode3: React.FC = () => {

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
            <IonTitle size="large">Mode 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        

        <IonSlides>

            <IonLabel>Mode3</IonLabel>
          
          <IonSlide className={"slide"}>
            
            <h2>Máscara</h2>
            <p>Usar máscara como medida de prevenção da COVID-19.</p>
          </IonSlide>
        
          <IonSlide className={"slide"}>
           
            <h2>Lavar as mãos</h2>
            <p>Usar máscara como medida de prevenção da COVID-19.</p>
          </IonSlide>

          <IonSlide className={"slide"}>
            
            <h2>Lavar as mãos</h2>
            <p>Minimizar a exposição à luz antes de dormir.</p>
          </IonSlide>
        
        </IonSlides>
       
      </IonContent>
    </IonPage>
    );

};

export default Mode3;