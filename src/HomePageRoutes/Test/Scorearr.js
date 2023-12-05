export const scoreArr = (state, action) => {
  const { currentQ, E, I, S, N, T, F, J, P } = state;
  switch (action.type) {
    case "E":
      return { ...state, E: [...E, currentQ] };
    case "I":
      return { ...state, I: [...I, currentQ] };
    case "S":
      return { ...state, S: [...S, currentQ] };
    case "N":
      return { ...state, N: [...N, currentQ] };
    case "T":
      return { ...state, T: [...T, currentQ] };
    case "F":
      return { ...state, F: [...F, currentQ] };
    case "J":
      return { ...state, J: [...J, currentQ] };
    case "P":
      return { ...state, P: [...P, currentQ] };
    case "next":
      return { ...state, currentQ: currentQ + 1 };
    case "back":
      return { ...state, currentQ: currentQ - 1 };
    default:
      return;
  }
};
