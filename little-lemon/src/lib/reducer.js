const  availableTimes = (state, action, updateTimes)=>{
    switch(action.type){

        case 'updateTimes':
            return {...state, availableTimes: updateTimes(action.payload)}
        
        default:
            throw new Error(`${action.type} does not exist`)
            
    }
}

export default availableTimes