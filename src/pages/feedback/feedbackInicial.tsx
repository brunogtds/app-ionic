import React, {useState } from 'react';
import { IonContent, IonHeader, IonPage,IonToolbar} from '@ionic/react';
import { IonMenuButton, IonButtons} from '@ionic/react';

import logo_regente from '../../img/logo_regente_branco.svg';
import '../Home.css';

import {useUser, SuspenseWithPerf} from 'reactfire';
import firebase from 'firebase';


const FeedbackInicial: React.FC = () => {

    const {data: user}= useUser();
    const db = firebase.firestore();
    const uid= user.uid
 
    async function Idade(){
        const dbRef= await db.collection('users').doc(uid).get();
        const data= (await dbRef).data();
        const data2: any= data;
        const idade= data2.age;

        return <p>Sua idade é {idade}</p>
    }
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="orange">
                    <div id="header-items">
                        <img src={logo_regente} className={"logo"}/>
                        <IonButtons slot="end"> <IonMenuButton id="main"></IonMenuButton> </IonButtons>
                    </div>   
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen color="background">
                <p>página feedback</p>
                <SuspenseWithPerf fallback={'loading burrito status...'} traceId={'loading age status'}>
                    
                </SuspenseWithPerf>
            </IonContent>
        </IonPage>
    )
}

export default FeedbackInicial;