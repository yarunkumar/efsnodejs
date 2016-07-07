/**
 * Investment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    invst: {
      type: 'string',
      required: true
    },

    details: {
      type: 'string',
      required: true
    },

    owner: {
      model: 'customer',
      required: true
    }
  }
};

