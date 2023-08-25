import React from "react";
import { useEffect } from "react";

export default function useClick(ref, handler) {
    useEffect(() => {
        const eventListner = (e) => {
            if (ref.current || ref.current.contains(e.target)) {
                return
            }
            handler(e);
        }
            document.addEventListener('mousedown', eventListner);
            return()=>{ //컴포넌트가 언마운트 시 이벤트 없애기
                document.removeEventListener('mousedown', eventListner);
            }
        
    }, [ref, handler])
}