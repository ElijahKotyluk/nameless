import createElement from '../src/createElement';

describe('createElement(jsx)', () => {

  let el;

  it('should return an element', () => {
    expect( () => el = createElement('test') ).not.toThrow();
    expect(el).toEqual(jasmine.any(Object));
    expect(Object.keys(el)).toContain('children');
    expect(Object.keys(el)).toContain('props');
    expect(Object.keys(el)).toContain('nodeName');
  });
});
