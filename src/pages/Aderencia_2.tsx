import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';


import './Home.css';


import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonItemDivider, IonButton, IonLoading, IonLabel, IonInput, IonButtons, IonMenuButton, IonSelect, IonSelectOption} from '@ionic/react';


import distanciamentoExp from '../../src/img/distanciamentoExp.png';

import social_distancing from '../../src/img/social_distancing.svg';
import distancing from '../../src/img/distancing.svg';
import isolation from '../../src/img/isolation.svg';
import quarantine from '../../src/img/quarantine.svg';

import ExplanationSlides from '../../src/pages/ExplanationSlides';

import {auth} from '../../src/firebaseConfig/firebaseConfig';
import  { Redirect, useHistory } from 'react-router-dom' 

import {logoutUser} from '../../src/firebaseConfig/firebaseConfig';
import { toast } from '../toast';

import {useUser} from 'reactfire';


import {AuthCheck} from 'reactfire';

import logo_clinicas from '../img/logo_clinicas.svg';
import logo_crono from '../img/logo_crono.svg';
import logo_innovaspace from '../img/logo_innovaspace.svg';
import logo_neurobio from '../img/logo_neurobio.svg';
import logo_nnnesp from '../img/logo_nnnesp.svg';
import logo_ufrgs from '../img/logo_ufrgs.svg';
import logo_unifesp from '../img/logo_unifesp.svg';
import logo_regente from '../img/logo_regente_branco.svg';
import Neutro_feliz from '../img/Neutro_feliz.svg';

import { useForm, Controller } from "react-hook-form";
import {StepComponentProps} from "react-step-builder";

import firebase from 'firebase';

const Aderencia_2= (props: StepComponentProps) => {

  
 
  const [loader, setLoader]= useState<boolean>(false)
  const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
  const options = {
    cssClass: 'my-custom-interface'
  };
  const [meta1, setMeta1]= useState();
  const {data: user}= useUser();
  const [dataUser, setData] = useState()

  async function updateUserDataQuest1(dataUser: any){
     
    if(user){
        firebase.firestore().collection('users').doc(user.uid).set({
            meta01: String(props.state.meta01),
            metaFreqSemanal: Number(props.state.metaFreqSemanal),
            
           }, {merge: true})
        }
    
        toast('Formulário submetido com sucesso!', 2000);
        
    
    }

    const onSubmit = (data: any) => {
      setData(dataUser);
      setLoader(true);
      updateUserDataQuest1(dataUser);
    
   }

  return (
      

      <IonContent fullscreen className="ion-padding" color="background">
    
      <p className="texto-main aderencia">Acompanhe seu progresso!</p>
      <p className="texto-padrão aderencia ">Para acompanhar seu progresso, selecione quais hábitos você deseja acompanhar e defina uma meta principal para conquistar!</p>

      <form className="ion-padding texto-default">

      <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>
      <IonLabel className="questions">Selecione sua meta principal:</IonLabel>
              
              <IonItem lines="none">
            


                  <Controller render={({onChange}) => (

                  <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={meta1} onIonChange={(e) => {setMeta1(e.detail.value);
                      onChange(e.detail.value);
                      console.log(e);
                      if (e.detail.value != undefined) 
                      props.setState('meta01', e.detail.value )}}>
                  <IonSelectOption value="exercicio" >Exercício</IonSelectOption>
                  <IonSelectOption value="alimentação" >Alimentação</IonSelectOption>
                  <IonSelectOption value="sono" >Sono</IonSelectOption>
                  <IonSelectOption value="luz" >Exposição à luz natural</IonSelectOption>
                  </IonSelect> )} control={control} name={'meta01'} rules={{required:true}}/>
                  {errors.meta01 && <IonText color="danger">Campo obrigatório.</IonText>}
               </IonItem>
      
      {(meta1 === "exercicio") ?

      <IonLabel className="questions">Quantas vezes por semana você quer se exercitar?</IonLabel> :null
      } 

      {(meta1 === "alimentação") ?

      <IonLabel className="questions">Quantas vezes por semana você quer controlar a regularidade da sua alimentação?</IonLabel> :null
      } 

      {(meta1 === "sono") ?

      <IonLabel className="questions">Quantas vezes por semana você quer controlar a regularidade do seu sono?</IonLabel> :null
      } 

      {(meta1 === "luz") ?

      <IonLabel className="questions">Quantas vezes por semana você quer se expor à luz natural?</IonLabel> :null
      } 



       {((meta1 === "exercicio") || (meta1 === "alimentação") || (meta1 === "sono") || (meta1 === "luz") ) ?

            <IonItem lines="none">
                                        
                                   
            <Controller render={({onChange}) => (
                <IonInput type="number" placeholder="Digite o valor em dias" value= {props.getState("metaFreqSemanal", "")} onIonChange={
                    (e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('metaFreqSemanal', e.detail.value ); }}
                        
                    />
            )}
            name= "metaFreqSemanal"
            rules= {{ required: true}}
            control= {control}     
                
            />
            {errors.metaFreqSemanal && <IonText color="danger">Campo obrigatório.</IonText>}    
           
                      
            </IonItem> :null
      } 
      
      </form>


        <IonButton disabled={formState.isValid === false} color="orange" onClick={onSubmit} className={"btnProximo"} size="default" shape="round" fill="outline">Definir</IonButton>
        

      </IonContent>

    
  );
};

export default Aderencia_2;
