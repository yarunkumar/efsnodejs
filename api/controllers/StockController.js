/**
 * StockController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new': function(req, res, err) {
    Customer.findOne(req.param('owner'), function foundCustomer (err, customer) {
      if (err) return next(err);
      if (!customer) return next();
      res.view({
        customer: customer
      });
    });
  },

  create: function(req, res, next) {
    Stock.create(req.params.all(), function stockCreated(err, stock) {
      if (err) return next(err);

      res.redirect('/customer/show/' + stock.owner);
    });
  },
  index: function(req,res,next){
    Stock.find(function foundStocks (err, stocks){
      if(err) return next(err);
     console.log(stocks);
      res.view({
        stocks: stocks
      });
    });
  }

};

