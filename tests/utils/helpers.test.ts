import { cn, debounce, throttle } from '@/utils/helpers'

describe('helpers', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('cn descarta valores falsy', () => {
    expect(cn('a', false, undefined, 'b')).toBe('a b')
  })

  it('debounce ejecuta solo la última llamada', () => {
    const fn = vi.fn()
    const d = debounce(fn, 100)
    d()
    d()
    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('throttle ignora llamadas dentro del intervalo', () => {
    const fn = vi.fn()
    const t = throttle(fn, 100)
    t()
    t()
    expect(fn).toHaveBeenCalledTimes(1)
    vi.advanceTimersByTime(100)
    t()
    expect(fn).toHaveBeenCalledTimes(2)
  })
})
