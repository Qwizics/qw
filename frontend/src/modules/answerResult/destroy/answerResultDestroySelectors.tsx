import { createSelector } from 'reselect';

const selectRaw = (state) => state.answerResult.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const answerResultDestroySelectors = {
  selectLoading,
};

export default answerResultDestroySelectors;
