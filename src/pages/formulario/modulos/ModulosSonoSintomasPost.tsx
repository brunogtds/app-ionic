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


const ModulosSonoSintomasPost: React.FC = () => {

  const history= useHistory();

  function sono(){
    history.push('/sonoPost');
  }

  function sintomas(){
    history.push('/sintomasPost');
  }

  

  const [moduloSonoPostEnviado, setSonoPostEnviado] = React.useState(false);
  const [moduloSintomasPostEnviado, setSintomasPostEnviado] = React.useState(false);

  const {data: user}= useUser();
  const db = firebase.firestore();

  async function getSonoPostDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSonoPost = data2.dateSonoPost;
    
    
    if (!(dataSonoPost === undefined)){
      setSonoPostEnviado(true)
    }
  }

  async function getSintomasPostDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSintomasPost = data2.dateSintomasPostModule1;
    
    if (!(dataSintomasPost === undefined)){
      setSintomasPostEnviado(true)
    }
  }

  //Checking the dates
  getSonoPostDate()
  getSintomasPostDate()

  console.log("sintomas" + moduloSintomasPostEnviado)

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
            <IonButton disabled={moduloSonoPostEnviado} onClick={sono} color="tertiary" fill="outline" shape="round" id="button-forms-sono">  <IonIcon slot="start" icon={personOutline}/>Sono</IonButton></div>
     
            <div>
            <IonButton disabled={!moduloSonoPostEnviado || moduloSintomasPostEnviado}  onClick={sintomas} color="tertiary" fill="outline" shape="round" id="button-forms-sintomas"><IonIcon slot="start" icon={walkOutline}/><div>Sintomas</div></IonButton>
            </div>
     
           </div> 
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ModulosSonoSintomasPost;
