import CGSize from '../core/graphics/geometric/CGSize';

describe('CGSize', () => {
  it('create with 0 0 with default arguments', () => {
    const r = new CGSize();
    expect(r.width).toBe(0);
    expect(r.height).toBe(0);
  });

  it('create from object init', () => {
    const r = CGSize.init({ width: 20, height: 25 });
    expect(r.width).toBe(20);
    expect(r.height).toBe(25);
  });

  it('must conform to Equatable.equalTo and return Truthy', () => {
    const refA = new CGSize(10, 20);
    const refB = new CGSize(10, 20);
    const result = refA.equalTo(refB);
    expect(result).toBeTruthy();
  });

  it('must conform to Equatable.equalTo and return Falsy', () => {
    const refA = new CGSize(10, 20);
    const refB = new CGSize();
    const result = refA.equalTo(refB);
    expect(result).toBeFalsy();
  });
});
