import { useEffect } from "react";
import { Gift_1 } from "./Gift_1";

type SecretGifProps = {
    id: string;
}
export const SecretGif: React.FC<SecretGifProps> = ({ id }) => {
    if (!id) {
        return <></>;
    }
    useEffect(() => {
        localStorage.setItem("END_SESSION", "end");
    }, []);

    switch (id) {
        case "1":
            return <Gift_1 />
        case "2":
            return <Gift_1 />
        case "3":
            return <Gift_1 />
        case "4":
            return <Gift_1 />
        case "5":
            return <Gift_1 />
        case "6":
            return <Gift_1 />
        default:
            return <></>;
    }
    return <></>;
}