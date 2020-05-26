

export const changeMainContent = (_contentStatus) => ({
  type: "CHANGE_MAIN_CONTENT",
  payload: {
    contentStatus: _contentStatus
  }
})

export const toggleToolbar = (_isOpen) => ({
  type: "TOGGLE_TOOLBAR",
  payload: {
    isOpen: _isOpen
  }
})