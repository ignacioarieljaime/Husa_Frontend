
	import Layout from "components/common/Layout/Layout"
	  import MoreTvHead from 'components/page/MoreTv/MoreTvHead'; import MoreTvBox from 'components/page/MoreTv/MoreTvBox'; import MoreTvVideoBox from 'components/page/MoreTv/MoreTvVideoBox'; import MoreTvAmericaBox from 'components/page/MoreTv/MoreTvAmericaBox'; import MoreTvGetReal from 'components/page/MoreTv/MoreTvGetReal'; import MoreTvLessTalk from 'components/page/MoreTv/MoreTvLessTalk'; import MoreTvHisensePromise from 'components/page/MoreTv/MoreTvHisensePromise'; import MoreTvGrabSlider from 'components/page/MoreTv/MoreTvGrabSlider'; import MoreTvLessTalkForm from 'components/page/MoreTv/MoreTvLessTalkForm'; import MoreTvExperts from 'components/page/MoreTv/MoreTvExperts';

	  function MoreTv() {
	    return (
			<Layout>
	      <section className={'more-tv'}> <MoreTvHead /> <MoreTvBox /> <MoreTvVideoBox /> <MoreTvAmericaBox /> <MoreTvGetReal /> <MoreTvLessTalk /> <MoreTvHisensePromise /> <MoreTvGrabSlider /> <MoreTvLessTalkForm /> <MoreTvExperts /></section>
		</Layout>
	    )
	  }

	  export default MoreTv