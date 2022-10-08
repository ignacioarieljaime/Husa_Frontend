
	import Layout from "components/common/Layout/Layout"
	  import MoreTvHead from 'components/page/MoreTv/MoreTvHead'; import MoreTvLessTalk from 'components/page/MoreTv/MoreTvLessTalk'; import MoreTvExperts from 'components/page/MoreTv/MoreTvExperts'; import MoreTvNewHisensePromise from 'components/page/MoreTv/MoreTvNewHisensePromise'; import MoreTvNewItemsBox from 'components/page/MoreTv/MoreTvNewItemsBox'; import MoreTvLessTalkForm from 'components/page/MoreTv/MoreTvLessTalkForm';

	  function MoreTvNew() {
	    return (
			<Layout>
	      <section className={'more-tv'}> <MoreTvHead /> <MoreTvLessTalk /> <MoreTvExperts /> <MoreTvNewHisensePromise /> <MoreTvNewItemsBox /> <MoreTvLessTalkForm /></section>
		</Layout>
	    )
	  }

	  export default MoreTvNew