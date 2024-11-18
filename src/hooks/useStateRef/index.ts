import { useState, useRef, useCallback, Dispatch, SetStateAction, MutableRefObject } from 'react';

function useStateRef<S>(initialValue: S | (() => S)): [S, Dispatch<SetStateAction<S>>, MutableRefObject<S>] {
  const [state, setState] = useState(initialValue);

  const stateRef = useRef(state);

  const setStateAndRef = useCallback((newValue: SetStateAction<S>) => {
    setState((prevState) => {
      const nextState = typeof newValue === 'function' ? (newValue as (prev: S) => S)(prevState) : newValue;
      stateRef.current = nextState;
      return nextState;
    });
  }, []);

  return [state, setStateAndRef, stateRef];
}

export default useStateRef;