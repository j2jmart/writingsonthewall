/**
 * FirstcontrollerController
 *
 * @description :: Server-side logic for managing firstcontrollers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index:function(req, res) {
		Login.find() .then (function(users)
			{
				res.json(users)
			}) 
	}
	
};

