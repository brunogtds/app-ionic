import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Modes.css';

import { IonGrid, IonRow, IonCol, IonSlides, IonSlide, IonLabel} from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';

import washing_hands from '../img/washing_hands.svg';
import stay_home from '../img/stay_home.svg';
import social_distancing from '../img/social_distancing.svg';
import sneeze from '../img/sneeze.svg';
import mask from '../img/mask.svg';
import home from '../img/home.svg';


const Mode1: React.FC = () => {

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
          
          <IonSlide className={"slide orange"}>
            <img src={washing_hands}/>
            <h2>Lave as mãos regularmente com água e sabão ou use álcool em gel 70%.</h2>
           
          
          </IonSlide>
        
          <IonSlide className={"slide blue"}>
           
            <img src={home}/> 
            <h2>Evite ao máximo sair de casa.</h2>
            
          </IonSlide>

          <IonSlide className={"slide orange"}>
            <img src={mask}/>
            <h2>Caso seja necessário sair, use máscara de proteção.</h2>
           
          </IonSlide>

          <IonSlide className={"slide blue"}>
            <img src={social_distancing}/>
            <h2>Procure manter no mínimo 2 metros de distância das pessoas; se estiver se movimentando, essa distância deve ser maior. </h2>
          </IonSlide>

          
          <IonSlide className={"slide orange"}>
            <img src={sneeze}/>
            <h2>Evite tocar nos olhos, nariz e boca. Ao tossir ou espirrar, cubra a boca e o nariz com a parte interna do cotovelo ou com um lenço descartável.</h2>
          
          </IonSlide>

          <IonSlide className={"slide blue"}>
            <img src={stay_home}/>
            <h2>Fique em casa se não se sentir bem. Lembre-se que a transmissão ocorre pelo menos 3 dias antes da apresentação dos sintomas.</h2>
            
          </IonSlide>
        
        </IonSlides>
       
      </IonContent>
    </IonPage>
    );

};

export default Mode1;