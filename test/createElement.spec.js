import createElement from '../src/createElement'

describe('createElement(jsx)', () => {

  let el

  it('should return an element', () => {

    // createElement function does not throw error:
    expect( () => el = createElement('test') ).not.toThrow();

    // el is an object:
    expect(el).toEqual(jasmine.any(Object))
  })

  it('should contain object keys; children, props, and nodeName', () => {

    expect(Object.keys(el)).toContain('children')
    expect(Object.keys(el)).toContain('props')
    expect(Object.keys(el)).toContain('nodeName')
  })
})
