import React from 'react';
import * as C from './styles';
type Props = {
    label: string;
    icon?: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}


export const Button = ({label, icon, onClick}: Props) => {
    return(
        <C.Container onClick={onClick}>


            {icon &&  
             <C.InfoArea>
                <C.Icon src={icon} />
            </C.InfoArea>
            }
          
           
            <C.InfoButton>{label}</C.InfoButton>


        </C.Container>
    );
}