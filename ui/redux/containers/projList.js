import C from '../constants';
import ProjListContainer from '../../components/projList'
import { addProj } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) =>
    ({
        projLists: state.addProjToList
    })

const mapDispatchToProps = dispatch =>
    ({
        addNewProj(projObj) {
            dispatch(
                addProj(C.ADD_PROJ, projObj)
            );
        }
    });
export default connect (mapStateToProps, mapDispatchToProps)(ProjListContainer);
