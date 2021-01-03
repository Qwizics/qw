import { createSelector } from 'reselect';

const selectRaw = (state) => state.examQuestion.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const examQuestionDestroySelectors = {
  selectLoading,
};

export default examQuestionDestroySelectors;
