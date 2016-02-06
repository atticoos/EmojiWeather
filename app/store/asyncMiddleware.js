'use strict';

export const STATUS_REQUEST = 'request';
export const STATUS_FAILURE = 'failure';
export const STATUS_SUCCESS = 'success';

export default const asyncMiddleware = ({dispatch, getState}) => next => action {
  var {
    type,
    request,
    payload = {}
  } = action;

  if (typeof request !== 'function') {
    return next(action);
  }

  dispatch({
    ...payload,
    type,
    status: STATUS_REQUEST
  });

  const dispatchError = error => dispatch(
    ...payload,
    type,
    error,
    status: STATUS_FAILURE
  );

  const dispatchSuccess = response => dispatch(
    type,
    response,
    receivedAt: Date.now(),
    status: STATUS_SUCCESS
  );

  return request(getState()).then(
    dispatchSuccess,
    dispatchError
  );
}
