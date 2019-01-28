
import * as actions from "../action"
import {BASE_URL} from "../../config/index";
import fireAjax from "../../services/index"
import {call,put} from "redux-saga/effects"

export function* getRegisterRequest(action) {
  console.log('uuuuuuuuuuuuuuuu',action.payload);
  
 try {
    const response = yield call(fireAjax, "POST", "api/", {
    ...action.payload
    });

    if (response) {
      console.log('333333333333333',response);
    //   yield put(actions.getRegisterSuccess(response.data));
    }
  } catch (e) {
    console.log('333333333333333',e.response.data);
    // yield put(actions.getRegisterError());
  }
 }