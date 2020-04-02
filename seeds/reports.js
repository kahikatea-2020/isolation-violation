
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('reports').del()
    .then(function () {
      // Inserts seed entries
      return knex('reports').insert([
        {
          id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNJfrOIVm5o-cp7OV8HKEeuZ3Zpdjm9B7nH9V2YdiCFzCM1t27&usqp=CAU',
          offender_id: 1001, comment: '', location: 'Newmarket', date: '27/03/2020', violation: 'Driving to the park'
        },

        {
          id: 2, image: 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/03/17/7e537876-67e1-11ea-9de8-4adc9756b5c3_image_hires_102555.jpg?itok=s9o2Qq7A&v=1584411963',
          offender_id: 1002, comment: '', location: 'Mercury lane', date: '29/03/2020', violation: 'More than 2 items at supermarket'
        },

        { id: 3, image: 'https://www.deepfun.com/images/rsp1.jpg', offender_id: 1003, comment: '', location: 'Pak n Sav', date: '1/04/2020', violation: 'Playing non-social distance rock paper scissors' },

        { id: 4, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bruce_McCandless_II_during_EVA_in_1984.jpg/330px-Bruce_McCandless_II_during_EVA_in_1984.jpg', offender_id: 1004, comment: '', location: 'Space', date: '27/03/2020', violation: 'Not staying within 2m of others' },

        { id: 5, image: 'https://img.huffingtonpost.com/asset/5e5ef15d230000840fdddf2c.jpeg?ops=scalefit_630_noupscale', offender_id: 1005, comment: '', location: 'Vape shop', date: '27/03/2020', violation: 'Hoarding toilet paper' },

        { id: 6, image: 'https://i0.wp.com/metro.co.uk/wp-content/uploads/2014/06/ad_137372191-e1407238172856.jpg?quality=90&strip=all&zoom=1&resize=644%2C415&ssl=1', offender_id: 1006, comment: '', location: 'Pottery Class', date: '27/03/2020', violation: 'Not keeping 2m distance' },

        { id: 7, image: 'https://i.dailymail.co.uk/i/pix/2013/06/11/article-2339422-1A41C0A9000005DC-14_1024x615_large.jpg', offender_id: 1007, comment: '', location: 'painting studio', date: '27/03/2020', violation: 'Not washing hands' },
      ]);
    });
};