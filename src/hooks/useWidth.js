import { useEffect, useState } from "react"

const useWidth = () => {
    const [widht, setWidth] = useState(window.innerWidth);
    
    const handleWidth = (val) => {
        setWidth(val);
    }
    
    useEffect(() => {
        
        window.addEventListener('resize', () => handleWidth(window.innerWidth));
        
        return () => window.removeEventListener('resize', handleWidth);
        
    }, []);
    
    return widht;
}

export default useWidth;