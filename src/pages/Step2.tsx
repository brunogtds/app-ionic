import React from "react";
import {StepComponentProps} from "react-step-builder";

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
    IonTextarea,
  
  
    
  } from "@ionic/react";
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


  import {checkmark, close } from  'ionicons/icons';
  import './Forms.css';

  import { useForm, Controller } from "react-hook-form";
  import {useState, ChangeEvent} from 'react';

  import { IonProgressBar} from '@ionic/react';


const Step2 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();

   {/* const watchGender= watch("sexo", ""); */}

   const [showOptions, setShowOptions] = React.useState(false);

   const [selected, setSelected] = useState();
   const [selectedNoOrientation, setSelectedNoOrientation] = useState();

   const [fuma, setFuma] = useState();
   const [fumou, setFumou] = useState();
   const [bebe, setBebe]= useState();
   const [drogas, setDrogas]= useState();
   const [estimulantes, setEstimulantes]= useState();

    return (
        <IonContent fullscreen>
        <div>
           
             <form className="ion-padding">
             <IonProgressBar value={0.2} buffer={0.2}></IonProgressBar>
             <IonItem>
                        
                        
                        <IonLabel>Doenças diagnosticadas:</IonLabel>

                            <Controller render={({onChange}) => (
                            
                            <IonList>

                            <IonItem>
                            <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                            <IonLabel>Nenhuma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                            <IonLabel>Diabetes</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                            <IonLabel>Hipertensão</IonLabel>
                            </IonItem>
                            
                            <IonItem>
                            <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                            <IonLabel>Asma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                            <IonLabel>Depressão</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                            <IonLabel>Imunodeficiência</IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>Outros: </IonLabel>
                                <IonInput onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}/>
                            </IonItem>
                            </IonList>
                            )}
                            control={control}
                            name={"doençasDiagnosticadas"}
                            />
                        </IonItem>


                        <IonList>
                        <IonItem>
                            <IonLabel>Você faz uso frequente de medicações por orientação médica?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>

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
                            name={"medicaçãoOrientaçãoMédica"}
                            />
                        </IonItem>
                      
                        {selected == "sim" ?
                        
                        <IonItem>
                            <Controller render={({onChange}) => (
                            <IonTextarea placeholder="Quais medicações?" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}/> )} control={control} name={"medicaçõesSemOrientação"} />
                        </IonItem> : null
                        }
                       </IonList>
       
                        <IonList>
                        <IonItem>
                            <IonLabel>Você faz uso frequente de medicações sem orientação médica?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={selectedNoOrientation} onIonChange={e => setSelectedNoOrientation(e.detail.value)}>

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
                            name={"medicaçãoSemOrientaçãoMédica"} 
                            />
                        </IonItem>

                        {selectedNoOrientation == "sim" ?
                        <IonItem>
                            <Controller render={({onChange}) => (
                            <IonTextarea placeholder="Quais medicações?" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}/> )} control={control} name={"medicaçõesComOrientação"}/>
                        </IonItem>: null }
                        </IonList> 

                        <IonItem>
                            <IonLabel>Você fez psicoterapia nas últimas duas semanas? </IonLabel>

                            <Controller render={({onChange}) => (
                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                                <IonLabel >Não</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                                <IonLabel>Sim, on-line</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                                <IonLabel>Sim, presencial</IonLabel>
                                </IonItem>

                             </IonList>
                             )} 
                             control={control}
                             name={"psicoterapia"}
                             />
                         </IonItem>

                        <IonList>
                         <IonItem>
                            <IonLabel>Você fuma?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={fuma} onIonChange={e => setFuma(e.detail.value)}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value={"sim"}></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value={"não"}></IonRadio>
                                </IonItem>
                            </IonRadioGroup>
                            )} control={control} name={"fuma"}/>
                        </IonItem>

                        {/*VOCÊ FUMA? -> SIM */}

                        {fuma == "sim" ? 
                        <IonItem>
                            <IonLabel>Quantos cigarros você fuma por dia?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Menos que uma carteira de cigarro por dia</IonSelectOption>
                            <IonSelectOption>Uma a duas carteiras de cigarro por dia</IonSelectOption>
                            <IonSelectOption>Mais que duas carteiras de cigarro por dia</IonSelectOption>
                            
                            </IonSelect>
                          </IonItem> : null}

                        {fuma == "sim" ? 
                        <IonItem>
                            <IonLabel>Há quanto tempo você fuma? (em anos) </IonLabel>
                            <IonInput/> 
                        </IonItem>: null}

                         {/*VOCÊ FUMA? -> SIM */}
                        
                        {/*VOCÊ FUMA? -> NÃO */}
                        </IonList>               
                       
                        <IonList>
                        <IonItem>
                            <IonLabel>Você fumou antes?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={fumou} onIonChange={e => setFumou(e.detail.value)}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value={"sim"}></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value={"não"}></IonRadio>
                                </IonItem>
                            </IonRadioGroup>
                            )} control={control} name={"fumou"}/>
                        </IonItem>
                        
                        {/*VOCÊ FUMOU ANTES? -> SIM */}

                        {fumou == "sim" ?
                        <IonItem>
                            <IonLabel>Quantos cigarros você fumava por dia?</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Menos que uma carteira de cigarro por dia</IonSelectOption>
                            <IonSelectOption>Uma a duas carteiras de cigarro por dia</IonSelectOption>
                            <IonSelectOption>Mais que duas carteiras de cigarro por dia</IonSelectOption>
                            
                            </IonSelect> )} control={control} name={"nCigarros"} />
                          </IonItem> :null  }

                        {fumou == "sim" ? 
                          <IonItem>
                            <IonLabel>Por quanto tempo você fumou? (em anos) </IonLabel>
                            <IonInput/>
                        </IonItem>: null }

                        {fumou == "sim" ?
                        <IonItem>
                            <IonLabel>Há quanto tempo você parou de fumar? </IonLabel>
                            <IonInput/>
                        </IonItem>: null }

                        </IonList>
                        {/*VOCÊ FUMOU ANTES -> SIM */}

                        <IonList>
                        <IonItem>
                            <IonLabel>Você consome bebidas alcoólicas?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={bebe} onIonChange={e => setBebe(e.detail.value)}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup>
                            )} control={control} name={"bebidas"}/>
                        </IonItem>

                        {/*VOCÊ CONSOME BEBIDAS ALCÓOLICAS -> SIM */}

                        {bebe == "sim" ?
                        <IonItem>
                            <IonLabel>Alguma vez você sentiu que deveria diminuir a quantidade de bebida?</IonLabel>
                            
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
                        </IonItem>: null }

                        {bebe == "sim" ? 
                        <IonItem>
                            <IonLabel>As pessoas o aborrecem porque criticam o seu modo de beber?</IonLabel>
                            
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
                        </IonItem>: null }

                        {bebe == "sim" ?
                        <IonItem>
                            <IonLabel>Você se sente culpado pela maneira como bebe?</IonLabel>
                            
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
                        </IonItem>: null }

                        {bebe == "sim" ?
                        <IonItem>
                            <IonLabel>Você costuma beber de manhã para diminuir o nervosimo ou ressaca?</IonLabel>
                            
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
                        </IonItem>: null }

                        </IonList>

                        {/*VOCÊ BEBE -> SIM */}

                        <IonList>
                        <IonItem>
                            <IonLabel>Você faz uso de algum tipo de droga ilícita diariamente?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={drogas} onIonChange={e => setDrogas(e.detail.value)}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup>
                            )} control={control} name={"drogas"}/>
                        </IonItem>

                        {/*DROGAS -> SIM */}

                        {drogas == "sim" ? 
                        <IonItem>
                        
                        
                        <IonLabel>Qual(is) você usa com maior frequência?</IonLabel>
                            
                            <IonList>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Maconha</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Cocaína</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Crack</IonLabel>
                            </IonItem>
                            
                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Ecstasy</IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>Outros: </IonLabel>
                                <IonInput/>
                            </IonItem> 
                            </IonList>
                        </IonItem> : null }

                        {drogas == "sim" ?
                        <IonItem>
                            <IonLabel>Há quantos anos você usa essa droga diariamente?</IonLabel>
                            <IonInput/>
                        </IonItem> : null  }

                        </IonList>

                        <IonList>

                        <IonItem>
                            <IonLabel>Você faz uso de algum estimulante diariamente (café, chimarrão)?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={estimulantes} onIonChange={e => setEstimulantes(e.detail.value)}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"estimulantes"}/>
                        </IonItem>


                        {estimulantes == "sim" ? 
                        <IonItem>
                            <IonLabel>Em qual(is) momento(s) do dia você usa com mais frequência? </IonLabel>

                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Manhã</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Tarde</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Noite</IonLabel>
                                </IonItem>


                             </IonList>
                            </IonItem>: null }
                            
                        </IonList>

                <IonButton onClick={props.prev} size="large">Anterior</IonButton>
                <IonButton onClick={props.next} size="large" className={"btnProximo"}>Próximo</IonButton>
                </form>
            
        </div>
        </IonContent>
    )


}

export default Step2;