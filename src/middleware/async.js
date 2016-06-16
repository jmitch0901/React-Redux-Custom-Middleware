export default function({ dispatch }) {

  return next => action => {

    /*
      If the action does not have a payload, or
      the payload is NOT a promise (no .then),
      then we don't care about it. Pass it on!
    */
    if (!action.payload || !action.payload.then){
      console.log(action);
      return next(action);
    }

    //If we're here, then we DO have a promise!

    //1. Make sure the action's promise resolves
    action.payload
      .then(response => {
        //...action means extend my action, and override the paylaod property.
        const newAction = { ...action, payload:response };
        dispatch(newAction);
        //we use dispatch to re-run through all our middlewares
        //we do this so that we obey the irrelevant orders of middlewares
        //ex. maybe middleware 1 cared about the new result I just got from middleware 3 (this one)

      });


  };
};
