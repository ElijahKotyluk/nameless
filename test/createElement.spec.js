import createElement from '../src/createElement';

describe('createElement(jsx)', () => {
  it('should return an element', () => {
    let el;

    expect( () => el = createElement('test') ).not.toThrow();
    expect(el).toEqual(jasmine.any(Object));
  })
})
