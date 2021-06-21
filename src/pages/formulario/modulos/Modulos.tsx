import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonIcon, IonLabel, IonNote} from '@ionic/react';

import '../Forms.css';

import { IonButton} from '@ionic/react';

import  {Redirect, useHistory } from 'react-router-dom' 

import {useUser,  useFirestoreDocData, useFirestore, useFirestoreDoc} from 'reactfire';

import {AuthCheck} from 'reactfire';

import thinking from '../../../img/thinking.png';

import {alarm, document} from  'ionicons/icons';

import {personOutline, peopleOutline, bedOutline, walkOutline, documentOutline} from  'ionicons/icons';
import { PropTypes } from 'mobx-react';
import firebase from 'firebase';
import "firebase/firestore";

import ModuloComponentsProps from "./ModulosComponent"
import {StepComponentProps} from "react-step-builder";

const Modulos= (props: StepComponentProps) => {

  const history= useHistory();

  function saude(){
    history.push('/saude');
  }

  function contato(){
    
    history.push('/contatosocial')
   
  }

  function habitos(){
    history.push('/habitos');
  }

  function sonoSintomas(){
    history.push('/sonosintomas');
  }

  
  

  const [moduloSaudeEnviado, setModulo1Enviado] = React.useState(false);
  const [moduloContatoEnviado, setModuloContatoEnviado] = React.useState(false);
  const [moduloHabitosEnviado, setModuloHabitosEnviado] = React.useState(false);
  const [moduloSonoSintomasEnviado, setSonoSintomasEnviado] = React.useState(false);
  const {data: user}= useUser();
 

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
            <IonButton disabled={props.isSaudeDisabled === false} onClick={saude} color="white" fill="solid" shape="round" id="button-forms-saude"><IonIcon slot="start" icon={walkOutline}/><div>Saúde</div></IonButton>
            </div>
           
            <div>
            <IonButton disabled={props.isContatoDisabled === true} onClick={contato} color="white" fill="solid" shape="round" id="button-forms-social"><IonIcon slot="start" icon={peopleOutline}/><div>Contato social</div></IonButton> 
            </div>

            <div>
            <IonButton disabled={props.isHabitosDisabled === true} onClick={habitos} color="white" fill="solid" shape="round" id="button-forms-habitos"><IonIcon slot="start" icon={peopleOutline}/><div>Hábitos</div></IonButton> 
            </div>

            <div>
            <IonButton disabled={props.isSonoDisabled === true} onClick={sonoSintomas} color="white" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={bedOutline}/><div>Sono e sintomas</div></IonButton> 
            </div>
            
           </div> 
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Modulos;
