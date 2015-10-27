'use strict';

/**
 * Factory: oz
 */
module.exports = ['Hawk', function(Hawk) {

	var oz = {};


	oz.client = {
		header: function(uri, method, ticket, options) {

			var settings = angular.copy(options || {});

			angular.extend(settings, {
				credentials: ticket,
				app: ticket.app,
				dlg: ticket.dlg
			});

			return Hawk.client.header(uri, method, settings);

		}
	}


	return oz;

}];
