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
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'nenhuma' ) }}></IonCheckbox>
                            <IonLabel>Nenhuma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'diabetes' ) }}></IonCheckbox>
                            <IonLabel>Diabetes</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'hipertensão' ) }}></IonCheckbox>
                            <IonLabel>Hipertensão</IonLabel>
                            </IonItem>
                            
                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'asma' ) }}></IonCheckbox>
                            <IonLabel>Asma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'depressão' ) }}></IonCheckbox>
                            <IonLabel>Depressão</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'imunodeficiência' ) }}></IonCheckbox>
                            <IonLabel>Imunodeficiência</IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>Outros: </IonLabel>
                                <IonInput value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}/>
                            </IonItem>
                            </IonList>
                            )}
                            control={control}
                            name={"disorders"}
                            />
                        </IonItem>


                        <IonList>
                        <IonItem>
                            <IonLabel>Você faz uso frequente de medicações por orientação médica?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={selected} onIonChange={(e) => {setSelected(e.detail.value); 
                                if (e.detail.value != undefined) 
                                props.setState('meds', e.detail.value )  }}>

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
                            name={"meds"}
                            />
                        </IonItem>
                      
                        {selected === "sim" ?
                        
                        <IonItem>
                            <Controller render={({onChange}) => (
                            <IonTextarea placeholder="Quais medicações?" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('medsUsed', e.detail.value ) }}/> )} control={control} name={'medsUsed'} />
                        </IonItem> : null
                        }
                       </IonList>
       
                        <IonList>
                        <IonItem>
                            <IonLabel>Você faz uso frequente de medicações sem orientação médica?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={selectedNoOrientation} onIonChange={(e) => {setSelectedNoOrientation(e.detail.value); 
                                if (e.detail.value != undefined) 
                                props.setState('medsOff', e.detail.value )}}>

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
                            name={"medsOff"} 
                            />
                        </IonItem>

                        {selectedNoOrientation === "sim" ?
                        <IonItem>
                            <Controller render={({onChange}) => (
                            <IonTextarea placeholder="Quais medicações?" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('medsOffUsed', e.detail.value ) }}/> )} control={control} name={'medsOffUsed'}/>
                        </IonItem>: null }
                        </IonList> 

                        <IonItem>
                            <IonLabel>Você fez psicoterapia nas últimas duas semanas? </IonLabel>

                            <Controller render={({onChange}) => (
                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("psychother", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('psychother', 'não' )  }}></IonCheckbox>
                                <IonLabel >Não</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("psychother", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('psychother', 'sim, on-line' )  }}></IonCheckbox>
                                <IonLabel>Sim, on-line</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("psychother", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('psychother', 'sim, presencial' )  }}></IonCheckbox>
                                <IonLabel>Sim, presencial</IonLabel>
                                </IonItem>

                             </IonList>
                             )} 
                             control={control}
                             name={"psychother"}
                             />
                         </IonItem>

                        <IonList>
                         <IonItem>
                            <IonLabel>Você fuma?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={fuma} onIonChange={(e) => {setFuma(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('smoke', e.detail.value )} }>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value={"sim"}></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value={"não"}></IonRadio>
                                </IonItem>
                            </IonRadioGroup>
                            )} control={control} name={"smoke"}/>
                        </IonItem>

                        {/*VOCÊ FUMA? -> SIM */}

                        {fuma === "sim" ? 
                        <IonItem>
                            <IonLabel>Quantos cigarros você fuma por dia?</IonLabel>
                            <Controller render={({onChange})=> (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('cigarrets', e.detail.value ) }}>
                            <IonSelectOption value={"menos que uma carteira de cigarro por dia"}>Menos que uma carteira de cigarro por dia</IonSelectOption>
                            <IonSelectOption  value={"uma a duas carteiras de cigarro por dia"}>Uma a duas carteiras de cigarro por dia</IonSelectOption>
                            <IonSelectOption value={"mais que duas carteiras de cigarro por dia"}>Mais que duas carteiras de cigarro por dia</IonSelectOption>
                            
                            </IonSelect> )} control={control} name={"cigarrets"} />
                          </IonItem> : null}

                        {fuma === "sim" ? 
                        <IonItem>
                            <IonLabel>Há quanto tempo você fuma? (em anos) </IonLabel>
                            <Controller render={({onChange})=> (
                            <IonInput onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('smokeDur', e.detail.value ) }}/> )} control={control} name={"smokeDur"} />
                        </IonItem>: null}

                         {/*VOCÊ FUMA? -> SIM */}
                        
                        {/*VOCÊ FUMA? -> NÃO */}
                        </IonList>               
                       
                        <IonList>
                        <IonItem>
                            <IonLabel>Você fumou antes?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={fumou} onIonChange={(e) => {setFumou(e.detail.value); 
                                if (e.detail.value != undefined) 
                                props.setState('smokeBef', e.detail.value )} }>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value={"sim"}></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value={"não"}></IonRadio>
                                </IonItem>
                            </IonRadioGroup>
                            )} control={control} name={"smokeBef"}/>
                        </IonItem>
                        
                        {/*VOCÊ FUMOU ANTES? -> SIM */}

                        {fumou === "sim" ?
                        <IonItem>
                            <IonLabel>Quantos cigarros você fumava por dia?</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('cigarretsBef', e.detail.value ) }}>
                            <IonSelectOption value={"menos que uma carteira de cigarro por dia"}>Menos que uma carteira de cigarro por dia</IonSelectOption>
                            <IonSelectOption value={"uma a duas carteiras de cigarro por dia"}>Uma a duas carteiras de cigarro por dia</IonSelectOption>
                            <IonSelectOption value={"mais que duas carteiras de cigarro por dia"}>Mais que duas carteiras de cigarro por dia</IonSelectOption>
                            
                            </IonSelect> )} control={control} name={'cigarretsBef'} />
                          </IonItem> :null  }

                        {fumou === "sim" ? 
                          <IonItem>
                            <IonLabel>Por quanto tempo você fumou? (em anos) </IonLabel>
                            <Controller render={({onChange}) => (
                            <IonInput onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('smokeBefDur', e.detail.value )} }/> )} control={control} name={'smokeBefDur'} />
                        </IonItem>: null }

                        {fumou === "sim" ?
                        <IonItem>
                            <IonLabel>Há quanto tempo você parou de fumar? </IonLabel>
                            <Controller render={({onChange}) => (
                            <IonInput onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('smokeStop', e.detail.value ) }}/> )} control={control} name={'smokeStop'} />
                        </IonItem>: null }

                        </IonList>
                        {/*VOCÊ FUMOU ANTES -> SIM */}

                        <IonList>
                        <IonItem>
                            <IonLabel>Você consome bebidas alcoólicas?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={bebe} onIonChange={(e) => {setBebe(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('alcohol', e.detail.value )}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup>
                            )} control={control} name={"alcohol"}/>
                        </IonItem>

                        {/*VOCÊ CONSOME BEBIDAS ALCÓOLICAS -> SIM */}

                        {bebe === "sim" ?
                        <IonItem>
                            <IonLabel>Alguma vez você sentiu que deveria diminuir a quantidade de bebida?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('cage01', e.detail.value )} }>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup>)} control={control} name={"cage01"}/>
                        </IonItem>: null }

                        {bebe === "sim" ? 
                        <IonItem>
                            <IonLabel>As pessoas o aborrecem porque criticam o seu modo de beber?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('cage02', e.detail.value )} }>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"cage02"}/>
                        </IonItem>: null }

                        {bebe === "sim" ?
                        <IonItem>
                            <IonLabel>Você se sente culpado pela maneira como bebe?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('cage03', e.detail.value )}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"cage03"}/>
                        </IonItem>: null }

                        {bebe === "sim" ?
                        <IonItem>
                            <IonLabel>Você costuma beber de manhã para diminuir o nervosimo ou ressaca?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('cage04', e.detail.value )}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem> 
                            </IonRadioGroup> )} control={control} name={"cage04"}/>
                        </IonItem>: null }

                        </IonList>

                        {/*VOCÊ BEBE -> SIM */}

                        <IonList>
                        <IonItem>
                            <IonLabel>Você faz uso de algum tipo de droga ilícita diariamente?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={drogas} onIonChange={(e) => {setDrogas(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('drugs', e.detail.value )} }>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup>
                            )} control={control} name={"drugs"}/>
                        </IonItem>

                        {/*DROGAS -> SIM */}

                        {drogas === "sim" ? 
                        <IonItem>
                        
                        
                        <IonLabel>Qual(is) você usa com maior frequência?</IonLabel>
                        <Controller render={({onChange}) => (
                            <IonList>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("drugsUsed", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('drugsUsed', 'maconha' )  }}></IonCheckbox>
                            <IonLabel>Maconha</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("drugsUsed", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('drugsUsed', 'cocaína' )  }}></IonCheckbox>
                            <IonLabel>Cocaína</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("drugsUsed", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('drugsUsed', 'crack' )  }}></IonCheckbox>
                            <IonLabel>Crack</IonLabel>
                            </IonItem>
                            
                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("drugsUsed", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('drugsUsed', 'ecstasy' )  }}></IonCheckbox>
                            <IonLabel>Ecstasy</IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>Outros: </IonLabel>
                                <IonInput onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('drugsUsed', e.detail.value )  }}/>
                            </IonItem> 
                            </IonList> )} control={control} name={"drugsUsed"}/>
                        </IonItem> : null }

                        {drogas === "sim" ?
                        <IonItem>
                            <IonLabel>Há quantos anos você usa essa droga diariamente?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonInput onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('drugDur', e.detail.value )  }}/>  )} control={control} name={"drugDur"}/>
                        </IonItem> : null  }

                        </IonList>

                        <IonList>

                        <IonItem>
                            <IonLabel>Você faz uso de algum estimulante diariamente (café, chimarrão)?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={estimulantes} onIonChange={(e) => {setEstimulantes(e.detail.value); 
                                if (e.detail.value != undefined) 
                                props.setState('stimulants', e.detail.value )  }}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"stimulants"}/>
                        </IonItem>


                        {estimulantes === "sim" ? 
                        <IonItem>
                            <IonLabel>Em qual(is) momento(s) do dia você usa com mais frequência? </IonLabel>
                            <Controller render={({onChange}) => (
                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("stimulantTiming", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('stimulantTiming', 'manhã' )  }}></IonCheckbox>
                                <IonLabel>Manhã</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("stimulantTiming", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('stimulantTiming', 'tarde' )  }}></IonCheckbox>
                                <IonLabel>Tarde</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("stimulantTiming", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('stimulantTiming', 'noite' )  }}></IonCheckbox>
                                <IonLabel>Noite</IonLabel>
                                </IonItem>


                             </IonList>  )}
                             control={control}
                             name={"stimulantTiming"}
                             />
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