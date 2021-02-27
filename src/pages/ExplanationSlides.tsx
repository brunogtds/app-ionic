import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import '../pages/recomendacoes/Modes.css';

import { IonGrid, IonRow, IonCol, IonSlides, IonSlide, IonLabel, IonInfiniteScroll, IonText, IonButton} from '@ionic/react';

import social_distancing from '../../src/img/social_distancing.svg';
import distancing from '../../src/img/distancing.svg';
import isolation from '../../src/img/isolation.svg';
import quarantine from '../../src/img/quarantine.svg';

/*Imagem de explicação quarentena, distanciamento social e isolamento transformada em um pagina */

const slideOpts = {
    initialSlide: 0,
    speed: 400
  };

const ExplanationSlides: React.FC = () => {
  

    return (
        <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Medidas</IonTitle>
         
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
        
       <IonSlides scrollbar={true} pager={true} options={slideOpts}>

          <IonSlide className={"slide light-yellow"}>
             
          
          <img src={social_distancing} />
          <h2>Qual a diferença entre <span className={"blue-text"}><u>distanciamento social</u></span>, <span className={"orange-text"}><u>quarentena</u></span>  e <span className={"red-text"}><u>isolamento?</u></span> </h2>
         
          <p>Laboratório de Cronobiologia e Sono - UFRGS/HCPA | Laboratório de Neurobiologia da Pineal - UNIFESP |
          Laboratório de Neurofisiologia e Neuroquímica de Excitabilidade Neuronal e Plasticidade Sináptica - UFRGS</p>
          
          </IonSlide>

          <IonSlide className={"slide blue"}>
            
          <img src={distancing} />
          <h2>Distanciamento social</h2>
             
            
              <p className={"slide blue"}>São medidas para aumentar o espaço entre as pessoas e conter a transmissão do vírus. Incluem: 
              
              <ul>
                <li>Evitar contato físico (como apertos de mão e abraços); </li>
                <li>Manter 2m de distância de outras pessoas; </li>
                <li>Trabalhar e estudar de casa; </li>
                <li>Fazer telefonemas e videochamadas ao invés de encontros físicos; </li>
                <li>Cancelar/adiar conferências, festivais e outros eventos com aglomerações. </li>
              </ul> 
              É importante que todos pratiquem distanciamento social, não apenas pessoas doentes.</p>
              <p className={"slide blue"}>Fonte: John Hopkins Medicine.</p>
            
          </IonSlide>

          <IonSlide className={"slide orange"}>

          <img src={quarantine} />
          <h2>Quarentena</h2>

          <p className={"slide orange"}>Medida de algum órgão superior (como o Ministério da Saúde) que determina o isolamento e supervisão de indivíduos ou grupos 
              que possam ter entrado em contato com uma doença contagiosa. 
        </p >
            <p className={"slide orange"}>Ex.: os brasileiros repatriados da China no início da epidemia passaram 14 dias na Base Aérea de Anápolis (GO), em quarentena.</p>
            <p className={"slide orange"}>Fonte: Ministério da Saúde.</p>

       
          </IonSlide>

          <IonSlide className={"slide red"}>
          <img src={isolation}/>
          <h2>Isolamento</h2>
          <p className={"slide red"}>É o recomendado para pessoas diagnosticadas ou com suspeita de COVID-19, de acordo com orientações médicas. O objetivo do 
              isolamento é manter pessoas infectadas com uma doença contagiosa longe de pessoas saudáveis, o que pode acontecer em casa ou 
              em hospitais.
          </p>
          <p className={"slide red"}>Fonte: John Hopkins Medicine.</p>
         
          </IonSlide>
         

       </IonSlides> 
       
      </IonContent>
    </IonPage>
    );

};

export default ExplanationSlides;