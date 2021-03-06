export const getMyDrives = (state: RootState): Drive[] => {
  return Object.values(state.drive.byId);
};

export const getMyDecks = (state: RootState): Deck[] => {
  const uid = state.user.uid;
  if (state.share.user[uid]) {
    return Object.values(state.share.user[uid].deck.byId);
  } else {
    return [];
  }
};

export const getCurrentPage = (state: RootState): NavState | undefined => {
  const i = state.nav.index;
  const r = state.nav.routes;
  if (r) {
    const i2 = r[i].index;
    const r2 = r[i].routes;
    if (r2) {
      return r2[i2];
    }
  }
  return undefined;
};

export const getCurrentDeck = (state: RootState): Deck => {
  const r = getCurrentPage(state);
  const deck_id = r && r.params && r.params.deck_id;
  return state.deck.byId[deck_id] || {};
};

export const getCardList = (state: RootState, deck_id: number) => {
  const all = state.card.byDeckId[deck_id] || [];
  return all.map(id => state.card.byId[id]);
};

export const getCurrentCard = (state: RootState): Card => {
  const cards = getCurrentCardList(state);
  const deck = getCurrentDeck(state);
  if (deck.currentIndex >= 0) {
    return cards[deck.currentIndex];
  }
  return {} as Card;
};
export const getCurrentCardList = (state: RootState): Card[] => {
  const config = state.config;
  const deck_id = getCurrentDeck(state).id;
  if (deck_id) {
    const ids = state.card.byDeckId[deck_id] || [];
    const cards = ids
      .map(id => state.card.byId[id])
      .filter(c => !!c) // defensive
      .filter(c => {
        if (config.showMastered) {
          return true;
        } else {
          return !c.mastered;
        }
      });
    return cards.slice(config.start);
  } else {
    return [];
  }
};
