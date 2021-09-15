import CGPoint from '../core/graphics/geometric/CGPoint';

describe('CGPoint', () => {
  it('create a CGPoint with 0 0 with default arguments', () => {
    const p = new CGPoint();
    expect(p.x).toBe(0);
    expect(p.y).toBe(0);
  });

  it('create a CGPoint from object init', () => {
    const p = CGPoint.init({ x: 10, y: 5 });
    expect(p.x).toBe(10);
    expect(p.y).toBe(5);
  });

  it('create a CGPoint from coordinates constructor', () => {
    const p = new CGPoint(7, 7);
    expect(p.x).toBe(7);
    expect(p.y).toBe(7);
  });

  it('create a CGPoint and set X prop', () => {
    let p = new CGPoint(14, 28);
    p = p.setX(2);
    expect(p.x).toBe(2);
  });

  it('create a CGPoint and set Y prop', () => {
    let p = new CGPoint(28, 14);
    p = p.setY(4);
    expect(p.y).toBe(4);
  });

  it('must conform to Equatable.equalTo to compare two CGPoint`s and return Truthy', () => {
    const pointA = new CGPoint(10, 20);
    const pointB = new CGPoint(10, 20);
    const result = pointA.equalTo(pointB);
    expect(result).toBeTruthy();
  });

  it('must conform to Equatable.equalTo to compare two CGPoint`s and return Falsy', () => {
    const pointA = new CGPoint(10, 20);
    const pointB = new CGPoint(0, 0);
    const result = pointA.equalTo(pointB);
    expect(result).toBeFalsy();
  });

  it('a CGPoint must return an array of coordinates [x, y]', () => {
    const p = new CGPoint(90000, 4455);
    const coordinates = p.coordinates();
    expect(coordinates).toContain(90000);
    expect(coordinates).toContain(4455);
  });
});
