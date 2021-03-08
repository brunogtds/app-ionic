import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote, IonRow, IonCol, IonRadio, IonRadioGroup} from "@ionic/react";
import { IonContent} from '@ionic/react';
import '../Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';


import { IonProgressBar} from '@ionic/react';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';

/*STEP 1 => Página 1 do formulário
Se user autenticado entrou aqui -> createDataBaseQuest 1 cria a entrada na tabela users no Firebase  */

const Step5P2 = (props: StepComponentProps) => {

    const {data: user}= useUser();
    const [dataUser, setData] = useState()

    const [nDiasTrabalhoSemanaPre, setNDiasTrabalhoSemanaPre]= useState();


                                  
  const {control, watch, handleSubmit} = useForm();

    

    return (
        <IonContent fullscreen>
        <div>
        
                <form className="ion-padding">

                        <IonProgressBar value={0.80} buffer={0.80}></IonProgressBar>

                        <IonItem>
                            <IonRow>
                                <IonCol>
                                    <div>
                                    <p>Por fim, gostaríamos também de saber como era seu sono antes da pandemia. As perguntas a seguir se referem ao seu comportamento de sono nos dias de trabalho e dias livres. Por favor, responda de acordo com o que ocorreu mais frequentemente nas duas últimas semanas. Considere também estudos e seus afazeres de casa. </p>
                                    </div>
                                </IonCol>
                                <IonCol>
                                    <div>
                                    <p><b>Por favor, responda todas as questões a seguir utilizando a escala de 24h (por exemplo, 23:00 no lugar de 11:00). Se você é um estudante, preencha os dias de trabalho considerando os dias de aula.</b></p>
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonItem>

                        <IonItem>
                            <IonLabel>Fazia plantão noturno antes da pandemia.</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonRadioGroup  onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('nightShiftPre', e.detail.value )  }}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                             </IonRadioGroup>  )}
                             control={control}
                             name={"nightShiftPre"}
                             />
                        </IonItem>

                        <IonItem>
                        <IonLabel>Trabalhava/estudava _ dias por semana.</IonLabel>
                        <Controller render={({onChange}) => ( 
                            <IonSelect placeholder="Por favor, selecione..." value={nDiasTrabalhoSemanaPre} onIonChange={(e) => {setNDiasTrabalhoSemanaPre(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('workDaysNPre', e.detail.value )  }}>
                                    <IonSelectOption value="0">0</IonSelectOption>
                                    <IonSelectOption value="1">1</IonSelectOption>
                                    <IonSelectOption value="2">2</IonSelectOption>
                                    <IonSelectOption value="3">3</IonSelectOption>
                                    <IonSelectOption value="4">4</IonSelectOption>
                                    <IonSelectOption value="5">5</IonSelectOption>
                                    <IonSelectOption value="6">6</IonSelectOption>
                                    <IonSelectOption value="7">7</IonSelectOption>
                        </IonSelect> 
                            

                            )}

                            control={control}
                            name="workDaysNPre"
                            rules={{required: true}}
        
                            />    
                        </IonItem>

                        
            {((nDiasTrabalhoSemanaPre == "1") || (nDiasTrabalhoSemanaPre == "2") || (nDiasTrabalhoSemanaPre == "3") || (nDiasTrabalhoSemanaPre == "4") || (nDiasTrabalhoSemanaPre == "5")  || (nDiasTrabalhoSemanaPre == "6") || (nDiasTrabalhoSemanaPre == "7"))       ?
            <IonList>

                <IonItem>
                    <IonLabel><b>Em dias de trabalho/estudo</b>, eu normalmente dormia às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) 
                    props.setState('sleepWDPre', e.detail.value )}}></IonDatetime> )} control={control} name={"sleepWDPre"}/>
                </IonItem>

                <IonItem>
                    <IonLabel><b>Em dias de trabalho/estudo</b>, eu normalmente acordei às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('wakeUpWDPre', e.detail.value ) }}></IonDatetime> )} control={control} name={"wakeUpWDPre"}/>
                </IonItem>

                <IonItem>
                <IonLabel>Usei o despertador em dias de trabalho:</IonLabel>

                        <Controller render={({onChange})=> (
                        <IonRadioGroup onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('alarmWDPre', e.detail.value ) }}>

                                        <IonItem>
                                        <IonLabel>Sim</IonLabel>
                                        <IonRadio color="primary" value="sim"></IonRadio>
                                        </IonItem>
                                    
                                        <IonItem>
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio color="primary" value="não"></IonRadio>
                                        </IonItem>
                                    
                        </IonRadioGroup> )} control={control} name={"alarmWDPre"}/>
                </IonItem>

            </IonList> :null}

            {nDiasTrabalhoSemanaPre === "0" ?
            <IonList>
                
                <IonItem>
                    <IonLabel>Normalmente dormi às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('sleepNoWorkWD', e.detail.value )  }}></IonDatetime> )} control={control} name={"sleepNoWorkWD"}/>
                </IonItem>
                
                <IonItem>
                    <IonLabel>Normalmente acordei às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('wakeUpNoWorkWD', e.detail.value )  }}></IonDatetime> )} control={control} name={"wakeUpNoWorkWD"}/>
                </IonItem>
               
               
                <IonItem><IonLabel>Usei o despertador:</IonLabel>

                        <Controller render={({onChange})=> (
                        <IonRadioGroup onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('alarmNoWorkWD', e.detail.value ) }}>

                                        <IonItem>
                                        <IonLabel>Sim</IonLabel>
                                        <IonRadio color="primary" value="sim"></IonRadio>
                                        </IonItem>
                                    
                                        <IonItem>
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio color="primary" value="não"></IonRadio>
                                        </IonItem>
                                    
                        </IonRadioGroup> )} control={control} name={"alarmNoWorkWD"}/>
            </IonItem>
                
            </IonList> :null} 

            <IonItem>
                <IonLabel><b>Em dias livres</b>, eu normalmente dormi às: </IonLabel>
                <Controller render={({onChange}) => (
                <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) 
                    props.setState('sleepFDPre', e.detail.value )}}></IonDatetime> )} control={control} name={"sleepFDPre"}/>
            </IonItem>

            <IonItem>
                <IonLabel><b>Em dias livres</b>, quando <b>não usei</b> o despertador eu normalmente acordei às: </IonLabel>
                <Controller render={({onChange}) => (
                <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('wakeUpFDPre', e.detail.value ) }}></IonDatetime> )} control={control} name={"wakeUpFDPre"}/>
            </IonItem>

            <IonItem>
                <IonLabel>Usei o despertador em dias livres:</IonLabel>

                <Controller render={({onChange})=> (
                <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('alarmFDPre', e.detail.value ) }}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name={"alarmFDPre"}/>
            </IonItem>

            <IonItem>
                <IonLabel>Como você classificaria a qualidade do seu sono antes da pandemia?</IonLabel>
                <Controller render={({onChange}) => (

                    <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                        console.log(e);
                        onChange(e.detail.value);
                        if (e.detail.value != undefined) 
                        props.setState('sleepQualPre', e.detail.value ); 
                    }}>
                    <IonSelectOption value="0" >Muito boa</IonSelectOption>
                    <IonSelectOption value="1" >Boa</IonSelectOption>
                    <IonSelectOption value="2" >Ruim</IonSelectOption>
                    <IonSelectOption value="3" >Muito ruim</IonSelectOption>
                    </IonSelect> )} control={control} name={'sleepQualPre'}/>
            </IonItem>

                        
                         <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
                         <IonButton onClick={props.next} className={"btnProximo"} size="large" >Próximo</IonButton>
                        
                         
                </form>
           
        </div>
        </IonContent>
    )


}

export default Step5P2;