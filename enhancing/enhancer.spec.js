const enhancer = require('./enhancer.js');
// test away!

describe('Black Desert Enchanting System Test', () => {
	describe('.repair()', () => {
		test('should return the current object durability repair to 100', () => {
			const kzarkaGauntlet = {
				ap: 22,
				durability: 76,
				enhancement: 1,
				crit: 7,
				slots: 2,
			};
			expect(enhancer.repair(kzarkaGauntlet).durability).toBe(100);
		});
	});

	describe('.succeed', () => {
		const KaiaStaff = {
			ap: 63,
			durability: 76,
			enhancement: 11,
			crit: 14,
			slots: 2,
    };
    const kzarkaStaff = {
			ap: 22,
			durability: 76,
			enhancement: 20,
			crit: 7,
			slots: 2,
		};
		test('should return item enhancement + 1', () => {
			expect(enhancer.succeed(KaiaStaff).enhancement).toBe(12);
    });
    test('should not enchant a item at 20 already', () => {
			expect(enhancer.succeed(kzarkaStaff).enhancement).toBe(20);
		});
  });
  
  describe('.fail', () => {
		const KaiaAmulet = {
			ap: 63,
			durability: 76,
			enhancement: 11,
			crit: 14,
			slots: 2,
		};
		test('should return item enhancement - 1', () => {
			expect(enhancer.fail(KaiaAmulet).enhancement).toBe(10);
    });
    test('should return durabiulity - 10', () => {
			expect(enhancer.fail(KaiaAmulet).durability).toBe(71);
		});
  });
  
  describe('.get', () => {
    const dandelionAadSphera = {
      itemName: 'Dandelion Aad Sphera',
			ap: 27,
			durability: 87,
			enhancement: 17,
			crit: 9,
			slots: 0,
		};
    test('should return a item with its enchant level attached', () => {
      expect(enhancer.get(dandelionAadSphera).itemName).toBe(`Dandelion Aad Sphera [+17]`)
    })
    
  })
  
});
