describe("Gilded Rose", function() {

  let name = 'test';
  let sellIn = 10;
  let quality = 10;
  let item = new Item(name, sellIn, quality);
  let shop = new Shop();
  shop.items.push(item);

  init = function() {
    name = 'test';
    sellIn = 10;
    quality = 10;
    item = new Item(name, sellIn, quality);
    shop = new Shop();
    shop.items.push(item);
    return shop;
  }

  it('should decrease sell in value at the end of the day', function() {
    shop = init();

    shop.updateQuality();

    expect(shop.items[0].sellIn).toEqual(sellIn-1);
  });

  it('should decrease quality value at the end of the day', function() {
    shop = init();

    shop.updateQuality();

    expect(shop.items[0].quality).toEqual(quality-1);
  });

});
