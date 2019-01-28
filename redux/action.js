import {createAction} from 'redux-actions';
import * as constants from './constant';
//action for register
export const getRegisterRequest=createAction(constants.GET_REGISTER_REQUEST);
export const getRegisterSuccess=createAction(constants.GET_REGISTER_SUCCESS);
export const getRegisterError=createAction(constants.GET_REGISTER_ERROR);