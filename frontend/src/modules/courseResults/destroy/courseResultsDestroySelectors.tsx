import { createSelector } from 'reselect';

const selectRaw = (state) => state.courseResults.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseResultsDestroySelectors = {
  selectLoading,
};

export default courseResultsDestroySelectors;
