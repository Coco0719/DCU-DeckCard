

export const addDeck = (_titleInfo, _descInfo) => ({
  type: "ADD_DECK",
  payload: {
    deckInfo: {
      title: _titleInfo,
      desc: _descInfo
    }
  }
})

export const deleteDeck = (_deckId) => ({
  type: "DELETE_DECK",
  payload: {
    deckId: _deckId
  }
})

export const studyDeck = (_deckId) => ({
  type: "STUDY_DECK",
  payload: {
    deckId: _deckId
  }
})

export const addFavorite = (_deckId) => ({
  type: "ADD_FAVORITE",
  payload: {
    deckId: _deckId
  }
})

export const deleteFavorite = (_deckId) => ({
  type: "DELETE_FAVORITE",
  payload: {
    deckId: _deckId
  }
})