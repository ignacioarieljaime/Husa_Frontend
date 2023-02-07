import Head from 'next/head'
import React, { useState, useEffect } from 'react'


export default function VelaroChatBox() {
const customCss = '.velaro-custom-launcher-frame{visibility: unset !important}'

	return (
		<>
			<Head>
				<style>{customCss}</style>
			</Head>
		</>
	)
}
