import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote, IonTextarea, IonRadioGroup, IonRadio} from "@ionic/react";
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

const Step1P2 = (props: StepComponentProps) => {

    const {data: user}= useUser();
    const [dataUser, setData] = useState()


                                  
  const {control, watch, handleSubmit} = useForm();
  const [medsChange, setmedsChange] = useState();
  const [selectedMedsNoOrientation, setSelectedMedsNoOrientation] = useState();

  function createDatabaseQuest2(){
    

    if(user){
        firebase.firestore().collection('usersPost').doc(user.uid).set({
            email: user.email, }, { merge: true }); 
    }
 }

 if (user){
    createDatabaseQuest2();
  }
           


    return (
        <IonContent fullscreen>
        <div>
        
                <form className="ion-padding" >

                        <IonProgressBar value={0.16} buffer={0.16}></IonProgressBar>

                        <IonItem>
                            <IonLabel position="floating">Peso (em kg):</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonInput id="weightPost" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('weightPost', e.detail.value ) }} />
                            )}
                            name="weightPost"
                            control={control} />
                            <IonNote >Se você não sabe seu peso exato, pode ser um valor aproximado.</IonNote>
                         </IonItem>

                        <IonItem>
                         <IonLabel>Você teve alguma doença diagnosticada depois que entrou no estudo?</IonLabel>

                            <Controller render={({onChange}) => (
                            
                            <IonList>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disordersChange", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disordersChange', 'nenhuma' ) }}></IonCheckbox>
                            <IonLabel>Nenhuma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disordersChange', 'diabetes' ) }}></IonCheckbox>
                            <IonLabel>Diabetes</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disordersChange', 'hipertensão' ) }}></IonCheckbox>
                            <IonLabel>Hipertensão</IonLabel>
                            </IonItem>
                            
                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disordersChange', 'asma' ) }}></IonCheckbox>
                            <IonLabel>Asma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disordersChange', 'depressão' ) }}></IonCheckbox>
                            <IonLabel>Depressão</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disordersChange', 'imunodeficiência' ) }}></IonCheckbox>
                            <IonLabel>Imunodeficiência</IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>Outros: </IonLabel>
                                <IonInput value= {props.getState("disordersChange", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}/>
                            </IonItem>
                            </IonList>
                            )}
                            control={control}
                            name={"disordersChange"}
                            />
                        </IonItem>

                        <IonList>
                        <IonItem>
                            <IonLabel>Você começou a fazer uso frequente de alguma medicação por orientação médica,
                                depois que entrou no estudo?
                            </IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={medsChange} onIonChange={(e) => {setmedsChange(e.detail.value); 
                                if (e.detail.value != undefined) 
                                props.setState('medsChange', e.detail.value )  }}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem> 
                                
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem> 
                            </IonRadioGroup>
                            )}
                            control={control}
                            name={"medsChange"}
                            />
                        </IonItem>
                      
                        {medsChange === "sim" ?
                        
                        <IonItem>
                            <Controller render={({onChange}) => (
                            <IonTextarea placeholder="Quais medicações?" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('medsUsedChange', e.detail.value ) }}/> )} control={control} name={'medsUsedChange'} />
                        </IonItem> : null
                        }
                       </IonList>
       
                        <IonList>
                        <IonItem>
                            <IonLabel>Você começou a fazer uso frequente de alguma medicação sem orientação médica,
                                depois que entrou no estudo?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={selectedMedsNoOrientation} onIonChange={(e) => {setSelectedMedsNoOrientation(e.detail.value); 
                                if (e.detail.value != undefined) 
                                props.setState('medsOffChange', e.detail.value )}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup>
                            )}
                            control={control}
                            name={"medsOffChange"} 
                            />
                        </IonItem>

                        {selectedMedsNoOrientation === "sim" ?
                        <IonItem>
                            <Controller render={({onChange}) => (
                            <IonTextarea placeholder="Quais medicações?" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('medsOffUsedChange', e.detail.value ) }}/> )} control={control} name={'medsOffUsedChange'}/>
                        </IonItem>: null }
                        </IonList> 

                        <IonItem>
                            <IonLabel>Você fez psicoterapia nas últimas 6 semanas? </IonLabel>

                            <Controller render={({onChange}) => (
                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("psychotherPost", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('psychotherPost', 'não' )  }}></IonCheckbox>
                                <IonLabel >Não</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("psychotherPost", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('psychotherPost', 'sim, on-line' )  }}></IonCheckbox>
                                <IonLabel>Sim, on-line</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("psychotherPost", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('psychotherPost', 'sim, presencial' )  }}></IonCheckbox>
                                <IonLabel>Sim, presencial</IonLabel>
                                </IonItem>

                             </IonList>
                             )} 
                             control={control}
                             name={"psychotherPost"}
                             />
                         </IonItem>

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

                            
                        
                         <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
                         <IonButton onClick={props.next} className={"btnProximo"} size="large" >Próximo</IonButton>
                        
                         
                </form>
           
        </div>
        </IonContent>
    )


}

export default Step1P2;