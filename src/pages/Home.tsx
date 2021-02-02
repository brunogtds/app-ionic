import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';


import distanciamentoExp from '../../src/img/distanciamentoExp.png';

import social_distancing from '../../src/img/social_distancing.svg';
import distancing from '../../src/img/distancing.svg';
import isolation from '../../src/img/isolation.svg';
import quarantine from '../../src/img/quarantine.svg';

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
       <IonCard>
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
        </IonCard>
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

       
       {/*
        <div>
          <img src={distanciamentoExp}/>
       </div> */}

       <IonSlides scrollbar={true} pager={true} className={"ion-slides"} >

          <IonSlide className={"slide light-color img"}>
          
          <h2>Qual a diferença entre distanciamento social, quarentena e isolamento? </h2>

          <img src={social_distancing}/>

          <p>
            Laboratório de Cronobiologia e Sono - UFRGS/HCPA | Laboratório de Neurobiologia da Pineal - UNIFESP
          </p>
          <p>
            Laboratório de Neurofisiologia e Neuroquímica de Excitabilidade Neuronal e Plasticidade Sináptica - UFRGS
          </p>
          </IonSlide>

          <IonSlide className={"slide blue-light img"}>
          <h2>Distanciamento social</h2>
          <h5>Texto sobre distanciamento</h5>
          <img src={distancing}/>
          <p>
            Laboratório de Cronobiologia e Sono - UFRGS/HCPA | Laboratório de Neurobiologia da Pineal - UNIFESP
          </p>
          <p>
            Laboratório de Neurofisiologia e Neuroquímica de Excitabilidade Neuronal e Plasticidade Sináptica - UFRGS
          </p>
          </IonSlide>

          <IonSlide className={"slide orange-light img"}>
          <h2>Quarentena</h2>

          <img src={quarantine} />

          <p>
            Laboratório de Cronobiologia e Sono - UFRGS/HCPA | Laboratório de Neurobiologia da Pineal - UNIFESP
          </p>
          <p>
            Laboratório de Neurofisiologia e Neuroquímica de Excitabilidade Neuronal e Plasticidade Sináptica - UFRGS
          </p>

          </IonSlide>

          <IonSlide className={"slide red-light img"}>
          <h2>Isolamento</h2>

          <img src={isolation}/>

          <p>
            Laboratório de Cronobiologia e Sono - UFRGS/HCPA | Laboratório de Neurobiologia da Pineal - UNIFESP
          </p>
          <p>
            Laboratório de Neurofisiologia e Neuroquímica de Excitabilidade Neuronal e Plasticidade Sináptica - UFRGS
          </p>

          </IonSlide>
         

       </IonSlides>
        
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
