
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reports').del()
    .then(function () {
      // Inserts seed entries
      return knex('reports').insert([
        { id: 1, offender_id: 1001,comment: '',location: 'Newmarket', date: '27/03/2020', violation: 'Driving to the park',  },
        { id: 2, offender_id: 1002,comment: '',location: 'Mercury lane', date: '29/03/2020', violation: 'More than 2 items at supermarket',  },
        {
          id: 3, offender_id: 1003,comment: '',location: 'Pak n Sav', date: '1/04/2020', violation: 'Playing non-social distance rock paper scissors', 
        },
        { id: 4, offender_id: 1004,comment: '',location: 'Space', date: '27/03/2020', violation: 'Not staying within 2m of others',  },
        { id: 5, offender_id: 1005,comment: '',location: 'Vape shop', date: '27/03/2020', violation: 'Hoarding toilet paper', },
        { id: 6, offender_id: 1006,comment: '',location: 'Nail salon', date: '27/03/2020', violation: 'Not keeping 2m distance', },
        { id: 7, offender_id: 1007,comment: '',location: 'painting studio', date: '27/03/2020', violation: 'Not washing hands', },
      ]);
    });
};