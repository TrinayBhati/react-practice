const initialState = 0;

const bankingReducer = (state=initialState, action) =>{
    switch(action.type){
        case "DEPOSIT":
            return state + action.amount;
        case"WITHDRAW":
            return state - action.amount;
        case "COLLECT_INTEREST":
            return state * 1.03;
        case "DELETE_ACCOUNT":
            return 0;
        default:
             return state;
    }
}
export default bankingReducer;

//deposit
// {
//     type: "DEPOSIT",
//     amount: 10,
// }

//withdraw
// {
//     type: "WITHDRAW",
//     amount: 10,
// }

//collect interest
//{
//     type: "COLLECT_INTEREST",
// }

//delete account
//{
//     type: "DELETE_ACCOUNT",
// }