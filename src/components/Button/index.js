import { BottonContainer } from "./styles";

const Botton = ( {label, onClick} ) => {
    return (
      <BottonContainer onClick={onClick}>
        {label}
      </BottonContainer>
    );
  }
  
  export default Botton;