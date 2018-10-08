describe("Gilded Rose", function() {

  init = function(name, sellIn, quality) {
    item = new Item(name, sellIn, quality);
    shop = new Shop();
    shop.items.push(item);
    return shop;
  }

  it('should decrease sell in value at the end of the day', function() {
    const sellIn = 10;
    shop = init('test', sellIn, 10);

    shop.updateQuality();

    expect(shop.items[0].sellIn).toEqual(sellIn-1);
  });

  it('should decrease quality value at the end of the day', function() {
    const quality = 10;
    shop = init('test', 10, quality);

    shop.updateQuality();

    expect(shop.items[0].quality).toEqual(quality-1);
  });

  it('should decrease quality by two if sellin < 0', function() {
    const quality = 10
    init('test', 0, quality);

    shop.updateQuality();

    expect(shop.items[0].quality).toEqual(quality-2);
  });
});
