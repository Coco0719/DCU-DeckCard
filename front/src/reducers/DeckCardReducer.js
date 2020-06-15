

export const deckcardInitialState = {
  decks: [
    // {
    //   id: 1,
    //   title: "JAVA",
    //   desc: "Anotation Hello Anotation Hello Anotation Hello Anotation Hello Anotation Hello Anotation Hello",
    //   cards: [
    //     {
    //     },
    //     {
    //     }
    //   ]
    // },
  ],
  favoritIds: [],
}

export const deckcardReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_DECK":
      console.log(`Reducer ADD_DECK`);
      return {
        ...state,
        decks: [
          ...state.decks,
          {
            id: state.decks.length,
            title: payload.deckInfo.title,
            desc: payload.deckInfo.desc,
            cards: []
          }
        ]
      }
    case "DELETE_DECK":
      console.log(`Reducer DELETE_DECK` + payload.deckId);
      return {
        ...state,
        decks: state.decks.filter(deck => deck.id !== parseInt(payload.deckId))
      }
    case "STUDY_DECK":
      console.log(`Reducer STUDY_DECK` + payload.deckId);
      return {
        ...state,
        decks: state.decks.filter(deck => deck.id !== parseInt(payload.deckId)).concat(
          state.decks.filter(deck => deck.id === parseInt(payload.deckId))
        )
      }
    case "ADD_FAVORITE":
      console.log(`Reducer ADD_FAVORITE` + payload.deckId);
      const exist = state.favoritIds.filter(id => id === parseInt(payload.deckId));
      console.log('exist ' + JSON.stringify(exist))
      if (exist.length !== 0) return { ...state }
      return {
        ...state,
        favoritIds: [...state.favoritIds, parseInt(payload.deckId)]
      }
    case "DELETE_FAVORITE":
      console.log(`Reducer DELETE_FAVORITE` + payload.deckId);
      return {
        ...state,
        favoritIds: state.favoritIds.filter(id => id !== parseInt(payload.deckId))
      }

    default:
      console.log(`No Match DeckCardReducer`)
      break;
  }
}