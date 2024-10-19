import { useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { ConfirmDialog } from "./ConfirmDialog";
import { NoChoiceLeft } from "./NoChoiceLeft";
import { SecretGif } from "./SecretGif";

const HomeWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    padding-bottom: 20px;
`;

const Text = styled.div`
    color: #BF4F74;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`;
export const SubText = styled.div`
    color: #333;
    font-size: 13px;
    text-align: center;
    font-style: italic;
    padding: 5px;
`;

const CardListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
`;
const HeaderWrapper = styled.div`
    padding: 20px;
`;

const ButtonWrapper = styled.div`
    background: #fff;
    color: #333;
    width: 90px;
    text-align: center;
    border-radius: 4px;
    padding: 5px;
    margin: 10px auto;
    font-size: 12px;
`;

const cardList = [
    {
        id: "1",
        url: "me/IMG_4512.JPG",
        title: "1. ck nhìn thẳng"
    },
    {
        id: "2",
        url: "me/IMG_4513.JPG",
        title: "2. ck nhìn nghiêng trái"
    },
    {
        id: "3",
        url: "me/IMG_4514.JPG",
        title: "3. ck mặt đần"
    },
    {
        id: "4",
        url: "me/IMG_4516.JPG",
        title: "4. ck nghiêng phải"
    },
    {
        id: "5",
        url: "me/IMG_4545.JPG",
        title: "5. ck giả vờ"
    },
    {
        id: "6",
        url: "me/IMG_4558.JPG",
        title: "6. ck ăn mì"
    },
];
export const Home = () => {
    const [selectedId, setSelectedId] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isOk, setIsOk] = useState(false);

    const onCardClick = (id: string) => {
        setSelectedId(id);
        setIsOpen(true);
    };

    const handleBack = () => {
        setSelectedId("");
        setIsOk(false);
    };

    const handleOk = () => {
        setIsOk(true);
        setIsOpen(false);
    };
    const handleCancel = () => {
        setIsOpen(false);

    };
    const endedSession = localStorage.getItem("END_SESSION");

    return (
        <HomeWrapper>
            <HeaderWrapper>
                <Text>Chào vợ yêu 😍</Text>
                <SubText>Trò chơi nhỏ này mang tên "Món quà bí ẩn". Vk được chọn duy nhất <b>một lần</b>. Vk hãy ấn vào ảnh để xem có gì bí ẩn bên trong nhé.</SubText>
            </HeaderWrapper>
            {
                endedSession && (
                    <NoChoiceLeft />
                )
            }
            {
                !isOk && !endedSession && (
                    <CardListWrapper>
                        {
                            cardList.map(item => (
                                <Card key={item.id} url={item.url} title={item.title} onClick={() => onCardClick(item.id)} />
                            ))
                        }
                    </CardListWrapper>
                )
            }
            {
                isOk && !endedSession  && <SecretGif id={selectedId} />
            }
            {
                selectedId && isOk && !endedSession  && (
                    <ButtonWrapper onClick={handleBack}>Quay lại</ButtonWrapper>
                )
            }
            <ConfirmDialog isOpen={isOpen} handleConfirm={handleOk} handleCancel={handleCancel} />
        </HomeWrapper>
    );
}