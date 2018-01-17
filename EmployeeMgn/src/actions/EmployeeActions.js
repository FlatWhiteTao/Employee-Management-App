// on action creator to update any specific prop
import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // define a path to a json store
  const { currentUser } = firebase.auth();
  // get the reference to the location of our database store
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
};
