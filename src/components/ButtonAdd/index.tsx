import { useState } from 'react';
import { Button } from './styles';
import vector_check from "../../icon/vector_check.png";

export const ButtonAdd = () => {
    const [stateButton, setStateButton] = useState(false);
    const onClickButton = () => setStateButton((stateButton) => !stateButton);
    const img_check = <img src={vector_check} alt="Check" />;
    return (
        <Button onClick={onClickButton} state={stateButton}>
            {stateButton ? <>{img_check}ADICIONADO</> : "ADICIONAR"}
        </Button>
    )
}
