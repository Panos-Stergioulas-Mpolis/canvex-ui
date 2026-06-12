import { shadows, customShadows } from '../shadows';

describe('Custom Theme Shadows', () => {
  it('should define shadows correctly', () => {
    // Check if there are 25 shadow definitions
    expect(shadows).toHaveLength(25);

    // Check random shadows
    expect(shadows[0]).toBe('none');
    expect(shadows[1]).toMatch(/^\d+px \d+px \d+px -\d+px .*$/);
    expect(shadows[10]).toMatch(/^\d+px \d+px \d+px -\d+px .*$/);
  });

  it('should define transparent colors correctly', () => {
    const transparentValues = [
      customShadows.z1,
      customShadows.z8,
      customShadows.z12,
      customShadows.z16,
      customShadows.z20,
      customShadows.z24,
    ];

    // Check if shadow color is in rgba format
    transparentValues.forEach((shadow) => {
      expect(shadow).toMatch(
        /rgba\(\d{1,3}, \d{1,3}, \d{1,3}, [0-1]\.\d{1,2}\)/
      );
    });
  });
});
