import React from 'react'
import Link from 'next/link'

function ReplacementParts({ data }) {
    let { structure } = data

    function removePTags(string) {
        return string.replace(/<\/?p>/g, '');
    }

    const title = removePTags(structure?.title?.value)
    const subtitle = removePTags(structure?.subtitle?.value)


    const backgroundColor = () => {
        if (structure?.backgroundColor?.value) return structure?.backgroundColor?.value
        return '#232323'
    }
    return (
        <section className='support-replacement-container' id='#parts'>
            <div className='support-replacement-inner-container' style={{ backgroundColor: backgroundColor() }}>

                <div className='support-replacement-content'>
                    <div className='support-replacement-image-container'>
                        <img
                            src={structure?.icon?.src}
                            className='support-replacement-image'
                        />
                    </div>
                    <div className='support-replacement-text-container'>
                        <h3 className='support-replacement-title'>
                            {title}
                        </h3>
                        <p className='support-replacement-subtitle'>
                            {subtitle}
                        </p>

                        <Link
                            href={structure?.button?.value}
                            target={structure?.button?.target ? structure?.button?.target : '_self'}>
                            <a
                                className='support-replacement-button btn btn-outline-light rounded-5 py-1 px-2 py-md-2 px-md-5'
                                target={structure?.button?.target ? structure?.button?.target : '_self'}>
                                {structure?.button?.title}
                            </a>
                        </Link>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default ReplacementParts
