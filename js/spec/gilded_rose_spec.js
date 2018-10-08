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

    expect(shop.items[0].quality).toEqual(quality - 1);
  });

  it('should decrease quality by two if sellin < 0', function() {
    const quality = 10
    shop = init('test', 0, quality);

    shop.updateQuality();

    expect(shop.items[0].quality).toEqual(quality - 2);
  });

  it('quality should always be > 0', function() {
    const quality = 0;
    shop = init('test', 10, quality);

    shop.updateQuality();

    expect(shop.items[0].quality).toEqual(0);
  });

  it('aged brie showld increase quality by time', function() {
    quality = 10;
    shop = init('Aged Brie', 10, quality);

    shop.updateQuality();

    expect(shop.items[0].quality).toEqual(quality + 1);
  });

  it('quality should always be < 50', function() {
    const quality = 50;
    shop = init('Aged Brie', 10, quality);

    shop.updateQuality();

    expect(shop.items[0].quality).toEqual(quality);
  });

  it('Sulfura should never decease in quality', function() {
    const quality = 10;
    shop = init('Sulfuras, Hand of Ragnaros', 10, quality);

    shop.updateQuality();

    expect(shop.items[0].quality).toEqual(quality);
  });

  it('Sulfura should never be sold', function() {
    const sellIn = 10;
    shop = init ('Sulfuras, Hand of Ragnaros', sellIn, 10);

    shop.updateQuality();

    expect(shop.items[0].sellIn).toEqual(sellIn);
  })

  it('Backstage passes should increase quality by one if sellIn > 10', function() {
    const quality = 10;
    shop = init('Backstage passes to a TAFKAL80ETC concert', 11, quality);

    shop.updateQuality();

    expect(shop.items[0].quality).toEqual(quality + 1);
  });
});
