import styled from "styled-components";
import { SubText } from "./Home";

const Title = styled.div`
    color: #333;
    font-size: 13px;
    text-align: center;
    padding: 5px;
    font-weight: 500;
`;
const GiftWrapper = styled.div`
    text-align: center;
    .GF_01 {
        width: 250px;
        height: 250px;
        object-fit: cover;s
    }
`;

export const Gift_1 = () => {
    return (
        <GiftWrapper>
            <Title>Ôi không! Đây lại là một món quà bí ẩn. 😭</Title>
            <img src={"me/IMG_4574.JPG"} className="GF_01" alt="GF_01" />
            <SubText>
                {`vợ yêu dấu, a  muốn gửi tặng e món quà nhỏ này kèm lời nhắn. Chúc vợ yêu luôn vui vẻ, luôn hạnh phục và ngày càng xinh đẹp, học tập tốt , hoàn thành được những dự định của e để về với a nha. Tuy anh không thể đưa món quà này tận tay vợ nhưng nó duy nhất chỉ dành cho vợ thôi. Tết về anh trao tận nơi nha.kkk 😊
`}
            </SubText>
        </GiftWrapper>
    );
}