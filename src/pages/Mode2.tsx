import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Modes.css';

import { IonGrid, IonRow, IonCol, IonSlides, IonSlide, IonLabel} from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';

import news from '../img/news.svg';
import relaxing_body from '../img/relaxing_body.svg';
import recreation from '../img/recreation.svg';
import physical_activities from '../img/physical_activities.svg';
import posture from '../img/posture.svg';
import oral_hygiene from '../img/oral_hygiene.svg';
import healthy_food from '../img/healthy_food.svg';

const Mode2: React.FC = () => {

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
            <IonTitle size="large">Mode 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        

        <IonSlides pager={true} scrollbar={true}>
          
       
          <IonSlide className={"slide light-orange"}>
            <img src={news}/>
            <h2>Não fique ouvindo notícias o tempo todo.</h2>
            
          </IonSlide>
        
          <IonSlide className={"slide whitish"}>
            <img src={relaxing_body}/>
            <h2>Use técnicas para relaxar o corpo e a mente.</h2>
            
          </IonSlide>

          <IonSlide className={"slide light-orange"}>
            
            <img src={recreation}/>
            <h2>Reserve um tempo para atividades de lazer.</h2>
          </IonSlide>

          <IonSlide className={"slide whitish"}>
            
            <img src={physical_activities}/>
            <h2>Pratique atividades físicas em casa.</h2>
          </IonSlide>

          <IonSlide className={"slide light-orange"}>
            
            <img src={posture}/>
            <h2>Cuide da sua postura corpural.</h2>
          </IonSlide>

          <IonSlide className={"slide whitish"}>
            
            <img src={oral_hygiene}/>
            <h2>Mantenha uma boa higiene buscal.</h2>
          </IonSlide>

          <IonSlide className={"slide light-orange"}>
            
            <img src={healthy_food}/>
            <h2>Cuide da sua alimentação.</h2>
          </IonSlide>
        
        </IonSlides>
       
      </IonContent>
    </IonPage>
    );

};

export default Mode2;