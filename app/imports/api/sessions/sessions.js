/**
 *
 * Created by kenchen on 12/13/16.
 */
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Schedules = new Mongo.Collection('Schedules');

/**
 * Create the schema for Stuff
 */
export const ScheduleSchema = new SimpleSchema({
  groupname: {
    label: 'groupname',
    type: String,
    optional: false,
    max: 20,
  },
  members: {
    label: 'members',
    type: String,
    optional: false,
    max: 20,
  },
  songs: {
    label: 'songs',
    type: String,
    optional: false,
    max: 20,
  },
  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 20,
  },
  date: {
    label: 'date',
    type: String,
    optional: false,
    max: 20,
  },
});

Schedules.attachSchema(ScheduleSchema);
