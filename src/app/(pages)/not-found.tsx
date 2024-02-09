import { Button } from '../_components/Button'
import { Gutter } from '../_components/Gutter'
import { VerticalPadding } from '../_components/VerticalPadding'

export default function NotFound() {
  return (
    <Gutter className='flex justify-center mt-96 mb-48'>
      <VerticalPadding top="none" bottom="large">
        <h1 style={{ marginBottom: 0 }}><strong> 404  </strong></h1>
        <p>Seite konnte nicht gefunden werden.</p>
        <Button href="/" label=" Zurück" appearance="primary" />
      </VerticalPadding>
    </Gutter>
  )
}
