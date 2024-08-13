import { CREATE_VISIT, LIST_VISITS, UPDATE_VISIT } from "./type";

export const createVisit = (visitData) => ({
  type: CREATE_VISIT,
  payload: visitData,
});

export const updateVisit = (id, visitData) => ({
  type: UPDATE_VISIT,
  payload: { id, visitData },
});

export const listVisits = () => ({
  type: LIST_VISITS,
});



// Action to get a visit by its ID
export const getVisitById = (id) => {
    return (dispatch, getState) => {
      const { visits } = getState().visit;
      const visit = visits.find((v) => v.id === id);
      return visit;
    };
  };
