import { useEffect, useReducer } from 'react';

const useLocalStoraje = (itemName, initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { watch } = state;

  const onError = (error) => {
    dispatch({ type: actionTypes.error, payload: error });
  };
  const onFavorite = (item) => {
    dispatch({ type: actionTypes.favorite, payload: item });
  };
  useEffect(() => {
    try {
      fetch('https://api.jikan.moe/v4/watch/promos/popular')
        .then((res) => res.json())
        .then((data) => {
          const watchHeader = data.data.splice(0, 5);
          dispatch({ type: actionTypes.watch, payload: watchHeader });
        });
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

      onFavorite(parsedItem);
    } catch (error) {
      onError(error);
    }
  }, []);
  return {
    watch,
  };
};

const initialState = ({ initialValue }) => ({
  error: false,
  loading: true,
  watch: [],
  favorites: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  watch: 'WATCH',
  favorites: 'FAVORITES',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.watch]: {
    ...state,
    error: false,
    loading: false,
    watch: payload,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStoraje };
