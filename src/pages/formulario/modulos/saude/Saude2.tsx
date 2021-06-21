
import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonTextarea, IonLoading} from "@ionic/react";
import { IonContent, IonText} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';
import  {Redirect, useHistory } from 'react-router-dom'
import {toast} from '../../../../toast';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';


import { ModuloComponentProps } from "../ModulosComponent";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";


const Saude2 = (props: StepComponentProps) => {

   const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});

   const [showOptions, setShowOptions] = React.useState(false);

   const [selected, setSelected] = useState();
   const [selectedNoOrientation, setSelectedNoOrientation] = useState();

   const [fuma, setFuma] = useState();
   const [fumou, setFumou] = useState();
   const [bebe, setBebe]= useState();
   const [drogas, setDrogas]= useState();
   const [estimulantes, setEstimulantes]= useState();

   const {data: user}= useUser();
   const [dataUser, setData] = useState()

   const history= useHistory();
   const [loader, setLoader]= useState<boolean>(false)

  async function updateUserDataQuest1(dataUser: any){
    
 
    if(user){

       firebase.firestore().collection('users').doc(user.uid).set({
            
            disorders: String(props.state.disorders), //STEP 2 
            meds: String(props.state.meds),
            medsUsed: String(props.state.medsUsed),
            medsOff: String(props.state.medsOff),
            medsOffUsed: String(props.state.medsOffUsed),
            psychother: String(props.state.psychother),
            smoke: String(props.state.smoke),
            cigarrets: String(props.state.cigarrets),
            smokeDur: Number(props.state.smokeDur),
            smokeBef: String(props.state.smokeBef),
            cigarretsBef: String(props.state.cigarretsBef),
            smokeBefDur: Number(props.state.smokeBefDur),
            smokeStop: Number(props.state.smokeStop),
            alcohol: String(props.state.alcohol),
            cage01: String(props.state.cage01),
            cage02: String(props.state.cage02),
            cage03: String(props.state.cage03),
            cage04: String(props.state.cage04),
            drugs: String(props.state.drugs),
            drugsUsed: String(props.state.drugsUsed),
            drugDur: Number(props.state.drugDur),
            stimulants: String(props.state.stimulants),
            stimulantTiming: String(props.state.stimulantTiming), 
              }, {merge: true})
        }
    
        toast('Formulário submetido com sucesso!', 4000);
        
    
    }

    function voltaModulos (){
        history.push('/tab2');
    }
        
    const onSubmit = (data: any) => {
       setData(dataUser);
       setLoader(true);
       updateUserDataQuest1(dataUser);
       voltaModulos();
       props.setSaudeState(true);
      // (document.getElementById('button-forms-social') as HTMLInputElement).disabled = false;
    }

    return (
        <IonContent fullscreen color="light">
        <div>
           
             <form className="ion-padding" onSubmit={handleSubmit(onSubmit)}>
             <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

           
            <IonLabel className="questions">Você fuma?</IonLabel>            
            <IonList>
            
            <IonItem>
    
    
             <Controller render={({onChange}) => (
             <IonRadioGroup value={fuma} onIonChange={(e) => {setFuma(e.detail.value);
                onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('smoke', e.detail.value )} }>

        <IonItem>
        <IonLabel>Sim</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value={"sim"}></IonRadio>
        </IonItem>
       
        <IonItem>
        <IonLabel>Não</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value={"não"}></IonRadio>
        </IonItem>
    </IonRadioGroup>
    )} control={control} name={"smoke"} rules={{required:true}}/>
</IonItem>
{errors.smoke && <IonText color="danger">Campo obrigatório.</IonText>}

{/*VOCÊ FUMA? -> SIM */}

{fuma === "sim" ? 
<IonItem>
    <IonLabel className="questions">Quantos cigarros você fuma por dia?</IonLabel>
    <Controller render={({onChange})=> (
    <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('cigarrets', e.detail.value ) }}>
    <IonSelectOption value={"menos que uma carteira de cigarro por dia"}>Menos que uma carteira de cigarro por dia</IonSelectOption>
    <IonSelectOption  value={"uma a duas carteiras de cigarro por dia"}>Uma a duas carteiras de cigarro por dia</IonSelectOption>
    <IonSelectOption value={"mais que duas carteiras de cigarro por dia"}>Mais que duas carteiras de cigarro por dia</IonSelectOption>
    
    </IonSelect> )} control={control} name={"cigarrets"} rules={{required:true}} />
    {errors.cigarrets && <IonText color="danger">Campo obrigatório.</IonText>}
  </IonItem> : null} 

{fuma === "sim" ? 
<IonItem>
    
    <Controller render={({onChange})=> (
    <IonInput placeholder="Há quanto tempo você fuma? (em anos)" onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('smokeDur', e.detail.value ) }}/> )} control={control} name={"smokeDur"} rules={{required:true}} />
        {errors.smokeDur && <IonText color="danger">Campo obrigatório.</IonText>}

</IonItem>: null}    
 {/*VOCÊ FUMA? -> SIM */}

{/*VOCÊ FUMA? -> NÃO */}

</IonList>    

{fuma === "não" ? 
<IonList>
<IonLabel className="questions">Você fumou antes?</IonLabel>


<IonItem>
  
    
    <Controller render={({onChange}) => (
    <IonRadioGroup value={fumou} onIonChange={(e) => {setFumou(e.detail.value); 
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('smokeBef', e.detail.value )} }>

        <IonItem>
        <IonLabel>Sim</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value={"sim"}></IonRadio>
        </IonItem>
       
        <IonItem>
        <IonLabel>Não</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value={"não"}></IonRadio>
        </IonItem>
    </IonRadioGroup>
    )} control={control} name={"smokeBef"} rules={{required:true}}/>
</IonItem> 
{errors.smokeBef && <IonText color="danger">Campo obrigatório.</IonText>}

{/*VOCÊ FUMOU ANTES? -> SIM */}

{fumou === "sim" ?
<IonItem>
    <IonLabel className="questions">Quantos cigarros você fumava por dia?</IonLabel>

    <Controller render={({onChange}) => (
    <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('cigarretsBef', e.detail.value ) }}>
    <IonSelectOption value={"menos que uma carteira de cigarro por dia"}>Menos que uma carteira de cigarro por dia</IonSelectOption>
    <IonSelectOption value={"uma a duas carteiras de cigarro por dia"}>Uma a duas carteiras de cigarro por dia</IonSelectOption>
    <IonSelectOption value={"mais que duas carteiras de cigarro por dia"}>Mais que duas carteiras de cigarro por dia</IonSelectOption>
    
    </IonSelect> )} control={control} name={'cigarretsBef'} rules={{required:true}} />
    {errors.cigarretsBef && <IonText color="danger">Campo obrigatório.</IonText>}
  </IonItem> :null  }

{fumou === "sim" ? 
  <IonItem>
    
    <Controller render={({onChange}) => (
    <IonInput placeholder="Por quanto tempo você fumou? (em anos) " onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('smokeBefDur', e.detail.value )} }/> )} control={control} name={'smokeBefDur'} rules={{required:true}} />
        {errors.smokeBefDur && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem>: null }

{fumou === "sim" ?
<IonItem>
    
    <Controller render={({onChange}) => (
    <IonInput placeholder="Há quanto tempo você parou de fumar?" onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('smokeStop', e.detail.value ) }}/> )} control={control} name={'smokeStop'} rules={{required:true}} />
        {errors.smokeStop && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem>: null }

</IonList> :null}
{/*VOCÊ FUMOU ANTES -> SIM */}

<IonLabel className="questions">Você consome bebidas alcoólicas?</IonLabel>
<IonList>

<IonItem>
    
    
    <Controller render={({onChange}) => (
    <IonRadioGroup value={bebe} onIonChange={(e) => {setBebe(e.detail.value);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('alcohol', e.detail.value )}}>

        <IonItem>
        <IonLabel>Sim</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
        </IonItem>
       
        <IonItem>
        <IonLabel>Não</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
        </IonItem>
    </IonRadioGroup>
    )} control={control} name={"alcohol"} rules={{required:true}}/>
    {errors.alcohol && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem>

{/*VOCÊ CONSOME BEBIDAS ALCÓOLICAS -> SIM */}

{bebe === "sim" ?
<IonItem>
    <IonLabel className="questions">Alguma vez você sentiu que deveria diminuir a quantidade de bebida?</IonLabel>
    
    <Controller render={({onChange}) => (
    <IonRadioGroup onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('cage01', e.detail.value )} }>

        <IonItem>
        <IonLabel>Sim</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
        </IonItem>
       
        <IonItem>
        <IonLabel>Não</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
        </IonItem>
    </IonRadioGroup>)} control={control} name={"cage01"} rules={{required:true}}/>
    {errors.cage01 && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem>: null }

{bebe === "sim" ? 
<IonItem>
    <IonLabel className="questions">As pessoas o aborrecem porque criticam o seu modo de beber?</IonLabel>
    
    <Controller render={({onChange}) => (
    <IonRadioGroup onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('cage02', e.detail.value )} }>

        <IonItem>
        <IonLabel>Sim</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
        </IonItem>
       
        <IonItem>
        <IonLabel>Não</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
        </IonItem>
    </IonRadioGroup> )} control={control} name={"cage02"} rules={{required:true}}/>
    {errors.cage02 && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem>: null }

{bebe === "sim" ?
<IonItem>
    <IonLabel className="questions">Você se sente culpado pela maneira como bebe?</IonLabel>
    <Controller render={({onChange}) => (
    <IonRadioGroup onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('cage03', e.detail.value )}}>

        <IonItem>
        <IonLabel>Sim</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
        </IonItem>
       
        <IonItem>
        <IonLabel>Não</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
        </IonItem>
    </IonRadioGroup> )} control={control} name={"cage03"} rules={{required:true}}/>
    {errors.cage03 && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem>: null }

{bebe === "sim" ?
<IonItem>
    <IonLabel className="questions">Você costuma beber de manhã para diminuir o nervosimo ou ressaca?</IonLabel>
    
    <Controller render={({onChange}) => (
    <IonRadioGroup onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('cage04', e.detail.value )}}>

        <IonItem>
        <IonLabel>Sim</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
        </IonItem>
       
        <IonItem>
        <IonLabel>Não</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
        </IonItem> 
    </IonRadioGroup> )} control={control} name={"cage04"} rules={{required:true}}/>
    {errors.cage04 && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem>: null }

</IonList>

{/*VOCÊ BEBE -> SIM */}

<IonLabel className="questions">Você faz uso de algum tipo de droga ilícita diariamente?</IonLabel>
<IonList>

<IonItem>
    
    
    <Controller render={({onChange}) => (
    <IonRadioGroup value={drogas} onIonChange={(e) => {setDrogas(e.detail.value);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('drugs', e.detail.value )} }>

        <IonItem>
        <IonLabel>Sim</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
        </IonItem>
       
        <IonItem>
        <IonLabel>Não</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
        </IonItem>
    </IonRadioGroup>
    )} control={control} name={"drugs"} rules={{required:true}}/>
    {errors.drugs && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem>

{/*DROGAS -> SIM */}

{drogas === "sim" ? 
<IonItem>


<IonLabel className="questions">Qual(is) você usa com maior frequência?</IonLabel>
<Controller render={({onChange}) => (
    <IonList>

    <IonItem>
    <IonCheckbox className={"checkbox-options"} color="primary" value= {props.getState("drugsUsed", "")} onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('drugsUsed', 'maconha' )  }}></IonCheckbox>
    <IonLabel>Maconha</IonLabel>
    </IonItem>

    <IonItem>
    <IonCheckbox className={"checkbox-options"} color="primary" value= {props.getState("drugsUsed", "")} onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('drugsUsed', 'cocaína' )  }}></IonCheckbox>
    <IonLabel>Cocaína</IonLabel>
    </IonItem>

    <IonItem>
    <IonCheckbox className={"checkbox-options"} color="primary" value= {props.getState("drugsUsed", "")} onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('drugsUsed', 'crack' )  }}></IonCheckbox>
    <IonLabel>Crack</IonLabel>
    </IonItem>
    
    <IonItem>
    <IonCheckbox className={"checkbox-options"} color="primary" value= {props.getState("drugsUsed", "")} onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('drugsUsed', 'ecstasy' )  }}></IonCheckbox>
    <IonLabel>Ecstasy</IonLabel>
    </IonItem>

    <IonItem>
        
        <IonInput placeholder="Outros" onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('drugsUsed', e.detail.value )  }}/>
    </IonItem> 
    </IonList> )} control={control} name={"drugsUsed"} //rules={{required:true}}
    />
    {errors.drugsUsed && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem> : null }

{drogas === "sim" ?
<IonItem>
 
    <Controller render={({onChange}) => (
    <IonInput placeholder="Há quantos anos você usa essa droga diariamente?" onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('drugDur', e.detail.value )  }}/>  )} control={control} name={"drugDur"} rules={{required:true}}/>
        {errors.drugDur && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem> : null  }

</IonList>

<IonLabel className="questions">Você faz uso de algum estimulante diariamente (café, chimarrão)?</IonLabel>
<IonList>



<IonItem>
    
    
    <Controller render={({onChange}) => (
    <IonRadioGroup value={estimulantes} onIonChange={(e) => {setEstimulantes(e.detail.value); 
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('stimulants', e.detail.value )  }}>

        <IonItem>
        <IonLabel>Sim</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
        </IonItem>
       
        <IonItem>
        <IonLabel>Não</IonLabel>
        <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
        </IonItem>
    </IonRadioGroup> )} control={control} name={"stimulants"} rules={{required:true}}/>
    {errors.stimulants && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem>


{estimulantes === "sim" ? 
<IonItem>
    <IonLabel className="questions">Em qual(is) momento(s) do dia você usa com mais frequência? </IonLabel>
    <Controller render={({onChange}) => (
    <IonList>
        <IonItem>
        <IonCheckbox className={"checkbox-options"} color="primary" value= {props.getState("stimulantTiming", "")} onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('stimulantTiming', 'manhã' )  }}></IonCheckbox>
        <IonLabel>Manhã</IonLabel>
        </IonItem>

        <IonItem>
        <IonCheckbox className={"checkbox-options"} color="primary" value= {props.getState("stimulantTiming", "")} onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('stimulantTiming', 'tarde' )  }}></IonCheckbox>
        <IonLabel>Tarde</IonLabel>
        </IonItem>
        
        <IonItem>
        <IonCheckbox className={"checkbox-options"} color="primary" value= {props.getState("stimulantTiming", "")} onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('stimulantTiming', 'noite' )  }}></IonCheckbox>
        <IonLabel>Noite</IonLabel>
        </IonItem>


     </IonList>  )}
     control={control}
     name={"stimulantTiming"}
     //rules={{required:true}}
     />
     {errors.stimulantTiming && <IonText color="danger">Campo obrigatório.</IonText>}
    </IonItem>: null }
    
</IonList>

<IonButton onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
<IonButton disabled={formState.isValid === false} onClick={onSubmit} size="large" fill="clear" className={"btnProximo"}>Submeter</IonButton>
</form>

</div>
</IonContent>
)


}

export default Saude2;