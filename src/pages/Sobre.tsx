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
          <IonTitle>Sobre</IonTitle>
       
        </IonToolbar>
  
      </IonHeader>
    
      <IonContent fullscreen className="ion-text-center ion-padding">

        <IonGrid>

       <IonCard>
         
       <IonCardTitle>O impacto do distanciamento social nos ritmos biológicos e na saúde mental</IonCardTitle> 
       <p>Texto sobre o aplicativo.</p>

        <IonItem>
    
          
        </IonItem>
        <IonItemDivider>
        <IonItem>
          <div>
          <p>Equipe do estudo <b>O impacto do distanciamento social nos ritmos biológicos e na saúde mental</b></p>
          <p>Laboratório de Cronobiologia e Sono - HCPA/ UFRGS</p>
          <p>Laboratório de Neurofisiologia e Neuroquímica da Excitabilidade Neuronal e Plasticidade Sináptica - UFRGS</p>
          <p>Laboratório de Neurobiologia da Pineal - UNIFESP</p>
          </div>
        </IonItem>
        </IonItemDivider>
       
        <div>
            <img src={logo_crono} width="230px" height="230px"/>
            <img src={logo_clinicas} width="230px" height="230px"/>
            <img src={logo_innovaspace} width="230px" height="230px"/>
            <img src={logo_neurobio} width="230px" height="230px"/>
            <img src={logo_nnnesp} width="230px" height="230px"/>
            <img src={logo_ufrgs} width="230px" height="230px"/>
            <img src={logo_unifesp} width="230px" height="230px"/>
            
        </div>
      
        </IonCard>

        
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Sobre;
