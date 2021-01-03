import { createSelector } from 'reselect';

const selectRaw = (state) => state.courseRegistration.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseRegistrationDestroySelectors = {
  selectLoading,
};

export default courseRegistrationDestroySelectors;
