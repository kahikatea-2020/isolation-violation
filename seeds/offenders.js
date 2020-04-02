
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('offenders').del()
    .then(function () {
      // Inserts seed entries
      return knex('offenders').insert([
        { id: 1001, image: 'https://avatars1.githubusercontent.com/u/228761?s=460&v=4', name: 'Don' },
        { id: 1002, image: 'https://ca.slack-edge.com/T02SQPVAC-USDHA4C95-68f00be72a32-512', name: 'Lane', },
        { id: 1003, image: 'https://ca.slack-edge.com/T02SQPVAC-U02T23R4Z-g8f5600722c7-512', name: 'JV' },
        { id: 1004, image: 'https://ca.slack-edge.com/T02SQPVAC-UQSQFS4M8-2c86e05b6968-512', name: 'Matt Uy' },
        { id: 1005, image: 'https://avatars0.githubusercontent.com/u/13424563?s=460&u=adcbdf1afe9a186cc5d5dfe08eeb3ff5224a2186&v=4', name: 'Joseph' },
        { id: 1006, image: 'https://avatars0.githubusercontent.com/u/30305644?s=460&u=48b669c5ab780f1bb5b1d45f038d99c6447a523a&v=4', name: 'Emily' },
        { id: 1007, image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIwNjA4NjMzOTU5NTgxMTk2/bob-ross-9464216-1-402.jpg', name: 'Bob Ross' },
      ]);
    });
};
