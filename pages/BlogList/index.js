
	import Layout from "./../../components/common/Layout/Layout"
	  import BlogListHead from './../../components/page/BlogList/BlogListHead'; import BlogListSearchBox from './../../components/page/BlogList/BlogListSearchBox'; import BlogListReadArticleBox from './../../components/page/BlogList/BlogListReadArticleBox'; import BlogListLittleReadArticleBox from './../../components/page/BlogList/BlogListLittleReadArticleBox'; import BlogListSoundBarItemsBox from './../../components/page/BlogList/BlogListSoundBarItemsBox';

	  function BlogList() {
	    return (
			<Layout>
	      <section className={'blog'}> <BlogListHead /> <BlogListSearchBox /> <BlogListReadArticleBox /> <BlogListLittleReadArticleBox /> <BlogListSoundBarItemsBox /> <BlogListReadArticleBox /></section>
		</Layout>
	    )
	  }

	  export default BlogList