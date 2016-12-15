/**
 *
 * Created by kenchen on 12/13/16.
 */
import {Schedules} from '../../api/sessions/sessions.js';
import {_} from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const scheduleSeeds = [
  {
    groupname: 'manoajams',
    members: 'manoajammers',
    songs: 'manoajam',
    email: 'manoajams@hawaii.edu',
    date: 'January 01, 1:00 PM'
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Schedules.find().count() === 0) {
  _.each(scheduleSeeds, function seedSchedules(stuff) {
    Schedules.insert(stuff);
  });
}
