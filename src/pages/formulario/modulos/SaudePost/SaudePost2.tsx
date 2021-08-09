import React from "react";
import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonLoading} from "@ionic/react";
import { IonContent, IonText} from '@ionic/react';
import firebase from "firebase";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { StepComponentProps } from "react-step-builder";
import { useUser } from "reactfire";
import { toast } from "../../../../toast";
import '../../Forms.css';

const SaudePost2 = (props: StepComponentProps) => {

    const {control, handleSubmit, errors, formState} = useForm({mode: "onChange"});
 
    const [fuma, setFuma] = useState();
    const [fumou, setFumou] = useState();
    const [bebe, setBebe]= useState();
    const [drogas, setDrogas]= useState();
    const [estimulantes, setEstimulantes]= useState();
 
    const {data: user}= useUser();
    const [dataUser, setData] = useState()
 
    const history= useHistory();
    const [loader, setLoader]= useState<boolean>(false)
 
    async function updateUserDataQuest2(dataUser: any){

        if(user){
            firebase.firestore().collection('usersPost').doc(user.uid).set({
                weightPost: Number(props.state.weightPost), //STEP 1
                disordersChange: String(props.state.disordersChange), 
                medsChange: String(props.state.medsChange),
                medsUsedChange: String(props.state.medsUsedChange),
                medsOffChange: String(props.state.medsOffChange),
                medsOffUsedChange: String(props.state.medsOffUsedChange),
                psychotherPost: String(props.state.psychotherPost),
                alcoholChange: Number(props.state.alcoholChange),
                stimulantsChange: Number(props.state.stimulantsChange),
                smokeChange: Number(props.state.smokeChange),
                dateSaudePost: new Date(),
            }, {merge: true})
        
            toast('Formulário submetido com sucesso!', 4000);   
        }
    }

    async function createDatabaseQuest2(){
        if(user){
            firebase.firestore().collection('usersPost').doc(user.uid).set({
                email: user.email, }, { merge: true }); 
        }
    }
    
    function voltaModulos (){
        history.push('/tab1');
    }
        
    const onSubmit = (data: any) => {
        setData(dataUser);
        setLoader(true);
        createDatabaseQuest2();
        updateUserDataQuest2(dataUser);
        voltaModulos();
    }

    return(
        <IonContent fullscreen color="light">
        <div>
        
            <form className="ion-padding" onSubmit={handleSubmit(onSubmit)}>
            <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

                <IonItem>
                    <IonLabel>O seu consumo de bebidas alcóolicas, em comparação a antes da pandemia:</IonLabel>
                    
                    <Controller render={({onChange}) => (
                    <IonRadioGroup onIonChange={(e) => {
                        console.log(e);
                        onChange(e.detail.value);
                        if (e.detail.value != undefined) 
                        props.setState('alcoholChange', e.detail.value ); 
                    }}>

                        <IonItem>
                        <IonLabel>Não mudou</IonLabel>
                        <IonRadio color="primary" value="0"></IonRadio>
                        </IonItem>
                        
                        <IonItem>
                        <IonLabel>Diminuiu</IonLabel>
                        <IonRadio color="primary" value="1"></IonRadio>
                        </IonItem>

                        <IonItem>
                        <IonLabel>Aumentou</IonLabel>
                        <IonRadio color="primary" value="2"></IonRadio>
                        </IonItem>
                    </IonRadioGroup>
                    )}
                    control={control}
                    name={"alcoholChange"} 
                    />
                </IonItem>

                <IonItem>
                    <IonLabel>O seu consumo de estimulantes (café, chimarrão), em comparação a antes da pandemia:</IonLabel>
                    
                    <Controller render={({onChange}) => (
                    <IonRadioGroup onIonChange={(e) => {
                        console.log(e);
                        onChange(e.detail.value);
                        if (e.detail.value != undefined) 
                        props.setState('stimulantsChange', e.detail.value ); 
                    }}>

                        <IonItem>
                        <IonLabel>Não mudou</IonLabel>
                        <IonRadio color="primary" value="0"></IonRadio>
                        </IonItem>
                        
                        <IonItem>
                        <IonLabel>Diminuiu</IonLabel>
                        <IonRadio color="primary" value="1"></IonRadio>
                        </IonItem>

                        <IonItem>
                        <IonLabel>Aumentou</IonLabel>
                        <IonRadio color="primary" value="2"></IonRadio>
                        </IonItem>
                    </IonRadioGroup>
                    )}
                    control={control}
                    name={"stimulantsChange"} 
                    />
                </IonItem>

                <IonItem>
                    <IonLabel>Se você fuma, em comparação a antes da pandemia, o número de cigarros que você fuma por dia:</IonLabel>
                    
                    <Controller render={({onChange}) => (
                    <IonRadioGroup onIonChange={(e) => {
                        console.log(e);
                        onChange(e.detail.value);
                        if (e.detail.value != undefined) 
                        props.setState('smokeChange', e.detail.value ); 
                    }}>

                        <IonItem>
                        <IonLabel>Não mudou</IonLabel>
                        <IonRadio color="primary" value="0"></IonRadio>
                        </IonItem>
                        
                        <IonItem>
                        <IonLabel>Diminuiu</IonLabel>
                        <IonRadio color="primary" value="1"></IonRadio>
                        </IonItem>

                        <IonItem>
                        <IonLabel>Aumentou</IonLabel>
                        <IonRadio color="primary" value="2"></IonRadio>
                        </IonItem>

                        <IonItem>
                        <IonLabel>Não fumo</IonLabel>
                        <IonRadio color="primary" value="888"></IonRadio>
                        </IonItem>
                    </IonRadioGroup>
                    )}
                    control={control}
                    name={"smokeChange"} 
                    />
                </IonItem>

                <IonButton onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
                <IonButton disabled={formState.isValid === false} onClick={onSubmit} size="large" fill="clear" className={"btnProximo"}>Submeter</IonButton>

                </form>

            </div>
            </IonContent>
    )
}

export default SaudePost2;