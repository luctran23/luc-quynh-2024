import styled from "styled-components";

type CardProps = {
    url: string;
    title: string;
    onClick: (id: string) => void;
}

const CardWrapper = styled.div`
    width: 150px;
    text-align: center;
    img {
        width: 150px;
        height: 150px;
        object-fit: cover;
    }
`;
const CardTitle = styled.div`
    font-size: 12px;
    color: #BF4F74;
    font-weight: 500;
`;

export const Card: React.FC<CardProps> = ({ url, title, onClick }) => {
    return (
        <CardWrapper onClick={onClick}>
            <img src={url} className="GF_01" alt="GF_01" />
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    );
}