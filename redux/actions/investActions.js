const createInvest = invest => {
  return {
    type: "CREATE_INVEST",
    payload: invest
  };
};

export { createInvest };
