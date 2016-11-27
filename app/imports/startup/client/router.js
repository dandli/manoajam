import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.route('/userpage/', {
  name: 'User_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Page' });
  },
});

FlowRouter.route('/browse/', {
  name: 'Browse_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Browse_Page' });
  },
});

FlowRouter.route('/homepage/', {
  name: 'User_Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Home_Page' });
  },
});

FlowRouter.route('/schedule/', {
  name: 'Schedule_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Schedule_Page' });
  },
});

FlowRouter.route('/editpage/', {
  name: 'Edit_User_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_User_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
