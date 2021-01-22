import React, { FormEvent } from "react";
import {StepComponentProps} from "react-step-builder";

import { Steps, Step } from "react-step-builder";

import { IonApp,
    IonItem,
    IonLabel,
    IonInput,
    IonRadioGroup,
    IonListHeader,
    IonRadio,
    IonSelect,
    IonSelectOption,
    IonRange,
    IonButton,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonCheckbox,
    IonList,
    IonDatetime,
    IonSlides,
    IonSlide,
    IonNote,
    IonItemDivider
    
  } from "@ionic/react";
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

  import './Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState, ChangeEvent} from 'react';
import { setConstantValue } from "typescript";


import { object, string, number } from 'yup';

const Step4 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();

    const [nDiasTrabalhoSemana, setNDiasTrabalhoSemana]= useState();
 
    return(
        <IonContent fullscreen> 
        <div>
            <form className={"ion-padding"}>
            
            <IonItem>
            <p>As perguntas a seguir se referem ao seu comportamento de sono nos dias de trabalho e dias livres. Por favor, responda de acordo com o que ocorreu mais frequentemente nas duas últimas semanas. Considere também estudos e seus afazeres de casa. </p>
            <p><b>Por favor, responda todas as questões a seguir utilizando a escala de 24h (por exemplo, 23:00 no lugar de 11:00). Se você é um estudante, preencha os dias de trabalho considerando os dias de aula.</b></p>
            </IonItem>

            <IonItem>
                <IonLabel>Fiz plantão noturno.</IonLabel>
                <IonRadioGroup>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup>
            </IonItem>

            <IonItem>
                <IonLabel>Trabalhei/estudei _ dias por semana.</IonLabel>
                <Controller render={({onChange}) => ( 
                            <IonSelect placeholder="Por favor, selecione..." value={nDiasTrabalhoSemana} onIonChange={e => setNDiasTrabalhoSemana(e.detail.value)}>
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
                            name="sexo"
                            rules={{required: true}}
        
                            />    
            </IonItem>


            {/*DIAS DE TRABALHO ->0 */}

            {nDiasTrabalhoSemana == "0" ?
            <IonList>
                
                <IonItem>
                    <IonLabel>Normalmente dormi às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value) }}></IonDatetime> )} control={control} name={"horárioSonoSemTrabalho"}/>
                </IonItem>
                
                <IonItem>
                    <IonLabel>Normalmente acordei às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value) }}></IonDatetime> )} control={control} name={"horárioAcordouSemTrabalho"}/>
                </IonItem>
               
               
                <IonItem><IonLabel>Usei o despertador:</IonLabel>

                        <Controller render={({onChange})=> (
                        <IonRadioGroup onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value) }}>

                                        <IonItem>
                                        <IonLabel>Sim</IonLabel>
                                        <IonRadio color="primary"></IonRadio>
                                        </IonItem>
                                    
                                        <IonItem>
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio color="primary"></IonRadio>
                                        </IonItem>
                                    
                        </IonRadioGroup> )} control={control} name={"usouDespertador"}/>
            </IonItem>
                
            </IonList> :null} 

            {/*DIAS DE TRABALHO ->MAIS QUE 0 */}

            {((nDiasTrabalhoSemana == "1") || (nDiasTrabalhoSemana == "2") || (nDiasTrabalhoSemana == "3") || (nDiasTrabalhoSemana == "4") || (nDiasTrabalhoSemana == "5")  || (nDiasTrabalhoSemana == "6") || (nDiasTrabalhoSemana == "7"))       ?
            <IonList>

                <IonItem>
                    <IonLabel><b>Em dias de trabalho/estudo</b>, eu normalmente dormi às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value) }}></IonDatetime> )} control={control} name={"horárioSonoTrabalho"}/>
                </IonItem>

                <IonItem>
                    <IonLabel><b>Em dias de trabalho/estudo</b>, eu normalmente acordei às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value) }}></IonDatetime> )} control={control} name={"horárioAcordeiTrabalho"}/>
                </IonItem>

                <IonItem>
                <IonLabel>Usei o despertador em dias de trabalho:</IonLabel>

                        <Controller render={({onChange})=> (
                        <IonRadioGroup onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value) }}>

                                        <IonItem>
                                        <IonLabel>Sim</IonLabel>
                                        <IonRadio color="primary"></IonRadio>
                                        </IonItem>
                                    
                                        <IonItem>
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio color="primary"></IonRadio>
                                        </IonItem>
                                    
                        </IonRadioGroup> )} control={control} name={"usouDespertadorTrabalho"}/>
                </IonItem>

            </IonList> :null}
        

            <IonItem>
                <IonLabel><b>Em dias livres</b>, eu normalmente dormi às: </IonLabel>
                <Controller render={({onChange}) => (
                <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value) }}></IonDatetime> )} control={control} name={"horárioSonoDiasLivres"}/>
            </IonItem>

            <IonItem>
                <IonLabel><b>Em dias livres</b>, quando <b>não usei</b> o despertador eu normalmente acordei às: </IonLabel>
                <Controller render={({onChange}) => (
                <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value) }}></IonDatetime> )} control={control} name={"horárioAcordouDiasLivres"}/>
            </IonItem>

            <IonItem>
                <IonLabel>Usei o despertador em dias livres:</IonLabel>

                <Controller render={({onChange})=> (
                <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value) }}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name={"usouDespertadorDiasLivres"}/>
            </IonItem>



            <IonButton disabled={props.isFirst()}onClick={props.prev}>Anterior</IonButton>
            <IonButton onClick={props.next}>Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step4; 