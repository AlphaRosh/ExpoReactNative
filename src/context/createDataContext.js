import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    //Context object
  const Context = React.createContext();

    //Provider object
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => {} } }
      const boundActions = {};
      //looping through actions object
      for (let key in actions) {
        //'key'=== 'addBlogPost'
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
