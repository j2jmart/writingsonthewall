/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index:function(req, res) {
		Users.find() .then (function(users)
			{
				res.json(users)
			}) 
	}
};

