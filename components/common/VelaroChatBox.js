import Head from 'next/head'
import React, { useState, useEffect } from 'react'

const customCss = '.velaro-custom-launcher-frame{display: inline-block !important}'

export default function VelaroChatBox() {
	return (
		<>
			<Head>
				<style>{customCss}</style>
			</Head>
		</>
	)
}
