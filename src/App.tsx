import React, { ReactElement } from 'react';
import Button from './components/button';
import { ISelectedItemState } from './model';

function App(): ReactElement {
  const [state, setState] = React.useState<ISelectedItemState>({
    items: [],
    addItem: (item) => setState(({ items, ...oldState }) => ({
      ...oldState,
      items: [...items, item],
    })),

    removeItem: (item) => item,
    toggleItem: (item) => item,
  });

  return (
    <>
      <Button />
      {JSON.stringify(state)}
    </>
  );
}

export default App;
