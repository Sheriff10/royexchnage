export const INITIAL_STAKING_REDUCER = {
   staking_name: "",
   staking_apy: "",
   staking_days: "",
   deposit_amount: "",
   deposit_hash: "",
};

export const stakingReducer = (state, action) => {
   switch (action.type) {
      case "STAKING_DATA":
         return {
            ...state,
            staking_name: action.payload.name,
            staking_apy: action.payload.apy,
            staking_days: action.payload.days,
         };

      case "DEPOSIT_AMOUNT":
         return { ...state, deposit_amount: action.payload };

      case "DEPOSIT_HASH":
         return { ...state, deposit_hash: action.payload };
      default:
         break;
   }
};
