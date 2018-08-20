import C from './constants'
export const addProj = ({title, endDate}) => {
    return ({
        type:C.ADD_PROJ,
        payload: {
            title, endDate
        }
    })
}