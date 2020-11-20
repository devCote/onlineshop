import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
import CollectionOverview from './collection-overview'
import WithSpinner from '../with-spinner/with-spinner.component'
import { compose } from 'redux'

const mapStatesToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
})

const CollectionsOverviewContainer = compose(
  connect(mapStatesToProps),
  WithSpinner
)(CollectionOverview)

export default CollectionsOverviewContainer
