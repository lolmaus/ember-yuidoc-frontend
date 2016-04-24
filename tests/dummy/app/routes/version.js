/* jshint ignore:start */

import Ember from 'ember';

const {
  inject: {service},
  Route,
  RSVP
} = Ember;


export default Route.extend({

  // ----- Services -----
  ajaxYuidoc: service('ajax-yuidoc'),



  // ----- Overridden methods -----
  model ({owner, repo, version}) {
    return this
      .get('ajaxYuidoc')
      .retrieve({owner, repo, version})
      .then(yuiStuff => ({
        ...yuiStuff,
        owner,
        repo,
        versionName: version
      }));
  }
});