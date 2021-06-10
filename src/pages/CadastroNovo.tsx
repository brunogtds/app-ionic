import React from 'react';
import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, IonIcon, IonModal } from '@ionic/react';

import './Login.css';

import {IonButton} from '@ionic/react';
import {IonLoading} from '@ionic/react';

import regenteLogo from '../../src/img/logo_regente.png';
import {useState} from 'react';
import { toast } from '../toast';
import {useHistory} from 'react-router';

import {cadastroUser} from '../firebaseConfig/firebaseConfig';

import {mailOutline, eyeOutline, eyeOffOutline} from  'ionicons/icons';
import {StepComponentProps} from "react-step-builder";

const Cadastro = (props: StepComponentProps) => {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [csenha, setCSenha] = useState();

    const [showSenha, setShowSenha]= useState(false);
    const [showCSenha, setShowCSenha]= useState(false);

    const history= useHistory();

    const [showModal, setShowModal] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);

    const agree = () => {
      setAgreeTerms(true)
      setShowModal(false)
    }

    const passwordVisibility = () => {
      setShowSenha(showSenha ? false: true)
    }

    const cpasswordVisibility = () => {
      setShowCSenha(showCSenha ? false: true)
    }
  
   async function goPerfil(){
    
        history.push('/perfil_1novo');
     
  }

  return (
   
      <IonContent fullscreen className="ion-text-center">

      <div id="outer">
      <div id="inner">

      <div>
        <img src={regenteLogo} id="logo"/>
      </div>

      <div className='label'>
        <IonLabel>Email</IonLabel>
      </div>
      <IonInput type="email" placeholder="Digite seu email"  name= "email" id="email" onIonChange={(e:any) => {setEmail(e.target.value);
        if (e.detail.value != undefined) 
        props.setState('email', e.detail.value ) }}>
        <IonIcon icon={mailOutline}></IonIcon>
      </IonInput>

      <div className='label'>
        <IonLabel>Senha</IonLabel>
      </div>
      <IonInput type={showSenha ? "text" : "password"}    name= "senha" placeholder="Digite sua senha" id="senha" onIonChange={(e:any) => {setSenha(e.target.value); 
                                if (e.detail.value != undefined) 
                                props.setState('senha', e.detail.value )  }}> 
        <IonIcon onClick={passwordVisibility} hidden={showSenha ? true: false} icon={eyeOutline} float-right></IonIcon>
        <IonIcon onClick={passwordVisibility} hidden={showSenha ? false: true} icon={eyeOffOutline} float-right></IonIcon>
      </IonInput> 

      <div className='label'>
        <IonLabel>Confirme sua senha</IonLabel>
      </div>
      <IonInput type={showCSenha ? "text" : "password"} placeholder="Digite sua senha" name="csenha" id="csenha" onIonChange={(e:any) => {setCSenha(e.target.value); 
      if (e.detail.value != undefined) 
      props.setState('csenha', e.detail.value )  
      }}> 
        <IonIcon onClick={cpasswordVisibility} hidden={showCSenha ? true: false} icon={eyeOutline} float-right></IonIcon>
        <IonIcon onClick={cpasswordVisibility} hidden={showCSenha ? false: true} icon={eyeOffOutline} float-right></IonIcon>
      </IonInput>


      <p>Antes de se cadastrar, leia nossos <a onClick={() => setShowModal(true)}>termos e condições de uso.</a></p>
      <IonModal 
        isOpen={showModal} 
        cssClass='custom-modal'
        onDidDismiss={() => setShowModal(false)}
      >
        
        <IonContent>
        <h1>Termos e condições de uso</h1>
        <h2>Topico 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus ante sed ex tempus, vitae feugiat metus sagittis. Nunc convallis, nisi ac fringilla blandit, augue magna facilisis erat, vel egestas risus orci in dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sit amet rhoncus sapien, eu molestie mauris. Fusce sollicitudin enim velit, ac mattis ipsum pretium eget. Quisque vitae nulla sed tortor tristique eleifend vitae eget mi. Aenean tristique tincidunt risus vel scelerisque. Suspendisse scelerisque nunc dignissim velit hendrerit, et gravida velit porta. Cras porttitor, mauris in ornare aliquam, augue elit aliquet lacus, tristique mollis nulla dui at purus. Donec commodo cursus dapibus.
        </p>
        
        <h2>Topico 2</h2>
        <p>
          Maecenas pretium tincidunt est, vel mollis erat cursus at. Donec felis neque, consequat tincidunt cursus vitae, varius vel felis. Sed luctus fringilla metus, nec efficitur lorem commodo suscipit. Phasellus eget convallis odio, in suscipit mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec rhoncus tempor lectus a blandit. In mollis id turpis volutpat eleifend. Nam sollicitudin, neque vel faucibus posuere, nisi justo molestie quam, a porta massa augue eu enim. Integer tempor vestibulum dui, vulputate rutrum mauris varius quis. Nulla facilisi. Vestibulum molestie felis non risus convallis, a faucibus augue tristique. Vivamus ultrices tempus vehicula. Praesent scelerisque lectus lorem, ac viverra orci porta vel. Fusce porta nisl in purus ultricies, id condimentum ipsum vulputate. Curabitur nibh turpis, posuere nec ullamcorper efficitur, tempus eget lectus.
        </p>
        
        <h2>Topico 3</h2>
        <p>
        Morbi eget fringilla lectus, non pretium lectus. Proin suscipit, lectus vitae facilisis ornare, sapien velit cursus lacus, vitae aliquet dui velit sed lectus. Morbi in fermentum ex. Ut eu arcu rutrum, blandit tellus lacinia, porttitor augue. Morbi nulla turpis, sollicitudin at turpis vitae, ullamcorper efficitur tellus. Ut fringilla neque a urna volutpat, ut laoreet arcu posuere. Nulla sed sollicitudin turpis. Cras mollis elit sit amet purus posuere euismod. Etiam molestie justo arcu, ac mattis velit volutpat non.
        Aliquam erat volutpat. Vivamus eget diam vel neque auctor laoreet sit amet ut dolor. Quisque hendrerit lacinia dolor, vitae volutpat lectus sagittis id. Integer maximus ornare rutrum. Nunc pretium vestibulum urna sed egestas. Donec eget mauris porttitor, porta nunc et, lacinia nulla. Ut faucibus fermentum eleifend. Praesent molestie fringilla sem ac consectetur. Sed tristique, nunc in ullamcorper lobortis, nulla orci viverra ipsum, quis luctus massa tortor quis nunc. Suspendisse faucibus tellus quis ante aliquet lacinia. Maecenas varius lacus ut ipsum dapibus dictum.
        </p>

        <h2>Topico 4</h2>
        <p>
        Nullam ligula quam, suscipit vel urna eu, porttitor eleifend lectus. In iaculis consequat risus, non feugiat tortor scelerisque eget. Donec ut pharetra quam. Duis id ultrices lorem. Integer at gravida sem. Nunc tincidunt est ac urna iaculis pharetra. Vivamus pretium fermentum ligula quis fringilla. Sed sit amet metus eget ligula aliquet porta eu vel est. Nulla sollicitudin fermentum augue vitae molestie. Quisque mattis risus vitae est posuere porta. Aliquam a tellus mauris. Proin pellentesque blandit ex eget condimentum. Fusce lacinia feugiat urna posuere tincidunt. Fusce et enim vehicula, euismod odio in, dignissim risus. Nunc nulla orci, convallis sed mi sit amet, mattis fringilla sapien.
        </p>
        <IonButton onClick={agree} className="ion-button-termos">Concordo com os termos</IonButton>
        </IonContent>
      </IonModal>

      <IonButton size="large" disabled={!agreeTerms} onClick={props.next} className={"ion-button-cadastro"}>Cadastrar</IonButton>

      <p>Já possui uma conta? Faça <a href="/Login">login</a></p>
      <p><a href="/recuperacao_senha">Resete sua senha.</a></p>
        
      
      </div>
      </div>
      </IonContent>
    
  );
};

export default Cadastro;