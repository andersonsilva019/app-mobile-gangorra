import { Button as ButtonContainer, ButtonText } from './styles'

export function Button({ text, onPress }){
  return(
    <ButtonContainer onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  )
}