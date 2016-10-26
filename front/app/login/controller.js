// app/login/controller.js
import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).
        then(() => {
          console.log('Success! authenticated with token: ' + this.get('session.data.authenticated.access_token'));
        }, (err) => {
          alert('Error obtaining token: ' + err.responseText);
        }).
        catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
