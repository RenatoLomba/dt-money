import * as Dialog from '@radix-ui/react-dialog'

import { Button } from '../button'
import { HeaderContainer, HeaderContent } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="/logo.svg" alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button size="sm">Nova transação</Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content>
              <Dialog.Title>Nova transação</Dialog.Title>

              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
