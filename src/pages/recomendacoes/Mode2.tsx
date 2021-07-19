import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Modes.css';

import {IonSlides, IonSlide} from '@ionic/react';

import news from '../../img/news.svg';
import relaxing_body from '../../img/relaxing_body.svg';
import recreation from '../../img/recreation.svg';
import physical_activities from '../../img/physical_activities.svg';
import posture from '../../img/posture.svg';
import oral_hygiene from '../../img/oral_hygiene.svg';
import healthy_food from '../../img/healthy_food.svg';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};


const Mode2: React.FC = () => {

    return (
        <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><b>Recomendações</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
      

        <IonSlides pager={true} scrollbar={true} options={slideOpts}>
          
       
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