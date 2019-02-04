import { combineEpics } from 'redux-observable';

import { fooEpics } from './actions'

export default combineEpics(
    fooEpics
)