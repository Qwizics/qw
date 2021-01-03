import { createSelector } from 'reselect';

const selectRaw = (state) => state.examAnswer.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const examAnswerDestroySelectors = {
  selectLoading,
};

export default examAnswerDestroySelectors;
