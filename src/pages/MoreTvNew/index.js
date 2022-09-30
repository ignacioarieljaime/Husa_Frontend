
	import Layout from "components/common/Layout/Layout"
	  import MoreTvHead from 'components/Page/MoreTv/MoreTvHead'; import MoreTvLessTalk from 'components/Page/MoreTv/MoreTvLessTalk'; import MoreTvExperts from 'components/Page/MoreTv/MoreTvExperts'; import MoreTvNewHisensePromise from 'components/Page/MoreTv/MoreTvNewHisensePromise'; import MoreTvNewItemsBox from 'components/Page/MoreTv/MoreTvNewItemsBox'; import MoreTvLessTalkForm from 'components/Page/MoreTv/MoreTvLessTalkForm';

	  function MoreTvNew() {
	    return (
			<Layout>
	      <section className={'more-tv'}> <MoreTvHead /> <MoreTvLessTalk /> <MoreTvExperts /> <MoreTvNewHisensePromise /> <MoreTvNewItemsBox /> <MoreTvLessTalkForm /></section>
		</Layout>
	    )
	  }

	  export default MoreTvNew