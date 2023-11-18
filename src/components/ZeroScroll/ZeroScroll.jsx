import React from 'react'
import { useEffect } from 'react';

export const ZeroScroll = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутить вверх при монтировании компонента
    }, []);
}
