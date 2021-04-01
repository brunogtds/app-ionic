import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';


import './Home.css';


import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonItemDivider, IonButton, IonLoading, IonLabel} from '@ionic/react';


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


const Sobre: React.FC = () => {

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar>
          <IonTitle><b>AppSono</b></IonTitle>
       
        </IonToolbar>
  
      </IonHeader>
    
      <IonContent fullscreen className="ion-padding">

        <IonGrid>

       <IonCard>

      <IonCardHeader>
       <IonCardTitle>Sobre o aplicativo</IonCardTitle> 
       </IonCardHeader> 
       <IonCardContent>
       Texto sobre o aplicativo.
       
          <div>
         Equipe do estudo <b>O impacto do distanciamento social nos ritmos biológicos e na saúde mental</b></div>
         <div>
          Laboratório de Cronobiologia e Sono - HCPA/ UFRGS
          </div>
          <div>
          Laboratório de Neurofisiologia e Neuroquímica da Excitabilidade Neuronal e Plasticidade Sináptica - UFRGS
          </div>
          <div>
          Laboratório de Neurobiologia da Pineal - UNIFESP
          </div>
       
        <IonItem>
        <div>
            <img src={logo_crono} width="210px" height="230px"/>
            <img src={logo_clinicas} width="210px" height="230px"/>
            <img src={logo_innovaspace} width="210px" height="230px"/>
            <img src={logo_neurobio} width="210px" height="230px"/>
            <img src={logo_nnnesp} width="210px" height="230px"/>
            <img src={logo_ufrgs} width="210px" height="230px"/>
            <img src={logo_unifesp} width="210px" height="230px"/>
            
        </div>
        </IonItem>
       </IonCardContent>
  
        </IonCard>

        
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Sobre;
