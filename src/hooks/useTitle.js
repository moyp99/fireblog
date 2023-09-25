import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - Fireblog`;
    }, [title]);

  return null;
}