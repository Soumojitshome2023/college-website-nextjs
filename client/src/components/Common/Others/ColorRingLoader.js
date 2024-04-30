import React from 'react';
import { ColorRing } from 'react-loader-spinner';


// ===================== Color Ring Loader =====================
export default function ColorRingLoader() {

    return (
        <ColorRing
            visible={true}
            height="40"
            width="40"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperclassName="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    )
}

// ===============================================================