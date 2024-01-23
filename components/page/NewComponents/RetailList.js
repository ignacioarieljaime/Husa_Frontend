import React, { useEffect, useRef, useState } from 'react'
import RetailListPagination from './RetailListPagination'
import { useWindowSize } from 'hooks/useWindowSize'

const RetailList = ({ data }) => {
	const { structure } = data
	const [pagination, setPagination] = useState()
	const [translate, setTranslate] = useState(0)
	const wrapperRef = useRef()
	const containerRef = useRef()
	const [width] = useWindowSize()
	const list = {
		value: [
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			},
			{
				title: {
					value: '<p>Alaska</p>'
				},
				sublist: {
					value: [
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						},
						{
							title: {
								value: '<p>Best Buy</p>'
							},
							address: {
								value: `<p>Dimond mall</p>              
                                <p>800 E Dimond Blvd STE 100</p> 
                                <p>Anchorage, AK 99515</p>`
							}
						}
					]
				}
			}
			// {
			// 	title: {
			// 		value: '<p>Alaska</p>'
			// 	},
			// 	sublist: {
			// 		value: [
			// 			{
			// 				title: {
			// 					value: '<p>Best Buy</p>'
			// 				},
			// 				address: {
			// 					value: `<p>Dimond mall</p>
			//                     <p>800 E Dimond Blvd STE 100</p>
			//                     <p>Anchorage, AK 99515</p>`
			// 				}
			// 			},
			// 			{
			// 				title: {
			// 					value: '<p>Best Buy</p>'
			// 				},
			// 				address: {
			// 					value: `<p>Dimond mall</p>
			//                     <p>800 E Dimond Blvd STE 100</p>
			//                     <p>Anchorage, AK 99515</p>`
			// 				}
			// 			},
			// 			{
			// 				title: {
			// 					value: '<p>Best Buy</p>'
			// 				},
			// 				address: {
			// 					value: `<p>Dimond mall</p>
			//                     <p>800 E Dimond Blvd STE 100</p>
			//                     <p>Anchorage, AK 99515</p>`
			// 				}
			// 			},
			// 			{
			// 				title: {
			// 					value: '<p>Best Buy</p>'
			// 				},
			// 				address: {
			// 					value: `<p>Dimond mall</p>
			//                     <p>800 E Dimond Blvd STE 100</p>
			//                     <p>Anchorage, AK 99515</p>`
			// 				}
			// 			}
			// 		]
			// 	}
			// }
		]
	}

	useEffect(() => {
		setPagination({
			current_page: 1,
			last_page: Math.ceil(
				wrapperRef?.current?.offsetWidth / containerRef?.current?.offsetWidth
			),
			per_page: 100
		})
	}, [])

	useEffect(() => {
		setPagination({
			current_page: 1,
			last_page: Math.ceil(
				wrapperRef?.current?.offsetWidth / containerRef?.current?.offsetWidth
			),
			per_page: 100
		})
	}, [wrapperRef, containerRef, width])

	return (
		<section>
			<div id={data?.name + data?.id} className='retail_list'>
				<div className='retail_list___content'>
					<h5
						className='retail_list___content___title'
						dangerouslySetInnerHTML={{ __html: structure.title.value }}></h5>
					<div ref={containerRef} className='retail_list___content___wrapper'>
						<ul
							ref={wrapperRef}
							style={{
								transform: `translateX(-${
									translate * containerRef?.current?.offsetWidth
								}px)`
							}}
							className='retail_list___content___wrapper___retailers'>
							{list.value.map((item, index) =>
								item.sublist.value.map((subitem, subindex) => (
									<li
										style={
											width > 1200
												? {
														width: containerRef?.current?.offsetWidth / 5 + 'px'
												  }
												: width > 700
												? {
														width: containerRef?.current?.offsetWidth / 3 + 'px'
												  }
												: {
														width: containerRef?.current?.offsetWidth + 'px'
												  }
										}
										className='retail_list___content___wrapper___retailers___item'
										key={index * 10 + subindex}>
										{subindex < 1 && (
											<h5
												className='retail_list___content___wrapper___retailers___item___title'
												dangerouslySetInnerHTML={{
													__html: item.title.value
												}}></h5>
										)}
										<div
											className='retail_list___content___wrapper___retailers___item___subtitem___title'
											dangerouslySetInnerHTML={{
												__html: subitem?.title?.value
											}}></div>
										<div
											className='retail_list___content___wrapper___retailers___item___subtitem___address'
											dangerouslySetInnerHTML={{
												__html: subitem?.address?.value
											}}></div>
									</li>
								))
							)}
						</ul>
					</div>
					<RetailListPagination
						translate={translate}
						pagination={pagination}
						handler={(_distance, _pagination) => {
							setTranslate(_distance)
							setPagination(_pagination)
						}}
					/>
				</div>
			</div>
		</section>
	)
}

export default RetailList
