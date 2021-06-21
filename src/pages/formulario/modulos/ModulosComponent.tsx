import React from 'react';
export interface ModuloComponentProps {
    isSaudeDisabled: boolean;
    isContatoDisabled: boolean;
    isHabitosDisabled: boolean;
    isSonoDisabled: boolean;
    
}

export function setModuloState (){
  
}

export default class ModuloComponent extends React.Component {
    isSaudeDisabled: boolean | undefined;
    isContatoDisabled: boolean | undefined;
    isHabitosDisabled: boolean | undefined;
    isSonoDisabled: boolean | undefined;
   
    constructor(props: ModuloComponentProps) {
      super(props);
  
      this.state = {
        isSaudeDisabled: false,
        isContatoDisabled: true,
        isHabitosDisabled: true,
        isSonoDisabled: true
      }
    }

    setSaudeState (){
      this.isSaudeDisabled= true;
    }


  

  }

