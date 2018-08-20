import C from './constants';

export const addProj = ({id, title, endDate}) => {

    return ({
        type:C.ADD_PROJ,
        payload: {
            id, title, endDate
        }
    })
}

export const delProj = (id) => {
    return ({
        type:C.DEL_PROJ,
        payload: id
    })
}