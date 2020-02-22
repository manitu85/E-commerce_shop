import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionIsLoaded } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../hoc/with-spinner.component'
import CollectionPage from './collection.component'


const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionIsLoaded(state)
})

const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionsPageContainer




