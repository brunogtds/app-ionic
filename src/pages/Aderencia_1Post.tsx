import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';


import './Home.css';


import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonItemDivider, IonButton, IonLoading, IonLabel, IonButtons, IonMenuButton} from '@ionic/react';


import distanciamentoExp from '../../src/img/distanciamentoExp.png';

import social_distancing from '../../src/img/social_distancing.svg';
import distancing from '../../src/img/distancing.svg';
import isolation from '../../src/img/isolation.svg';
import quarantine from '../../src/img/quarantine.svg';

import ExplanationSlides from '../../src/pages/ExplanationSlides';

import {auth} from '../../src/firebaseConfig/firebaseConfig';
import  { Redirect, useHistory } from 'react-router-dom' 

import {logoutUser} from '../../src/firebaseConfig/firebaseConfig';
import { toast } from '../toast';

import {useUser} from 'reactfire';


import {AuthCheck} from 'reactfire';

import logo_clinicas from '../img/logo_clinicas.svg';
import logo_crono from '../img/logo_crono.svg';
import logo_innovaspace from '../img/logo_innovaspace.svg';
import logo_neurobio from '../img/logo_neurobio.svg';
import logo_nnnesp from '../img/logo_nnnesp.svg';
import logo_ufrgs from '../img/logo_ufrgs.svg';
import logo_unifesp from '../img/logo_unifesp.svg';
import logo_regente from '../img/logo_regente_branco.svg';
import Neutro_feliz from '../img/Neutro_feliz.svg';



const Aderencia_1Post: React.FC = () => {

    const history= useHistory();

    function toAderencia_2(){
        history.push('/checkPost');
      }

  return (
    <IonPage>
     <IonHeader>
        <IonToolbar color="orange">
        <div id="header-items">
          <div className={"navigation"}>
          <IonButtons slot="start"> <IonMenuButton id="main"></IonMenuButton> </IonButtons> 
          </div>
          <div className={"img-logo"}>
          <img src={logo_regente} className={"logo"}/>
         </div>
        </div> 
        
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-text-center ion-padding texto-padrão" color="background">
    
      <p className="texto-main aderencia">Acompanhe seu progresso!</p>
      <p className="texto-padrão aderencia ">Obrigado por ter finalizada a segunda etapa da pesquisa! Agora você poderá continuar acompanhando sua meta principal.</p>
        <p className="texto-padrão aderencia ">Pense que para um melhor desempenho, você poderá começar definindo uma meta menor e que seja mais possível de conquistar.</p>
        <p className="texto-padrão aderencia  ">Caso prefira se desafiar mais, após duas semanas você poderá refinar a sua meta principal ou escolher outra.</p>
        <p className="texto-padrão aderencia ">Vamos lá?</p>

        <div>
           <IonButton onClick={toAderencia_2} color="orange" fill="solid" className="button-forms"><div className="texto-button">Começar</div><img className="img-button" src={Neutro_feliz} width="80" height="80"/></IonButton>
        </div>
        

      </IonContent>

    </IonPage>
  );
};

export default Aderencia_1Post;
