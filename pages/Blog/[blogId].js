
	import Layout from "./../../components/common/Layout/Layout"
	  import BlogHead from './../../components/page/Blog/BlogHead'; import ImageBox from './../../components/common/ImageBox'; import BlogDescriptionBox from './../../components/page/Blog/BlogDescriptionBox'; import BlogImageGalleryBox from './../../components/page/Blog/BlogImageGalleryBox'; import BlogSecondDescriptionBox from './../../components/page/Blog/BlogSecondDescriptionBox'; import BlogImageAndTextBox from './../../components/page/Blog/BlogImageAndTextBox'; import BlogVideoBox from './../../components/page/Blog/BlogVideoBox'; import BlogTwoImage from './../../components/page/Blog/BlogTwoImage'; import BlogEasySlider from './../../components/page/Blog/BlogEasySlider'; import BlogBigImageAndTextBox from './../../components/page/Blog/BlogBigImageAndTextBox'; import BlogDescriptionWithShare from './../../components/page/Blog/BlogDescriptionWithShare'; import BlogCubeSlider from './../../components/page/Blog/BlogCubeSlider'; import BlogMoreStories from './../../components/page/Blog/BlogMoreStories';

	  function Blog() {
	    return (
			<Layout>
	      <section className={'blog article-inner'}> <BlogHead /> <ImageBox /> <BlogDescriptionBox /> <BlogImageGalleryBox /> <BlogSecondDescriptionBox /> <BlogImageAndTextBox /> <BlogVideoBox /> <BlogDescriptionBox /> <BlogTwoImage /> <BlogDescriptionBox /> <BlogSecondDescriptionBox /> <BlogEasySlider /> <BlogImageAndTextBox /> <BlogBigImageAndTextBox /> <BlogDescriptionWithShare /> <BlogCubeSlider /> <BlogMoreStories /></section>
		</Layout>
	    )
	  }

	  export default Blog