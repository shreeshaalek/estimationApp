import ProjListContainer from '../../components/projList'
import { addProj, delProj } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = (state) =>
    ({
        projLists: state.handleProjList
    })

const mapDispatchToProps = dispatch =>
    ({
        deleteProj(id) {
            dispatch(
                delProj(id)
            );
        },
        addNewProj(projObj) {
            dispatch(
                addProj(projObj)
            );
        }
    })

export default withRouter(connect (mapStateToProps, mapDispatchToProps)(ProjListContainer));
