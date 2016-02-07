'use strict';

export const STATUS_REQUEST = 'request';
export const STATUS_FAILURE = 'failure';
export const STATUS_SUCCESS = 'success';

const asyncMiddleware = ({dispatch, getState}) => next => action => {
  var {
    type,
    request,
    shouldRequest = () => true,
    payload = {}
  } = action;

  if (typeof request !== 'function') {
    return next(action);
  }

  if (!shouldRequest(getState())) {
    return;
  }

  dispatch({
    ...payload,
    type,
    status: STATUS_REQUEST
  });

  const dispatchError = error => dispatch({
    ...payload,
    type,
    error,
    status: STATUS_FAILURE
  });

  const dispatchSuccess = response => dispatch({
    ...payload,
    type,
    response,
    receivedAt: Date.now(),
    status: STATUS_SUCCESS
  });

  return request(getState()).then(
    dispatchSuccess,
    dispatchError
  );
}

export default asyncMiddleware;
