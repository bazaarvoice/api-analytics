var transactionData = {
  // host: "bazaarvoice.com",
  orderId: '4601555774216',
  city: 'Springfield',
  state: 'DOH',
  country: '',
  zip: '55555',
  userId: '',
  email: 'homer@simpson.com',
  nickname: '',
  tax: '0.72',
  shipping: '4.97',
  total: '9.27',
  currency: '',
  deliveryDate: '2015-07-15T11:36:47.384',
  items: [
      {
          sku: '1234567-2',
          name: 'Can of Generic Beer',
          imageUrl: '/images/beer.jpg',
          category: 'beer',
          quantity: '1',
          price: '3.58'
      }
  ]
};

BV.pixel.trackTransaction(transactionData)