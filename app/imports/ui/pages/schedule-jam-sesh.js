/**
 *
 * Created by kenchen on 11/20/16.
 */
import { Template } from 'meteor/templating';

Template.Schedule_Page.onRendered(function enableDropDown() {
  this.$('.dropdown').dropdown();
});

