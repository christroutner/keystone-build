/**
 * RTB Form - Tactic Model
 * ===========
 * This model mimics the TACTICS.
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

var RTBTactic = new keystone.List('RTBTactic', {
        map: { name: 'advertiserName' },
	defaultSort: '-advertiserName'
});

RTBTactic.add({

    advertiserName: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    destinationURL: { type: String },
    //desktopTargets: { type: String },
    //mobileTargets: { type: String },
		geoTarget: { type: String },
    zipcodes: { type: String },
    hyperlocal_lat: { type: String }, //CSV string of latitude coordinates.
    hyperlocal_long: { type: String }, //CSV string of longitude coordinates.
    notes: { type: String },
    order: { type: String },    //Parent Order GUID
    campaign: { type: String },  //Parent Campaign GUID
		imgGUID: { type: String },	//GUIDs to the images uploaded with the tactic.
		imgURL: { type: String }	//URLs to the images themselves

});


RTBTactic.defaultColumns = 'advertiserName';
RTBTactic.register();

