import CGRect from '../core/graphics/geometric/CGRect';

describe('CGRect', () => {
  it('create a CGRect with 0 0 with default arguments', () => {
    const r = new CGRect();
    expect(r.x).toBe(0);
    expect(r.y).toBe(0);
    expect(r.width).toBe(0);
    expect(r.height).toBe(0);
  });

  it('create a CGRect from object init', () => {
    const r = CGRect.init({ x: 3, y: 7, width: 20, height: 25 });
    expect(r.x).toBe(3);
    expect(r.y).toBe(7);
    expect(r.width).toBe(20);
    expect(r.height).toBe(25);
  });

  it('create a CGRect with width and height defaults', () => {
    const r = new CGRect(7, 7);
    expect(r.width).toBe(0);
    expect(r.height).toBe(0);
  });

  it('must conform to Equatable.equalTo to compare two CGRect`s and return Truthy', () => {
    const rectA = new CGRect(10, 20);
    const rectB = new CGRect(10, 20);
    const result = rectA.equalTo(rectB);
    expect(result).toBeTruthy();
  });

  it('must conform to Equatable.equalTo to compare two CGRect`s and return Falsy', () => {
    const rectA = new CGRect(10, 20);
    const rectB = new CGRect(0, 0);
    const result = rectA.equalTo(rectB);
    expect(result).toBeFalsy();
  });
});
