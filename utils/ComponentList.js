const { BlogComponents } = require('./components/BlogComponents')
const { BlogListComponents } = require('./components/BlogListComponents')
const { CesComponents } = require('./components/CesComponents')
const { CommercialComponents } = require('./components/CommercialComponents')
const { CommonComponents } = require('./components/CommonComponents')
const { CompanyComponents } = require('./components/CompanyComponents')
const { ContactUsComponents } = require('./components/ContactUsComponents')
const { DishwasherComponents } = require('./components/DishwasherComponents')
const { FaqComponents } = require('./components/FaqComponents')
const { LandingComponents } = require('./components/LandingComponents')
const { LasterComponents } = require('./components/LasterComponents')
const { PdpComponents } = require('./components/PdpComponents')
const { ProductComponent } = require('./components/ProductComponents')
const { ProductsComponents } = require('./components/ProductsComponents')
const { ProductSupportComponents } = require('./components/ProductSupport')
const { RegisterComponents } = require('./components/RegisterComponents')
const { SmartPageComponents } = require('./components/SmartPageComponents')
const { SponsorComponents } = require('./components/SponsorshipComponents')
const { SupportComponents } = require('./components/SupportComponents')
const { TvAndAudioComponents } = require('./components/TvAndAudioComponents')
const { UhdComponents } = require('./components/UhdComponents')
const { UledComponents } = require('./components/UledComponents')
const { MoreTvComponents } = require('./components/MoreTvComponents')
const { Day100Components } = require('./components/Day100Components')
const { L9GComponents } = require('./components/L9GComponents')
const { NewHomePageComponents } = require('./components/NewHomePage')

module.exports.ComponentList = [
	...CommonComponents,
	...LandingComponents,
	...ProductsComponents,
	...ProductComponent,
	...SmartPageComponents,
	...SupportComponents,
	...RegisterComponents,
	...FaqComponents,
	...ContactUsComponents,
	...CompanyComponents,
	...CommercialComponents,
	...TvAndAudioComponents,
	...UhdComponents,
	...UledComponents,
	...LasterComponents,
	...DishwasherComponents,
	...ProductSupportComponents,
	...CesComponents,
	...MoreTvComponents,
	...BlogListComponents,
	...BlogComponents,
	...PdpComponents,
	...SponsorComponents,
	...Day100Components,
	...L9GComponents,
	...NewHomePageComponents
]
