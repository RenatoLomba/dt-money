import { Button } from '../button'
import { HeaderContainer, HeaderContent } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="/logo.svg" alt="" />

        <Button size="sm">Nova transação</Button>
      </HeaderContent>
    </HeaderContainer>
  )
}
