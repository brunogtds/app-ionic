import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonIcon, IonLabel, IonNote} from '@ionic/react';

import '../Forms.css';

import { IonButton} from '@ionic/react';

import  {Redirect, useHistory } from 'react-router-dom' 

import {useUser} from 'reactfire';

import {AuthCheck} from 'reactfire';

import thinking from '../../../img/thinking.png';

import {alarm, document} from  'ionicons/icons';

import {personOutline, peopleOutline, bedOutline, walkOutline, documentOutline} from  'ionicons/icons';
import { PropTypes } from 'mobx-react';


const ModulosSonoSintomas: React.FC = () => {

  const history= useHistory();

  function sono(){
    history.push('/sono');
  }

  function sintomas(){
    history.push('/sintomas');
  }

  

  const [modulo1Enviado, setModulo1Enviado] = React.useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id="ion-toolbar-formulario">
          <IonTitle><b>FORMULÁRIOS</b></IonTitle>
        </IonToolbar>
       
      </IonHeader>
     
      <IonContent fullscreen className="ion-text-center ion-padding" color="light">
        <div className="ion-text-center">
           
            <div id="outer">
            <div id="inner-modules">

            <div>
            <IonButton  onClick={sono} color="tertiary" fill="outline" shape="round" id="button-forms-sono">  <IonIcon slot="start" icon={personOutline}/>Sono</IonButton></div>
     
            <div>
            <IonButton  onClick={sintomas} color="tertiary" fill="outline" shape="round" id="button-forms-sintomas"><IonIcon slot="start" icon={walkOutline}/><div>Sintomas</div></IonButton>
            </div>
     
           </div> 
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ModulosSonoSintomas;
