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
import firebase from 'firebase';


const ModulosSonoSintomasFinal: React.FC = () => {

  const history= useHistory();

  function sono(){
    history.push('/sonoFinal');
  }

  function sintomas(){
    history.push('/sintomasFinal');
  }

  

  const [moduloSonoFinalEnviado, setSonoFinalEnviado] = React.useState(false);
  const [moduloSintomasFinalEnviado, setSintomasFinalEnviado] = React.useState(false);

  const {data: user}= useUser();
  const db = firebase.firestore();

  async function getSonoFinalDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSonoFinal = data2.dateSonoFinal;
    
    
    if (!(dataSonoFinal === undefined)){
      setSonoFinalEnviado(true)
    }
  }

  async function getSintomasFinalDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSintomasFinal = data2.dateSintomasFinal;
    
    if (!(dataSintomasFinal === undefined)){
      setSintomasFinalEnviado(true)
    }
  }

  //Checking the dates
  getSonoFinalDate()
  getSintomasFinalDate()

  console.log("sintomas" + moduloSintomasFinalEnviado)

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
            <IonButton disabled={moduloSonoFinalEnviado} onClick={sono} color="tertiary" fill="outline" shape="round" id="button-forms-sono">  <IonIcon slot="start" icon={personOutline}/>Sono</IonButton></div>
     
            <div>
            <IonButton disabled={!moduloSonoFinalEnviado || moduloSintomasFinalEnviado}  onClick={sintomas} color="tertiary" fill="outline" shape="round" id="button-forms-sintomas"><IonIcon slot="start" icon={walkOutline}/><div>Sintomas</div></IonButton>
            </div>
     
           </div> 
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ModulosSonoSintomasFinal;
