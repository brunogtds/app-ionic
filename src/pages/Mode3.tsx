import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Modes.css';

import { IonGrid, IonRow, IonCol, IonSlides, IonSlide, IonLabel} from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';

import natural_light from '../img/natural_light.svg';
import light_bulb from '../img/light_bulb.svg';
import screen_light from '../img/screen_light.svg';
import yellow_screen from '../img/yellow_screen.svg';
import routine from '../img/routine.svg';
import schedule from '../img/schedule.svg';
import naps from '../img/naps.svg';
import problems from '../img/problems.svg';
import room_sleep from '../img/room_sleep.svg';
import food from '../img/food.svg';
import coffee from '../img/coffee.svg';
import exercises from '../img/exercises.svg';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

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
        

        <IonSlides pager={true} scrollbar={true} options={slideOpts}>

            
          
          <IonSlide className={"slide blue-darken"}>
            <img src={natural_light}/>
            <h2>Exponha-se à luz natural durante o dia.</h2>
          </IonSlide>
        
          <IonSlide className={"slide light-blue"}>
           
            <img src={light_bulb}/>
            <h2>Apague a luz à noite.</h2>
          </IonSlide>

          <IonSlide className={"slide blue-darken"}>
          
            <img src={screen_light}/>
            <h2>Reduza o tempo excessivo na frente das telas, em especial à noite.</h2>
          </IonSlide>

          <IonSlide className={"slide light-blue"}>
          
            <img src={yellow_screen}/>
            <h2>Use apps que deixem a tela mais 'amarelada' à noite.</h2>
          </IonSlide>

          <IonSlide className={"slide blue-darken"}>
          
            <img src={routine}/>
            <h2>Organize sua rotina pensando em seu cronotipo.</h2>
          </IonSlide>

          <IonSlide className={"slide light-blue"}>
          
            <img src={schedule}/>
            <h2>Mantenha horários regulares.</h2>
          </IonSlide>

          <IonSlide className={"slide blue-darken"}>
          
            <img src={naps}/>
            <h2>Evite cochilos prolongados.</h2>
          </IonSlide>

          <IonSlide className={"slide light-blue"}>
          
            <img src={problems}/>
            <h2>Na hora de deitar, evite ficar pensando nos problemas.</h2>
          </IonSlide>

          <IonSlide className={"slide blue-darken"}>
          
            <img src={room_sleep}/>
            <h2>Torne o seu quarto um ambiente que facilite o sono.</h2>
          </IonSlide>

          <IonSlide className={"slide light-blue"}>
          
            <img src={food}/>
            <h2>Evite alimentos pesados muito próximo da hora de dormir.</h2>
          </IonSlide>

          
          <IonSlide className={"slide blue-darken"}>
          
            <img src={coffee}/>
            <h2>Evite ingerir cafeína ou álcool perto da hora de dormir.</h2>
          </IonSlide>

          
          <IonSlide className={"slide light-blue"}>
          
            <img src={exercises}/>
            <h2>Planeje os horários dos seus exercícios considerando seu sono.</h2>
          </IonSlide>
        
        </IonSlides>
       
      </IonContent>
    </IonPage>
    );

};

export default Mode3;