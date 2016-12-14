/**
 *
 * Created by kenchen on 11/13/16.
 */
import { Template } from 'meteor/templating';
import { Schedules } from '../../api/sessions/sessions.js';

Template.User_Page.helpers({

  /**
   * @returns {*} All of the Schedule documents.
   */
  scheduleList() {
    return Schedules.find();
  },
});

