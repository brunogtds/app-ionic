import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonIcon, IonLabel, IonNote} from '@ionic/react';

import '../Forms.css';

import { IonButton} from '@ionic/react';

import  {Redirect, useHistory } from 'react-router-dom' 

import {useUser,  useFirestoreDocData, useFirestore, useFirestoreDoc, useFirestoreCollectionData, useFirebaseApp} from 'reactfire';

import {AuthCheck} from 'reactfire';

import thinking from '../../../img/thinking.png';

import {alarm, document} from  'ionicons/icons';

import {personOutline, peopleOutline, bedOutline, walkOutline, documentOutline} from  'ionicons/icons';
import { PropTypes } from 'mobx-react';

import ModuloComponentsProps from "./ModulosComponent"
import {StepComponentProps} from "react-step-builder";
import { AnyAaaaRecord } from 'dns';
import firebase from 'firebase';


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

  const [moduloSaudeEnviado, setSaudeModulo1Enviado] = React.useState(false);
  const [moduloContatoEnviado, setContatoModulo1Enviado] = React.useState(false);
  const [moduloHabitosEnviado, setHabitosModulo1Enviado] = React.useState(false);
  const [moduloSonoSintomasEnviado, setSonoSintomasModulo1Enviado] = React.useState(false);

  const {data: user}= useUser();
  const db = firebase.firestore();

  async function getSaudeDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSaude= data2.dateSaudeModule1;
    
    if (!(dataSaude === undefined)){
      setSaudeModulo1Enviado(true)
    }
  }

  async function getContatoDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataContato= data2.dateContatoModule1;
    
    if (!(dataContato === undefined)){
      setContatoModulo1Enviado(true)
    }
  }

  async function getSonoSintomasDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSono = data2.dateSonoModule1;
    const dataSintomas = data2.dateSintomasModule1;
    
    if (!(dataSono === undefined || dataSintomas === undefined)){
      setSonoSintomasModulo1Enviado(true)
    }
  }

  async function getHabitosDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataHabitos = data2.dateHabitosModule1;
    
    if (!(dataHabitos === undefined)){
      setHabitosModulo1Enviado(true)
    }
  }

  //Checking the dates
  getSaudeDate()
  getContatoDate()
  getHabitosDate()
  getSonoSintomasDate()

  

  
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
            <IonButton disabled={moduloSaudeEnviado} onClick={saude} color="white" fill="solid" shape="round" id="button-forms-saude"><IonIcon slot="start" icon={walkOutline}/><div>Saúde</div></IonButton>
            </div>
           
            <div>
            <IonButton disabled={moduloContatoEnviado || !moduloSaudeEnviado} onClick={contato} color="white" fill="solid" shape="round" id="button-forms-social"><IonIcon slot="start" icon={peopleOutline}/><div>Contato social</div></IonButton> 
            </div>

            <div>
            <IonButton disabled={moduloHabitosEnviado || !moduloContatoEnviado} onClick={habitos} color="white" fill="solid" shape="round" id="button-forms-habitos"><IonIcon slot="start" icon={peopleOutline}/><div>Hábitos</div></IonButton> 
            </div>

            <div>
            <IonButton disabled={moduloSonoSintomasEnviado || !moduloHabitosEnviado} onClick={sonoSintomas} color="white" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={bedOutline}/><div>Sono e sintomas</div></IonButton> 
            </div>
            
           </div> 
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Modulos;
