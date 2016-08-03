/**
 * DFP Form - Tactic Model
 * ===========
 * This model mimics the TACTICS.
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

var DFPTactic = new keystone.List('DFPTactic', {
  map: { name: 'advertiserName' },
	defaultSort: '-advertiserName'
});

DFPTactic.add({

    advertiserName: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    destinationURL: { type: String },
    imageSize: { type: String },
    imageSize_index: { type: Number },
    utmID: { type: String },
    adTag: { type: String },
    notes: { type: String },
    order: { type: String },    //Parent Order GUID
    campaign: { type: String },  //Parent Campaign GUID
		imgGUID: { type: String },	//GUIDs to the images uploaded with the tactic.
		imgURL: { type: String }	//URLs to the images themselves

});


DFPTactic.defaultColumns = 'advertiserName';
DFPTactic.register();

