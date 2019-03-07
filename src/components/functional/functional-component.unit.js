import FunctionalComponent from './functional-component'

describe('@components/functional/functional-component', () => {
  it('exports a valid component', () => {
    expect(FunctionalComponent).toBeAFunctionalComponent()
  })
})
