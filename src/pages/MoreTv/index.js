
	import Layout from "components/common/Layout/Layout"
	  import MoreTvHead from 'components/Page/MoreTv/MoreTvHead'; import MoreTvBox from 'components/Page/MoreTv/MoreTvBox'; import MoreTvVideoBox from 'components/Page/MoreTv/MoreTvVideoBox'; import MoreTvAmericaBox from 'components/Page/MoreTv/MoreTvAmericaBox'; import MoreTvGetReal from 'components/Page/MoreTv/MoreTvGetReal'; import MoreTvLessTalk from 'components/Page/MoreTv/MoreTvLessTalk'; import MoreTvHisensePromise from 'components/Page/MoreTv/MoreTvHisensePromise'; import MoreTvGrabSlider from 'components/Page/MoreTv/MoreTvGrabSlider'; import MoreTvLessTalkForm from 'components/Page/MoreTv/MoreTvLessTalkForm'; import MoreTvExperts from 'components/Page/MoreTv/MoreTvExperts';

	  function MoreTv() {
	    return (
			<Layout>
	      <section className={'more-tv'}> <MoreTvHead /> <MoreTvBox /> <MoreTvVideoBox /> <MoreTvAmericaBox /> <MoreTvGetReal /> <MoreTvLessTalk /> <MoreTvHisensePromise /> <MoreTvGrabSlider /> <MoreTvLessTalkForm /> <MoreTvExperts /></section>
		</Layout>
	    )
	  }

	  export default MoreTv