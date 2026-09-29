import { render, screen } from '@testing-library/react'
import App from '@/App'

describe('App', () => {
  it('muestra el título de bienvenida', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /bienvenido a appPrueba/i })).toBeInTheDocument()
  })
})
