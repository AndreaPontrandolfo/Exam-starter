import { init } from '@rematch/core';

import * as models from './models';

export const store = init({
  models,
});

export const { dispatch, } = store;
                                                  // state = { count: 0 }
// reducers
dispatch({ type: `count/increment`, payload: 1, }); // state = { count: 1 }
dispatch.count.increment(1);                       // state = { count: 2 }

dispatch({ type: `colors/add`, payload: `red`, }); // state = { count: 1 }
dispatch.colors.addColor(`red`);   
                    // state = { count: 2 }

// effects
dispatch({ type: `count/incrementAsync`, payload: 1, }); // state = { count: 3 } after delay
dispatch.count.incrementAsync(1);                       // state = { count: 4 } after delay