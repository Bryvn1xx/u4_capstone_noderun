'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'posts',
      [
        {
          name: '404 err',
          img: 'https://www.howtogeek.com/wp-content/uploads/2018/05/2018-06-03-2.png?trim=1,1&bg-color=000&pad=1,1',
          description: 'got this error after opening browser, not sure whats going on :(',
          feedId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {})
  }
};
