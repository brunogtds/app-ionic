import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { IonGrid, IonRow, IonCol } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';


import distanciamentoExp from '../../src/img/distanciamentoExp.png';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar>
          <IonTitle>Início</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">

        <IonGrid>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

       
       {/* <ExploreContainer name="Tab 1 page" /> */}
       <h1>O impacto do distanciamento social nos ritmos biológicos e na saúde mental</h1> 
      
    
        <div className="ion-text-justify">
        

        <p>Caro participante, </p>
 
        <p>Agradecemos a sua disposição em nos ajudar a entender as consequências do distanciamento social. 
          Com esse estudo, pretendemos encontrar maneiras de estar melhor preparados e munidos de mais informação para diminuir as consequências 
           do distanciamento social na saúde mental. Além disso, poderemos avaliar quais são as recomendações mais 
           importantes para quem está passando por tal situação. </p>
          
           <p>Antes de começar a responder, na próxima página, você poderá ler mais sobre nosso estudo. 
           Caso desista de participar, basta fechar o navegador ou aplicativo a qualquer momento. </p>
        </div>

        {/*
        <IonCard>
          <IonCardContent>
        <div>
          <img width="940" height="446" src={distanciamentoExp}/>
        </div>
        <IonCardHeader>
          <IonCardSubtitle>Qual a diferença entre distanciamento social, isolamento e quarentena?</IonCardSubtitle>
          <IonCardTitle>Antes de começarmos, você sabe o que é distanciamento social? Confira a explicação e depois clique em "Próximo" no final da página para iniciar a pesquisa:</IonCardTitle>
        </IonCardHeader>
        </IonCardContent>
        

        </IonCard>
        */}

       
        <div>
          <img src={distanciamentoExp}/>
        </div>
        
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
