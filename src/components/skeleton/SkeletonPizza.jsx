import React from 'react';
import ContentLoader from "react-content-loader"

const SkeletonPizza = () => {
    return (
        <>
            <ContentLoader
                speed={2}
                width={280}
                height={459}
                viewBox="0 0 280 459"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="20" y="0" rx="500" ry="500" width="233" height="241" />
                <rect x="0" y="259" rx="16" ry="16" width="280" height="32" />
                <rect x="3" y="319" rx="42" ry="42" width="280" height="85" />
                <rect x="3" y="424" rx="15" ry="15" width="89" height="29" />
                <rect x="131" y="420" rx="15" ry="15" width="150" height="35" />
            </ContentLoader>
        </>
    );
};

export default SkeletonPizza;