import React from 'react'
import { StakeContainer, StakeWrapper } from './StakeElements';
import { useDencrypt } from "use-dencrypt-effect";
const values = ["Earn SPH tokens staking your LPs"];

const Stake = () => {
    const { result, dencrypt } = useDencrypt();
    React.useEffect(() => {
        
          dencrypt(values[0]);
    
    
      }, []);
 
    return (
        <StakeContainer id="stake">
           <StakeWrapper>
           {result} 
           </StakeWrapper>
        </StakeContainer>
    )
}

export default Stake
