import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        rtl
        className="tatoo"
        speed={2}
        width={294}
        height={374}
        viewBox="0 10 284 374"
        backgroundColor="#bfbbbb"
        foregroundColor="#ecebeb"
    >
    <rect x="0" y="9" rx="0" ry="0" width="294" height="374" />
    <rect x="32" y="270" rx="0" ry="0" width="146" height="51" />
    </ContentLoader>
)
export default Skeleton