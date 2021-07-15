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


const ModulosSonoSintomas: React.FC = () => {

  const history= useHistory();

  function sono(){
    history.push('/sono');
  }

  function sintomas(){
    history.push('/sintomas');
  }

  

  const [moduloSonoEnviado, setSonoModulo1Enviado] = React.useState(false);
  const [moduloSintomasEnviado, setSintomasModulo1Enviado] = React.useState(false);

  const {data: user}= useUser();
  const db = firebase.firestore();

  async function getSonoDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSono = data2.dateSonoModule1;
    
    
    if (!(dataSono === undefined)){
      setSonoModulo1Enviado(true)
    }
  }

  async function getSintomasDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSintomas = data2.dateSintomasModule1;
    
    if (!(dataSintomas === undefined)){
      setSintomasModulo1Enviado(true)
    }
  }

  //Checking the dates
  getSonoDate()
  getSintomasDate()

  console.log("sintomas" + moduloSintomasEnviado)

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
            <IonButton disabled={moduloSonoEnviado} onClick={sono} color="tertiary" fill="outline" shape="round" id="button-forms-sono">  <IonIcon slot="start" icon={personOutline}/>Sono</IonButton></div>
     
            <div>
            <IonButton disabled={!moduloSonoEnviado || moduloSintomasEnviado}  onClick={sintomas} color="tertiary" fill="outline" shape="round" id="button-forms-sintomas"><IonIcon slot="start" icon={walkOutline}/><div>Sintomas</div></IonButton>
            </div>
     
           </div> 
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ModulosSonoSintomas;
