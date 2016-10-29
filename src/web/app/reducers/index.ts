import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { routerReducer, RouterState } from '@ngrx/router-store';

export interface AppState {
  router: RouterState;
}

export let reducers = {
  router: routerReducer
};

function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }
    return reducer(state, action);
  };
}

let DEV_REDUCERS = [stateSetter, storeFreeze];
if (['logger', 'both'].includes(STORE_DEV_TOOLS)) {
  DEV_REDUCERS.push(storeLogger());
}

let prodReducer = combineReducers(reducers);
let devReducer = compose(...DEV_REDUCERS, combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
  if (ENV !== 'development') {
    return prodReducer(state, action);
  } else {
    return devReducer(state, action);
  }
}
