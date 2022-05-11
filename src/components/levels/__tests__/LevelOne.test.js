import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { LevelOne } from '../LevelOne';
import { AppContext } from '../../../AppContext';
import { PouchBook } from '../../pouch-items/PouchBook';
import { PouchPaper4 } from '../../pouch-items/PouchPaper4';
import { PouchPaper5 } from '../../pouch-items/PouchPaper5';

describe('LevelOne', () => {
  const setPouch = jest.fn();
  const setHasBook = jest.fn();
  const setHasKeyOne = jest.fn();
  const setHasPaper4 = jest.fn();
  const setHasPaper5 = jest.fn();
  const setPadlockSolved = jest.fn();
  const setLogs = jest.fn();
  const setDoorOneOpen = jest.fn();
  const setPlayerLocation = jest.fn();
  const pouch = [];
  const logs = [];
  
  describe('paper4', () => {
    it('renders paper 4 in main view if user has not picked it up', () => {
      render(
        <AppContext.Provider
          value={{
            hasPaper4: false,
          }}
        >
          <LevelOne />
        </AppContext.Provider>
      );

      expect(screen.getByTestId('paper-4')).toBeInTheDocument();
    });

    it('moves to pouch when user picks it up', () => {
      render(
        <AppContext.Provider
          value={{
            hasPaper4: false,
            setHasPaper4,
            setPouch,
            pouch,
            logs,
            setLogs,
          }}
        >
          <LevelOne />
        </AppContext.Provider>
      );

      const paper4 = screen.getByTestId('paper-4');

      fireEvent.click(paper4);

      expect(setHasPaper4).toHaveBeenCalledTimes(1);
      expect(setHasPaper4).toHaveBeenCalledWith(true);
      expect(setPouch).toHaveBeenCalledTimes(1);

      const pouchPaper4 = setPouch.mock.calls[0][0][0];

      // expect the React element to be pouchPaper4
      expect(pouchPaper4.type).toEqual(PouchPaper4);
    });
  });

  describe('paper5', () => {
    it('renders paper 5 in main view if user has not picked it up', () => {
      render(
        <AppContext.Provider
          value={{
            hasPaper5: false,
          }}
        >
          <LevelOne />
        </AppContext.Provider>
      );

      expect(screen.getByTestId('paper-5')).toBeInTheDocument();
    });

    it('moves to pouch when user picks it up', () => {
      render(
        <AppContext.Provider
          value={{
            hasPaper5: false,
            setHasPaper5,
            setPouch,
            pouch,
            logs,
            setLogs,
          }}
        >
          <LevelOne />
        </AppContext.Provider>
      );

      const paper5 = screen.getByTestId('paper-5');

      fireEvent.click(paper5);

      expect(setHasPaper5).toHaveBeenCalledTimes(1);
      expect(setHasPaper5).toHaveBeenCalledWith(true);
      expect(setPouch).toHaveBeenCalledTimes(1);

      // Get the first mock call, then the first argument to that call (which in
      // this case is another array), then the first item in that array.
      const pouchPaper5 = setPouch.mock.calls[0][0][0];

      expect(pouchPaper5.type).toEqual(PouchPaper5);
    });
  });

  describe('book', () => {
    it('removes the book from the game interface when we click on it', () => {
      render(
        <AppContext.Provider
          value={{
            hasBook: false,
            setHasBook,
            setPouch,
            pouch,
            logs,
            setLogs,
          }}
        >
          <LevelOne />
        </AppContext.Provider>
      );

      const book = screen.getByTestId('book');

      fireEvent.click(book);

      expect(setHasBook).toHaveBeenCalledTimes(1);
      expect(setHasBook).toHaveBeenCalledWith(true);
      expect(setLogs).toHaveBeenCalledTimes(1);
      expect(setLogs).toHaveBeenCalledWith([
        { type: "inform", text: "You picked a dusty ol' book, what could possibly be written inside?" }
      ]);

      expect(setPouch).toHaveBeenCalledTimes(1);
      const mockPouchBook = setPouch.mock.calls[0][0][0];
      expect(mockPouchBook.type).toEqual(PouchBook);

    });
    it('book is not on the game interface when hasBook is true', () => {
      render(
        <AppContext.Provider
          value={{
            hasBook: true,
            setHasBook,
            setPouch,
            pouch,
            logs,
            setLogs,
          }}
        >
          <LevelOne />
        </AppContext.Provider>
      );

      
      expect(screen.queryByTestId('book')).not.toBeInTheDocument();
      
    });
  });

  describe('padlock', () => {
    it('opens the safe and renders the key when we enter the correct password', () => {
      render(
        <AppContext.Provider
          value={{
            setPadlockSolved,
            logs,
            setLogs,
          }}
        >
          <LevelOne />
        </AppContext.Provider>
      );

      const padlock = screen.getByTestId('padlock');

      expect(screen.queryByTestId('padlock-form')).not.toBeInTheDocument();

      fireEvent.click(padlock);

      const padlockForm = screen.getByTestId('padlock-form');

      expect(padlockForm).toBeInTheDocument();

      const textInput = within(padlockForm).getByRole('textbox');
      const submitButton = within(padlockForm).getByRole('button');

      fireEvent.change(textInput, { target: { value: '1940' }})
      fireEvent.click(submitButton);

      expect(screen.getByTestId('key')).toBeInTheDocument();
    });
  });

  

  describe('key', () => {
    it('is not on the page until the padlock is solved', () => {
      render(
        <AppContext.Provider
          value={{
            hasKeyOne: false,
            setHasKeyOne,
            setPouch,
            pouch,
            logs,
            setLogs,
          }}
        >
          <LevelOne />
        </AppContext.Provider>
      );

      expect(screen.queryByTestId('key')).not.toBeInTheDocument();
    });

    it('shows key when the padlock is solved', () => {
      render(
        <AppContext.Provider
          value={{
            hasKeyOne: false,
            setHasKeyOne,
            setPouch,
            setPadlockSolved,
            pouch,
            logs,
            setLogs,
          }}
        >
          <LevelOne />
        </AppContext.Provider>
      );

      const padlock = screen.getByTestId('padlock');
      
      fireEvent.click(padlock);
      
      const padlockForm = screen.getByTestId('padlock-form');
      const textInput = within(padlockForm).getByRole('textbox');
      const submitButton = within(padlockForm).getByRole('button');
      
      fireEvent.change(textInput, { target: { value: '1940' }});
      fireEvent.click(submitButton);

      expect(screen.getByTestId('key')).toBeInTheDocument();

    });
    
    it('removes it from game interface when you click it', () => {
      render(
        <AppContext.Provider
        value={{
            setPadlockSolved,
            setHasKeyOne,
          logs,
          setLogs,
          pouch,
          setPouch
        }}
        >
          <LevelOne />
        </AppContext.Provider>
      );
      
      const padlock = screen.getByTestId('padlock');
      
      fireEvent.click(padlock);
      
      const padlockForm = screen.getByTestId('padlock-form');
      const textInput = within(padlockForm).getByRole('textbox');
      const submitButton = within(padlockForm).getByRole('button');
      
      fireEvent.change(textInput, { target: { value: '1940' }});
      fireEvent.click(submitButton);
      
      const key = screen.getByTestId('key')
      expect(key).toBeInTheDocument();
      fireEvent.click(key);
      
      expect(setHasKeyOne).toHaveBeenCalledTimes(1);
      expect(setHasKeyOne).toHaveBeenCalledWith(true);
    });
  });

  describe('door', () => {
    it('returns a warning message when clicked without the key', () => {
      render(
        <AppContext.Provider
          value={{
            hasKeyOne: false,
            logs,
            setLogs,
          }}
        >
          <LevelOne />
        </AppContext.Provider>
      );

      const door = screen.getByTestId('door');


      fireEvent.click(door);


      expect(door).toBeInTheDocument();

      expect(setLogs).toHaveBeenCalledTimes(1);
      expect(setLogs).toHaveBeenCalledWith([
        { type:"warning", text: "You really expected the door to open? It's LOCKED! Can't blame you for trying though. Have a look around to see if you find a key!" }
      ]);
    });

    it('opens the door and reveals the arrow when clicked with key', () => {
      render(
        <AppContext.Provider
          value={{
          hasKeyOne: true,
          setDoorOneOpen,
          logs,
          setLogs,
          }}
        >
          <LevelOne />
        </AppContext.Provider>
      );
      
      const door = screen.getByTestId('door');
      fireEvent.click(door);

      expect(setLogs).toHaveBeenCalledTimes(1);
      expect(setLogs).toHaveBeenCalledWith([
        { type:"success", text: "You insert the key, and it magically opens the door!" }
      ]);
      expect(setDoorOneOpen).toHaveBeenCalledTimes(1);
      expect(setDoorOneOpen).toHaveBeenCalledWith(true);



    });

    it('shows the arrow when door is opened', () => {
      render(
        <AppContext.Provider
          value={{
          hasKeyOne: true,
          doorOneOpen: true,
          setPlayerLocation,
          logs,
          setLogs,
          }}
        >
          <LevelOne />
        </AppContext.Provider>
      );
      
      
      const arrow = screen.getByTestId('arrow-forward')
      expect(arrow).toBeInTheDocument();
      fireEvent.click(arrow);
      expect(setLogs).toHaveBeenCalledTimes(1);
      expect(setLogs).toHaveBeenCalledWith([
        { type:"inform", text: "You tip toe into the kitchen... these rich folk probably got bare munch"}
      ]);
      expect(setPlayerLocation).toHaveBeenCalledTimes(1);
      expect(setPlayerLocation).toHaveBeenCalledWith(2);

    });
  });





});
