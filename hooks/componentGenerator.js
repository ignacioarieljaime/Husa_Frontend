import React from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ProductsBox = dynamic(() => import('components/common/ProductsBox'))
const TextEditor = dynamic(() => import('components/common/TextEditor'))
const ImageBox = dynamic(() => import('components/common/ImageBox'))
const LetsGetRealTextBox = dynamic(() =>
	import('components/common/LetsGetRealTextBox')
)
const Header = dynamic(() => import('components/common/Header/Header'))
const NeedHelpBox = dynamic(() => import('components/common/NeedHelpBox'))
const BreadCrumb = dynamic(() => import('components/common/BreadCrumb'))
const IFrame = dynamic(() => import('components/common/IFrame'))
const UnauthorizedListCommon = dynamic(() =>
	import('components/common/UnauthorizedListCommon')
)
const OfferClaimForm = dynamic(() => import('components/common/OfferClaimForm'))
const SimpleImagesList = dynamic(() =>
	import('components/common/SimpleImagesList')
)
const PromoBanner = dynamic(() => import('components/common/PromoBanner'))
const AuthorizedRetailersBadge = dynamic(() =>
	import('components/page/AuthorizedRetailers/AuthorizedRetailersBadge')
)
const AuthorizedRetailersFeatures = dynamic(() =>
	import('components/page/AuthorizedRetailers/AuthorizedRetailersFeatures')
)
const AuthorizedRetailersNote = dynamic(() =>
	import('components/page/AuthorizedRetailers/AuthorizedRetailersNote')
)
const AuthorizedRetailersLogos = dynamic(() =>
	import('components/page/AuthorizedRetailers/AuthorizedRetailersLogos')
)
const UnauthorizedList = dynamic(() =>
	import('components/page/AuthorizedRetailers/UnauthorizedList')
)
const LandingSlider = dynamic(() =>
	import('components/page/Landing/LandingSlider')
)
const LandingProductsBox = dynamic(() =>
	import('components/page/Landing/LandingProductsBox')
)
const LandingVideoPlayer = dynamic(() =>
	import('components/page/Landing/LandingVideoPlayer.js')
)
const ProductsBanner = dynamic(() =>
	import('components/page/Products/ProductsBanner')
)
const ProductsGrid = dynamic(() =>
	import('components/page/Products/ProductsGrid')
)
const ProductsBannerV2 = dynamic(() =>
	import('components/page/ProductsV2/ProductsBannerV2')
)
const ProductsGridV2 = dynamic(() =>
	import('components/page/ProductsV2/ProductsGridV2')
)
const ProductInfoAndSliderBox = dynamic(() =>
	import('components/page/Product/ProductInfoAndSliderBox')
)
const ProductInfoAndSliderBoxV2 = dynamic(() =>
	import('components/page/Product/ProductInfoAndSliderBoxV2')
)
const ProductTextWithImageBox = dynamic(() =>
	import('components/page/Product/ProductTextWithImageBox')
)
const RelatedProducts = dynamic(() =>
	import('components/page/Product/RelatedProducts')
)
const ProductFeatureWithImage = dynamic(() =>
	import('components/page/Product/ProductFeatureWithImage')
)
const CompareProduct = dynamic(() =>
	import('components/page/Product/CompareProduct')
)
const ProductWhereToBuy = dynamic(() =>
	import('components/page/Product/ProductWhereToBuy')
)
const ListImageBox = dynamic(() =>
	import('components/page/Product/ListImageBox')
)
const ProductBigScreenTextsBox = dynamic(() =>
	import('components/page/Product/ProductBigScreenTextsBox')
)
const ProductFeatureWithParagraph = dynamic(() =>
	import('components/page/Product/ProductFeatureWithParagraph')
)
const ProductTextWithIcon = dynamic(() =>
	import('components/page/Product/ProductTextWithIcon')
)
const ProductStaticContent = dynamic(() =>
	import('components/page/Product/ProductStaticContent')
)
const ProductCategoryBox = dynamic(() =>
	import('components/page/Product/ProductCategoryBox')
)
const ProductCategoryBoxV2 = dynamic(() =>
	import('components/page/Product/ProductCategoryBoxV2')
)
const ProductImageBox = dynamic(() =>
	import('components/page/Product/ProductImageBox')
)
const ProductBigContent = dynamic(() =>
	import('components/page/Product/ProductBigContent')
)
const ProductFeaturesWithIcon = dynamic(() =>
	import('components/page/Product/ProductFeaturesWithIcon')
)
const ProductRelatedItemsBox = dynamic(() =>
	import('components/page/Product/ProductRelatedItemsBox')
)
const ProductReviewBox = dynamic(() =>
	import('components/page/Product/ProductReviewBox')
)
const ProductNewsBox = dynamic(() =>
	import('components/page/Product/ProductNewsBox')
)
const ProductBottomImageBox = dynamic(() =>
	import('components/page/Product/ProductBottomImageBox')
)
const ProductDetailsBox = dynamic(() =>
	import('components/page/Product/ProductDetailsBox')
)
const ProductFineMeInStore = dynamic(() =>
	import('components/page/Product/ProductFindMeInStore')
)
const ProductResourceBox = dynamic(() =>
	import('components/page/Product/ProductResourceBox')
)
const ProductPackageHeader = dynamic(() =>
	import('components/page/Product/ProductPackageHeader')
)
const ProductPackagesSlider = dynamic(() =>
	import('components/page/Product/ProductPackagesSlider')
)
const SmartInfoHead = dynamic(() =>
	import('components/page/SmartInfo/SmartInfoHead')
)
const ProductFeatureWithImageWithBTN = dynamic(() =>
	import('components/page/SmartInfo/ProductFeatureWithImageWithBTN')
)
const SmartInfoTvsBox = dynamic(() =>
	import('components/page/SmartInfo/SmartInfoTvsBox')
)
const SmartInfoTextBox = dynamic(() =>
	import('components/page/SmartInfo/SmartInfoTextBox')
)
const SmartInfoTextAndImageBox = dynamic(() =>
	import('components/page/SmartInfo/SmartInfoTextAndImageBox')
)
const SmartInfoInteractBox = dynamic(() =>
	import('components/page/SmartInfo/SmartInfoInteractBox')
)
const SmartInfoFindHisense = dynamic(() =>
	import('components/page/SmartInfo/SmartInfoFindHisense')
)
const SmartInfoBetterNewOrOldBox = dynamic(() =>
	import('components/page/SmartInfo/SmartInfoBetterNewOrOldBox')
)
const SupportHeadIntro = dynamic(() =>
	import('components/page/Support/SupportHeadIntro')
)
const SupportCovidBox = dynamic(() =>
	import('components/page/Support/SupportCovidBox')
)
const SupportCategoryBox = dynamic(() =>
	import('components/page/Support/SupportCategoryBox')
)
const SupportNewHead = dynamic(() =>
	import('components/page/Support/SupportNewHead')
)
const ProductsCategoriesWithSearch = dynamic(() =>
	import('components/page/Support/ProductsCategoriesWithSearch')
)
const ProductsSupportOptions = dynamic(() =>
	import('components/page/Support/ProductsSupportOptions')
)
const SupportNeedAssistance = dynamic(() =>
	import('components/page/Support/SupportNeedAssistance')
)
const SupportNewProducts = dynamic(() =>
	import('components/page/Support/SupportNewProducts')
)
const SupportNewHeadV2 = dynamic(() =>
	import('components/page/Support/SupportNewHeadV2')
)
const SupportNeedMoreWithButton = dynamic(() =>
	import('components/page/Support/SupportNeedMoreWithButton')
)
const RegisterHead = dynamic(() =>
	import('components/page/Register/RegisterHead')
)
const RegisterForm = dynamic(() =>
	import('components/page/Register/RegisterForm')
)
const FAQhead = dynamic(() => import('components/page/FAQ/FAQhead'))
const FAQContentBox = dynamic(() => import('components/page/FAQ/FAQContentBox'))
const FAQDescriptionWithTwoBox = dynamic(() =>
	import('components/page/FAQ/FAQDescriptionWithTwoBox')
)
const ContactUsHead = dynamic(() =>
	import('components/page/ContactUs/ContactUsHead')
)
const ContactUsChat = dynamic(() =>
	import('components/page/ContactUs/ContactUsChat')
)
const ContactUsForm = dynamic(() =>
	import('components/page/ContactUs/ContactUsForm')
)
const ContactUsNewHead = dynamic(() =>
	import('components/page/ContactUs/ContactUsNewHead')
)
const ContactUsNewForm = dynamic(() =>
	import('components/page/ContactUs/ContactUsNewForm')
)
const ContactUsPhoneUs = dynamic(() =>
	import('components/page/ContactUs/ContactUsPhoneUs')
)
const ContactUsAboutHisense = dynamic(() =>
	import('components/page/ContactUs/ContactUsAboutHisense')
)
const CompanyHeaderIntro = dynamic(() =>
	import('components/page/Company/CompanyHeaderIntro')
)
const CompanyNavBar = dynamic(() =>
	import('components/page/Company/CompanyNavBar')
)
const CompanyInfo = dynamic(() => import('components/page/Company/CompanyInfo'))
const CompanySubmenu = dynamic(() =>
	import('components/page/Company/CompanySubmenu')
)
const CommercialIntro = dynamic(() =>
	import('components/page/Commercial/CommercialIntro')
)
const CommercialTowImageBox = dynamic(() =>
	import('components/page/Commercial/CommercialTowImageBox')
)
const CommercialBecomeAPartner = dynamic(() =>
	import('components/page/Commercial/CommercialBecomeAPartner')
)
const TVAndAudioHead = dynamic(() =>
	import('components/page/TvAndAudio/TVAndAudioHead')
)
const TVAndAudioTvShopBox = dynamic(() =>
	import('components/page/TvAndAudio/TVAndAudioTvShopBox')
)
const TVAndAudioIntro = dynamic(() =>
	import('components/page/TvAndAudio/TVAndAudioIntro')
)
const TVAndAudioLaserIntro = dynamic(() =>
	import('components/page/TvAndAudio/TVAndAudioLaserIntro')
)
const TVAndAudioSmartChoice = dynamic(() =>
	import('components/page/TvAndAudio/TVAndAudioSmartChoice')
)
const TVAndAudioFindHisense = dynamic(() =>
	import('components/page/TvAndAudio/TVAndAudioFindHisense')
)
const TVAndAudioFindProduct = dynamic(() =>
	import('components/page/TvAndAudio/TVAndAudioFindProduct')
)
const UHDIntro = dynamic(() => import('components/page/UHD/UHDIntro'))
const UHDNewsBox = dynamic(() => import('components/page/UHD/UHDNewsBox'))
const UHDAbilityBox = dynamic(() => import('components/page/UHD/UHDAbilityBox'))
const UHDFindTv = dynamic(() => import('components/page/UHD/UHDFindTv'))
const ULEDHead = dynamic(() => import('components/page/ULED/ULEDHead'))
const ULEDProducts = dynamic(() => import('components/page/ULED/ULEDProducts'))
const ULEDImageAndTextItem = dynamic(() =>
	import('components/page/ULED/ULEDImageAndTextItem')
)
const ULEDTextBox = dynamic(() => import('components/page/ULED/ULEDTextBox'))
const ULEDImageBoxWithBtn = dynamic(() =>
	import('components/page/ULED/ULEDImageBoxWithBtn')
)
const ULEDAllTech = dynamic(() => import('components/page/ULED/ULEDAllTech'))
const ULEDImageAndTextBox = dynamic(() =>
	import('components/page/ULED/ULEDImageAndTextBox')
)
const ULEDGreatTvTextBox = dynamic(() =>
	import('components/page/ULED/ULEDGreatTvTextBox')
)
const LaserHead = dynamic(() => import('components/page/Laser/LaserHead'))
const LaserImageAndTextBox = dynamic(() =>
	import('components/page/Laser/LaserImageAndTextBox')
)
const LaserTitleAndSubTitleBox = dynamic(() =>
	import('components/page/Laser/LaserTitleAndSubTitleBox')
)
const LaserFinedWithImage = dynamic(() =>
	import('components/page/Laser/LaserFinedWithImage')
)
const DishwashersHead = dynamic(() =>
	import('components/page/Dishwashers/DishwashersHead')
)
const ProductSupportInfo = dynamic(() =>
	import('components/page/ProductSupport/ProductSupportInfo')
)
const ProductSupportLinks = dynamic(() =>
	import('components/page/ProductSupport/ProductSupportLinks')
)
const ProductSupportNewHead = dynamic(() =>
	import('components/page/ProductSupport/ProductSupportNewHead')
)
const ProductSupportNavBar = dynamic(() =>
	import('components/page/ProductSupport/ProductSupportNavBar')
)
const ProductSupportVideoBox = dynamic(() =>
	import('components/page/ProductSupport/ProductSupportVideoBox')
)
const ProductSupportFAQ = dynamic(() =>
	import('components/page/ProductSupport/ProductSupportFAQ')
)
const ProductSupportRegister = dynamic(() =>
	import('components/page/ProductSupport/ProductSupportRegister')
)
const ProductSupportReplacement = dynamic(() =>
	import('components/page/ProductSupport/ProductSupportReplacement')
)
const HomeApplianceFeatures = dynamic(() =>
	import('components/page/HomeAppliances/HomeApplianceFeatures')
)
const HomeApplianceQA = dynamic(() =>
	import('components/page/HomeAppliances/HomeApplianceQA')
)
const HomeApplianceTextBoxWithImage = dynamic(() =>
	import('components/page/HomeAppliances/HomeApplianceTextBoxWithImage')
)
const HomeApplianceTextBox = dynamic(() =>
	import('components/page/HomeAppliances/HomeApplianceTextBox')
)
const HomeApplianceImageWithBackground = dynamic(() =>
	import('components/page/HomeAppliances/HomeApplianceImageWithBackground')
)
const CESHomeNavBar = dynamic(() =>
	import('components/page/CES/HomeApplication/CESHomeNavBar')
)
const CESHomeImageAndText = dynamic(() =>
	import('components/page/CES/HomeApplication/CESHomeImageAndText')
)
const CESLaserLearnMore = dynamic(() =>
	import('components/page/CES/Laster/CESLaserLearnMore')
)
const ImageBoxWithPaddingAndBgBlack = dynamic(() =>
	import('components/page/CES/Laster/ImageBoxWithPaddingAndBgBlack')
)
const CEOLaserLikeBox = dynamic(() =>
	import('components/page/CES/Laster/CEOLasterLikeBox')
)
const MoreTvHead = dynamic(() => import('components/page/MoreTv/MoreTvHead'))
const MoreTvBox = dynamic(() => import('components/page/MoreTv/MoreTvBox'))
const MoreTvVideoBox = dynamic(() =>
	import('components/page/MoreTv/MoreTvVideoBox')
)
const MoreTvAmericaBox = dynamic(() =>
	import('components/page/MoreTv/MoreTvAmericaBox')
)
const MoreTvLessTalk = dynamic(() =>
	import('components/page/MoreTv/MoreTvLessTalk')
)
const MoreTvHisensePromise = dynamic(() =>
	import('components/page/MoreTv/MoreTvHisensePromise')
)
const MoreTvGrabSlider = dynamic(() =>
	import('components/page/MoreTv/MoreTvGrabSlider')
)
const MoreTvLessTalkForm = dynamic(() =>
	import('components/page/MoreTv/MoreTvLessTalkForm')
)
const MoreTvExperts = dynamic(() =>
	import('components/page/MoreTv/MoreTvExperts')
)
const MoreTVNewItemsBox = dynamic(() =>
	import('components/page/MoreTv/MoreTvNewItemsBox')
)
const MoreTVNewHisensePromise = dynamic(() =>
	import('components/page/MoreTv/MoreTvNewHisensePromise')
)
const BlogListHead = dynamic(() =>
	import('components/page/BlogList/BlogListHead')
)
const BlogListSearchBox = dynamic(() =>
	import('components/page/BlogList/BlogListSearchBox')
)
const BlogListReadArticleBox = dynamic(() =>
	import('components/page/BlogList/BlogListReadArticleBox')
)
const BlogListLittleReadArticleBox = dynamic(() =>
	import('components/page/BlogList/BlogListLittleReadArticleBox')
)
const BlogListSoundBarItemsBox = dynamic(() =>
	import('components/page/BlogList/BlogListSoundBarItemsBox')
)
const BlogListWithBigTitleAndLittleItem = dynamic(() =>
	import('components/page/BlogList/BlogListWithBigTitleAndLittleItem')
)
const BlogDescriptionBox = dynamic(() =>
	import('components/page/Blog/BlogDescriptionBox')
)
const BlogImageGalleryBox = dynamic(() =>
	import('components/page/Blog/BlogImageGalleryBox')
)
const BlogImageAndTextBox = dynamic(() =>
	import('components/page/Blog/BlogImageAndTextBox')
)
const BlogVideoBox = dynamic(() => import('components/page/Blog/BlogVideoBox'))
const BlogTwoImage = dynamic(() => import('components/page/Blog/BlogTwoImage'))
const BlogSecondDescriptionBox = dynamic(() =>
	import('components/page/Blog/BlogSecondDescriptionBox')
)
const BlogEasySlider = dynamic(() =>
	import('components/page/Blog/BlogEasySlider')
)
const BlogBigImageAndTextBox = dynamic(() =>
	import('components/page/Blog/BlogBigImageAndTextBox')
)
const BlogDescriptionWithShare = dynamic(() =>
	import('components/page/Blog/BlogDescriptionWithShare')
)
const BlogHead = dynamic(() => import('components/page/Blog/BlogHead'))
const BlogCubeSlider = dynamic(() =>
	import('components/page/Blog/BlogCubeSlider')
)
const BlogMoreStories = dynamic(() =>
	import('components/page/Blog/BlogMoreStories')
)
const PDPProductInfoSliderAndText = dynamic(() =>
	import('components/page/PDP/PDPProductInfoSliderAndText')
)
const PDPNavBar = dynamic(() => import('components/page/PDP/PDPNavBar'))
const PDPImageAndInfoGrayBg = dynamic(() =>
	import('components/page/PDP/PDPImageAndInfoGrayBg')
)
const PDPVideoBox = dynamic(() => import('components/page/PDP/PDPVideoBox'))
const PDPImageAndInfoDarkBg = dynamic(() =>
	import('components/page/PDP/PDPImageAndInfoDarkBg')
)
const PDPImageAndInfoLightGrayBg = dynamic(() =>
	import('components/page/PDP/PDPImageAndInfoLightGrayBg')
)
const PDMImageAndInfoSilverBg = dynamic(() =>
	import('components/page/PDP/PDMImageAndInfoSilverBg')
)
const PDPTopFeatures = dynamic(() =>
	import('components/page/PDP/PDPTopFeatures')
)
const PDPDescriptionSliderWithDarkGray = dynamic(() =>
	import('components/page/PDP/PDPDescriptionSliderWithDarkGray')
)
const PDPTextAndLongImageBox = dynamic(() =>
	import('components/page/PDP/PDPTextAndLongImageBox')
)
const PDPReviewsAndAwards = dynamic(() =>
	import('components/page/PDP/PDPReviewsAndAwards')
)
const PDPReadyToBuyBox = dynamic(() =>
	import('components/page/PDP/PDPReadyToBuyBox')
)
const PDPChooseULEDTvBox = dynamic(() =>
	import('components/page/PDP/PDPChooseULEDTvBox')
)
const ListVideoPlayer = dynamic(() =>
	import('components/page/PDP/ListVideoPlayer')
)
const SponsorshipDescriptionGrayBg = dynamic(() =>
	import('components/page/Sponsorship/SponsorshipDescriptionGrayBg')
)
const SponsorshipVideoAndTextBox = dynamic(() =>
	import('components/page/Sponsorship/SponsorshipVideoAndTextBox')
)
const SponsorshipBigImageAndText = dynamic(() =>
	import('components/page/Sponsorship/SponsorshipBigImageAndText')
)
const SponsorshipImagesWithButton = dynamic(() =>
	import('components/page/Sponsorship/SponsorshipImagesWithButton')
)
const SponsorshipTitleBox = dynamic(() =>
	import('components/page/Sponsorship/SponsorshipTitleBox')
)
const SponsorshipTextGradient = dynamic(() =>
	import('components/page/Sponsorship/SponsorshipTextGradient')
)
const SponsorImageAndText = dynamic(() =>
	import('components/page/Sponsorship/SponsorImageAndText')
)
const SponsorImageAndLogo = dynamic(() =>
	import('components/page/Sponsorship/SponsorImageAndLogo')
)
const HeaderGoogleTv = dynamic(() =>
	import('components/page/Day100/HeaderGoogleTv')
)
const HeaderBanner = dynamic(() =>
	import('components/page/Day100/HeaderBanner')
)
const ClaimPrize = dynamic(() => import('components/page/Day100/ClaimPrize'))
const DoubleWarranty = dynamic(() =>
	import('components/page/Day100/DoubleWarranty')
)
const EligibleModels = dynamic(() =>
	import('components/page/Day100/EligibleModels')
)
const ExpertsAdv = dynamic(() => import('components/page/Day100/ExpertsAdv'))
const DigitalTrends = dynamic(() =>
	import('components/page/Day100/DigitalTrends')
)
const FeatureBadges = dynamic(() =>
	import('components/page/Day100/FeatureBadges')
)
const Guarantee = dynamic(() => import('components/page/Day100/Guarantee'))
const HeroBanner = dynamic(() => import('components/page/L9G/HeroBanner'))
const ScrollableVideo = dynamic(() =>
	import('components/page/L9G/ScrollableVideo')
)
const PureColor = dynamic(() => import('components/page/L9G/PureColor'))
const ColorFeature = dynamic(() => import('components/page/L9G/ColorFeature'))
const LumensOfBrightness = dynamic(() =>
	import('components/page/L9G/LumensOfBrightness')
)
const SmoothMotion = dynamic(() => import('components/page/L9G/SmoothMotion'))
const ScreenSize = dynamic(() => import('components/page/L9G/ScreenSize'))
const LightRejection = dynamic(() =>
	import('components/page/L9G/LightRejection')
)
const DolbyVision = dynamic(() => import('components/page/L9G/DolbyVision'))
const DolbyAtmos = dynamic(() => import('components/page/L9G/DolbyAtmos'))
const FineTouches = dynamic(() => import('components/page/L9G/FineTouches'))
const AndroidTv = dynamic(() => import('components/page/L9G/AndroidTv'))
const FeatureBlock = dynamic(() => import('components/page/L9G/FeatureBlock'))
const Awards = dynamic(() => import('components/page/L9G/Awards'))
const Comments = dynamic(() => import('components/page/L9G/Comments'))
const FAQs = dynamic(() => import('components/page/L9G/FAQs'))
const Specs = dynamic(() => import('components/page/L9G/Specs'))
const Resources = dynamic(() => import('components/page/L9G/Resources'))
const Retailers = dynamic(() => import('components/page/L9G/Retailers'))
const WhereToBuy = dynamic(() => import('components/page/L9G/WhereToBuy'))
const L9GProductDetailsBox = dynamic(() =>
	import('components/page/L9G/L9GProductDetailsBox')
)
const HomePageMBSlider = dynamic(() =>
	import('components/page/HomePageMB/HomePageMBSlider')
)
const HomePageMBProductsSlider = dynamic(() =>
	import('components/page/HomePageMB/HomePageMBProductsSlider')
)
const HomePageMBVideoPlayer = dynamic(() =>
	import('components/page/HomePageMB/HomePageMBVideoPlayer')
)
const HomePageMBTextedBoxes = dynamic(() =>
	import('components/page/HomePageMB/HomePageMBTextedBoxes')
)
const HomePageMBTextedBoxesItem = dynamic(() =>
	import('components/page/HomePageMB/HomePageMBTextedBoxesItem')
)
const HomePageMBDiscovery = dynamic(() =>
	import('components/page/HomePageMB/HomePageMBDiscovery')
)
const HomePageMBDiscoveryItem = dynamic(() =>
	import('components/page/HomePageMB/HomePageMBDiscoveryItem')
)
const BlockCategories = dynamic(() =>
	import('components/page/NewHomePage/BlockCategories')
)
const BlockTVHero = dynamic(() =>
	import('components/page/NewHomePage/BlockTVHero')
)
const BlockKitchenHero = dynamic(() =>
	import('components/page/NewHomePage/BlockKitchenHero')
)
const BlockFeatured = dynamic(() =>
	import('components/page/NewHomePage/BlockFeatured')
)
const BlockHero = dynamic(() => import('components/page/NewHomePage/BlockHero'))
const BlockSpotlight = dynamic(() =>
	import('components/page/NewHomePage/BlockSpotlight')
)
const BlockCards = dynamic(() =>
	import('components/page/NewHomePage/BlockCards')
)
const ExtendedWarrantyBanner = dynamic(() =>
	import('components/page/ExtendedWarranty/ExtendedWarrantyBanner')
)
const ExtendedWarrantyFAQ = dynamic(() =>
	import('components/page/ExtendedWarranty/ExtendedWarrantyFAQ')
)
const ExtendedWarrantyFeatureBlocks = dynamic(() =>
	import('components/page/ExtendedWarranty/ExtendedWarrantyFeatureBlocks')
)
const ExtendedWarrantyWizard = dynamic(() =>
	import('components/page/ExtendedWarranty/ExtendedWarrantyWizard')
)
const ExtendedWarrantyTextBlock = dynamic(() =>
	import('components/page/ExtendedWarranty/ExtendedWarrantyTextBlock')
)
const ExtendedWarrantyProductsSlider = dynamic(() =>
	import('components/page/ExtendedWarranty/ExtendedWarrantyProductsSlider')
)
const ExtendedWarrantyProductGrid = dynamic(() =>
	import('components/page/ExtendedWarranty/ExtendedWarrantyProductGrid')
)
const ExtendedWarrantyPaymentStatus = dynamic(() =>
	import('components/page/ExtendedWarranty/ExtendedWarrantyPaymentStatus')
)
const TelevisionsBlockBanner = dynamic(() =>
	import('components/page/Televisions/TelevisionsBlockBanner')
)
const TelevisionsBlockCards = dynamic(() =>
	import('components/page/Televisions/TelevisionsBlockCards')
)
const TelevisionsBlockHero = dynamic(() =>
	import('components/page/Televisions/TelevisionsBlockHero')
)
const TelevisionsBlockSpotlight = dynamic(() =>
	import('components/page/Televisions/TelevisionsBlockSpotlight')
)
const TelevisionsTvHero = dynamic(() =>
	import('components/page/Televisions/TelevisionsTvHero')
)
const PrivacyPolicyTextEditor = dynamic(() =>
	import('components/page/PrivacyPolicy/PrivacyPolicyTextEditor')
)
const UpgradeL9GForm = dynamic(() =>
	import('components/page/Upgrade/UpgradeL9GForm')
)
const BeyondLaserBanner = dynamic(() =>
	import('components/page/BeyondLaser/BeyondLaserBanner')
)
const BeyondLaserHeader = dynamic(() =>
	import('components/page/BeyondLaser/BeyondLaserHeader')
)
const BeyondLaserMomentsBlock = dynamic(() =>
	import('components/page/BeyondLaser/BeyondLaserMomentsBlock')
)
const BeyondLaserImageBlock = dynamic(() =>
	import('components/page/BeyondLaser/BeyondLaserImageBlock')
)
const BeyondLaserTextBlock = dynamic(() =>
	import('components/page/BeyondLaser/BeyondLaserTextBlock')
)
const BeyondLaserQuoteBlock = dynamic(() =>
	import('components/page/BeyondLaser/BeyondLaserQuoteBlock')
)
const BeyondLaserIframeBlock = dynamic(() =>
	import('components/page/BeyondLaser/BeyondLaserIframeBlock')
)
const BeyondLaserFooterBlock = dynamic(() =>
	import('components/page/BeyondLaser/BeyondLaserFooterBlock')
)
const BeyondLaserFlipDevice = dynamic(() =>
	import('components/page/BeyondLaser/BeyondLaserFlipDevice')
)
const GoogleTvBanner = dynamic(() =>
	import('components/page/GoogleTv/GoogleTvBanner')
)
const GoogleTvHero = dynamic(() =>
	import('components/page/GoogleTv/GoogleTvHero')
)
const GoogleTvProducts = dynamic(() =>
	import('components/page/GoogleTv/GoogleTvProducts')
)
const GoogleTvTops = dynamic(() =>
	import('components/page/GoogleTv/GoogleTvTops')
)
const GoogleTvTextBox = dynamic(() =>
	import('components/page/GoogleTv/GoogleTvTextBox')
)
const GoogleTvFeatureBlocks = dynamic(() =>
	import('components/page/GoogleTv/GoogleTvFeatureBlocks')
)
const Subscribe = dynamic(() => import('components/common/Subscribe'))
const Footer = dynamic(() => import('components/common/Footer'))

const Components = {
	ProductsBox: ProductsBox,
	TextEditor: TextEditor,
	ImageBox: ImageBox,
	LetsGetRealTextBox: LetsGetRealTextBox,
	Header: Header,
	NeedHelpBox: NeedHelpBox,
	BreadCrumb: BreadCrumb,
	IFrame: IFrame,
	UnauthorizedListCommon: UnauthorizedListCommon,
	OfferClaimForm: OfferClaimForm,
	SimpleImagesList: SimpleImagesList,
	PromoBanner: PromoBanner,
	AuthorizedRetailersBadge: AuthorizedRetailersBadge,
	AuthorizedRetailersFeatures: AuthorizedRetailersFeatures,
	AuthorizedRetailersNote: AuthorizedRetailersNote,
	AuthorizedRetailersLogos: AuthorizedRetailersLogos,
	UnauthorizedList: UnauthorizedList,
	LandingSlider: LandingSlider,
	LandingProductsBox: LandingProductsBox,
	LandingVideoPlayer: LandingVideoPlayer,
	ProductsBanner: ProductsBanner,
	ProductsGrid: ProductsGrid,
	ProductsBannerV2: ProductsBannerV2,
	ProductsGridV2: ProductsGridV2,
	ProductInfoAndSliderBox: ProductInfoAndSliderBox,
	ProductInfoAndSliderBoxV2: ProductInfoAndSliderBoxV2,
	ProductTextWithImageBox: ProductTextWithImageBox,
	RelatedProducts: RelatedProducts,
	ProductFeatureWithImage: ProductFeatureWithImage,
	CompareProduct: CompareProduct,
	ProductWhereToBuy: ProductWhereToBuy,
	ListImageBox: ListImageBox,
	ProductBigScreenTextsBox: ProductBigScreenTextsBox,
	ProductFeatureWithParagraph: ProductFeatureWithParagraph,
	ProductTextWithIcon: ProductTextWithIcon,
	ProductStaticContent: ProductStaticContent,
	ProductCategoryBox: ProductCategoryBox,
	ProductCategoryBoxV2: ProductCategoryBoxV2,
	ProductImageBox: ProductImageBox,
	ProductBigContent: ProductBigContent,
	ProductFeaturesWithIcon: ProductFeaturesWithIcon,
	ProductRelatedItemsBox: ProductRelatedItemsBox,
	ProductReviewBox: ProductReviewBox,
	ProductNewsBox: ProductNewsBox,
	ProductBottomImageBox: ProductBottomImageBox,
	ProductDetailsBox: ProductDetailsBox,
	ProductFineMeInStore: ProductFineMeInStore,
	ProductResourceBox: ProductResourceBox,
	ProductPackageHeader: ProductPackageHeader,
	ProductPackagesSlider: ProductPackagesSlider,
	SmartInfoHead: SmartInfoHead,
	ProductFeatureWithImageWithBTN: ProductFeatureWithImageWithBTN,
	SmartInfoTvsBox: SmartInfoTvsBox,
	SmartInfoTextBox: SmartInfoTextBox,
	SmartInfoTextAndImageBox: SmartInfoTextAndImageBox,
	SmartInfoInteractBox: SmartInfoInteractBox,
	SmartInfoFindHisense: SmartInfoFindHisense,
	SmartInfoBetterNewOrOldBox: SmartInfoBetterNewOrOldBox,
	SupportHeadIntro: SupportHeadIntro,
	SupportCovidBox: SupportCovidBox,
	SupportCategoryBox: SupportCategoryBox,
	SupportNewHead: SupportNewHead,
	ProductsCategoriesWithSearch: ProductsCategoriesWithSearch,
	ProductsSupportOptions: ProductsSupportOptions,
	SupportNeedAssistance: SupportNeedAssistance,
	SupportNewProducts: SupportNewProducts,
	SupportNewHeadV2: SupportNewHeadV2,
	SupportNeedMoreWithButton: SupportNeedMoreWithButton,
	RegisterHead: RegisterHead,
	RegisterForm: RegisterForm,
	FAQhead: FAQhead,
	FAQContentBox: FAQContentBox,
	FAQDescriptionWithTwoBox: FAQDescriptionWithTwoBox,
	ContactUsHead: ContactUsHead,
	ContactUsChat: ContactUsChat,
	ContactUsForm: ContactUsForm,
	ContactUsNewHead: ContactUsNewHead,
	ContactUsNewForm: ContactUsNewForm,
	ContactUsPhoneUs: ContactUsPhoneUs,
	ContactUsAboutHisense: ContactUsAboutHisense,
	CompanyHeaderIntro: CompanyHeaderIntro,
	CompanyNavBar: CompanyNavBar,
	CompanyInfo: CompanyInfo,
	CompanySubmenu: CompanySubmenu,
	CommercialIntro: CommercialIntro,
	CommercialTowImageBox: CommercialTowImageBox,
	CommercialBecomeAPartner: CommercialBecomeAPartner,
	TVAndAudioHead: TVAndAudioHead,
	TVAndAudioTvShopBox: TVAndAudioTvShopBox,
	TVAndAudioIntro: TVAndAudioIntro,
	TVAndAudioLaserIntro: TVAndAudioLaserIntro,
	TVAndAudioSmartChoice: TVAndAudioSmartChoice,
	TVAndAudioFindHisense: TVAndAudioFindHisense,
	TVAndAudioFindProduct: TVAndAudioFindProduct,
	UHDIntro: UHDIntro,
	UHDNewsBox: UHDNewsBox,
	UHDAbilityBox: UHDAbilityBox,
	UHDFindTv: UHDFindTv,
	ULEDHead: ULEDHead,
	ULEDProducts: ULEDProducts,
	ULEDImageAndTextItem: ULEDImageAndTextItem,
	ULEDTextBox: ULEDTextBox,
	ULEDImageBoxWithBtn: ULEDImageBoxWithBtn,
	ULEDAllTech: ULEDAllTech,
	ULEDImageAndTextBox: ULEDImageAndTextBox,
	ULEDGreatTvTextBox: ULEDGreatTvTextBox,
	LaserHead: LaserHead,
	LaserImageAndTextBox: LaserImageAndTextBox,
	LaserTitleAndSubTitleBox: LaserTitleAndSubTitleBox,
	LaserFinedWithImage: LaserFinedWithImage,
	DishwashersHead: DishwashersHead,
	ProductSupportInfo: ProductSupportInfo,
	ProductSupportLinks: ProductSupportLinks,
	ProductSupportNewHead: ProductSupportNewHead,
	ProductSupportNavBar: ProductSupportNavBar,
	ProductSupportVideoBox: ProductSupportVideoBox,
	ProductSupportFAQ: ProductSupportFAQ,
	ProductSupportRegister: ProductSupportRegister,
	ProductSupportReplacement: ProductSupportReplacement,
	HomeApplianceFeatures: HomeApplianceFeatures,
	HomeApplianceQA: HomeApplianceQA,
	HomeApplianceTextBoxWithImage: HomeApplianceTextBoxWithImage,
	HomeApplianceTextBox: HomeApplianceTextBox,
	HomeApplianceImageWithBackground: HomeApplianceImageWithBackground,
	CESHomeNavBar: CESHomeNavBar,
	CESHomeImageAndText: CESHomeImageAndText,
	CESLaserLearnMore: CESLaserLearnMore,
	ImageBoxWithPaddingAndBgBlack: ImageBoxWithPaddingAndBgBlack,
	CEOLaserLikeBox: CEOLaserLikeBox,
	MoreTvHead: MoreTvHead,
	MoreTvBox: MoreTvBox,
	MoreTvVideoBox: MoreTvVideoBox,
	MoreTvAmericaBox: MoreTvAmericaBox,
	MoreTvLessTalk: MoreTvLessTalk,
	MoreTvHisensePromise: MoreTvHisensePromise,
	MoreTvGrabSlider: MoreTvGrabSlider,
	MoreTvLessTalkForm: MoreTvLessTalkForm,
	MoreTvExperts: MoreTvExperts,
	MoreTVNewItemsBox: MoreTVNewItemsBox,
	MoreTVNewHisensePromise: MoreTVNewHisensePromise,
	BlogListHead: BlogListHead,
	BlogListSearchBox: BlogListSearchBox,
	BlogListReadArticleBox: BlogListReadArticleBox,
	BlogListLittleReadArticleBox: BlogListLittleReadArticleBox,
	BlogListSoundBarItemsBox: BlogListSoundBarItemsBox,
	BlogListWithBigTitleAndLittleItem: BlogListWithBigTitleAndLittleItem,
	BlogDescriptionBox: BlogDescriptionBox,
	BlogImageGalleryBox: BlogImageGalleryBox,
	BlogImageAndTextBox: BlogImageAndTextBox,
	BlogVideoBox: BlogVideoBox,
	BlogTwoImage: BlogTwoImage,
	BlogSecondDescriptionBox: BlogSecondDescriptionBox,
	BlogEasySlider: BlogEasySlider,
	BlogBigImageAndTextBox: BlogBigImageAndTextBox,
	BlogDescriptionWithShare: BlogDescriptionWithShare,
	BlogHead: BlogHead,
	BlogCubeSlider: BlogCubeSlider,
	BlogMoreStories: BlogMoreStories,
	PDPProductInfoSliderAndText: PDPProductInfoSliderAndText,
	PDPNavBar: PDPNavBar,
	PDPImageAndInfoGrayBg: PDPImageAndInfoGrayBg,
	PDPVideoBox: PDPVideoBox,
	PDPImageAndInfoDarkBg: PDPImageAndInfoDarkBg,
	PDPImageAndInfoLightGrayBg: PDPImageAndInfoLightGrayBg,
	PDMImageAndInfoSilverBg: PDMImageAndInfoSilverBg,
	PDPTopFeatures: PDPTopFeatures,
	PDPDescriptionSliderWithDarkGray: PDPDescriptionSliderWithDarkGray,
	PDPTextAndLongImageBox: PDPTextAndLongImageBox,
	PDPReviewsAndAwards: PDPReviewsAndAwards,
	PDPReadyToBuyBox: PDPReadyToBuyBox,
	PDPChooseULEDTvBox: PDPChooseULEDTvBox,
	ListVideoPlayer: ListVideoPlayer,
	SponsorshipDescriptionGrayBg: SponsorshipDescriptionGrayBg,
	SponsorshipVideoAndTextBox: SponsorshipVideoAndTextBox,
	SponsorshipBigImageAndText: SponsorshipBigImageAndText,
	SponsorshipImagesWithButton: SponsorshipImagesWithButton,
	SponsorshipTitleBox: SponsorshipTitleBox,
	SponsorshipTextGradient: SponsorshipTextGradient,
	SponsorImageAndText: SponsorImageAndText,
	SponsorImageAndLogo: SponsorImageAndLogo,
	HeaderGoogleTv: HeaderGoogleTv,
	HeaderBanner: HeaderBanner,
	ClaimPrize: ClaimPrize,
	DoubleWarranty: DoubleWarranty,
	EligibleModels: EligibleModels,
	ExpertsAdv: ExpertsAdv,
	DigitalTrends: DigitalTrends,
	FeatureBadges: FeatureBadges,
	Guarantee: Guarantee,
	HeroBanner: HeroBanner,
	ScrollableVideo: ScrollableVideo,
	PureColor: PureColor,
	ColorFeature: ColorFeature,
	LumensOfBrightness: LumensOfBrightness,
	SmoothMotion: SmoothMotion,
	ScreenSize: ScreenSize,
	LightRejection: LightRejection,
	DolbyVision: DolbyVision,
	DolbyAtmos: DolbyAtmos,
	FineTouches: FineTouches,
	AndroidTv: AndroidTv,
	FeatureBlock: FeatureBlock,
	Awards: Awards,
	Comments: Comments,
	FAQs: FAQs,
	Specs: Specs,
	Resources: Resources,
	Retailers: Retailers,
	WhereToBuy: WhereToBuy,
	L9GProductDetailsBox: L9GProductDetailsBox,
	HomePageMBSlider: HomePageMBSlider,
	HomePageMBProductsSlider: HomePageMBProductsSlider,
	HomePageMBVideoPlayer: HomePageMBVideoPlayer,
	HomePageMBTextedBoxes: HomePageMBTextedBoxes,
	HomePageMBTextedBoxesItem: HomePageMBTextedBoxesItem,
	HomePageMBDiscovery: HomePageMBDiscovery,
	HomePageMBDiscoveryItem: HomePageMBDiscoveryItem,
	BlockCategories: BlockCategories,
	BlockTVHero: BlockTVHero,
	BlockKitchenHero: BlockKitchenHero,
	BlockFeatured: BlockFeatured,
	BlockHero: BlockHero,
	BlockSpotlight: BlockSpotlight,
	BlockCards: BlockCards,
	ExtendedWarrantyBanner: ExtendedWarrantyBanner,
	ExtendedWarrantyFAQ: ExtendedWarrantyFAQ,
	ExtendedWarrantyFeatureBlocks: ExtendedWarrantyFeatureBlocks,
	ExtendedWarrantyWizard: ExtendedWarrantyWizard,
	ExtendedWarrantyTextBlock: ExtendedWarrantyTextBlock,
	ExtendedWarrantyProductsSlider: ExtendedWarrantyProductsSlider,
	ExtendedWarrantyProductGrid: ExtendedWarrantyProductGrid,
	ExtendedWarrantyPaymentStatus: ExtendedWarrantyPaymentStatus,
	TelevisionsBlockBanner: TelevisionsBlockBanner,
	TelevisionsBlockCards: TelevisionsBlockCards,
	TelevisionsBlockHero: TelevisionsBlockHero,
	TelevisionsBlockSpotlight: TelevisionsBlockSpotlight,
	TelevisionsTvHero: TelevisionsTvHero,
	PrivacyPolicyTextEditor: PrivacyPolicyTextEditor,
	UpgradeL9GForm: UpgradeL9GForm,
	BeyondLaserBanner: BeyondLaserBanner,
	BeyondLaserHeader: BeyondLaserHeader,
	BeyondLaserMomentsBlock: BeyondLaserMomentsBlock,
	BeyondLaserImageBlock: BeyondLaserImageBlock,
	BeyondLaserTextBlock: BeyondLaserTextBlock,
	BeyondLaserQuoteBlock: BeyondLaserQuoteBlock,
	BeyondLaserIframeBlock: BeyondLaserIframeBlock,
	BeyondLaserFooterBlock: BeyondLaserFooterBlock,
	BeyondLaserFlipDevice: BeyondLaserFlipDevice,
	GoogleTvBanner: GoogleTvBanner,
	GoogleTvHero: GoogleTvHero,
	GoogleTvProducts: GoogleTvProducts,
	GoogleTvTops: GoogleTvTops,
	GoogleTvTextBox: GoogleTvTextBox,
	GoogleTvFeatureBlocks: GoogleTvFeatureBlocks,
	Subscribe: Subscribe,
	Footer: Footer
}

export default (block, pim, notification) => {
	if (typeof Components[block.name] !== 'undefined') {
		return React.createElement(Components[block.name], {
			key: block.id,
			data: block,
			pim: pim,
			notification: notification
		})
	}
	// return React.createElement(
	// 	() => <div>The component {block.component} has not been created yet.</div>,
	// 	{ key: block._uid }
	// )
}
