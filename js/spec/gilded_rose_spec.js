describe("Gilded Rose", function() {

  it('should decrease sell in value at the end of the day', function() {
    const name = 'test';
    const sellIn = 10;
    const quality = 10;
    const item = new Item(name, sellIn, quality);
    const shop = new Shop();
    shop.items.push(item);

    shop.updateQuality();

    expect(shop.items[0].sellIn).toEqual(sellIn-1);
  });

});
